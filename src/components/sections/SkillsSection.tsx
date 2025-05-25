import React from 'react';
import { skills } from '../../data/portfolioData';

const SkillsSection: React.FC = () => {
  return (
    <section id="skills" className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 section-title text-secondary-900">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {skills.map((skill, index) => (
            <div 
              key={skill.name} 
              className="animate-fade-up" 
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-serif font-semibold text-secondary-800">{skill.name}</h3>
                <span className="text-secondary-600 font-medium">{skill.proficiency}%</span>
              </div>
              <div className="skill-bar mb-2">
                <div 
                  className="skill-progress bg-primary-600" 
                  style={{ width: `${skill.proficiency}%` }}
                ></div>
              </div>
              <p className="text-secondary-600">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
