import AboutUs from "../components/AboutUs";
import ConnectSection from "../components/ConnectSection";
import Hero from "../components/Hero";
import Properties from "../components/Properties";
import React, { useEffect, useState } from "react";
import Services from "../components/Services";
import Testimonials from "../components/Testimonials";

const HomePage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);



    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Loading screen
    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 
                        border-primary border-t-transparent"></div>
                    <p className="text-primary font-medium">Loading...</p>
                </div>
            </div>
        );
    }
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
