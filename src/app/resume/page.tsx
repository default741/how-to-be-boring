import type { Metadata } from 'next';
import { ArrowDownRight } from 'lucide-react';

import CompanyLogo from '@/components/CompanyLogo';
import PageIntro from '@/components/site/PageIntro';
import { education } from '@/data/education';
import { experience } from '@/data/experience';
import { absoluteUrl, withBasePath } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Experience',
    description: 'Professional experience and academic background across machine learning engineering, quantum research, and technical mentorship.',
    alternates: {
        canonical: absoluteUrl('/resume'),
    },
};

export default function ResumePage() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
            <PageIntro
                eyebrow="Experience"
                title="Building reliable ML systems and research-led products."
                description="A condensed view of the roles, systems, and academic work most relevant to applied ML, product engineering, and research-heavy problem solving."
                action={
                    <a
                        href={withBasePath('/AbdeManaaf_Resume.pdf')}
                        download
                        className="inline-flex items-center gap-2 rounded-lg border border-border/70 bg-surface px-5 py-3 text-sm font-semibold text-foreground transition hover:border-primary/30 hover:bg-surface-elevated"
                    >
                        Download resume
                        <ArrowDownRight className="h-4 w-4" />
                    </a>
                }
            />

            <div className="grid gap-6">
                {experience.map((role, index) => (
                    <article key={role.id} className="panel p-6 sm:p-8">
                        <div className="grid gap-6 lg:grid-cols-[96px_minmax(0,1fr)] lg:gap-8">
                            <div className="flex items-start justify-start lg:justify-center">
                                <div className="space-y-3 text-center">
                                    <CompanyLogo company={role.company} logo={role.logo} className="mx-auto" />
                                    <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-foreground/35">
                                        {String(index + 1).padStart(2, '0')}
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-6">
                                <div className="grid gap-4 border-b border-border/70 pb-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                                    <div className="space-y-3">
                                        <div className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/45">
                                            {role.period}
                                        </div>
                                        <div>
                                            <h2 className="text-[1.95rem] font-semibold leading-tight text-foreground sm:text-[2.3rem]">{role.title}</h2>
                                            <p className="mt-2 text-base text-foreground/66">{role.company}</p>
                                        </div>
                                    </div>

                                    <div className="text-sm text-foreground/52 md:pt-1">
                                        {role.location}
                                    </div>
                                </div>

                                <ul className="grid gap-3">
                                    {role.description.map((item) => (
                                        <li key={item} className="border-l border-border/70 pl-4 text-sm leading-7 text-foreground/72 sm:text-base">
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2 border-t border-border/60 pt-2">
                                    {role.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="rounded-md border border-border/60 bg-background/55 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-foreground/58"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </article>
                ))}
            </div>

            <section className="grid gap-6">
                <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/45">Education</p>
                        <h2 className="text-3xl font-semibold text-foreground">Academic grounding behind the work.</h2>
                    </div>

                    <div className="text-sm leading-6 text-foreground/58">
                        Machine learning, quantum computing, and systems fundamentals
                    </div>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                    {education.map((entry) => (
                        <article key={entry.id} className="panel p-6 sm:p-8">
                            <div className="grid gap-4 border-b border-border/70 pb-5 md:grid-cols-[minmax(0,1fr)_auto] md:items-start">
                                <div className="space-y-3">
                                    {entry.period ? (
                                        <div className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/45">
                                            {entry.period}
                                        </div>
                                    ) : null}

                                    <div>
                                        <h3 className="text-2xl font-semibold text-foreground">{entry.degree}</h3>
                                        <p className="mt-2 text-base text-foreground/66">{entry.institution}</p>
                                    </div>
                                </div>

                                <div className="text-sm text-foreground/52 md:pt-1">
                                    {entry.location}
                                </div>
                            </div>

                            <div className="mt-5 space-y-5">
                                <div className="flex flex-wrap gap-2">
                                    <span className="rounded-md border border-border/60 bg-background/55 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-foreground/58">
                                        GPA {entry.gpa}
                                    </span>
                                    <span className="rounded-md border border-border/60 bg-background/55 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-foreground/58">
                                        {entry.focus}
                                    </span>
                                </div>

                                <ul className="grid gap-3">
                                    {entry.highlights.map((item) => (
                                        <li key={item} className="border-l border-border/70 pl-4 text-sm leading-7 text-foreground/72 sm:text-base">
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="flex flex-wrap gap-2">
                                    {entry.coursework.map((course) => (
                                        <span
                                            key={course}
                                            className="rounded-md border border-border/60 bg-background/55 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-foreground/58"
                                        >
                                            {course}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </section>
    );
}