import React from 'react';
import { personalInfo, dreamJobs } from '../../data/portfolioData';

const SummarySection: React.FC = () => {
  return (
    <section id="summary" className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-12">
          {/* Headshot image */}
          <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-primary-500 shadow-lg">
            <img 
              src={personalInfo.profileImage} 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Summary text */}
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-serif font-bold mb-6 text-center md:text-left text-secondary-900">SUMMARY</h2>
            <p className="text-xl text-center md:text-left">{personalInfo.summaryText}</p>
          </div>
        </div>
        
        <div className="mb-16">
          <div className="timeline-container max-w-5xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary-800">List of Dream Jobs</h3>
              <ul className="list-disc pl-5 space-y-2">
                {dreamJobs.map((job, index) => (
                  <li key={index} className="text-lg">
                    <span className="font-medium">{job.title}</span> - {job.subtitle}
                    {job.isCurrentPosition && (
                      <span className="ml-2 text-orange-500 font-bold">(Current Position)</span>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Custom flowchart image */}
            <div className="mt-12 flex justify-center">
              <img 
                src={personalInfo.dreamJobsFlowchartImage} 
                alt="Career Flowchart" 
                className="max-w-full rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
