import React from 'react';

interface ExperienceCardProps {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies?: string[];
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({
  title,
  company,
  period,
  description,
  technologies,
}) => {
  return (
    <div className="bg-gradient-to-br from-[#023e8a] to-[#0077b6] rounded-lg p-6 shadow-lg mb-6">
      <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-[#caf0f8]">{title}</h3>
          <p className="text-[#90e0ef] text-lg">{company}</p>
        </div>
        <span className="bg-[#0096c7] text-white px-3 py-1 rounded-full text-sm mt-2 md:mt-0">
          {period}
        </span>
      </div>
      <ul className="list-disc pl-5 mb-4 space-y-2">
        {description.map((item, index) => (
          <li key={index} className="text-[#ade8f4]">
            {item}
          </li>
        ))}
      </ul>
      {technologies && (
        <div className="flex flex-wrap gap-2 mt-3">
          {technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 bg-[#00b4d8] text-white text-xs rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperienceCard;