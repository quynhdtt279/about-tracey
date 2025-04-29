import React from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import PersonalInsights from './components/PersonalInsights';
import PhotoGallery from './components/PhotoGallery';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import './index.css';

function App() {
  return (
    <div className="min-h-screen bg-pearl">
      <Header />
      <main>
        <HeroSection />
        <WorkExperience />
        <Education />
        <PersonalInsights />
        <PhotoGallery />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
