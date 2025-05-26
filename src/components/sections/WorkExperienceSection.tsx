import React from 'react';
import { workExperience } from '../../data/portfolioData';

const WorkExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        
        <div className="space-y-4"> {/* Reduced from space-y-8 to space-y-4 */}
          {workExperience.map((job, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-md bg-white"
            >
              {/* Background image/video with low opacity */}
              {job.backgroundImage && (
                <div className="absolute inset-0 z-0 opacity-10">
                  {job.isVideo ? (
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src={job.backgroundImage} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <div 
                      style={{
                        backgroundImage: `url(${job.backgroundImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        width: '100%',
                        height: '100%'
                      }}
                    ></div>
                  )}
                </div>
              )}
              
              <div className="relative z-10 p-6 md:p-8">
                <div className="flex flex-col md:flex-row justify-between mb-3"> {/* Reduced from mb-4 to mb-3 */}
                  <div>
                    <h3 className="text-2xl font-bold text-primary-700">{job.title}</h3>
                    <p className="text-xl font-semibold text-secondary-700">{job.company}</p>
                  </div>
                  <div className="mt-2 md:mt-0 text-right">
                    <p className="text-lg text-gray-600">{job.period}</p>
                    <p className="text-gray-500">{job.location}</p>
                  </div>
                </div>
                
                <p className="text-lg mb-3">{job.description}</p> {/* Reduced from mb-4 to mb-3 */}
                
                {job.achievements && job.achievements.length > 0 && (
                  <div>
                    <h4 className="text-lg font-semibold mb-1">Key Achievements:</h4> {/* Reduced from mb-2 to mb-1 */}
                    <ul className="list-disc pl-5 space-y-1">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className="text-gray-700">{achievement}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperienceSection;
