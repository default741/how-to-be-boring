import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

import { absoluteUrl } from '@/lib/site';
import { getAllPostSlugs, getPostData } from '@/lib/blog';

export async function generateStaticParams() {
    return getAllPostSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;

    try {
        const post = getPostData(slug);

        return {
            title: post.title,
            description: post.description,
            alternates: {
                canonical: absoluteUrl(`/blog/${slug}`),
            },
        };
    } catch {
        return { title: 'Post not found' };
    }
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;

    let post;

    try {
        post = getPostData(slug);
    } catch {
        notFound();
    }

    return (
        <div className="mx-auto w-full max-w-4xl px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
            <Link
                href="/blog"
                className="mb-8 inline-flex items-center gap-2 text-sm text-foreground/58 transition hover:text-foreground"
            >
                <ArrowLeft className="h-4 w-4" />
                All posts
            </Link>

            <article className="space-y-10">
                <header className="space-y-6 border-b border-border/70 pb-10">
                    <div className="flex flex-wrap gap-4 font-mono text-xs uppercase tracking-[0.22em] text-foreground/45">
                        <span className="flex items-center gap-2">
                            <Calendar className="h-3.5 w-3.5" />
                            {post.date}
                        </span>
                        <span className="flex items-center gap-2">
                            <Clock className="h-3.5 w-3.5" />
                            {post.readingTime}
                        </span>
                    </div>

                    <h1 className="text-balance text-4xl font-semibold leading-tight sm:text-5xl">
                        {post.title}
                    </h1>

                    {post.description ? (
                        <p className="max-w-3xl text-lg leading-8 text-foreground/68">{post.description}</p>
                    ) : null}
                </header>

                <div className="panel px-6 py-8 sm:px-10 sm:py-10">
                    <div className="prose prose-neutral max-w-none dark:prose-invert prose-headings:font-semibold prose-headings:tracking-tight prose-headings:text-foreground prose-p:leading-8 prose-p:text-foreground/80 prose-li:text-foreground/78 prose-strong:text-foreground prose-a:text-primary prose-code:text-primary prose-pre:rounded-2xl prose-pre:border prose-pre:border-border/60 prose-pre:bg-surface-elevated prose-hr:border-border/60">
                        <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }} />
                    </div>
                </div>
            </article>
        </div>
    );
}
