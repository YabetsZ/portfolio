import node_to_rust from "../assets/imgs/node-rust.jpeg";
import node from "../assets/imgs/node.png";
import problem_solving from "../assets/imgs/problem-solving.png";

export interface BlogPost {
    title: string;
    summary: string;
    date: string;
    readTime: string;
    imageUrl: string;
    url: string;
}

const blogPosts = [
    {
        title: "Getting Started with Rust for JavaScript Developers",
        summary:
            "A beginner-friendly guide to learning Rust programming language when coming from a JavaScript background. Learn the key differences and similarities.",
        date: "April 15, 2023",
        readTime: "7 min read",
        imageUrl: node_to_rust,
        url: "#blog-post-1",
    },
    {
        title: "Building Scalable Backend Systems with Node.js",
        summary:
            "Learn architecture patterns and best practices for building highly scalable backend systems using Node.js, Express, and modern JavaScript features.",
        date: "March 22, 2023",
        readTime: "10 min read",
        imageUrl: node,
        url: "#blog-post-2",
    },
    {
        title: "How DSA Training at A2SV is Shaping My Problem-Solving Skills",
        summary:
            "Reflection on my experience as a fellow at A2SV. how my algorithm skills have improved, with a specific problem example.",
        date: "February 10, 2023",
        readTime: "8 min read",
        imageUrl: problem_solving,
        url: "#blog-post-3",
    },
];

export default blogPosts;
