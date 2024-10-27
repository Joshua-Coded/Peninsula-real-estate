import React, { useEffect, useRef, useState } from "react";
import serviceImage1 from "../images/house1.png";
import serviceImage2 from "../images/house6.png";
import { ArrowRight, Briefcase, Building, Home, Key, Star, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
    const [readyUnits, setReadyUnits] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [reviews, setReviews] = useState(0);
    const [activeService, setActiveService] = useState(0);

    const impactSectionRef = useRef<HTMLDivElement | null>(null);
    const [hasCounted, setHasCounted] = useState(false);

    const services = [
        {
            icon: <Home className="w-8 h-8" />,
            title: "Property Sales",
            description: "Find your dream home from our exclusive collection of premium properties"
        },
        {
            icon: <Key className="w-8 h-8" />,
            title: "Property Management",
            description: "Comprehensive management services for property owners and investors"
        },
        {
            icon: <Briefcase className="w-8 h-8" />,
            title: "Investment Solutions",
            description: "Strategic real estate investment opportunities for growth and returns"
        }
    ];

    const stats = [
        {
            icon: <Building className="w-6 h-6" />,
            value: readyUnits,
            label: "Ready Units",
            target: 1000
        },
        {
            icon: <Users className="w-6 h-6" />,
            value: customers,
            label: "Customers",
            target: 60000
        },
        {
            icon: <Star className="w-6 h-6" />,
            value: reviews,
            label: "Reviews",
            target: 20000
        }
    ];

    const countUp = (targetValue: number, setter: React.Dispatch<React.SetStateAction<number>>, step: number = 10) => {
        let startValue = 0;
        const increment = targetValue / 100;

        const countInterval = setInterval(() => {
            startValue += increment;
            if (startValue >= targetValue) {
                setter(targetValue);
                clearInterval(countInterval);
            } else {
                setter(Math.ceil(startValue));
            }
        }, step);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasCounted) {
                        countUp(1000, setReadyUnits);
                        countUp(60000, setCustomers, 1);
                        countUp(20000, setReviews, 1);
                        setHasCounted(true);
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (impactSectionRef.current) {
            observer.observe(impactSectionRef.current);
        }

        return () => {
            if (impactSectionRef.current) {
                observer.unobserve(impactSectionRef.current);
            }
        };
    }, [hasCounted]);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % services.length);
        }, 4000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="py-16 bg-gradient-to-b from-white to-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        Our Services
                    </h2>
                    <p className="text-lg text-gray-600">
                        From property sales to investment opportunities and comprehensive property management,
                        we offer a full spectrum of real estate services.
                    </p>
                </div>

                {/* Services Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className={`p-8 rounded-xl shadow-lg transition-all duration-500 transform 
                                ${index === activeService ? 'bg-[#0059B2] text-white scale-105' : 'bg-white text-gray-900 hover:-translate-y-2'}
                            `}
                        >
                            <div className={`mb-6 ${index === activeService ? 'text-white' : 'text-[#0059B2]'}`}>
                                {service.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                            <p className={`${index === activeService ? 'text-gray-100' : 'text-gray-600'}`}>
                                {service.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Image Gallery */}
                <div className="flex flex-col md:flex-row gap-8 mb-16">
                    <div className="relative group overflow-hidden rounded-xl flex-1">
                        <img
                            src={serviceImage1}
                            alt="Service"
                            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                    </div>
                    <div className="relative group overflow-hidden rounded-xl flex-1">
                        <img
                            src={serviceImage2}
                            alt="Service"
                            className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />
                    </div>
                </div>

                {/* Stats Section */}
                <div ref={impactSectionRef} className="bg-white rounded-xl shadow-lg p-8">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="flex items-center justify-center space-x-4">
                                <div className="p-3 bg-[#0059B2]/10 rounded-full text-[#0059B2]">
                                    {stat.icon}
                                </div>
                                <div>
                                    <p className="text-3xl font-bold text-gray-900">
                                        {stat.value.toLocaleString()}
                                    </p>
                                    <p className="text-gray-600">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="text-center">
                        <Link
                            to="/services"
                            onClick={() => window.scrollTo(0, 0)}
                            className="inline-flex items-center justify-center bg-[#0059B2] text-white py-3 px-8 rounded-lg transition-all duration-300 hover:bg-[#004391] group"
                        >
                            <span className="font-semibold">Explore Our Services</span>
                            <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;