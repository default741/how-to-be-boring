import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

interface MediumPost {
    title: string;
    url: string;
}

interface LocalPost {
    slug: string;
    title: string;
    date: string;
    description: string;
    readingTime: string;
}

interface BlogProps {
    mediumPosts: MediumPost[];
    localPosts: LocalPost[];
}

export default function Blog({ mediumPosts, localPosts }: BlogProps) {
    return (
        <>
            <Head>
                <title>Blog | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Thoughts on Machine Learning, Quantum Computing, and Life." />
            </Head>
            <div className="container mx-auto py-24 px-4 max-w-5xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-16 text-center">Writing & Thoughts</h1>

                <div className="grid md:grid-cols-2 gap-12 lg:gap-24">
                    <section>
                        <h2 className="text-xl font-bold text-slate-200 mb-8 border-b border-white/10 pb-4">
                            Medium Stories
                        </h2>
                        <div className="space-y-6">
                            {mediumPosts.map((post) => (
                                <a
                                    key={post.url}
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block group"
                                >
                                    <h3 className="text-lg font-medium text-slate-300 group-hover:text-blue-400 transition-colors mb-2">
                                        {post.title}
                                    </h3>
                                    <div className="flex items-center gap-2 text-slate-500 text-xs font-mono uppercase tracking-wider group-hover:text-slate-400">
                                        <span>Read on Medium</span>
                                        <span className="opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-xl font-bold text-slate-200 mb-8 border-b border-white/10 pb-4">
                            Dev Log
                        </h2>
                        <div className="space-y-8">
                            {localPosts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="block group">
                                    <div className="flex justify-between items-baseline mb-2">
                                        <h3 className="text-lg font-medium text-slate-300 group-hover:text-violet-400 transition-colors">
                                            {post.title}
                                        </h3>
                                    </div>
                                    <p className="text-slate-400 text-sm leading-relaxed line-clamp-2 mb-2">{post.description}</p>
                                    <div className="flex items-center gap-3 text-xs font-mono text-slate-600">
                                        <span>{post.date}</span>
                                        <span>•</span>
                                        <span>{post.readingTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

export async function getStaticProps() {
    const mediumPosts = [
        {
            title: "Beyond the Guesswork: How Probability Shapes Data-Driven Decisions",
            url: "https://medium.com/@abdemanaaf.ghadiali.1998/beyond-the-guesswork-how-probability-shapes-data-driven-decisions-dcab0c5d2471"
        },
        {
            title: "Making Sense of Numbers: Business Analytics 101",
            url: "https://medium.com/@abdemanaaf.ghadiali.1998/making-sense-of-numbers-business-analytics-101-4cbb1ef42d54"
        },
        {
            title: "Demystifying the Quantum Part 1 — A Dive into Qubits and Beyond",
            url: "https://medium.com/@abdemanaaf.ghadiali.1998/demystifying-the-quantum-part-1-a-dive-into-qubits-and-beyond-79eba5e239a6"
        }
    ];

    const postsDirectory = path.join(process.cwd(), 'content', 'posts');
    let localPosts: LocalPost[] = [];

    if (fs.existsSync(postsDirectory)) {
        const fileNames = fs.readdirSync(postsDirectory);
        localPosts = fileNames.map((fileName) => {
            const slug = fileName.replace(/\.md$/, '');
            const fullPath = path.join(postsDirectory, fileName);
            const fileContents = fs.readFileSync(fullPath, 'utf8');
            const { data, content } = matter(fileContents);

            // Calculate Reading Time (approx 200 words per minute)
            const wordCount = content.split(/\s+/g).length;
            const readingTime = Math.ceil(wordCount / 200) + ' min read';

            return {
                slug,
                readingTime,
                ...(data as { title: string; date: string; description: string }),
            };
        });
    }

    return {
        props: {
            mediumPosts,
            localPosts,
        },
    };
}
