import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://adityapro.online'),
  title: 'Aditya Deshmukh | Full-Stack Web and Mobile Developer',
  description:
    'Full-Stack Web and Mobile Developer specializing in NestJS backend services, AWS infrastructure, Next.js web applications, and React Native (Expo) mobile apps.',
  keywords: [
    'Aditya Deshmukh',
    'Full-Stack Developer',
    'NestJS Developer',
    'React Native Developer',
    'Next.js Portfolio',
    'AWS EC2 RDS',
    'PostgreSQL',
    'TypeScript Developer',
    'Remote Software Engineer India',
  ],
  authors: [{ name: 'Aditya Deshmukh', url: 'https://adityapro.online' }],
  creator: 'Aditya Deshmukh',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Aditya Deshmukh | Full-Stack Web and Mobile Developer',
    description:
      'Building dependable backend services with NestJS and Node.js, managing AWS infrastructure, and shipping web and mobile applications with Next.js and React Native.',
    url: 'https://adityapro.online',
    siteName: 'Aditya Deshmukh Portfolio',
    locale: 'en_US',
    type: 'profile',
    firstName: 'Aditya',
    lastName: 'Deshmukh',
    username: 'adi-de9',
    gender: 'male',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Aditya Deshmukh | Full-Stack Web and Mobile Developer',
    description:
      'Building dependable backend services, cloud infrastructure, and web/mobile apps with Next.js, NestJS, and React Native.',
    creator: '@adityadesh937',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.ico',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Person',
      '@id': 'https://adityapro.online/#person',
      name: 'Aditya Deshmukh',
      url: 'https://adityapro.online',
      jobTitle: 'Full-Stack Web and Mobile Developer',
      worksFor: {
        '@type': 'Organization',
        name: 'Quick Events',
      },
      alumniOf: {
        '@type': 'EducationalOrganization',
        name: 'Indira Gandhi National Open University',
        alternateName: 'IGNOU',
      },
      sameAs: [
        'https://github.com/adi-de9',
        'https://linkedin.com/in/adi-de9',
        'https://x.com/adityadesh937',
        'https://adityafsd.online',
      ],
      knowsAbout: [
        'NestJS',
        'React Native',
        'Next.js',
        'AWS EC2',
        'AWS RDS',
        'PostgreSQL',
        'TypeScript',
        'Node.js',
        'Docker',
        'Three.js',
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://adityapro.online/#website',
      url: 'https://adityapro.online',
      name: 'Aditya Deshmukh Portfolio',
      publisher: {
        '@id': 'https://adityapro.online/#person',
      },
    },
    {
      '@type': 'ProfilePage',
      '@id': 'https://adityapro.online/#webpage',
      url: 'https://adityapro.online',
      name: 'Aditya Deshmukh | Full-Stack Web and Mobile Developer',
      isPartOf: {
        '@id': 'https://adityapro.online/#website',
      },
      about: {
        '@id': 'https://adityapro.online/#person',
      },
      description:
        'Portfolio of Aditya Deshmukh, Full-Stack Web and Mobile Developer. Building backend services with NestJS, AWS infrastructure, and shipping web and mobile apps with Next.js and React Native.',
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@400;500;600&family=Plus+Jakarta+Sans:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-editorial-grid font-sans antialiased pb-28 lg:pb-16 text-alabaster bg-obsidian selection:bg-vermilion selection:text-white">
        {/* Subtle Paper Grain Texture Overlay */}
        <svg
          className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.028]"
          xmlns="http://www.w3.org/2000/svg"
        >
          <filter id="studio-grain">
            <feTurbulence
              type="fractalNoise"
              baseFrequency="0.8"
              numOctaves={3}
              stitchTiles="stitch"
            />
          </filter>
          <rect width="100%" height="100%" filter="url(#studio-grain)" />
        </svg>

        {children}
      </body>
    </html>
  );
}
