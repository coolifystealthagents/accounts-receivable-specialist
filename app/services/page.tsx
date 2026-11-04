import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Specialist support for billing preparation, collections coordination, cash application preparation, reconciliations, reporting, and receivables operations.',
  alternates: { canonical: '/services' },
  openGraph: { title: `Services | ${site.name}`, description: 'A practical directory of accounts receivable support roles and their operating boundaries.', images: ['/images/services-workflow-review.jpg'] },
};

const serviceGroups = [
  { step: '01', title: 'Prepare the record', summary: 'Turn approved source material into review-ready billing and payment records.', slugs: ['invoice-preparation', 'cash-application-support'] },
  { step: '02', title: 'Make the queue usable', summary: 'Connect balances to owners, next actions, communication, and bounded escalation.', slugs: ['aging-report-preparation', 'collections-coordination'] },
  { step: '03', title: 'Protect the evidence', summary: 'Keep customer questions and approved account changes reconstructable for the next reviewer.', slugs: ['dispute-documentation', 'customer-account-maintenance'] },
];

const faqs = [
  ['Can one specialist cover more than one service lane?', 'Yes, when the lanes share systems, source records, and an accountable reviewer. Start with one bounded queue, verify the handoff, then add adjacent work only when the permissions and stop rules remain clear.'],
  ['Which service should we start with?', 'Choose the recurring queue with a named internal owner, stable inputs, a visible backlog, and a clear definition of complete. Avoid starting with work that depends on unwritten judgment or broad financial authority.'],
  ['What decisions remain with our finance team?', 'Your authorized team retains accounting treatment, credit decisions, write offs, refunds, payment movement, bank changes, legal or tax advice, policy, and final approval.'],
  ['How is quality reviewed?', 'Define required fields and evidence, sample routine and exception work, preserve corrections, and review patterns with the process owner before increasing volume or access.'],
];

export default function ServicesPage() {
  return <main className="services-overview">
    <header className="service-hero">
      <div className="service-hero-copy">
        <p className="eyebrow">Accounts receivable support system</p>
        <h1>Move routine work forward without moving financial authority.</h1>
        <p className="lede">Six focused service lanes help finance teams prepare records, expose exceptions, coordinate approved follow up, and keep evidence ready for the person who owns the decision.</p>
        <div className="hero-actions"><Link className="button primary" href="/contact-us">Scope a support lane</Link><a className="quiet-link" href="#service-directory">Compare all services</a></div>
        <div className="service-system" aria-label="How the service system works">
          <span><b>Input</b> Approved sources</span><span><b>Work</b> Prepare and coordinate</span><span><b>Stop</b> Route exceptions</span><span><b>Decision</b> Finance owner approves</span>
        </div>
      </div>
      <div className="service-hero-image"><Image src="/images/services-workflow-review.jpg" alt="Two professionals reviewing financial reports beside a laptop" fill priority sizes="(max-width: 800px) 100vw, 42vw" /></div>
    </header>

    <section className="services-argument">
      <div><p className="eyebrow">Why the system matters</p><h2>A backlog is rarely just a capacity problem.</h2></div>
      <div><p>Receivables work slows when source records, ownership, communication, and decision rights are mixed together. Adding help without separating those elements can create faster activity and weaker control.</p><p>The service system separates preparation and coordination from authority. A specialist can organize the record, apply approved rules, surface what is missing, and leave a clear next action. Your finance team keeps the decisions that change money, policy, customer commitments, or accounting treatment.</p></div>
    </section>

    <section id="service-directory" className="service-directory" aria-labelledby="service-directory-title">
      <div className="directory-heading"><p className="eyebrow">The full offering</p><h2 id="service-directory-title">Choose by the point where work loses clarity.</h2><p>Each destination explains the intended audience, inputs, outputs, operating steps, boundaries, quality checks, and common scenarios for that lane.</p></div>
      {serviceGroups.map((group) => <section className="service-group" key={group.step}>
        <header><span>{group.step}</span><div><h3>{group.title}</h3><p>{group.summary}</p></div></header>
        <div className="service-lane-list">
          {group.slugs.map((slug) => {
            const service = site.services.find((item) => item.slug === slug)!;
            return <article className="service-lane" key={slug}>
              <div><p className="service-purpose">Purpose</p><h3>{service.name}</h3><p>{service.short}</p></div>
              <div><p className="service-purpose">Use it when</p><p>{service.problem}</p></div>
              <div><p className="service-purpose">Review-ready output</p><p>{service.outputs.slice(0, 2).join('. ')}.</p><Link href={`/services/${service.slug}`}>Review scope and boundaries →</Link></div>
            </article>;
          })}
        </div>
      </section>)}
    </section>

    <section className="service-decision-support">
      <div className="decision-copy"><p className="eyebrow">Decision support</p><h2>Start with the queue that can be explained in one page.</h2><p>A practical first lane has a source, owner, completion standard, and exception path that the team already recognizes. If any one of those is missing, define it before increasing access or volume.</p></div>
      <div className="decision-ledger" aria-label="First workflow decision ledger">
        <div><span>Source</span><strong>Where does the approved record begin?</strong></div><div><span>Owner</span><strong>Who accepts routine work and exceptions?</strong></div><div><span>Close</span><strong>What proves the handoff is complete?</strong></div><div><span>Stop</span><strong>Which conditions require human review?</strong></div>
      </div>
    </section>

    <section className="operating-guidance">
      <div><p className="eyebrow">Operational guidance</p><h2>Build the lane before expanding the role.</h2></div>
      <ol>
        <li><span>01</span><div><strong>Name one recurring queue.</strong><p>Document the volume, frequency, source systems, current owner, and service standard.</p></div></li>
        <li><span>02</span><div><strong>Separate preparation from approval.</strong><p>List permitted actions, protected decisions, access limits, and stop conditions in plain language.</p></div></li>
        <li><span>03</span><div><strong>Define the evidence of completion.</strong><p>Use required fields, source links, timestamps, owner notes, and a visible disposition for exceptions.</p></div></li>
        <li><span>04</span><div><strong>Review before scaling.</strong><p>Sample routine work and exceptions, preserve corrections, and update the procedure when patterns appear.</p></div></li>
      </ol>
    </section>

    <section className="services-faq" aria-labelledby="services-faq-title">
      <div><p className="eyebrow">Useful questions</p><h2 id="services-faq-title">Before you choose a lane</h2></div>
      <div>{faqs.map(([question, answer]) => <details key={question}><summary>{question}</summary><p>{answer}</p></details>)}</div>
    </section>

    <section className="closing services-closing"><p className="eyebrow">Bring one real bottleneck</p><h2>Map the work, the boundary, and the next review.</h2><p>A consultation can turn a recurring receivables queue into a focused role brief without blurring the decisions that belong inside your finance team.</p><Link id="cta-services-bottom-bookcall" className="button primary" href="/contact-us">Book a free consultation</Link></section>
  </main>;
}
