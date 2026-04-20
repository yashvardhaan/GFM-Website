import React, { useState } from 'react';
import { motion } from 'motion/react';
import { CheckCircle2, ShieldCheck, HelpCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const FadeInOut = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: string | number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.6, delay }}
    className={className}
  >
    {children}
  </motion.div>
);



export function Offer() {
  return (
    <section className="py-24 px-6 max-w-5xl mx-auto">
      <FadeInOut className="glass-panel p-8 md:p-12 rounded-[2rem] border-solar/20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-solar/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3" />
        
        <div className="relative z-10 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">What You Get When You Partner With Us</h2>
            <p className="text-zinc-400 mb-8">Everything you need to dominate your territory without lifting a finger to dial.</p>
            
            <ul className="space-y-4">
              {[
                "Dedicated US-Based SDR calling your territory",
                "Custom Outbound Campaigns built for you",
                "Automated 5-touchpoint reminder sequences",
                "Full transparency with exact Call Recordings",
                "A packed calendar of verified Solar Buyers"
              ].map((text, i) => (
                <li key={i} className="flex gap-3">
                  <CheckCircle2 className="w-6 h-6 text-solar flex-shrink-0" />
                  <span className="text-zinc-200">{text}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="bg-black p-8 rounded-2xl border border-white/10 text-center shadow-2xl relative">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-solar text-white text-xs font-bold px-4 py-1 rounded-full uppercase tracking-widest">
              Limited Availability
            </div>
            <h3 className="text-2xl font-bold mb-2">Solar Growth Partnership</h3>
            <p className="text-zinc-400 text-sm mb-8">We only partner with 2 solar companies per region to ensure exclusive lead flow.</p>
            
            <a 
              href="https://calendly.com/growfurtherconsulting/strategy-calls-with-solar-pros"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full inline-flex justify-center items-center px-6 py-4 bg-white text-black hover:bg-zinc-200 font-semibold rounded-xl transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
            >
              Check Territory Availability
            </a>
            <p className="mt-4 text-xs text-zinc-500">No long term retainers required.</p>
          </div>
        </div>
      </FadeInOut>
    </section>
  );
}

export function FAQ() {
  const faqs = [
    { question: "Do you run Facebook or Google Ads?", answer: "No. We utilize targeted outbound systems and calling. This ensures we reach homeowners who aren't actively shopping around and submitting forms to 10 other solar companies." },
    { question: "Are these leads exclusive?", answer: "Yes. 100% exclusive. An appointment booked on your calendar is never shared, sold, or distributed to any other solar rep." },
    { question: "What if the homeowner doesn't show up?", answer: "We have an extensive email and SMS reminder sequence to ensure high show-up rates. However, if a no-show does happen, we automatically run a sequences to reschedule them. You only pay for appointments that occur." },
    { question: "How do you verify they qualify for solar?", answer: "We use public property records to identify homeownership and roof suitability. On the call, our SDRs confirm they own the home, their electric bill is above the threshold, and they haven't recently gone solar." },
    { question: "How many deals can I expect from your appointments?", answer: "On average, our clients close 3-4 deals for every 10 qualified sits. Results may vary based on your closing ability, but we focus on delivering high-intent prospects." },
    { question: "What makes you different from other lead gen companies?", answer: "We don’t just send leads — we book confirmed, qualified appointments directly on your calendar. No chasing, no guessing, just ready-to-close homeowners." },
    { question: "Can I choose my target areas and criteria?", answer: "Yes. We tailor campaigns based on your preferred locations, homeowner profile, and deal size so you get the right opportunities." },
    { question: "How quickly can we get started?", answer: "We can launch within 3-4 business days. Once we align on targeting and availability, we start booking appointments directly into your calendar." }
  ];

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section id="faq" className="py-24 px-6 max-w-3xl mx-auto">
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(faqSchema)}
        </script>
      </Helmet>
      
      <FadeInOut className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Frequently Asked Questions</h2>
      </FadeInOut>
      
      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <details key={i} className="group glass-panel rounded-xl border-white/5 overflow-hidden [&_summary::-webkit-details-marker]:hidden">
            <summary className="cursor-pointer p-6 font-semibold flex justify-between items-center text-lg">
              {faq.question}
              <span className="transition group-open:rotate-180 text-solar">
                ▼
              </span>
            </summary>
            <div className="p-6 pt-0 text-zinc-400">
              {faq.answer}
            </div>
          </details>
        ))}
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <section className="py-32 px-6 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-solar/5" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-1/2 bg-solar/20 blur-[150px] pointer-events-none" />
      
      <FadeInOut className="relative z-10 max-w-3xl mx-auto">
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-8">Ready to Stop Prospecting and Start Closing?</h2>
        <p className="text-xl text-zinc-400 mb-10">
          Apply now to see if your territory is available. Stop competing over shared leads and let us fill your calendar.
        </p>
        <a 
          href="https://calendly.com/growfurtherconsulting/strategy-calls-with-solar-pros"
          target="_blank"
          rel="noopener noreferrer"
          className="px-10 py-5 bg-solar hover:bg-solar-hover text-white text-lg font-bold rounded-full transition-all inline-flex items-center justify-center gap-2 mx-auto active:scale-95 shadow-[0_0_40px_rgba(255,85,0,0.4)]"
        >
          Yes, I Want Exclusive Appointments
        </a>
      </FadeInOut>
    </section>
  );
}
