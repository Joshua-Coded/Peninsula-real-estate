import React, { useEffect, useState } from "react";
import house1 from "../images/house1.png";
import house2 from "../images/house2.png";
import house3 from "../images/house3.png";
import house4 from "../images/house4.png";
import house5 from "../images/house5.png";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const images = [house1, house2, house3, house4, house5];

    const nextSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => (prev + 1) % images.length);
        }
    };

    const prevSlide = () => {
        if (!isTransitioning) {
            setIsTransitioning(true);
            setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    useEffect(() => {
        const timer = setInterval(nextSlide, 5000);
        return () => clearInterval(timer);
    }, []);

    const handleTransitionEnd = () => {
        setIsTransitioning(false);
    };

    return (
        <div id="home" className="relative h-screen overflow-hidden">
            {/* Image Slider */}
            <div className="absolute inset-0">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${currentSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                        onTransitionEnd={handleTransitionEnd}
                    >
                        <div
                            className="h-full bg-cover bg-center"
                            style={{
                                backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.40) 0%, rgba(0, 0, 0, 0.40) 100%), 
                linear-gradient(0deg, rgba(0, 0, 0, 0.20) 0%, rgba(0, 0, 0, 0.20) 100%), 
                url(${image})`
                            }}
                        />
                    </div>
                ))}
            </div>

            {/* Navigation Arrows */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
                aria-label="Previous slide"
            >
                <ChevronLeft className="w-6 h-6" />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/30 text-white hover:bg-black/50 transition-colors z-10"
                aria-label="Next slide"
            >
                <ChevronRight className="w-6 h-6" />
            </button>

            {/* Slide Indicators */}
            <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
                {images.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`w-2 h-2 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-white w-4' : 'bg-white/50'
                            }`}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>

            {/* Content */}
            <div className="relative flex flex-col justify-center items-center h-full text-white text-center px-6 z-10">
                <div className="max-w-lg md:max-w-xl lg:max-w-2xl space-y-6">
                    <h1 className="text-white text-[24px] md:text-[36px] font-bold font-open-sans leading-tight break-words">
                        Elevating Living Standards Globally
                    </h1>

                    <p className="text-white text-[14px] md:text-[16px] font-light font-open-sans break-words">
                        Welcome to Peninsula Developments Limited,<br />
                        Your Gateway to Luxurious Living.
                    </p>

                    <div className="flex flex-row justify-center space-x-4 mt-6 md:mt-8">
                        <Link to="/projects">
                            <button className="py-2 md:py-2 px-4 md:px-6 text-[14px] md:text-[16px] font-semibold font-open-sans text-white bg-[#0059B2] rounded-[8.58px] hover:bg-white hover:text-[#0059B2] transition-all duration-300">
                                Discover our Properties
                            </button>
                        </Link>

                        <Link to="/contact">
                            <button className="py-2 md:py-2 px-4 md:px-6 text-[14px] md:text-[16px] font-semibold font-open-sans text-white border-[1.72px] border-white rounded-[8.58px] hover:bg-white hover:text-[#0059B2] transition-all duration-300">
                                Get In Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;