import coffebeans from "../assets/imgs/coffee-beans.webp";
import remedy from "../assets/imgs/remedymate.jpg";
import minigrep from "../assets/imgs/minigrep.webp";
import tempo from "../assets/imgs/Tempo Rust Logo low.png";

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
    title: "RemedyMate: AI-Powered Home Remedy Advisor for Africa",
    description:
      "Architected and implemented core backend services in Golang (Gin) and MongoDB, applying Clean Architecture principles for scalability and maintainability.",
    technologies: ["Go", "gin", "Mongodb", "gemini-llm"],
    githubUrl: "https://github.com/A2SV/g6-remedymate",
    imageUrl: remedy,
  },
  {
    title: "CoffeeChain",
    description:
      "CoffeeChain is a transparency-focused mobile/web app that empowers farmers, businesses, and consumers by revealing the full journey of a coffee product — from farm to cup.",
    technologies: ["Node.js", "Express"],
    githubUrl: "https://github.com/YabetsZ/coffee-chain",
    imageUrl: coffebeans,
  },
  {
    title: "Tempo: The Code Templating Assistant CLI tool",
    description:
      "A CLI app to quickly manage and use code templates for various purposes, especially for CP.",
    technologies: ["Rust", "Clap"],
    githubUrl: "https://github.com/YabetsZ/tempo",
    imageUrl: tempo,
  },
  {
    title: "Minigrep: text searching CLI tool",
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
    // liveUrl: "https://dsa-learning.example.com",
    imageUrl:
      "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

export default projects;
