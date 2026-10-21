import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { LeadForm } from '@/components/LeadForm';
import { ReviewMarquee } from '@/components/ReviewMarquee';
import { site } from '@/lib/site';
import './contact.css';

export const metadata: Metadata = { title: 'Contact Us | Accounts Receivable Staffing Consultation', description: 'Talk with Accounts Receivable Specialist about managed support for invoice, cash application, aging, collections, dispute, and customer account workflows.', alternates: { canonical: '/contact-us' }, openGraph: { title: 'Contact Accounts Receivable Specialist', description: 'Design a controlled remote support role for recurring receivables work.', images: ['/brand/stealth-agents-team-bacolod.png'] } };
const faqs = [
  ['What work can a remote specialist support?', 'A specialist can prepare invoice records, organize payment references, maintain aging views, coordinate approved reminders, document disputes, and update authorized account fields.'],
  ['Can a specialist approve write offs, credit, refunds, or payments?', 'No. Financial approvals, accounting judgment, credit decisions, payment movement, legal collection steps, and policy remain with authorized owners.'],
  ['Can the role work in our systems?', 'Yes, with approved and limited access. Your organization controls permissions, security, retention, and final records.'],
  ['What should we bring to the consultation?', 'Bring queue volumes, current ownership, systems, exception types, service standards, and decisions that must remain internal. Do not send sensitive records.']
];
export default function ContactPage() {
  const schema = { '@context': 'https://schema.org', '@type': 'ContactPage', name: `Contact ${site.name}`, url: `https://${site.domain}/contact-us`, description: 'Accounts receivable staffing consultation.' };
  return <main className="contact-page">
    <section className="contact-first">
      <div className="contact-intro">
        <p className="eyebrow">Receivables staffing consultation</p>
        <h1>Turn recurring receivables work into a controlled support role.</h1>
        <p className="contact-lede">Tell us where invoice, payment, aging, follow up, dispute, or account maintenance work is slowing your team. We will help define a practical support scope.</p>
        <dl className="scope-labels"><div><dt>Preparation</dt><dd>Review ready records</dd></div><div><dt>Coordination</dt><dd>Visible owners and next actions</dd></div><div><dt>Control</dt><dd>Human decisions stay internal</dd></div></dl>
        <ReviewMarquee />
      </div>
      <div className="contact-form-card"><p className="eyebrow">Start the conversation</p><h2>Book a free consultation</h2><p>Share enough context for a useful staffing conversation. Do not include credentials, bank details, customer records, or payment data.</p><LeadForm source="contact-page-consultation" /></div>
    </section>
    <section className="team-proof">
      <div className="team-image"><Image src="/brand/stealth-agents-team-bacolod.png" alt="Stealth Agents team in Bacolod" fill sizes="(max-width: 800px) 100vw, 52vw" /></div>
      <div className="team-copy"><Image className="official-logo" src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width={190} height={51} /><p className="eyebrow">Official team, Bacolod</p><h2>Managed service support built around your operating rules.</h2><p>Accounts Receivable Specialist is powered by Stealth Agents. The managed service helps define the role, match an assistant, and establish communication and support around the engagement.</p><p>Your organization still owns financial policy, approvals, system access, customer commitments, and final records. The specialist works within documented queues and routes exceptions to the people authorized to decide.</p><a className="text-link" href="https://stealthagents.com/" rel="noopener noreferrer">Visit the official Stealth Agents website</a></div>
    </section>
    <section className="contact-section"><div className="contact-container"><p className="eyebrow">A practical start</p><h2>What happens after you reach out</h2><div className="step-grid"><article><h3>Discover the workflow</h3><p>Map recurring work, current owners, source systems, volume, and exceptions.</p></article><article><h3>Define the role</h3><p>Set inputs, outputs, permissions, review points, and escalation rules.</p></article><article><h3>Match for the work</h3><p>Review candidates whose strengths fit the documented scope and systems.</p></article><article><h3>Launch with control</h3><p>Begin with a bounded queue and inspect quality before expanding.</p></article></div></div></section>
    <section className="contact-section contact-boundary"><div className="contact-container narrow"><p className="eyebrow">Accountability stays clear</p><h2>Preparation can be delegated. Financial authority cannot.</h2><p>Remote specialists can prepare records, maintain approved fields, organize evidence, send authorized reminders, record responses, and route exceptions. They do not make accounting judgments, extend credit, approve refunds or write offs, move money, control bank accounts, provide legal or tax advice, or override controls.</p></div></section>
    <section className="contact-section"><div className="contact-container narrow"><p className="eyebrow">Common questions</p><h2>Before the consultation</h2>{faqs.map(([q, a]) => <details key={q}><summary>{q}</summary><p>{a}</p></details>)}<Link className="button primary" href="/services">Explore all services</Link></div></section>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
  </main>;
}
