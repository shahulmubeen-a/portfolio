// React is imported for JSX transformation even if not explicitly used
import React from 'react';
import './App.css';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import SummarySection from './components/sections/SummarySection';
import StrengthsWeaknessesSection from './components/sections/StrengthsWeaknessesSection';
import LogoSection from './components/sections/LogoSection';
import WorkExperienceSection from './components/sections/WorkExperienceSection';
import SkillsSection from './components/sections/SkillsSection';
import ProjectsSection from './components/sections/ProjectsSection';
import MechanicalDrawingsSection from './components/sections/MechanicalDrawingsSection';
import ExtraCurricularSection from './components/sections/ExtraCurricularSection';

function App() {
  return (
    <div className="App font-sans">
      <Header />
      <main>
        <SummarySection />
        <StrengthsWeaknessesSection />
        <LogoSection />
        <WorkExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <MechanicalDrawingsSection />
        <ExtraCurricularSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
