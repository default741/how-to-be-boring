import type { Metadata } from 'next';
import type { ReactNode } from 'react';
import {
    FaBrain,
    FaChalkboardTeacher,
    FaDatabase,
    FaDocker,
    FaJs,
    FaMicrochip,
    FaPython,
    FaReact,
} from 'react-icons/fa';
import {
    SiDatabricks,
    SiFastapi,
    SiKubernetes,
    SiNextdotjs,
    SiPytorch,
    SiQiskit,
    SiTensorflow,
} from 'react-icons/si';

import PageIntro from '@/components/site/PageIntro';
import { absoluteUrl } from '@/lib/site';

interface SkillItem {
    name: string;
    icon: ReactNode;
    color: string;
}

interface SkillGroup {
    title: string;
    description: string;
    icon: ReactNode;
    items: SkillItem[];
}

const skillGroups: SkillGroup[] = [
    {
        title: 'Applied ML & Generative AI',
        description: 'Production modeling, retrieval, and LLM systems with an emphasis on evaluation, accuracy, and shipping.',
        icon: <FaBrain className="h-5 w-5 text-violet-400" />,
        items: [
            { name: 'Python', icon: <FaPython />, color: 'text-yellow-400' },
            { name: 'PyTorch', icon: <SiPytorch />, color: 'text-red-400' },
            { name: 'TensorFlow', icon: <SiTensorflow />, color: 'text-orange-400' },
            { name: 'Transformers', icon: <span className="font-mono text-sm font-bold">LLM</span>, color: 'text-violet-300' },
            { name: 'GraphRAG', icon: <span className="font-mono text-sm font-bold">RAG</span>, color: 'text-emerald-400' },
            { name: 'Multi-Agent Systems', icon: <span className="font-mono text-sm font-bold">MAS</span>, color: 'text-cyan-300' },
            { name: 'FastAPI', icon: <SiFastapi />, color: 'text-teal-400' },
            { name: 'Whisper', icon: <span className="font-mono text-sm font-bold">STT</span>, color: 'text-sky-300' },
        ],
    },
    {
        title: 'Quantum Computing',
        description: 'Algorithms and benchmark-driven experimentation where correctness, not hype, determines what is useful.',
        icon: <FaMicrochip className="h-5 w-5 text-cyan-400" />,
        items: [
            { name: 'Qiskit', icon: <SiQiskit />, color: 'text-purple-400' },
            { name: 'QAOA', icon: <span className="font-mono text-sm font-bold">QAOA</span>, color: 'text-cyan-300' },
            { name: "Grover's Algorithm", icon: <span className="font-mono text-sm font-bold">G</span>, color: 'text-blue-300' },
            { name: 'Quantum RAM', icon: <span className="font-mono text-sm font-bold">QR</span>, color: 'text-indigo-300' },
            { name: 'Error Correction', icon: <span className="font-mono text-sm font-bold">EC</span>, color: 'text-emerald-400' },
            { name: 'Benchmarking', icon: <span className="font-mono text-sm font-bold">EXP</span>, color: 'text-foreground' },
        ],
    },
    {
        title: 'Cloud, Data & MLOps',
        description: 'The platform and data layer that turns prototypes into dependable, monitored services.',
        icon: <FaDatabase className="h-5 w-5 text-emerald-400" />,
        items: [
            { name: 'Databricks', icon: <SiDatabricks />, color: 'text-orange-500' },
            { name: 'PySpark', icon: <span className="font-mono text-sm font-bold">SPK</span>, color: 'text-amber-400' },
            { name: 'Snowflake', icon: <span className="font-mono text-sm font-bold">SF</span>, color: 'text-cyan-300' },
            { name: 'Docker', icon: <FaDocker />, color: 'text-blue-500' },
            { name: 'Kubernetes', icon: <SiKubernetes />, color: 'text-blue-400' },
            { name: 'GCP / Azure / AWS', icon: <span className="font-mono text-sm font-bold">CLD</span>, color: 'text-orange-300' },
            { name: 'CI / CD', icon: <span className="font-mono text-sm font-bold">CI</span>, color: 'text-rose-300' },
            { name: 'Redis', icon: <span className="font-mono text-sm font-bold">KV</span>, color: 'text-red-400' },
        ],
    },
    {
        title: 'Systems & Product Engineering',
        description: 'Typed frontends, backend architecture, and security-conscious delivery for real product workflows.',
        icon: <FaReact className="h-5 w-5 text-cyan-400" />,
        items: [
            { name: 'Next.js', icon: <SiNextdotjs />, color: 'text-foreground' },
            { name: 'TypeScript', icon: <FaJs />, color: 'text-blue-400' },
            { name: 'Rust', icon: <span className="font-mono text-sm font-bold">Rs</span>, color: 'text-orange-300' },
            { name: 'C# / .NET', icon: <span className="font-mono text-sm font-bold">C#</span>, color: 'text-violet-300' },
            { name: 'Neo4j + ChromaDB', icon: <FaDatabase />, color: 'text-green-400' },
            { name: 'OAuth / JWT / RBAC', icon: <span className="font-mono text-sm font-bold">JWT</span>, color: 'text-emerald-400' },
            { name: 'gRPC / REST APIs', icon: <span className="font-mono text-sm font-bold">API</span>, color: 'text-sky-300' },
            { name: 'Event-Driven Systems', icon: <span className="font-mono text-sm font-bold">EVT</span>, color: 'text-foreground' },
        ],
    },
];

const competencies = [
    'Research-to-production translation',
    'Technical leadership and ownership',
    'Security-minded system design',
    'Teaching and mentorship',
    'Stakeholder communication',
    'Experimentation and measurement',
];

export const metadata: Metadata = {
    title: 'Skills',
    description: 'Technical skills across machine learning, quantum computing, and production engineering.',
    alternates: {
        canonical: absoluteUrl('/skills'),
    },
};

export default function SkillsPage() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
            <PageIntro
                eyebrow="Skills"
                title="A technical stack shaped by real delivery work, not keyword stuffing."
                description="The tools and patterns I rely on most across applied ML, systems engineering, cloud delivery, and research-heavy product work."
            />

            <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_320px]">
                <div className="grid gap-6">
                    {skillGroups.map((group) => (
                        <section key={group.title} className="panel p-6 sm:p-8">
                            <div className="grid gap-6 border-b border-border/70 pb-6 lg:grid-cols-[minmax(0,260px)_minmax(0,1fr)] lg:items-start">
                                <div className="space-y-3">
                                    <div className="flex items-center gap-3 text-foreground/78">
                                        {group.icon}
                                        <h2 className="text-2xl font-semibold">{group.title}</h2>
                                    </div>
                                    <p className="max-w-sm text-sm leading-7 text-foreground/66 sm:text-base">{group.description}</p>
                                </div>

                                <div className="grid gap-3 sm:grid-cols-2">
                                    {group.items.map((item) => (
                                        <div
                                            key={item.name}
                                            className="flex items-center gap-3 rounded-2xl border border-border/60 bg-background/50 px-4 py-3 transition hover:border-primary/25 hover:bg-surface"
                                        >
                                            <div className={`text-lg ${item.color}`}>{item.icon}</div>
                                            <p className="text-sm font-medium text-foreground/78">{item.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    ))}
                </div>

                <aside className="panel h-fit p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-foreground/78">
                        <FaChalkboardTeacher className="h-5 w-5 text-accent" />
                        <h2 className="text-2xl font-semibold">Core competencies</h2>
                    </div>

                    <p className="mt-4 text-sm leading-7 text-foreground/68">
                        The non-tooling side of engineering that usually determines whether good ideas survive contact with real teams and deadlines.
                    </p>

                    <div className="mt-6 grid gap-3">
                        {competencies.map((item, index) => (
                            <div key={item} className="flex gap-4 border-t border-border/60 pt-3 first:border-t-0 first:pt-0">
                                <span className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/35">
                                    {String(index + 1).padStart(2, '0')}
                                </span>
                                <span className="text-sm leading-6 text-foreground/72">{item}</span>
                            </div>
                        ))}
                    </div>
                </aside>
            </div>
        </section>
    );
}