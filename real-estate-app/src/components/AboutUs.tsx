import React from "react";
import aboutImage1 from "../images/mission.png";
import aboutImage2 from "../images/house1.png";
import aboutImage3 from "../images/house2.png";
import { Link } from "react-router-dom";

const AboutUs: React.FC = () => {
    const scrollToTop = () => {
        window.scrollTo(0, 0);
    };

    return (
        <div className="w-full flex flex-col justify-start items-center gap-16 py-12 px-6">
            {/* Title and Paragraph Section */}
            <div className="text-center w-full md:w-3/4 lg:w-1/2 space-y-6">
                {/* Title */}
                <h2 className="text-[#333333] text-[24px] font-bold font-open-sans">
                    About Peninsula Developments
                </h2>

                {/* Paragraph */}
                <p className="text-[rgba(51,51,51,0.7)] text-[16px] font-light font-open-sans">
                    At Peninsula Developments Limited, we are dedicated to transforming the real estate landscape. Our mission is to provide exceptional living spaces that cater to the needs of modern homeowners and investors.
                </p>

                {/* Learn More Button */}
                <Link to="/" onClick={scrollToTop} className="inline-flex justify-center items-center">
                    <button className="bg-[#0059B2] text-white py-3 px-8 rounded-md hover:bg-white hover:text-[#0059B2] transition-all font-open-sans font-semibold text-[16px]">
                        Learn More About Us
                    </button>
                </Link>
            </div>

            {/* Image Grid for Desktop (3 images) */}
            <div className="hidden md:grid grid-cols-3 gap-8 max-w-screen-lg">
                {/* First Image */}
                <div className="overflow-hidden rounded-md border-8 border-white transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                    <img
                        src={aboutImage1}
                        alt="First Image"
                        className="w-full h-[550px] object-cover"
                    />
                </div>

                {/* Second Image */}
                <div className="overflow-hidden rounded-md border-8 border-white transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                    <img
                        src={aboutImage2}
                        alt="Second Image"
                        className="w-full h-[550px] object-cover"
                    />
                </div>

                {/* Third Image */}
                <div className="overflow-hidden rounded-md border-8 border-white transform transition-transform duration-500 hover:scale-105 hover:shadow-xl">
                    <img
                        src={aboutImage3}
                        alt="Third Image"
                        className="w-full h-[550px] object-cover"
                    />
                </div>
            </div>

            {/* Image Grid for Mobile (2 images) */}
            <div className="flex flex-col space-y-6 md:hidden">
                {/* First Image for Mobile */}
                <img
                    src={aboutImage2}
                    alt="First Image Mobile"
                    className="w-full h-[450px] object-cover rounded-md border-8 border-white"
                />

                {/* Second Image for Mobile */}
                <img
                    src={aboutImage3}
                    alt="Second Image Mobile"
                    className="w-full h-[300px] object-cover rounded-md border-8 border-white"
                />
            </div>
        </div>
    );
};

export default AboutUs;
