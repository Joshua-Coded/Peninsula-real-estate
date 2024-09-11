import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import ConsultingSection from "../components/ConsultingSection";
import PropertySales from "../components/PropertySales";
import React from "react";
import Slider from "react-slick";
import bgImage from "../images/bgImage.png";
import consultingimage from "../images/consulting.png";
import investmentImage1 from "../images/invest1.png";
import investmentImage2 from "../images/invest2.png";
import investmentImage3 from "../images/invest3.png";
import managementImage from "../images/management.png";
import propertyImage from "../images/house1.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

// Settings for the carousel
const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 2,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};

const ServicesPage: React.FC = () => {
    return (
        <div>
            {/* Hero Section */}
            <div
                className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${propertyImage})`, width: '100vw', minHeight: '100vh' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
                <div className="relative text-center px-4 max-w-2xl z-10">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Services</h1>
                    <p className="mt-4 text-xl">We offer a variety of real estate services to meet your needs.</p>
                    <div className="mt-6">
                        <Link to="/contact">
                            <button className="bg-primary text-white py-3 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Property Sales Section */}
            {/* <div className="bg-primary text-white py-12 px-6">
                <h2 className="text-3xl font-bold text-center">Property Sales</h2>
                <p className="text-lg text-center mt-4 max-w-4xl mx-auto leading-relaxed">
                    At Peninsula Development Limited, we specialize in providing secure, sophisticated, and comfortable homes.
                    Our property sales service is tailored to ensure that you find the perfect home or investment property.
                </p>
                <div className="text-center mt-6">
                    <Link to="/projects">
                        <button className="bg-white text-primary py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all">
                            Explore Properties
                        </button>
                    </Link>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
                    <img src={propertyImage} alt="Property" className="w-full h-64 object-cover rounded-md" />
                    <img src={propertyImage} alt="Property" className="w-full h-64 object-cover rounded-md" />
                    <img src={propertyImage} alt="Property" className="w-full h-64 object-cover rounded-md" />
                </div>
            </div> */}
            <PropertySales />
            {/* Investment Section */}
            <div className="py-12 px-6">
                <h2 className="text-3xl font-bold text-center">Investment Opportunities</h2>
                <p className="text-lg text-center mt-4 max-w-4xl mx-auto leading-relaxed">
                    Peninsula Development Limited offers lucrative real estate investment opportunities. Whether you're looking
                    for residential, commercial, or industrial real estate, we have the perfect options for you.
                </p>
                <div className="text-center mt-6">
                    <Link to="/investment">
                        <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                            Learn More
                        </button>
                    </Link>
                </div>

                <div className="mt-8">
                    <Slider {...carouselSettings}>
                        <div>
                            <img src={investmentImage1} alt="Investment 1" className="w-full h-64 object-cover rounded-md" />
                        </div>
                        <div>
                            <img src={investmentImage2} alt="Investment 2" className="w-full h-64 object-cover rounded-md" />
                        </div>
                        <div>
                            <img src={investmentImage3} alt="Investment 3" className="w-full h-64 object-cover rounded-md" />
                        </div>
                    </Slider>
                </div>
            </div>

            {/* Property Management Section */}
            <div className="py-12 px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <img
                        src={managementImage}
                        alt="Property Management"
                        className="w-full h-72 md:h-80 object-cover rounded-md"
                    />
                    {/* Text */}
                    <div className="space-y-6">
                        <div className="border-b-2 border-primary w-16"></div>
                        <h2 className="text-3xl font-bold">Property Management</h2>
                        <p className="text-lg leading-relaxed">
                            At Peninsula Development, we take pride in managing your properties with professionalism and excellence.
                            Our property management services ensure that your real estate investments are well-maintained and profitable.
                            We offer everything from tenant management to maintenance, giving you peace of mind.
                        </p>
                        <div className="mt-6">
                            <Link to="/management">
                                <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                                    Learn More
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

            {/* Consulting Section */}
            {/* <div className="py-12 px-6 bg-gray-50"> 
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                   
                    <div className="space-y-6">
                        <div className="border-b-2 border-primary w-16"></div>
                        <h2 className="text-3xl font-bold">Consulting</h2>
                        <p className="text-lg leading-relaxed">
                            At Peninsula Development, our consulting experts are dedicated to guiding you through every aspect of real estate development and investment.
                            Whether you’re buying, selling, or investing, our experienced team offers tailored advice to help you make informed decisions.
                        </p>
                        <div className="mt-6">
                            <Link to="/consulting">
                                <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                                    Reach an Expert
                                </button>
                            </Link>
                        </div>
                    </div>

                
                    <img
                        src={consultingimage}
                        alt="Consulting Expert"
                        className="w-full h-72 md:h-80 object-cover rounded-md"
                    />
                </div>
            </div> */}

            <ConsultingSection />

            {/* Get Started Section */}
            <div
                className="h-auto min-h-screen bg-cover bg-center text-white flex justify-center items-center w-full py-16"
                style={{ backgroundImage: `url(${bgImage})` }}
            >
                <div className="text-center px-6">
                    <h2 className="text-4xl md:text-5xl font-bold">Get Started with Peninsula Development</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        Ready to begin your real estate journey? Contact us today to explore how we can assist you in finding
                        the perfect property or investment opportunity.
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
        </div>
    );
};

export default ServicesPage;
