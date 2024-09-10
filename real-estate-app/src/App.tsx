import AboutUs from "./components/AboutUs";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";
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
      <Footer />
    </div>
  );
}

export default App;
