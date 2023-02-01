import React, { useState, useEffect } from 'react';
import Card from "./CharacterCard";
import Searchbar from "./Searchbar";
import Modal from "./Modal";
import Footer from "./Footer";
function Characters() {

  // My data of Ninja Turtle characters presented as an array of objects. 
  const originalData = [
    {
      name: "Leonardo",
      image: "./images/leo.webp",
      description: "Leads.",
      id: "1",
      turtle: true,
      human: false,
      hero: true,
      villain: false
    },
    {
      name: "Donatello",
      image: "./images/dono.webp",
      description: "Does machines.",
      id: "2",
      turtle: true,
      human: false,
      hero: true,
      villain: false
    },
    {
      name: "Raphael",
      image: "./images/raph.webp",
      description: "Cool, but rude.",
      id: "3",
      turtle: true,
      human: false,
      hero: true,
      villain: false
    },
    {
      name: "Michelangelo",
      image: "./images/mike.webp",
      description: "Party dude.",
      id: "4",
      turtle: true,
      human: false,
      hero: true,
      villain: false
    },
    {
      name: "Shredder",
      image: "./images/shredder.webp",
      description: "The Shred Head.",
      id: "5",
      turtle: false,
      human: true,
      hero: false,
      villain: true
    },
    {
      name: "April",
      image: "./images/april.webp",
      description: "Reporter.",
      id: "6",
      turtle: false,
      human: true,
      hero: true,
      villain: false
    },
    {
      name: "Casey Jones",
      image: "./images/casey.webp",
      description: "Slap shot.",
      id: "7",
      turtle: false,
      human: true,
      hero: true,
      villain: false
    },
    {
      name: "Splinter",
      image: "./images/splinter.webp",
      description: "He made a funny.",
      id: "8",
      turtle: false,
      human: false,
      hero: true,
      villain: false
    },
    {
      name: "Krang",
      image: "./images/krang.webp",
      description: "Big brain.",
      id: "9",
      turtle: false,
      human: false,
      hero: false,
      villain: true
    },
    {
      name: "Baxter Stockman",
      image: "./images/baxter.webp",
      description: "Pretty fly (for a science guy).",
      id: "10",
      turtle: false,
      human: true,
      hero: false,
      villain: true
    },
    {
      name: "Slash",
      image: "./images/slash.webp",
      description: "(I don't know who this is...).",
      id: "11",
      turtle: true,
      human: false,
      hero: false,
      villain: true
    },
    {
      name: "Tokka",
      image: "./images/tokka.webp",
      description: "Yo, it's the green machine.",
      id: "12",
      turtle: true,
      human: false,
      hero: false,
      villain: true
    },
    {
      name: "Rahzar",
      image: "./images/rahzar.webp",
      description: "Gonna rock the town without being seen.",
      id: "13",
      turtle: false,
      human: false,
      hero: false,
      villain: true
    }]

  // This is where we define our original state called filtered and our setFilter which
  // will update filtered when called. We also define the initial state of filtered
  // with our originalData. 
  const [filteredData, setFilter] = useState(originalData);
  // Default title of our site will be "Tom's Awesome Ninja Turtle Site!" (because the site is awesome!)
  const [title, setTitle] = useState("Tom's Awesome Ninja Turtle Site!");
  // A simple hook that updates the title of our site based on the filtering.
  useEffect(() => {
    document.title = `${title}`;
  });

  // A very simple set State to decide if a video should be shown or not.
  const [showVideo, setShowVideo] = useState("hidden");

  // Function that decides to show a video when clicked
  const handleShowVideo = () => {
    setShowVideo("visible")
  }

  // A function (that will get passed as a prop to the Searchbar component)
  // that filters my originalData array based on what is being typed in the
  // input field. At the end, we set the new myFilter filtered data to the 
  // filter state so only the correct characters render on the page.
  const handleSearchboxChange = (e) => {
    const myFilter = originalData.filter(character => {
      // If the search box is empty, just return all the characters.
      if (e.target.value === "") return originalData
      // We only return the character if the name includes what is being typed
      return character.name.toLowerCase().includes(e.target.value.toLowerCase())
    })
    // This is where we set the state of our new filtered data.
    setFilter(myFilter);
    // This is where we change the title of our site based on the search.
    setTitle(`Teenage Mutant Ninja ${e.target.value}`);
  }

  // A function (that will get passed as a prop to the Searchbar component)
  // that filters my originalData array based on what checkboxes are marked.
  // At the end, we set the new myFilter filtered data to the 
  // filter state so only the correct characters render on the page.
  const handleCheckboxChange = (e) => {
    // First, we get all the checkboxes
    const checkboxOptions = document.querySelectorAll(".form-check-input");
    // Second, we set up a dummy object that is going to contain our filter options
    let checkboxFilter = {};
    // A string that will be our new title.
    let newTitle = "";
    // This for-loop goes through each check box (all four of them)
    for (let i = 0; i < checkboxOptions.length; i++) {
      // Here we start to create the checkboxFilter object. Notice the [] being used.
      // This allows us to dynamically give the key names in the object. Also note
      // that .nextSibling.innerHTML is being used. This is because we want the keys
      // to be the text next to each checkbox ("Turtle", "Human", etc)
      checkboxFilter[checkboxOptions[i].nextSibling.innerHTML.toLowerCase()] = checkboxOptions[i].checked;
      // If a box is checked, add that value to the newTitle we will use a hook to update.
      if (checkboxOptions[i].checked) {
        newTitle += `${checkboxOptions[i].nextSibling.innerHTML}s `
      }
    }
    // an example of what checkboxFilter will look like if Turtle and Hero are checked
    // {
    //   turtle: true,
    //   human: false,
    //   hero: true,
    //   villain: false
    // }

    // This is the start of our filter.
    const myFilter = originalData.filter(function (character) {
      // Because we want to filter based on all the checkboxes marked, we have
      // a for-in loop to go through each option in our checkboxFilter object.
      for (let key in checkboxFilter) {
        // If the character doesn't match our filter (i.e. a character isn't a hero
        // but we checked for only heroes to be returned) then we return false
        // because that character does not match the criteria.
        if (character[key] !== checkboxFilter[key] && checkboxFilter[key] !== false) {
          return false;
        }
      }
      // If we made it to the end without hitting that return false, that means the character
      // matches the checkboxes we marked, so we can return the character to the myFilter array.
      return character;
    });
    // This is where we set the state of our new filtered data.
    setFilter(myFilter);
    // This is where we change the title of our site based on the search.
    setTitle(`Teenage Mutant Ninja ${newTitle}`);
  }

  return (
    <div className="row">
      {/* This is a very silly Modal that displays a video when the DO NOT PUSH button is pressed */}
      <div className="col-sm" align="center">
        <Modal visibility={showVideo} />
        <button className='btn btn-danger' onClick={handleShowVideo}>DO NOT PUSH</button>
      </div>
      {/* Notice that I made a searchbar component. Now if I want to use it in other pages all my code is centralized! */}
      {/* Also notice I am passing my two functions as props. This will allow the Searchbar to filter the data in that component */}
      <Searchbar handleCheckboxChange={handleCheckboxChange} handleSearchboxChange={handleSearchboxChange} />
      {/* Here is where we render each card. Notice a few things. First, it is mapping through the filtered data and not
        the originalData. That's because we set the filtered data as originalData initially with state, and because we want only 
        our filtered results to appear. This is how we can use JSX expressions to do neat things in react! */}
      {(filteredData.map(character => {
        return (
          // This is using bootstrap's row/col layout to make the page look pretty and responsive. 
          <div className="col-sm align-items-stretch" key={character.id}>
            {/* Here we send each character information to the card component so we can display their info. */}
            {/* Notice that I am sending them as props with the keys called name, image, and description */}
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
