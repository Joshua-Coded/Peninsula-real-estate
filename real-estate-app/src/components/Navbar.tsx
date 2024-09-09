import React, { useEffect, useState } from "react";

const Navbar: React.FC = () => {
    const [scrollPosition, setScrollPosition] = useState(0);
    const [isOpen, setIsOpen] = useState(false); // State to toggle mobile menu
    const [isMobile, setIsMobile] = useState(false); // State to detect mobile view

    // Detect mobile view based on screen width
    const handleResize = () => {
        setIsMobile(window.innerWidth < 768); // 768px is the breakpoint for mobile
    };

    useEffect(() => {
        // Set the initial value
        handleResize();

        // Add event listener to detect resize
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`fixed w-full top-0 z-50 transition-all 
            ${isMobile || scrollPosition > 100 ? 'bg-primary' : 'bg-transparent'}
            `}
        >
            <div className="w-full px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo on the left */}
                    <div className="text-white text-2xl font-bold">Logo</div>

                    {/* Desktop Menu in the center */}
                    <div className="hidden md:flex flex-grow justify-center space-x-6 text-sm"> {/* Reduced font size */}
                        <a href="#home" className="text-white hover:border-b-2 border-white transition-all">Home</a>
                        <a href="#about" className="text-white hover:border-b-2 border-white transition-all">About</a>
                        <a href="#projects" className="text-white hover:border-b-2 border-white transition-all">Our Projects</a>
                        <a href="#services" className="text-white hover:border-b-2 border-white transition-all">Services</a>
                        <a href="#blog" className="text-white hover:border-b-2 border-white transition-all">Blog</a>
                        <a href="#contact" className="text-white hover:border-b-2 border-white transition-all">Contact</a>
                    </div>

                    {/* Explore Button on the right */}
                    <div className="hidden md:block">
                        <a
                            href="#explore"
                            className="bg-primary text-white py-2 px-4 rounded-md hover:bg-white hover:text-primary transition-all"
                        >
                            Explore
                        </a>
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

                {/* Mobile Menu with Slower Animation */}
                <div
                    className={`fixed inset-0 bg-primary text-white flex flex-col items-center justify-start md:hidden transform transition-transform duration-500 ease-in-out 
                    ${isOpen ? 'translate-y-0' : '-translate-y-full'}`} // Slower and smoother animation
                >
                    {/* Top Row with Logo and Close Button */}
                    <div className="flex justify-between items-center w-full px-4 py-4">
                        {/* Logo on the left */}
                        <div className="text-white text-2xl font-bold">Logo</div>

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
                    <ul className="flex flex-col space-y-8 text-sm w-full px-8 mt-10 text-normal font-normal"> {/* Consistent font size */}
                        <li className="border-b border-white hover:border-b-2 transition-all"><a href="#home">Home</a></li>
                        <li className="border-b border-white hover:border-b-2 transition-all"><a href="#about">About</a></li>
                        <li className="border-b border-white hover:border-b-2 transition-all"><a href="#projects">Our Projects</a></li>
                        <li className="border-b border-white hover:border-b-2 transition-all"><a href="#services">Services</a></li>
                        <li className="border-b border-white hover:border-b-2 transition-all"><a href="#blog">Blog</a></li>
                        <li className="border-b border-white hover:border-b-2 transition-all"><a href="#contact">Contact</a></li>
                    </ul>

                    {/* Explore Button in Mobile Menu */}
                    <div className="mt-10">
                        <a
                            href="#explore"
                            className="border-4 border-white text-white py-2 px-6 rounded-md" // Increased border to 4px
                        >
                            Explore
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
