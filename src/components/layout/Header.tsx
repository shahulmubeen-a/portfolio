import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const Header: React.FC = () => {
  return (
    <header className="relative text-white py-6 px-4 md:px-8 overflow-hidden">
      {/* Background media (image, GIF, or video) */}
      <div className="absolute inset-0 z-0">
        {personalInfo.isHeaderBackgroundVideo ? (
          <video 
            className="w-full h-full object-cover"
            autoPlay 
            loop 
            muted 
            playsInline
          >
            <source src={personalInfo.headerBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        ) : (
          <div 
            className="w-full h-full bg-gradient-to-r from-gray-900 to-gray-800"
            style={{
              backgroundImage: `url(${personalInfo.headerBackground})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          ></div>
        )}
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            {/* Changed from personalInfo.title to portfolioTitle as requested */}
            <h1 className="text-3xl font-bold">{personalInfo.portfolioTitle}</h1>
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
