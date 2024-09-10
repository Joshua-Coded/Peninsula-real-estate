import React from "react";

const AboutUsPage: React.FC = () => {
    return (
        <div className="py-12 px-6">
            <div className="max-w-screen-lg mx-auto space-y-8">
                {/* About Us Section */}
                <h1 className="text-3xl md:text-4xl font-bold text-center">About Us</h1>
                <p className="text-lg leading-relaxed text-center">
                    Welcome to Peninsula Development Limited. Our company is dedicated to elevating living standards globally through
                    top-notch residential and commercial developments. We believe in providing secure, sophisticated, and comfortable
                    homes tailored to meet the diverse needs of families and individuals alike.
                </p>

                {/* Mission Statement */}
                <h2 className="text-2xl font-bold">Our Mission</h2>
                <p className="text-lg leading-relaxed">
                    At Peninsula Development Limited, our mission is to transform the real estate landscape by delivering high-quality,
                    modern, and innovative homes that enhance the lifestyle of our clients. We aim to exceed expectations through our
                    commitment to excellence, sustainability, and customer satisfaction.
                </p>

                {/* Core Values Section */}
                <h2 className="text-2xl font-bold">Core Values</h2>
                <ul className="list-disc list-inside space-y-2">
                    <li>Integrity: We prioritize transparency and honesty in all our dealings.</li>
                    <li>Quality: We deliver top-notch real estate products that stand the test of time.</li>
                    <li>Innovation: We leverage modern technologies and practices to meet the needs of the future.</li>
                    <li>Customer-Centric: Our clients are at the heart of every decision we make.</li>
                </ul>

                {/* Team Section */}
                <h2 className="text-2xl font-bold">Meet Our Team</h2>
                <p className="text-lg leading-relaxed">
                    Our team consists of experienced professionals who are passionate about real estate. We take pride in our ability to
                    deliver exceptional results through dedication, hard work, and a commitment to delivering value to our clients.
                </p>

                {/* Image */}
                <div className="w-full h-64 bg-cover bg-center mt-8" style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}></div>
            </div>
        </div>
    );
};

export default AboutUsPage;
