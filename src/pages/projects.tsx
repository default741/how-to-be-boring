import Head from 'next/head';
import { projects, Project } from '../data/projects';
import Link from 'next/link';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Portfolio of projects by Abde Manaaf Ghadiali" />
            </Head>
            <div className="container mx-auto py-24 px-4 max-w-6xl">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Projects</h1>
                <p className="text-slate-400 mb-12 max-w-2xl">
                    A collection of my work in Quantum Computing, Machine Learning, and Software Engineering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </div>
        </>
    );
}

function ProjectCard({ project }: { project: Project }) {
    // Generate a cool gradient based on category
    const getGradient = (category: string) => {
        switch (category) {
            case 'Quantum': return 'from-indigo-500 via-purple-500 to-pink-500';
            case 'ML/AI': return 'from-orange-500 via-red-500 to-yellow-500';
            case 'Web': return 'from-cyan-500 via-blue-500 to-indigo-500';
            default: return 'from-slate-500 via-gray-500 to-zinc-500';
        }
    };

    const gradient = getGradient(project.category);

    return (
        <div className="group relative rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-500/10 flex flex-col h-full transform-gpu">
            {/* Visual Header (Mock Image/Gradient) */}
            <div className={`h-48 w-full bg-gradient-to-br ${gradient} relative overflow-hidden`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                {/* Abstract overlay pattern - using simple gradient instead of complex radial for performance */}
                <div className="absolute inset-0 opacity-30" style={{
                    backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0.1) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.1) 50%, rgba(255,255,255,0.1) 75%, transparent 75%, transparent)`
                }}></div>
                <div className="absolute bottom-4 left-4">
                    <span className="px-2 py-1 text-xs font-bold uppercase tracking-wider bg-black/50 backdrop-blur-md rounded text-white border border-white/20">
                        {project.category}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-bold text-slate-100 group-hover:text-primary transition-colors line-clamp-2">
                        {project.title}
                    </h2>
                </div>

                <p className="text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                    {project.description}
                </p>

                <div className="mt-auto">
                    <div className="flex flex-wrap gap-2 mb-6">
                        {project.techStack.slice(0, 3).map(tech => (
                            <span key={tech} className="text-xs font-mono text-cyan-400/80 bg-cyan-900/20 px-2 py-1 rounded">
                                {tech}
                            </span>
                        ))}
                        {project.techStack.length > 3 && (
                            <span className="text-xs font-mono text-slate-500 px-1 py-1">+{project.techStack.length - 3}</span>
                        )}
                    </div>

                    <div className="flex gap-4">
                        {project.github && (
                            <Link
                                href={project.github}
                                target="_blank"
                                className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-sm font-medium text-white transition-all border border-white/10"
                            >
                                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg>
                                GitHub
                            </Link>
                        )}
                        {project.link && (
                            <Link
                                href={project.link}
                                target="_blank"
                                className="flex-1 inline-flex justify-center items-center gap-2 px-4 py-2 rounded-lg bg-primary hover:bg-blue-600 text-sm font-medium text-white transition-all shadow-lg shadow-blue-500/20"
                            >
                                Demo
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path></svg>
                            </Link>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
