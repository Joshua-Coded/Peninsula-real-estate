import React, { useState } from "react";
import hero from "../images/house1.png";
import { Link } from "react-router-dom";

const Hero: React.FC = () => {
    const [activeButton, setActiveButton] = useState('explore');

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div
            id="home"
            className="h-screen bg-cover bg-center font-open-sans"
            style={{ backgroundImage: `url(${hero})` }}
        >
            <div className="flex flex-col justify-center items-center h-full text-white text-center bg-black bg-opacity-40 px-6">
                {/* Ensure the content doesn't stretch too wide */}
                <div className="max-w-lg md:max-w-xl lg:max-w-2xl space-y-6">
                    {/* Responsive H1 with improved font size, boldness, and spacing for mobile */}
                    <h1 className="text-3xl md:text-[48px] font-bold tracking-wide mb-2 md:mb-4 leading-tight md:leading-normal">
                        Elevating Living Standard Globally
                    </h1>
                    {/* Paragraph adjusted for mobile readability with better line-height and font weight */}
                    <p className="text-xs md:text-base lg:text-lg font-light leading-relaxed mb-4 md:mb-6">
                        Welcome to Peninsula Development Limited,
                        <br /> Your Gateway to Luxurious Living.
                    </p>
                </div>

                {/* Responsive Buttons with smaller text and margins for mobile */}
                <div className="flex flex-row space-x-3 md:space-x-6 mt-[4vh]"> {/* Added margin-top of 10% */}
                    {/* First button with primary background by default */}
                    <Link to="/properties">
                        <button
                            onClick={() => handleClick('explore')}
                            className={`py-2 md:py-3 px-4 md:px-8 rounded-md text-xs md:text-[18px] font-open-sans font-bold tracking-wider bg-primary text-white hover:bg-white hover:text-primary transition-all`}
                        >
                            Discover our Properties
                        </button>
                    </Link>

                    {/* Second button with transparent background and white border by default */}
                    <Link to="/contact">
                        <button
                            onClick={() => handleClick('contact')}
                            className={`py-2 md:py-3 px-4 md:px-8 rounded-md text-xs md:text-[18px] font-open-sans font-bold tracking-wider bg-transparent border border-white text-white hover:bg-primary hover:text-white transition-all`}
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
