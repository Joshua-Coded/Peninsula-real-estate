import React from "react";
import backgroundImage from "../images/image3.avif";
import { FaEnvelope } from "react-icons/fa";

const ConnectSection: React.FC = () => {
    return (
        <div
            className="relative w-full bg-cover bg-center bg-no-repeat py-16"
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}

            <div className="relative z-10 max-w-screen-lg mx-auto text-center text-white space-y-6">
                {/* Heading */}
                <h2 className="text-2xl md:text-4xl font-bold">Stay Connected with Us</h2>
                <p className="text-lg md:text-xl">Subscribe to our newsletter for the latest updates and property deals.</p>

                {/* Email input with button */}
                <div className="flex justify-center items-center mt-8">
                    <div className="flex items-center bg-white text-gray-600 rounded-full shadow-lg overflow-hidden w-full max-w-xs md:max-w-lg">
                        <span className="px-3">
                            <FaEnvelope />
                        </span>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            className="w-full py-3 px-4 focus:outline-none"
                        />
                        <button className="bg-primary text-white px-6 py-3 rounded-r-full hover:bg-white hover:text-primary transition-all">
                            Subscribe
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ConnectSection;
