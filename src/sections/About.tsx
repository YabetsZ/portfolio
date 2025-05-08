import React from "react";
import SectionTitle from "../components/SectionTitle";

const About = () => {
    return (
        <section id="about" className="py-20 bg-[#03045e]/90">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="About Me"
                    subtitle="Get to know more about my background and passion for software development"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="order-2 md:order-1">
                        <p className="text-[#ade8f4] mb-6 leading-relaxed">
                            I'm a 4th year Computer Science student at Adama
                            Science and Technology University (ASTU), with a
                            strong passion for backend development, system
                            architecture, and algorithmic problem-solving.
                            Currently, I'm developing scalable backend systems
                            using Node.js and exploring systems programming with
                            Rust. I'm also a first-year fellow student at A2SV,
                            an organization that trains and supports students in
                            mastering Data Structures and Algorithms.
                        </p>

                        <div className="bg-[#023e8a] p-6 rounded-lg shadow-md border-l-4 border-[#48cae4] mb-6">
                            <p className="text-[#caf0f8] italic">
                                "You can't go back and change the beginning, but
                                you can start where you are and change the
                                ending."
                            </p>
                            <p className="text-[#90e0ef] text-right mt-2">
                                ― C.S. Lewis
                            </p>
                        </div>

                        <p className="text-[#ade8f4] mb-6 leading-relaxed">
                            When I'm not coding, you can find me solving
                            challenges on LeetCode and CodeForces, improving my
                            problem-solving skills and algorithmic thinking.
                        </p>

                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#contact"
                                className="px-6 py-3 bg-gradient-to-r from-[#0077b6] to-[#0096c7] text-white font-medium rounded-md transition-transform hover:-translate-y-1"
                            >
                                Get In Touch
                            </a>

                            <a
                                href="#projects"
                                className="px-6 py-3 border border-[#0096c7] text-[#caf0f8] font-medium rounded-md transition-transform hover:-translate-y-1"
                            >
                                View Projects
                            </a>
                        </div>
                    </div>

                    <div className="order-1 md:order-2 flex justify-center">
                        <div className="relative">
                            <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-[#0096c7] shadow-xl">
                                <img
                                    src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Yabets Zekaryas"
                                    className="w-full h-full object-cover object-center"
                                />
                            </div>
                            <div className="absolute -bottom-6 -right-6 bg-[#023e8a] p-4 rounded-lg shadow-lg">
                                <div className="text-[#caf0f8] font-bold">
                                    1+ Years
                                </div>
                                <div className="text-[#90e0ef] text-sm">
                                    Coding Experience
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
