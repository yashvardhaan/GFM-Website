/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { Home } from './pages/Home';
import { Location } from './pages/Location';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { NotFound } from './pages/NotFound';
import { LogoHorizontal } from './components/Logo';
import { X } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/80 backdrop-blur-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between overflow-visible">
        <div 
          onClick={() => { navigate('/'); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex items-center cursor-pointer hover:opacity-90 transition-opacity shrink-0"
        >
          <LogoHorizontal className="h-10 sm:h-11 md:h-14 w-auto text-white drop-shadow-md z-50 pointer-events-none" />
        </div>
        
        <div className="flex items-center gap-8 shrink-0">
          <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-zinc-400">
            <Link to="/#how-it-works" className="hover:text-white transition-colors">How it Works</Link>
            <Link to="/#results" className="hover:text-white transition-colors">Results</Link>
            <Link to="/blog" className="hover:text-white transition-colors">Blog</Link>
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
    <h3 className="text-lg font-semibold text-white mt-6">1. Information We Collect</h3>
    <p>We collect information you provide directly to us, such as when you request a consultation, sign up for our services, or communicate with us. This may include your name, email address, phone number, and business details.</p>
    <h3 className="text-lg font-semibold text-white mt-6">2. How We Use Your Information</h3>
    <p>We use the information we collect to deliver our solar appointment generation services, communicate with you about your pipeline, optimize our marketing campaigns, and improve our offerings.</p>
    <h3 className="text-lg font-semibold text-white mt-6">3. Information Sharing</h3>
    <p>We do not sell or rent your personal information to third parties. We may share information with trusted service providers who assist us in operating our business and providing our services to you.</p>
    <h3 className="text-lg font-semibold text-white mt-6">4. Data Security</h3>
    <p>We implement appropriate technical and organizational security measures to protect your information against unauthorized access, alteration, disclosure, or destruction.</p>
    <h3 className="text-lg font-semibold text-white mt-6">5. Contact Us</h3>
    <p>If you have any questions about this Privacy Policy, please contact us.</p>
  </div>
);

const TermsText = () => (
  <div className="space-y-4 text-zinc-300 text-sm leading-relaxed">
    <p>Welcome to GFM. These Terms & Conditions govern your use of our services. By working with us, you agree to the terms outlined below.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">1. Services</h3>
    <p>GFM provides appointment-setting services for solar professionals and companies. We generate, qualify, and schedule homeowner appointments directly into your calendar based on agreed criteria.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">2. Appointment Qualification</h3>
    <p>All appointments are pre-qualified based on criteria such as:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Homeownership</li>
      <li>Credit profile</li>
      <li>Utility bill thresholds</li>
      <li>Roof condition & eligibility</li>
    </ul>
    <p>We prioritize quality over quantity. If a lead does not meet criteria, it will not be booked.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">3. No-Show & Replacement Policy</h3>
    <p>We replace:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>No-show appointments</li>
      <li>Disqualified leads</li>
    </ul>
    <p>Replacements are provided at no additional cost, ensuring consistent pipeline performance.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">4. Results Disclaimer</h3>
    <p>While we aim to deliver high-quality appointments, we do not guarantee:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Sales closures</li>
      <li>Revenue outcomes</li>
    </ul>
    <p>Closing performance depends on your sales process, offer, and follow-up.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">5. Client Responsibilities</h3>
    <p>Clients are responsible for:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Attending scheduled appointments on time</li>
      <li>Following up with leads</li>
      <li>Providing accurate calendar availability</li>
    </ul>
    <p>Missed appointments by the client may not be eligible for replacement.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">6. Payment Terms</h3>
    <p>All services are billed based on agreed pricing models (per appointment / per sit). Payments must be made on time as per the agreed terms. Failure to do so may result in service suspension.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">7. Communication</h3>
    <p>We maintain clear and respectful communication with all prospects. Leads who do not qualify are handled professionally and declined respectfully.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">8. Data & Privacy</h3>
    <p>All lead data is handled with care and used strictly for appointment-setting purposes. We do not sell or misuse client or prospect information.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">9. Limitation of Liability</h3>
    <p>GFM is not liable for:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Missed sales opportunities</li>
      <li>Revenue loss</li>
      <li>External factors affecting deal closures</li>
    </ul>
    <p>Our responsibility is limited to delivering qualified appointments.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">10. Termination</h3>
    <p>We reserve the right to pause or terminate services if:</p>
    <ul className="list-disc pl-5 space-y-1">
      <li>Terms are violated</li>
      <li>Payments are delayed</li>
      <li>Misuse of leads is identified</li>
    </ul>
    
    <h3 className="text-lg font-semibold text-white mt-6">11. Updates</h3>
    <p>These terms may be updated at any time. Continued use of our services means acceptance of the latest version.</p>
    
    <h3 className="text-lg font-semibold text-white mt-6">12. Contact</h3>
    <p>For any questions, reach out to us directly.</p>
    
    <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
      <p className="font-semibold text-white mb-2">GFM — Premium appointment setting for serious solar professionals.</p>
      <p>We help solar reps get 4–5 qualified homeowner appointments daily.</p>
    </div>
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

  const popularStates = ['texas', 'california', 'florida', 'nevada', 'arizona', 'colorado'];

  return (
    <>
      <footer className="py-16 border-t border-white/10 text-zinc-500 text-sm bg-black/50">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <LogoHorizontal className="h-10 w-auto text-zinc-400 opacity-80 mb-6 drop-shadow-sm pointer-events-none" />
            <p className="text-zinc-400 mb-6 max-w-sm">
              We help solar reps get 4–5 qualified homeowner appointments daily. Stop prospecting and start closing.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Top Markets</h4>
            <ul className="space-y-2">
              {popularStates.map(state => (
                <li key={state}>
                  <Link to={`/locations/${state}`} className="hover:text-solar transition-colors capitalize">
                    Solar Leads in {state}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><Link to="/blog" className="hover:text-solar transition-colors">Solar Growth Blog</Link></li>
              <li><Link to="/#how-it-works" className="hover:text-solar transition-colors">How it Works</Link></li>
              <li><Link to="/#faq" className="hover:text-solar transition-colors">FAQ</Link></li>
              <li><a href="https://calendly.com/growfurtherconsulting/strategy-calls-with-solar-pros" className="hover:text-solar transition-colors">Book a Strategy Call</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Legal & Contact</h4>
            <ul className="space-y-2">
              <li><button onClick={() => setModalContent('Privacy Policy')} className="hover:text-solar transition-colors">Privacy Policy</button></li>
              <li><button onClick={() => setModalContent('Terms of Service')} className="hover:text-solar transition-colors">Terms of Service</button></li>
              <li><a href="mailto:contact@growfurthermarketing.com" className="hover:text-solar transition-colors">contact@growfurthermarketing.com</a></li>
            </ul>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            © {new Date().getFullYear()} GFM Appointments. All rights reserved.
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
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/locations/:state" element={<Location />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:slug" element={<BlogPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

