import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { BLOG_POSTS } from './Blog';
import { FinalCTA } from '../components/LandingPage2';

export function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="pt-48 pb-32 text-center h-[60vh] flex flex-col justify-center">
        <h1 className="text-4xl font-bold mb-4">Article Not Found</h1>
        <Link to="/blog" className="text-solar hover:underline">Back to Blog</Link>
      </div>
    );
  }

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://growfurthermarketing.com/blog/${post.slug}`
    },
    "headline": post.title,
    "description": post.excerpt,
    "image": "https://growfurthermarketing.com/og-compliant.jpg",
    "author": {
      "@type": "Organization",
      "name": "Grow Further Marketing",
      "url": "https://growfurthermarketing.com/"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Grow Further Marketing",
      "logo": {
        "@type": "ImageObject",
        "url": "https://growfurthermarketing.com/favicon.svg"
      }
    },
    "datePublished": new Date(post.date).toISOString()
  };

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
    },{
      "@type": "ListItem",
      "position": 3,
      "name": post.title,
      "item": `https://growfurthermarketing.com/blog/${post.slug}`
    }]
  };

  return (
    <>
      <Helmet>
        <title>{post.title} | GFM</title>
        <meta name="description" content={post.excerpt} />
        <link rel="canonical" href={`https://growfurthermarketing.com/blog/${post.slug}`} />
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
        <script type="application/ld+json">
          {JSON.stringify(breadcrumbSchema)}
        </script>
      </Helmet>

      <main className="pt-32 pb-20 px-6 max-w-3xl mx-auto">
        <Link to="/blog" className="text-zinc-500 hover:text-white mb-8 inline-block transition-colors">
          ← Back to Articles
        </Link>
        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
        <div className="text-solar mb-12 font-mono uppercase tracking-wider text-sm border-b border-white/10 pb-6">
          Published {post.date}
        </div>

        <article className="prose prose-invert prose-lg max-w-none mb-20 text-zinc-300 leading-relaxed">
          <p className="text-xl text-white font-medium mb-8">
            {post.excerpt}
          </p>
          <p>
            In the highly competitive world of solar sales, the difference between a mid-tier rep and a top producer usually comes down to one thing: <strong>Pipeline</strong>. But how you fill that pipeline matters more than ever. 
          </p>
          <h2>The Problem with Shared Leads</h2>
          <p>
            When you buy cheap leads from massive aggregators, you are entering a race to the bottom. The homeowner submits their info, and within seconds, their phone rings 14 times. When you finally get them on the phone, they are annoyed, defensive, and comparing quotes based solely on price.
          </p>
          <h2>The Outbound Advantage</h2>
          <p>
            Our internal data shows that outbound generated appointments—where a homeowner is systematically engaged and qualified over the phone before being booked on your calendar—have a significantly higher close rate. Why? Because they aren't shopping around. You are the only expert they are speaking to.
          </p>
          <p>
            Instead of spending your valuable hours dialing cold lists or knocking on doors in 90-degree heat, you simply wake up, check your calendar, and talk to homeowners who already know who you are and what you are offering.
          </p>
        </article>
      </main>
      <FinalCTA />
    </>
  );
}
