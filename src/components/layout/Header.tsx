import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const Header: React.FC = () => {
  return (
    <header className="bg-gradient-to-r from-secondary-900 to-secondary-800 text-white py-24 px-4 md:px-8 animate-fade-in">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-2/3 mb-12 md:mb-0 animate-fade-up">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-6 leading-tight">{personalInfo.name}</h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-secondary-200">{personalInfo.title}</h2>
          <p className="text-lg md:text-xl max-w-2xl mb-12 text-secondary-100">{personalInfo.bio}</p>
          <div className="flex flex-wrap gap-4">
            <a 
              href={personalInfo.cvPath} 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-white text-secondary-900 px-8 py-4 rounded-md font-medium hover:bg-secondary-100 transition-all duration-300 btn shadow-lg"
            >
              View My CV
            </a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="border border-white text-white px-8 py-4 rounded-md font-medium hover:bg-white hover:text-secondary-900 transition-all duration-300 btn shadow-lg"
            >
              LinkedIn Profile
            </a>
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <div className="w-56 h-56 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl transform transition-all duration-500 hover:scale-105">
            <img 
              src={personalInfo.profileImage} 
              alt={personalInfo.name} 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
