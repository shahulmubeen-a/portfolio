import React from 'react';
import { skills } from '../../data/portfolioData';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-16 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-secondary-900">TECHNICAL SKILLS</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-bold text-primary-700">{skill.name}</h3>
                <span className="px-3 py-1 bg-primary-100 text-primary-800 rounded-full text-sm font-medium">
                  {skill.proficiencyLevel}
                </span>
              </div>
              <p className="text-gray-700">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
