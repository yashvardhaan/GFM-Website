import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { LogoHorizontal } from '../components/Logo';

export function NotFound() {
  return (
    <>
      <Helmet>
        <title>Page Not Found | GFM</title>
        <meta name="robots" content="noindex, follow" />
      </Helmet>
      <main className="min-h-screen flex flex-col items-center justify-center p-6 text-center">
        <LogoHorizontal className="h-16 w-auto text-zinc-600 mb-8" />
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-white">404</h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-zinc-300">We couldn't find that page.</h2>
        <p className="text-zinc-500 mb-10 max-w-md mx-auto">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link to="/" className="px-8 py-4 bg-solar hover:bg-solar-hover text-white font-bold rounded-full transition-all">
            Return Home
          </Link>
          <Link to="/blog" className="px-8 py-4 glass-panel hover:bg-white/5 text-white font-bold rounded-full transition-all">
            Read Our Blog
          </Link>
        </div>
        
        <div className="mt-16">
          <p className="text-zinc-600 font-medium mb-4 uppercase tracking-widest text-sm">Top Markets</p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Link to="/locations/texas" className="text-zinc-400 hover:text-solar transition-colors">Texas</Link>
            <Link to="/locations/california" className="text-zinc-400 hover:text-solar transition-colors">California</Link>
            <Link to="/locations/florida" className="text-zinc-400 hover:text-solar transition-colors">Florida</Link>
          </div>
        </div>
      </main>
    </>
  );
}
