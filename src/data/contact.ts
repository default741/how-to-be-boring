import { siteConfig } from '@/lib/site';

export type ContactIcon = 'mail' | 'linkedin' | 'github' | 'medium';

export interface ContactMethod {
    title: string;
    value: string;
    href: string;
    note: string;
    accent: string;
    icon: ContactIcon;
    primary?: boolean;
}

export const contactMethods: ContactMethod[] = [
    {
        title: 'Email',
        value: siteConfig.email,
        href: `mailto:${siteConfig.email}`,
        note: 'Best for role discussions and serious collaboration.',
        accent: 'from-blue-500 to-cyan-500',
        icon: 'mail',
        primary: true,
    },
    {
        title: 'LinkedIn',
        value: 'Connect professionally',
        href: siteConfig.links.linkedin,
        note: 'Career conversations, network-building, and updates.',
        accent: 'from-blue-600 to-sky-400',
        icon: 'linkedin',
    },
    {
        title: 'GitHub',
        value: 'Browse public work',
        href: siteConfig.links.github,
        note: 'Repositories, experiments, and implementation details.',
        accent: 'from-slate-400 to-slate-100',
        icon: 'github',
    },
    {
        title: 'Medium',
        value: 'Read technical writing',
        href: siteConfig.links.medium,
        note: 'Long-form writing on ML, systems, and adjacent topics.',
        accent: 'from-emerald-400 to-green-600',
        icon: 'medium',
    },
];

export const collaborationTopics = [
    'Machine learning engineering roles',
    'Applied AI product work',
    'Research-to-production systems',
    'Technical writing and education',
];