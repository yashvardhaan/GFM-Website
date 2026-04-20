import React from 'react';
import { Hero, Problem, Solution, HowItWorks, SocialProof, ProofGallery } from '../components/LandingPage';
import { Offer, FAQ, FinalCTA } from '../components/LandingPage2';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

function ServiceAreas() {
  const states = ['Texas', 'California', 'Florida', 'Nevada', 'Arizona', 'Colorado'];
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto border-t border-white/5">
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar/10 text-solar text-xs font-bold uppercase tracking-wider mb-4">
          Nationwide Coverage
        </div>
        <h2 className="text-3xl font-bold mb-4">We Generate Leads in All 50 States.</h2>
        <p className="text-zinc-400 max-w-2xl mx-auto">Wherever your solar team is located in the US, we have you covered. Here is a look at a few of our most highly active markets.</p>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {states.map(state => (
          <Link 
            key={state}
            to={`/locations/${state.toLowerCase()}`}
            className="p-6 glass-panel text-center hover:bg-white/5 hover:border-solar/30 hover:text-solar transition-all rounded-xl font-medium"
          >
            {state}
          </Link>
        ))}
      </div>
    </section>
  );
}

export function Home() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Grow Further Marketing",
    "alternateName": "GFM",
    "url": "https://growfurthermarketing.com/",
    "logo": "https://growfurthermarketing.com/favicon.svg",
    "description": "Stop buying shared solar leads. We provide exclusive, pre-qualified solar appointments booked directly into your calendar.",
    "contactPoint": {
      "@type": "ContactPoint",
      "contactType": "customer service"
    }
  };

  return (
    <>
      <Helmet>
        <title>GFM - Exclusive Solar Appointments Booked Directly on Your Calendar</title>
        <link rel="canonical" href="https://growfurthermarketing.com/" />
        <script type="application/ld+json">
          {JSON.stringify(organizationSchema)}
        </script>
      </Helmet>
      <main>
        <Hero />
        <Problem />
        <Solution />
        <HowItWorks />
        <ProofGallery />
        <SocialProof />
        <Offer />
        <FAQ />
        <ServiceAreas />
        <FinalCTA />
      </main>
    </>
  );
}
