import React from "react";
import logo from "../images/logo.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-[#003366] text-white py-10">
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left px-6 md:px-12">
                {/* Contact Details Section */}
                <div className="space-y-4">
                    <h3 className="text-[16px] font-bold font-open-sans">
                        Contact Details
                    </h3>
                    <p className="text-[rgba(255, 255, 255, 0.70)] text-[16px] font-light font-open-sans">
                        Asaba, Delta State, Nigeria.
                    </p>
                    <p className="text-[rgba(255, 255, 255, 0.70)] text-[16px] font-light font-open-sans">
                        Info@peninsuladevelopments.com
                    </p>
                    <p className="text-[rgba(255, 255, 255, 0.70)] text-[16px] font-light font-open-sans">
                        Peninsuladevelopments@gmail.com
                    </p>
                </div>

                {/* Follow Us Section */}
                <div className="text-left md:text-center space-y-4">
                    <h3 className="text-[16px] font-bold font-open-sans">Follow Us</h3>
                    <div className="flex justify-start md:justify-center space-x-6"> {/* Centered icons on desktop */}
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255, 255, 255, 0.70)] hover:text-gray-300">
                            <FaFacebook size={24} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[rgba(255, 255, 255, 0.70)] hover:text-gray-300">
                            <FaInstagram size={24} />
                        </a>
                        <a href="https://wa.me/2347049453261" target="_blank" rel="noopener noreferrer" className="text-[rgba(255, 255, 255, 0.70)] hover:text-gray-300">
                            <FaWhatsapp size={24} />
                        </a>
                    </div>
                </div>

                {/* Quick Links Section */}
                <div className="space-y-4">
                    <h3 className="text-[16px] font-bold font-open-sans">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about" className="text-[rgba(255, 255, 255, 0.70)] text-[16px] font-light font-open-sans hover:text-gray-300">
                                About Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/services" className="text-[rgba(255, 255, 255, 0.70)] text-[16px] font-light font-open-sans hover:text-gray-300">
                                Services
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact" className="text-[rgba(255, 255, 255, 0.70)] text-[16px] font-light font-open-sans hover:text-gray-300">
                                Contact Us
                            </Link>
                        </li>
                        <li>
                            <Link to="/blog" className="text-[rgba(255, 255, 255, 0.70)] text-[16px] font-light font-open-sans hover:text-gray-300">
                                Blog
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Section */}
            <div className="mt-8">
                <div className="max-w-screen-lg mx-auto flex flex-col items-center space-y-4">
                    {/* Logo */}
                    <img src={logo} alt="Company Logo" className="h-10" />

                    {/* Horizontal Line */}
                    <div className="w-full border-t border-white opacity-30"></div>

                    {/* Copyright */}
                    <p className="text-[rgba(255, 255, 255, 0.70)] text-[12px] font-light font-open-sans text-center">
                        All rights reserved. Copyright ©️ 2024 | Peninsula Developments Limited
                    </p>

                    {/* Designed and Developed By */}
                    <p className="text-[#FFD700] text-[12px] font-light font-open-sans text-center">
                        Designed and developed by Creit Digitals
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
