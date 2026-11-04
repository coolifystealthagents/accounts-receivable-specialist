import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { displayArticleDate } from '@/lib/article';
import { blogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical guides for designing, delegating, and reviewing specialist accounts receivable support.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Blog | Accounts Receivable Specialist', description: 'Practical field notes for reviewable accounts receivable workflows.', images: ['/images/blog-receivables-analysis.jpg'] },
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const [featured, ...remaining] = blogPosts;
  return (
    <main className="editorial-library blog-library">
      <header className="index-photo-hero">
        <div><p className="eyebrow">Practical field notes</p><h1>Clearer roles. Better handoffs.</h1><p>Use practical guides to examine recurring receivables work without losing the distinction between preparation and accountable judgment.</p></div>
        <div className="index-photo" data-motion-image><Image src="/images/blog-receivables-analysis.jpg" alt="Close view of a financial report being reviewed with a pen" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
      </header>

      <section className="library-compass" aria-labelledby="blog-library">
        <div><p className="eyebrow">How to use this library</p><h2 id="blog-library">Start with the workflow that creates the most uncertainty.</h2></div>
        <div><p>Choose a topic, compare its suggested inputs and review points with your current process, then document one small handoff to test. The articles are practical planning material, not accounting, legal, or credit advice.</p><div className="topic-ruler" aria-label="Blog topics"><span>All topics ({blogPosts.length})</span>{categories.map((category) => <span key={category}>{category} ({blogPosts.filter((post) => post.category === category).length})</span>)}</div></div>
      </section>

      {featured ? <section className="featured-editorial">
        <div className="featured-image" data-motion-image><Image src={featured.thumbnail!} width={1200} height={630} alt={`${featured.title} article cover`} /></div>
        <div><p className="eyebrow">Latest field note</p><span className="editorial-kicker">{featured.category} · {displayArticleDate(featured.publishedAt)} · {featured.readTime}</span><h2><Link href={`/blog/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.description}</p><Link className="text-link" href={`/blog/${featured.slug}`}>Read the latest guide →</Link></div>
      </section> : null}

      <section className="editorial-ledger" aria-labelledby="all-blog-guides">
        <header><div><p className="eyebrow">Field-note ledger</p><h2 id="all-blog-guides">Browse every practical guide</h2></div><p>Scan by topic, question, or publication date. Each row leads to a complete article with a visible contents guide and related service path.</p></header>
        <div className="editorial-row-list">
          {remaining.map((post) => <article className="editorial-row" key={post.slug}>
            <div><span className="editorial-kicker">{post.category}</span><h3><Link href={`/blog/${post.slug}`}>{post.title}</Link></h3><p>{post.description}</p></div>
            <div className="row-meta"><time dateTime={post.publishedAt}>{displayArticleDate(post.publishedAt)}</time><span>{post.readTime}</span><Link href={`/blog/${post.slug}`}>Read article →</Link></div>
          </article>)}
        </div>
      </section>

      <section className="closing index-closing"><div><p className="eyebrow">Choose a practical starting point</p><h2>Map one queue before expanding the role.</h2></div><div><p>Bring the source records, current owner, expected output, and exceptions. We can help you frame a controlled specialist workflow.</p><Link className="button primary" href="/contact-us">Book a free consultation</Link></div></section>
    </main>
  );
}
