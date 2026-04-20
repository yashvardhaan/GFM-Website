import React from 'react';
import { Hero, Problem, Solution, HowItWorks, SocialProof, ProofGallery } from '../components/LandingPage';
import { Offer, FAQ, FinalCTA } from '../components/LandingPage2';
import { DeliverablesPanel } from '../components/DeliverablesPanel';

export function Home() {
  return (
    <>
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ProofGallery />
        <SocialProof />
        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
      <DeliverablesPanel />
    </>
  );
}
