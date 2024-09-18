import React from "react";
import backgroundImage from "../images/house1.png";
import { FaEnvelope } from "react-icons/fa";

const ConnectSection: React.FC = () => {
    return (
        <div
            className="relative w-full bg-cover bg-center bg-no-repeat py-16 md:py-24"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>

            {/* Content container */}
            <div className="relative z-10 max-w-screen-lg mx-auto text-center space-y-4 md:space-y-6 px-4">
                {/* Heading */}
                <h2 className="text-white text-[20px] md:text-[24px] font-bold font-open-sans">
                    Stay Connected
                </h2>

                {/* Description */}
                <p className="text-white text-[14px] md:text-[16px] font-light font-open-sans">
                    Sign up for our newsletter to receive the latest updates on our properties and exclusive investment opportunities.
                </p>

                {/* Email input with Subscribe button */}
                <div className="flex justify-center items-center mt-6 md:mt-8">
                    <div className="flex items-center bg-white text-[#333333] rounded-full shadow-lg overflow-hidden w-full max-w-xs md:max-w-lg">
                        {/* Email icon */}
                        <span className="px-3">
                            <FaEnvelope />
                        </span>
                        {/* Input field */}
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full py-2 md:py-3 px-4 text-[14px] md:text-[16px] font-open-sans focus:outline-none"
                        />
                        {/* Subscribe button */}
                        <button className="bg-[#0059B2] text-white px-4 md:px-6 py-2 md:py-3 rounded-r-full hover:bg-white hover:text-[#0059B2] transition-all font-open-sans">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectSection;
