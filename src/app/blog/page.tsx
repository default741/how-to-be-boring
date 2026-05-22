import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

import PageIntro from '@/components/site/PageIntro';
import { getAllPostMeta, mediumPosts } from '@/lib/blog';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Blog',
    description: 'Writing on machine learning engineering, quantum computing, and production software.',
    alternates: {
        canonical: absoluteUrl('/blog'),
    },
};

export default function BlogIndexPage() {
    const localPosts = getAllPostMeta();
    const mediumCount = mediumPosts.length;
    const devLogCount = localPosts.length;

    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
            <PageIntro
                eyebrow="Writing"
                title="Clear writing is clear thinking made visible."
                description="Technical essays, dev log notes, and long-form explanations on ML engineering, quantum computing, and production software — without fluff."
            />

            <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-surface px-4 py-3 text-sm text-foreground/70">
                    <span>External essays</span>
                    <span className="text-base font-semibold text-foreground">{mediumCount}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-surface px-4 py-3 text-sm text-foreground/70">
                    <span>Dev log posts</span>
                    <span className="text-base font-semibold text-foreground">{devLogCount}</span>
                </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-2 lg:gap-8">
                <section className="panel p-6 sm:p-8">
                    <div className="border-b border-border/70 pb-5">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/45">External essays</p>
                        <h2 className="mt-3 text-2xl font-semibold">Medium stories</h2>
                        <p className="mt-2 max-w-xl text-sm leading-7 text-foreground/66">
                            Longer-form writing where I unpack systems, product decisions, and the applied side of machine learning work.
                        </p>
                    </div>

                    <div className="mt-6 grid gap-4">
                        {mediumPosts.map((post, index) => (
                            <a
                                key={post.url}
                                href={post.url}
                                target="_blank"
                                rel="noreferrer"
                                className="group rounded-2xl border border-border/70 bg-background/45 p-5 transition hover:border-primary/25 hover:bg-surface-elevated"
                            >
                                <div className="flex items-start justify-between gap-4">
                                    <div className="space-y-3">
                                        <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/40">
                                            Essay {String(index + 1).padStart(2, '0')}
                                        </p>
                                        <h3 className="text-lg font-semibold leading-7 text-foreground transition group-hover:text-primary">
                                            {post.title}
                                        </h3>
                                        <p className="text-sm leading-7 text-foreground/63">Read on Medium</p>
                                    </div>
                                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                                </div>
                            </a>
                        ))}
                    </div>
                </section>

                <section className="panel p-6 sm:p-8">
                    <div className="border-b border-border/70 pb-5">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/45">In-repo notes</p>
                        <h2 className="mt-3 text-2xl font-semibold">Dev log</h2>
                        <p className="mt-2 max-w-xl text-sm leading-7 text-foreground/66">
                            Shorter notes, build logs, and explanations tied directly to the site and the surrounding engineering work.
                        </p>
                    </div>

                    {localPosts.length === 0 ? (
                        <p className="mt-6 text-sm text-foreground/55">No posts yet. Check back soon.</p>
                    ) : (
                        <div className="mt-6 grid gap-4">
                            {localPosts.map((post, index) => (
                                <Link
                                    key={post.slug}
                                    href={`/blog/${post.slug}`}
                                    className="group rounded-2xl border border-border/70 bg-background/45 p-5 transition hover:border-primary/25 hover:bg-surface-elevated"
                                >
                                    <div className="flex items-start justify-between gap-4">
                                        <div className="space-y-3">
                                            <p className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/40">
                                                Post {String(index + 1).padStart(2, '0')}
                                            </p>
                                            <h3 className="text-lg font-semibold leading-7 text-foreground transition group-hover:text-primary">
                                                {post.title}
                                            </h3>
                                        </div>
                                        <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                                    </div>
                                    <p className="line-clamp-2 text-sm leading-7 text-foreground/65">
                                        {post.description}
                                    </p>
                                    <div className="flex gap-4 border-t border-border/60 pt-4 font-mono text-xs uppercase tracking-[0.16em] text-foreground/45">
                                        <span>{post.date}</span>
                                        <span>·</span>
                                        <span>{post.readingTime}</span>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    )}
                </section>
            </div>
        </section>
    );
}
