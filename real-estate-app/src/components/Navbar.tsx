import React, { useEffect, useState } from "react";
import logo from "../images/logo.png";
import { BookOpen, Briefcase, Building, ChevronDown, HomeIcon, Menu, Phone, Users, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [isScrollingUp, setIsScrollingUp] = useState(true);
    const [lastScroll, setLastScroll] = useState(0);
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
            const currentScroll = window.scrollY;
            setIsScrollingUp(currentScroll < lastScroll);
            setLastScroll(currentScroll);
            setScrollPosition(currentScroll);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [lastScroll]);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    // Close mobile menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    return (
        <nav
            className={`fixed w-full z-50 transition-all duration-300
                ${scrollPosition > 100
                    ? 'bg-primary/95 backdrop-blur-md shadow-lg'
                    : 'bg-transparent'}
                ${!isScrollingUp && scrollPosition > 100 && !isOpen
                    ? '-translate-y-full'
                    : 'translate-y-0'}
            `}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 transition-transform duration-300 hover:scale-105">
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
                                className={`flex items-center gap-2 text-white/70 hover:text-white px-2 py-1 
                                    transition-all duration-300 relative group
                                    ${location.pathname === item.path ? 'text-white' : ''}
                                `}
                            >
                                <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                    {item.icon}
                                </span>
                                {item.label}
                                {/* Animated underline */}
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
                            className="bg-white/10 text-white px-6 py-2 rounded-full hover:bg-white 
                                hover:text-primary transition-all duration-300 backdrop-blur-sm
                                border border-white/20 hover:border-white"
                        >
                            Explore
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="md:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`md:hidden fixed inset-0 bg-primary/95 backdrop-blur-md transition-all duration-500 
                        ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-full'}`}
                    style={{ top: '80px' }}
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
                                className={`flex items-center gap-3 text-white/70 py-3 px-4 rounded-lg
                                    transition-all duration-300 hover:bg-white/10
                                    ${location.pathname === item.path ? 'bg-white/10 text-white' : ''}
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
                                rounded-lg font-semibold hover:bg-white/90 transition-all duration-300"
                        >
                            Explore Properties
                            <ChevronDown className="animate-bounce" />
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;