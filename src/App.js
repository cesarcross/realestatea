import React from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar.component";
import Intro from "./components/Intro/Intro.component";
import Tour from "./components/Tour/Tour.component";
import Carousel from "./components/Carousel/Carousel.component";
import Description from "./components/Description/Description.component";
import City from "./components/City/City.component";
import Contact from "./components/Contact/Contact.component";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <Tour />
      <Carousel />
      <Description />
      <City />
      <Contact />
    </div>
  );
};

export default App;
