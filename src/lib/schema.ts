import { SITE } from '../site';

const abs = (p: string) => new URL(p, SITE.siteUrl).href;

export const organization = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': abs('/#org'),
  name: SITE.brand,
  url: SITE.siteUrl,
  logo: abs('/apple-touch-icon.png'),
  email: SITE.email,
  contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: SITE.email, availableLanguage: ['English'] },
});

export const website = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': abs('/#website'),
  name: SITE.brand,
  url: SITE.siteUrl,
  publisher: { '@id': abs('/#org') },
});

export const breadcrumbs = (items: { name: string; path: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [{ name: 'Home', path: '/' }, ...items].map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: abs(it.path),
  })),
});

export const faqPage = (qa: { q: string; a: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: qa.map(({ q, a }) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
});

export const service = (o: { name: string; description: string; path: string; audience?: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  name: o.name,
  description: o.description,
  url: abs(o.path),
  serviceType: 'Custom business software development',
  provider: { '@id': abs('/#org') },
  ...(o.audience ? { audience: { '@type': 'BusinessAudience', name: o.audience } } : {}),
});

export const softwareApp = (o: { name: string; description: string; url: string; category: string }) => ({
  '@context': 'https://schema.org',
  '@type': 'SoftwareApplication',
  name: o.name,
  description: o.description,
  url: o.url,
  applicationCategory: o.category,
  operatingSystem: 'Web',
  creator: { '@id': abs('/#org') },
});
