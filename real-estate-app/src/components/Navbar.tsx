import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { BookOpen, Briefcase, Building, ChevronDown, HomeIcon, Menu, Phone, Users, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const location = useLocation();

    const navigationItems = [
        { path: "/", label: "Home", icon: <HomeIcon size={18} /> },
        { path: "/about", label: "About", icon: <Users size={18} /> },
        { path: "/projects", label: "Our Projects", icon: <Building size={18} /> },
        { path: "/services", label: "Services", icon: <Briefcase size={18} /> },
        { path: "/blog", label: "Blog", icon: <BookOpen size={18} /> },
        { path: "/contact", label: "Contact Us", icon: <Phone size={18} /> }
    ];

    const handleResize = () => {
        setIsMobile(window.innerWidth < 768);
    };

    useEffect(() => {
        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <div className="sticky top-0 left-0 right-0 z-50">
            <nav
                className="w-full transition-all duration-300 bg-primary shadow-lg"
                style={{
                    background: 'linear-gradient(to right, #003366, #0059B2)'
                }}
            >
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105 cursor-pointer">
                            <Link to="/" onClick={scrollToTop}>
                                <img
                                    src={logo}
                                    alt="Logo"
                                    className="h-12 w-auto"
                                />
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden md:flex items-center space-x-8">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.path}
                                    to={item.path}
                                    onClick={scrollToTop}
                                    className={`flex items-center gap-2 text-white hover:text-white/90 px-2 py-1 
                                        transition-all duration-300 relative group cursor-pointer
                                        ${location.pathname === item.path
                                            ? 'text-white font-medium'
                                            : 'text-white/80'}
                                    `}
                                >
                                    <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                        {item.icon}
                                    </span>
                                    {item.label}
                                    <span
                                        className={`absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 
                                            group-hover:w-full
                                            ${location.pathname === item.path ? 'w-full' : ''}
                                        `}
                                    />
                                </Link>
                            ))}

                            {/* Explore Button */}
                            <Link
                                to="/projects"
                                onClick={scrollToTop}
                                className="bg-white text-primary px-6 py-2 rounded-full 
                                    hover:bg-opacity-90 transition-all duration-300
                                    shadow-md hover:shadow-lg cursor-pointer font-medium"
                            >
                                Explore
                            </Link>
                        </div>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors cursor-pointer"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>

                    {/* Mobile Menu */}
                    {isOpen && (
                        <div
                            className="md:hidden fixed inset-x-0 top-20 bottom-0 bg-gradient-to-b from-primary to-[#004380] 
                                transition-all duration-500 ease-in-out"
                        >
                            <div className="flex flex-col p-6 space-y-6">
                                {navigationItems.map((item) => (
                                    <Link
                                        key={item.path}
                                        to={item.path}
                                        onClick={() => {
                                            setIsOpen(false);
                                            scrollToTop();
                                        }}
                                        className={`flex items-center gap-3 text-white py-3 px-4 rounded-lg
                                            transition-all duration-300 hover:bg-white/10 cursor-pointer
                                            ${location.pathname === item.path
                                                ? 'bg-white/10 font-medium'
                                                : 'text-white/80'}
                                        `}
                                    >
                                        {item.icon}
                                        {item.label}
                                    </Link>
                                ))}

                                {/* Mobile Explore Button */}
                                <Link
                                    to="/projects"
                                    onClick={() => {
                                        setIsOpen(false);
                                        scrollToTop();
                                    }}
                                    className="flex items-center justify-center gap-2 bg-white text-primary py-4 
                                        rounded-lg font-semibold hover:bg-white/90 transition-all duration-300 
                                        cursor-pointer shadow-md"
                                >
                                    Explore Properties
                                    <ChevronDown className="animate-bounce" />
                                </Link>
                            </div>
                        </div>
                    )}
                </div>
            </nav>
        </div>
    );
};

export default Navbar;