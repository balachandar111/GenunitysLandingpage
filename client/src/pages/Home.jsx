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
  const location = useLocation();
  // Passing location.key guarantees useReveal re-evaluates on any navigation to/from Home
  useReveal(location.key);

  // Safe scroll to section when arriving with a hash (e.g. from legal pages)
  useEffect(() => {
    if (!location.hash || location.hash.length <= 1) return;
    const id = location.hash.replace('#', '');
    const el = document.getElementById(id);
    if (el) {
      const t = setTimeout(() => {
        el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [location.hash, location.key]);

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
