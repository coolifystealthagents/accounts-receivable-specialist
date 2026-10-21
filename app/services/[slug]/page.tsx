import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { site } from '@/lib/site';
import { serviceBySlug } from '@/lib/content';

export function generateStaticParams() { return site.services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  return service ? { title: service.name, description: service.short, alternates: { canonical: `/services/${slug}` }, openGraph: { title: service.name, description: service.short, images: [site.heroImage] } } : {};
}

function ListSection({ title, items }: { title: string; items: string[] }) {
  return <section className="detail-section"><h2>{title}</h2><ul className="check-list">{items.map(item => <li key={item}>{item}</li>)}</ul></section>;
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();
  const related = service.related.map(serviceBySlug).filter(Boolean);
  const schema = { '@context': 'https://schema.org', '@type': 'Service', name: service.name, description: service.short, provider: { '@type': 'Organization', name: site.name, url: `https://${site.domain}` }, areaServed: 'Worldwide' };
  return <main>
    <header className="service-hero">
      <div><p className="eyebrow">Managed receivables support</p><h1>{service.name}</h1><p className="lede">{service.short}</p><p><strong>Designed for:</strong> {service.audience}</p><Link className="button primary" href="/contact-us">Discuss this workflow</Link></div>
      <div className="service-hero-image"><Image src={site.heroImage} alt={site.heroAlt} fill priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
    </header>
    <div className="detail-layout">
      <aside className="detail-nav" aria-label="On this page"><strong>Service brief</strong><a href="#problem">Operating problem</a><a href="#scope">Scope and inputs</a><a href="#workflow">Workflow and outputs</a><a href="#decisions">Human decisions</a><a href="#quality">Quality controls</a><a href="#scenarios">Scenarios</a><a href="#faq">Questions</a></aside>
      <article className="service-detail">
        <section id="problem" className="detail-section"><p className="eyebrow">The operating problem</p><h2>Make recurring work visible before it becomes urgent.</h2><p>{service.problem}</p><p>The role adds structured preparation and coordination. It does not transfer financial authority. Your named owner receives consistent records, explicit exceptions, and a usable next action.</p></section>
        <div id="scope" className="detail-pair"><ListSection title="Work in scope" items={service.scope} /><ListSection title="Inputs the role needs" items={service.inputs} /></div>
        <section id="workflow" className="detail-section"><p className="eyebrow">Controlled workflow</p><h2>From approved queue to reviewed disposition.</h2><ol className="workflow-list">{service.workflow.map(step => <li key={step}>{step}</li>)}</ol></section>
        <ListSection title="Outputs your team can inspect" items={service.outputs} />
        <section id="decisions" className="detail-section boundary-panel"><p className="eyebrow">Boundaries and human decisions</p><h2>Accountability remains with authorized owners.</h2><ul>{service.boundaries.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section id="quality" className="detail-section"><p className="eyebrow">Quality controls</p><h2>Review the evidence, not just activity.</h2><ul className="check-list">{service.quality.map(item => <li key={item}>{item}</li>)}</ul></section>
        <section id="scenarios" className="detail-section"><p className="eyebrow">Typical scenarios</p><h2>How the boundary works in practice.</h2><div className="scenario-grid">{service.scenarios.map(item => <article key={item.title}><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div></section>
        <section id="faq" className="detail-section"><p className="eyebrow">Frequently asked questions</p><h2>Before you design the role.</h2>{service.faq.map(item => <details key={item.q}><summary>{item.q}</summary><p>{item.a}</p></details>)}</section>
        <section className="detail-section"><p className="eyebrow">Related services</p><h2>Connect adjacent receivables workflows.</h2><div className="related-links">{related.map(item => item && <Link href={`/services/${item.slug}`} key={item.slug}><strong>{item.name}</strong><span>{item.short}</span></Link>)}</div></section>
      </article>
    </div>
    <section className="closing"><p className="eyebrow">Start with one controlled queue</p><h2>Build a role your finance team can review and trust.</h2><p>Bring the current workflow, owners, inputs, exceptions, and completion standard. We will help define the support boundary.</p><Link className="button primary" href="/contact-us">Book a free consultation</Link></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
