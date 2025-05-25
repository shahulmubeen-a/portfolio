// React is imported for JSX transformation even if not explicitly used
import React from 'react';
import Navbar from './components/layout/Navbar';
import Header from './components/layout/Header';
import SkillsSection from './components/sections/SkillsSection';
import WorkExperienceSection from './components/sections/WorkExperienceSection';
import ProjectsSection from './components/sections/ProjectsSection';
import MechanicalDrawingsSection from './components/sections/MechanicalDrawingsSection';
import ExtraCurricularSection from './components/sections/ExtraCurricularSection';
import Footer from './components/layout/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SkillsSection />
      <WorkExperienceSection />
      <ProjectsSection />
      <MechanicalDrawingsSection />
      <ExtraCurricularSection />
      <Footer />
    </div>
  );
}

export default App;
