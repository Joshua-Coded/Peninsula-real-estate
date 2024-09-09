import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import React from "react";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Properties />
      <AboutUs />
    </div>
  );
}

export default App;
