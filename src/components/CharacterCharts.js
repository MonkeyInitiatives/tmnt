import React from 'react';
// Importing in some new react components vis npmjs.com
// https://www.npmjs.com/package/react-chartkick
// Make sure to do your npm installs!
import { BarChart, PieChart } from 'react-chartkick'
import 'chartkick/chart.js'
function CharacterCharts(props) {
    // This is my test data. You'd be using a USE_QUERY to get data from your database. 
    const testDada = [
        {
            name: "Leonardo",
            image: "./images/leo.webp",
            description: "Leads.",
            id: "1",
            turtle: true,
            human: false,
            hero: true,
            style: "careful",
            mood: "sad",
            food: "chinese"
        },
        {
            name: "Donatello",
            image: "./images/dono.webp",
            description: "Does machines.",
            id: "2",
            turtle: true,
            human: false,
            hero: true,
            style: "careful",
            mood: "happy",
            food: "tofu"
        },
        {
            name: "Raphael",
            image: "./images/raph.webp",
            description: "Cool, but rude.",
            id: "3",
            turtle: true,
            human: false,
            hero: true,
            style: "wild",
            mood: "sad",
            food: "tacos"
        },
        {
            name: "Michelangelo",
            image: "./images/mike.webp",
            description: "Party dude.",
            id: "4",
            turtle: true,
            human: false,
            hero: true,
            style: "wild",
            mood: "happy",
            food: "pizza"
        },
        ,
        {
            name: "Shredder",
            image: "./images/shredder.webp",
            description: "The Shred Head.",
            id: "5",
            turtle: false,
            human: true,
            hero: false,
            villain: true,
            style: "careful",
            mood: "angry",
            food: "turtle soup"
        },
        {
            name: "April",
            image: "./images/april.webp",
            description: "Reporter.",
            id: "6",
            turtle: false,
            human: true,
            hero: true,
            villain: false,
            style: "careful",
            mood: "happy",
            food: "chinese"
        },
        {
            name: "Casey Jones",
            image: "./images/casey.webp",
            description: "Slap shot.",
            id: "7",
            turtle: false,
            human: true,
            hero: true,
            villain: false,
            style: "wild",
            mood: "angry",
            food: "hot dogs"
        },
        {
            name: "Splinter",
            image: "./images/splinter.webp",
            description: "He made a funny.",
            id: "8",
            turtle: false,
            human: false,
            hero: true,
            villain: false,
            style: "careful",
            mood: "sad",
            food: "tofu"
        },
        {
            name: "Krang",
            image: "./images/krang.webp",
            description: "Big brain.",
            id: "9",
            turtle: false,
            human: false,
            hero: false,
            villain: true,
            style: "wild",
            mood: "angry",
            food: "turtle soup"
        },
        {
            name: "Baxter Stockman",
            image: "./images/baxter.webp",
            description: "Pretty fly (for a science guy).",
            id: "10",
            turtle: false,
            human: true,
            hero: false,
            villain: true,
            style: "careful",
            mood: "angry",
            food: "chinese"
        },
        {
            name: "Slash",
            image: "./images/slash.webp",
            description: "(I don't know who this is...).",
            id: "11",
            turtle: true,
            human: false,
            hero: false,
            villain: true,
            style: "wild",
            mood: "angry",
            food: "pizza"
        },
        {
            name: "Tokka",
            image: "./images/tokka.webp",
            description: "Yo, it's the green machine.",
            id: "12",
            turtle: true,
            human: false,
            hero: false,
            villain: true,
            style: "wild",
            mood: "angry",
            food: "tacos"
        },
        {
            name: "Rahzar",
            image: "./images/rahzar.webp",
            description: "Gonna rock the town without being seen.",
            id: "13",
            turtle: false,
            human: false,
            hero: false,
            villain: true,
            style: "wild",
            mood: "angry",
            food: "chinese"
        }
    ]
    // An array of only bad catches
    const badCatchData = [];
    // For every object in our testData array...
    for (let item in testDada) {
        // A tempArray before we send it to our goodCatchData array.
        let tempArray = [];
        // For each item in our object... 
        for (let key in testDada[item]) {
            console.log(key)
            const myKeys = ["turtle", "human", "hero", "villain", "style", "mood", "food"]
            // However, we don't want to push the actual true value, so only push weather, location, and lure to the temp array. 
            if (testDada[item][key] !== true && myKeys.includes(key)) {
                // We also don't want to send the actual false values, so a check within a check...
                if (testDada[item][key] !== false) {
                    tempArray.push(testDada[item][key])
                }
            }
        }
        // If we should push to the goodCatchData...

        for (let item in tempArray) {
            // Push that data to goodCatchData array.
            badCatchData.push(tempArray[item])
        }

    }
    // I found this code on StackOverflow. Basically, it creates a new array and counts the number of times something appeared in a previous array.
    // In other words, it counts all the times worms were added to goodCatchData, so you'll have something like this:
    // [["worm". 4], ["cloudy", 1], etc...]
    
    // This is me being very lazy and just copying the above. Don't do this. Make a function for repeated code. 
    const finalDataBad = Array.from(
        badCatchData.reduce((r, c) => r.set(c, (r.get(c) || 0) + 1), new Map()),
        (([key, count]) => ([key, count]))
    )

    return (
        <div className="row">
            <div className="col-xl" align="center">
                
                <BarChart xtitle="Character Info" data={finalDataBad} />
                
                <PieChart xtitle="Character Info" data={finalDataBad} donut={true} height="35vw" />
            </div>
        </div>
    )
}
export default CharacterCharts;