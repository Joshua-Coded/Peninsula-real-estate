import React, { useState } from "react";
import testimonialImage1 from "../images/test1.jpeg";
import testimonialImage2 from "../images/test2.jpeg";
import testimonialImage3 from "../images/test3.jpeg";
import { FaChevronLeft, FaChevronRight, FaQuoteLeft } from "react-icons/fa";

const Testimonials: React.FC = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);

    // Sample testimonials
    const testimonials = [
        {
            name: "John Doe",
            text: "Peninsula Development Limited helped me find the home of my dreams.",
            image: testimonialImage1
        },
        {
            name: "Jane Smith",
            text: "Working with Peninsula was an excellent experience.",
            image: testimonialImage2
        },
        {
            name: "Michael Brown",
            text: "I can't thank Peninsula enough for their dedication and commitment.",
            image: testimonialImage3
        }
    ];

    // Function to handle next and previous buttons
    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div className="px-6 py-12 bg-primary flex flex-col justify-center items-center"> {/* Primary background color */}
            <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-start relative"> {/* Relative for positioning */}

                {/* Left Side - Testimonial Box */}
                <div className="order-2 md:order-1 relative"> {/* This comes first on mobile */}
                    {/* Testimonial Image with 40% border-radius */}
                    <img
                        src={testimonials[currentTestimonial].image}
                        alt="Testimonial"
                        className="w-full md:max-w-sm h-70 object-cover rounded-[10%] border-8 border-white mx-auto"
                    />

                    {/* Testimonial Box, reduced width and height */}
                    <div className="absolute bottom-[-25%] left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg w-[80%] md:max-w-xs"> {/* Reduced width and padding */}
                        {/* Quote Icon */}
                        <FaQuoteLeft className="text-primary text-2xl mb-2" />

                        {/* Testifier Name */}
                        <h3 className="text-md font-semibold">{testimonials[currentTestimonial].name}</h3>

                        {/* Testimonial Text */}
                        <p className="text-gray-700 text-sm leading-relaxed">
                            "{testimonials[currentTestimonial].text}"
                        </p>
                    </div>
                </div>

                {/* Right-side Content (Text and Carousel Arrows) */}
                <div className="order-1 md:order-2 space-y-6 md:flex md:flex-col md:justify-between items-center"> {/* Align text and center icons */}
                    {/* Heading and Paragraph */}
                    <div className="space-y-4 text-center md:text-left">
                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl font-bold text-white">
                            Hear From Our Satisfied Clients
                        </h2>

                        {/* Paragraph from Peninsula */}
                        <p className="text-sm md:text-base leading-relaxed text-gray-200">
                            At Peninsula Development Limited, we are committed to providing exceptional service to all our clients.
                            Our goal is to ensure that every client feels satisfied with their new home.
                        </p>
                    </div>
                </div>
            </div>

            {/* Carousel Arrows - Positioned further down, mt-24 on mobile */}
            <div className="flex justify-center space-x-4 mt-24 md:mt-16"> {/* Added mt-24 for mobile, md:mt-16 for larger screens */}
                <button
                    className="bg-white text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-all"
                    onClick={handlePrevious}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className="bg-white text-primary p-3 rounded-full hover:bg-primary hover:text-white transition-all"
                    onClick={handleNext}
                >
                    <FaChevronRight />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
