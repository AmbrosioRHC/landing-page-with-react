import React from "react";

//include images into your bundle

import NavBar from "./components/navbar"

import Jumbotron from "./components/jumbotron"

import Card from "./components/card"

import Footer from "./components/footer"


//create your first component
const App = () => {
  return (
    <>
      <div>
        <div>
          <NavBar />
        </div>
        <div >
          <Jumbotron />
          <div className="jumboCarta container mt-5 gap-3">
            <Card />
            <Card />
            <Card />
            <Card />

          </div>
        </div>
        <Footer />
        <div>
        </div>
      </div>
    </>
  );
};



export default App;
