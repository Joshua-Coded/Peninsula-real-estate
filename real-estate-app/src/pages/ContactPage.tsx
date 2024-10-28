import ContactFormSection from "../components/ContactFormSection";
import React, { useEffect, useState } from "react";
import backgroundImage from "../images/house3.png";
import faq from "../images/faq.png";
import moreQuestionsBg from "../images/house5.png";

import {
    Mail, Phone, MapPin, Facebook, Instagram, Twitter,
    Plus, Minus, MessageCircle, ChevronDown, ExternalLink, ArrowRight
} from "lucide-react";

interface FAQ {
    question: string;
    answer: string;
    category?: string;
}

const ContactPage: React.FC = () => {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);
    const [selectedCategory, setSelectedCategory] = useState<string>("All");
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, []);

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

    const categories = ["All", "Services", "Properties", "Investment", "General"];

    const faqs: FAQ[] = [
        {
            question: "How do I contact customer service?",
            answer: "You can reach our dedicated customer service team through email, phone, or by filling out the contact form above. We aim to respond to all inquiries within 24 hours.",
            category: "General"
        },
        {
            question: "What are your operating hours?",
            answer: "We are open from Monday to Friday, 9am to 6pm. Weekend appointments are available by special arrangement.",
            category: "General"
        },
        // ... your other FAQs with categories
    ];

    const filteredFaqs = faqs.filter(faq => {
        const matchesCategory = selectedCategory === "All" || faq.category === selectedCategory;
        const matchesSearch = faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
            faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    const toggleFaq = (index: number) => {
        setFaqOpen(faqOpen === index ? null : index);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${backgroundImage})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />

                <div className="relative h-full flex flex-col justify-center items-center px-4">
                    <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Get in Touch with Us
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-12">
                            We're here to answer your questions and help you find your perfect property.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <a
                                href="#contact-form"
                                className="inline-flex items-center justify-center gap-2 bg-primary text-white 
                                    px-8 py-4 rounded-full hover:bg-white hover:text-primary 
                                    transition-all duration-300"
                            >
                                <MessageCircle className="w-5 h-5" />
                                Send Message
                            </a>
                            <a
                                href="tel:+1234567890"
                                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm 
                                    text-white px-8 py-4 rounded-full hover:bg-white hover:text-primary 
                                    transition-all duration-300 border border-white/20"
                            >
                                <Phone className="w-5 h-5" />
                                Call Us Now
                            </a>
                        </div>
                    </div>
                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-white" />
                    </div>
                </div>
            </div>

            {/* Contact Info Cards */}
            <div className="relative z-10 max-w-7xl mx-auto px-4 -mt-20">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {[
                        {
                            icon: <Phone className="w-6 h-6" />,
                            title: "Call Us",
                            content: "+234 XXX XXX XXXX",
                            action: "tel:+234XXXXXXXX",
                            color: "bg-blue-500"
                        },
                        {
                            icon: <Mail className="w-6 h-6" />,
                            title: "Email Us",
                            content: "info@peninsuladevelopments.com",
                            action: "mailto:info@peninsuladevelopments.com",
                            color: "bg-green-500"
                        },
                        {
                            icon: <MapPin className="w-6 h-6" />,
                            title: "Visit Us",
                            content: "Asaba, Delta State, Nigeria",
                            action: "#map",
                            color: "bg-purple-500"
                        }
                    ].map((item, index) => (
                        <a
                            key={index}
                            href={item.action}
                            className="group bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 
                                hover:-translate-y-2 hover:shadow-xl"
                        >
                            <div className={`${item.color} w-12 h-12 rounded-full flex items-center justify-center 
                                text-white mb-4 transform transition-transform group-hover:scale-110`}>
                                {item.icon}
                            </div>
                            <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                            <p className="text-gray-600 mb-4">{item.content}</p>
                            <div className="flex items-center text-primary font-medium">
                                <span>Contact Now</span>
                                <ArrowRight className="w-4 h-4 ml-2 transform transition-transform 
                                    group-hover:translate-x-2" />
                            </div>
                        </a>
                    ))}
                </div>
            </div>

            {/* Contact Form Section */}
            <ContactFormSection />

            {/* FAQ Section */}
            <div className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-4xl font-bold mb-6">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600 mb-8">
                            Find answers to common questions about our services and properties
                        </p>

                        {/* FAQ Search & Categories */}
                        <div className="max-w-2xl mx-auto mb-12">
                            <div className="relative mb-6">
                                <input
                                    type="text"
                                    placeholder="Search FAQs..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full px-6 py-4 pr-12 rounded-full border focus:outline-none 
                                        focus:ring-2 focus:ring-primary/50"
                                />
                                <MessageCircle className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                            </div>

                            <div className="flex flex-wrap justify-center gap-2">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => setSelectedCategory(category)}
                                        className={`px-4 py-2 rounded-full transition-all duration-300
                                            ${selectedCategory === category
                                                ? 'bg-primary text-white'
                                                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                            }`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {filteredFaqs.map((faq, index) => (
                                <div
                                    key={index}
                                    className="bg-white rounded-lg shadow-md hover:shadow-lg 
                                        transition-all duration-300"
                                >
                                    <button
                                        onClick={() => toggleFaq(index)}
                                        className="w-full p-6 text-left flex justify-between items-center"
                                    >
                                        <span className="font-medium pr-4">{faq.question}</span>
                                        {faqOpen === index ? (
                                            <Minus className="w-5 h-5 flex-shrink-0 text-primary" />
                                        ) : (
                                            <Plus className="w-5 h-5 flex-shrink-0 text-gray-400" />
                                        )}
                                    </button>
                                    {faqOpen === index && (
                                        <div className="px-6 pb-6 text-gray-600">
                                            {faq.answer}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* More Questions Section */}
            <div className="relative py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center bg-fixed"
                    style={{ backgroundImage: `url(${moreQuestionsBg})` }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 backdrop-blur-sm" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Still Have Questions?
                    </h2>
                    <p className="text-xl mb-12">
                        Our team is here to provide personalized assistance and answer any questions you may have.
                    </p>
                    <div className="flex justify-center gap-4">
                        <a
                            href="#contact-form"
                            className="inline-flex items-center gap-2 bg-white text-primary px-8 py-4 
                                rounded-full hover:bg-primary hover:text-white transition-all duration-300"
                        >
                            Contact Us
                            <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="tel:+1234567890"
                            className="inline-flex items-center gap-2 bg-transparent text-white px-8 py-4 
                                rounded-full hover:bg-white hover:text-primary transition-all duration-300
                                border border-white"
                        >
                            Call Now
                            <Phone className="w-5 h-5" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;