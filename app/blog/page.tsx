import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { blogPosts } from '@/lib/content';
import { EditorialCardGrid } from '@/components/EditorialCardGrid';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical guides for designing, delegating, and reviewing specialist accounts receivable support.',
  alternates: { canonical: '/blog' },
  openGraph: { title: 'Blog | Accounts Receivable Specialist', description: 'Practical field notes for reviewable accounts receivable workflows.', images: ['/images/blog-receivables-analysis.jpg'] },
};

type BlogPageProps = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> };

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  const params = await searchParams;
  const requestedCategory = Array.isArray(params.category) ? params.category[0] : params.category;
  const selectedCategory = requestedCategory && categories.includes(requestedCategory) ? requestedCategory : '';
  const filteredPosts = selectedCategory ? blogPosts.filter((post) => post.category === selectedCategory) : blogPosts;
  return (
    <main className="editorial-library blog-library">
      <header className="index-photo-hero">
        <div><p className="eyebrow">Practical field notes</p><h1>Clearer roles. Better handoffs.</h1><p>Use practical guides to examine recurring receivables work without losing the distinction between preparation and accountable judgment.</p></div>
        <div className="index-photo" data-motion-image><Image src="/images/blog-receivables-analysis.jpg" alt="Close view of a financial report being reviewed with a pen" fill priority sizes="(max-width: 900px) 100vw, 48vw" /></div>
      </header>

      <section className="library-compass" aria-labelledby="blog-library">
        <div><p className="eyebrow">How to use this library</p><h2 id="blog-library">Start with the workflow that creates the most uncertainty.</h2></div>
        <div><p>Choose a topic, compare its suggested inputs and review points with your current process, then document one small handoff to test. The articles are practical planning material, not accounting, legal, or credit advice.</p></div>
      </section>

      <nav className="category-filter" aria-label="Blog categories">
        <p className="category-filter-label">Browse by topic</p>
        <div className="category-filter-options">
          <Link className={`category-chip${selectedCategory ? '' : ' is-active'}`} href="/blog" aria-current={selectedCategory ? undefined : 'page'}>All topics <span>({blogPosts.length})</span></Link>
          {categories.map((category) => <Link className={`category-chip${selectedCategory === category ? ' is-active' : ''}`} href={`/blog?category=${encodeURIComponent(category)}`} aria-current={selectedCategory === category ? 'page' : undefined} key={category}>{category} <span>({blogPosts.filter((post) => post.category === category).length})</span></Link>)}
        </div>
      </nav>

      <EditorialCardGrid
        kind="blog"
        title="Browse every practical guide"
        description="Scan by topic, question, or publication date. Each guide includes clear review points and a related specialist workflow."
        items={filteredPosts.map((post) => ({ slug: post.slug, title: post.title, summary: post.description, topic: post.category, publishedAt: post.publishedAt, readTime: post.readTime, image: post.thumbnail ?? '/article-ledger.svg', href: `/blog/${post.slug}` }))}
      />

      <section className="closing index-closing"><div><p className="eyebrow">Choose a practical starting point</p><h2>Map one queue before expanding the role.</h2></div><div><p>Bring the source records, current owner, expected output, and exceptions. We can help you frame a controlled specialist workflow.</p><Link className="button primary" href="/contact-us">Book a free consultation</Link></div></section>
    </main>
  );
}
