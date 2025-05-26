import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const HowIWorkSection: React.FC = () => {
  return (
    <section id="how-i-work" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-bold mb-12 text-center text-secondary-900">HOW I WORK</h2>
        
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-md p-8">
          <p className="text-lg leading-relaxed">
            {personalInfo.howIWorkText}
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowIWorkSection;
