import React from 'react';
import { strengths, weaknesses } from '../../data/portfolioData';

const StrengthsWeaknessesSection: React.FC = () => {
  return (
    <section id="strengths-weaknesses" className="py-12 px-4 md:px-8 bg-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Strengths Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-secondary-900">Strengths:</h2>
            <ul className="list-disc pl-6 space-y-4">
              {strengths.map((strength, index) => (
                <li key={index} className="text-lg">
                  {strength.text}
                </li>
              ))}
            </ul>
          </div>
          
          {/* Weaknesses Column */}
          <div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold mb-8 text-secondary-900">Weaknesses:</h2>
            <ul className="list-disc pl-6 space-y-4">
              {weaknesses.map((weakness, index) => (
                <li key={index} className="text-lg">
                  {weakness.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StrengthsWeaknessesSection;
