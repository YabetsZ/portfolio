import React from "react";
import SectionTitle from "../components/SectionTitle";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

const Projects = () => {
    return (
        <section id="projects" className="py-20 bg-[#023e8a]">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Projects"
                    subtitle="A showcase of my technical skills and problem-solving abilities"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard key={index} {...project} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="https://github.com/YabetsZ"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-[#0077b6] to-[#0096c7] text-white font-medium rounded-md transition-transform hover:-translate-y-1"
                    >
                        See More on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Projects;
