import Image from 'next/image';
import Link from 'next/link';
import { displayArticleDate } from '@/lib/article';

export type EditorialCardItem = {
  slug: string;
  title: string;
  summary: string;
  topic: string;
  publishedAt: string;
  readTime?: string;
  image: string;
  href: string;
  status?: string;
};

type EditorialCardGridProps = {
  items: EditorialCardItem[];
  title: string;
  description: string;
  kind: 'blog' | 'research';
};

export function EditorialCardGrid({ items, title, description, kind }: EditorialCardGridProps) {
  const actionLabel = kind === 'blog' ? 'Read the guide' : 'Review the brief';
  return (
    <section className={`editorial-ledger ${kind}-editorial-ledger`} aria-labelledby={`${kind}-results-title`}>
      <header>
        <div><p className="eyebrow">{kind === 'blog' ? 'Field-note ledger' : 'Research ledger'}</p><h2 id={`${kind}-results-title`}>{title}</h2></div>
        <p>{description}</p>
      </header>
      {items.length ? (
        <div className="editorial-card-grid">
          {items.map((item) => (
            <article className={`editorial-card ${kind}-editorial-card`} key={item.slug}>
              <Link className="editorial-card-image" href={item.href} tabIndex={-1} aria-hidden="true">
                <Image src={item.image} alt="" fill sizes="(max-width: 600px) 100vw, (max-width: 1000px) 50vw, 33vw" />
              </Link>
              <div className="editorial-card-content">
                <span className="editorial-kicker">{item.topic}{item.status ? ` Â· ${item.status}` : ''}</span>
                <h3><Link href={item.href}>{item.title}</Link></h3>
                <p>{item.summary}</p>
                <div className="editorial-card-meta">
                  <time dateTime={item.publishedAt}>{displayArticleDate(item.publishedAt)}</time>
                  {item.readTime ? <span>{item.readTime}</span> : null}
                </div>
                <Link className="text-link" href={item.href}>{actionLabel} <span aria-hidden="true">â</span></Link>
              </div>
            </article>
          ))}
        </div>
      ) : <p className="editorial-empty">No items match this category yet.</p>}
    </section>
  );
}
