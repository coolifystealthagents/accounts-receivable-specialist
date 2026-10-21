import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSidebar, type ArticleTocItem } from '@/components/ArticleSidebar';
import { articleSectionId, displayArticleDate, siteOrigin } from '@/lib/article';
import { researchBySlug, researchPosts } from '@/lib/content';
import { site } from '@/lib/site';

const serviceByCluster: Record<string, string> = {
  'Invoice operations': '/services/invoice-preparation',
  'Cash application': '/services/cash-application-support',
  'Collections workflow': '/services/collections-coordination',
  'Role design': '/services',
};

export function generateStaticParams() {
  return researchPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) return {};
  const image = post.thumbnail!;
  const description = `Proposed protocol for ${post.title.toLowerCase()}, defining evidence, workflow boundaries, and review steps without claiming completed findings.`;
  return {
    title: post.title,
    description,
    alternates: { canonical: `/research/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: image, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description, images: [image] },
  };
}

export default async function ResearchArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = researchBySlug(slug);
  if (!post) notFound();

  const sections = post.sections ?? [];
  const related = researchPosts.filter((item) => item.slug !== post.slug && item.cluster === post.cluster).slice(0, 3);
  const fallbackRelated = related.length ? related : researchPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const publishedLabel = displayArticleDate(post.publishedAt);
  const updatedLabel = post.updatedAt ? displayArticleDate(post.updatedAt) : undefined;
  const readTime = post.readTime ?? '8 min read';
  const tocItems: ArticleTocItem[] = [
    ...sections.map(({ heading }) => ({ id: articleSectionId(heading), label: heading })),
    { id: 'sources', label: 'Sources' },
    { id: 'related-research', label: 'Related research' },
  ];
  const url = `${siteOrigin}/research/${post.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: post.title,
    description: post.summary,
    image: `${siteOrigin}${post.thumbnail}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Organization', name: `${site.name} Editorial Team` },
    publisher: { '@type': 'Organization', name: site.name, url: siteOrigin },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    proficiencyLevel: 'Professional',
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <header className="page-hero article-hero">
        <p className="eyebrow"><Link href="/research">Research</Link> / {post.cluster}</p>
        <h1>{post.title}</h1>
        <p className="article-dek">{post.summary}</p>
        <div className="article-byline">
          <span>{site.name} Editorial Team</span>
          <span>Published <time dateTime={post.publishedAt}>{publishedLabel}</time></span>
          {post.updatedAt ? <span>Updated <time dateTime={post.updatedAt}>{updatedLabel}</time></span> : null}
          <span>{readTime}</span>
        </div>
        {post.isProposedProtocol ? <p className="protocol-status"><strong>Proposed research protocol.</strong> This brief describes a study design and does not present completed findings.</p> : null}
        <Image className="article-thumbnail" src={post.thumbnail!} width={1200} height={630} priority alt={`${post.title} research cover`} />
      </header>

      <div className="content-wrap article-layout">
        <article className="prose article-body">
          <div className="research-finding">
            <strong>{post.isProposedProtocol ? 'Protocol premise' : 'Research finding'}</strong>
            <p>{post.finding}</p>
          </div>

          {sections.map((section) => (
            <section key={section.heading} aria-labelledby={articleSectionId(section.heading)}>
              <h2 id={articleSectionId(section.heading)}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>
          ))}

          <section className="sources" aria-labelledby="sources">
            <h2 id="sources">Sources</h2>
            <ol>{post.sources.map((source) => <li key={source.url}><a href={source.url} rel="noopener noreferrer">{source.label}</a></li>)}</ol>
          </section>

          <section aria-labelledby="related-research">
            <h2 id="related-research">Related research</h2>
            <div className="article-related-list">
              {fallbackRelated.map((item) => <Link href={`/research/${item.slug}`} key={item.slug}>{item.title}</Link>)}
            </div>
          </section>

          <div className="article-final-cta">
            <h2>Put the protocol into operational context.</h2>
            <p>Discuss the queue, evidence, ownership, and safeguards that apply to your workflow.</p>
            <Link id="cta-research-final-bookcall" className="button primary" href="/contact-us">Discuss your workflow</Link>
          </div>
        </article>
        <ArticleSidebar
          items={tocItems}
          topic={post.cluster}
          publishedLabel={publishedLabel}
          updatedLabel={updatedLabel}
          readTime={readTime}
          ctaHref={serviceByCluster[post.cluster] ?? '/services'}
          ctaLabel="Explore related support"
        />
      </div>
    </main>
  );
}
