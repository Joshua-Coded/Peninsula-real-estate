import React from "react";
import approachImage from "../images/approach.png";
import backgroundImage from "../images/blog3.png";
import ctaBackground from "../images/house1.png";
import missionImage from "../images/mission.png";
import visionImage from "../images/house5.png";
import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const AboutUsPage: React.FC = () => {
    return (
        <div>
            {/* Fullscreen About Us Section */}
            <div
                className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    width: '100vw',
                    height: '100vh',
                }}
            >
                <div className="text-center px-4 max-w-2xl">
                    <h1 style={{
                        color: 'white',
                        fontSize: '24px',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        wordWrap: 'break-word'
                    }}>
                        Who We Are
                    </h1>
                    <p style={{
                        color: 'white',
                        fontSize: '16px',
                        fontFamily: 'Open Sans',
                        fontWeight: 400,
                        wordWrap: 'break-word',
                        marginTop: '1rem',
                    }}>
                        Peninsula Developments Limited is a forward-thinking real estate company dedicated to transforming the real estate landscape.
                        Our mission is to provide exceptional living spaces that cater to the needs of modern homeowners and investors worldwide.
                        With a strong presence in Asaba, Nigeria, we are poised to expand our footprint globally.
                    </p>
                    <div className="mt-6">
                        <Link to="/contact">
                            <button
                                className="py-3 px-6 rounded-md"
                                style={{
                                    backgroundColor: '#0059B2',
                                    color: 'white',
                                    fontSize: '16px',
                                    fontFamily: 'Open Sans',
                                    fontWeight: 600,
                                    wordWrap: 'break-word',
                                }}
                            >
                                Get in touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Remaining Sections */}
            <div className="py-16 px-6 max-w-screen-lg mx-auto space-y-20">
                {/* Mission & Vision Section */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="space-y-8">
                        <h2 style={{
                            color: '#333333',
                            fontSize: '24px',
                            fontFamily: 'Open Sans',
                            fontWeight: 700,
                            wordWrap: 'break-word',
                        }}>Our Mission</h2>
                        <p style={{
                            color: 'rgba(51, 51, 51, 0.70)',
                            fontSize: '16px',
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            wordWrap: 'break-word',
                        }}>
                            To redefine luxury living by creating high-quality, sustainable properties that exceed our clients' expectations.
                        </p>
                        <img src={missionImage} alt="Mission Image" className="w-full h-80 object-cover rounded-md" />
                    </div>
                    <div className="space-y-8">
                        <img src={visionImage} alt="Vision Image" className="w-full h-80 object-cover rounded-md" />
                        <h2 style={{
                            color: '#333333',
                            fontSize: '24px',
                            fontFamily: 'Open Sans',
                            fontWeight: 700,
                            wordWrap: 'break-word',
                        }}>Our Vision</h2>
                        <p style={{
                            color: 'rgba(51, 51, 51, 0.70)',
                            fontSize: '16px',
                            fontFamily: 'Open Sans',
                            fontWeight: 400,
                            wordWrap: 'break-word',
                        }}>
                            To be a global leader in real estate development, known for our commitment to excellence and innovation.
                        </p>
                    </div>
                </div>

                {/* Our Values Section */}
                <div>
                    <h2 style={{
                        color: '#333333',
                        fontSize: '24px',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        wordWrap: 'break-word',
                        textAlign: 'center',
                        marginBottom: '3rem'
                    }}>Our Values</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {/* Value 1 */}
                        <div style={{
                            textAlign: 'center',
                            padding: '1rem',
                            height: '10rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#f3f3f3',
                            borderRadius: '8px',
                        }}>
                            <h3 style={{
                                color: '#333333',
                                fontSize: '24px',
                                fontFamily: 'Open Sans',
                                fontWeight: 700,
                                wordWrap: 'break-word',
                                marginBottom: '1rem',
                            }}>Integrity</h3>
                            <p style={{
                                color: 'rgba(51, 51, 51, 0.70)',
                                fontSize: '16px',
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                wordWrap: 'break-word',
                            }}>We conduct our business with the highest ethical standards.</p>
                        </div>

                        {/* Value 2 */}
                        <div style={{
                            textAlign: 'center',
                            padding: '1rem',
                            height: '10rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#f3f3f3',
                            borderRadius: '8px',
                        }}>
                            <h3 style={{
                                color: '#333333',
                                fontSize: '24px',
                                fontFamily: 'Open Sans',
                                fontWeight: 700,
                                wordWrap: 'break-word',
                                marginBottom: '1rem',
                            }}>Quality</h3>
                            <p style={{
                                color: 'rgba(51, 51, 51, 0.70)',
                                fontSize: '16px',
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                wordWrap: 'break-word',
                            }}>We prioritize quality in every project we undertake.</p>
                        </div>

                        {/* Value 3 */}
                        <div style={{
                            textAlign: 'center',
                            padding: '1rem',
                            height: '10rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#f3f3f3',
                            borderRadius: '8px',
                        }}>
                            <h3 style={{
                                color: '#333333',
                                fontSize: '24px',
                                fontFamily: 'Open Sans',
                                fontWeight: 700,
                                wordWrap: 'break-word',
                                marginBottom: '1rem',
                            }}>Innovation</h3>
                            <p style={{
                                color: 'rgba(51, 51, 51, 0.70)',
                                fontSize: '16px',
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                wordWrap: 'break-word',
                            }}>We embrace innovation to deliver the best solutions.</p>
                        </div>

                        {/* Value 4 */}
                        <div style={{
                            textAlign: 'center',
                            padding: '1rem',
                            height: '10rem',
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            background: '#f3f3f3',
                            borderRadius: '8px',
                        }}>
                            <h3 style={{
                                color: '#333333',
                                fontSize: '24px',
                                fontFamily: 'Open Sans',
                                fontWeight: 700,
                                wordWrap: 'break-word',
                                marginBottom: '1rem',
                            }}>Customer Focus</h3>
                            <p style={{
                                color: 'rgba(51, 51, 51, 0.70)',
                                fontSize: '16px',
                                fontFamily: 'Open Sans',
                                fontWeight: 400,
                                wordWrap: 'break-word',
                            }}>We put our clients at the center of everything we do.</p>
                        </div>
                    </div>
                </div>

                {/* Our Approach Section */}
                <div className="py-16 md:flex md:flex-col items-center text-center md:text-left">
                    <h2 style={{
                        color: '#151314',
                        fontSize: '24px',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        wordWrap: 'break-word',
                    }}>Our Approach</h2>
                    <p style={{
                        color: 'rgba(51, 51, 51, 0.70)',
                        fontSize: '16px',
                        fontFamily: 'Open Sans',
                        fontWeight: 400,
                        wordWrap: 'break-word',
                        marginTop: '1rem',
                    }}>
                        At Peninsula Developments, we blend innovation with practicality. Our team of experts meticulously plans each project, ensuring that every detail aligns with our commitment to quality and customer satisfaction. We believe in creating properties that are not only luxurious but also sustainable and functional.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-8 max-w-4xl">
                        {/* Left side with points and arrows */}
                        <div className="space-y-4 text-sm">
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p style={{
                                    fontFamily: 'Open Sans',
                                    fontWeight: 400,
                                    color: 'rgba(51, 51, 51, 0.70)',
                                    fontSize: '16px',
                                    wordWrap: 'break-word',
                                }}>
                                    We prioritize customer needs and tailor our developments accordingly.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p style={{
                                    fontFamily: 'Open Sans',
                                    fontWeight: 400,
                                    color: 'rgba(51, 51, 51, 0.70)',
                                    fontSize: '16px',
                                    wordWrap: 'break-word',
                                }}>
                                    We integrate modern technology for innovative, sustainable solutions.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p style={{
                                    fontFamily: 'Open Sans',
                                    fontWeight: 400,
                                    color: 'rgba(51, 51, 51, 0.70)',
                                    fontSize: '16px',
                                    wordWrap: 'break-word',
                                }}>
                                    We focus on long-term value creation for our clients and stakeholders.
                                </p>
                            </div>
                            <div className="flex items-start">
                                <FaArrowRight className="text-primary mr-2 mt-1" />
                                <p style={{
                                    fontFamily: 'Open Sans',
                                    fontWeight: 400,
                                    color: 'rgba(51, 51, 51, 0.70)',
                                    fontSize: '16px',
                                    wordWrap: 'break-word',
                                }}>
                                    We adhere to the highest standards of quality and integrity in every project.
                                </p>
                            </div>
                        </div>

                        {/* Right side with image */}
                        <div>
                            <img
                                src={approachImage}
                                alt="Our Approach"
                                className="w-full h-80 object-cover rounded-md shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Full-Width Call to Action Section */}
            <div
                className="min-h-screen w-screen bg-cover bg-center text-white flex items-center justify-center"
                style={{
                    backgroundImage: `url(${ctaBackground})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="text-center">
                    <h2 style={{
                        color: 'white',
                        fontSize: '24px',
                        fontFamily: 'Open Sans',
                        fontWeight: 700,
                        wordWrap: 'break-word'
                    }}>Join Us on This Journey</h2>
                    <p style={{
                        color: 'rgba(255, 255, 255, 0.70)',
                        fontSize: '16px',
                        fontFamily: 'Open Sans',
                        fontWeight: 400,
                        wordWrap: 'break-word',
                        marginTop: '1rem',
                        marginBottom: '2rem',
                    }}>Explore our properties and discover how Peninsula Developments Limited can help you find your dream home or investment opportunity. Connect with us today to learn more.</p>
                    <Link to="/contact">
                        <button className="bg-primary text-white py-3 px-8 rounded-md" style={{
                            color: 'white',
                            fontSize: '16px',
                            fontFamily: 'Open Sans',
                            fontWeight: 600,
                            wordWrap: 'break-word',
                            backgroundColor: '#0059B2'
                        }}>
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default AboutUsPage;
