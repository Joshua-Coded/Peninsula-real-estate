import React from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

const ContactFormSection: React.FC = () => {
    return (
        <div className="py-12 px-6">
            {/* Section Header */}
            <h2 className="text-3xl font-bold text-center">Send Us a Message</h2>
            <p className="text-lg text-center mt-4 max-w-4xl mx-auto">
                Fill out the form to get in touch with us. We'll get back to you as soon as possible.
            </p>

            {/* Contact Details and Form Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Left Side: Contact Details and Background Box */}
                <div className="col-span-1 bg-primary text-white rounded-lg shadow-lg p-6 flex flex-col justify-between">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Contact Details</h3>
                        <p className="flex items-center">
                            <FaPhoneAlt className="inline-block mr-2 text-white" /> +123 456 7890
                        </p>
                        <p className="flex items-center">
                            <FaEnvelope className="inline-block mr-2 text-white" /> info@peninsula.com
                        </p>
                        <p className="flex items-center">
                            <FaMapMarkerAlt className="inline-block mr-2 text-white" /> 1234 Elm St, Asaba, Nigeria
                        </p>
                    </div>

                    {/* Social Media Icons (Bottom 10%) */}
                    <div className="flex justify-center space-x-4 mt-auto mb-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaTwitter size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300">
                            <FaInstagram size={24} />
                        </a>
                    </div>
                </div>

                {/* Background Box Next to Contact Details */}
                <div className="col-span-2 bg-gray-100 rounded-lg p-6 shadow-lg">
                    <h3 className="text-xl font-bold text-primary">Why Reach Out to Us?</h3>
                    <p className="text-lg mt-4 leading-relaxed">
                        Whether you have a question about our services, need assistance with an ongoing project, or want to learn more about investment opportunities, we're here to help.
                        Feel free to get in touch with us!
                    </p>
                </div>

                {/* Right Side: Contact Form (70% Width) */}
                <div className="col-span-2 bg-white rounded-lg p-6 shadow-lg space-y-4">
                    <form className="space-y-4">
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
                        <button className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all w-full">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;
