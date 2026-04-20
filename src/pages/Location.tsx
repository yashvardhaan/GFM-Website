import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Offer, FAQ, FinalCTA } from '../components/LandingPage2';
import { motion } from 'motion/react';

const formatStateName = (slug: string) => {
  return slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
};

export function Location() {
  const { state } = useParams<{ state: string }>();
  const stateName = state ? formatStateName(state) : 'Your Area';

  return (
    <>
      <Helmet>
        <title>Exclusive Solar Leads & Appointments in {stateName} | GFM</title>
        <meta name="description" content={`Stop buying shared solar leads in ${stateName}. We provide exclusive, pre-qualified solar appointments booked directly into your calendar for solar companies in ${stateName}.`} />
      </Helmet>

      <main className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden max-w-7xl mx-auto">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-solar/10 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto mb-20">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-solar/20 text-solar text-sm font-medium"
          >
            <span className="w-2 h-2 rounded-full bg-solar animate-pulse" />
            Top Rated in {stateName}
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1]"
          >
            Exclusive Solar Appointments in <span className="text-solar">{stateName}</span>.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg md:text-xl text-zinc-400 max-w-3xl mb-10 leading-relaxed"
          >
            Are you a solar rep or company operating in {stateName}? Stop fighting over shared internet leads. We build custom outbound campaigns to book high-intent homeowners directly on your calendar.
          </motion.p>
          
          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a 
              href="https://calendly.com/growfurtherconsulting/strategy-calls-with-solar-pros"
              target="_blank"
              rel="noopener noreferrer"
              className="px-10 py-5 bg-solar hover:bg-solar-hover text-white text-lg font-bold rounded-full transition-all inline-flex items-center justify-center shadow-[0_0_40px_rgba(255,85,0,0.3)] active:scale-95"
            >
              Check {stateName} Availability
            </a>
          </motion.div>
        </div>

        <Offer />
        <FAQ />
        <FinalCTA />
      </main>
    </>
  );
}
