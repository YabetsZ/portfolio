import React from "react";
import SectionTitle from "../components/SectionTitle";
import BlogPostCard from "../components/BlogPostCard";
import blogPosts from "../data/blog";

const Blog = () => {
    return (
        <section id="blog" className="py-20 bg-[#03045e]">
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Blog"
                    subtitle="Sharing my thoughts and knowledge on technology and development"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post, index) => (
                        <BlogPostCard key={index} {...post} />
                    ))}
                </div>

                <div className="text-center mt-12">
                    <a
                        href="#blog"
                        className="inline-block px-6 py-3 bg-gradient-to-r from-[#0077b6] to-[#0096c7] text-white font-medium rounded-md transition-transform hover:-translate-y-1"
                    >
                        View All Posts
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Blog;
