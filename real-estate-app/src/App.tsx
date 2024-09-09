import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import React from "react";
import Services from "./components/Services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Properties />
      <AboutUs />
      <Services />
    </div>
  );
}

export default App;
