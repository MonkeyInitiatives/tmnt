import React, { useState } from "react";
// Importing in my components
import Characters from "./components/Characters";
import CharacterCharts from "./components/CharacterCharts";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"
import Home from "./components/Home"
import "./style.css"
function App() {
  //Because I am keeping track of the currentPage state, I need to set up state, 
  //the update/setter function, and a default value of state: "Characters"
  const [currentPage, setCurrentPage] = useState('Home');
  // The render page funciton loads at launch and renders in a component based on the state.
  const renderPage = () => {
    if (currentPage === 'Characters') {
      return <Characters />;
    }
    if (currentPage === 'Charts') {
      return <CharacterCharts />;
    }
    // Render Characters component as default.
    return <Home />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="container" style={{"position":"relative", "minHeight": "100vh"}}>
      {/* Notice down here NavBar appears on every "page". That's because it is in App.js, the file we 
      are currently inside right now! If you want the Footer or the search box to appear on evey page, you'll have to render them here. IMPORTANT! This might necessitate logic changes on the other 
      components, moving functions that handle change here (and then pass them in via props to those 
      components, or whatever. It isn't always just a simple change!) */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* This function runs at launch and when teh state changes, so clickick the navbar links 
      will change which component gets rendered right below. */}
      {renderPage()}
      {/* A nice little footer built off of a bootstrap card, made sticky-bottom */}
      <Footer/>
    </div>
  )
}
export default App;
