import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Specialist support for billing preparation, collections coordination, cash application preparation, reconciliations, reporting, and receivables operations.',
  alternates: { canonical: '/services' },
  openGraph: { title: `Services | ${site.name}`, description: 'A practical directory of accounts receivable support roles and their operating boundaries.', images: ['/hero.png'] },
};

export default function ServicesPage() {
  return <main>
    <header className="service-hero">
      <div><p className="eyebrow">Service directory</p><h1>Define the queue. Protect the decision. Improve the record.</h1><p className="lede">Choose a focused support lane for the part of your receivables process that needs more consistent preparation, coordination, evidence, or follow-through.</p><Link className="button primary" href="/contact-us">Scope a support lane</Link></div>
      <div className="service-hero-image"><Image src="/hero.png" alt="Accounts receivable specialist reviewing a controlled workflow" fill priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
    </header>
    <section className="content-wrap prose">
      <h2>A service should describe an operating lane—not promise an outcome</h2>
      <p>Every engagement is configured around your systems, policies, access controls, and approval chain. Specialists can prepare records, organize supporting evidence, communicate from approved playbooks, document responses, and route exceptions. Authorized internal owners keep responsibility for accounting judgments, credit decisions, refunds, write offs, bank control, legal or tax advice, and final approval.</p>
      <h2>Accounts receivable support services</h2>
      <div className="service-grid">{site.services.map((service, index) => <article className="service-card" key={service.slug}><span className="card-index">0{index + 1}</span><h3>{service.name}</h3><p>{service.short}</p><Link href={`/services/${service.slug}`}>Review scope and boundaries →</Link></article>)}</div>
      <h2>How to choose the first workflow</h2>
      <p>Start where volume is recurring, ownership is clear, and completion can be proven. Good first candidates often have stable inputs, a documented handoff, and exceptions that can be routed without forcing the specialist to invent policy.</p>
      <ol><li>Name the queue and the internal process owner.</li><li>List required inputs, systems, and permission limits.</li><li>Define the expected output and proof of completion.</li><li>Document stop conditions, exceptions, and approval points.</li><li>Sample the work before increasing volume or access.</li></ol>
      <h2>Quality is designed into the handoff</h2>
      <p>Useful controls can include source-to-record matching, required-field checks, duplicate review, timestamped communication notes, exception registers, aging reason codes, and periodic owner sampling. The appropriate control depends on your process and risk profile.</p>
      <h2>Need help defining the lane?</h2>
      <p>Bring one recurring receivables bottleneck to a consultation. We can map the routine preparation, the evidence needed, and the decisions that should remain internal.</p>
      <Link id="cta-services-bottom-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link>
    </section>
  </main>;
}
