import React from 'react';
import { personalInfo, dreamJobs } from '../../data/portfolioData';

const SummarySection: React.FC = () => {
  return (
    <section id="summary" className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-secondary-900">SUMMARY</h2>
        
        <div className="mb-16">
          <p className="text-xl text-center max-w-4xl mx-auto mb-16">{personalInfo.summaryText}</p>
          
          <div className="timeline-container max-w-5xl mx-auto">
            <div className="mb-8">
              <h3 className="text-2xl font-bold mb-4 text-secondary-800">List of Dream Jobs</h3>
              
              <div className="relative">
                {/* Timeline line */}
                <div className="absolute left-0 right-0 h-2 bg-primary-200 top-1/2 transform -translate-y-1/2"></div>
                
                {/* Timeline items */}
                <div className="flex justify-between relative">
                  {dreamJobs.map((job, index) => (
                    <div key={index} className="relative flex flex-col items-center" style={{width: `${100 / dreamJobs.length}%`}}>
                      <div 
                        className={`w-32 h-12 rounded-md flex items-center justify-center text-center p-2 mb-2 z-10 text-sm
                          ${job.isCurrentPosition 
                            ? 'bg-orange-500 text-white' 
                            : index === dreamJobs.length - 1 
                              ? 'bg-gray-300 text-gray-800'
                              : index === 0
                                ? 'bg-green-400 text-gray-800'
                                : index === 1
                                  ? 'bg-blue-300 text-gray-800'
                                  : index === 2
                                    ? 'bg-blue-900 text-white'
                                    : 'bg-yellow-300 text-gray-800'
                          }`}
                      >
                        {job.title}
                      </div>
                      
                      <div className="text-xs text-center w-full mt-1">{job.subtitle}</div>
                      
                      {job.isCurrentPosition && (
                        <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 text-orange-500 flex flex-col items-center">
                          <span className="text-sm">I am here!</span>
                          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                          </svg>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SummarySection;
