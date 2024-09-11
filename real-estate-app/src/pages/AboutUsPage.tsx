import React from "react";
import approachImage from "../images/approach.png";
import backgroundImage from "../images/image1.avif";
import ctaBackground from "../images/house1.png";
import missionImage from "../images/mission.png";
import visionImage from "../images/house5.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUsPage: React.FC = () => {
    return (
        <div>
            {/* First Section: Fullscreen About Us Section */}
            <div
                className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${backgroundImage})`, width: '100vw' }}
            >
                <div className="text-center px-4 max-w-2xl">
                    <h1 className="text-4xl md:text-5xl font-extrabold">About Us</h1>
                    <p className="text-sm md:text-lg mt-4 leading-relaxed">
                        Welcome to Peninsula Development Limited. We are committed to elevating living standards globally by
                        offering secure, sophisticated, and comfortable homes tailored to meet your needs.
                    </p>
                    <div className="mt-6">
                        <Link to="/contact">
                            <button className="bg-primary text-white py-3 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Remaining Sections */}
            <div className="py-16 px-6 max-w-screen-lg mx-auto space-y-20">
                {/* Second Section: Mission & Vision */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-bold">Our Mission</h2>
                        <p className="text-lg leading-relaxed">
                            Our mission is to transform the real estate landscape by delivering high-quality, modern, and innovative homes
                            that enhance lifestyles. We exceed expectations through our commitment to excellence, sustainability, and customer satisfaction.
                        </p>
                        <img src={missionImage} alt="Mission Image" className="w-full h-80 object-cover rounded-md" />
                    </div>
                    <div className="space-y-8">
                        <img src={visionImage} alt="Vision Image" className="w-full h-80 object-cover rounded-md" />
                        <h2 className="text-3xl font-bold">Our Vision</h2>
                        <p className="text-lg leading-relaxed">
                            We envision a future where sustainable, luxurious living spaces are accessible to everyone. Our vision is to
                            create developments that reflect innovation, sustainability, and customer satisfaction.
                        </p>
                    </div>
                </div>

                {/* Third Section: Our Values with Responsive Styling */}
                <div>
                    <h2 className="text-3xl font-bold text-center mb-12">Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Value 1 */}
                        <div className="text-center p-4 md:p-6 h-48 md:h-64 flex flex-col justify-center items-center transition-all duration-500 transform hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg rounded-md">
                            <div className="text-primary text-4xl mb-4">🔑</div>
                            <h3 className="text-lg md:text-xl font-semibold">Integrity</h3>
                            <p className="text-xs md:text-sm text-gray-600">We prioritize transparency and honesty in all our dealings.</p>
                        </div>

                        {/* Value 2 */}
                        <div className="text-center p-4 md:p-6 h-48 md:h-64 flex flex-col justify-center items-center transition-all duration-500 transform hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg rounded-md">
                            <div className="text-primary text-4xl mb-4">🏠</div>
                            <h3 className="text-lg md:text-xl font-semibold">Quality</h3>
                            <p className="text-xs md:text-sm text-gray-600">We deliver top-notch real estate products that stand the test of time.</p>
                        </div>

                        {/* Value 3 */}
                        <div className="text-center p-4 md:p-6 h-48 md:h-64 flex flex-col justify-center items-center transition-all duration-500 transform hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg rounded-md">
                            <div className="text-primary text-4xl mb-4">💡</div>
                            <h3 className="text-lg md:text-xl font-semibold">Innovation</h3>
                            <p className="text-xs md:text-sm text-gray-600">We leverage modern technologies and practices to meet future needs.</p>
                        </div>

                        {/* Value 4 */}
                        <div className="text-center p-4 md:p-6 h-48 md:h-64 flex flex-col justify-center items-center transition-all duration-500 transform hover:bg-primary hover:text-white hover:scale-105 hover:shadow-lg rounded-md">
                            <div className="text-primary text-4xl mb-4">🤝</div>
                            <h3 className="text-lg md:text-xl font-semibold">Customer-Centric</h3>
                            <p className="text-xs md:text-sm text-gray-600">Our clients are at the heart of every decision we make.</p>
                        </div>
                    </div>
                </div>

                {/* Fourth Section: Our Approach */}
                <div className="py-16 md:flex md:flex-col items-center text-center md:text-left">
                    <h2 className="text-3xl font-bold">Our Approach</h2>
                    <p className="text-sm md:text-base leading-relaxed mt-4 max-w-lg">
                        At Peninsula Development Limited, we take a customer-centric approach to real estate development. We prioritize customer needs
                        and tailor our developments accordingly.
                    </p>

                    <h3 className="text-primary text-2xl font-semibold mt-8">How We Do It</h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8 max-w-4xl">
                        {/* Left side with points and arrows */}
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p>We prioritize customer needs and tailor our developments accordingly.</p>
                            </div>
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p>We integrate modern technology for innovative, sustainable solutions.</p>
                            </div>
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p>We focus on long-term value creation for our clients and stakeholders.</p>
                            </div>
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p>We adhere to the highest standards of quality and integrity in every project.</p>
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
            </div>

            {/* Fifth Section: Full-Width Call to Action */}
            <div
                className="min-h-screen w-screen bg-cover bg-center text-white flex items-center justify-center" // Full width & height
                style={{
                    backgroundImage: `url(${ctaBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-extrabold">Join Us on This Journey</h2>
                    <p className="text-xl mt-4 mb-8">Be a part of our story and experience luxury living at its finest.</p>
                    <Link to="/contact">
                        <button className="bg-primary text-white py-3 px-8 rounded-md hover:bg-white hover:text-primary transition-all">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
