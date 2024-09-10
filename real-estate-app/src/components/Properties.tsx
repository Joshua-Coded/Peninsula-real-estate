import React from "react";
import image1 from "../images/image1.avif";
import image2 from "../images/image2.avif";
import image3 from "../images/image3.avif";
import { Link } from "react-router-dom";

const Properties: React.FC = () => {
    const properties = [
        {
            id: 1,
            image: image1,
            name: "Luxury Villa",
            price: "$1,200,000",
            location: "Asaba, Nigeria"
        },
        {
            id: 2,
            image: image2,
            name: "Modern Apartment",
            price: "$850,000",
            location: "Lekki, Lagos"
        },
        {
            id: 3,
            image: image3,
            name: "Beach House",
            price: "$1,500,000",
            location: "Victoria Island, Lagos"
        }
    ];

    return (
        <div className="px-0 py-12"> {/* Removed padding on the sides */}
            {/* Section Header - Flex row for desktop */}
            <div className="flex justify-between items-center mb-10 md:flex-row flex-col"> {/* Flex container for h1 and button */}
                <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-0">Featured Properties</h1>
                {/* View All Properties Button - Visible only on desktop */}
                <Link to="/properties">  {/* Link to Properties Page */}
                    <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all hidden md:block">
                        View All Properties
                    </button>
                </Link>
            </div>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-0"> {/* Removed gap between the grid items */}
                {properties.map((property) => (
                    <div key={property.id} className="relative group">
                        {/* Property Image - Increased height */}
                        <img src={property.image} alt={property.name} className="w-full h-[28rem] object-cover" /> {/* Height set to 28rem */}

                        {/* Property Info Container - Reduced shadow opacity */}
                        <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-50 p-4 text-white"> {/* Reduced shadow opacity */}
                            <div className="flex justify-between">
                                <h2 className="text-lg font-bold">{property.name}</h2>
                                <div className="flex flex-col text-right">
                                    <span className="text-sm font-semibold">{property.price}</span>
                                    <span className="text-sm">{property.location}</span>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Properties Button - Visible only on mobile at the bottom */}
            <div className="flex justify-center mt-10 md:hidden"> {/* Hidden on desktop */}
                <Link to="/properties">  {/* Link to Properties Page */}
                    <button
                        className="bg-primary text-white py-3 px-8 rounded-md hover:bg-white hover:text-primary transition-all">
                        View All Properties
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Properties;
