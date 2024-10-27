import React, { useEffect, useState } from "react";
import testimonialImage1 from "../images/test1.png";
import testimonialImage2 from "../images/test13.webp";
import testimonialImage3 from "../images/test12.webp";
import { Building2, Calendar, ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

const Testimonials = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    const testimonials = [
        {
            name: "John Doe",
            position: "Property Investor",
            text: "Peninsula Development Limited helped me find the perfect investment property. Their market knowledge and professional guidance made the entire process seamless. The returns have exceeded my expectations.",
            image: testimonialImage1,
            propertyType: "Luxury Apartment",
            date: "2024",
            rating: 5
        },
        {
            name: "Jane Smith",
            position: "Homeowner",
            text: "Working with Peninsula was an excellent experience. Their attention to detail and commitment to quality is unmatched. They didn't just find us a house, they found us our dream home.",
            image: testimonialImage2,
            propertyType: "Family Villa",
            date: "2024",
            rating: 5
        },
        {
            name: "Michael Brown",
            position: "Business Owner",
            text: "I can't thank Peninsula enough for their dedication and commitment. They understood our commercial needs perfectly and delivered a property that has transformed our business operations.",
            image: testimonialImage3,
            propertyType: "Commercial Space",
            date: "2024",
            rating: 5
        },
    ];

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }
    };

    const handlePrevious = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        }
    };

    useEffect(() => {
        const timer = setInterval(handleNext, 6000);
        return () => clearInterval(timer);
    }, []);

    const handleTransitionEnd = () => {
        setIsAnimating(false);
    };

    return (
        <div className="relative py-24 overflow-hidden">
            {/* Background */}
            <div
                className="absolute inset-0 z-0"
                style={{
                    background: "linear-gradient(122deg, #0073E5 1%, #00407F 100%)",
                    clipPath: "polygon(0 5%, 100% 0, 100% 95%, 0 100%)"
                }}
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Hear from Our Satisfied Clients
                    </h2>
                    <p className="text-lg text-white/80">
                        We help create exceptional living spaces. See what our clients have to say about their experience.
                    </p>
                </div>

                {/* Testimonial Card */}
                <div className="relative max-w-6xl mx-auto">
                    {/* Navigation Buttons */}
                    <button
                        onClick={handlePrevious}
                        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0073E5] transition-all duration-300"
                        disabled={isAnimating}
                    >
                        <ChevronLeft className="w-6 h-6" />
                    </button>
                    <button
                        onClick={handleNext}
                        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-20 p-3 rounded-full bg-white/10 text-white hover:bg-white hover:text-[#0073E5] transition-all duration-300"
                        disabled={isAnimating}
                    >
                        <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Main Content */}
                    <div
                        className="flex flex-col md:flex-row items-center gap-8 md:gap-16"
                        onTransitionEnd={handleTransitionEnd}
                    >
                        {/* Image */}
                        <div className="w-full md:w-1/2">
                            <div className="relative group">
                                <div className="absolute inset-0 bg-[#0073E5] rounded-2xl transform rotate-6 scale-105 transition-transform duration-300 group-hover:rotate-4" />
                                <img
                                    src={testimonials[currentTestimonial].image}
                                    alt={testimonials[currentTestimonial].name}
                                    className="relative rounded-2xl w-full h-[400px] object-cover shadow-xl transform transition-transform duration-300 group-hover:translate-x-2 group-hover:translate-y-2"
                                />
                            </div>
                        </div>

                        {/* Testimonial Content */}
                        <div className="w-full md:w-1/2">
                            <div className="bg-white rounded-2xl p-8 shadow-xl">
                                <div className="flex items-center gap-2 text-yellow-400 mb-4">
                                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                                        <Star key={i} className="w-5 h-5 fill-current" />
                                    ))}
                                </div>

                                <Quote className="w-10 h-10 text-[#0073E5] mb-4" />

                                <p className="text-gray-700 text-lg mb-6">
                                    {testimonials[currentTestimonial].text}
                                </p>

                                <div className="border-t pt-6">
                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {testimonials[currentTestimonial].name}
                                    </h3>
                                    <p className="text-gray-600 mb-4">
                                        {testimonials[currentTestimonial].position}
                                    </p>

                                    <div className="flex items-center gap-6 text-sm text-gray-500">
                                        <div className="flex items-center gap-2">
                                            <Building2 className="w-4 h-4" />
                                            <span>{testimonials[currentTestimonial].propertyType}</span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            <span>{testimonials[currentTestimonial].date}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Indicators */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentTestimonial(index)}
                                className={`w-2 h-2 rounded-full transition-all duration-300 ${currentTestimonial === index
                                    ? 'w-8 bg-white'
                                    : 'bg-white/50'
                                    }`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;



const faqs = [
    { question: "How do I contact customer service?", answer: "You can reach us through email or phone." },
    { question: "What are your operating hours?", answer: "We are open from Monday to Friday, 9am to 6pm." },
    { question: "How can I schedule a property visit?", answer: "Simply contact us via the form or social media." },
    { question: "Do you offer property management services?", answer: "Yes, we provide full property management services." },
    { question: "What areas do you serve?", answer: "We provide services in multiple cities across Nigeria." },
    { question: "Can I get a virtual tour?", answer: "Yes, virtual tours are available upon request." },
    { question: "Do you offer investment opportunities?", answer: "We have a wide range of investment options for you." },
    { question: "How long does it take to finalize a deal?", answer: "The timeline varies depending on the property and client needs." },
    { question: "Can I get assistance with property documentation?", answer: "Yes, we provide full support with documentation." },
    { question: "Do you offer consulting services?", answer: "Yes, we offer real estate consulting for buyers and investors." },
    { question: "Are your properties customizable?", answer: "Yes, we offer customization options for some of our properties." },
    { question: "What are your payment options?", answer: "We accept various forms of payment including bank transfers and financing options." },
];

