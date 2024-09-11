import React, { useState } from "react";
import bg from "../images/image2.avif";
import projectImage1 from "../images/house1.png";
import projectImage2 from "../images/house2.png";
import projectImage3 from "../images/house3.png";
import projectImage4 from "../images/house4.png";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Project Data (expanded to 15 projects)
const projects = [
    {
        id: 1,
        name: "Luxury Villa",
        location: "Asaba, Nigeria",
        description: "A beautiful villa with modern amenities.",
        status: "Under Construction",
        images: [projectImage1, projectImage2, projectImage3],
    },
    {
        id: 2,
        name: "Modern Apartment",
        location: "Lekki, Lagos",
        description: "A contemporary apartment with stunning views.",
        status: "In Progress",
        images: [projectImage2, projectImage3, projectImage4],
    },
    {
        id: 3,
        name: "Beach House",
        location: "Victoria Island, Lagos",
        description: "A luxurious beach house with private access.",
        status: "In Progress",
        images: [projectImage3, projectImage4, projectImage1],
    },
    {
        id: 4,
        name: "Penthouse Suite",
        location: "Ikoyi, Lagos",
        description: "A high-end penthouse with breathtaking views.",
        status: "In Progress",
        images: [projectImage4, projectImage1, projectImage2],
    },
    {
        id: 5,
        name: "Hillside Residence",
        location: "Enugu, Nigeria",
        description: "Elegant residence on a serene hillside.",
        status: "In Progress",
        images: [projectImage1, projectImage2, projectImage3],
    },
    {
        id: 6,
        name: "Mountain View Estate",
        location: "Jos, Nigeria",
        description: "Stunning estate with mountain views.",
        status: "Under Construction",
        images: [projectImage4, projectImage1, projectImage2],
    },
    {
        id: 7,
        name: "Sunset Villas",
        location: "Abuja, Nigeria",
        description: "Villas offering sunset views in a premium location.",
        status: "In Progress",
        images: [projectImage2, projectImage3, projectImage1],
    },
];

const upcomingProjects = [
    {
        id: 8,
        name: "Garden City Villa",
        location: "Port Harcourt, Nigeria",
        description: "A stunning villa with lush gardens.",
        status: "Upcoming",
        images: [projectImage1, projectImage2, projectImage3],
    },
    {
        id: 9,
        name: "Lagoon View Apartments",
        location: "Victoria Island, Lagos",
        description: "Luxury apartments with serene lagoon views.",
        status: "Upcoming",
        images: [projectImage3, projectImage4, projectImage2],
    },
    {
        id: 10,
        name: "Waterfront Residences",
        location: "Lagos, Nigeria",
        description: "Exclusive residences on the waterfront.",
        status: "Upcoming",
        images: [projectImage2, projectImage1, projectImage3],
    },
    {
        id: 11,
        name: "Oasis Park Homes",
        location: "Kano, Nigeria",
        description: "A serene oasis in the heart of Kano.",
        status: "Upcoming",
        images: [projectImage3, projectImage4, projectImage1],
    },
];

const completedProjects = [
    {
        id: 12,
        name: "Sunset Apartments",
        location: "Lekki, Lagos",
        description: "Beautiful apartments with sunset views.",
        status: "Completed",
        images: [projectImage4, projectImage1, projectImage2],
    },
    {
        id: 13,
        name: "Seaside Mansion",
        location: "Banana Island, Lagos",
        description: "Luxurious mansion by the seaside.",
        status: "Completed",
        images: [projectImage3, projectImage2, projectImage1],
    },
    {
        id: 14,
        name: "Skyline Towers",
        location: "Abuja, Nigeria",
        description: "High-rise towers with skyline views.",
        status: "Completed",
        images: [projectImage1, projectImage2, projectImage3],
    },
    {
        id: 15,
        name: "Park View Estates",
        location: "Port Harcourt, Nigeria",
        description: "Exclusive estates with park views.",
        status: "Completed",
        images: [projectImage2, projectImage3, projectImage4],
    },
];

const ProjectsPage: React.FC = () => {
    const [selectedProject, setSelectedProject] = useState<any>(null);
    const [currentImage, setCurrentImage] = useState(0);

    const openModal = (project: any) => {
        setSelectedProject(project);
        setCurrentImage(0); // Reset to first image
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    const nextImage = () => {
        if (selectedProject) {
            setCurrentImage((currentImage + 1) % selectedProject.images.length);
        }
    };

    const prevImage = () => {
        if (selectedProject) {
            setCurrentImage((currentImage - 1 + selectedProject.images.length) % selectedProject.images.length);
        }
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case "Under Construction":
                return "bg-yellow-500";
            case "In Progress":
                return "bg-blue-500";
            case "Upcoming":
                return "bg-green-500";
            case "Completed":
                return "bg-gray-500";
            default:
                return "bg-gray-400";
        }
    };

    return (
        <div className="py-12">
            {/* Hero Section */}
            <div
                className="h-screen bg-cover bg-center text-white flex flex-col justify-center items-center"
                style={{ backgroundImage: `url(${bg})`, width: '100vw', minHeight: '100vh' }}
            >
                <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay for readability */}
                <div className="relative text-center px-4 max-w-2xl z-10">
                    <h1 className="text-4xl md:text-5xl font-bold">Our Projects</h1>
                    <p className="mt-4 text-xl">
                        Explore our current, upcoming, and completed projects.
                    </p>
                    <div className="mt-6">
                        <Link to="/contact">
                            <button className="bg-primary text-white py-3 px-6 rounded-md hover:bg-white hover:text-primary transition-all">
                                Get in Touch
                            </button>
                        </Link>
                    </div>
                </div>
            </div>




            {/* Current Projects Section */}
            <div className="px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Current Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                            <img src={project.images[0]} alt={project.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold shadow-md">{project.name}</h3>
                                <p className="text-gray-600 shadow-md">{project.location}</p>
                                <p className="mt-2 shadow-md">{project.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className={`text-sm text-white px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </p>
                                    <button
                                        className="bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition-all shadow-md"
                                        onClick={() => openModal(project)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal for Viewing Project Details */}
            {selectedProject && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
                    <div className="bg-white rounded-lg p-6 relative max-w-3xl w-full">
                        <button
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            onClick={closeModal}
                        >
                            <FaTimes size={24} />
                        </button>
                        <h2 className="text-2xl font-bold mb-4">{selectedProject.name}</h2>
                        <div className="relative">
                            <img
                                src={selectedProject.images[currentImage]}
                                alt="Project Image"
                                className="w-full h-64 object-cover rounded-md"
                            />
                            <button
                                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                                onClick={prevImage}
                            >
                                <FaArrowLeft />
                            </button>
                            <button
                                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
                                onClick={nextImage}
                            >
                                <FaArrowRight />
                            </button>
                        </div>
                        <div className="mt-4">
                            <h3 className="text-lg font-semibold">Project Details</h3>
                            <p>{selectedProject.description}</p>
                            <ul className="list-disc ml-6 mt-4">
                                <li>Spacious living rooms</li>
                                <li>Private parking</li>
                                <li>Modern kitchens</li>
                                <li>Swimming pool</li>
                                <li>Smart home system</li>
                            </ul>
                        </div>
                    </div>
                </div>
            )}

            {/* Upcoming Projects Section */}
            <div className="px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Upcoming Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {upcomingProjects.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                            <img src={project.images[0]} alt={project.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold shadow-md">{project.name}</h3>
                                <p className="text-gray-600 shadow-md">{project.location}</p>
                                <p className="mt-2 shadow-md">{project.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className={`text-sm text-white px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </p>
                                    <button
                                        className="bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition-all shadow-md"
                                        onClick={() => openModal(project)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Completed Projects Section */}
            <div className="px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Completed Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {completedProjects.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                            <img src={project.images[0]} alt={project.name} className="w-full h-64 object-cover" />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold shadow-md">{project.name}</h3>
                                <p className="text-gray-600 shadow-md">{project.location}</p>
                                <p className="mt-2 shadow-md">{project.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className={`text-sm text-white px-2 py-1 rounded-full ${getStatusColor(project.status)}`}>
                                        {project.status}
                                    </p>
                                    <button
                                        className="bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition-all shadow-md"
                                        onClick={() => openModal(project)}
                                    >
                                        View Details
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Invest Now Section */}
            <div
                className="w-screen h-[400px] bg-cover bg-center text-white flex justify-center items-center relative -mx-4"
                style={{ backgroundImage: `url(${projectImage4})` }} // Adjust image path if needed
            >
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold">Invest Now</h2>
                    <p className="mt-4 text-xl">Be a part of our successful journey. Contact us today.</p>
                    <Link to="/contact">
                        <button className="mt-6 bg-primary text-white py-3 px-8 rounded-md hover:bg-white hover:text-primary transition-all">
                            Contact Us
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ProjectsPage;
