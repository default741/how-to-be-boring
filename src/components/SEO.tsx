import Head from 'next/head';

interface SEOProps {
    title?: string;
    description?: string;
    image?: string;
}

export default function SEO({
    title = "Abde Manaaf Ghadiali | ML Engineer",
    description = "Machine Learning Engineer & Quantum Computing Researcher building intelligent systems.",
    image = "/images/pic.jpg"
}: SEOProps) {
    const siteUrl = "https://how-to-be-boring.vercel.app"; // Placeholder domain
    const fullImage = image.startsWith('http') ? image : `${siteUrl}${image}`;

    return (
        <Head>
            <title>{title}</title>
            <meta name="description" content={description} />
            <meta name="viewport" content="width=device-width, initial-scale=1" />

            {/* Open Graph */}
            <meta property="og:type" content="website" />
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:image" content={fullImage} />

            {/* Twitter */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:image" content={fullImage} />
        </Head>
    );
}
