export interface Skill {
    name: string;
    level: number; // 1-5 representing skill level
}

export const languages = [
    { name: "JavaScript", level: 5 },
    { name: "TypeScript", level: 4 },
    { name: "Rust", level: 3 },
    { name: "Java", level: 3 },
    { name: "Python", level: 4 },
    { name: "C++", level: 2 },
];

export const backendTech = [
    { name: "Node.js", level: 4 },
    { name: "Express.js", level: 4 },
    { name: "REST APIs", level: 4 },
    { name: "GraphQL", level: 2 },
    { name: "WebSockets", level: 2 },
];

export const frontendTech = [
    { name: "React.js", level: 3 },
    { name: "HTML/CSS", level: 4 },
    { name: "Tailwind CSS", level: 2 },
];

export const databaseTools = [
    { name: "PostgreSQL", level: 4 },
    { name: "MongoDB", level: 3 },
    { name: "Redis", level: 1 },
    { name: "SQL", level: 4 },
];

export const otherTools = [
    { name: "Git", level: 4 },
    { name: "Docker", level: 2 },
    { name: "Linux", level: 3 },
    { name: "AWS", level: 1 },
    { name: "Data Structures", level: 4 },
    { name: "Algorithms", level: 4 },
];
