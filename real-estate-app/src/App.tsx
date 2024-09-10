import AboutUs from "./components/AboutUs";
import ConnectSection from "./components/ConnectSection";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Properties from "./components/Properties";
import React from "react";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Properties />
      <AboutUs />
      <Services />
      <Testimonials />
      <ConnectSection />
    </div>
  );
}

export default App;
