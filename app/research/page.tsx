import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { displayArticleDate } from '@/lib/article';
import { researchPosts } from '@/lib/content';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Source-led operational research and proposed protocols for leaders designing specialist accounts receivable support roles.',
  alternates: { canonical: '/research' },
};

export default function ResearchPage() {
  const clusters = [...new Set(researchPosts.map((post) => post.cluster))];
  return (
    <main>
      <header className="page-hero index-hero">
        <p className="eyebrow">Research library</p>
        <h1>Evidence for better operating questions.</h1>
        <p>Review source-led briefs and proposed protocols for examining receivables workflows, evidence quality, handoffs, and role boundaries.</p>
      </header>

      <section className="content-wrap editorial-index" aria-labelledby="research-library">
        <div className="index-guidance">
          <div>
            <p className="eyebrow">Reading the library</p>
            <h2 id="research-library">Separate study design, observation, and operating judgment.</h2>
          </div>
          <p>Use the topic and status shown on each brief to choose a relevant question. Proposed protocols explain how a study could be run and do not claim completed results. Source links and limitations should be reviewed before applying any interpretation.</p>
        </div>
        <div className="principles" aria-label="Research topics">
          <span className="pill">All topics ({researchPosts.length})</span>
          {clusters.map((cluster) => <span className="pill" key={cluster}>{cluster} ({researchPosts.filter((post) => post.cluster === cluster).length})</span>)}
        </div>
        <div className="article-grid editorial-card-grid">
          {researchPosts.map((post) => (
            <article className="article-card editorial-card" key={post.slug}>
              <Link className="editorial-card-image" href={`/research/${post.slug}`} aria-label={`Review ${post.title}`}>
                <Image src={post.thumbnail!} width={640} height={336} alt={`${post.title} research cover`} />
              </Link>
              <div className="editorial-card-body">
                <div className="editorial-card-tags"><span className="pill">{post.cluster}</span>{post.isProposedProtocol ? <span className="pill protocol-pill">Proposed protocol</span> : null}</div>
                <h2><Link href={`/research/${post.slug}`}>{post.title}</Link></h2>
                <p>{post.summary}</p>
                <div className="editorial-card-meta">
                  <time dateTime={post.publishedAt}>{displayArticleDate(post.publishedAt)}</time>
                  {post.readTime ? <span>{post.readTime}</span> : null}
                </div>
                <Link className="text-link" href={`/research/${post.slug}`}>Review the brief</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="closing index-closing">
        <div><p className="eyebrow">From question to workflow</p><h2>Place evidence inside clear decision boundaries.</h2></div>
        <div><p>Use a brief to identify what should be measured, who should review it, and which decisions remain with your accountable finance team.</p><Link className="button primary" href="/contact-us">Discuss your workflow</Link></div>
      </section>
    </main>
  );
}
