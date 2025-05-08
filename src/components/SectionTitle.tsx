import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {subtitle && <p className="text-[#ade8f4] text-lg max-w-3xl mx-auto">{subtitle}</p>}
      <div className="w-24 h-1 bg-gradient-to-r from-[#48cae4] to-[#90e0ef] mx-auto mt-4 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;