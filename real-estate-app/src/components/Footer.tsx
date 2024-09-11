import React from "react";
import logo from "../images/logo.png";
import { FaEnvelope, FaFacebook, FaInstagram, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer: React.FC = () => {
    return (
        <footer className="bg-primary text-white py-10">
            <div className="max-w-screen-lg mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
                {/* Left: Contact Details with margin-left for mobile */}
                <div className="space-y-4 ml-[20%] md:ml-0"> {/* 20% left margin for mobile, no margin for larger screens */}
                    <h3 className="text-lg font-semibold">Contact Us</h3>
                    <p className="flex items-center text-sm">
                        <FaPhoneAlt className="mr-2" /> +123 456 7890
                    </p>
                    <p className="flex items-center text-sm">
                        <FaEnvelope className="mr-2" /> info@peninsula.com
                    </p>
                    <p className="flex items-center text-sm">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M5 8a5 5 0 1110 0c0 3-5 9-5 9S5 11 5 8zm5-3a3 3 0 100 6 3 3 0 000-6z" clipRule="evenodd" />
                        </svg>
                        1234 Elm St, Asaba, Nigeria
                    </p>
                </div>

                {/* Center: Social Media Links */}
                <div className="text-left md:text-center ml-[20%] md:ml-0"> {/* 20% left margin for mobile, no margin for larger screens */}
                    <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
                    <div className="flex justify-start md:justify-center space-x-6">
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

                {/* Right: Quick Links */}
                <div className="space-y-4 ml-[20%] md:ml-0"> {/* 20% left margin for mobile, no margin for larger screens */}
                    <h3 className="text-lg font-semibold">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <Link to="/about" className="hover:text-gray-300 text-sm">About Us</Link>
                        </li>
                        <li>
                            <Link to="/services" className="hover:text-gray-300 text-sm">Services</Link>
                        </li>
                        <li>
                            <Link to="/contact" className="hover:text-gray-300 text-sm">Contact Us</Link>
                        </li>
                        <li>
                            <Link to="/blog" className="hover:text-gray-300 text-sm">Blog</Link>
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
                    <div className="w-full border-t border-gray-300"></div>

                    {/* Copyright */}
                    <p className="text-xs text-center">© 2024 Peninsula Development Limited. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
