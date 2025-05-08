import React from "react";
import { Github, Linkedin, Mail, ExternalLink } from "lucide-react";

interface SocialLinksProps {
    className?: string;
}

const SocialLinks: React.FC<SocialLinksProps> = ({ className = "" }) => {
    const socialLinks = [
        {
            name: "GitHub",
            url: "https://github.com/YabetsZ",
            icon: <Github size={20} />,
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/in/yabets-zekaryas-manale",
            icon: <Linkedin size={20} />,
        },
        {
            name: "Email",
            url: "mailto:yabetszekaryas07@gmail.com",
            icon: <Mail size={20} />,
        },
        {
            name: "LeetCode",
            url: "https://leetcode.com/ZYabets/",
            icon: <ExternalLink size={20} />,
        },
        {
            name: "CodeForces",
            url: "https://codeforces.com/profile/ZYabets",
            icon: <ExternalLink size={20} />,
        },
    ];

    return (
        <div className={`flex space-x-4 ${className}`}>
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#90e0ef] hover:text-white transition-colors duration-300"
                    aria-label={link.name}
                    title={link.name}
                >
                    {link.icon}
                </a>
            ))}
        </div>
    );
};

export default SocialLinks;
