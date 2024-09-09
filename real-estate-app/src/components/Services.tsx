import React from "react";
import serviceImage1 from "../images/image2.avif";
import serviceImage2 from "../images/image3.avif";

const Services: React.FC = () => {
    return (
        <div className="px-6 py-12 flex justify-center"> {/* Center the whole component */}
            <div className="max-w-screen-lg grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* Left side - Services text and additional image */}
                <div className="space-y-6">
                    <h2 className="text-2xl md:text-3xl font-bold text-center md:text-left">Our Services</h2>
                    <p className="text-sm md:text-base leading-relaxed text-center md:text-left">
                        At Peninsula Development Limited, we offer a range of services designed to meet your housing needs.
                        Whether you're looking for high-quality residential properties, professional maintenance services, or tailored
                        customer support, we are here to provide solutions.
                    </p>
                    <div className="flex justify-center md:justify-start">
                        <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                            Explore Services
                        </button>
                    </div>

                    {/* Additional image below services content */}
                    <img
                        src={serviceImage2}
                        alt="Service Image 2"
                        className="w-full md:max-w-md h-64 object-cover rounded-md border-8 border-white mx-auto md:mx-0"
                    />
                </div>

                {/* Right side - Image and statistics */}
                <div className="space-y-6 flex flex-col items-center">
                    {/* Service Image */}
                    <img
                        src={serviceImage1}
                        alt="Our Services"
                        className="w-full md:max-w-md h-64 object-cover rounded-md border-8 border-white"
                    />

                    {/* Modern and Professional Statistics */}
                    <div className="flex flex-col items-center space-y-6 w-full">
                        {/* Ready Units */}
                        <div className="text-center w-full">
                            <p className="text-4xl font-extrabold text-primary">+1000</p>
                            <p className="text-sm text-gray-600">Ready Units</p>
                        </div>

                        {/* Flex row for Customers and Reviews */}
                        <div className="flex justify-between w-full px-6 md:px-12"> {/* Added more padding for better alignment */}
                            {/* Customers */}
                            <div className="text-center flex-1">
                                <p className="text-4xl font-extrabold text-primary">+60k</p>
                                <p className="text-sm text-gray-600">Customers</p>
                            </div>
                            {/* Reviews */}
                            <div className="text-center flex-1">
                                <p className="text-4xl font-extrabold text-primary">+21k</p>
                                <p className="text-sm text-gray-600">Reviews</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
