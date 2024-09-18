import React, { useState } from "react";
import testimonialImage1 from "../images/test1.png";
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
            image: testimonialImage1,
        },
        {
            name: "Jane Smith",
            text: "Working with Peninsula was an excellent experience.",
            image: testimonialImage2,
        },
        {
            name: "Michael Brown",
            text: "I can't thank Peninsula enough for their dedication and commitment.",
            image: testimonialImage3,
        },
    ];

    // Function to handle next and previous buttons
    const handleNext = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    };

    const handlePrevious = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <div
            className="w-full flex flex-col justify-center items-center py-24 px-6"
            style={{
                background: "linear-gradient(122deg, #0073E5 1%, #00407F 100%)",
            }}
        >
            {/* Title and Subtext */}
            <div className="text-center space-y-4 mb-12">
                <h2 className="text-white text-[24px] font-open-sans font-bold">
                    Hear from Our Satisfied Clients
                </h2>
                <p className="text-[rgba(255,255,255,0.7)] text-[16px] font-open-sans">
                    We help with some of the most excellent properties. See what our clients have to say about our work.
                </p>
            </div>

            {/* Testimonial Image and Text */}
            <div className="relative flex flex-col items-center justify-center max-w-screen-md">
                {/* Testimonial Image */}
                <img
                    src={testimonials[currentTestimonial].image}
                    alt="Testimonial"
                    className="w-64 h-80 object-cover rounded-md shadow-lg"
                />

                {/* Testimonial Box */}
                <div className="absolute bottom-[-20%] left-1/2 transform -translate-x-1/2 bg-white p-6 rounded-lg shadow-lg w-[80%] md:max-w-xs">
                    <FaQuoteLeft className="text-primary text-2xl mb-4" />
                    <h3 className="text-lg font-semibold text-gray-800">
                        {testimonials[currentTestimonial].name}
                    </h3>
                    <p className="text-sm text-gray-700">
                        "{testimonials[currentTestimonial].text}"
                    </p>
                </div>
            </div>

            {/* Carousel Navigation */}
            <div className="flex justify-center items-center space-x-8 mt-16">
                <button
                    className="bg-white p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-all"
                    onClick={handlePrevious}
                >
                    <FaChevronLeft className="text-primary" />
                </button>
                <button
                    className="bg-white p-3 rounded-full shadow-md hover:bg-primary hover:text-white transition-all"
                    onClick={handleNext}
                >
                    <FaChevronRight className="text-primary" />
                </button>
            </div>
        </div>
    );
};

export default Testimonials;
