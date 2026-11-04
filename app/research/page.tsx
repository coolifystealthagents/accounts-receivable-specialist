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
  const [featured, ...remaining] = researchPosts;
  return (
    <main className="editorial-library research-library">
      <header className="research-index-hero">
        <div><p className="eyebrow">Research library</p><h1>Evidence for better operating questions.</h1><p>Review source-led briefs and proposed protocols for examining receivables workflows, evidence quality, handoffs, and role boundaries.</p></div>
        <div className="research-control-ledger" aria-label="Research review ledger"><strong>Question</strong><span>Define the queue and observation</span><strong>Evidence</strong><span>Name sources and limitations</span><strong>Review</strong><span>Keep operating judgment with the owner</span></div>
      </header>

      <section className="library-compass" aria-labelledby="research-library">
        <div><p className="eyebrow">Reading the library</p><h2 id="research-library">Separate study design, observation, and operating judgment.</h2></div>
        <div><p>Use the topic and status shown on each brief to choose a relevant question. Proposed protocols explain how a study could be run and do not claim completed results. Review source links and limitations before applying any interpretation.</p><div className="topic-ruler" aria-label="Research topics"><span>All topics ({researchPosts.length})</span>{clusters.map((cluster) => <span key={cluster}>{cluster} ({researchPosts.filter((post) => post.cluster === cluster).length})</span>)}</div></div>
      </section>

      {featured ? <section className="featured-editorial research-feature">
        <div className="featured-image"><Image src={featured.thumbnail!} width={1200} height={630} alt={`${featured.title} research cover`} /></div>
        <div><p className="eyebrow">Current protocol</p><span className="editorial-kicker">{featured.cluster} · {displayArticleDate(featured.publishedAt)}{featured.isProposedProtocol ? ' · Proposed protocol' : ''}</span><h2><Link href={`/research/${featured.slug}`}>{featured.title}</Link></h2><p>{featured.summary}</p><Link className="text-link" href={`/research/${featured.slug}`}>Review the brief →</Link></div>
      </section> : null}

      <section className="editorial-ledger" aria-labelledby="all-research-briefs">
        <header><div><p className="eyebrow">Research ledger</p><h2 id="all-research-briefs">Browse every brief</h2></div><p>Each row identifies the topic and protocol status before you open the full methods, limitations, sources, and related workflow path.</p></header>
        <div className="editorial-row-list">
          {remaining.map((post, index) => <article className="editorial-row" key={post.slug}>
            <span className="row-index">{String(index + 2).padStart(2, '0')}</span>
            <div><span className="editorial-kicker">{post.cluster}{post.isProposedProtocol ? ' · Proposed protocol' : ''}</span><h3><Link href={`/research/${post.slug}`}>{post.title}</Link></h3><p>{post.summary}</p></div>
            <div className="row-meta"><time dateTime={post.publishedAt}>{displayArticleDate(post.publishedAt)}</time>{post.readTime ? <span>{post.readTime}</span> : null}<Link href={`/research/${post.slug}`}>Review brief →</Link></div>
          </article>)}
        </div>
      </section>

      <section className="closing index-closing"><div><p className="eyebrow">From question to workflow</p><h2>Place evidence inside clear decision boundaries.</h2></div><div><p>Use a brief to identify what should be measured, who should review it, and which decisions remain with your accountable finance team.</p><Link className="button primary" href="/contact-us">Discuss your workflow</Link></div></section>
    </main>
  );
}
