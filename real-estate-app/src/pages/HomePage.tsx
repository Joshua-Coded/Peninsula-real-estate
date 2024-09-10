import AboutUs from "../components/AboutUs";
import ConnectSection from "../components/ConnectSection";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import React from "react";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const HomePage: React.FC = () => {
    return (
        <div>
            <Hero />
            <Properties />
            <AboutUs />
            <Services />
            <Testimonials />
            <ConnectSection />
        </div>
    );
};

export default HomePage;
