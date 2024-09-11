import React from "react";
import consultingImage from "../images/consulting.png";
import { Link } from "react-router-dom";

const ConsultingSection: React.FC = () => {
    return (
        <div className="py-12 px-6 bg-gray-50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">

                {/* Text Section */}
                <div className="space-y-6">
                    {/* Divider Line */}
                    <div className="border-b-2 border-primary w-16"></div>

                    {/* Section Header */}
                    <h2 className="text-3xl font-bold">Consulting</h2>

                    {/* Section Description */}
                    <p className="text-lg leading-relaxed">
                        At Peninsula Development, our consulting experts are dedicated to guiding you through every aspect of real estate development and investment.
                        Whether you’re buying, selling, or investing, our experienced team offers tailored advice to help you make informed decisions.
                    </p>

                    {/* Call-to-Action Button */}
                    <div className="mt-6">
                        <Link to="/consulting">
                            <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                                Reach an Expert
                            </button>
                        </Link>
                    </div>
                </div>

                {/* Image Section with Background Overlay */}
                <div className="relative w-full h-[500px] md:h-[600px] flex justify-center items-center">
                    {/* Background Circle with Border Radius */}
                    <div
                        className="absolute w-[80%] h-[80%] bg-cover bg-center rounded-full opacity-30"
                        style={{
                            backgroundImage: `url(${consultingImage})`,
                            borderRadius: "50%", // Circular background
                        }}
                    ></div>

                    {/* Foreground Image */}
                    <img
                        src={consultingImage}
                        alt="Consulting Expert"
                        className="relative w-full h-full object-cover rounded-md z-10" // Overlaying the image with z-index
                    />
                </div>
            </div>
        </div>
    );
};

export default ConsultingSection;
