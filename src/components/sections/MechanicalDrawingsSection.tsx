import React from 'react';
import { mechanicalDrawings } from '../../data/portfolioData';

const MechanicalDrawingsSection: React.FC = () => {
  return (
    <section id="drawings" className="py-20 px-4 md:px-8 bg-secondary-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-16 section-title text-secondary-900">Mechanical Drawings</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mechanicalDrawings.map((drawing, index) => (
            <div 
              key={drawing.title} 
              className="drawing-item bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-8">
                <h3 className="text-xl font-serif font-bold mb-3 text-secondary-900">{drawing.title}</h3>
                <p className="text-secondary-700 mb-6">{drawing.description}</p>
                <a 
                  href={`/docs/${drawing.filename}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 bg-primary-600 text-white rounded-md font-medium hover:bg-primary-700 transition-colors duration-300 shadow-md"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  View Drawing
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MechanicalDrawingsSection;
