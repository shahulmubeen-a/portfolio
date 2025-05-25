import React from 'react';
import { workExperience } from '../../data/portfolioData';

const WorkExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 md:px-8 bg-secondary-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 section-title text-secondary-900">Work Experience</h2>
        
        <div className="space-y-12">
          {workExperience.map((job, index) => (
            <div 
              key={`${job.company}-${index}`} 
              className="timeline-item animate-fade-up"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                  <div>
                    <h3 className="text-2xl font-serif font-bold text-secondary-900">{job.title}</h3>
                    <h4 className="text-xl text-primary-700 font-medium mb-2">{job.company}</h4>
                  </div>
                  <div className="mt-2 md:mt-0 md:text-right">
                    <span className="text-secondary-600 font-medium">{job.period}</span>
                    <p className="text-secondary-500">{job.location}</p>
                  </div>
                </div>
                
                <p className="text-secondary-700 mb-4">{job.description}</p>
                
                <h5 className="text-lg font-serif font-semibold mb-3 text-secondary-800">Key Achievements:</h5>
                <ul className="list-disc pl-5 space-y-2">
                  {job.achievements.map((achievement, i) => (
                    <li key={i} className="text-secondary-700">{achievement}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
