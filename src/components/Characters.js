import React, { useState, useEffect } from 'react';
import Card from "./CharacterCard";
import Searchbar from "./Searchbar";
// import Modal from "./Modal";
import Footer from "./Footer";
function Characters() {

  // My data of Ninja Turtle characters presented as an array of objects. 
  // Eventually this will get replaced with CRUD to our/3rd apis. 
  const originalData = [
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
    }]

  // This is where we define our original state called filteredData and our setFilter which
  // will update filteredData when called. We also define the initial state of filteredData
  // with our originalData. 
  const [filteredData, setFilter] = useState(originalData);
  // Default title of our site will be "Tom's Awesome Ninja Turtle Site!" (because the site is awesome!)
  const [title, setTitle] = useState("Tom's Awesome Ninja Turtle Site!");
  // A simple hook that updates the title of our site based on the filtering.
  useEffect(() => {
    document.title = `${title}`;
  });

  // A very simple set State to decide if a video should be shown or not via CSS.
  const [showVideo, setShowVideo] = useState("hidden");

  // Function that decides to show a video when clicked
  const handleShowVideo = () => {
    if (showVideo === "hidden") {
      setShowVideo("visible")
    }
    else {
      setShowVideo("hidden");
    }
  }

  // A function (that will get passed as a prop to the Searchbar component)
  // that filters my originalData array based on what is being typed in the
  // input field. At the end, we set the new myFilter filtered data to the 
  // filter state so only the correct characters render on the page.
  const handleSearchboxChange = (e) => {
    const myFilter = originalData.filter(character => {
      // If the search box is empty, just return all the characters.
      if (e.target.value === "") return originalData
      // We only return the character if the name includes what is being typed.
      return character.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    // This is where we set the state of our new filtered data.
    setFilter(myFilter);
    // This is where we change the title of our site based on the search.
    setTitle(`Teenage Mutant Ninja ${e.target.value}`);
  }

  // New checkbox function for multiple filtering
  const handleCheckboxChangeNEW = (e) => {
    // Get all the checkboxes
    const checkboxOptions = document.querySelectorAll(".form-check-input");
    let checkboxFilter = {};
    // Create the object filter as before.
    for (let i = 0; i < checkboxOptions.length; i++) {
      const classList = checkboxOptions[i].classList;
      const myCategory = classList[classList.length - 1];
      if (checkboxOptions[i].classList.length > 1) {
        if (!checkboxFilter[myCategory.toLowerCase()]) {
          checkboxFilter[myCategory.toLowerCase()] = [];
          checkboxFilter[myCategory.toLowerCase()].push({ [checkboxOptions[i].nextSibling.innerHTML.toLowerCase()]: checkboxOptions[i].checked });
        }
        else {
          checkboxFilter[myCategory.toLowerCase()].push({ [checkboxOptions[i].nextSibling.innerHTML.toLowerCase()]: checkboxOptions[i].checked });
        }
      }
    }
    for (let i = 0; i < checkboxFilter.length; i++) {
      console.log(`step` + i)
      if (checkboxFilter[0] === true) {
        console.log(true)
      }
      else {
        console.log(false)
      }
    }
    //Begin the nightmare filter@
    const myFilter = originalData.filter(function (character) {
      //keep track of number of times a character passes the filter
      let counter = 0;
      // For each section "Style" or "Mood"
      for (let key in checkboxFilter) {
        console.log(checkboxFilter[key]) // array in Style section containing careful and wild
        // for each element in the the style array... 
        for (let index = 0; index < checkboxFilter[key].length; index++) {
          // getting our values and testing them
          let testing = checkboxFilter[key][index]
          console.log("What box was clicked? " + testing[character[key]])
          let isTheBoxChecked = testing[character[key]] === true
          console.log(isTheBoxChecked)
          console.log("What values are being compared? " + character[key] + " " + Object.keys(testing)[0])
          let doTheValuesMatch = character[key] == Object.keys(testing)[0]
          console.log(doTheValuesMatch)
          let cantBeUndefined = testing[character[key]] == null
          console.log("is the value undefined? " + cantBeUndefined)
          console.log(cantBeUndefined)
          // If statement that only increases the counter if a character passes each filter test
          if (!cantBeUndefined && isTheBoxChecked && doTheValuesMatch) {
            console.log("This character passes: " + character.name)
            counter++;
          }
        }
      }
      let numberChecked = 0;
      // These nested for loops go and checks if a box is true or false.
      // The first loop for the Style and Mood sections
      for (let current in checkboxFilter) {
        let option1 = checkboxFilter[current]
        // This loop then goes for each part in Style or Mood (i.e. careful, wild, happy, sad)
        for (let index = 0; index < option1.length; index++) {
          const element = option1[index];
          console.log(Object.values(element)[0])
          // If the box was checked, increase the counter. 
          if (Object.values(element)[0]) {
            numberChecked++
          }
        }
      }
      // If the number of boxes checked match the number of passes a character had, return the character as having passed the filter.
      if (numberChecked === counter) {
        return character;
      }

    });
    setFilter(myFilter);
  }




  return (
    <div className="row">
      {/* This is a very silly Modal that displays a video when the DO NOT PUSH button is pressed */}
      <div className="col-sm" align="center">
        {/* <Modal visibility={showVideo} /> */}
        {/* <button className='btn btn-danger' onClick={handleShowVideo}>DO NOT PUSH</button> */}
      </div>
      {/* Notice that I made a searchbar component. Now if I want to use it in other pages all my code is centralized! */}
      {/* Also notice I am passing my two functions as props. This will allow the Searchbar to filter the data in that component */}
      <Searchbar handleCheckboxChangNEW={handleCheckboxChangeNEW} handleSearchboxChange={handleSearchboxChange} />
      {/* Here is where we render each card. Notice a few things. First, it is mapping through the filteredData and not
        the originalData. That's because we set the filteredData as originalData initially with state, and because we want only 
        our filtered results to appear. This is how we can use JSX expressions to do neat things in react! */}
      {(filteredData.map(character => {
        return (
          // This is using bootstrap's row/col layout to make the page look pretty and responsive. 
          <div className="col-sm align-items-stretch" key={character.id}>
            {/* Here we send each character information to the card component so we can display their info. */}
            {/* Notice that I am sending them as props with the keys called name, image, and description. */}
            <Card name={character.name} image={character.image} description={character.description} />
          </div>
        )
      }))}
      {/* A nice little footer built off of a bootstrap card, made sticky-bottom */}
      <Footer />
    </div>
  );
}

export default Characters;
