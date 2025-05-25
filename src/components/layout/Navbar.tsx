import React from 'react';
import { personalInfo } from '../../data/portfolioData';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-secondary-900 shadow-lg py-3' : 'bg-transparent py-6'
    }`}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex justify-between items-center">
          <a href="#" className="text-white font-serif text-2xl font-bold">
            {personalInfo.name.split(' ')[0]}
            <span className="text-primary-400">.</span>
          </a>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <a href="#skills" className="text-white hover:text-primary-300 transition-colors duration-300">Skills</a>
            <a href="#experience" className="text-white hover:text-primary-300 transition-colors duration-300">Experience</a>
            <a href="#projects" className="text-white hover:text-primary-300 transition-colors duration-300">Projects</a>
            <a href="#drawings" className="text-white hover:text-primary-300 transition-colors duration-300">Drawings</a>
            <a href="#extracurricular" className="text-white hover:text-primary-300 transition-colors duration-300">Activities</a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary-300 transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileMenuOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="flex flex-col space-y-4 py-4">
            <a href="#skills" className="text-white hover:text-primary-300 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Skills</a>
            <a href="#experience" className="text-white hover:text-primary-300 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Experience</a>
            <a href="#projects" className="text-white hover:text-primary-300 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Projects</a>
            <a href="#drawings" className="text-white hover:text-primary-300 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Drawings</a>
            <a href="#extracurricular" className="text-white hover:text-primary-300 transition-colors duration-300" onClick={() => setMobileMenuOpen(false)}>Activities</a>
            <a 
              href={personalInfo.linkedin} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-primary-300 transition-colors duration-300"
              onClick={() => setMobileMenuOpen(false)}
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
