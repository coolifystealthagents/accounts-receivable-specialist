import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'About',
  description: `How ${site.name} approaches specialist remote support.`,
  alternates: { canonical: '/about' },
  openGraph: { title: `About ${site.name}`, description: `How ${site.name} approaches specialist remote support.`, images: ['/brand/stealth-agents-team-bacolod.png'] },
};

export default function AboutPage() {
  return <main>
    <header className="service-hero">
      <div><p className="eyebrow">About {site.name}</p><h1>Better delegation starts with a better receivables role.</h1><p className="lede">We help {site.audience} shape focused remote support around real queues, explicit boundaries, and reviewable evidence.</p><Link className="button primary" href="/contact-us">Discuss your workflow</Link></div>
      <div className="service-hero-image"><Image src="/brand/stealth-agents-team-bacolod.png" alt="Stealth Agents managed support team in Bacolod" fill priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
    </header>
    <section className="content-wrap prose">
      <h2>Start with the operating system, not a generic task list</h2>
      <p>Accounts receivable work crosses customer records, invoices, payments, aging views, communications, and exception decisions. A useful support role begins by identifying the system of record, the accountable owner, the evidence required for completion, and the conditions that stop work for review.</p>
      <p>That definition protects both speed and judgment. Routine preparation can move consistently while credit decisions, accounting treatment, payment movement, write offs, refunds, legal steps, and customer commitments remain with authorized people.</p>
      <h2>Specialist context makes the handoff more useful</h2>
      <p>We frame roles around the language and evidence of receivables operations. That may include approved billing instructions, remittance records, invoice candidates, customer contact preferences, dispute packets, status codes, and documented escalation paths.</p>
      <p>The goal is not to make an assistant the owner of every answer. It is to make routine work inspectable and to bring incomplete or conflicting items to the right owner with enough context for a decision.</p>
      <h2>Managed support from Stealth Agents</h2>
      <p>{site.name} is powered by StealthAgents. Stealth Agents supports role definition, matching, communication, and the managed-service relationship. Your organization controls access, financial policy, customer promises, approvals, and final records.</p>
      <h2>A controlled way to begin</h2>
      <p>Choose one recurring queue with a known owner. Document its inputs, expected output, common exceptions, access limits, and acceptance check. Run a bounded sample, inspect the evidence, and refine the procedure before expanding responsibility.</p>
      <h2>What accountability looks like</h2>
      <ul><li>Every queue has a named internal owner.</li><li>Every status has a defined meaning and permitted evidence.</li><li>Every exception has a route and expected response.</li><li>Every sensitive action stays with an authorized decision maker.</li><li>Every completed item can be sampled and reviewed.</li></ul>
      <Link id="cta-about-story-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link>
    </section>
  </main>;
}
