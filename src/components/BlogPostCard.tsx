import React from "react";
import { Clock } from "lucide-react";

interface BlogPostCardProps {
    title: string;
    summary: string;
    date: string;
    readTime: string;
    imageUrl: string;
    url: string;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({
    title,
    summary,
    date,
    readTime,
    imageUrl,
    url,
}) => {
    return (
        <div className="bg-gradient-to-br from-[#023e8a] to-[#0077b6] rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="h-48 overflow-hidden">
                <img
                    src={imageUrl}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
            </div>
            <div className="p-6">
                <div className="flex items-center text-[#90e0ef] text-sm mb-2">
                    <span>{date}</span>
                    <span className="mx-2">•</span>
                    <span className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {readTime}
                    </span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-[#caf0f8]">
                    {title}
                </h3>
                <p className="text-[#ade8f4] mb-4 line-clamp-3">{summary}</p>
                <a
                    href={url}
                    onClick={(e) => e.preventDefault()}
                    className="inline-block px-4 py-2 bg-[#0096c7] text-white rounded-md transition-colors hover:bg-[#00b4d8]"
                >
                    Coming soon
                </a>
            </div>
        </div>
    );
};

export default BlogPostCard;
