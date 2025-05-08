import React from "react";
import SectionTitle from "../components/SectionTitle";
import SkillBadge from "../components/SkillBadge";
import { Code, Server, Database, GitBranch, Terminal } from "lucide-react";
import {
    languages,
    backendTech,
    frontendTech,
    databaseTools,
    otherTools,
} from "../data/skills";

const Skills = () => {
    return (
        <section
            id="skills"
            className="py-20 bg-gradient-to-b from-[#0077b6] to-[#023e8a]"
        >
            <div className="container mx-auto px-4">
                <SectionTitle
                    title="Skills & Technologies"
                    subtitle="The technologies and tools I use to bring ideas to life"
                />

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-[#03045e]/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <Code size={24} className="text-[#48cae4] mr-3" />
                            <h3 className="text-xl font-bold text-white">
                                Programming Languages
                            </h3>
                        </div>
                        <div className="flex flex-wrap">
                            {languages.map((skill) => (
                                <SkillBadge
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#03045e]/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <Server size={24} className="text-[#48cae4] mr-3" />
                            <h3 className="text-xl font-bold text-white">
                                Backend Development
                            </h3>
                        </div>
                        <div className="flex flex-wrap">
                            {backendTech.map((skill) => (
                                <SkillBadge
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#03045e]/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <Terminal
                                size={24}
                                className="text-[#48cae4] mr-3"
                            />
                            <h3 className="text-xl font-bold text-white">
                                Frontend Development
                            </h3>
                        </div>
                        <div className="flex flex-wrap">
                            {frontendTech.map((skill) => (
                                <SkillBadge
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#03045e]/50 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                        <div className="flex items-center mb-4">
                            <Database
                                size={24}
                                className="text-[#48cae4] mr-3"
                            />
                            <h3 className="text-xl font-bold text-white">
                                Databases
                            </h3>
                        </div>
                        <div className="flex flex-wrap">
                            {databaseTools.map((skill) => (
                                <SkillBadge
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>

                    <div className="bg-[#03045e]/50 backdrop-blur-sm p-6 rounded-lg shadow-lg md:col-span-2 lg:col-span-1">
                        <div className="flex items-center mb-4">
                            <GitBranch
                                size={24}
                                className="text-[#48cae4] mr-3"
                            />
                            <h3 className="text-xl font-bold text-white">
                                Tools & Others
                            </h3>
                        </div>
                        <div className="flex flex-wrap">
                            {otherTools.map((skill) => (
                                <SkillBadge
                                    key={skill.name}
                                    name={skill.name}
                                    level={skill.level}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;
