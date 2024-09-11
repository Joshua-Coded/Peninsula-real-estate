import React, { useState } from "react";
import authorImage1 from "../images/test1.png";
import authorImage2 from "../images/test2.jpeg";
import authorImage3 from "../images/test3.jpeg";
import blogImage1 from "../images/blog1.png";
import blogImage2 from "../images/blog2.png";
import blogImage3 from "../images/blog3.png";
import { FaTimes } from "react-icons/fa";

const blogs = [
    {
        id: 1,
        title: 'The Future of Real Estate Investment',
        description: 'Explore how modern technology is shaping the future of real estate investment, and why you should invest now.',
        content: 'Detailed content about the future of real estate investment. Learn how smart homes, AI, and big data are transforming the industry...',
        image: blogImage1,
        date: 'September 10, 2024',
        author: 'John Doe',
        authorImage: authorImage1,
        category: 'Investment Tips',
    },
    {
        id: 2,
        title: '5 Tips for First-Time Home Buyers',
        description: 'Buying your first home? Here are 5 tips to make the process smooth and successful.',
        content: 'In this blog, we cover important steps first-time buyers should take, including budgeting, researching neighborhoods, and getting pre-approved...',
        image: blogImage2,
        date: 'August 24, 2024',
        author: 'Jane Smith',
        authorImage: authorImage2,
        category: 'Real Estate Trends',
    },
    {
        id: 3,
        title: 'Sustainable Living: Eco-Friendly Housing',
        description: 'Learn how eco-friendly housing is becoming a critical component of the real estate market.',
        content: 'Discover how sustainable materials and eco-friendly construction methods are becoming more popular in the real estate sector...',
        image: blogImage3,
        date: 'July 5, 2024',
        author: 'Michael Lee',
        authorImage: authorImage3,
        category: 'Market Analysis',
    },
    {
        id: 4,
        title: 'How to Invest in Commercial Real Estate',
        description: 'A guide to investing in commercial real estate and maximizing your returns.',
        content: 'Learn the key factors to consider when investing in commercial properties such as office spaces and retail buildings...',
        image: blogImage1,
        date: 'June 18, 2024',
        author: 'David Brown',
        authorImage: authorImage1,
        category: 'Investment Tips',
    },
    {
        id: 5,
        title: 'The Rise of Smart Homes in Real Estate',
        description: 'Discover how smart home technology is changing the way people buy and live in homes.',
        content: 'Smart homes are becoming a major trend in real estate. Learn how they’re impacting homebuyers and investors alike...',
        image: blogImage2,
        date: 'May 2, 2024',
        author: 'Sarah Green',
        authorImage: authorImage2,
        category: 'Real Estate Trends',
    },
    {
        id: 6,
        title: 'Real Estate Market Forecast 2025',
        description: 'Predictions for the real estate market in 2025, including key trends to watch.',
        content: 'Our market analysis highlights the upcoming trends in real estate, providing valuable insights for investors...',
        image: blogImage3,
        date: 'April 12, 2024',
        author: 'John Doe',
        authorImage: authorImage3,
        category: 'Market Analysis',
    },
    {
        id: 7,
        title: 'How to Finance Your First Investment Property',
        description: 'A beginner’s guide to financing your first real estate investment.',
        content: 'From securing loans to evaluating mortgage options, learn the best strategies to finance your investment property...',
        image: blogImage1,
        date: 'March 22, 2024',
        author: 'Jane Smith',
        authorImage: authorImage1,
        category: 'Investment Tips',
    },
    {
        id: 8,
        title: 'Top 10 Real Estate Markets in 2024',
        description: 'A look at the top real estate markets to invest in this year.',
        content: 'Explore the cities and regions that offer the best opportunities for real estate investors in 2024...',
        image: blogImage2,
        date: 'February 16, 2024',
        author: 'David Brown',
        authorImage: authorImage2,
        category: 'Market Analysis',
    },
    {
        id: 9,
        title: 'Eco-Friendly Home Renovations',
        description: 'Learn how to make your home eco-friendly with these renovation tips.',
        content: 'From solar panels to energy-efficient appliances, find out how to make your home more sustainable...',
        image: blogImage3,
        date: 'January 30, 2024',
        author: 'Michael Lee',
        authorImage: authorImage3,
        category: 'Sustainability',
    },
    {
        id: 10,
        title: 'Real Estate Investment Strategies for 2024',
        description: 'Discover the best strategies for investing in real estate this year.',
        content: 'Learn how to identify profitable investment properties, manage risks, and maximize returns in 2024...',
        image: blogImage1,
        date: 'December 20, 2023',
        author: 'Sarah Green',
        authorImage: authorImage1,
        category: 'Investment Tips',
    },
    {
        id: 11,
        title: 'How to Sell Your Home in a Competitive Market',
        description: 'Tips for selling your home quickly and for the best price in a competitive market.',
        content: 'Learn the best strategies to stage your home, market it effectively, and close the deal in a hot real estate market...',
        image: blogImage2,
        date: 'November 10, 2023',
        author: 'John Doe',
        authorImage: authorImage2,
        category: 'Real Estate Trends',
    },
    {
        id: 12,
        title: 'Understanding Real Estate Taxes and Deductions',
        description: 'A guide to navigating real estate taxes and deductions for investors and homeowners.',
        content: 'Get an overview of the most important real estate tax deductions and how they can benefit your bottom line...',
        image: blogImage3,
        date: 'October 5, 2023',
        author: 'Michael Lee',
        authorImage: authorImage3,
        category: 'Market Analysis',
    },
    {
        id: 13,
        title: 'How to Choose the Right Property Manager',
        description: 'Tips for finding the best property manager for your investment property.',
        content: 'Learn the qualities to look for in a property manager to ensure your real estate investments are well-maintained...',
        image: blogImage1,
        date: 'September 18, 2023',
        author: 'Jane Smith',
        authorImage: authorImage1,
        category: 'Company News',
    },
    {
        id: 14,
        title: 'Urban Living: The Future of Real Estate',
        description: 'How urbanization is reshaping the real estate landscape in cities around the world.',
        content: 'Discover the trends driving urban real estate and how investors can capitalize on the growing demand for city living...',
        image: blogImage2,
        date: 'August 27, 2023',
        author: 'David Brown',
        authorImage: authorImage2,
        category: 'Real Estate Trends',
    },
    {
        id: 15,
        title: 'The Benefits of Multi-Family Housing Investment',
        description: 'Why multi-family housing is a smart investment choice for 2024.',
        content: 'Explore the advantages of investing in multi-family properties and how to maximize your ROI...',
        image: blogImage3,
        date: 'July 15, 2023',
        author: 'Sarah Green',
        authorImage: authorImage3,
        category: 'Investment Tips',
    },
];

const categories = [
    'All',
    'Real Estate Trends',
    'Market Analysis',
    'Investment Tips',
    'Company News',
];

const BlogPage: React.FC = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedBlog, setSelectedBlog] = useState<any>(null);

    const openModal = (blog: any) => {
        setSelectedBlog(blog);
    };

    const closeModal = () => {
        setSelectedBlog(null);
    };

    const filteredBlogs = selectedCategory === 'All' ? blogs : blogs.filter(blog => blog.category === selectedCategory);

    return (
        <div className="py-12 px-6">
            {/* Hero Section */}
            <div
                className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${blogImage2})`, width: '100vw', minHeight: '100vh' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
                <div className="relative text-center px-4 max-w-2xl z-10">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Blog</h1>
                    <p className="mt-4 text-xl">Stay updated with the latest trends, tips, and insights in the real estate industry.</p>
                </div>
            </div>

            {/* Categories Section */}
            <div className="py-6">
                <h2 className="text-2xl font-bold text-center mb-6">Categories</h2>
                <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:justify-center md:space-y-0 md:space-x-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`w-full md:w-auto px-2 py-1 text-sm md:px-4 md:py-2 md:text-base rounded-md ${selectedCategory === category ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700'
                                } hover:bg-primary hover:text-white transition-all`}
                            onClick={() => setSelectedCategory(category)}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Blog Post Section */}
            <div className="py-12">
                <h2 className="text-3xl font-bold text-center mb-8">
                    {selectedCategory === 'All' ? 'Latest Blog Posts' : `${selectedCategory} Blog Posts`}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {filteredBlogs.map((blog) => (
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
                        <div className="flex items-center mb-4">
                            <img
                                src={selectedBlog.authorImage}
                                alt={selectedBlog.author}
                                className="w-12 h-12 rounded-full mr-4"
                            />
                            <div className="text-sm text-gray-500">
                                <span>{selectedBlog.author}</span> | <span>{selectedBlog.date}</span>
                            </div>
                        </div>
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
                        <button className="bg-primary text-white py-3 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
