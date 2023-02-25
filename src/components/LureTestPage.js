import React from 'react';
// Importing in some new react components vis npmjs.com
// https://www.npmjs.com/package/react-chartkick
// Make sure to do your npm installs!
import { BarChart, LineChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
function LureTestProfile(props) {
    // This is my test data. You'd be using a USE_QUERY to get data from your database. 
    const testDada = [
        {
            weather: "cloudy",
            location: "river",
            lure: "worm",
            catchQuality: true,
        },
        {
            weather: "cloudy",
            location: "lake",
            lure: "hook",
            catchQuality: false,
        },
        {
            weather: "sunny",
            location: "river",
            lure: "worm",
            catchQuality: true,
        },
        {
            weather: "sunny",
            location: "ocean",
            lure: "worm",
            catchQuality: true,
        },
        {
            weather: "rain",
            location: "pond",
            lure: "none",
            catchQuality: false,
        },
        {
            weather: "rain",
            location: "river",
            lure: "worm",
            catchQuality: true,
        },
        {
            weather: "cloudy",
            location: "lake",
            lure: "hook",
            catchQuality: false,
        },
    ]
    // An array of only good catches
    const goodCatchData = [];
    // An array of only bad catches
    const badCatchData = [];
    // For every object in our testData array...
    for (let item in testDada) {
        // A tempArray before we send it to our goodCatchData array.
        let tempArray = [];
        // A flag on if we should or should not push data to goodCatchData array.
        let shouldPush = false;
        // For each item in our object... 
        for (let key in testDada[item]) {
            // If the object's catchQuality is marked as true...
            if (testDada[item][key] === true) {
                // Change our flag to allow pushing it to goodCatchData array.
                shouldPush = true;
            }
            // However, we don't want to push the actual true value, so only push weather, location, and lure to the temp array. 
            if (testDada[item][key] !== true) {
                // We also don't want to send the actual false values, so a check within a check...
                if (testDada[item][key] !== false) {
                    tempArray.push(testDada[item][key])
                }
            }
        }
        // If we should push to the goodCatchData...
        if (shouldPush) {
            // For each item in the temp array...
            for (let item in tempArray) {
                // Push that data to goodCatchData array.
                goodCatchData.push(tempArray[item])
            }
        }
        // Else send them to the bad catches data.
        else{
            for (let item in tempArray) {
                // Push that data to goodCatchData array.
                badCatchData.push(tempArray[item])
            }
        }
    }
    // I found this code on StackOverflow. Basically, it creates a new array and counts the number of times something appeared in a previous array.
    // In other words, it counts all the times worms were added to goodCatchData, so you'll have something like this:
    // [["worm". 4], ["cloudy", 1], etc...]
    const finalDataGood = Array.from(
        goodCatchData.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()),
        (([key, count]) => ([key, count]))
    )
    // This is me being very lazy and just copying the above. Don't do this. Make a function for repeated code. 
    const finalDataBad = Array.from(
        badCatchData.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()),
        (([key, count]) => ([key, count]))
    )

    return (
        <div className="row">
            <div className="col-lg" align="center">
                <BarChart xtitle="Good catches" data={finalDataGood}  />
                <BarChart xtitle="Bad catches" data={finalDataBad}  />
                <PieChart xtitle="Good catches" data={finalDataGood}  />
                <PieChart xtitle="Bad catches" data={finalDataBad}  />
            </div>
        </div>
    )
}
export default LureTestProfile;