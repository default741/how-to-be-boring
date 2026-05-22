import type { Metadata, Viewport } from 'next';
import { Fira_Code, Inter, Newsreader } from 'next/font/google';
import type { ReactNode } from 'react';

import SiteFooter from '@/components/site/SiteFooter';
import SiteHeader from '@/components/site/SiteHeader';
import ThemeProvider from '@/components/theme/ThemeProvider';
import { absoluteUrl, siteConfig, withBasePath } from '@/lib/site';

import '../styles/globals.css';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

const newsreader = Newsreader({
    subsets: ['latin'],
    variable: '--font-display',
    weight: ['400', '500', '600', '700'],
});

const firaCode = Fira_Code({
    subsets: ['latin'],
    variable: '--font-fira-code',
});

const contentSecurityPolicy = [
    "default-src 'self';",
    process.env.NODE_ENV === 'development'
        ? "script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com;"
        : "script-src 'self' 'unsafe-inline' https://va.vercel-scripts.com;",
    "style-src 'self' 'unsafe-inline';",
    "img-src 'self' blob: data: https:;",
    "font-src 'self' data:;",
    "connect-src 'self';",
    "base-uri 'self';",
    "form-action 'self';",
].join(' ');

export const metadata: Metadata = {
    metadataBase: new URL(siteConfig.siteUrl),
    title: {
        default: siteConfig.title,
        template: `%s | ${siteConfig.name}`,
    },
    description: siteConfig.description,
    alternates: {
        canonical: absoluteUrl('/'),
    },
    openGraph: {
        type: 'website',
        url: absoluteUrl('/'),
        title: siteConfig.title,
        description: siteConfig.description,
        siteName: siteConfig.name,
        images: [
            {
                url: absoluteUrl(siteConfig.socialImage),
                width: 1200,
                height: 630,
                alt: siteConfig.name,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        creator: siteConfig.twitter,
        title: siteConfig.title,
        description: siteConfig.description,
        images: [absoluteUrl(siteConfig.socialImage)],
    },
};

export const viewport: Viewport = {
    colorScheme: 'dark light',
    themeColor: [
        { media: '(prefers-color-scheme: dark)', color: '#111113' },
        { media: '(prefers-color-scheme: light)', color: '#f3efe8' },
    ],
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
            <head>
                <meta
                    httpEquiv="Content-Security-Policy"
                    content={contentSecurityPolicy}
                />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="referrer" content="strict-origin-when-cross-origin" />
                <link rel="icon" href={withBasePath('/favicon.ico')} />
            </head>
            <body className={`${inter.variable} ${newsreader.variable} ${firaCode.variable} font-sans`}>
                <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
                    <div className="relative min-h-screen overflow-x-clip">
                        <div className="relative z-10 flex min-h-screen flex-col">
                            <SiteHeader />
                            <main className="flex-1">{children}</main>
                            <SiteFooter />
                        </div>
                    </div>
                </ThemeProvider>
            </body>
        </html>
    );
}