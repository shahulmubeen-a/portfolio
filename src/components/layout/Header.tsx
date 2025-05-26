import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-6 px-4 md:px-8">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* Removed the "Mubeen." text as requested */}
            <h1 className="text-3xl font-bold">{personalInfo.title}</h1>
          </div>
          
          <div className="flex space-x-4">
            <a 
              href={personalInfo.cvPath} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              View CV
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
