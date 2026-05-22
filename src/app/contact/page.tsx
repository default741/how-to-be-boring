import type { Metadata } from 'next';
import { ArrowUpRight, BriefcaseBusiness, FolderGit2, Mail, NotebookPen } from 'lucide-react';

import PageIntro from '@/components/site/PageIntro';
import { collaborationTopics, contactMethods, type ContactIcon } from '@/data/contact';
import { absoluteUrl } from '@/lib/site';

const iconMap: Record<ContactIcon, typeof Mail> = {
    mail: Mail,
    linkedin: BriefcaseBusiness,
    github: FolderGit2,
    medium: NotebookPen,
};

export const metadata: Metadata = {
    title: 'Contact',
    description: 'Get in touch for engineering roles, collaboration, and technical discussions.',
    alternates: {
        canonical: absoluteUrl('/contact'),
    },
};

export default function ContactPage() {
    const primaryMethod = contactMethods.find((item) => item.primary) ?? contactMethods[0];

    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
            <PageIntro
                eyebrow="Contact"
                title="Open to thoughtful engineering opportunities and serious collaboration."
                description="If the work involves machine learning systems, research-heavy problem solving, or production-minded software design, I am interested."
                action={
                    <a
                        href={primaryMethod.href}
                        className="inline-flex items-center gap-2 rounded-lg bg-foreground px-5 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
                    >
                        Email directly
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                }
            />

            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
                <aside className="panel p-6 sm:p-8">
                    <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/45">What I usually respond to</p>
                    <div className="mt-5 space-y-4 text-sm leading-7 text-foreground/72 sm:text-base">
                        <p>
                            Roles where the expectation is not just modeling, but shipping reliable systems around the model.
                        </p>
                        <p>
                            Projects that need clear communication, pragmatic architecture, and a bias toward measurable outcomes.
                        </p>
                    </div>

                    <div className="mt-8 grid gap-3">
                        {collaborationTopics.map((topic, index) => (
                            <div key={topic} className="flex gap-4 border-t border-border/60 pt-3 first:border-t-0 first:pt-0">
                                <span className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/35">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-sm leading-6 text-foreground/72">{topic}</span>
                            </div>
                        ))}
                    </div>
                </aside>

                <div className="grid gap-4 sm:grid-cols-2">
                    {contactMethods.map((method) => {
                        const Icon = iconMap[method.icon];
                        const isExternal = !method.href.startsWith('mailto:');

                        return (
                            <a
                                key={method.title}
                                href={method.href}
                                target={isExternal ? '_blank' : undefined}
                                rel={isExternal ? 'noreferrer' : undefined}
                                className={`panel group p-5 transition hover:border-primary/25 hover:bg-surface-elevated ${method.primary ? 'sm:col-span-2' : ''}`}
                            >
                                <div className="flex items-start gap-4">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-background/55 text-foreground/72">
                                        <Icon className="h-5 w-5" />
                                    </div>

                                    <div className="min-w-0 flex-1">
                                        <p className="text-xs font-mono uppercase tracking-[0.22em] text-foreground/45">{method.title}</p>
                                        <h2 className="mt-2 break-all text-xl font-semibold text-foreground transition group-hover:text-primary md:break-normal">
                                            {method.value}
                                        </h2>
                                        <p className="mt-2 text-sm leading-7 text-foreground/64">{method.note}</p>
                                    </div>

                                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-foreground/40 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}