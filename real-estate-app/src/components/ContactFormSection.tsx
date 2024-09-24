import React, { useState } from "react";
import { FaEnvelope, FaFacebook, FaInstagram, FaMapMarkerAlt, FaPhoneAlt, FaTwitter } from "react-icons/fa";

// import emailjs from "emailjs-com";

const ContactFormSection: React.FC = () => {
    // Form state variables
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [formStatus, setFormStatus] = useState("");

    // Handle input change
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Replace the below with your EmailJS service, template, and user IDs
        const serviceId = "YOUR_SERVICE_ID";
        const templateId = "YOUR_TEMPLATE_ID";
        const userId = "YOUR_USER_ID";

        // emailjs.send(serviceId, templateId, formData, userId)
        //     .then((response) => {
        //         setFormStatus("Message sent successfully!");
        //         setFormData({ name: '', email: '', message: '' }); 
        //     })
        //     .catch((error) => {
        //         setFormStatus("Failed to send message. Please try again later.");
        //         console.error('Error sending message:', error);
        //     });
    };

    return (
        <div className="py-12 px-6">
            <h2 className="text-3xl font-bold text-center">Send Us a Message</h2>
            <p className="text-lg text-center mt-4 max-w-4xl mx-auto">
                Fill out the form to get in touch with us. We'll get back to you as soon as possible.
            </p>

            {/* Form grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
                {/* Contact Details */}
                <div className="col-span-1 bg-primary text-white rounded-lg shadow-lg p-6">
                    <div className="space-y-6">
                        <h3 className="text-xl font-bold">Contact Details</h3>
                        <p><FaPhoneAlt className="inline-block mr-2 text-white" /> +123 456 7890</p>
                        <p><FaEnvelope className="inline-block mr-2 text-white" /> info@peninsula.com</p>
                        <p><FaMapMarkerAlt className="inline-block mr-2 text-white" /> 1234 Elm St, Asaba, Nigeria</p>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex justify-start space-x-4 mt-[10%]">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaFacebook size={24} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaTwitter size={24} /></a>
                        <a href="https://www.instagram.com/peninsula_developments?igsh=MWtocG8yemdsbndpYg==" target="_blank" rel="noopener noreferrer" className="hover:text-gray-300"><FaInstagram size={24} /></a>
                    </div>
                </div>

                {/* Form Section */}
                <div className="col-span-2 bg-white rounded-lg p-6 shadow-lg space-y-4">
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-gray-600">Full Name</label>
                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600">Email Address</label>
                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div>
                            <label className="block text-gray-600">Message</label>
                            <textarea
                                name="message"
                                value={formData.message}
                                onChange={handleInputChange}
                                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-primary"
                                rows={5}
                                placeholder="Your Message"
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all w-full">
                            Send Message
                        </button>
                    </form>

                    {/* Display form submission status */}
                    {formStatus && <p className="mt-4 text-center text-green-500">{formStatus}</p>}
                </div>
            </div>
        </div>
    );
};

export default ContactFormSection;
