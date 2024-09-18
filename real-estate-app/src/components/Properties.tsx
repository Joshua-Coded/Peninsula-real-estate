import React from "react";
import image1 from "../images/house2.png";
import image2 from "../images/house3.png";
import image3 from "../images/house5.png";
import { Link } from "react-router-dom";

const Properties: React.FC = () => {
    const properties = [
        {
            id: 1,
            image: image1,
            name: "Luxury Apartment in Asaba",
            price: "#23,500,000.00",
            location: "Asaba, Nigeria",
        },
        {
            id: 2,
            image: image2,
            name: "Elegant Villa in GRA, Asaba",
            price: "#43,000,000.00",
            location: "Asaba, Nigeria",
        },
        {
            id: 3,
            image: image3,
            name: "Prime Commercial in Asaba",
            price: "#45,800,000.00",
            location: "Asaba, Nigeria",
        },
    ];

    return (
        <div className="flex flex-col justify-start items-center gap-6 py-12"> {/* Flexbox and gap for spacing */}
            {/* Section Title */}
            <h1 className="text-center text-[#333333] text-2xl md:text-[24px] font-bold font-open-sans">
                Discover Our Premier Properties
            </h1>

            {/* Properties Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full px-6"> {/* Grid for properties */}
                {properties.map((property) => (
                    <div
                        key={property.id}
                        className="relative h-[552px] bg-cover bg-center flex flex-col justify-end p-4 text-white"
                        style={{ backgroundImage: `url(${property.image})` }} // Inline background image
                    >
                        {/* Property Info */}
                        <div className="bg-black bg-opacity-50 p-4 rounded-lg">
                            <h2 className="text-[16px] font-bold">{property.name}</h2>
                            <div className="flex justify-between mt-2">
                                <span className="text-[12px] font-light">Price: {property.price}</span>
                                <span className="text-[12px] font-light">Location: {property.location}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View All Properties Button */}
            <div className="mt-8">
                <Link to="/properties">
                    <button className="bg-[#0059B2] text-white py-3 px-8 rounded-md hover:bg-white hover:text-[#0059B2] transition-all">
                        View All Properties
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Properties;
