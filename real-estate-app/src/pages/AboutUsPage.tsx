import React, { useEffect, useRef } from "react";
import approachImage from "../images/approach.png";
import backgroundImage from "../images/image2.avif";
import ctaBackground from "../images/house1.png";
import customerFocusIcon from "../images/Group.png";
import innovationIcon from "../images/Settings.png";
import integrityIcon from "../images/house-heart.png";
import missionImage from "../images/mission.png";
import qualityIcon from "../images/User.png";
import visionImage from "../images/house5.png";
import { ArrowRight, Award, ChevronDown, Lightbulb, Shield, Users } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUsPage = () => {
    const valuesRef = useRef<HTMLDivElement>(null);

    const fadeInOnScroll = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-10');
            }
        });
    };

    useEffect(() => {
        const observer = new IntersectionObserver(fadeInOnScroll, {
            threshold: 0.1
        });

        document.querySelectorAll('.fade-in-section').forEach((element) => {
            observer.observe(element);
        });

        return () => observer.disconnect();
    }, []);

    const values = [
        {
            icon: <Shield className="w-8 h-8" />,
            title: "Integrity",
            description: "We conduct our business with the highest ethical standards, ensuring transparency and trust in every interaction."
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Quality",
            description: "We prioritize exceptional quality in every project, delivering premium properties that stand the test of time."
        },
        {
            icon: <Lightbulb className="w-8 h-8" />,
            title: "Innovation",
            description: "We embrace cutting-edge technology and innovative solutions to create future-ready living spaces."
        },
        {
            icon: <Users className="w-8 h-8" />,
            title: "Customer Focus",
            description: "Our clients' satisfaction drives everything we do, from initial concept to final delivery."
        }
    ];

    return (
        <div className="overflow-hidden">
            {/* Hero Section */}
            <div
                className="relative min-h-screen flex items-center justify-center"
                style={{
                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${backgroundImage})`
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent" />
                <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 opacity-0 translate-y-10 animate-fade-in-up">
                        Who We Are
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 mb-8 opacity-0 translate-y-10 animate-fade-in-up animation-delay-200">
                        Peninsula Developments Limited is shaping the future of real estate through innovation,
                        excellence, and unwavering commitment to quality.
                    </p>
                    <Link
                        to="/contact"
                        className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-white px-8 py-4 
                            rounded-full hover:bg-white hover:text-primary transition-all duration-300 
                            text-lg font-medium border border-white/20 opacity-0 translate-y-10 animate-fade-in-up 
                            animation-delay-400"
                    >
                        Get in touch
                        <ArrowRight className="w-5 h-5" />
                    </Link>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
                    </div>
                </div>
            </div>

            {/* Our Approach Section */}
            <div className="py-24 px-4 bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16 fade-in-section opacity-0 translate-y-10 transition-all duration-700">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Approach</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            We blend innovation with practicality, ensuring every project delivers exceptional value
                            while maintaining our commitment to sustainability and excellence.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
                        <div className="fade-in-section opacity-0 translate-y-10 transition-all duration-700">
                            <h3 className="text-3xl font-bold text-gray-900 mb-8">What Sets Us Apart</h3>
                            <div className="space-y-6">
                                {[
                                    "Client-Centric Focus: Creating spaces that perfectly align with individual needs.",
                                    "Innovative Solutions: Integrating cutting-edge technology for future-ready homes.",
                                    "Sustainable Development: Ensuring long-term value and environmental responsibility.",
                                    "Quality Assurance: Maintaining exceptional standards throughout every project."
                                ].map((text, index) => (
                                    <div key={index}
                                        className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-lg 
                                            hover:shadow-xl transition-all duration-300 cursor-pointer group"
                                    >
                                        <ArrowRight className="w-6 h-6 text-primary flex-shrink-0 
                                            group-hover:translate-x-1 transition-transform duration-300" />
                                        <p className="text-gray-700">{text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="relative fade-in-section opacity-0 translate-y-10 transition-all duration-700">
                            <div className="absolute inset-0 bg-primary/10 rounded-lg transform rotate-3 transition-transform group-hover:rotate-6" />
                            <img
                                src={approachImage}
                                alt="Our Approach"
                                className="relative rounded-lg shadow-xl transform transition-all duration-500 hover:-translate-y-2"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Mission & Vision Section */}
            <div className="py-24 bg-primary/5">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
                        <div className="relative fade-in-section opacity-0 translate-y-10 transition-all duration-700">
                            <div className="group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/10 rounded-lg transform -rotate-3 transition-transform group-hover:rotate-0" />
                                <img src={missionImage} alt="Mission" className="relative rounded-lg shadow-xl" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center text-white p-6">
                                        <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                                        <p>Redefining luxury living through sustainable innovation and exceptional quality.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative fade-in-section opacity-0 translate-y-10 transition-all duration-700">
                            <div className="group cursor-pointer">
                                <div className="absolute inset-0 bg-gradient-to-l from-primary/20 to-primary/10 rounded-lg transform rotate-3 transition-transform group-hover:rotate-0" />
                                <img src={visionImage} alt="Vision" className="relative rounded-lg shadow-xl" />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    <div className="text-center text-white p-6">
                                        <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                                        <p>Leading global real estate development through excellence and innovation.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Values Section */}
            <div className="py-24 px-4" ref={valuesRef}>
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 fade-in-section opacity-0 translate-y-10 transition-all duration-700">
                        Our Core Values
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {values.map((value, index) => (
                            <div
                                key={index}
                                className="group bg-white rounded-xl p-8 shadow-lg hover:shadow-xl 
                                    transition-all duration-300 fade-in-section opacity-0 translate-y-10 
                                    hover:-translate-y-2"
                                style={{ transitionDelay: `${index * 100}ms` }}
                            >
                                <div className="flex flex-col items-center text-center">
                                    <div className="p-4 bg-primary/10 rounded-full text-primary mb-6 
                                        group-hover:scale-110 transition-transform duration-300">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-4 text-gray-900">{value.title}</h3>
                                    <p className="text-gray-600">{value.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Call to Action Section */}
            <div className="relative min-h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${ctaBackground})`
                    }}
                />
                <div className="relative z-10 flex items-center justify-center min-h-screen">
                    <div className="text-center px-4 max-w-3xl mx-auto fade-in-section opacity-0 translate-y-10 transition-all duration-700">
                        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
                            Join Us on This Journey
                        </h2>
                        <p className="text-xl text-white/90 mb-12">
                            Let's create exceptional living spaces together. Discover how Peninsula Developments
                            can transform your real estate aspirations into reality.
                        </p>
                        <Link
                            to="/contact"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 
                                rounded-full hover:bg-primary hover:text-white transition-all duration-300 
                                text-lg font-medium"
                        >
                            Start Your Journey
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;


