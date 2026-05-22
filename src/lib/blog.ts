import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

export interface PostMeta {
    slug: string;
    title: string;
    date: string;
    description: string;
    readingTime: string;
}

export interface PostData extends PostMeta {
    content: string;
}

export interface MediumPost {
    title: string;
    url: string;
}

export const mediumPosts: MediumPost[] = [
    {
        title: 'Beyond the Guesswork: How Probability Shapes Data-Driven Decisions',
        url: 'https://medium.com/@abdemanaaf.ghadiali.1998/beyond-the-guesswork-how-probability-shapes-data-driven-decisions-dcab0c5d2471',
    },
    {
        title: 'Making Sense of Numbers: Business Analytics 101',
        url: 'https://medium.com/@abdemanaaf.ghadiali.1998/making-sense-of-numbers-business-analytics-101-4cbb1ef42d54',
    },
    {
        title: 'Demystifying the Quantum Part 1 — A Dive into Qubits and Beyond',
        url: 'https://medium.com/@abdemanaaf.ghadiali.1998/demystifying-the-quantum-part-1-a-dive-into-qubits-and-beyond-79eba5e239a6',
    },
];

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getAllPostMeta(): PostMeta[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    return fs
        .readdirSync(postsDirectory)
        .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
        .map((fileName) => {
            const slug = fileName.replace(/\.(mdx|md)$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            const words = content.split(/\s+/g).length;
            const readingTime = `${Math.max(1, Math.ceil(words / 200))} min read`;

            return {
                slug,
                readingTime,
                title: data.title ?? slug,
                date: data.date ?? '',
                description: data.description ?? '',
            };
        })
        .sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostData(slug: string): PostData {
    const candidates = [
        path.join(postsDirectory, `${slug}.mdx`),
        path.join(postsDirectory, `${slug}.md`),
    ];

    const fullPath = candidates.find((p) => fs.existsSync(p));

    if (!fullPath) {
        throw new Error(`Post not found: ${slug}`);
    }

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const words = content.split(/\s+/g).length;
    const readingTime = `${Math.max(1, Math.ceil(words / 200))} min read`;

    return {
        slug,
        content,
        readingTime,
        title: data.title ?? slug,
        date: data.date ?? '',
        description: data.description ?? '',
    };
}

export function getAllPostSlugs(): string[] {
    if (!fs.existsSync(postsDirectory)) {
        return [];
    }

    return fs
        .readdirSync(postsDirectory)
        .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
        .map((file) => file.replace(/\.(mdx|md)$/, ''));
}
