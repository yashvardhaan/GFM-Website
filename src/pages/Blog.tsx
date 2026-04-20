import React from 'react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'motion/react';

export const BLOG_POSTS = [
  {
    slug: 'average-cost-per-solar-lead-2026',
    title: 'What is the Average Cost Per Solar Lead in 2026?',
    excerpt: 'A complete breakdown of solar lead generation costs across different platforms (Facebook, Google, Door Knocking) and why buying appointments is superior.',
    date: 'April 20, 2026'
  },
  {
    slug: 'door-knocking-vs-buying-appointments',
    title: 'Door Knocking vs. Buying Solar Appointments',
    excerpt: 'Is the grueling grind of door knocking still worth it? We compare the true ROI of field sales versus a dialed-in appointment setting system.',
    date: 'April 15, 2026'
  },
  {
    slug: 'stop-competing-over-shared-solar-leads',
    title: 'How to Stop Competing Over Shared Solar Leads',
    excerpt: 'If you are buying HomeAdvisor or aged internet leads, you are in a race to the bottom. Here is how to generate exclusive intent.',
    date: 'April 10, 2026'
  }
];

export function Blog() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [{
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://growfurthermarketing.com/"
    },{
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://growfurthermarketing.com/blog"
    }]
  };

  return (
    <>
      <Helmet>
        <title>Solar Sales Tips & Industry Insights | GFM Blog</title>
        <meta name="description" content="Learn how to close more solar deals, generate exclusive leads, and scale your solar business with our expert insights." />
        <link rel="canonical" href="https://growfurthermarketing.com/blog" />
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="pt-32 pb-20 px-6 max-w-5xl mx-auto min-h-[80vh]">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Solar Growth Hub</h1>
          <p className="text-xl text-zinc-400">Strategies, insights, and data to scale your solar operation.</p>
        </div>

        <div className="grid gap-8">
          {BLOG_POSTS.map((post, i) => (
            <motion.div 
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Link to={`/blog/${post.slug}`} className="block p-8 glass-panel rounded-2xl hover:border-solar/30 hover:bg-white/5 transition-all group">
                <div className="text-solar text-sm mb-3 font-mono">{post.date}</div>
                <h2 className="text-2xl font-bold mb-3 group-hover:text-solar transition-colors">{post.title}</h2>
                <p className="text-zinc-400">{post.excerpt}</p>
                <div className="mt-6 flex items-center text-white/70 group-hover:text-white font-medium text-sm">
                  Read Full Article <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </main>
    </>
  );
}
