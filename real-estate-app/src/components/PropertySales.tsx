import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import React from "react";
import Slider from "react-slick";
import propertyImage1 from "../images/house1.png";
import propertyImage2 from "../images/house2.png";
import propertyImage3 from "../images/house3.png";
import { Link } from "react-router-dom";

// Property Sales Section with Auto-Sliding Carousel
const PropertySales = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3, // Show 3 slides at a time
        slidesToScroll: 1,
        autoplay: true, // Enable auto sliding
        autoplaySpeed: 3000, // 3 seconds between slides
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

    return (
        <div className="bg-primary text-white py-12 px-6">
            <h2 className="text-3xl font-bold text-center">Property Sales</h2>
            <p className="text-lg text-center mt-4 max-w-4xl mx-auto leading-relaxed">
                At Peninsula Development Limited, we specialize in providing secure, sophisticated, and comfortable homes.
                Our property sales service is tailored to ensure that you find the perfect home or investment property.
            </p>
            <div className="text-center mt-6">
                {/* Updated Link to navigate to the projects page */}
                <Link to="/projects">
                    <button className="bg-white text-primary py-2 px-6 rounded-md hover:bg-primary hover:text-white transition-all">
                        Explore Properties
                    </button>
                </Link>
            </div>

            {/* Carousel Section */}
            <div className="mt-8">
                <Slider {...settings}>
                    <div>
                        <img src={propertyImage1} alt="Property 1" className="w-full h-64 object-cover rounded-md" />
                    </div>
                    <div>
                        <img src={propertyImage2} alt="Property 2" className="w-full h-64 object-cover rounded-md" />
                    </div>
                    <div>
                        <img src={propertyImage3} alt="Property 3" className="w-full h-64 object-cover rounded-md" />
                    </div>
                    <div>
                        <img src={propertyImage1} alt="Property 4" className="w-full h-64 object-cover rounded-md" />
                    </div>
                    <div>
                        <img src={propertyImage2} alt="Property 5" className="w-full h-64 object-cover rounded-md" />
                    </div>
                </Slider>
            </div>
        </div>
    );
};

export default PropertySales;
