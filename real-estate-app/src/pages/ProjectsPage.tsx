import React, { useState } from "react";
import bg from "../images/image3.avif";
import projectImage1 from "../images/house1.png";
import projectImage2 from "../images/house2.png";
import projectImage3 from "../images/house3.png";
import projectImage4 from "../images/house4.png";
import { FaArrowLeft, FaArrowRight, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

// Sample project data
const currentProjects = [
    {
        id: 1,
        name: "Luxury Villa",
        location: "Asaba, Nigeria",
        description: "A beautiful villa with modern amenities.",
        status: "Under Construction",
        progress: 3, // Progress between 1 and 5
        images: [projectImage1, projectImage2, projectImage3],
    },
    {
        id: 2,
        name: "Modern Apartment",
        location: "Lekki, Lagos",
        description: "A contemporary apartment with stunning views.",
        status: "In Progress",
        progress: 5,
        images: [projectImage2, projectImage3, projectImage4],
    },
    {
        id: 3,
        name: "Beachfront Mansion",
        location: "Victoria Island, Lagos",
        description: "A luxurious beachfront property with private access.",
        status: "In Progress",
        progress: 4,
        images: [projectImage3, projectImage4, projectImage1],
    },
    {
        id: 4,
        name: "Hilltop Estate",
        location: "Enugu, Nigeria",
        description: "An elegant estate with panoramic hilltop views.",
        status: "Under Construction",
        progress: 2,
        images: [projectImage4, projectImage1, projectImage2],
    },
    {
        id: 5,
        name: "Sunset Villas",
        location: "Abuja, Nigeria",
        description: "Villas offering breathtaking sunset views.",
        status: "In Progress",
        progress: 5,
        images: [projectImage1, projectImage2, projectImage3],
    },
    {
        id: 6,
        name: "Green Valley Estate",
        location: "Ibadan, Nigeria",
        description: "An estate designed with a focus on sustainable living.",
        status: "Under Construction",
        progress: 3,
        images: [projectImage2, projectImage3, projectImage4],
    },
    {
        id: 7,
        name: "Mountain View Apartments",
        location: "Jos, Nigeria",
        description: "Apartments offering scenic views of the mountains.",
        status: "In Progress",
        progress: 4,
        images: [projectImage3, projectImage4, projectImage1],
    },
    {
        id: 8,
        name: "City Garden Residences",
        location: "Port Harcourt, Nigeria",
        description: "Residences surrounded by lush city gardens.",
        status: "Under Construction",
        progress: 2,
        images: [projectImage4, projectImage1, projectImage2],
    },
    {
        id: 9,
        name: "Oasis Park Homes",
        location: "Kano, Nigeria",
        description: "An oasis of tranquility in the heart of Kano.",
        status: "In Progress",
        progress: 5,
        images: [projectImage1, projectImage2, projectImage3],
    },
    {
        id: 10,
        name: "Lakeside Manor",
        location: "Uyo, Nigeria",
        description: "A luxurious manor with lakeside views.",
        status: "Under Construction",
        progress: 3,
        images: [projectImage2, projectImage3, projectImage4],
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
];

const completedProjects = [
    {
        id: 12,
        name: "Sunset Apartments",
        location: "Lekki, Lagos",
        description: "Beautiful apartments with sunset views.",
        status: "Completed",
        progress: 5,
        images: [projectImage4, projectImage1, projectImage2],
    },
    {
        id: 13,
        name: "Seaside Mansion",
        location: "Banana Island, Lagos",
        description: "Luxurious mansion by the seaside.",
        status: "Completed",
        progress: 5,
        images: [projectImage3, projectImage2, projectImage1],
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

    const getProgressColor = (status: string, step: number, progress: number) => {
        if (status === "Completed") {
            return "bg-green-500"; // Green for completed projects
        } else if (status === "In Progress" || status === "Under Construction") {
            return progress >= step ? "bg-yellow-500" : "bg-gray-300"; // Yellow for current progress
        }
        return "";
    };

    const renderProgressBar = (status: string, progress: number) => (
        <div className="flex space-x-1 mt-4">
            {[1, 2, 3, 4, 5].map((step) => (
                <div
                    key={step}
                    className={`w-4 h-4 rounded-full ${getProgressColor(status, step, progress)}`}
                ></div>
            ))}
        </div>
    );

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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {currentProjects.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                            <img
                                src={project.images[0]}
                                alt={project.name}
                                className="w-full h-64 md:max-w-[80%] object-cover mx-auto" // Added max-width for desktop
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">{project.name}</h3>
                                <p className="text-gray-600">{project.location}</p>
                                <p className="mt-2">{project.description}</p>
                                {renderProgressBar(project.status, project.progress)} {/* Yellow progress bar for current projects */}
                                <div className="flex justify-between items-center mt-4">
                                    <p className={`text-sm text-white px-2 py-1 rounded-full ${project.status === "Completed" ? "bg-green-500" : "bg-yellow-500"}`}>
                                        {project.status}
                                    </p>
                                    <button
                                        className="bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition-all"
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

            {/* Upcoming Projects Section */}
            <div className="px-6 py-12">
                <h2 className="text-3xl font-bold text-center mb-8">Upcoming Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {upcomingProjects.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                            <img
                                src={project.images[0]}
                                alt={project.name}
                                className="w-full h-64 md:max-w-[80%] object-cover mx-auto" // Added max-width for desktop
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">{project.name}</h3>
                                <p className="text-gray-600">{project.location}</p>
                                <p className="mt-2">{project.description}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className={`text-sm text-white px-2 py-1 rounded-full bg-green-500`}>
                                        {project.status}
                                    </p>
                                    <button
                                        className="bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition-all"
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
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {completedProjects.map((project) => (
                        <div key={project.id} className="bg-white shadow-lg rounded-lg overflow-hidden relative">
                            <img
                                src={project.images[0]}
                                alt={project.name}
                                className="w-full h-64 md:max-w-[80%] object-cover mx-auto" // Added max-width for desktop
                            />
                            <div className="p-6">
                                <h3 className="text-xl font-semibold">{project.name}</h3>
                                <p className="text-gray-600">{project.location}</p>
                                <p className="mt-2">{project.description}</p>
                                {renderProgressBar(project.status, project.progress)} {/* Green progress bar for completed projects */}
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-sm text-white px-2 py-1 rounded-full bg-green-500">
                                        {project.status}
                                    </p>
                                    <button
                                        className="bg-primary text-white py-2 px-4 rounded hover:bg-white hover:text-primary transition-all"
                                        onClick={() => openModal(project)}
                                    >
                                        View Gallery
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
        </div>
    );
};

export default ProjectsPage;
