import ContactFormSection from "../components/ContactFormSection";
import React, { useState } from "react";
import backgroundImage from "../images/house3.png";
import faq from "../images/faq.png";
import moreQuestionsBg from "../images/house5.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const ContactPage: React.FC = () => {
    const [faqOpen, setFaqOpen] = useState<number | null>(null);

    const toggleFaq = (index: number) => {
        setFaqOpen(faqOpen === index ? null : index); // Toggle open/close for each FAQ
    };

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

    return (
        <div>
            {/* Hero Section */}
            <div
                className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${backgroundImage})`, width: '100vw', minHeight: '100vh' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
                <div className="relative text-center px-4 max-w-2xl z-10">
                    <h1 className="text-4xl md:text-5xl font-bold">Get in Touch with Us</h1>
                    <p className="mt-4 text-xl">
                        We are here to assist you with all your real estate needs. Feel free to reach out to us!
                    </p>
                </div>
            </div>

            {/* Contact Form Section */}
            {/* <div className="py-12 px-6">
                <h2 className="text-3xl font-bold text-center">Send Us a Message</h2>
                <p className="text-lg text-center mt-4 max-w-4xl mx-auto">
                    Fill out the form to get in touch with us. We'll get back to you as soon as possible.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                  
                    <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
                        <h3 className="text-xl font-bold">Contact Details</h3>
                        <p><FaPhoneAlt className="inline-block mr-2 text-primary" /> +123 456 7890</p>
                        <p><FaEnvelope className="inline-block mr-2 text-primary" /> info@peninsula.com</p>
                        <p><FaMapMarkerAlt className="inline-block mr-2 text-primary" /> 1234 Elm St, Asaba, Nigeria</p>
                        <div className="flex space-x-4 mt-4">
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={24} className="text-primary" />
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                                <FaTwitter size={24} className="text-primary" />
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={24} className="text-primary" />
                            </a>
                        </div>
                    </div>

                  
                    <form className="bg-white shadow-lg rounded-lg p-6 space-y-4">
                        <div>
                            <label className="block text-gray-600">Full Name</label>
                            <input
                                type="text"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600">Email Address</label>
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                                placeholder="Your Email"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600">Message</label>
                            <textarea
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                                rows={5}
                                placeholder="Your Message"
                            ></textarea>
                        </div>
                        <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                            Send Message
                        </button>
                    </form>
                </div>

            </div> */}
            <ContactFormSection />

            {/* FAQ Section */}
            <div className="py-12 px-6 bg-gray-50">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    {/* FAQ List */}
                    <div>
                        <h2 className="text-3xl font-bold mb-8">Frequently Asked Questions</h2>
                        {faqs.map((faq, index) => (
                            <div key={index} className="mb-4">
                                <div
                                    className="cursor-pointer text-lg font-semibold text-primary flex justify-between items-center"
                                    onClick={() => toggleFaq(index)}
                                >
                                    {faq.question}
                                    {faqOpen === index ? (
                                        <span className="text-xl">-</span>
                                    ) : (
                                        <span className="text-xl">+</span>
                                    )}
                                </div>
                                {faqOpen === index && (
                                    <p className="mt-2 text-gray-600">{faq.answer}</p>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* FAQ Image */}
                    <img
                        src={faq}
                        alt="FAQ"
                        className="w-full h-72 object-cover rounded-md"
                    />
                </div>
            </div>

            {/* More Questions Section */}
            <div
                className="h-96 bg-cover bg-center text-white flex justify-center items-center w-full"
                style={{ backgroundImage: `url(${moreQuestionsBg})` }}
            >
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold">Have More Questions?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        Feel free to reach out to us for more detailed information. We're happy to assist you.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;
