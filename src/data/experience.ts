export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

export const experiences = [
  {
    title: "Computer Science and Engineering Student",
    company: "Adama Science and Technology University (ASTU)",
    period: "Sep, 2021 - Jul, 2026",
    description: [
      "Currently studying towards a Bachelor's degree in Computer Science and Engineering",
      "Taking courses in algorithms, data structures, databases, and software engineering as I continue to learn and grow",
      "Maintaining a strong academic record while working on personal projects, CGPA: 3.9/4.0",
    ],
    technologies: [
      "Java",
      "C++",
      "Data Structures",
      "Algorithms",
      "Databases",
      "Software Engineering",
      "System Programming",
    ],
  },
  {
    title: "Intern Backend Developer",
    company: "Ethronics-IRAS",
    period: "July 1, 2024 - Aug 31, 2024",
    description: [
      "Developed RESTful APIs for a taxation system using Node.js and Express",
      "Implemented secure authentication and authorization mechanisms",
      "Designed and implemented database in postgresql for the project",
    ],
    technologies: [
      "Node.js",
      "Express",
      "PostgreSQL",
      "OAuth-PassportJs",
      "2FA",
    ],
  },
  {
    title: "A2SV Fellow Student",
    company: "African to Silicon Valley (A2SV)",
    period: "Jan, 2025 - Dec, 2025",
    description: [
      "Learning data structures and algorithms",
      "Learning Conducted technical interviews and receiving feedback from mentors",
      "Competing and solving competitive programming problems",
    ],
    technologies: [
      "Data Structures",
      "Algorithms",
      "Python",
      "Problem Solving",
    ],
  },
  {
    title: "Backend intern at Escalate.io",
    company: "Escalate.io",
    period: "Jun, 2025 - Sep, 2025",
    description: [
      "Architected and implemented the core backend services in Golang (Gin) and MongoDB",
      "Establishing a Clean Architecture to ensure maintainability and clear separation of concerns",
      "Developed the critical Al orchestration endpoints for the safety-first triage classifier and symptomto-topic mapping, forming the backbone of the application's user safety logic.",
    ],
    technologies: ["Go", "MongoDB", "Gin", "llm", "gemini"],
  },
];
