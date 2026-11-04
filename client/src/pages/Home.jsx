import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero.jsx';
import Problem from '../components/Problem.jsx';
import Intro from '../components/Intro.jsx';
import HowItWorks from '../components/HowItWorks.jsx';
import Solutions from '../components/Solutions.jsx';
import Industries from '../components/Industries.jsx';
import FeatureGrid from '../components/FeatureGrid.jsx';
import UseCase from '../components/UseCase.jsx';
import Who from '../components/Who.jsx';
import Demo from '../components/Demo.jsx';
import FAQ from '../components/FAQ.jsx';
import LeadForm from '../components/LeadForm.jsx';
import FinalCTA from '../components/FinalCTA.jsx';
import useReveal from '../hooks/useReveal.js';
import { BENEFITS, WHY } from '../data/content.js';

export default function Home() {
  const { hash } = useLocation();
  useReveal();

  // Scroll to #section when arriving from another route (e.g. /privacy -> /#contact)
  useEffect(() => {
    if (!hash) return;
    const t = setTimeout(() => document.querySelector(hash)?.scrollIntoView({ behavior: 'smooth' }), 60);
    return () => clearTimeout(t);
  }, [hash]);

  return (
    <main>
      <Hero />
      <Problem />
      <Intro />
      <HowItWorks />
      <Solutions />
      <Industries />
      <FeatureGrid id="benefits" data={BENEFITS} alt />
      <UseCase />
      <FeatureGrid id="why" data={WHY} />
      <Who />
      <Demo />
      <FAQ />
      <LeadForm />
      <FinalCTA />
    </main>
  );
}
