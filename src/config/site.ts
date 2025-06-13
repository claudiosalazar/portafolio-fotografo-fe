import { SiteConfig } from '@/types';

export const siteConfig: SiteConfig = {
  name: 'Nikolas Canons',
  description:
    'Portafolio de Nikolas Canons, un sitio web de ejemplo construido con Next.js, Bootstrap y TypeScript.',
  url: 'https://nk.claudiosalazar.cl',
  ogImage: 'https://nk.claudiosalazar.cl/images/opengraph.png',
  author: {
    name: 'Nikolas Canons',
    url: 'https://nk.claudiosalazar.cl',
    twitter: '@nikolascanons',
  },
  keywords: [
    'Nikon',
    'Canons',
    'Nikolas',
    'Portfolio',
    'Portfolio de Nikolas Canons',
    'Next.js',
    'Portfolio',
    'Bootstrap',
    'TypeScript',
    'Template',
    'Responsive',
    'SEO',
    'Photography',
    'Fotografía',
  ],
};

export const navItems = [
  {
    title: 'Inicio',
    href: '/',
  },
  {
    title: 'Biografía',
    href: '/biografia',
  },
  {
    title: 'Galería',
    href: '/galeria',
  },
  {
    title: 'Blog',
    href: '/blog',
  },
];
