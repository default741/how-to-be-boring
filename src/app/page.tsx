import type { Metadata } from 'next';

import HomeHero from '@/components/site/HomeHero';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Portfolio',
    description: 'Selected work, writing, and experience from Abde Manaaf Ghadiali.',
    alternates: {
        canonical: absoluteUrl('/'),
    },
};

export default function HomePage() {
    return <HomeHero />;
}