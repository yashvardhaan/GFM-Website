import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronRight, Copy, Terminal, LayoutTemplate, Palette } from 'lucide-react';

export function DeliverablesPanel() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('headlines');

  const tabs = [
    { id: 'headlines', label: 'Headlines', icon: Terminal },
    { id: 'ctas', label: 'CTA Variations', icon: ChevronRight },
    { id: 'design', label: 'Design System', icon: LayoutTemplate },
    { id: 'suggestions', label: 'Conversions', icon: Palette },
  ];

  const content = {
    headlines: (
      <div className="space-y-6 text-sm text-zinc-300">
        <div>
          <h4 className="text-white font-bold mb-2 text-base">Hero Section</h4>
          <p><span className="text-solar mr-2">H1:</span>Get Pre-Qualified Solar Appointments Booked Directly on Your Calendar.</p>
          <p><span className="text-solar mr-2">Sub:</span>We do the prospecting, qualification, and scheduling. You just show up and close high-ticket solar deals. No retainers, just verified homeowners ready to talk.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2 text-base">Problem Section</h4>
          <p><span className="text-solar mr-2">H2:</span>Tired of Buying Shared Leads That Go Nowhere?</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2 text-base">Solution Section</h4>
          <p><span className="text-solar mr-2">H2:</span>The Only Growth Partner That Actually Books Meetings.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2 text-base">Process Section</h4>
          <p><span className="text-solar mr-2">H2:</span>Your Calendar Fills Up in 3 Simple Steps.</p>
        </div>
      </div>
    ),
    ctas: (
      <div className="space-y-4 text-sm text-zinc-300">
        <p className="mb-4 text-zinc-400">Instead of generic "Contact Us" or "Submit", use these high-converting, action-oriented CTAs:</p>
        <div className="p-3 bg-white/5 rounded border border-white/10">1. Claim Your Free Strategy Session</div>
        <div className="p-3 bg-white/5 rounded border border-white/10">2. Check Territory Availability</div>
        <div className="p-3 bg-white/5 rounded border border-white/10">3. Yes, I Want Exclusive Appointments</div>
        <div className="p-3 bg-white/5 rounded border border-white/10">4. See If You Qualify</div>
        <div className="p-3 bg-white/5 rounded border border-white/10">5. Start Filling My Calendar</div>
      </div>
    ),
    design: (
      <div className="space-y-6 text-sm text-zinc-300">
        <div>
          <h4 className="text-white font-bold mb-2">Vibe & Aesthetics</h4>
          <p>SaaS Dark Luxury. Professional, trustworthy, and high-roi focused. It eliminates the "cheap marketing agency" feel and replaces it with a "premium SaaS partner" feel.</p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Typography Hierarchy</h4>
          <ul className="list-disc pl-4 space-y-1">
            <li><strong>Headings:</strong> Space Grotesk (Tech, sharp, readable)</li>
            <li><strong>Body:</strong> Inter (Clean, maximum legibility)</li>
            <li><strong>Weights:</strong> Bold (700) for H1/H2, Regular (400) for body.</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-2">Color Palette</h4>
          <div className="flex gap-4 mt-2">
            <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 rounded bg-black border border-white/20"/><code>black</code></div>
            <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 rounded bg-[#0A0A0A] border border-white/20"/><code>#0A0A0A</code></div>
            <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 rounded bg-[#FF5500]"/><code>#FF5500</code></div>
            <div className="flex flex-col items-center gap-1"><div className="w-8 h-8 rounded bg-[#FFFFFF] border border-white/20"/><code>#FFFFFF</code></div>
          </div>
        </div>
      </div>
    ),
    suggestions: (
      <div className="space-y-4 text-sm text-zinc-300">
        <p><strong>1. Eliminate Distractions:</strong> The original site had too much generic text. Keep it punchy. People scan, they don't read.</p>
        <p><strong>2. Introduce Scarcity:</strong> "We only partner with 2 solar companies per region" immediately increases perceived value and urgency.</p>
        <p><strong>3. Reverse Risk:</strong> Highlight "You only pay for appointments that occur" early on to reduce friction.</p>
        <p><strong>4. Better Social Proof:</strong> Add a floating widget showing recent bookings (e.g., "Just booked: 10kW system meeting in Texas").</p>
        <p><strong>5. Micro-interactions:</strong> The subtle glows and hover effects signal brand maturity and trustworthiness.</p>
      </div>
    )
  };

  return (
    <>
      {/* Floating Toggle Button */}
      <button 
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-white text-black px-4 py-3 rounded-full font-semibold shadow-2xl hover:scale-105 transition-transform flex items-center gap-2 border border-white/20"
      >
        <Terminal className="w-5 h-5" />
        View Deliverables
      </button>

      {/* Slide-out Panel */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            />
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 w-full md:w-[450px] h-full bg-[#0A0A0A] border-l border-white/10 z-[101] flex flex-col shadow-2xl"
            >
              <div className="p-6 border-b border-white/10 flex justify-between items-center bg-black">
                <div>
                  <h3 className="font-display font-bold text-lg">Project Deliverables</h3>
                  <p className="text-xs text-solar">Strategy & Copywriting Spec</p>
                </div>
                <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-white/10 rounded-full transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex p-4 gap-2 overflow-x-auto border-b border-white/5 no-scrollbar">
                {tabs.map(tab => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors ${activeTab === tab.id ? 'bg-solar text-white' : 'bg-white/5 text-zinc-400 hover:text-white'}`}
                  >
                    <tab.icon className="w-3 h-3" />
                    {tab.label}
                  </button>
                ))}
              </div>

              <div className="p-6 overflow-y-auto flex-1">
                {content[activeTab as keyof typeof content]}
              </div>
              
              <div className="p-6 border-t border-white/10 bg-black">
                <p className="text-xs text-zinc-500 text-center">
                  This landing page implements the requested $10k+ design, layout, and copywriting structure.
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
