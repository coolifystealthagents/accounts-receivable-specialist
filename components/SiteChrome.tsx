import Image from 'next/image';
import Link from 'next/link';
import { site } from '@/lib/site';
import { nav } from '@/lib/content';

function ParentBrand({ inverse = false }: { inverse?: boolean }) {
  return <a className={`parent-brand${inverse ? ' inverse' : ''}`} href="https://stealthagents.com/" rel="noopener noreferrer">
    <span>Powered by StealthAgents</span>
    <Image src="/brand/stealth-agents-logo-black.png" alt="Stealth Agents" width={112} height={30} />
  </a>;
}

export function Header() {
  return <header data-site-header="sticky" className="site-header">
    <Link className="brand" href="/" aria-label={`${site.name} home`}><Image src="/logo.svg" alt="" width={38} height={38} /><span>{site.name}</span></Link>
    <nav aria-label="Primary navigation">{nav.map(item => <Link className={item.href === '/contact-us' ? 'nav-cta' : undefined} key={item.href} href={item.href}>{item.label}</Link>)}</nav>
    <ParentBrand />
  </header>;
}

export function Footer() {
  return <footer data-site-footer="true">
    <div className="footer-identity"><Link className="brand inverse" href="/"><Image src="/logo.svg" alt="" width={44} height={44} /><span>{site.name}</span></Link><p>Specialist remote staff for {site.audience}.</p><ParentBrand inverse /></div>
    <div data-footer-menu="true" className="footer-links" aria-label="Footer navigation">{nav.map(item => <Link key={item.href} href={item.href}>{item.label}</Link>)}<Link href="/about">About</Link><Link href="/blog">Blog</Link><Link href="/research">Research</Link><Link href="/privacy">Privacy</Link><Link href="/terms">Terms</Link></div>
    <section className="site-parent-company" aria-label="Powered by StealthAgents"><a className="site-parent-logo" href="https://stealthagents.com/" aria-label="Visit StealthAgents"><img src="/stealthagents-parent-logo.png" alt="StealthAgents" width="158" height="53" loading="lazy" /></a><div><h2>Powered by StealthAgents</h2><p>StealthAgents recruits and supports the remote professionals behind our services, from matching and onboarding to ongoing team support.</p><a className="site-parent-link" href="https://stealthagents.com/">Explore StealthAgents ↗</a></div></section><p className="copyright">© {new Date().getFullYear()} {site.name}</p>
  </footer>;
}
