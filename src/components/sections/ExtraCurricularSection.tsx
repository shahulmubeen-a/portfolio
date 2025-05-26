import React from 'react';
import { extraCurricular } from '../../data/portfolioData';

const ExtraCurricularSection: React.FC = () => {
  return (
    <section id="extracurricular" className="py-20 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 section-title text-secondary-900">Extra Curricular Activities</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {extraCurricular.map((activity, index) => (
            <div 
              key={activity.title} 
              className="extra-card bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {activity.image && (
                <div className="h-48 overflow-hidden">
                  {activity.isVideo ? (
                    <video 
                      className="w-full h-full object-cover"
                      autoPlay 
                      loop 
                      muted 
                      playsInline
                    >
                      <source src={activity.image} type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    <img 
                      src={activity.image} 
                      alt={activity.title} 
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  )}
                </div>
              )}
              <div className="p-6">
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary-900">{activity.title}</h3>
                {activity.period && (
                  <p className="text-primary-600 font-medium mb-3">{activity.period}</p>
                )}
                <p className="text-secondary-700">{activity.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExtraCurricularSection;
