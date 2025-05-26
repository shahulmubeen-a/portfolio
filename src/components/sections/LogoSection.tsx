import React from 'react';
import { companyLogos } from '../../data/portfolioData';

const LogoSection: React.FC = () => {
  return (
    <section id="logos" className="py-12 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-secondary-900">EXPERIENCE</h2>
        
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 mb-8">
          {companyLogos.map((logo, index) => (
            <div key={index} className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center">
              <a href={logo.link || '#'} target="_blank" rel="noopener noreferrer">
                <img 
                  src={logo.image} 
                  alt={`${logo.name} logo`} 
                  className="max-w-full max-h-full object-contain hover:opacity-80 transition-opacity"
                />
              </a>
            </div>
          ))}
          
          <div className="text-xl text-gray-500 italic ml-4">
            (more to come)
          </div>
        </div>
      </div>
    </section>
  );
};

export default LogoSection;
