import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import bgImage from "../images/bgImage.png";
import consultingimage from "../images/consulting.png";
import investmentImage1 from "../images/invest1.png";
import investmentImage2 from "../images/invest2.png";
import investmentImage3 from "../images/invest3.png";
import managementImage from "../images/management.png";
import propertyImage from "../images/house1.png";
import { Link } from "react-router-dom";

import {
    ArrowRight, ChevronDown, Building2, Briefcase,
    BarChart3, ShieldCheck, Phone, HomeIcon
} from "lucide-react";


interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
    link: string;
}

const ServicesPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState<number>(0);

    useEffect(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const services: Service[] = [
        {
            icon: <HomeIcon className="w-6 h-6" />,
            title: "Property Sales",
            description: "Find your dream property from our exclusive portfolio of premium real estate options.",
            link: "/contact"
        },
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Property Management",
            description: "Professional management services ensuring optimal returns on your real estate investments.",
            link: "/contact"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Investment Solutions",
            description: "Strategic investment opportunities in high-growth real estate markets.",
            link: "/contact"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Real Estate Consulting",
            description: "Expert guidance for all your real estate decisions and investments.",
            link: "/contact"
        }
    ];

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
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                }
            }
        ],
        customPaging: (i: number) => (
            <div className="w-2 h-2 bg-primary/50 rounded-full transition-all duration-300
                hover:bg-primary hover:w-4" />
        )
    };

    return (
        <div className="bg-gray-50">
            {/* Hero Section */}
            <div className="relative min-h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${propertyImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

                <div className="relative h-screen flex flex-col justify-center items-center px-4">
                    <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform w-full
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-4xl md:text-7xl font-bold text-white mb-4 md:mb-6">
                            Our Services
                        </h1>
                        <p className="text-lg md:text-2xl text-white/90 mb-8 md:mb-12 px-4">
                            Comprehensive real estate solutions tailored to exceed your expectations
                        </p>

                        {/* Service Quick Links - Updated for better mobile display */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8 md:mb-12 px-4">
                            {services.map((service, index) => (
                                <div
                                    key={index}
                                    className={`
                            group p-4 md:p-6 rounded-xl backdrop-blur-sm transition-all duration-500
                            ${index === activeService
                                            ? 'bg-white text-primary'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                        }
                        `}
                                >
                                    <div className="flex flex-col items-center text-center gap-3 md:gap-4">
                                        <div className={`
                                p-2 md:p-3 rounded-full transition-all duration-300 group-hover:scale-110
                                ${index === activeService ? 'bg-primary/10' : 'bg-white/10'}
                            `}>
                                            {service.icon}
                                        </div>
                                        <h3 className="font-medium text-sm md:text-base">{service.title}</h3>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Updated Get Started Button */}
                        <div className="w-full px-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-white 
                        px-6 md:px-8 py-3 md:py-4 rounded-full hover:bg-white hover:text-primary 
                        transition-all duration-300 w-full sm:w-auto text-base md:text-lg"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
                            </Link>
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-6 h-6 md:w-8 md:h-8 text-white" />
                    </div>
                </div>

                {/* Stats Section */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-20">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { number: "500+", label: "Properties Sold" },
                            { number: "1000+", label: "Happy Clients" },
                            { number: "50+", label: "Ongoing Projects" },
                            { number: "15+", label: "Years Experience" }
                        ].map((stat, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-xl shadow-lg p-6 text-center
                                transform transition-all duration-500 hover:-translate-y-2"
                            >
                                <h3 className="text-3xl font-bold text-primary mb-2">
                                    {stat.number}
                                </h3>
                                <p className="text-gray-600">{stat.label}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Property Sales Section */}
                <div className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="fade-in-section">
                                <h2 className="text-4xl font-bold mb-6">Premium Property Sales</h2>
                                <p className="text-lg text-gray-600 mb-8">
                                    Discover an exclusive collection of premium properties carefully selected
                                    to match your lifestyle and investment goals. From luxury residences to
                                    commercial spaces, we offer the finest real estate options.
                                </p>

                                {/* Features Grid */}
                                <div className="grid grid-cols-2 gap-6 mb-8">
                                    {[
                                        "Luxury Residences",
                                        "Commercial Properties",
                                        "Premium Locations",
                                        "Exclusive Listings"
                                    ].map((feature, index) => (
                                        <div
                                            key={index}
                                            className="flex items-center gap-3 p-4 bg-gray-50 rounded-lg
                                            transform transition-all duration-300 hover:-translate-y-1"
                                        >
                                            <div className="p-2 bg-primary/10 rounded-full text-primary">
                                                <HomeIcon className="w-5 h-5" />
                                            </div>
                                            <span className="font-medium">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/projects"
                                    className="inline-flex items-center gap-2 text-primary font-medium
                                    group transition-all duration-300"
                                >
                                    <span>Explore Properties</span>
                                    <ArrowRight className="w-5 h-5 transform transition-transform 
                                    group-hover:translate-x-2" />
                                </Link>
                            </div>

                            {/* Image Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                <img
                                    src={propertyImage}
                                    alt="Property"
                                    className="rounded-lg transform translate-y-8"
                                />
                                <img
                                    src={managementImage}
                                    alt="Property"
                                    className="rounded-lg transform -translate-y-8"
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Investment Section */}
                <div className="py-24 bg-gradient-to-b from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold mb-6">Investment Opportunities</h2>
                            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                                Unlock lucrative investment opportunities in prime real estate markets.
                                Our expert team helps you identify and secure properties with the highest
                                potential for returns.
                            </p>
                        </div>

                        {/* Investment Cards Carousel */}
                        <div className="mb-16">
                            <Slider {...carouselSettings} className="investment-slider">
                                {[
                                    {
                                        title: "Residential Investment",
                                        image: investmentImage1,
                                        return: "12-15% ROI",
                                        type: "Long-term Investment"
                                    },
                                    {
                                        title: "Commercial Properties",
                                        image: investmentImage2,
                                        return: "15-18% ROI",
                                        type: "Income Generating"
                                    },
                                    {
                                        title: "Development Projects",
                                        image: investmentImage3,
                                        return: "20-25% ROI",
                                        type: "High Growth Potential"
                                    }
                                ].map((investment, index) => (
                                    <div key={index} className="px-4">
                                        <div className="bg-white rounded-xl overflow-hidden shadow-lg
                                        transform transition-all duration-300 hover:-translate-y-2">
                                            <div className="relative h-64">
                                                <img
                                                    src={investment.image}
                                                    alt={investment.title}
                                                    className="w-full h-full object-cover"
                                                />
                                                <div className="absolute inset-0 bg-gradient-to-t 
                                                from-black/60 to-transparent" />
                                                <div className="absolute bottom-4 left-4 text-white">
                                                    <h3 className="text-xl font-bold mb-2">
                                                        {investment.title}
                                                    </h3>
                                                    <p className="text-white/90">{investment.type}</p>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex justify-between items-center mb-4">
                                                    <span className="text-primary font-bold">
                                                        {investment.return}
                                                    </span>
                                                    <Link
                                                        to="/contact"
                                                        className="inline-flex items-center gap-2 text-sm 
                                                        font-medium text-gray-600 hover:text-primary
                                                        transition-colors"
                                                    >
                                                        Learn More
                                                        <ArrowRight className="w-4 h-4" />
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>

                {/* Property Management Section */}
                <div className="py-24 bg-white">
                    <div className="max-w-7xl mx-auto px-4">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <img
                                src={managementImage}
                                alt="Property Management"
                                className="rounded-xl shadow-lg transform hover:scale-105 
                                transition-transform duration-500"
                            />

                            <div>
                                <div className="inline-block px-4 py-2 bg-primary/10 rounded-full 
                                text-primary font-medium mb-6">
                                    Property Management
                                </div>

                                <h2 className="text-4xl font-bold mb-6">
                                    Professional Property Management Services
                                </h2>

                                <p className="text-lg text-gray-600 mb-8">
                                    We take care of your property as if it were our own. Our comprehensive
                                    management services ensure optimal returns and peace of mind for property owners.
                                </p>

                                <div className="space-y-4 mb-8">
                                    {[
                                        "24/7 Property Maintenance",
                                        "Tenant Screening & Management",
                                        "Regular Property Inspections",
                                        "Financial Reporting & Analysis"
                                    ].map((service, index) => (
                                        <div key={index} className="flex items-center gap-3">
                                            <div className="p-1 rounded-full bg-green-500">
                                                <ShieldCheck className="w-4 h-4 text-white" />
                                            </div>
                                            <span>{service}</span>
                                        </div>
                                    ))}
                                </div>

                                <Link
                                    to="/contact"
                                    className="inline-flex items-center gap-2 bg-primary text-white 
                                    px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                                >
                                    <span>Get Started</span>
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Call to Action Section */}
                <div className="relative py-24">
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-fixed"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 backdrop-blur-sm" />

                    <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl mb-12">
                            Let's work together to achieve your real estate goals. Our team of experts
                            is ready to assist you every step of the way.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white 
                                text-primary px-8 py-4 rounded-full hover:bg-primary hover:text-white 
                                border border-white transition-all duration-300"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <Link
                                to="/projects"
                                className="inline-flex items-center justify-center gap-2 border 
                                border-white text-white px-8 py-4 rounded-full hover:bg-white 
                                hover:text-primary transition-all duration-300"
                            >
                                View Projects
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ServicesPage;