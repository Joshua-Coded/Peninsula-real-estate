import React, { useState } from "react";
import image1 from "../images/image1.avif";
import image2 from "../images/image2.avif";
import image3 from "../images/image3.avif";
import { ArrowRight, Currency, Eye, MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const Properties = () => {
    const [hoveredId, setHoveredId] = useState<number | null>(null);

    const properties = [
        {
            id: 1,
            image: image1,
            name: "Luxury Apartment in Asaba",
            price: "#23,500,000.00",
            location: "Asaba, Nigeria",
            features: ["3 Bedrooms", "2 Bathrooms", "2 Parking"],
            status: "Available"
        },
        {
            id: 2,
            image: image2,
            name: "Elegant Villa in GRA, Asaba",
            price: "#43,000,000.00",
            location: "Asaba, Nigeria",
            features: ["4 Bedrooms", "3 Bathrooms", "3 Parking"],
            status: "Available"
        },
        {
            id: 3,
            image: image3,
            name: "Prime Commercial in Asaba",
            price: "#45,800,000.00",
            location: "Asaba, Nigeria",
            features: ["5 Offices", "4 Bathrooms", "10 Parking"],
            status: "Available"
        },
    ];

    return (
        <div className="py-16 px-4 md:px-8 lg:px-16 bg-gray-50">
            {/* Section Header */}
            <div className="text-center mb-12">
                <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                    Discover Our Premier Properties
                </h1>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Explore our handpicked selection of luxury properties, each crafted to exceed your expectations
                </p>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="group relative bg-white rounded-xl shadow-lg overflow-hidden transform transition-all duration-300 hover:-translate-y-2"
                        onMouseEnter={() => setHoveredId(property.id)}
                        onMouseLeave={() => setHoveredId(null)}
                    >
                        {/* Property Image */}
                        <div className="relative h-[400px] overflow-hidden">
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${property.image})` }}
                            />
                            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

                            {/* Status Badge */}
                            <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                                {property.status}
                            </div>
                        </div>

                        {/* Property Info */}
                        <div className="relative p-6">
                            <h2 className="text-xl font-bold text-gray-900 mb-2">
                                {property.name}
                            </h2>

                            <div className="flex items-center text-gray-600 mb-4">
                                <MapPin className="w-4 h-4 mr-2" />
                                <span className="text-sm">{property.location}</span>
                            </div>

                            <div className="flex items-center text-[#0059B2] font-bold mb-4">
                                <Currency className="w-4 h-4 mr-2" />
                                <span>{property.price}</span>
                            </div>

                            {/* Features */}
                            <div className="flex gap-4 mb-4">
                                {property.features.map((feature, index) => (
                                    <span
                                        key={index}
                                        className="text-xs bg-gray-100 text-gray-600 px-3 py-1 rounded-full"
                                    >
                                        {feature}
                                    </span>
                                ))}
                            </div>

                            {/* View Details Button */}
                            <Link
                                to={`/property/${property.id}`}
                                className="inline-flex items-center justify-center w-full bg-[#0059B2] text-white py-3 px-6 rounded-lg transition-all duration-300 hover:bg-[#004391] group"
                            >
                                <Eye className="w-5 h-5 mr-2" />
                                <span>View Details</span>
                                <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Properties Button */}
            <div className="text-center mt-12">
                <Link
                    to="/projects"
                    onClick={() => window.scrollTo(0, 0)}
                    className="inline-flex items-center justify-center bg-[#0059B2] text-white py-4 px-8 rounded-lg transition-all duration-300 hover:bg-[#004391] group"
                >
                    <span className="font-semibold">View All Properties</span>
                    <ArrowRight className="w-5 h-5 ml-2 transform transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
        </div>
    );
};

export default Properties;