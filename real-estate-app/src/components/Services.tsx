import React, { useEffect, useRef, useState } from "react";
import serviceImage1 from "../images/house1.png";
import serviceImage2 from "../images/house6.png";
import { Link } from "react-router-dom";

const Services: React.FC = () => {
    // State variables for the counts
    const [readyUnits, setReadyUnits] = useState(0);
    const [customers, setCustomers] = useState(0);
    const [reviews, setReviews] = useState(0);

    const impactSectionRef = useRef<HTMLDivElement | null>(null);
    const [hasCounted, setHasCounted] = useState(false);

    // Function to handle the count-up logic
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

    const scrollToTop = () => {
        window.scrollTo(0, 0); // Scrolls the page to the top
    };

    return (
        <div className="flex flex-col justify-center items-center gap-16 py-12">
            <div className="text-center">
                <h2 className="text-[#333333] text-2xl md:text-3xl font-bold font-open-sans mb-4">Our Services</h2>
                <p className="text-[rgba(51,51,51,0.7)] text-base font-open-sans font-light max-w-xl mx-auto">
                    From property sales to investment opportunities and comprehensive property management, we offer a full spectrum of real estate services.
                </p>
            </div>

            <div className="flex flex-col md:flex-row justify-center items-center gap-8">
                {/* Image */}
                <img
                    src={serviceImage1}
                    alt="Service"
                    className="w-full md:w-[401px] h-[224px] object-cover rounded-lg shadow-md border-4 border-white"
                />
                <img
                    src={serviceImage2}
                    alt="Service"
                    className="w-full md:w-[401px] h-[280px] object-cover rounded-lg shadow-lg border-4 border-white"
                />
            </div>

            {/* Stats Section */}
            <div ref={impactSectionRef} className="flex flex-col items-center gap-8 mt-12">
                <div className="flex justify-center items-center gap-16">
                    <div className="text-center">
                        <p className="text-[#333333] text-2xl font-bold font-open-sans">{readyUnits}</p>
                        <p className="text-[rgba(51,51,51,0.7)] text-sm font-open-sans">Ready Units</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[#333333] text-2xl font-bold font-open-sans">{customers.toLocaleString()}</p>
                        <p className="text-[rgba(51,51,51,0.7)] text-sm font-open-sans">Customers</p>
                    </div>
                    <div className="text-center">
                        <p className="text-[#333333] text-2xl font-bold font-open-sans">{reviews.toLocaleString()}</p>
                        <p className="text-[rgba(51,51,51,0.7)] text-sm font-open-sans">Reviews</p>
                    </div>
                </div>
                <div className="bg-[#0059B2] text-white rounded-lg py-3 px-8 text-center hover:bg-opacity-90 transition-all">
                    <Link to="/services" className="text-base font-semibold font-open-sans" onClick={scrollToTop}>
                        Explore Our Services
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Services;
