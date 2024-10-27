import React, { useState } from "react";
import backgroundImage from "../images/house1.png";
import { ArrowRight, Bell, Check, Mail, Send, X } from "lucide-react";

const ConnectSection = () => {
    const [email, setEmail] = useState("");
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
    const [isHovered, setIsHovered] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!email || status === "loading") return;

        setStatus("loading");

        // Simulated API call
        setTimeout(() => {
            if (email.includes("@")) {
                setStatus("success");
                setEmail("");
                setTimeout(() => setStatus("idle"), 3000);
            } else {
                setStatus("error");
                setTimeout(() => setStatus("idle"), 3000);
            }
        }, 1000);
    };

    const features = [
        {
            icon: <Bell className="w-5 h-5" />,
            text: "Property Alerts"
        },
        {
            icon: <Mail className="w-5 h-5" />,
            text: "Market Updates"
        },
        {
            icon: <Send className="w-5 h-5" />,
            text: "Investment Tips"
        }
    ];

    return (
        <div className="relative w-full overflow-hidden">
            {/* Background Image with Parallax Effect */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-fixed transform scale-110 transition-transform duration-1000"
                style={{
                    backgroundImage: `url(${backgroundImage})`,
                    transform: `scale(${isHovered ? 1.15 : 1.1})`
                }}
            />

            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80" />

            {/* Content */}
            <div
                className="relative z-10 max-w-6xl mx-auto px-4 py-24 md:py-32"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div className="max-w-3xl mx-auto text-center">
                    {/* Header */}
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        Stay Connected with Peninsula
                    </h2>

                    <p className="text-lg text-white/90 mb-8">
                        Join our newsletter to receive exclusive updates, market insights, and premium property listings
                        delivered directly to your inbox.
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap justify-center gap-8 mb-12">
                        {features.map((feature, index) => (
                            <div
                                key={index}
                                className="flex items-center gap-2 text-white/90"
                            >
                                <div className="p-2 bg-white/10 rounded-full">
                                    {feature.icon}
                                </div>
                                <span>{feature.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Subscribe Form */}
                    <form
                        onSubmit={handleSubmit}
                        className="relative max-w-xl mx-auto"
                    >
                        <div className="flex items-center bg-white/10 backdrop-blur-md rounded-full p-2 focus-within:bg-white/20 transition-all duration-300">
                            <Mail className="w-6 h-6 text-white ml-4" />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Enter your email address"
                                className="w-full px-4 py-3 bg-transparent text-white placeholder-white/60 focus:outline-none"
                                disabled={status === "loading" || status === "success"}
                            />
                            <button
                                type="submit"
                                className={`
                                    px-6 py-3 rounded-full font-semibold transition-all duration-300
                                    ${status === "loading" ?
                                        "bg-white/20 text-white cursor-wait" :
                                        status === "success" ?
                                            "bg-green-500 text-white" :
                                            status === "error" ?
                                                "bg-red-500 text-white" :
                                                "bg-[#0059B2] text-white hover:bg-white hover:text-[#0059B2]"
                                    }
                                `}
                            >
                                {status === "loading" ? (
                                    <div className="w-6 h-6 border-2 border-white border-t-transparent rounded-full animate-spin" />
                                ) : status === "success" ? (
                                    <Check className="w-6 h-6" />
                                ) : status === "error" ? (
                                    <X className="w-6 h-6" />
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <span>Subscribe</span>
                                        <ArrowRight className="w-5 h-5" />
                                    </div>
                                )}
                            </button>
                        </div>

                        {/* Status Messages */}
                        <div className="absolute -bottom-8 left-0 right-0 text-center">
                            {status === "error" && (
                                <p className="text-red-400 text-sm">Please enter a valid email address</p>
                            )}
                            {status === "success" && (
                                <p className="text-green-400 text-sm">Successfully subscribed to newsletter!</p>
                            )}
                        </div>
                    </form>

                    {/* Privacy Notice */}
                    <p className="text-white/60 text-sm mt-16">
                        By subscribing, you agree to our Privacy Policy and consent to receive updates from our team.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ConnectSection;



