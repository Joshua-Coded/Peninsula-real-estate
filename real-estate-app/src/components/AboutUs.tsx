import React from "react";
import aboutImage1 from "../images/blog1.png";
import aboutImage2 from "../images/blog2.png";
import aboutImage3 from "../images/blog3.png";
import { ArrowRight, Award, Building2, Target, Users2 } from "lucide-react";
import { Link } from "react-router-dom";

const AboutUs = () => {
    const features = [
        {
            icon: <Building2 className="w-8 h-8" />,
            title: "Quality Construction",
            description: "Premium materials and expert craftsmanship in every project"
        },
        {
            icon: <Users2 className="w-8 h-8" />,
            title: "Customer Focus",
            description: "Dedicated to exceeding client expectations and needs"
        },
        {
            icon: <Target className="w-8 h-8" />,
            title: "Strategic Location",
            description: "Prime locations selected for optimal value and lifestyle"
        },
        {
            icon: <Award className="w-8 h-8" />,
            title: "Industry Excellence",
            description: "Award-winning developments and recognized expertise"
        }
    ];

    return (
        <div className="py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main Content Section */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                        About Peninsula Developments
                    </h2>

                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                        At Peninsula Developments Limited, we are dedicated to transforming the real estate landscape.
                        Our mission is to provide exceptional living spaces that cater to the needs of modern homeowners
                        and investors, setting new standards in luxury living and sustainable development.
                    </p>

                    <Link
                        to="/about"
                        onClick={() => window.scrollTo(0, 0)}
                        className="inline-flex items-center justify-center bg-[#0059B2] text-white py-3 px-8 rounded-lg transition-all duration-300 hover:bg-[#004391] group"
                    >
                        <span className="font-semibold">Learn More About Us</span>
                        <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                    </Link>
                </div>

                {/* Features Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                    {features.map((feature, index) => (
                        <div
                            key={index}
                            className="bg-white p-6 rounded-xl shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className="text-[#0059B2] mb-4">
                                {feature.icon}
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Image Grid Section */}
                <div className="relative">
                    {/* Desktop Image Grid */}
                    <div className="hidden md:grid grid-cols-3 gap-8">
                        {[aboutImage1, aboutImage2, aboutImage3].map((image, index) => (
                            <div
                                key={index}
                                className="group relative overflow-hidden rounded-xl shadow-lg aspect-[3/4]"
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                    style={{ backgroundImage: `url(${image})` }}
                                />
                                <div className="absolute inset-0 bg-black/20 transition-opacity duration-300 group-hover:opacity-0" />

                                {/* Hover Overlay */}
                                <div className="absolute inset-0 bg-[#0059B2]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="text-white text-center p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                                        <h4 className="text-xl font-bold mb-2">Exceptional Living</h4>
                                        <p className="text-sm">Discover our commitment to quality and innovation</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Mobile Image Grid */}
                    <div className="md:hidden space-y-6">
                        {[aboutImage2, aboutImage3].map((image, index) => (
                            <div
                                key={index}
                                className="relative overflow-hidden rounded-xl shadow-lg"
                                style={{ height: index === 0 ? '450px' : '300px' }}
                            >
                                <div
                                    className="absolute inset-0 bg-cover bg-center"
                                    style={{ backgroundImage: `url(${image})` }}
                                />
                                <div className="absolute inset-0 bg-black/20" />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;