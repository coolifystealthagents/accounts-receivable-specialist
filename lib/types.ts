export type ArticleSection = { heading: string; paragraphs: string[] };
export type ServiceFAQ = { q: string; a: string };
export type Service = {
  slug: string;
  name: string;
  short: string;
  audience: string;
  problem: string;
  scope: string[];
  inputs: string[];
  workflow: string[];
  outputs: string[];
  boundaries: string[];
  quality: string[];
  scenarios: { title: string; detail: string }[];
  faq: ServiceFAQ[];
  related: string[];
};
export type BlogPost = { slug: string; title: string; description: string; category: string; publishedAt: string; updatedAt?: string; readTime: string; thumbnail?: string; sections: ArticleSection[]; faq: ServiceFAQ[]; internalService: string; internalSibling: string; source: { label: string; url: string } };
export type ResearchPost = { slug: string; title: string; summary: string; cluster: string; publishedAt: string; updatedAt?: string; readTime?: string; finding: string; thumbnail?: string; sections?: ArticleSection[]; sources: { label: string; url: string }[] };
export type SiteConfig = {
  name: string; domain: string; siteId: string; niche: string; audience: string; design: string;
  eyebrow: string; hero: string; heroAccent: string; heroBody: string; manifesto: string;
  primary: string; secondary: string; accent: string; canvas: string; ink: string;
  displayFont: string; bodyFont: string; heroImage: string; heroAlt: string;
  services: Service[]; categories: string[]; principles: string[]; sources: { label: string; url: string }[];
};
