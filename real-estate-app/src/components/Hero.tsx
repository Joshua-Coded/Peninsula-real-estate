import React, { useState } from "react";
import hero from "../images/penin1.jpeg";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    const [activeButton, setActiveButton] = useState('explore'); // Set the default active button to 'explore'

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div
            id="home"
            className="h-screen bg-cover bg-center font-poppins" // Use the Poppins font family globally in this section
            style={{ backgroundImage: `url(${hero})` }} // Properly apply the image as background
        >
            <div className="flex flex-col justify-center items-center h-full text-white text-center bg-black bg-opacity-40 px-6">
                {/* Ensure the content doesn't stretch too wide */}
                <div className="max-w-lg md:max-w-xl lg:max-w-2xl space-y-6">
                    {/* Responsive H1 with improved font size, boldness, and spacing for mobile */}
                    <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold tracking-wide mb-4 leading-tight md:leading-normal"> {/* Extra bold, added tracking for spacing */}
                        Elevating Living Standard Globally
                    </h1>
                    {/* Paragraph adjusted for mobile readability with better line-height and font weight */}
                    <p className="text-sm md:text-base lg:text-lg font-light leading-relaxed mb-6">
                        Welcome to Peninsula Development Limited,
                        <br /> Your Gateway to Luxurious Living.
                    </p>
                </div>

                {/* Responsive Buttons with extra margin-top */}
                <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6 lg:space-x-8 mt-8"> {/* Reduced margin between buttons */}
                    {/* First button has default primary background */}
                    <Link to="/properties">
                        <button
                            onClick={() => handleClick('explore')}
                            className={`py-3 px-8 rounded-md text-sm md:text-base font-medium tracking-wider ${activeButton === 'explore' ? 'bg-primary text-white' : 'bg-white text-primary'} hover:bg-white hover:text-primary transition-all`}
                        >
                            Discover our Properties
                        </button>
                    </Link>

                    <Link to="/contact">
                        <button
                            onClick={() => handleClick('contact')}
                            className={`py-3 px-8 rounded-md text-sm md:text-base font-medium tracking-wider ${activeButton === 'contact' ? 'bg-primary text-white' : 'bg-white text-primary'} hover:bg-white hover:text-primary transition-all`}
                        >
                            Get In Touch
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;
