import React, { useEffect, useState } from "react";
import authorImage1 from "../images/test1.png";
import authorImage2 from "../images/test11.jpeg";
import authorImage3 from "../images/test13.webp";
import bg from "../images/bgImage.png";
import blogImage1 from "../images/blog1.png";
import blogImage2 from "../images/blog2.png";
import blogImage3 from "../images/blog3.png";

import {
    ArrowRight, X, Search, Filter, Calendar, User, Tag,
    ChevronDown, Share2, BookOpen, TrendingUp, Heart,
    MessageCircle, ExternalLink, Mail
} from "lucide-react";

interface Blog {
    id: number;
    title: string;
    description: string;
    content: string;
    image: string;
    date: string;
    author: string;
    authorImage: string;
    category: string;
}
const blogs: Blog[] = [
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

];

const BlogPage = () => {
    const [selectedCategory, setSelectedCategory] = useState('All');
    const [selectedBlog, setSelectedBlog] = useState<any>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [animateCards, setAnimateCards] = useState(false);
    const [likedBlogs, setLikedBlogs] = useState<number[]>([]);
    const [email, setEmail] = useState('');

    useEffect(() => {
        setAnimateCards(true);
    }, [selectedCategory]);

    const categories = [
        { id: 'All', icon: <BookOpen className="w-4 h-4" />, label: 'All Posts' },
        { id: 'Real Estate Trends', icon: <TrendingUp className="w-4 h-4" />, label: 'Trends' },
        { id: 'Market Analysis', icon: <Tag className="w-4 h-4" />, label: 'Analysis' },
        { id: 'Investment Tips', icon: <Filter className="w-4 h-4" />, label: 'Tips' },
        { id: 'Company News', icon: <Share2 className="w-4 h-4" />, label: 'News' },
    ];

    const filteredBlogs = blogs.filter(blog =>
        (selectedCategory === 'All' || blog.category === selectedCategory) &&
        (blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.description.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleLike = (blogId: number) => {
        setLikedBlogs(prev =>
            prev.includes(blogId)
                ? prev.filter(id => id !== blogId)
                : [...prev, blogId]
        );
    };

    const openModal = (blog: any) => {
        setSelectedBlog(blog);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setSelectedBlog(null);
        setIsModalOpen(false);
        document.body.style.overflow = 'auto';
    };

    const handleSubscribe = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle subscription logic
        setEmail('');
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />
                <div className="relative h-full flex flex-col justify-center items-center px-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
                        Our Blog
                    </h1>
                    <p className="text-xl md:text-2xl text-white/90 max-w-2xl text-center mb-12 animate-fade-in-up animation-delay-200">
                        Discover the latest insights, trends, and expert analysis in real estate
                    </p>

                    {/* Search Bar */}
                    <div className="w-full max-w-2xl animate-fade-in-up animation-delay-400">
                        <div className={`
                            relative bg-white/10 backdrop-blur-md rounded-full 
                            transition-all duration-300
                            ${isSearchFocused ? 'bg-white shadow-lg' : ''}
                        `}>
                            <Search className={`
                                absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5
                                transition-colors duration-300
                                ${isSearchFocused ? 'text-gray-600' : 'text-white'}
                            `} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                onFocus={() => setIsSearchFocused(true)}
                                onBlur={() => setIsSearchFocused(false)}
                                className={`
                                    w-full bg-transparent py-4 pl-12 pr-4 rounded-full
                                    focus:outline-none transition-colors duration-300
                                    ${isSearchFocused
                                        ? 'text-gray-900 placeholder-gray-500'
                                        : 'text-white placeholder-white/70'}
                                `}
                            />
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
                        <ChevronDown className="w-8 h-8 text-white animate-bounce" />
                    </div>
                </div>
            </div>

            {/* Categories Section */}
            <div className="sticky top-20 z-20 py-6 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-4">
                        {categories.map((category) => (
                            <button
                                key={category.id}
                                onClick={() => setSelectedCategory(category.id)}
                                className={`
                                    flex items-center gap-2 px-6 py-3 rounded-full
                                    transition-all duration-300 text-sm font-medium
                                    ${selectedCategory === category.id
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                                    }
                                `}
                            >
                                {category.icon}
                                {category.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Posts Grid */}
            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                        {selectedCategory === 'All' ? 'Latest Articles' : selectedCategory}
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((blog, index) => (
                            <article
                                key={blog.id}
                                className={`
                                    group bg-white rounded-xl overflow-hidden shadow-lg
                                    transform transition-all duration-500
                                    hover:-translate-y-2 hover:shadow-xl
                                    ${animateCards ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
                                `}
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Container */}
                                <div className="relative aspect-video overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    {/* Meta Info */}
                                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4" />
                                            {blog.date}
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <Tag className="w-4 h-4" />
                                            {blog.category}
                                        </div>
                                    </div>

                                    {/* Title & Description */}
                                    <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
                                        {blog.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 line-clamp-3">
                                        {blog.description}
                                    </p>

                                    {/* Author Info & Actions */}
                                    <div className="flex items-center justify-between mt-6">
                                        <div className="flex items-center gap-3">
                                            <img
                                                src={blog.authorImage}
                                                alt={blog.author}
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <span className="text-sm font-medium text-gray-900">
                                                {blog.author}
                                            </span>
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <button
                                                onClick={() => handleLike(blog.id)}
                                                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                                            >
                                                <Heart
                                                    className={`w-5 h-5 ${likedBlogs.includes(blog.id)
                                                        ? 'fill-red-500 text-red-500'
                                                        : 'text-gray-500'
                                                        }`}
                                                />
                                            </button>
                                            <button
                                                onClick={() => openModal(blog)}
                                                className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-full
                                                    hover:bg-primary/90 transition-colors"
                                            >
                                                Read More
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>

            {/* Blog Modal */}
            {selectedBlog && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={e => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="relative h-72">
                            <img
                                src={selectedBlog.image}
                                alt={selectedBlog.title}
                                className="w-full h-full object-cover"
                            />
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/70 
                                    rounded-full text-white transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <div className="flex items-center gap-4 mb-6">
                                <img
                                    src={selectedBlog.authorImage}
                                    alt={selectedBlog.author}
                                    className="w-12 h-12 rounded-full object-cover"
                                />
                                <div>
                                    <h4 className="font-medium text-gray-900">
                                        {selectedBlog.author}
                                    </h4>
                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                        <Calendar className="w-4 h-4" />
                                        {selectedBlog.date}
                                    </div>
                                </div>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {selectedBlog.title}
                            </h2>

                            <div className="prose max-w-none">
                                {selectedBlog.content}
                            </div>

                            {/* Modal Footer */}
                            <div className="flex items-center justify-between mt-8 pt-8 border-t">
                                <div className="flex items-center gap-4">
                                    <button
                                        onClick={() => handleLike(selectedBlog.id)}
                                        className="flex items-center gap-2 px-4 py-2 bg-gray-100 
                                            rounded-full hover:bg-gray-200 transition-colors"
                                    >
                                        <Heart
                                            className={`w-5 h-5 ${likedBlogs.includes(selectedBlog.id)
                                                ? 'fill-red-500 text-red-500'
                                                : 'text-gray-500'
                                                }`}
                                        />
                                        Like
                                    </button>
                                    <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 
                                        rounded-full hover:bg-gray-200 transition-colors">
                                        <Share2 className="w-5 h-5" />
                                        Share
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            {/* Newsletter Section */}
            <div className="relative py-24">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${blogImage3})`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/80 backdrop-blur-sm" />

                <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white">
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Stay Updated
                    </h2>
                    <p className="text-xl mb-12">
                        Subscribe to our newsletter for the latest real estate insights and market updates.
                    </p>

                    <form onSubmit={handleSubscribe} className="max-w-md mx-auto">
                        <div className="relative">
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-6 py-4 pr-36 rounded-full bg-white/10 backdrop-blur-sm
                                    border border-white/20 text-white placeholder-white/70
                                    focus:outline-none focus:bg-white/20 transition-all duration-300"
                            />
                            <button
                                type="submit"
                                className="absolute right-2 top-1/2 -translate-y-1/2 px-6 py-2
                                    bg-white text-primary rounded-full font-medium
                                    hover:bg-primary hover:text-white border border-white
                                    transition-all duration-300"
                            >
                                Subscribe
                                <ArrowRight className="w-4 h-4 ml-2 inline-block" />
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            {/* No Results Message */}
            {filteredBlogs.length === 0 && (
                <div className="text-center py-16">
                    <div className="flex flex-col items-center justify-center space-y-4">
                        <div className="p-4 rounded-full bg-gray-100">
                            <Search className="w-8 h-8 text-gray-400" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-900">No Results Found</h3>
                        <p className="text-gray-600">
                            We couldn't find any posts matching your search.
                            Try different keywords or clear your search.
                        </p>
                        <button
                            onClick={() => {
                                setSearchTerm('');
                                setSelectedCategory('All');
                            }}
                            className="text-primary hover:text-primary-dark font-medium"
                        >
                            Clear Search
                        </button>
                    </div>
                </div>
            )}

            {/* Back to Top Button */}
            <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full
                    shadow-lg hover:bg-primary/90 transition-all duration-300
                    opacity-0 hover:opacity-100 focus:opacity-100"
            >
                <ChevronDown className="w-6 h-6 rotate-180" />
            </button>
        </div>
    );
};

export default BlogPage;