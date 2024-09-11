import React from "react";
import aboutImage1 from "../images/mission.png";
import aboutImage2 from "../images/house1.png";
import aboutImage3 from "../images/house2.png";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
    return (
        <div className="px-6 py-12 flex justify-center"> {/* Center the whole component */}
            <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center"> {/* Max width set to control content width */}

                {/* Left side - About us text, button, and image */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">About Peninsula Development</h2>
                    <p className="text-sm md:text-base leading-relaxed text-center md:text-left">
                        At Peninsula Development Limited, our mission is to elevate living standards globally through our carefully designed properties.
                        <br />
                        We are committed to delivering secure, sophisticated, and comfortable homes, tailored to meet the unique needs of families and individuals.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <Link to="/about"> {/* Link to the About Us Page */}
                            <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                                Learn More
                            </button>
                        </Link>
                    </div>

                    {/* Image below the button (Visible only on desktop) */}
                    <img
                        src={aboutImage1}
                        alt="About Us"
                        className="w-full md:max-w-md h-[70%] object-cover rounded-md border-8 border-white mx-auto md:mx-0 hidden md:block"
                    /> {/* Hidden on mobile */}
                </div>

                {/* Right side - Two stacked images with white borders */}
                <div className="flex flex-col space-y-6">
                    <img
                        src={aboutImage2}
                        alt="First Image"
                        className="w-full md:max-w-md h-72 object-cover rounded-md border-8 border-white mx-auto"
                    />
                    {/* Reduced width of the last image by 30% */}
                    <img
                        src={aboutImage3}
                        alt="Second Image"
                        className="w-[70%] md:max-w-md h-48 object-cover rounded-md border-8 border-white mx-auto"
                    /> {/* Width reduced by 30% */}
                </div>
            </div>

            {/* Mobile view - Only show 2 images */}
            <div className="md:hidden flex flex-col space-y-6 mt-10"> {/* Ensure only for mobile */}
                {/* First image on mobile */}
                <img
                    src={aboutImage2}
                    alt="First Image Mobile"
                    className="w-full h-64 object-cover rounded-md border-8 border-white"
                />
                {/* Second image on mobile */}
                <img
                    src={aboutImage3}
                    alt="Second Image Mobile"
                    className="w-full h-40 object-cover rounded-md border-8 border-white"
                />
            </div>
        </div>
    );
};

export default AboutUs;
