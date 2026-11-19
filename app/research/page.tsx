import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { researchPosts } from '@/lib/content';
import { EditorialCardGrid } from '@/components/EditorialCardGrid';

export const metadata: Metadata = {
  title: 'Research',
  description: 'Source-led operational research and proposed protocols for leaders designing specialist accounts receivable support roles.',
  alternates: { canonical: '/research' },
};

type ResearchPageProps = { searchParams: Promise<{ [key: string]: string | string[] | undefined }> };

export default async function ResearchPage({ searchParams }: ResearchPageProps) {
  const clusters = [...new Set(researchPosts.map((post) => post.cluster))];
  const params = await searchParams;
  const requestedCluster = Array.isArray(params.cluster) ? params.cluster[0] : params.cluster;
  const selectedCluster = requestedCluster && clusters.includes(requestedCluster) ? requestedCluster : '';
  const filteredPosts = selectedCluster ? researchPosts.filter((post) => post.cluster === selectedCluster) : researchPosts;
  return (
    <main className="editorial-library research-library">
      <header className="research-index-hero">
        <div><p className="eyebrow">Research library</p><h1>Evidence for better operating questions.</h1><p>Review source-led briefs and proposed protocols for examining receivables workflows, evidence quality, handoffs, and role boundaries.</p></div>
        <div className="research-hero-visual" data-motion-image>
          <Image src="/images/research-operations.svg" alt="Research workspace with financial source records, an analysis chart, and a review checklist" fill priority sizes="(max-width: 900px) 100vw, 48vw" />
          <div className="research-control-ledger" aria-label="Research review ledger"><strong>Question</strong><span>Define the queue and observation</span><strong>Evidence</strong><span>Name sources and limitations</span><strong>Review</strong><span>Keep operating judgment with the owner</span></div>
        </div>
      </header>

      <section className="library-compass" aria-labelledby="research-library">
        <div><p className="eyebrow">Reading the library</p><h2 id="research-library">Separate study design, observation, and operating judgment.</h2></div>
        <div><p>Use the topic and status shown on each brief to choose a relevant question. Proposed protocols explain how a study could be run and do not claim completed results. Review source links and limitations before applying any interpretation.</p></div>
      </section>

      <nav className="category-filter" aria-label="Research categories">
        <p className="category-filter-label">Browse by research topic</p>
        <div className="category-filter-options">
          <Link className={`category-chip${selectedCluster ? '' : ' is-active'}`} href="/research" aria-current={selectedCluster ? undefined : 'page'}>All topics <span>({researchPosts.length})</span></Link>
          {clusters.map((cluster) => <Link className={`category-chip${selectedCluster === cluster ? ' is-active' : ''}`} href={`/research?cluster=${encodeURIComponent(cluster)}`} aria-current={selectedCluster === cluster ? 'page' : undefined} key={cluster}>{cluster} <span>({researchPosts.filter((post) => post.cluster === cluster).length})</span></Link>)}
        </div>
      </nav>

      <EditorialCardGrid
        kind="research"
        title="Browse every brief"
        description="Each brief identifies its topic and protocol status before you open the full methods, limitations, sources, and related workflow path."
        items={filteredPosts.map((post) => ({ slug: post.slug, title: post.title, summary: post.summary, topic: post.cluster, publishedAt: post.publishedAt, readTime: post.readTime, image: post.thumbnail ?? '/article-ledger.svg', href: `/research/${post.slug}`, status: post.isProposedProtocol ? 'Proposed protocol' : undefined }))}
      />

      <section className="closing index-closing"><div><p className="eyebrow">From question to workflow</p><h2>Place evidence inside clear decision boundaries.</h2></div><div><p>Use a brief to identify what should be measured, who should review it, and which decisions remain with your accountable finance team.</p><Link className="button primary" href="/contact-us">Discuss your workflow</Link></div></section>
    </main>
  );
}
