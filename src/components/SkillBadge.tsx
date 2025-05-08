import React from 'react';

interface SkillBadgeProps {
  name: string;
  level?: number; // 1-5 representing skill level
}

const SkillBadge: React.FC<SkillBadgeProps> = ({ name, level = 3 }) => {
  return (
    <div className="bg-gradient-to-r from-[#023e8a] to-[#0077b6] rounded-full px-4 py-2 inline-flex flex-col items-center m-1 transition-transform duration-300 hover:-translate-y-1">
      <span className="text-[#caf0f8] font-medium">{name}</span>
      {level && (
        <div className="flex space-x-1 mt-1">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className={`w-1.5 h-1.5 rounded-full ${
                i < level ? 'bg-[#48cae4]' : 'bg-[#0077b6]'
              }`}
            ></div>
          ))}
        </div>
      )}
    </div>
  );
};

export default SkillBadge;