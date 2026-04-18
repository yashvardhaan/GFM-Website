/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Hero, Problem, Solution, HowItWorks, SocialProof, ProofGallery } from './components/LandingPage';
import { Offer, FAQ, FinalCTA } from './components/LandingPage2';
import { DeliverablesPanel } from './components/DeliverablesPanel';
import { LogoHorizontal } from './components/Logo';
import { X } from 'lucide-react';

function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between overflow-visible">
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center cursor-pointer hover:opacity-90 transition-opacity shrink-0"
        >
          <LogoHorizontal className="h-10 sm:h-11 md:h-14 w-auto text-white drop-shadow-md z-50 pointer-events-none" />
        </div>
        
        <div className="flex items-center gap-8 shrink-0 mr-0 sm:mr-4 md:mr-[13%]">
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <a href="#how-it-works" className="hover:text-white transition-colors">How it Works</a>
            <a href="#results" className="hover:text-white transition-colors">Results</a>
            <a href="#faq" className="hover:text-white transition-colors">FAQ</a>
          </div>
          
          <a 
            href="https://calendly.com/growfurtherconsulting/strategy-calls-with-solar-pros" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-4 py-2 sm:px-5 sm:py-2.5 bg-white text-black font-semibold rounded-full text-xs sm:text-sm hover:bg-zinc-200 transition-colors whitespace-nowrap"
          >
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
}

const PrivacyText = () => (
  <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
    <p>Last Updated: {new Date().toLocaleDateString()}</p>
    <h3 className="text-lg font-semibold text-white mt-6">1. Information We Collect</h3>
    <p>We collect information you provide directly to us, such as when you request a consultation, sign up for our services, or communicate with us. This may include your name, email address, phone number, and business details.</p>
    <h3 className="text-lg font-semibold text-white mt-6">2. How We Use Your Information</h3>
    <p>We use the information we collect to deliver our solar appointment generation services, communicate with you about your pipeline, optimize our marketing campaigns, and improve our offerings.</p>
    <h3 className="text-lg font-semibold text-white mt-6">3. Information Sharing</h3>
    <p>We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business and providing our services to you.</p>
    <h3 className="text-lg font-semibold text-white mt-6">4. Data Security</h3>
    <p>We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
    <h3 className="text-lg font-semibold text-white mt-6">5. Contact Us</h3>
    <p>If you have any questions about this Privacy Policy, please contact us at support@gfmappointments.com.</p>
  </div>
);

const TermsText = () => (
  <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
    <p>Last Updated: {new Date().toLocaleDateString()}</p>
    <h3 className="text-lg font-semibold text-white mt-6">1. Acceptance of Terms</h3>
    <p>By accessing or using the services provided by GFM Appointments, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access the service.</p>
    <h3 className="text-lg font-semibold text-white mt-6">2. Description of Service</h3>
    <p>GFM Appointments provides lead generation and appointment setting services specifically designed for solar professionals and sales organizations.</p>
    <h3 className="text-lg font-semibold text-white mt-6">3. Client Responsibilities</h3>
    <p>Clients are expected to attend scheduled appointments promptly, maintain professional conduct with prospects, and provide accurate feedback on lead quality and show rates to help optimize campaigns.</p>
    <h3 className="text-lg font-semibold text-white mt-6">4. Intellectual Property</h3>
    <p>The service and its original content, campaigns, features, and functionality are and will remain the exclusive property of GFM Appointments and its licensors.</p>
    <h3 className="text-lg font-semibold text-white mt-6">5. Limitation of Liability</h3>
    <p>In no event shall GFM Appointments be liable for any indirect, incidental, special, consequential or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses.</p>
  </div>
);

function LegalModal({ title, isOpen, onClose }: { title: string, isOpen: boolean, onClose: () => void }) {
  if (!isOpen) return null;

  const isPrivacy = title === 'Privacy Policy';

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm" onClick={onClose}>
      <div 
        className="w-full max-w-2xl max-h-[80vh] overflow-y-auto bg-surface border border-white/10 rounded-2xl p-6 md:p-10 shadow-2xl relative"
        onClick={e => e.stopPropagation()}
      >
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-zinc-500 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-white">{title}</h2>
        {isPrivacy ? <PrivacyText /> : <TermsText />}
        <div className="mt-10 pt-6 border-t border-white/10">
          <button 
            onClick={onClose}
            className="w-full py-3 bg-white/10 hover:bg-white/20 text-white rounded-xl font-medium transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  const [modalContent, setModalContent] = useState<string | null>(null);

  return (
    <>
      <footer className="py-12 border-t border-white/10 text-zinc-500 text-sm">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">
          <div className="w-full md:w-1/3 flex justify-center md:justify-start">
            <div className="flex items-center shrink-0">
              <LogoHorizontal className="h-10 sm:h-11 md:h-14 w-auto text-zinc-400 opacity-80 hover:opacity-100 hover:text-white transition-all drop-shadow-sm pointer-events-none" />
            </div>
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center text-center">
            © {new Date().getFullYear()} GFM Appointments. All rights reserved.
          </div>
          
          <div className="w-full md:w-1/3 flex justify-center md:justify-end gap-6">
            <button onClick={() => setModalContent('Privacy Policy')} className="hover:text-white transition">Privacy Policy</button>
            <button onClick={() => setModalContent('Terms of Service')} className="hover:text-white transition">Terms of Service</button>
          </div>
        </div>
      </footer>
      <LegalModal 
        title={modalContent || ''} 
        isOpen={!!modalContent} 
        onClose={() => setModalContent(null)} 
      />
    </>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white selection:bg-solar/30">
      <Navbar />
      
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

      <Footer />
      <DeliverablesPanel />
    </div>
  );
}

