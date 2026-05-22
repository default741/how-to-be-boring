'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { siteConfig, withBasePath } from '@/lib/site';

const profileNotes = [
    { label: 'Based in', value: siteConfig.location },
    { label: 'Current work', value: 'Applied AI, recommendation systems, and evaluation workflows' },
    { label: 'On this site', value: 'Selected projects, technical writing, and a concise resume of recent work' },
];

const featuredAreas = [
    {
        title: 'Projects',
        description: 'A focused set of ML, systems, and robotics work with clear implementation detail.',
        href: '/projects',
    },
    {
        title: 'Writing',
        description: 'Notes on tradeoffs, architecture, and the practical side of technical work.',
        href: '/blog',
    },
];

const reveal = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
};

export default function HomeHero() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-14 px-4 pb-24 pt-12 sm:px-6 lg:px-8 lg:pt-20">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.18fr)_minmax(320px,0.82fr)] lg:items-start">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={reveal}
                    transition={{ duration: 0.45, ease: 'easeOut' }}
                    className="space-y-8"
                >
                    <div className="space-y-5">
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/48">
                            Abde Manaaf Ghadiali / Machine learning engineer
                        </p>

                        <h1 className="max-w-4xl text-balance text-[3.4rem] font-semibold leading-[0.94] sm:text-[4.35rem] lg:text-[5.3rem]">
                            Machine learning engineer building practical systems from research-grade ideas.
                        </h1>

                        <p className="max-w-2xl text-lg leading-8 text-foreground/68 sm:text-xl">
                            I am Abde Manaaf Ghadiali, a machine learning engineer working across applied AI,
                            recommendation systems, quantum computing research, and software that holds up beyond the prototype phase.
                        </p>
                    </div>

                    <div className="flex flex-col gap-3 sm:flex-row">
                        <Link href="/projects" className="btn px-6 py-3.5 text-sm">
                            View selected work
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>

                        <Link
                            href="/resume"
                            className="inline-flex items-center justify-center rounded-lg border border-border/70 bg-surface px-6 py-3.5 text-sm font-semibold text-foreground hover:border-primary/35 hover:bg-surface-elevated"
                        >
                            Read resume
                        </Link>
                    </div>

                    <div className="grid gap-5 border-t border-border/70 pt-6 md:grid-cols-3">
                        {profileNotes.map((card, index) => (
                            <motion.div
                                key={card.label}
                                initial="hidden"
                                animate="visible"
                                variants={reveal}
                                transition={{ duration: 0.4, ease: 'easeOut', delay: 0.1 + index * 0.08 }}
                                className="border-l border-border/70 pl-4"
                            >
                                <p className="text-xs font-mono uppercase tracking-[0.2em] text-foreground/45">{card.label}</p>
                                <p className="mt-3 text-sm leading-6 text-foreground/72">{card.value}</p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                <motion.aside
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
                    className="panel p-6 sm:p-8"
                >
                    <div className="space-y-8">
                        <div className="flex items-start gap-5">
                            <div className="relative aspect-[4/5] w-24 shrink-0 overflow-hidden rounded-[1.75rem] border border-border/70 bg-surface-elevated shadow-[0_12px_30px_rgba(15,23,42,0.12)] sm:w-28 md:w-32">
                                <Image
                                    src={withBasePath(siteConfig.socialImage)}
                                    alt="Portrait of Abde Manaaf Ghadiali"
                                    fill
                                    priority
                                    sizes="(min-width: 768px) 128px, (min-width: 640px) 112px, 96px"
                                    className="object-cover object-top"
                                />
                            </div>

                            <div className="space-y-3">
                                <p className="text-xs font-mono uppercase tracking-[0.24em] text-foreground/45">Current focus</p>
                                <h2 className="text-2xl font-semibold leading-tight">Applied ML systems that are useful outside the demo environment.</h2>
                                <p className="text-sm leading-7 text-foreground/66">
                                    I care about what happens after the prototype: evaluation, iteration speed, maintainability, and whether the thing actually helps.
                                </p>
                            </div>
                        </div>

                        <div className="grid gap-4 border-t border-border/70 pt-6">
                            {featuredAreas.map((item) => (
                                <Link
                                    key={item.title}
                                    href={item.href}
                                    className="grid gap-2 rounded-2xl border border-border/70 bg-surface-elevated/75 px-5 py-4 transition hover:border-primary/35 hover:bg-surface-elevated"
                                >
                                    <div className="flex items-center justify-between gap-3">
                                        <span className="text-lg font-semibold text-foreground">{item.title}</span>
                                        <ArrowRight className="h-4 w-4 text-foreground/50" />
                                    </div>
                                    <p className="text-sm leading-6 text-foreground/66">{item.description}</p>
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.aside>
            </div>
        </section>
    );
}