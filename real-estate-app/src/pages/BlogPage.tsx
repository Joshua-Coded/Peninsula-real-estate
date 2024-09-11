import React, { useState } from "react";
import blogImage1 from "../images/blog1.png";
import blogImage2 from "../images/blog2.png";
import blogImage3 from "../images/blog3.png";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const blogs = [
    {
        id: 1,
        title: 'The Future of Real Estate Investment',
        description: 'Explore how modern technology is shaping the future of real estate investment, and why you should invest now.',
        content: 'Detailed content about the future of real estate investment. Learn how smart homes, AI, and big data are transforming the industry...',
        image: blogImage1,
        date: 'September 10, 2024',
        author: 'John Doe',
    },
    {
        id: 2,
        title: '5 Tips for First-Time Home Buyers',
        description: 'Buying your first home? Here are 5 tips to make the process smooth and successful.',
        content: 'In this blog, we cover important steps first-time buyers should take, including budgeting, researching neighborhoods, and getting pre-approved...',
        image: blogImage2,
        date: 'August 24, 2024',
        author: 'Jane Smith',
    },
    {
        id: 3,
        title: 'Sustainable Living: Eco-Friendly Housing',
        description: 'Learn how eco-friendly housing is becoming a critical component of the real estate market.',
        content: 'Discover how sustainable materials and eco-friendly construction methods are becoming more popular in the real estate sector...',
        image: blogImage3,
        date: 'July 5, 2024',
        author: 'Michael Lee',
    },
];

const BlogPage: React.FC = () => {
    const [selectedBlog, setSelectedBlog] = useState<any>(null);

    const openModal = (blog: any) => {
        setSelectedBlog(blog);
    };

    const closeModal = () => {
        setSelectedBlog(null);
    };

    return (
        <div className="py-12 px-6">
            {/* Hero Section */}
            <div
                className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${blogImage1})`, width: '100vw', minHeight: '100vh' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
                <div className="relative text-center px-4 max-w-2xl z-10">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
                    <p className="mt-4 text-xl">Stay updated with the latest trends, tips, and insights in the real estate industry.</p>
                </div>
            </div>

            {/* Blog Post Section */}
            <div className="py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Latest Blog Posts</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogs.map((blog) => (
                        <div key={blog.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
                            <img src={blog.image} alt={blog.title} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <div className="text-sm text-gray-500 mb-2">
                                    <span>{blog.author}</span> | <span>{blog.date}</span>
                                </div>
                                <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                                <p className="text-gray-600 mb-4">{blog.description}</p>
                                <button
                                    className="bg-primary text-white py-2 px-6 rounded-md hover:bg-white hover:text-primary transition-all"
                                    onClick={() => openModal(blog)}
                                >
                                    Read More
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            {selectedBlog && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 relative max-w-3xl w-full">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={closeModal}
                        >
                            <FaTimes size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedBlog.title}</h2>
                        <p className="text-sm text-gray-500 mb-2">
                            <span>{selectedBlog.author}</span> | <span>{selectedBlog.date}</span>
                        </p>
                        <img
                            src={selectedBlog.image}
                            alt={selectedBlog.title}
                            className="w-full h-64 object-cover rounded-md mb-4"
                        />
                        <p className="text-lg">{selectedBlog.content}</p>
                    </div>
                </div>
            )}

            {/* Call to Action Section */}
            <div
                className="h-auto min-h-[300px] bg-cover bg-center text-white flex justify-center items-center w-full py-16 relative"
                style={{ backgroundImage: `url(${blogImage3})` }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
                <div className="text-center px-6 z-10">
                    <h2 className="text-4xl md:text-5xl font-bold">Interested in Learning More?</h2>
                    <p className="mt-4 text-lg max-w-2xl mx-auto">
                        Subscribe to our newsletter and stay updated with the latest real estate trends, investment tips, and market insights.
                    </p>
                    <div className="mt-6">
                        <Link to="/subscribe">
                            <button className="bg-primary text-white py-3 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                                Subscribe Now
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
