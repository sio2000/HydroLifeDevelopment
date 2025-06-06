import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import Scientific from '../components/Scientific';
import About from '../components/About';
import Certifications from '../components/Certifications';
import WestMacedonia from '../components/WestMacedonia';
import Transportation from '../components/Transportation';
import EUStrategy from '../components/EUStrategy';
import HealthBenefits from '../components/HealthBenefits';
import HydrogenBenefits from '../components/HydrogenBenefits';
import Footer from '../components/Footer';
import AIChatbot from '../components/AIChatbot';

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="overflow-hidden">
      <Hero />
      <HydrogenBenefits />
      <HealthBenefits />
      <WestMacedonia />
      <Transportation />
      <Scientific />
      <EUStrategy />
      <About />
      <AIChatbot />
    </main>
  );
};

export default HomePage;