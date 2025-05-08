import React from "react";
import SectionTitle from "../components/SectionTitle";
import ExperienceCard from "../components/ExperienceCard";
import { experiences } from "../data/experience";

const Experience = () => {
    return (
        <section
            id="experience"
            className="py-20 bg-gradient-to-b from-[#023e8a] to-[#03045e]"
        >
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Experience & Education"
                    subtitle="My professional journey and academic background"
                />

                <div className="max-w-3xl mx-auto">
                    <div className="relative">
                        <div className="absolute left-6 top-0 bottom-0 w-1 bg-[#0096c7] transform -translate-x-1/2"></div>

                        {experiences.map((exp, index) => (
                            <div key={index} className="relative mb-12">
                                <div className="absolute left-6 top-6 w-4 h-4 rounded-full bg-[#48cae4] border-4 border-[#0077b6] transform -translate-x-1/2"></div>
                                <div className="pl-12">
                                    <ExperienceCard {...exp} />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
