export interface Skill {
  name: string;
  level: number; // 1-5 representing skill level
}

export const languages = [
  { name: "TypeScript", level: 5 },
  { name: "Go", level: 4 },
  { name: "Rust", level: 4 },
  { name: "Java", level: 3 },
  { name: "Python", level: 4 },
  { name: "C++", level: 2 },
];

export const backendTech = [
  { name: "Node.js", level: 4 },
  { name: "Gin", level: 4 },
  { name: "Actix-web", level: 4 },
  { name: "REST APIs", level: 4 },
  { name: "GraphQL", level: 3 },
  { name: "WebSockets", level: 3 },
];

export const frontendTech = [
  { name: "React.js", level: 3 },
  { name: "HTML/CSS", level: 4 },
  { name: "Tailwind CSS", level: 3 },
];

export const databaseTools = [
  { name: "PostgreSQL", level: 4 },
  { name: "MongoDB", level: 4 },
  { name: "Redis", level: 3 },
  { name: "SQL", level: 4 },
];

export const otherTools = [
  { name: "Git", level: 4 },
  { name: "Docker", level: 3 },
  { name: "Linux", level: 3 },
  { name: "AWS", level: 2 },
  { name: "DSA", level: 4 },
];
