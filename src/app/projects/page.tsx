import type { Metadata } from 'next';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import Link from 'next/link';

import PageIntro from '@/components/site/PageIntro';
import ProjectVisual from '@/components/site/ProjectVisual';
import { projects, type Project } from '@/data/projects';
import { absoluteUrl } from '@/lib/site';

const categoryStyles: Record<Project['category'], string> = {
    Systems: 'border-secondary/25 bg-secondary/10 text-secondary',
    'ML/AI': 'border-primary/25 bg-primary/10 text-primary',
    Robotics: 'border-accent/25 bg-accent/10 text-accent',
};

const projectSignals: Record<string, { primaryLabel: string; primaryValue: string; secondaryLabel: string; secondaryValue: string }> = {
    'monday-kernel': {
        primaryLabel: 'Architecture',
        primaryValue: 'Local-first retrieval',
        secondaryLabel: 'Stack',
        secondaryValue: 'Rust + Python + C#',
    },
    'news-recommender': {
        primaryLabel: 'Ranking',
        primaryValue: 'MRR 1.0',
        secondaryLabel: 'Quality',
        secondaryValue: 'NDCG@15 > 0.7',
    },
    'ai-text-detection': {
        primaryLabel: 'Corpus',
        primaryValue: '1.2M+ texts',
        secondaryLabel: 'Accuracy',
        secondaryValue: '98%',
    },
    'audio-lang-detection': {
        primaryLabel: 'Dataset',
        primaryValue: '300K+ samples',
        secondaryLabel: 'Accuracy',
        secondaryValue: '98-99%',
    },
    'drone-path': {
        primaryLabel: 'Behavior',
        primaryValue: 'Real-time replanning',
        secondaryLabel: 'Core',
        secondaryValue: 'D* + particle filters',
    },
};

const categoryCount = projects.reduce<Record<string, number>>((accumulator, project) => {
    accumulator[project.category] = (accumulator[project.category] ?? 0) + 1;
    return accumulator;
}, {});

export const metadata: Metadata = {
    title: 'Projects',
    description: 'Selected machine learning, quantum computing, and software engineering projects.',
    alternates: {
        canonical: absoluteUrl('/projects'),
    },
};

export default function ProjectsPage() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
            <PageIntro
                eyebrow="Projects"
                title="Work that bridges research curiosity and production constraints."
                description="A tighter set of systems, ML, and robotics projects selected for technical depth, measurable outcomes, and implementation quality."
            />

            <div className="grid gap-3 sm:grid-cols-3">
                {Object.entries(categoryCount).map(([category, count]) => (
                    <div key={category} className="flex items-center justify-between rounded-2xl border border-border/70 bg-surface px-4 py-3 text-sm text-foreground/70">
                        <span>{category}</span>
                        <span className="text-base font-semibold text-foreground">{count}</span>
                    </div>
                ))}
            </div>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <article key={project.id} className="panel group flex h-full flex-col p-6">
                        <div className="flex items-start justify-between gap-4">
                            <div
                                className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-mono uppercase tracking-[0.18em] ${categoryStyles[project.category]}`}
                            >
                                {project.category}
                            </div>
                            <span className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/35">
                                {String(index + 1).padStart(2, '0')}
                            </span>
                        </div>

                        <div className="mt-8 flex flex-1 flex-col">
                            <ProjectVisual projectId={project.id} />

                            <div className="grid gap-3 sm:grid-cols-2">
                                {[
                                    { label: projectSignals[project.id].primaryLabel, value: projectSignals[project.id].primaryValue },
                                    { label: projectSignals[project.id].secondaryLabel, value: projectSignals[project.id].secondaryValue },
                                ].map((metric) => (
                                    <div key={metric.label} className="rounded-2xl border border-border/60 bg-background/50 px-4 py-3">
                                        <p className="text-[11px] font-mono uppercase tracking-[0.14em] text-foreground/42">{metric.label}</p>
                                        <p className="mt-2 text-sm font-medium leading-6 text-foreground/78">{metric.value}</p>
                                    </div>
                                ))}
                            </div>

                            <div className="space-y-4">
                                <h2 className="mt-6 text-[1.9rem] font-semibold leading-tight text-foreground transition group-hover:text-primary">{project.title}</h2>
                                <p className="text-sm leading-7 text-foreground/68">{project.description}</p>
                            </div>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="rounded-md border border-border/60 bg-background/55 px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-foreground/58"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>

                            <div className="mt-8 flex gap-3">
                                {project.github ? (
                                    <Link
                                        href={project.github}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-border/60 bg-surface px-4 py-3 text-sm font-semibold text-foreground transition hover:border-primary/35 hover:text-primary"
                                    >
                                        <FolderGit2 className="h-4 w-4" />
                                        Source
                                    </Link>
                                ) : null}

                                {project.link ? (
                                    <Link
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-3 text-sm font-semibold text-background transition hover:bg-foreground/90"
                                    >
                                        Demo
                                        <ArrowUpRight className="h-4 w-4" />
                                    </Link>
                                ) : null}
                            </div>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}