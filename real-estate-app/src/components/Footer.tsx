import React, { useState } from "react";
import logo from "../images/logo.png";
import { ArrowUpCircle, ExternalLink, Facebook, Instagram, Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
    const [email, setEmail] = useState("");
    const [isEmailFocused, setIsEmailFocused] = useState(false);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        setEmail("");
    };

    const mainLinks = [
        { name: "About Us", path: "/about" },
        { name: "Services", path: "/services" },
        { name: "Projects", path: "/projects" },
        { name: "Contact", path: "/contact" },
        { name: "Blog", path: "/blog" }
    ];

    const services = [
        "Property Sales",
        "Property Management",
        "Investment Advisory",
        "Real Estate Consulting"
    ];

    // Contact information with WhatsApp
    const contactInfo = [
        {
            icon: <MapPin className="w-5 h-5" />,
            text: "Asaba, Delta State, Nigeria",
            link: null
        },
        {
            icon: <Mail className="w-5 h-5" />,
            text: "info@peninsuladevelopments.com",
            link: "mailto:info@peninsuladevelopments.com"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            text: "peninsuladevelopments@gmail.com",
            link: "mailto:peninsuladevelopments@gmail.com"
        },
        {
            icon: <MessageCircle className="w-5 h-5" />,
            text: "+234 704 945 3261",
            link: "https://wa.me/2347049453261"
        }
    ];

    return (
        <footer className="relative bg-gradient-to-b from-[#004380] to-[#003366] text-white">
            {/* Top Wave Design */}
            <div className="absolute top-0 left-0 right-0 h-8 overflow-hidden">
                <div className="absolute inset-0 bg-white/10"
                    style={{
                        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 0)"
                    }}
                />
            </div>

            <div className="max-w-7xl mx-auto pt-16 pb-8 px-4 sm:px-6 lg:px-8">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Company Info */}
                    <div className="space-y-6">
                        <img src={logo} alt="Company Logo" className="h-12" />
                        <p className="text-white/70 leading-relaxed">
                            Peninsula Developments Limited is committed to transforming the real estate landscape
                            through innovation and excellence.
                        </p>
                        {/* Contact Info */}
                        <div className="space-y-4">
                            {contactInfo.map((info, index) => (
                                info.link ? (
                                    <a
                                        key={index}
                                        href={info.link}
                                        target={info.link.startsWith('https') ? '_blank' : undefined}
                                        rel={info.link.startsWith('https') ? 'noopener noreferrer' : undefined}
                                        className="flex items-center gap-3 text-white/70 hover:text-white transition-colors group"
                                    >
                                        <span className="group-hover:scale-110 transition-transform">
                                            {info.icon}
                                        </span>
                                        <span>{info.text}</span>
                                    </a>
                                ) : (
                                    <div key={index} className="flex items-center gap-3 text-white/70">
                                        {info.icon}
                                        <span>{info.text}</span>
                                    </div>
                                )
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {mainLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        onClick={scrollToTop}
                                        className="text-white/70 hover:text-white transition-colors inline-flex items-center gap-2 group"
                                    >
                                        <span>{link.name}</span>
                                        <ArrowUpCircle className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {services.map((service) => (
                                <li key={service}>
                                    <Link
                                        to="/services"
                                        onClick={scrollToTop}
                                        className="text-white/70 hover:text-white transition-colors"
                                    >
                                        {service}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Newsletter</h3>
                        <p className="text-white/70 mb-6">
                            Subscribe to our newsletter for updates and exclusive offers.
                        </p>
                        <form onSubmit={handleSubscribe} className="space-y-4">
                            <div className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    onFocus={() => setIsEmailFocused(true)}
                                    onBlur={() => setIsEmailFocused(false)}
                                    placeholder="Enter your email"
                                    className={`w-full bg-white/10 border-2 border-transparent rounded-lg px-4 py-3 
                                        text-white placeholder-white/50 focus:outline-none transition-all duration-300
                                        ${isEmailFocused ? 'border-white/30 bg-white/20' : 'hover:bg-white/15'}`}
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <Send className="w-5 h-5" />
                                </button>
                            </div>
                        </form>

                        {/* Social Links */}
                        <div className="mt-8">
                            <h4 className="text-sm font-semibold mb-4">Follow Us</h4>
                            <div className="flex gap-4">
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <Facebook className="w-5 h-5" />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                                >
                                    <Instagram className="w-5 h-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <p className="text-white/70 text-sm text-center md:text-left">
                            © {new Date().getFullYear()} Peninsula Developments Limited. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6">
                            <a href="#privacy" className="text-white/70 hover:text-white text-sm">Privacy Policy</a>
                            <a href="#terms" className="text-white/70 hover:text-white text-sm">Terms of Service</a>
                            <a
                                href="https://creitdigitals.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#FFD700] text-sm hover:text-white flex items-center gap-1"
                            >
                                <span>Designed by Creit Digitals</span>
                                <ExternalLink className="w-4 h-4" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className="fixed bottom-8 right-8 p-2 bg-white/10 backdrop-blur-sm rounded-full 
                    hover:bg-white/20 transition-all duration-300 opacity-0 hover:opacity-100 focus:opacity-100"
            >
                <ArrowUpCircle className="w-6 h-6" />
            </button>
        </footer>
    );
};

export default Footer;

