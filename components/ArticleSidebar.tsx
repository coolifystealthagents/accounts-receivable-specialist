'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

export type ArticleTocItem = {
  id: string;
  label: string;
};

type ArticleSidebarProps = {
  items: ArticleTocItem[];
  topic: string;
  publishedLabel: string;
  updatedLabel?: string;
  readTime: string;
  ctaHref: string;
  ctaLabel: string;
};

export function ArticleSidebar({
  items,
  topic,
  publishedLabel,
  updatedLabel,
  readTime,
  ctaHref,
  ctaLabel,
}: ArticleSidebarProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? '');

  useEffect(() => {
    const headings = items
      .map(({ id }) => document.getElementById(id))
      .filter((heading): heading is HTMLElement => Boolean(heading));
    if (!headings.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) setActiveId(visible[0].target.id);
      },
      { rootMargin: '-112px 0px -62% 0px', threshold: [0, 1] },
    );

    headings.forEach((heading) => observer.observe(heading));
    return () => observer.disconnect();
  }, [items]);

  return (
    <aside className="article-sidebar" aria-label="Article information and navigation">
      <div className="article-sidebar-panel">
        <dl className="article-sidebar-meta">
          <div><dt>Topic</dt><dd>{topic}</dd></div>
          <div><dt>Published</dt><dd>{publishedLabel}</dd></div>
          {updatedLabel ? <div><dt>Updated</dt><dd>{updatedLabel}</dd></div> : null}
          <div><dt>Reading time</dt><dd>{readTime}</dd></div>
        </dl>
        <details className="article-toc" open>
          <summary>On this page</summary>
          <nav aria-label="On this page">
            {items.map((item) => (
              <a
                href={`#${item.id}`}
                key={item.id}
                aria-current={activeId === item.id ? 'location' : undefined}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </details>
        <div className="article-sidebar-cta">
          <p>Need a controlled workflow with clear ownership and review points?</p>
          <Link className="button" href={ctaHref}>{ctaLabel}</Link>
        </div>
      </div>
    </aside>
  );
}
