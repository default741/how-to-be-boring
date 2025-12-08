import Head from 'next/head';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

interface PostData {
    slug: string;
    title: string;
    date: string;
    description: string;
    contentHtml: string;
}

interface BlogPostProps {
    postData: PostData;
}

export default function BlogPost({ postData }: BlogPostProps) {
    return (
        <>
            <Head>
                <title>{postData.title} | Blog</title>
                <meta name="description" content={postData.description} />
            </Head>
            <div className="container mx-auto py-24 px-4 max-w-3xl">
                <article className="prose prose-invert prose-lg max-w-none prose-headings:font-bold prose-headings:text-slate-100 prose-p:text-slate-300 prose-a:text-blue-400 prose-a:no-underline hover:prose-a:underline prose-code:text-accent prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10">
                    <h1 className="!mb-4 !text-4xl md:!text-5xl bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent">{postData.title}</h1>
                    <div className="text-slate-500 font-mono text-sm !mb-12 border-b border-white/10 pb-6">{postData.date}</div>

                    <div
                        dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
                    />
                </article>
            </div>
        </>
    );
}

export async function getStaticPaths() {
    const postsDirectory = path.join(process.cwd(), 'content', 'posts');
    let paths: { params: { slug: string } }[] = [];

    if (fs.existsSync(postsDirectory)) {
        const fileNames = fs.readdirSync(postsDirectory);
        paths = fileNames.map((fileName) => {
            return {
                params: {
                    slug: fileName.replace(/\.md$/, ''),
                },
            };
        });
    }

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const postsDirectory = path.join(process.cwd(), 'content', 'posts');
    const fullPath = path.join(postsDirectory, `${params.slug}.md`);

    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const { data, content } = matter(fileContents);

    const processedContent = await remark()
        .use(html)
        .process(content);
    const contentHtml = processedContent.toString();

    return {
        props: {
            postData: {
                slug: params.slug,
                contentHtml,
                ...data,
            },
        },
    };
}
