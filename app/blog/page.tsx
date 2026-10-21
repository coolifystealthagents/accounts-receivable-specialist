import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { displayArticleDate } from '@/lib/article';
import { blogPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Practical guides for designing, delegating, and reviewing specialist accounts receivable support.',
  alternates: { canonical: '/blog' },
};

export default function BlogPage() {
  const categories = [...new Set(blogPosts.map((post) => post.category))];
  return (
    <main>
      <header className="page-hero index-hero">
        <p className="eyebrow">Practical field notes</p>
        <h1>Clearer roles. Better handoffs.</h1>
        <p>Use these guides to examine recurring receivables work without losing the distinction between preparation and accountable judgment.</p>
      </header>

      <section className="content-wrap editorial-index" aria-labelledby="blog-library">
        <div className="index-guidance">
          <div>
            <p className="eyebrow">How to use this library</p>
            <h2 id="blog-library">Start with the workflow that creates the most uncertainty.</h2>
          </div>
          <p>Choose a topic below, compare its suggested inputs and review points with your current process, then document one small handoff to test. The articles are practical planning material, not accounting, legal, or credit advice.</p>
        </div>
        <div className="principles" aria-label="Topics">
          <span className="pill">All topics ({blogPosts.length})</span>
          {categories.map((category) => <span className="pill" key={category}>{category} ({blogPosts.filter((post) => post.category === category).length})</span>)}
        </div>
        <div className="article-grid editorial-card-grid">
          {blogPosts.map((post) => (
            <article className="article-card editorial-card" key={post.slug}>
              <Link className="editorial-card-image" href={`/blog/${post.slug}`} aria-label={`Read ${post.title}`}>
                <Image src={post.thumbnail!} width={640} height={336} alt={`${post.title} article cover`} />
              </Link>
              <div className="editorial-card-body">
                <span className="pill">{post.category}</span>
                <h2><Link href={`/blog/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.description}</p>
                <div className="editorial-card-meta">
                  <time dateTime={post.publishedAt}>{displayArticleDate(post.publishedAt)}</time>
                  <span>{post.readTime}</span>
                </div>
                <Link className="text-link" href={`/blog/${post.slug}`}>Read article</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing index-closing">
        <div><p className="eyebrow">Choose a practical starting point</p><h2>Map one queue before expanding the role.</h2></div>
        <div><p>Bring the source records, current owner, expected output, and exceptions. We can help you frame a controlled specialist workflow.</p><Link className="button primary" href="/contact-us">Book a free consultation</Link></div>
      </section>
    </main>
  );
}
