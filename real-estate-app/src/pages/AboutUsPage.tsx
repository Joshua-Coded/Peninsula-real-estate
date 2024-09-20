import React from "react";
import approachImage from "../images/approach.png";
import backgroundImage from "../images/blog3.png";
import ctaBackground from "../images/house1.png";
import customerFocusIcon from "../images/Group.png";
import innovationIcon from "../images/Settings.png";
import integrityIcon from "../images/house-heart.png";
import missionImage from "../images/mission.png";
import qualityIcon from "../images/User.png";
import visionImage from "../images/house5.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUsPage: React.FC = () => {
    return (
        <div>
            {/* Fullscreen About Us Section */}
            <div
                className="h-screen w-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="text-center px-4 max-w-2xl">
                    <h1 className="text-white text-4xl font-bold font-open-sans">Who We Are</h1>
                    <p className="text-white text-lg mt-4 font-open-sans">
                        Peninsula Developments Limited is a forward-thinking real estate company
                        dedicated to transforming the real estate landscape. Our mission is to
                        provide exceptional living spaces for homeowners and investors globally.
                    </p>
                    <div className="mt-6">
                        <Link to="/contact">
                            <button className="bg-primary text-white text-lg font-semibold py-3 px-6 rounded-md">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Our Approach Section */}
            <div className="py-16 md:flex md:flex-col items-center text-center md:text-left max-w-screen-lg mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
                    {/* Left side with "What Sets Us Apart" and arrow content */}
                    <div className="space-y-8">
                        <h2 className="text-blue-600 text-2xl font-semibold">What Sets Us Apart</h2>
                        <div className="space-y-3 text-sm">
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p className="text-gray-700">
                                    We prioritize customer needs and tailor our developments accordingly.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p className="text-gray-700">
                                    We integrate modern technology for innovative, sustainable solutions.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p className="text-gray-700">
                                    We focus on long-term value creation for our clients and stakeholders.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p className="text-gray-700">
                                    We adhere to the highest standards of quality and integrity in every project.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Right side with image */}
                    <div>
                        <img
                            src={approachImage}
                            alt="Our Approach"
                            className="w-full h-80 object-cover rounded-md shadow-lg"
                        />
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="py-16 px-6 max-w-screen-lg mx-auto space-y-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="space-y-6">
                        <h2 className="text-gray-900 text-2xl font-semibold">Our Mission</h2>
                        <p className="text-gray-700 text-base">
                            To redefine luxury living by creating high-quality, sustainable properties that exceed our clients' expectations.
                        </p>
                        <img src={missionImage} alt="Mission" className="w-full h-64 object-cover rounded-md" />
                    </div>

                    {/* Vision */}
                    <div className="space-y-6">
                        <img src={visionImage} alt="Vision" className="w-full h-64 object-cover rounded-md" />
                        <h2 className="text-gray-900 text-2xl font-semibold">Our Vision</h2>
                        <p className="text-gray-700 text-base">
                            To be a global leader in real estate development, known for our commitment to excellence and innovation.
                        </p>
                    </div>
                </div>

                {/* Our Values Section */}
                <div>
                    <h2 className="text-center text-2xl font-semibold mb-10">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Value 1: Integrity */}
                        <div className="bg-gray-100 flex flex-col items-start justify-center p-4 rounded-lg min-h-[12rem]">
                            <div className="bg-yellow-500 p-2 rounded-full mb-3">
                                <img src={integrityIcon} alt="Integrity Icon" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Integrity</h3>
                            <p className="text-gray-600 text-sm">
                                We conduct our business with the highest ethical standards.
                            </p>
                        </div>

                        {/* Value 2: Quality */}
                        <div className="bg-gray-100 flex flex-col items-start justify-center p-4 rounded-lg min-h-[12rem]">
                            <div className="bg-yellow-500 p-2 rounded-full mb-3">
                                <img src={qualityIcon} alt="Quality Icon" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Quality</h3>
                            <p className="text-gray-600 text-sm">
                                We prioritize quality in every project we undertake.
                            </p>
                        </div>

                        {/* Value 3: Innovation */}
                        <div className="bg-gray-100 flex flex-col items-start justify-center p-4 rounded-lg min-h-[12rem]">
                            <div className="bg-yellow-500 p-2 rounded-full mb-3">
                                <img src={innovationIcon} alt="Innovation Icon" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Innovation</h3>
                            <p className="text-gray-600 text-sm">
                                We embrace innovation to deliver the best solutions.
                            </p>
                        </div>

                        {/* Value 4: Customer Focus */}
                        <div className="bg-gray-100 flex flex-col items-start justify-center p-4 rounded-lg min-h-[12rem]">
                            <div className="bg-yellow-500 p-2 rounded-full mb-3">
                                <img src={customerFocusIcon} alt="Customer Focus Icon" className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold">Customer Focus</h3>
                            <p className="text-gray-600 text-sm">
                                We put our clients at the center of everything we do.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Width Call to Action Section */}
            <div
                className="min-h-screen w-screen bg-cover bg-center text-white flex items-center justify-center"
                style={{ backgroundImage: `url(${ctaBackground})` }}
            >
                <div className="text-center">
                    <h2 className="text-3xl font-semibold">Join Us on This Journey</h2>
                    <p className="text-white/70 text-base mt-4 mb-8">
                        Explore our properties and discover how Peninsula Developments Limited can help you find your dream home or investment opportunity.
                    </p>
                    <Link to="/contact">
                        <button className="bg-primary text-white py-3 px-8 rounded-md">Contact Us</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
