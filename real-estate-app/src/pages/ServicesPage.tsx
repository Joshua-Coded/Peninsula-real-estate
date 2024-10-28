import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import bgImage from "../images/bgImage.png";
import investmentImage1 from "../images/invest1.png";
import investmentImage2 from "../images/invest2.png";
import investmentImage3 from "../images/invest3.png";
import managementImage from "../images/management.png";
import propertyImage from "../images/house1.png";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

// Icons
import {
    ArrowRight, ChevronDown, ChevronUp, Building2, Briefcase,
    BarChart3, ShieldCheck, Phone, HomeIcon, Users, Award,
    Map, Star
} from "lucide-react";

// Images

// Types
interface Service {
    icon: JSX.Element;
    title: string;
    description: string;
    link: string;
}

// Animation variants
const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer = {
    animate: {
        transition: {
            staggerChildren: 0.1
        }
    }
};

const ServicesPage: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    // Services data
    const services: Service[] = [
        {
            icon: <HomeIcon className="w-6 h-6" />,
            title: "Property Sales",
            description: "Find your dream property from our exclusive portfolio.",
            link: "/contact"
        },
        {
            icon: <Building2 className="w-6 h-6" />,
            title: "Property Management",
            description: "Professional management services for your investments.",
            link: "/contact"
        },
        {
            icon: <BarChart3 className="w-6 h-6" />,
            title: "Investment Solutions",
            description: "Strategic investment opportunities in prime markets.",
            link: "/contact"
        },
        {
            icon: <Briefcase className="w-6 h-6" />,
            title: "Real Estate Consulting",
            description: "Expert guidance for all your real estate decisions.",
            link: "/contact"
        }
    ];

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Loading screen
    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 
                        border-primary border-t-transparent"></div>
                    <p className="text-primary font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${propertyImage})`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/60" />

                {/* Hero Content */}
                <div className="relative flex flex-col justify-center items-center min-h-screen px-4 py-24">
                    <motion.div
                        className="text-center max-w-4xl mx-auto w-full"
                        initial="initial"
                        animate="animate"
                        variants={staggerContainer}
                    >
                        {/* Hero Text */}
                        <motion.h1
                            className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6"
                            variants={fadeInUp}
                        >
                            Our Services
                        </motion.h1>
                        <motion.p
                            className="text-lg md:text-xl lg:text-2xl text-white/90 mb-12"
                            variants={fadeInUp}
                        >
                            Comprehensive real estate solutions tailored to exceed your expectations
                        </motion.p>

                        {/* Service Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 mb-12">
                            <AnimatePresence>
                                {services.map((service, index) => (
                                    <motion.div
                                        key={index}
                                        variants={fadeInUp}
                                        className={`
                                            group p-6 rounded-xl backdrop-blur-sm 
                                            transition-all duration-300 cursor-pointer
                                            transform hover:-translate-y-1
                                            ${index === activeService
                                                ? 'bg-white text-primary shadow-lg'
                                                : 'bg-black/20 text-white hover:bg-black/30'
                                            }
                                        `}
                                        onClick={() => setActiveService(index)}
                                    >
                                        <div className="flex flex-col items-center text-center gap-4">
                                            <div className={`
                                                p-3 rounded-full transition-all duration-300
                                                ${index === activeService
                                                    ? 'bg-primary/10'
                                                    : 'bg-white/10'
                                                }
                                            `}>
                                                {service.icon}
                                            </div>
                                            <div>
                                                <h3 className="font-semibold text-lg mb-2">
                                                    {service.title}
                                                </h3>
                                                <p className={`
                                                    text-sm opacity-0 group-hover:opacity-100 
                                                    transition-opacity duration-300
                                                    ${index === activeService
                                                        ? 'text-gray-600'
                                                        : 'text-white/80'
                                                    }
                                                `}>
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                        </div>

                        {/* CTA Button */}
                        <motion.div
                            variants={fadeInUp}
                            className="flex justify-center"
                        >
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 
                                    bg-primary text-white px-8 py-4 rounded-full 
                                    hover:bg-white hover:text-primary 
                                    transition-all duration-300 group
                                    border-2 border-transparent hover:border-white
                                    min-w-[200px] shadow-lg"
                            >
                                <span>Get Started</span>
                                <ArrowRight className="w-5 h-5 transform 
                                    group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        className="absolute bottom-8 left-1/2 -translate-x-1/2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                    >
                        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
                    </motion.div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative bg-white z-10 -mt-20 lg:-mt-24">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                        {[
                            {
                                number: "500+",
                                label: "Properties Sold",
                                icon: <HomeIcon className="w-6 h-6" />,
                                color: "bg-blue-500/10 text-blue-500"
                            },
                            {
                                number: "1000+",
                                label: "Happy Clients",
                                icon: <Users className="w-6 h-6" />,
                                color: "bg-green-500/10 text-green-500"
                            },
                            {
                                number: "50+",
                                label: "Ongoing Projects",
                                icon: <Building2 className="w-6 h-6" />,
                                color: "bg-purple-500/10 text-purple-500"
                            },
                            {
                                number: "15+",
                                label: "Years Experience",
                                icon: <Award className="w-6 h-6" />,
                                color: "bg-amber-500/10 text-amber-500"
                            }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl shadow-lg p-6
                                    transform transition-all duration-300 hover:-translate-y-1
                                    hover:shadow-xl"
                            >
                                <div className="flex flex-col items-center gap-4">
                                    <div className={`p-3 rounded-full ${stat.color}`}>
                                        {stat.icon}
                                    </div>
                                    <h3 className="text-3xl font-bold text-gray-900">
                                        {stat.number}
                                    </h3>
                                    <p className="text-gray-600 text-center">
                                        {stat.label}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Property Sales Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <span className="inline-block px-4 py-2 bg-primary/10 rounded-full 
                                text-primary font-medium mb-6">
                                Property Sales
                            </span>

                            <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                                Premium Property Sales
                            </h2>

                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Discover an exclusive collection of premium properties carefully selected
                                to match your lifestyle and investment goals. From luxury residences to
                                commercial spaces, we offer the finest real estate options.
                            </p>

                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                                {[
                                    {
                                        title: "Luxury Residences",
                                        icon: <HomeIcon className="w-5 h-5" />,
                                        color: "bg-blue-500/10 text-blue-500"
                                    },
                                    {
                                        title: "Commercial Properties",
                                        icon: <Building2 className="w-5 h-5" />,
                                        color: "bg-purple-500/10 text-purple-500"
                                    },
                                    {
                                        title: "Premium Locations",
                                        icon: <Map className="w-5 h-5" />,
                                        color: "bg-amber-500/10 text-amber-500"
                                    },
                                    {
                                        title: "Exclusive Listings",
                                        icon: <Star className="w-5 h-5" />,
                                        color: "bg-green-500/10 text-green-500"
                                    }
                                ].map((feature, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1 }}
                                        className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg
                                            hover:shadow-lg transition-all duration-300 group cursor-pointer"
                                    >
                                        <div className={`p-3 rounded-full ${feature.color} 
                                            group-hover:scale-110 transition-transform`}>
                                            {feature.icon}
                                        </div>
                                        <span className="font-medium text-gray-900">{feature.title}</span>
                                    </motion.div>
                                ))}
                            </div>

                            <Link
                                to="/projects"
                                className="inline-flex items-center gap-2 text-primary font-medium
                                    hover:gap-4 transition-all duration-300 group"
                            >
                                <span>Explore Properties</span>
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                        </motion.div>

                        {/* Property Images */}
                        <motion.div
                            className="grid grid-cols-2 gap-4"
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="space-y-4">
                                {[propertyImage, managementImage].map((image, index) => (
                                    <motion.div
                                        key={index}
                                        className="relative overflow-hidden rounded-lg group"
                                        whileHover={{ y: -5 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <img
                                            src={image}
                                            alt={`Property ${index + 1}`}
                                            className="w-full aspect-square object-cover transition-transform 
                                                duration-500 group-hover:scale-110"
                                        />
                                        <div className="absolute inset-0 bg-black/20 opacity-0 
                                            group-hover:opacity-100 transition-opacity" />
                                    </motion.div>
                                ))}
                            </div>
                            <div className="transform translate-y-8">
                                <motion.div
                                    className="relative overflow-hidden rounded-lg group h-full"
                                    whileHover={{ y: -5 }}
                                    transition={{ duration: 0.3 }}
                                >
                                    <img
                                        src={investmentImage1}
                                        alt="Property"
                                        className="w-full h-full object-cover transition-transform 
                                            duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-black/20 opacity-0 
                                        group-hover:opacity-100 transition-opacity" />
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Investment Section */}
            <section className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-3xl lg:text-4xl font-bold mb-6 text-gray-900">
                            Investment Opportunities
                        </h2>
                        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                            Unlock lucrative investment opportunities in prime real estate markets.
                            Our expert team helps you identify and secure properties with the highest
                            potential for returns.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {[
                            {
                                title: "Residential Investment",
                                image: investmentImage1,
                                return: "12-15% ROI",
                                type: "Long-term Investment",
                                features: ["Premium Location", "High Rental Yield"]
                            },
                            {
                                title: "Commercial Properties",
                                image: investmentImage2,
                                return: "15-18% ROI",
                                type: "Income Generating",
                                features: ["Prime Location", "Stable Returns"]
                            },
                            {
                                title: "Development Projects",
                                image: investmentImage3,
                                return: "20-25% ROI",
                                type: "High Growth Potential",
                                features: ["Strategic Location", "Modern Amenities"]
                            }
                        ].map((investment, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white rounded-xl overflow-hidden shadow-lg
                                    transform transition-all duration-300 hover:-translate-y-2
                                    hover:shadow-xl"
                            >
                                <div className="relative h-64">
                                    <img
                                        src={investment.image}
                                        alt={investment.title}
                                        className="w-full h-full object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t 
                                        from-black/60 to-transparent" />
                                    <div className="absolute bottom-4 left-4 text-white">
                                        <h3 className="text-xl font-bold mb-1">
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
                                            className="inline-flex items-center gap-2 text-gray-600 
                                                hover:text-primary transition-colors group"
                                        >
                                            Learn More
                                            <ArrowRight className="w-4 h-4 transform 
                                                group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                    <div className="flex gap-2">
                                        {investment.features?.map((feature, idx) => (
                                            <span
                                                key={idx}
                                                className="text-sm px-3 py-1 bg-gray-100 
                                                    rounded-full text-gray-600"
                                            >
                                                {feature}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${bgImage})` }}
                />
                <div className="absolute inset-0 bg-primary/90 backdrop-blur-sm" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-3xl lg:text-5xl font-bold text-white mb-6">
                            Ready to Get Started?
                        </h2>
                        <p className="text-xl text-white/90 mb-12">
                            Let's work together to achieve your real estate goals. Our team of experts
                            is ready to assist you every step of the way.
                        </p>

                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Link
                                to="/contact"
                                className="inline-flex items-center justify-center gap-2 bg-white 
                                    text-primary px-8 py-4 rounded-full hover:bg-opacity-90 
                                    transition-all duration-300 group"
                            >
                                Contact Us
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 
                                    transition-transform" />
                            </Link>
                            <Link
                                to="/projects"
                                className="inline-flex items-center justify-center gap-2 
                                    border-2 border-white text-white px-8 py-4 rounded-full 
                                    hover:bg-white hover:text-primary transition-all duration-300 group"
                            >
                                View Projects
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 
                                    transition-transform" />
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Scroll To Top Button */}
            <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className={`fixed bottom-8 right-8 p-3 rounded-full bg-primary text-white
                    shadow-lg hover:bg-primary/90 transition-all duration-300 z-50`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                whileHover={{ scale: 1.1 }}
            >
                <ChevronUp className="w-6 h-6" />
            </motion.button>
        </main>
    );
};

export default ServicesPage;
