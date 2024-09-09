import React, { useState } from "react";
import hero from "../images/penin1.jpeg";

const Hero: React.FC = () => {
    const [activeButton, setActiveButton] = useState('');

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div
            id="home"
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${hero})` }} // Properly apply the image as background
        >
            <div className="flex flex-col justify-center items-center h-full text-white text-center bg-black bg-opacity-40">
                <h1 className="text-2xl md:text-4xl font-bold mb-4">Elevating Living Standard Globally</h1>
                <p className="text-sm md:text-lg mb-8">
                    Welcome to Peninsula Development Limited,
                    <br /> Your Gateway to Luxurious Living.
                </p>

                {/* Responsive Buttons */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
                    <button
                        onClick={() => handleClick('explore')}
                        className={`py-2 px-4 rounded-md ${activeButton === 'explore' ? 'bg-primary' : 'bg-white text-primary'}`}
                    >
                        Discover our Properties
                    </button>
                    <button
                        onClick={() => handleClick('contact')}
                        className={`py-2 px-4 rounded-md ${activeButton === 'contact' ? 'bg-primary' : 'bg-white text-primary'}`}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
