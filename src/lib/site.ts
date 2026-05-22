export const siteConfig = {
    name: 'Abde Manaaf Ghadiali',
    title: 'Abde Manaaf Ghadiali | ML Engineer',
    description: 'Machine Learning engineer and quantum computing researcher building production systems with research discipline.',
    siteUrl: 'https://default741.github.io',
    basePath: '/how-to-be-boring',
    socialImage: '/images/pic.jpg',
    location: 'Arlington, VA',
    email: 'abdemanaaf.ghadiali.1998@gmail.com',
    twitter: '@default741',
    links: {
        github: 'https://github.com/default741',
        linkedin: 'https://www.linkedin.com/in/abde-manaaf-ghadiali/',
        medium: 'https://medium.com/@abdemanaaf.ghadiali.1998/',
    },
} as const;

export function withBasePath(path: string) {
    if (/^https?:\/\//.test(path)) {
        return path;
    }

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${siteConfig.basePath}${normalizedPath}`;
}

export function absoluteUrl(path = '/') {
    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${siteConfig.siteUrl}${withBasePath(normalizedPath)}`;
}