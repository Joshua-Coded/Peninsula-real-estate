import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for mobile
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all ${isMobile || scrollPosition > 100 ? "bg-primary" : "bg-transparent"
                }`}
            style={{ paddingTop: "10px", paddingBottom: "10px" }} // Added padding for top and bottom
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo on the left */}
                    <div className="flex-shrink-0 text-white text-2xl font-bold">
                        <Link to="/">
                            <img
                                src={logo}
                                alt="Logo"
                                className="h-15 w-auto md:h-16 md:w-auto"
                                style={{ width: "100%", height: "100%", marginLeft: isMobile ? "-10%" : "0" }} // Ensure the logo fits nicely on mobile
                            />
                        </Link>
                    </div>

                    {/* Desktop Menu in the center */}
                    <div className="hidden md:flex flex-grow justify-center space-x-6 text-sm">
                        <Link to="/" className="text-white hover:border-b-2 border-white transition-all">
                            Home
                        </Link>
                        <Link to="/about" className="text-white hover:border-b-2 border-white transition-all">
                            About
                        </Link>
                        <Link to="/projects" className="text-white hover:border-b-2 border-white transition-all">
                            Our Projects
                        </Link>
                        <Link to="/services" className="text-white hover:border-b-2 border-white transition-all">
                            Services
                        </Link>
                        <Link to="/blog" className="text-white hover:border-b-2 border-white transition-all">
                            Blog
                        </Link>
                        <Link to="/contact" className="text-white hover:border-b-2 border-white transition-all">
                            Contact
                        </Link>
                    </div>

                    {/* Explore Button on the right */}
                    <div className="hidden md:block">
                        <Link
                            to="/explore"
                            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-white hover:text-primary transition-all"
                        >
                            Explore
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-6 h-6"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`fixed inset-0 bg-primary text-white flex flex-col items-start justify-start md:hidden transform transition-transform duration-500 ease-in-out ${isOpen ? "translate-y-0" : "-translate-y-full"
                        }`}
                >
                    {/* Top Row with Logo and Close Button */}
                    <div className="flex justify-between items-center w-full px-4 py-4">
                        {/* Logo on the left */}
                        <div className="flex-shrink-0 text-white text-2xl font-bold">
                            <Link to="/">
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="h-10 w-auto"
                                    style={{ width: "100%", height: "100%", marginLeft: "10%" }} // 10% space on mobile left
                                />
                            </Link>
                        </div>

                        {/* Close Button on the right */}
                        <button
                            onClick={() => setIsOpen(false)}
                            className="text-white focus:outline-none"
                        >
                            <svg
                                className="w-8 h-8"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Navigation Links with Desktop Font Sizes */}
                    <ul className="flex flex-col space-y-8 text-sm w-full px-8 mt-10 text-normal font-normal">
                        <li className="border-b border-white hover:border-b-2 transition-all">
                            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                        </li>
                        <li className="border-b border-white hover:border-b-2 transition-all">
                            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
                        </li>
                        <li className="border-b border-white hover:border-b-2 transition-all">
                            <Link to="/projects" onClick={() => setIsOpen(false)}>Our Projects</Link>
                        </li>
                        <li className="border-b border-white hover:border-b-2 transition-all">
                            <Link to="/services" onClick={() => setIsOpen(false)}>Services</Link>
                        </li>
                        <li className="border-b border-white hover:border-b-2 transition-all">
                            <Link to="/blog" onClick={() => setIsOpen(false)}>Blog</Link>
                        </li>
                        <li className="border-b border-white hover:border-b-2 transition-all">
                            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                        </li>
                    </ul>

                    {/* Explore Button in Mobile Menu */}
                    <div className="mt-10 w-full flex justify-center">
                        <Link
                            to="/explore"
                            className="border-4 border-white text-white py-2 px-6 rounded-md w-3/4 text-center"
                            onClick={() => setIsOpen(false)}
                        >
                            Explore
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
