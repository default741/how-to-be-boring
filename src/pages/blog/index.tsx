import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { FaMedium, FaCode } from 'react-icons/fa6';

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
            <div className="container mx-auto py-24 px-4 max-w-6xl">
                <div className="text-center mb-24">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-blue-400 via-indigo-500 to-violet-400 bg-clip-text text-transparent mb-6">
                        Writing & Thoughts.
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
                        Deep dives into <span className="text-white">Quantum mechanics</span>, practical <span className="text-white">ML engineering</span>, and the occasional rant about software complexity.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* Medium Section */}
                    <section className="relative">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-white/10 rounded-xl border border-white/10">
                                <FaMedium className="text-white text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Medium Stories</h2>
                        </div>

                        <div className="grid gap-6">
                            {mediumPosts.map((post) => (
                                <a
                                    key={post.url}
                                    href={post.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group block p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
                                >
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 blur-[60px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-white/10 transition-colors"></div>

                                    <div className="relative z-10">
                                        <h3 className="text-xl font-bold text-slate-200 group-hover:text-white mb-3 leading-snug">
                                            {post.title}
                                        </h3>
                                        <div className="flex items-center justify-between mt-6">
                                            <span className="text-xs font-mono uppercase tracking-wider text-slate-500 group-hover:text-slate-400 flex items-center gap-2">
                                                Read on Medium <span className="text-lg">↗</span>
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>

                    {/* Local Dev Log Section */}
                    <section className="relative">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-violet-500/10 rounded-xl border border-violet-500/20">
                                <FaCode className="text-violet-400 text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">Dev Log</h2>
                        </div>

                        <div className="grid gap-6">
                            {localPosts.map((post) => (
                                <Link key={post.slug} href={`/blog/${post.slug}`} className="group block p-6 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/10 hover:border-violet-500/30 hover:shadow-2xl hover:shadow-violet-500/10 transition-all duration-300 relative overflow-hidden transform-gpu hover:-translate-y-1">
                                    <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="relative z-10">
                                        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-2 mb-3">
                                            <h3 className="text-xl font-bold text-slate-100 group-hover:text-violet-300 transition-colors">
                                                {post.title}
                                            </h3>
                                        </div>

                                        <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-2">
                                            {post.description}
                                        </p>

                                        <div className="flex items-center gap-4 text-xs font-mono text-violet-300/80">
                                            <span className="bg-violet-500/10 px-2 py-1 rounded border border-violet-500/20">{post.date}</span>
                                            <span>{post.readingTime}</span>
                                        </div>
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
