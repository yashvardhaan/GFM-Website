import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  ArrowRight, CheckCircle2, Zap, Target, Calendar, PhoneCall, 
  TrendingUp, ShieldCheck, Mail, Sun, X, ChevronDown, ChevronRight, ChevronLeft, Play
} from 'lucide-react';

const FadeIn = ({ children, delay = 0, className = "" }: { children: React.ReactNode, delay?: number, className?: string, key?: string | number }) => (
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


export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden max-w-7xl mx-auto">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-solar/10 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-panel mb-8 border-solar/20 text-solar text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-solar animate-pulse" />
          Stop Chasing Dead Leads
        </motion.div>

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-[1.1] text-gradient"
        >
          Get Pre-Qualified Solar Appointments Booked <span className="text-white">Directly</span> on Your Calendar.
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl"
        >
          We do the prospecting, qualification, and scheduling. You just show up and close high-ticket solar deals. No retainers, just verified homeowners ready to talk.
        </motion.p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
        >
          <a 
            href="https://calendly.com/growfurtherconsulting/strategy-calls-with-solar-pros"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-solar hover:bg-solar-hover text-white font-semibold rounded-full transition-all flex items-center justify-center gap-2 active:scale-95 shadow-[0_0_40px_rgba(255,85,0,0.3)]"
          >
            Claim Your Free Strategy Session
            <ArrowRight className="w-5 h-5" />
          </a>
          <a 
            href="https://calendly.com/growfurtherconsulting/strategy-calls-with-solar-pros"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 glass-panel hover:bg-white/5 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2"
          >
            See How It Works
          </a>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-12 flex items-center gap-4 text-sm text-zinc-500"
        >
          <div className="flex -space-x-2">
            {[1,2,3,4].map((i) => (
              <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" className="w-8 h-8 rounded-full border-2 border-black" />
            ))}
          </div>
          <p>Trusted by <span className="text-white font-medium">300+ Solar Reps</span> Nationwide</p>
        </motion.div>
      </div>
    </section>
  );
}

export function Problem() {
  return (
    <section className="py-24 px-6 bg-surface/50 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Tired of Buying Shared Leads That Go Nowhere?</h2>
          <p className="text-zinc-400 text-lg">The traditional agency model is broken. You're wasting time and burning cash on leads that don't convert.</p>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              icon: PhoneCall,
              title: "Calling The Same Lists",
              desc: "Dialing homeowners who have already been called by 5 other solar reps this week."
            },
            {
              icon: Zap,
              title: "High Retainers, Zero ROI",
              desc: "Paying fixed monthly fees to agencies that just run generic Facebook ads with no guarantees."
            },
            {
              icon: Target,
              title: "Prospecting Over Closing",
              desc: "Spending 80% of your valuable time chasing unqualified leads instead of actually selling solar."
            }
          ].map((item, i) => (
            <FadeIn key={i} delay={i * 0.1} className="glass-panel p-8 rounded-2xl relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="w-12 h-12 bg-red-500/10 rounded-xl flex items-center justify-center mb-6 text-red-500">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Solution() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <FadeIn className="flex-1 w-full relative">
          <div className="absolute inset-0 bg-solar/20 blur-[100px] rounded-full" />
          <div className="glass-panel border-white/10 p-2 rounded-2xl relative z-10 w-full transform -rotate-2">
            <div className="bg-[#0A0A0A] rounded-xl overflow-hidden p-6 border border-white/5">
              <div className="flex items-center gap-4 mb-6 pb-6 border-b border-white/5">
                <div className="w-12 h-12 bg-solar/10 rounded-full flex items-center justify-center text-solar">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-semibold">New Meeting Booked</h4>
                  <p className="text-sm text-zinc-400">With verified homeowner</p>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                  <span className="text-zinc-400 text-sm">Electric Bill</span>
                  <span className="font-semibold text-green-400">$250+/month</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                  <span className="text-zinc-400 text-sm">Homeowner</span>
                  <span className="font-semibold flex items-center gap-1"><CheckCircle2 className="w-4 h-4 text-solar" /> Verified</span>
                </div>
                <div className="flex justify-between items-center bg-white/5 p-4 rounded-lg">
                  <span className="text-zinc-400 text-sm">Credit Score</span>
                  <span className="font-semibold text-green-400">650+</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <div className="flex-1">
          <FadeIn>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-solar/10 text-solar text-xs font-bold uppercase tracking-wider mb-6">
              The Paradigm Shift
            </div>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">The Only Growth Partner That Actually Books Meetings.</h2>
            <p className="text-zinc-400 text-lg mb-8 leading-relaxed">
              We don't just sell you lists. We deploy targeted outbound systems to find homeowners with high electric bills, qualify them over the phone, and book them directly into your calendar.
            </p>
            
            <ul className="space-y-4">
              {[
                "100% Exclusive—never shared with other reps.",
                "Pre-qualified on phone before booking.",
                "We handle the follow-up so they show up."
              ].map((text, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-solar/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-solar" />
                  </div>
                  <span className="text-zinc-200">{text}</span>
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

export function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "We Target & Filter",
      desc: "Using proprietary data, we target homeowners in your specific territory who have high utility bills and the right roof types."
    },
    {
      step: "02",
      title: "We Qualify & Book",
      desc: "Our US-based SDR team calls, qualifies, and books the homeowner directly on your Calendly. We verify intent and credit capability."
    },
    {
      step: "03",
      title: "You Close Deals",
      desc: "You get a notification with call recordings and homeowner details. You just show up, present, and close."
    }
  ];

  return (
    <section id="how-it-works" className="py-24 px-6 max-w-7xl mx-auto">
      <FadeIn className="text-center max-w-3xl mx-auto mb-16">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Calendar Fills Up in 3 Simple Steps.</h2>
        <p className="text-zinc-400 text-lg">Stop worrying about where your next deal is coming from. Focus entirely on closing.</p>
      </FadeIn>

      <div className="grid md:grid-cols-3 gap-8">
        {steps.map((item, i) => (
          <FadeIn key={i} delay={i * 0.15} className="relative">
            <div className="relative z-10 glass-panel p-8 rounded-2xl h-full flex flex-col items-start border-white/5 hover:border-solar/30 transition-colors">
              <span className="text-5xl font-display font-bold text-white/5 mb-6">{item.step}</span>
              <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
              <p className="text-zinc-400 leading-relaxed">{item.desc}</p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}

function VideoCard({ youtubeId, delay, isHorizontal = false }: { youtubeId: string, delay: number, isHorizontal?: boolean }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [imgSrc, setImgSrc] = useState(`https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg`);

  return (
    <FadeIn delay={delay}>
      <div 
        className="glass-panel overflow-hidden rounded-2xl aspect-[9/16] max-h-[600px] mx-auto relative group bg-black shadow-xl cursor-pointer"
        onClick={() => !isPlaying && setIsPlaying(true)}
      >
        {!isPlaying ? (
          <div className="absolute inset-0 flex items-center justify-center group overflow-hidden bg-black">
            <img 
              src={imgSrc} 
              alt="Testimonial thumbnail"
              className={`w-full h-full transition-transform duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100 ${isHorizontal ? 'object-contain scale-100' : 'object-cover'}`}
              onError={(e) => {
                e.currentTarget.src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
              }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors duration-500" />
            <div className="absolute z-10 w-16 h-16 rounded-full bg-solar text-black flex items-center justify-center shadow-[0_0_30px_rgba(255,204,51,0.4)] transform group-hover:scale-110 transition-transform duration-300">
              <Play className="w-8 h-8 ml-1" fill="currentColor" />
            </div>
          </div>
        ) : (
          <div className="absolute inset-0 bg-black overflow-hidden">
            <iframe 
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&controls=0&rel=0&modestbranding=1&playsinline=1`}
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              title="Testimonial Video"
            />
          </div>
        )}
      </div>
    </FadeIn>
  );
}

export function ProofGallery() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startXRef = useRef(0);
  const scrollLeftPosRef = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    const scroll = () => {
      if (!isHoveredRef.current && !isDraggingRef.current) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    if (scrollContainerRef.current) {
      startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeftPosRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    isHoveredRef.current = false;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeftPosRef.current - walk;
  };

  const pauseAutoScroll = () => {
    isDraggingRef.current = true;
    if (manualScrollTimeoutRef.current) clearTimeout(manualScrollTimeoutRef.current);
    manualScrollTimeoutRef.current = setTimeout(() => {
      isDraggingRef.current = false;
    }, 800);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      pauseAutoScroll();
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      pauseAutoScroll();
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="results" className="py-24 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">What Solar Reps Say About Working With Us</h2>
          <p className="text-zinc-400 text-lg">Don't take our word for it. Hear directly from our partners.</p>
        </FadeIn>
        
        {/* Custom Video Grid Overlay */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-24">
          <VideoCard youtubeId="0I_fnM9zILo" delay={0.1} isHorizontal={true} />
          <VideoCard youtubeId="A6rVdirNqDg" delay={0.2} isHorizontal={true} />
          <VideoCard youtubeId="5hYKwaUrBe0" delay={0.3} />
          <VideoCard youtubeId="BXrPHg9FIXA" delay={0.4} />
        </div>

        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Appointments That Convert</h2>
          <p className="text-zinc-400 text-lg">Real calendars filled with qualified homeowners.</p>
        </FadeIn>

        {/* Screenshots Carousel */}
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/60 hover:bg-black/90 backdrop-blur-md transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          
          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => isHoveredRef.current = true}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => isHoveredRef.current = true}
            onTouchEnd={() => isHoveredRef.current = false}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto hide-scrollbar pb-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              "https://drive.google.com/file/d/1zSb3rb1gM1JeXvHqwIk8oJ4IazywFQN7/preview",
              "https://drive.google.com/file/d/1nTAb-guQbRL-z9TY_WgF2dZfIVQpRmnc/preview",
              "https://drive.google.com/file/d/1vbiCxpdobNp_7gqZFqfa3LIYhfMokqII/preview",
              "https://drive.google.com/file/d/1i3TG0rw-hdjk9KYY9UuaKS_VuaGZc67p/preview",
              "https://drive.google.com/file/d/1zSb3rb1gM1JeXvHqwIk8oJ4IazywFQN7/preview",
              "https://drive.google.com/file/d/1nTAb-guQbRL-z9TY_WgF2dZfIVQpRmnc/preview",
              "https://drive.google.com/file/d/1vbiCxpdobNp_7gqZFqfa3LIYhfMokqII/preview",
              "https://drive.google.com/file/d/1i3TG0rw-hdjk9KYY9UuaKS_VuaGZc67p/preview"
            ].map((src, i) => (
              <FadeIn key={i} delay={0} className="w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 mr-6">
                <div className="glass-panel overflow-hidden rounded-2xl h-[500px] flex items-center justify-center bg-white/5 border-white/10 hover:border-solar/30 transition-all group relative">
                  <iframe 
                    src={src}
                    className="w-full h-full border-0 absolute inset-0"
                    allow="autoplay; encrypted-media"
                    allowFullScreen
                    loading="lazy"
                    title={`Proof screenshot ${i + 1}`}
                  />
                  {/* Invisible shield to capture drag events instead of iframe swallowing them */}
                  <div className="absolute inset-0 z-10 bg-transparent w-full h-full"></div>
                </div>
              </FadeIn>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 rounded-full border border-solar/30 flex items-center justify-center bg-solar/10 hover:bg-solar/30 backdrop-blur-md text-solar transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}

export function SocialProof() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const isHoveredRef = useRef(false);
  const isDraggingRef = useRef(false);
  const manualScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const startXRef = useRef(0);
  const scrollLeftPosRef = useRef(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationId: number;
    const scroll = () => {
      if (!isHoveredRef.current && !isDraggingRef.current) {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft -= container.scrollWidth / 2;
        }
      }
      animationId = requestAnimationFrame(scroll);
    };
    animationId = requestAnimationFrame(scroll);

    return () => cancelAnimationFrame(animationId);
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    if (scrollContainerRef.current) {
      startXRef.current = e.pageX - scrollContainerRef.current.offsetLeft;
      scrollLeftPosRef.current = scrollContainerRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    isDraggingRef.current = false;
    isHoveredRef.current = false;
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 2;
    scrollContainerRef.current.scrollLeft = scrollLeftPosRef.current - walk;
  };

  const pauseAutoScroll = () => {
    isDraggingRef.current = true;
    if (manualScrollTimeoutRef.current) clearTimeout(manualScrollTimeoutRef.current);
    manualScrollTimeoutRef.current = setTimeout(() => {
      isDraggingRef.current = false;
    }, 800);
  };

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      pauseAutoScroll();
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      pauseAutoScroll();
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 px-6 bg-surface/80 border-y border-white/5 relative">
      <div className="max-w-7xl mx-auto">
        <FadeIn className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Real Results. Real Revenue.</h2>
        </FadeIn>
        
        <div className="relative">
          <button 
            onClick={scrollLeft}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-6 z-10 w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/60 hover:bg-black/90 backdrop-blur-md transition-colors"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>

          <div 
            ref={scrollContainerRef}
            onMouseEnter={() => isHoveredRef.current = true}
            onMouseLeave={handleMouseLeave}
            onTouchStart={() => isHoveredRef.current = true}
            onTouchEnd={() => isHoveredRef.current = false}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
            className="flex overflow-x-auto hide-scrollbar pb-4 cursor-grab active:cursor-grabbing"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {[
              { quote: "GFM completely changed my pipeline. I went from chasing leads daily to having 4–5 qualified appointments booked straight into my calendar. Closed 3 deals in my first 10 sits. These guys know exactly what they’re doing.", author: "Mike J.", role: "Powur", photoId: "1kPEy4y12gtDfiTSTU38iynH0ClqhytRA" },
              { quote: "Honestly, I was skeptical at first. Tried other lead gen companies before and got burned. But these guys actually delivers what they promise, real homeowners, real intent. Already ROI positive in week 2.", author: "Derek H.", role: "Reach", photoId: "1XjANW9xF9raIUNJdWExMNM686oDkU3wE" },
              { quote: "Show-up rate has been solid. That was always my biggest issue before. Now when I book time, people actually show up ready to talk.", author: "Ivan", role: "Horizon Energy", photoId: "1ZxhVe6nmWkATPNYX8exhWVJZ5SGwYo-j" },
              { quote: "I wasn’t expecting much at first. But the appointments started coming in within a few days, and they were actually qualified. Closed 2 deals in my first week working with them.", author: "Daniel B.", role: "Sunrun", photoId: "1vKhqX0qNvUfIdw5nYPkwgLeZdjL0WCoc" },
              { quote: "Leads are pre-qualified better than most vendors we’ve used. Credit, bill size, and homeownership checks are actually being done. Still, you need a good closer—this isn’t magic leads, it’s a real pipeline.", author: "Mark S.", role: "Solar Professional", photoId: "1I8_u560hQjzffKjNp0FOeZs-ca-M0e-K" },
              { quote: "If you’re expecting 10/10 perfect homeowners ready to sign, that’s not how solar works. But if you know how to close, these guys give you enough at-bats to win consistently.", author: "Anthony W.", role: "Solar Professional", photoId: "13UlVgIPiO_zNiec4qCvkr42-FwfQGAFh" },
              { quote: "We tested them alongside another lead vendor. Their cost per acquisition ended up lower for us because of the show-up rate and replacements. That made the difference.", author: "Brian K.", role: "Solar Professional", photoId: "1gIGjnHS3AGBqkccK5vLstTUuNQ575Pp-" },
              { quote: "Appointments are legit. People actually know why we’re coming. That alone saves us a lot of time compared to cold knocking.", author: "Ethan B.", role: "Solar Professional", photoId: null },
              { quote: "Communication is solid. If something’s off with a lead, they actually fix it instead of arguing. That’s rare in this space.", author: "Kevin A.", role: "Solar Professional", photoId: null },
              { quote: "GFM completely changed my pipeline. I went from chasing leads daily to having 4–5 qualified appointments booked straight into my calendar. Closed 3 deals in my first 10 sits. These guys know exactly what they’re doing.", author: "Mike J.", role: "Powur", photoId: "1kPEy4y12gtDfiTSTU38iynH0ClqhytRA" },
              { quote: "Honestly, I was skeptical at first. Tried other lead gen companies before and got burned. But these guys actually delivers what they promise, real homeowners, real intent. Already ROI positive in week 2.", author: "Derek H.", role: "Reach", photoId: "1XjANW9xF9raIUNJdWExMNM686oDkU3wE" },
              { quote: "Show-up rate has been solid. That was always my biggest issue before. Now when I book time, people actually show up ready to talk.", author: "Ivan", role: "Horizon Energy", photoId: "1ZxhVe6nmWkATPNYX8exhWVJZ5SGwYo-j" },
              { quote: "I wasn’t expecting much at first. But the appointments started coming in within a few days, and they were actually qualified. Closed 2 deals in my first week working with them.", author: "Daniel B.", role: "Sunrun", photoId: "1vKhqX0qNvUfIdw5nYPkwgLeZdjL0WCoc" },
              { quote: "Leads are pre-qualified better than most vendors we’ve used. Credit, bill size, and homeownership checks are actually being done. Still, you need a good closer—this isn’t magic leads, it’s a real pipeline.", author: "Mark S.", role: "Solar Professional", photoId: "1I8_u560hQjzffKjNp0FOeZs-ca-M0e-K" },
              { quote: "If you’re expecting 10/10 perfect homeowners ready to sign, that’s not how solar works. But if you know how to close, these guys give you enough at-bats to win consistently.", author: "Anthony W.", role: "Solar Professional", photoId: "13UlVgIPiO_zNiec4qCvkr42-FwfQGAFh" },
              { quote: "We tested them alongside another lead vendor. Their cost per acquisition ended up lower for us because of the show-up rate and replacements. That made the difference.", author: "Brian K.", role: "Solar Professional", photoId: "1gIGjnHS3AGBqkccK5vLstTUuNQ575Pp-" },
              { quote: "Appointments are legit. People actually know why we’re coming. That alone saves us a lot of time compared to cold knocking.", author: "Ethan B.", role: "Solar Professional", photoId: null },
              { quote: "Communication is solid. If something’s off with a lead, they actually fix it instead of arguing. That’s rare in this space.", author: "Kevin A.", role: "Solar Professional", photoId: null }
            ].map((testimonial, i) => (
              <FadeIn key={i} delay={0} className="w-[85vw] md:w-[calc(50%-12px)] lg:w-[calc(33.333%-16px)] shrink-0 mr-6 glass-panel p-8 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex gap-1 text-solar mb-6">
                    {[1,2,3,4,5].map(star => <Sun key={star} className="w-5 h-5 fill-solar" />)}
                  </div>
                  <p className="text-lg italic text-zinc-300 mb-8 flex-grow">"{testimonial.quote}"</p>
                </div>
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 bg-white/10 rounded-full overflow-hidden shrink-0 flex items-center justify-center border border-white/10 relative">
                     {testimonial.photoId ? (
                       <img 
                         src={`https://drive.google.com/thumbnail?id=${testimonial.photoId}&sz=w150-h150`} 
                         alt={testimonial.author} 
                         className="w-full h-full object-cover" 
                         referrerPolicy="no-referrer"
                         loading="lazy" 
                       />
                     ) : (
                       <span className="text-xl font-semibold text-solar">{testimonial.author.charAt(0)}</span>
                     )}
                  </div>
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-sm text-zinc-500">{testimonial.role}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>

          <button 
            onClick={scrollRight}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-6 z-10 w-10 h-10 rounded-full border border-solar/30 flex items-center justify-center bg-solar/10 hover:bg-solar/30 backdrop-blur-md text-solar transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
