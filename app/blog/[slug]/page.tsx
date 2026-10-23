import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArticleSidebar, type ArticleTocItem } from '@/components/ArticleSidebar';
import { articleSectionId, displayArticleDate, siteOrigin } from '@/lib/article';
import { blogBySlug, blogPosts } from '@/lib/content';
import { site } from '@/lib/site';
import TocSync from '@/components/TocSync';

export function generateStaticParams() {
  return blogPosts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) return {};
  const image = post.thumbnail!;
  return {
    title: post.title,
    description: post.description,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.description,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      images: [{ url: image, alt: post.title }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.description, images: [image] },
  };
}

export default async function BlogArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((item) => item.slug !== post.slug && item.category === post.category).slice(0, 3);
  const fallbackRelated = related.length ? related : blogPosts.filter((item) => item.slug !== post.slug).slice(0, 3);
  const publishedLabel = displayArticleDate(post.publishedAt);
  const updatedLabel = post.updatedAt ? displayArticleDate(post.updatedAt) : undefined;
  const tocItems: ArticleTocItem[] = [
    ...post.sections.map(({ heading }) => ({ id: articleSectionId(heading), label: heading })),
    { id: 'common-questions', label: 'Common questions answered' },
    { id: 'related-reading', label: 'Related reading' },
  ];
  const url = `${siteOrigin}/blog/${post.slug}`;
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    image: `${siteOrigin}${post.thumbnail}`,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt ?? post.publishedAt,
    author: { '@type': 'Organization', name: `${site.name} Editorial Team` },
    publisher: { '@type': 'Organization', name: site.name, url: siteOrigin },
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
  };

  return (
    <main><TocSync />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, '\\u003c') }} />
      <header className="page-hero article-hero">
        <p className="eyebrow"><Link href="/blog">Blog</Link> / {post.category}</p>
        <h1>{post.title}</h1>
        <p className="article-dek">{post.description}</p>
        <div className="article-byline">
          <span>{site.name} Editorial Team</span>
          <span>Published <time dateTime={post.publishedAt}>{publishedLabel}</time></span>
          {post.updatedAt ? <span>Updated <time dateTime={post.updatedAt}>{updatedLabel}</time></span> : null}
          <span>{post.readTime}</span>
        </div>
        <Image className="article-thumbnail" src={post.thumbnail!} width={1200} height={630} priority alt={`${post.title} article cover`} />
      </header>

      <div className="content-wrap article-layout">
        <article className="prose article-body">
          {post.sections.map((section, index) => (
            <section key={section.heading} aria-labelledby={articleSectionId(section.heading)}>
              <h2 id={articleSectionId(section.heading)}>{section.heading}</h2>
              {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              {index === 2 ? <p>Explore the <Link href={post.internalService}>related specialist service</Link> to define scope, ownership, and evidence.</p> : null}
              {index === 4 ? <p><a href={post.source.url} rel="noopener noreferrer">{post.source.label}</a> provides public guidance that can inform a documented review.</p> : null}
              {index === 6 ? <p>Continue with <Link href={post.internalSibling}>a related workflow guide</Link>.</p> : null}
            </section>
          ))}

          <section aria-labelledby="common-questions">
            <h2 id="common-questions">Common questions answered</h2>
            {post.faq.map((item) => <div key={item.q}><h3>{item.q}</h3><p>{item.a}</p></div>)}
          </section>

          <section aria-labelledby="related-reading">
            <h2 id="related-reading">Related reading</h2>
            <div className="article-related-list">
              {fallbackRelated.map((item) => <Link href={`/blog/${item.slug}`} key={item.slug}>{item.title}</Link>)}
            </div>
          </section>

          <div className="article-final-cta">
            <h2>Define one reviewable receivables workflow.</h2>
            <p>Bring the queue, owner, source records, and exceptions you need to make visible.</p>
            <Link id="cta-blog-final-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link>
          </div>
        </article>
        <ArticleSidebar
          items={tocItems}
          topic={post.category}
          publishedLabel={publishedLabel}
          updatedLabel={updatedLabel}
          readTime={post.readTime}
          ctaHref={post.internalService}
          ctaLabel="View related service"
        />
      </div>
    </main>
  );
}
