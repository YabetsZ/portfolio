import coffebeans from "../assets/imgs/coffee-beans.webp";
import taxapi from "../assets/imgs/tax_api.webp";
import minigrep from "../assets/imgs/minigrep.webp";

export interface Project {
    title: string;
    description: string;
    technologies: string[];
    githubUrl: string;
    liveUrl?: string;
    imageUrl?: string;
}

const projects = [
    {
        title: "Tax collection and management system API [In progress]",
        description:
            "Here is an express app that provides api endpoints for a tax collection and management system.",
        technologies: ["Node.js", "Express", "PostgreSQL", "OAuth-PassportJS"],
        githubUrl: "https://github.com/YabetsZ/Tax-management-and-collection",
        imageUrl: taxapi,
    },
    {
        title: "CoffeeChain [In progress]",
        description:
            "CoffeeChain is a transparency-focused web app that empowers farmers, businesses, and consumers by revealing the full journey of a coffee product — from farm to cup.",
        technologies: ["Node.js", "Express"],
        githubUrl: "https://github.com/YabetsZ/coffee-chain",
        imageUrl: coffebeans,
    },
    {
        title: "Minigrep: text searching CLI tool [In progress]",
        description:
            "A command-line tool built with Rust for searching words in a text file.",
        technologies: ["Rust", "Clap", "Tokio"],
        githubUrl: "https://github.com/YabetsZ/minigrep",
        imageUrl: minigrep,
    },
    {
        title: "Leetcode/Codeforces solutions for problems",
        description: "Solutions for leetcode and codeforces problems",
        technologies: ["Python"],
        githubUrl: "https://github.com/YabetsZ/mineCPcodes",
        liveUrl: "https://dsa-learning.example.com",
        imageUrl:
            "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
];

export default projects;
