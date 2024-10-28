import React, { useEffect, useState } from "react";
import bg from "../images/image3.avif";
import completed1 from "../images/completed1.png";
import completed2 from "../images/completed2.png";
import completed3 from "../images/completed3.png";
import completed4 from "../images/house3.png";
import completed5 from "../images/image3.avif";
import completed6 from "../images/house6.png";
import projectImage1 from "../images/image1.avif";
import projectImage2 from "../images/current.png";
import projectImage3 from "../images/current1.png";
import projectImage4 from "../images/house4.png";
import { Link } from "react-router-dom";

import {
    ChevronDown, MapPin, Calendar, Search, Filter,
    ArrowRight, ArrowLeft, X, Building2, Eye,
    Clock, CheckCircle, Construction, AlertCircle
} from "lucide-react";


interface Project {
    id: number;
    name: string;
    location: string;
    description: string;
    status: "Completed" | "In Progress" | "Under Construction" | "Upcoming";
    progress?: number;
    images: string[];
    features?: string[];
    price?: string;
    startDate?: string;
    completionDate?: string;
    category?: string;
}

const currentProjects: Project[] = [
    {
        id: 1,
        name: "Luxury Villa",
        location: "Asaba, Nigeria",
        description: "A beautiful villa with modern amenities and stunning architecture, featuring spacious living areas and premium finishes.",
        status: "Under Construction",
        progress: 3,
        images: [projectImage1, projectImage2, projectImage3],
        features: ["4 Bedrooms", "Swimming Pool", "Smart Home", "Garden"],
        price: "$500,000",
        startDate: "2024-01",
        completionDate: "2024-12",
        category: "Residential"
    },
    {
        id: 2,
        name: "Palm Heights",
        location: "Lagos, Nigeria",
        description: "Modern high-rise luxury apartments with panoramic ocean views and state-of-the-art facilities.",
        status: "In Progress",
        progress: 4,
        images: [projectImage2, projectImage3, projectImage4],
        features: ["3 Bedrooms", "Rooftop Lounge", "Fitness Center", "24/7 Security"],
        price: "$450,000",
        startDate: "2023-11",
        completionDate: "2024-09",
        category: "Residential"
    },
    {
        id: 3,
        name: "Tech Hub Plaza",
        location: "Abuja, Nigeria",
        description: "Contemporary office complex designed for modern businesses with cutting-edge technology infrastructure.",
        status: "Under Construction",
        progress: 2,
        images: [projectImage3, projectImage4, projectImage1],
        features: ["Smart Office Spaces", "Conference Center", "Underground Parking", "Green Building"],
        price: "$2,000,000",
        startDate: "2024-02",
        completionDate: "2025-03",
        category: "Commercial"
    },
    {
        id: 4,
        name: "Riverside Gardens",
        location: "Port Harcourt, Nigeria",
        description: "Exclusive waterfront development featuring luxury townhouses with private gardens and river views.",
        status: "In Progress",
        progress: 3,
        images: [projectImage4, projectImage1, projectImage2],
        features: ["4 Bedrooms", "Private Dock", "Landscaped Gardens", "Security"],
        price: "$750,000",
        startDate: "2023-12",
        completionDate: "2024-11",
        category: "Residential"
    },
    {
        id: 5,
        name: "Green Valley Estate",
        location: "Enugu, Nigeria",
        description: "Sustainable residential community with eco-friendly features and modern amenities.",
        status: "Under Construction",
        progress: 1,
        images: [projectImage1, projectImage3, projectImage4],
        features: ["Solar Power", "Organic Gardens", "Recycling Center", "Nature Trails"],
        price: "$350,000",
        startDate: "2024-03",
        completionDate: "2025-04",
        category: "Residential"
    }
];

const upcomingProjects: Project[] = [
    {
        id: 1,
        name: "Garden City Villa",
        location: "Port Harcourt, Nigeria",
        description: "A stunning villa with lush gardens and contemporary design, perfect for modern living.",
        status: "Upcoming",
        images: [projectImage1, projectImage2, projectImage3],
        features: ["5 Bedrooms", "Garden", "Security"],
        price: "$600,000",
        startDate: "2024-06",
        category: "Residential"
    },
    {
        id: 2,
        name: "Azure Towers",
        location: "Victoria Island, Lagos",
        description: "Ultra-luxury residential towers offering premium waterfront living with world-class amenities.",
        status: "Upcoming",
        images: [projectImage2, projectImage3, projectImage4],
        features: ["Smart Home Systems", "Infinity Pool", "Helipad", "Private Beach"],
        price: "$1,500,000",
        startDate: "2024-08",
        category: "Residential"
    },
    {
        id: 3,
        name: "Innovation Park",
        location: "Abuja, Nigeria",
        description: "Mixed-use development featuring office spaces, retail outlets, and recreational facilities.",
        status: "Upcoming",
        images: [projectImage3, projectImage4, projectImage1],
        features: ["Office Spaces", "Shopping Mall", "Food Court", "Entertainment Center"],
        price: "$3,000,000",
        startDate: "2024-09",
        category: "Commercial"
    },
    {
        id: 4,
        name: "Sunset Hills",
        location: "Calabar, Nigeria",
        description: "Exclusive hillside community with luxury villas offering panoramic ocean views.",
        status: "Upcoming",
        images: [projectImage4, projectImage1, projectImage2],
        features: ["Private Pools", "Wine Cellar", "Home Theater", "Smart Security"],
        price: "$850,000",
        startDate: "2024-07",
        category: "Residential"
    },
    {
        id: 5,
        name: "Metro Business District",
        location: "Kano, Nigeria",
        description: "Modern business complex with grade-A office spaces and commercial facilities.",
        status: "Upcoming",
        images: [projectImage1, projectImage4, projectImage2],
        features: ["Corporate Offices", "Conference Facilities", "Parking Complex", "Retail Spaces"],
        price: "$4,000,000",
        startDate: "2024-10",
        category: "Commercial"
    }
];

const completedProjects: Project[] = [
    {
        id: 1,
        name: "Sunset Apartments",
        location: "Lekki, Lagos",
        description: "Beautiful apartments with sunset views and premium amenities, completed with attention to detail.",
        status: "Completed",
        progress: 5,
        images: [completed1, completed2, completed3, completed4, completed5, completed6],
        features: ["3 Bedrooms", "Gym", "Pool"],
        price: "$400,000",
        startDate: "2023-01",
        completionDate: "2023-12",
        category: "Residential"
    },
    {
        id: 2,
        name: "Crystal Tower",
        location: "Ikoyi, Lagos",
        description: "Iconic residential skyscraper featuring luxury penthouses and premium amenities.",
        status: "Completed",
        progress: 5,
        images: [projectImage2, projectImage3, projectImage4],
        features: ["Smart Living", "Sky Lounge", "Concierge", "Spa"],
        price: "$2,500,000",
        startDate: "2022-06",
        completionDate: "2023-08",
        category: "Residential"
    },
    {
        id: 3,
        name: "Peninsula Mall",
        location: "Asaba, Nigeria",
        description: "Premium shopping destination with modern retail spaces and entertainment facilities.",
        status: "Completed",
        progress: 5,
        images: [projectImage1, projectImage4, projectImage3],
        features: ["Retail Spaces", "Cinema", "Food Court", "Kids Zone"],
        price: "$5,000,000",
        startDate: "2022-03",
        completionDate: "2023-06",
        category: "Commercial"
    },
    {
        id: 4,
        name: "Harmony Gardens",
        location: "Abuja, Nigeria",
        description: "Luxury gated community with extensive green spaces and recreational facilities.",
        status: "Completed",
        progress: 5,
        images: [projectImage3, projectImage2, projectImage1],
        features: ["Community Center", "Tennis Courts", "Walking Trails", "24/7 Security"],
        price: "$600,000",
        startDate: "2022-09",
        completionDate: "2023-10",
        category: "Residential"
    },
    {
        id: 5,
        name: "Business Hub",
        location: "Port Harcourt, Nigeria",
        description: "Modern office complex with flexible workspace solutions and business support services.",
        status: "Completed",
        progress: 5,
        images: [projectImage4, projectImage2, projectImage3],
        features: ["Flexible Offices", "Meeting Rooms", "Business Center", "Parking"],
        price: "$3,500,000",
        startDate: "2022-07",
        completionDate: "2023-09",
        category: "Commercial"
    }
];


const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
        month: 'long',
        year: 'numeric'
    });
};

// Add this function to get progress color
const getProgressColor = (progress: number) => {
    if (progress >= 4) return 'bg-green-500';
    if (progress >= 2) return 'bg-yellow-500';
    return 'bg-blue-500';
};

// Add these utility functions
const getProgressText = (progress: number) => {
    if (progress >= 4) return 'Almost Complete';
    if (progress >= 2) return 'In Progress';
    return 'Just Started';
};

const getStatusIcon = (status: string) => {
    switch (status) {
        case "Completed":
            return <CheckCircle className="w-5 h-5 text-green-500" />;
        case "In Progress":
        case "Under Construction":
            return <Construction className="w-5 h-5 text-yellow-500" />;
        case "Upcoming":
            return <Clock className="w-5 h-5 text-blue-500" />;
        default:
            return <AlertCircle className="w-5 h-5 text-gray-500" />;
    }
};


const ProjectsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);
    const [currentImage, setCurrentImage] = useState(0);
    const [activeTab, setActiveTab] = useState("current");
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("All");
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const [activeService, setActiveService] = useState<number>(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    useEffect(() => {
        setIsVisible(true);
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 1000);

        return () => clearTimeout(timer);
    }, []);

    // Loading screen
    if (isLoading) {
        return (
            <div className="h-screen flex items-center justify-center bg-white">
                <div className="flex flex-col items-center gap-4">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 
                        border-primary border-t-transparent"></div>
                    <p className="text-primary font-medium">Loading...</p>
                </div>
            </div>
        );
    }

    const locations = ["All", "Lagos", "Abuja", "Port Harcourt", "Asaba", "Others"];

    const filteredProjects = (projectList: Project[]) => {
        return projectList.filter(project =>
            (project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                project.description.toLowerCase().includes(searchTerm.toLowerCase())) &&
            (selectedLocation === "All" || project.location.includes(selectedLocation))
        );
    };

    const getStatusIcon = (status: string) => {
        switch (status) {
            case "Completed":
                return <CheckCircle className="w-5 h-5 text-green-500" />;
            case "In Progress":
                return <Construction className="w-5 h-5 text-yellow-500" />;
            case "Under Construction":
                return <Construction className="w-5 h-5 text-yellow-500" />;
            case "Upcoming":
                return <Clock className="w-5 h-5 text-blue-500" />;
            default:
                return <AlertCircle className="w-5 h-5 text-gray-500" />;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Hero Section */}
            <div className="relative min-h-screen">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage: `url(${bg})`,
                        backgroundAttachment: 'fixed'
                    }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-transparent" />

                <div className="relative h-screen flex flex-col justify-center items-center px-4">
                    <div className={`text-center max-w-4xl mx-auto transition-all duration-1000 transform
                        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                            Our Projects
                        </h1>
                        <p className="text-xl md:text-2xl text-white/90 mb-12">
                            Discover our portfolio of exceptional properties and developments
                            across Nigeria's most sought-after locations.
                        </p>

                        {/* Search Section */}
                        <div className="max-w-2xl mx-auto mb-8">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
                                <input
                                    type="text"
                                    placeholder="Search projects..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="w-full px-12 py-4 bg-white/10 backdrop-blur-sm rounded-full
                                        text-white placeholder-white/70 border border-white/20
                                        focus:outline-none focus:bg-white/20 transition-all duration-300"
                                />
                                <Filter className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-white/70" />
                            </div>
                        </div>

                        <div className="flex flex-wrap justify-center gap-4">
                            {locations.map((location) => (
                                <button
                                    key={location}
                                    onClick={() => setSelectedLocation(location)}
                                    className={`
                                        px-6 py-2 rounded-full transition-all duration-300
                                        ${selectedLocation === location
                                            ? 'bg-white text-primary'
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                        }
                                    `}
                                >
                                    {location}
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
                        <ChevronDown className="w-8 h-8 text-white" />
                    </div>
                </div>
            </div>

            {/* Projects Navigation */}
            <div className="sticky top-20 z-20 bg-white shadow-md">
                <div className="max-w-7xl mx-auto px-4">
                    <div className="flex justify-center">
                        {[
                            { id: "current", label: "Current Projects" },
                            { id: "upcoming", label: "Upcoming Projects" },
                            { id: "completed", label: "Completed Projects" }
                        ].map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`
                                    px-6 py-4 font-medium transition-all duration-300 border-b-2
                                    ${activeTab === tab.id
                                        ? 'text-primary border-primary'
                                        : 'text-gray-500 border-transparent hover:text-gray-700'
                                    }
                                `}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>

            {/* Projects Grid Section */}
            <div className="py-16 px-4">
                <div className="max-w-7xl mx-auto">
                    {/* Grid Container */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredProjects(
                            activeTab === "current" ? currentProjects :
                                activeTab === "upcoming" ? upcomingProjects :
                                    completedProjects
                        ).map((project) => (
                            <article
                                key={project.id}
                                className="group bg-white rounded-xl overflow-hidden shadow-lg
                                    transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl"
                            >
                                {/* Image Container */}
                                <div className="relative aspect-[4/3] overflow-hidden">
                                    <img
                                        src={project.images[0]}
                                        alt={project.name}
                                        className="w-full h-full object-cover transition-transform duration-700
                                            group-hover:scale-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent
                                        opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                                    {/* Status Badge */}
                                    <div className="absolute top-4 left-4 flex items-center gap-2 px-3 py-1
                                        rounded-full bg-white/90 backdrop-blur-sm">
                                        {getStatusIcon(project.status)}
                                        <span className="text-sm font-medium">{project.status}</span>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6">
                                    <div className="flex items-center gap-2 text-gray-500 text-sm mb-3">
                                        <MapPin className="w-4 h-4" />
                                        {project.location}
                                    </div>

                                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                                        {project.name}
                                    </h3>

                                    <p className="text-gray-600 mb-4 line-clamp-2">
                                        {project.description}
                                    </p>

                                    {project.progress && (
                                        <div className="mb-4">
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Progress</span>
                                                <span>{(project.progress / 5 * 100)}%</span>
                                            </div>
                                            <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                                <div
                                                    className="h-full bg-primary transition-all duration-500"
                                                    style={{ width: `${project.progress / 5 * 100}%` }}
                                                />
                                            </div>
                                        </div>
                                    )}

                                    <button
                                        onClick={() => {
                                            setSelectedProject(project);
                                            setIsModalOpen(true);
                                        }}
                                        className="w-full flex items-center justify-center gap-2 bg-primary/10 
                                            text-primary px-4 py-3 rounded-lg hover:bg-primary hover:text-white 
                                            transition-all duration-300"
                                    >
                                        <Eye className="w-5 h-5" />
                                        View Details
                                    </button>
                                </div>
                            </article>
                        ))}
                    </div>

                    {/* No Results Message */}
                    {filteredProjects(
                        activeTab === "current" ? currentProjects :
                            activeTab === "upcoming" ? upcomingProjects :
                                completedProjects
                    ).length === 0 && (
                            <div className="text-center py-16">
                                <Building2 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                                <h3 className="text-xl font-semibold text-gray-900 mb-2">No Projects Found</h3>
                                <p className="text-gray-600 mb-4">
                                    We couldn't find any projects matching your criteria.
                                </p>
                                <button
                                    onClick={() => {
                                        setSearchTerm('');
                                        setSelectedLocation('All');
                                    }}
                                    className="text-primary hover:text-primary-dark font-medium
                                    inline-flex items-center gap-2"
                                >
                                    Clear Filters
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        )}
                </div>
            </div>

            {/* Project Details Modal */}
            {selectedProject && isModalOpen && (
                <div
                    className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Image Gallery */}
                        <div className="relative h-96">
                            {selectedProject.images.map((image, index) => (
                                <div
                                    key={index}
                                    className={`absolute inset-0 transition-opacity duration-500
                                        ${index === currentImage ? 'opacity-100' : 'opacity-0'}`}
                                >
                                    <img
                                        src={image}
                                        alt={`View ${index + 1}`}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            ))}

                            {/* Navigation Arrows */}
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImage((prev) =>
                                        (prev - 1 + selectedProject.images.length) % selectedProject.images.length
                                    );
                                }}
                                className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                                    bg-black/50 text-white hover:bg-black/70 transition-colors"
                            >
                                <ArrowLeft className="w-6 h-6" />
                            </button>
                            <button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentImage((prev) =>
                                        (prev + 1) % selectedProject.images.length
                                    );
                                }}
                                className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full
                                    bg-black/50 text-white hover:bg-black/70 transition-colors"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>

                            {/* Close Button */}
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="absolute top-4 right-4 p-2 rounded-full bg-black/50 text-white
                                    hover:bg-black/70 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            {/* Image Indicators */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                                {selectedProject.images.map((_, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setCurrentImage(index)}
                                        className={`w-2 h-2 rounded-full transition-all duration-300
                                            ${index === currentImage
                                                ? 'w-8 bg-white'
                                                : 'bg-white/50'}`}
                                    />
                                ))}
                            </div>
                        </div>

                        {/* Project Details */}
                        <div className="p-8">
                            <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                                {getStatusIcon(selectedProject.status)}
                                <span>{selectedProject.status}</span>
                                <span>•</span>
                                <MapPin className="w-4 h-4" />
                                <span>{selectedProject.location}</span>
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-4">
                                {selectedProject.name}
                            </h2>

                            <p className="text-gray-600 mb-6">
                                {selectedProject.description}
                            </p>

                            {selectedProject.progress && (
                                <div className="mb-6">
                                    <div className="flex justify-between text-sm mb-2">
                                        <span>Project Progress</span>
                                        <span>{(selectedProject.progress / 5 * 100)}%</span>
                                    </div>
                                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                                        <div
                                            className="h-full bg-primary transition-all duration-500"
                                            style={{ width: `${selectedProject.progress / 5 * 100}%` }}
                                        />
                                    </div>
                                </div>
                            )}

                            {/* Call to Action */}
                            <div className="flex gap-4 mt-8">
                                <Link
                                    to="/contact"
                                    className="flex-1 flex items-center justify-center gap-2 bg-primary text-white
                                        px-6 py-3 rounded-lg hover:bg-primary-dark transition-colors"
                                >
                                    Inquire Now
                                    <ArrowRight className="w-5 h-5" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProjectsPage;

