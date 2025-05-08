import React from "react";
import { Github, ExternalLink } from "lucide-react";

interface ProjectCardProps {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    imageUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
    title,
    description,
    technologies,
    githubUrl,
    liveUrl,
    imageUrl,
}) => {
    return (
        <div className="bg-gradient-to-br from-[#023e8a] to-[#0077b6] rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-2">
            {imageUrl && (
                <div className="h-48 overflow-hidden">
                    <img
                        src={imageUrl}
                        alt={title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    />
                </div>
            )}
            <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-[#caf0f8]">
                    {title}
                </h3>
                <p className="text-[#ade8f4] mb-4">{description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                    {technologies.map((tech) => (
                        <span
                            key={tech}
                            className="px-3 py-1 bg-[#0096c7] text-white text-xs rounded-full"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
                <div className="flex space-x-4">
                    <a
                        href={githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-[#90e0ef] hover:text-white transition-colors"
                    >
                        <Github size={18} className="mr-1" />
                        <span>GitHub</span>
                    </a>
                    {liveUrl && (
                        <a
                            href={liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center text-[#90e0ef] hover:text-white transition-colors"
                        >
                            <ExternalLink size={18} className="mr-1" />
                            <span>Live Demo</span>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ProjectCard;
