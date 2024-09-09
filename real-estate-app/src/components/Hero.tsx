import React, { useState } from "react";
import hero from "../images/penin1.jpeg";

const Hero: React.FC = () => {
    const [activeButton, setActiveButton] = useState('explore'); // Set the default active button to 'explore'

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div
            id="home"
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: `url(${hero})` }} // Properly apply the image as background
        >
            <div className="flex flex-col justify-center items-center h-full text-white text-center bg-black bg-opacity-40 px-6">
                {/* Ensure the content doesn't stretch too wide */}
                <div className="max-w-lg md:max-w-xl lg:max-w-2xl space-y-6"> {/* Added more space between elements */}
                    {/* Keep h1 font size as it is */}
                    <h1 className="text-lg md:text-2xl lg:text-3xl font-bold mb-6">Elevating Living Standard Globally</h1>
                    {/* Reduced paragraph font size */}
                    <p className="text-xs md:text-sm lg:text-base mb-8">
                        Welcome to Peninsula Development Limited,
                        <br /> Your Gateway to Luxurious Living.
                    </p>
                </div>

                {/* Responsive Buttons with extra margin-top */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-10 lg:space-x-12 mt-10"> {/* Added margin-top here */}
                    {/* First button has default primary background */}
                    <button
                        onClick={() => handleClick('explore')}
                        className={`py-3 px-6 rounded-md ${activeButton === 'explore' ? 'bg-primary text-white' : 'bg-white text-primary'} hover:bg-white hover:text-primary transition-all`}
                    >
                        Discover our Properties
                    </button>
                    <button
                        onClick={() => handleClick('contact')}
                        className={`py-3 px-6 rounded-md ${activeButton === 'contact' ? 'bg-primary text-white' : 'bg-white text-primary'} hover:bg-white hover:text-primary transition-all`}
                    >
                        Get In Touch
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
