import type { ReactNode } from 'react';

import type { Project } from '@/data/projects';

type ProjectId = Project['id'];

const frameClassName = 'relative min-h-[19rem] overflow-hidden rounded-[1.5rem] border border-border/60 bg-background/55 p-4 sm:min-h-0 sm:aspect-[5/3]';
const chipClassName = 'rounded-full border border-border/60 bg-surface px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/55';
const tileClassName = 'rounded-xl border border-border/60 bg-surface/90 px-3 py-2';

function VisualFrame({
    eyebrow,
    note,
    accentClassName,
    children,
}: {
    eyebrow: string;
    note: string;
    accentClassName: string;
    children: ReactNode;
}) {
    return (
        <div className={frameClassName}>
            <div className={`absolute -right-8 top-0 h-28 w-28 rounded-full blur-3xl ${accentClassName}`} />
            <div className="relative flex h-full flex-col">
                <div className="flex flex-wrap items-center gap-2 sm:justify-between sm:gap-3">
                    <span className={chipClassName}>{eyebrow}</span>
                    <span className="w-full font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/35 sm:w-auto sm:text-right">{note}</span>
                </div>

                <div className="mt-4 flex-1">{children}</div>
            </div>
        </div>
    );
}

function MondayKernelVisual() {
    return (
        <VisualFrame eyebrow="Context graph" note="Local-first flow" accentClassName="bg-secondary/15">
            <div className="grid h-full gap-3 sm:grid-cols-[84px_1fr_84px]">
                <div className="grid grid-cols-3 gap-2 sm:grid-cols-1">
                    {['Voice', 'Notes', 'Activity'].map((item) => (
                        <div key={item} className={tileClassName}>
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">Input</p>
                            <p className="mt-2 text-sm font-medium text-foreground/78">{item}</p>
                        </div>
                    ))}
                </div>

                <div className="flex flex-col justify-center gap-3">
                    <div className="flex items-center justify-center gap-2">
                        {Array.from({ length: 5 }).map((_, index) => (
                            <span
                                key={index}
                                className={`h-3.5 w-3.5 rounded-full border ${index === 2 ? 'border-secondary/45 bg-secondary/25' : 'border-border/60 bg-surface-elevated'}`}
                            />
                        ))}
                    </div>

                    <div className="rounded-2xl border border-secondary/25 bg-secondary/10 px-4 py-4">
                        <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-secondary">GraphRAG index</p>
                        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-foreground/72">
                            <div className="rounded-lg bg-background/60 px-3 py-2">Recall</div>
                            <div className="rounded-lg bg-background/60 px-3 py-2">Context</div>
                            <div className="rounded-lg bg-background/60 px-3 py-2">Memory</div>
                            <div className="rounded-lg bg-background/60 px-3 py-2">Search</div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                        <div className="h-px w-10 bg-border/60" />
                        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/38">retrieve</span>
                        <div className="h-px w-10 bg-border/60" />
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:grid-cols-1">
                    {['Memory', 'Search', 'Assist'].map((item) => (
                        <div key={item} className={tileClassName}>
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">Output</p>
                            <p className="mt-2 text-sm font-medium text-foreground/78">{item}</p>
                        </div>
                    ))}
                </div>
            </div>
        </VisualFrame>
    );
}

function NewsRecommenderVisual() {
    return (
        <VisualFrame eyebrow="Candidate graph" note="Ranked feed" accentClassName="bg-primary/15">
            <div className="grid h-full gap-3 sm:grid-cols-[1fr_92px]">
                <div className="relative min-h-[9rem] rounded-2xl border border-border/60 bg-surface/80 p-3">
                    <div className="absolute left-[16%] top-[22%] h-4 w-4 rounded-full border border-secondary/45 bg-secondary/20" />
                    <div className="absolute left-[33%] top-[46%] h-4 w-4 rounded-full border border-secondary/45 bg-secondary/20" />
                    <div className="absolute left-[52%] top-[24%] h-4 w-4 rounded-full border border-primary/45 bg-primary/20" />
                    <div className="absolute left-[62%] top-[62%] h-4 w-4 rounded-full border border-primary/45 bg-primary/20" />
                    <div className="absolute left-[78%] top-[38%] h-4 w-4 rounded-full border border-accent/45 bg-accent/20" />

                    <div className="absolute left-[20%] top-[28%] h-px w-[22%] rotate-[28deg] bg-border/55" />
                    <div className="absolute left-[36%] top-[49%] h-px w-[22%] -rotate-[24deg] bg-border/55" />
                    <div className="absolute left-[52%] top-[32%] h-px w-[20%] rotate-[24deg] bg-border/55" />
                    <div className="absolute left-[59%] top-[58%] h-px w-[16%] -rotate-[32deg] bg-border/55" />

                    <div className="absolute left-3 top-3 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/42">
                        Users
                    </div>
                    <div className="absolute left-[45%] top-3 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/42">
                        Articles
                    </div>
                    <div className="absolute bottom-3 right-3 rounded-full border border-border/60 bg-background/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/42">
                        Topics
                    </div>
                </div>

                <div className="grid grid-cols-3 gap-2 sm:grid-cols-1">
                    {[
                        { label: 'Story 01', score: '0.92', active: true },
                        { label: 'Story 02', score: '0.81', active: false },
                        { label: 'Story 03', score: '0.74', active: false },
                    ].map((item) => (
                        <div
                            key={item.label}
                            className={`rounded-xl border px-3 py-2 ${item.active ? 'border-primary/30 bg-primary/10' : 'border-border/60 bg-surface/90'}`}
                        >
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">{item.label}</p>
                            <p className="mt-2 text-sm font-semibold text-foreground/78">{item.score}</p>
                            <div className="mt-2 h-1.5 rounded-full bg-background/70">
                                <div
                                    className={`h-full rounded-full ${item.active ? 'bg-primary' : 'bg-foreground/30'}`}
                                    style={{ width: item.score === '0.92' ? '92%' : item.score === '0.81' ? '81%' : '74%' }}
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </VisualFrame>
    );
}

function AiTextDetectionVisual() {
    return (
        <VisualFrame eyebrow="Detection panel" note="Classifier review" accentClassName="bg-primary/15">
            <div className="flex h-full flex-col">
                <div className="flex flex-wrap gap-2">
                    {['synthetic', 'pattern', 'token', 'burst', 'style shift'].map((token, index) => (
                        <span
                            key={token}
                            className={`rounded-full border px-2.5 py-1 text-[11px] ${index < 2 ? 'border-primary/25 bg-primary/10 text-primary' : 'border-border/60 bg-surface text-foreground/60'}`}
                        >
                            {token}
                        </span>
                    ))}
                </div>

                <div className="mt-4 rounded-2xl border border-primary/25 bg-primary/10 p-4">
                    <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/48">
                        <span>Human</span>
                        <span>AI</span>
                    </div>

                    <div className="mt-3 h-3 rounded-full bg-background/70 p-0.5">
                        <div className="h-full w-[98%] rounded-full bg-primary" />
                    </div>

                    <div className="mt-3 grid grid-cols-2 gap-2 text-sm">
                        <div className="rounded-xl bg-background/60 px-3 py-2 text-foreground/62">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/38">Human</p>
                            <p className="mt-2 font-semibold">2%</p>
                        </div>
                        <div className="rounded-xl bg-background/60 px-3 py-2 text-foreground/78">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/38">AI</p>
                            <p className="mt-2 font-semibold">98%</p>
                        </div>
                    </div>
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {['RoBERTa', 'Llama', 'Gemma'].map((model) => (
                        <div key={model} className="rounded-xl border border-border/60 bg-surface/90 px-3 py-2">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">Model</p>
                            <p className="mt-2 text-sm font-medium text-foreground/78">{model}</p>
                        </div>
                    ))}
                </div>
            </div>
        </VisualFrame>
    );
}

function AudioLanguageVisual() {
    const waveformHeights = [26, 46, 30, 58, 42, 64, 34, 54, 28, 48, 38, 44];

    return (
        <VisualFrame eyebrow="Speech embeddings" note="Language scores" accentClassName="bg-accent/15">
            <div className="flex h-full flex-col">
                <div className="flex h-16 items-end gap-1 rounded-2xl border border-border/60 bg-surface/80 px-3 py-3">
                    {waveformHeights.map((height, index) => (
                        <span
                            key={`${height}-${index}`}
                            className={`w-full rounded-full ${index % 3 === 0 ? 'bg-accent/55' : 'bg-secondary/35'}`}
                            style={{ height }}
                        />
                    ))}
                </div>

                <div className="mt-4 grid gap-2 sm:grid-cols-3">
                    {[
                        { label: 'EN', score: '99%' },
                        { label: 'HI', score: '98%' },
                        { label: 'AR', score: '97%' },
                    ].map((item) => (
                        <div key={item.label} className="rounded-xl border border-border/60 bg-surface/90 px-3 py-2">
                            <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/40">{item.label}</p>
                            <p className="mt-2 text-sm font-semibold text-foreground/78">{item.score}</p>
                        </div>
                    ))}
                </div>

                <div className="mt-4 rounded-2xl border border-border/60 bg-background/50 p-3">
                    <div className="grid grid-cols-10 gap-1">
                        {Array.from({ length: 30 }).map((_, index) => (
                            <span
                                key={index}
                                className={`block h-4 rounded-sm ${index % 4 === 0 ? 'bg-accent/45' : index % 3 === 0 ? 'bg-secondary/35' : 'bg-foreground/10'}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </VisualFrame>
    );
}

function DronePathVisual() {
    return (
        <VisualFrame eyebrow="Planner map" note="Dynamic replanning" accentClassName="bg-accent/15">
            <div
                className="relative h-full overflow-hidden rounded-2xl border border-border/60 bg-surface/80"
                style={{
                    backgroundImage:
                        'linear-gradient(rgb(var(--foreground) / 0.04) 1px, transparent 1px), linear-gradient(90deg, rgb(var(--foreground) / 0.04) 1px, transparent 1px)',
                    backgroundSize: '28px 28px',
                }}
            >
                <div className="absolute left-[18%] top-[68%] h-4 w-4 rounded-full border border-accent/40 bg-accent/25" />
                <div className="absolute left-[34%] top-[34%] h-4 w-4 rounded-full border border-primary/40 bg-primary/20" />
                <div className="absolute left-[56%] top-[54%] h-4 w-4 rounded-full border border-primary/40 bg-primary/20" />
                <div className="absolute left-[76%] top-[20%] h-4 w-4 rounded-full border border-secondary/40 bg-secondary/20" />

                <svg viewBox="0 0 280 170" className="absolute inset-0 h-full w-full" aria-hidden="true">
                    <path
                        d="M28 132 C56 124 74 96 102 96 S154 36 188 54 S224 118 252 44"
                        fill="none"
                        style={{
                            stroke: 'rgb(var(--accent))',
                            strokeWidth: 4,
                            strokeLinecap: 'round',
                            strokeLinejoin: 'round',
                        }}
                    />
                </svg>

                <div className="absolute bottom-3 left-3 rounded-full border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/42">
                    Start
                </div>
                <div className="absolute right-3 top-3 rounded-full border border-border/60 bg-background/70 px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.16em] text-foreground/42">
                    Goal
                </div>
            </div>
        </VisualFrame>
    );
}

export default function ProjectVisual({ projectId }: { projectId: ProjectId }) {
    switch (projectId) {
        case 'monday-kernel':
            return <MondayKernelVisual />;
        case 'news-recommender':
            return <NewsRecommenderVisual />;
        case 'ai-text-detection':
            return <AiTextDetectionVisual />;
        case 'audio-lang-detection':
            return <AudioLanguageVisual />;
        case 'drone-path':
            return <DronePathVisual />;
        default:
            return (
                <VisualFrame eyebrow="Project view" note="System outline" accentClassName="bg-foreground/10">
                    <div className="grid h-full grid-cols-2 gap-3">
                        <div className="rounded-2xl border border-border/60 bg-surface/90" />
                        <div className="grid gap-3">
                            <div className="rounded-2xl border border-border/60 bg-surface/90" />
                            <div className="rounded-2xl border border-border/60 bg-surface/90" />
                        </div>
                    </div>
                </VisualFrame>
            );
    }
}