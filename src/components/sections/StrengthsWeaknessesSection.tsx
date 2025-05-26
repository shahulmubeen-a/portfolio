import React from 'react';
import { strengths, weaknesses } from '../../data/portfolioData';

const StrengthsWeaknessesSection: React.FC = () => {
  return (
    <section id="strengths-weaknesses" className="py-16 px-4 md:px-8 bg-gray-50">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Strengths */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-serif font-bold mb-6 text-secondary-900">Strengths:</h2>
            <ul className="space-y-3">
              {strengths.map((strength, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-lg">{strength.text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Weaknesses */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-3xl font-serif font-bold mb-6 text-secondary-900">Weaknesses:</h2>
            <ul className="space-y-3">
              {weaknesses.map((weakness, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-primary-600 mr-2">•</span>
                  <span className="text-lg">{weakness.text}</span>
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
