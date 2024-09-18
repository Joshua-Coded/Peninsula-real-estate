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
            style={{
                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), 
                linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
                url(${hero})`
            }}
        >
            <div className="flex flex-col justify-center items-center h-full text-white text-center px-6">

                {/* Title */}
                <div className="max-w-lg md:max-w-xl lg:max-w-2xl space-y-6">
                    <h1 className="text-white text-[24px] md:text-[36px] font-bold font-open-sans leading-tight break-words">
                        Elevating Living Standards Globally
                    </h1>

                    {/* Subtitle */}
                    <p className="text-white text-[14px] md:text-[16px] font-light font-open-sans break-words">
                        Welcome to Peninsula Developments Limited,<br />
                        Your Gateway to Luxurious Living.
                    </p>
                </div>

                {/* Button Group */}
                <div className="flex flex-row space-x-4 mt-6 md:mt-8">

                    {/* Discover Properties Button */}
                    <Link to="/properties">
                        <button
                            onClick={() => handleClick('explore')}
                            className={`py-2 md:py-2 px-4 md:px-6 text-[14px] md:text-[16px] font-semibold font-open-sans text-white bg-[#0059B2] rounded-[8.58px] hover:bg-white hover:text-primary transition-all`}
                        >
                            Discover our Properties
                        </button>
                    </Link>

                    {/* Get In Touch Button */}
                    <Link to="/contact">
                        <button
                            onClick={() => handleClick('contact')}
                            className={`py-2 md:py-2 px-4 md:px-6 text-[14px] md:text-[16px] font-semibold font-open-sans text-white border-[1.72px] border-white rounded-[8.58px] hover:bg-primary hover:text-white transition-all`}
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
