import React from "react";
import approachImage from "../images/test1.jpeg";
import { FaArrowRight } from "react-icons/fa";

const OurApproach: React.FC = () => {
    return (
        <div className="py-16 px-6 max-w-screen-lg mx-auto">
            {/* Header and Paragraph */}
            <h2 className="text-3xl font-bold">Our Approach</h2>
            <p className="text-lg leading-relaxed mt-4">
                At Peninsula Development Limited, we take a customer-centric approach to real estate development.
            </p>

            {/* "How We Do It" Text in Primary Color */}
            <h3 className="text-primary text-2xl font-semibold mt-8">How We Do It</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-4">
                {/* Left side with points and arrows */}
                <div className="space-y-4">
                    <div className="flex items-start">
                        <FaArrowRight className="text-primary mr-2 mt-1" />
                        <p className="text-sm">We prioritize customer needs and tailor our developments accordingly.</p>
                    </div>
                    <div className="flex items-start">
                        <FaArrowRight className="text-primary mr-2 mt-1" />
                        <p className="text-sm">We integrate modern technology for innovative, sustainable solutions.</p>
                    </div>
                    <div className="flex items-start">
                        <FaArrowRight className="text-primary mr-2 mt-1" />
                        <p className="text-sm">We focus on long-term value creation for our clients and stakeholders.</p>
                    </div>
                    <div className="flex items-start">
                        <FaArrowRight className="text-primary mr-2 mt-1" />
                        <p className="text-sm">We adhere to the highest standards of quality and integrity in every project.</p>
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
    );
};

export default OurApproach;
