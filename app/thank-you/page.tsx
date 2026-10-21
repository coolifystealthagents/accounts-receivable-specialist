import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Choose a time', robots: { index: false, follow: false } };

export default function ThankYouPage() {
  return <main>
    <header className="page-hero"><p className="eyebrow">Request received</p><h1>Thanks. Pick a time that works for you.</h1><p>Your free consultation can help turn the workflow into a clear support brief.</p></header>
    <section className="content-wrap booking-wrap">
      <iframe className="booking-frame" title="Book your consultation" src="https://go.oncehub.com/StealthAgentsTeam?brdr=1pxd8d8d8&dt=&em=1&Si=1" loading="lazy" />
      <div className="booking-help"><h2>Already booked?</h2><p>OnceHub sends the booking confirmation. Continue to the consultation preparation page after your appointment is confirmed.</p><Link className="button" href="/thanks-whats-next">See what happens next</Link></div>
    </section>
  </main>;
}
