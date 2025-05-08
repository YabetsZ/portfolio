import React, { useEffect, useState } from "react";
import SocialLinks from "../components/SocialLinks";
import { ArrowDown, Terminal } from "lucide-react";

const Hero = () => {
    const [text, setText] = useState("");
    const fullText = "Backend Developer | Rust & DSA Enthusiast";

    useEffect(() => {
        let index = 0;
        const timer = setInterval(() => {
            if (index < fullText.length) {
                setText(fullText.substring(0, index + 1));
                index++;
            } else {
                clearInterval(timer);
            }
        }, 50);

        return () => clearInterval(timer);
    }, []);

    return (
        <section
            id="home"
            className="min-h-screen flex items-center justify-center relative overflow-hidden py-20"
        >
            <div className="absolute inset-0 bg-gradient-to-b from-[#03045e] to-[#0077b6] opacity-80"></div>

            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute bg-[#0096c7] opacity-10 rounded-full"
                        style={{
                            width: `${Math.random() * 300 + 50}px`,
                            height: `${Math.random() * 300 + 50}px`,
                            top: `${Math.random() * 100}%`,
                            left: `${Math.random() * 100}%`,
                            animation: `float ${
                                Math.random() * 10 + 15
                            }s ease-in-out infinite`,
                            animationDelay: `${Math.random() * 5}s`,
                        }}
                    ></div>
                ))}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center">
                    <div className="inline-block p-2 mb-4 bg-[#0077b6]/30 backdrop-blur-sm rounded-lg">
                        <Terminal
                            size={24}
                            className="text-[#48cae4] inline-block"
                        />
                        <span className="ml-2 text-[#caf0f8]">
                            Hello World, I'm
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white">
                        Yabets Zekaryas
                    </h1>

                    <div className="h-6 mb-8">
                        <p className="text-xl md:text-2xl text-[#90e0ef]">
                            {text}
                            <span className="animate-blink">|</span>
                        </p>
                    </div>

                    <p className="text-[#ade8f4] mb-8 max-w-2xl mx-auto text-lg">
                        A passionate backend developer and student with
                        expertise in Node.js and Rust, focused on building
                        scalable, efficient backend systems and enhancing data
                        structures and algorithms (DSA) skills.
                    </p>

                    <div className="mb-12">
                        <SocialLinks className="justify-center" />
                    </div>

                    <a
                        href="#about"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0096c7] text-white animate-bounce"
                    >
                        <ArrowDown size={20} />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
