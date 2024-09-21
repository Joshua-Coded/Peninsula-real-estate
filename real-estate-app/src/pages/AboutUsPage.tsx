import React from "react";
import approachImage from "../images/approach.png";
import backgroundImage from "../images/image2.avif";
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
                className="h-screen w-full bg-cover bg-center text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${backgroundImage})` }}
            >
                <div className="text-center px-4 max-w-2xl">
                    <h1 className="text-white text-4xl md:text-5xl font-bold font-open-sans">Who We Are</h1>
                    <p className="text-white text-lg md:text-xl mt-6 font-open-sans">
                        Peninsula Developments Limited is a forward-thinking real estate company
                        dedicated to transforming the real estate landscape. Our mission is to
                        provide exceptional living spaces for homeowners and investors globally.
                    </p>
                    <div className="mt-8">
                        <Link to="/contact">
                            <button className="bg-primary hover:bg-primary-dark transition-colors duration-300 text-white text-lg md:text-xl font-semibold py-3 px-8 rounded-lg">
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Our Approach Section */}
            <div className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-blue-600 text-3xl md:text-4xl font-semibold text-center mb-8">Our Approach</h2>
                <p className="text-gray-700 text-lg md:text-xl mb-12 max-w-3xl mx-auto text-center">
                    At Peninsula Developments, we blend innovation with practicality. Our team of experts meticulously plans each project, ensuring that every detail aligns with our commitment to quality and customer satisfaction. We believe in creating properties that are not only luxurious but also sustainable and functional.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Left side with "What Sets Us Apart" and arrow content */}
                    <div className="space-y-8">
                        <h3 className="text-blue-600 text-2xl md:text-3xl font-semibold mb-6">What Sets Us Apart</h3>
                        <div className="space-y-6">
                            {[
                                "We focus on our clients first, creating spaces that align perfectly with their needs and aspirations.",
                                "Our developments integrate cutting-edge technology to deliver sustainable, future-proof solutions.",
                                "Our commitment to long-term value ensures every project brings lasting benefits for clients and communities.",
                                "We uphold unwavering standards of quality and integrity, ensuring excellence in every project we undertake."
                            ].map((text, index) => (
                                <div key={index} className="flex items-start space-x-4">
                                    <FaArrowRight className="text-blue-500 text-xl mt-1 flex-shrink-0" />
                                    <p className="text-gray-700 text-lg leading-relaxed">{text}</p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right side with image */}
                    <div className="flex justify-center">
                        <img
                            src={approachImage}
                            alt="Our Approach"
                            className="w-full h-auto max-h-96 object-cover rounded-lg shadow-xl"
                        />
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="py-16 md:py-24 px-4 md:px-8 bg-gray-50">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Mission */}
                    <div className="space-y-6">
                        <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold">Our Mission</h2>
                        <p className="text-gray-700 text-lg">
                            To redefine luxury living by creating high-quality, sustainable properties that exceed our clients' expectations.
                        </p>
                        <img src={missionImage} alt="Mission" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg" />
                    </div>

                    {/* Vision */}
                    <div className="space-y-6">
                        <img src={visionImage} alt="Vision" className="w-full h-64 md:h-80 object-cover rounded-lg shadow-lg" />
                        <h2 className="text-gray-900 text-3xl md:text-4xl font-semibold">Our Vision</h2>
                        <p className="text-gray-700 text-lg">
                            To be a global leader in real estate development, known for our commitment to excellence and innovation.
                        </p>
                    </div>
                </div>
            </div>

            {/* Our Values Section */}
            <div className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto">
                <h2 className="text-center text-3xl md:text-4xl font-semibold mb-12">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {[{
                        icon: integrityIcon,
                        title: "Integrity",
                        description: "We conduct our business with the highest ethical standards."
                    }, {
                        icon: qualityIcon,
                        title: "Quality",
                        description: "We prioritize quality in every project we undertake."
                    }, {
                        icon: innovationIcon,
                        title: "Innovation",
                        description: "We embrace innovation to deliver the best solutions."
                    }, {
                        icon: customerFocusIcon,
                        title: "Customer Focus",
                        description: "We put our clients at the center of everything we do."
                    }].map((value, index) => (
                        <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-center text-center">
                            <div className="bg-yellow-500 p-3 rounded-full mb-4">
                                <img src={value.icon} alt={`${value.title} Icon`} className="w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                            <p className="text-gray-600">
                                {value.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            {/* Full-Width Call to Action Section */}
            <div
                className="min-h-screen w-full bg-cover bg-center text-white flex items-center justify-center"
                style={{ backgroundImage: `url(${ctaBackground})` }}
            >
                <div className="text-center max-w-2xl px-4">
                    <h2 className="text-4xl md:text-5xl font-semibold mb-6">Join Us on This Journey</h2>
                    <p className="text-white text-lg md:text-xl mb-8">
                        Explore our properties and discover how Peninsula Developments Limited can help you find your dream home or investment opportunity.
                    </p>
                    <Link to="/contact">
                        <button className="bg-primary hover:bg-primary-dark transition-colors duration-300 text-white text-lg md:text-xl font-semibold py-3 px-8 rounded-lg">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;