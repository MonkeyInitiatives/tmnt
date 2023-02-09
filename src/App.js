import React, { useState } from "react";
// Importing in my components
import Characters from "./components/Characters";
import CharacterProfile from "./components/CharacterProfile";
import NavBar from "./components/NavBar";
function App() {
  //Because I am keeping track of the currentPage state, I need to set up state, 
  //the update/setter function, and a default value of state: "Characters"
  const [currentPage, setCurrentPage] = useState('Characters');
  // The render page funciton loads at launch and renders in a component based on the state.
  const renderPage = () => {
    if (currentPage === 'Characters') {
      return <Characters />;
    }
    if (currentPage === 'Tom') {
      return <CharacterProfile />;
    }
    // Render Characters component as default.
    return <Characters />;
  };

  const handlePageChange = (page) => setCurrentPage(page);
  return (
    <div className="container">
      {/* Notice down here NavBar appears on every "page". That's because it is in App.js, the file we 
      are currently inside right now! If you want the Footer or the search box to appear on evey page, you'll have to render them here. IMPORTANT! This might necessitate logic changes on the other 
      components, moving functions that handle change here (and then pass them in via props to those 
      components, or whatever. It isn't always just a simple change!) */}
      <NavBar currentPage={currentPage} handlePageChange={handlePageChange} />
      {/* This function runs at launch and when teh state changes, so clickick the navbar links 
      will change which component gets rendered right below. */}
      {renderPage()}
    </div>
  )
}
export default App;
