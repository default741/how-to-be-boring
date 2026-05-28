export interface AwardCredential {
    title: string;
    issuer: string;
    type: 'image' | 'pdf';
    filename: string;
    accent: string;
    label: string;
}

export interface CertificateCarouselSlide {
    title: string;
    filename: string;
}

export interface CertificateCarousel {
    title: string;
    issuer: string;
    label: string;
    description: string;
    slides: CertificateCarouselSlide[];
}

export const awardCredentials: AwardCredential[] = [
    {
        title: 'Atlas Award',
        issuer: 'Thoucentric',
        type: 'image',
        filename: 'atlas-award.jpg',
        accent: 'from-yellow-400 to-orange-500',
        label: 'Recognition',
    },
    {
        title: 'Neon Award',
        issuer: 'Thoucentric',
        type: 'image',
        filename: 'neon-award.png',
        accent: 'from-cyan-400 to-blue-500',
        label: 'Recognition',
    },
    {
        title: 'Intro to Programming',
        issuer: 'Kaggle',
        type: 'image',
        filename: 'intro-to-programming.png',
        accent: 'from-sky-400 to-blue-500',
        label: 'Achievement',
    },
    {
        title: 'Thoucentric Internship',
        issuer: 'Thoucentric',
        type: 'pdf',
        filename: 'thoucentric-internship.pdf',
        accent: 'from-emerald-400 to-teal-500',
        label: 'Certificate',
    },
    {
        title: 'Data Science Bootcamp 2022',
        issuer: 'Udemy',
        type: 'pdf',
        filename: 'data-science-bootcamp.pdf',
        accent: 'from-red-400 to-rose-500',
        label: 'Certificate',
    },
    {
        title: 'PyTorch for Deep Learning',
        issuer: 'ZTM Academy',
        type: 'pdf',
        filename: 'pytorch-bootcamp.pdf',
        accent: 'from-orange-400 to-red-500',
        label: 'Certificate',
    },
    {
        title: 'ML Model Deployment',
        issuer: 'Udemy',
        type: 'pdf',
        filename: 'ml-deployment.pdf',
        accent: 'from-blue-400 to-indigo-500',
        label: 'Certificate',
    },
    {
        title: 'Python Basic',
        issuer: 'HackerRank',
        type: 'pdf',
        filename: 'python-basic.pdf',
        accent: 'from-green-400 to-emerald-500',
        label: 'Certificate',
    },
    {
        title: 'Core Java Training',
        issuer: 'Internshala',
        type: 'pdf',
        filename: 'core-java-training.pdf',
        accent: 'from-orange-600 to-red-600',
        label: 'Certificate',
    },
];

export const certificateCarousels: CertificateCarousel[] = [
    {
        title: 'SQL Certification Track',
        issuer: 'HackerRank',
        label: 'Certificate Series',
        description: 'Grouped view of the HackerRank SQL certifications across the basic, intermediate, and advanced levels.',
        slides: [
            {
                title: 'SQL (Basic)',
                filename: 'sql_basic certificate_page.jpg',
            },
            {
                title: 'SQL (Intermediate)',
                filename: 'sql_intermediate certificate.jpg',
            },
            {
                title: 'SQL (Advanced)',
                filename: 'sql_advanced certificate.jpg',
            },
        ],
    },
];