import { motion } from 'motion/react';
import Hero from '../components/Hero';
import DeadlineModule from '../components/DeadlineModule';
import IndustryStrip from '../components/IndustryStrip';
import ProblemSolution from '../components/ProblemSolution';
import WhyNextGen from '../components/WhyNextGen';
import ComplianceJourney from '../components/ComplianceJourney';
import FeatureGrid from '../components/FeatureGrid';
import HowItWorks from '../components/HowItWorks';
import OperatingPhilosophy from '../components/OperatingPhilosophy';
import BeyondSoftware from '../components/BeyondSoftware';
import LeadCapture from '../components/LeadCapture';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <>
      <Hero />
      <DeadlineModule />
      <IndustryStrip />
      <ComplianceJourney />
      <WhyNextGen />
      <FeatureGrid />
      <HowItWorks />
      <OperatingPhilosophy />
      <BeyondSoftware />
      <LeadCapture />
      <FAQ />
      <FinalCTA />
    </>
  );
}
