import type { Metadata } from 'next';
import Script from 'next/script';
import { GeistSans } from 'geist/font/sans';
import { Header, Footer } from '@/components/SiteChrome';
import { TasteMotion } from '@/components/TasteMotion';
import { site } from '@/lib/site';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(`https://${site.domain}`),
  title: { default: `${site.name} | Specialist remote staff`, template: `%s | ${site.name}` },
  description: site.heroBody,
  icons: { icon: '/logo.svg', shortcut: '/logo.svg', apple: '/logo.svg' },
  openGraph: { type: 'website', siteName: site.name, images: [site.heroImage] },
  alternates: { canonical: '/' }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html lang="en" data-design={site.design} className={GeistSans.variable}><body style={{ '--primary': site.primary, '--secondary': site.secondary, '--accent': site.accent, '--canvas': site.canvas, '--ink': site.ink, '--display': site.displayFont, '--body': 'var(--font-geist-sans)' } as React.CSSProperties}>
    <a className="skip-link" href="#main-content">Skip to main content</a>
    <Header /><div id="main-content" tabIndex={-1}>{children}</div><Footer /><TasteMotion />
    <Script id="acr-tracker-config" strategy="beforeInteractive">{`window.ACR_TRACKER_CONFIG={siteId:'${site.siteId}',endpoint:'/ingest/track',debug:false};`}</Script>
    <Script src="https://acrtracking.stealthagents.us/v1/tracker.js" strategy="afterInteractive" />
    <Script
      id="databull-analytics"
      src="https://databull.stealthagents.us/js/script.js"
      data-website-id="dc_n18z6c5ch0qkhp"
      data-domain="accountsreceivablespecialist.com"
      strategy="afterInteractive"
    />
  </body></html>;
}
