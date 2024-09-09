import React, { useState } from "react";

const Hero: React.FC = () => {
    const [activeButton, setActiveButton] = useState('');

    const handleClick = (buttonName: string) => {
        setActiveButton(buttonName);
    };

    return (
        <div
            id="home"
            className="h-screen bg-cover bg-center"
            style={{ backgroundImage: "url('/path-to-your-background-image.jpg')" }}
        >
            <div className="flex flex-col justify-center items-center h-full text-white text-center bg-black bg-opacity-40">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Real Estate</h1>
                <p className="text-lg md:text-2xl mb-8">Find your dream home with us</p>
                <div className="space-x-4">
                    <button
                        onClick={() => handleClick('explore')}
                        className={`py-2 px-4 rounded-md ${activeButton === 'explore' ? 'bg-primary' : 'bg-white text-primary'
                            }`}
                    >
                        Explore
                    </button>
                    <button
                        onClick={() => handleClick('contact')}
                        className={`py-2 px-4 rounded-md ${activeButton === 'contact' ? 'bg-primary' : 'bg-white text-primary'
                            }`}
                    >
                        Contact Us
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Hero;
