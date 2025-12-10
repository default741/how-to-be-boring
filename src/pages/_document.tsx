import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
    return (
        <Html lang="en">
            <Head>
                {/* Security Headers (Meta-based for Static Exports) */}
                <meta httpEquiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-eval' 'unsafe-inline' https://va.vercel-scripts.com; style-src 'self' 'unsafe-inline'; img-src 'self' blob: data:; font-src 'self' data:; connect-src 'self';" />
                <meta httpEquiv="X-Content-Type-Options" content="nosniff" />
                <meta name="referrer" content="strict-origin-when-cross-origin" />
                <meta name="theme-color" content="#0a0a0a" />

                {/* Global SEO & Social */}
                <meta property="og:type" content="website" />
                <meta property="og:site_name" content="Abde Manaaf Ghadiali" />
                <meta property="og:locale" content="en_US" />

                {/* Twitter */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:creator" content="@default741" />

                {/* Icons */}
                <link rel="icon" href="/how-to-be-boring/favicon.ico" />
            </Head>
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
