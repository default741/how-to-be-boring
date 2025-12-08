import Head from 'next/head';
import { projects, Project } from '../data/projects';

export default function Projects() {
    return (
        <>
            <Head>
                <title>Projects | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Projects by Abde Manaaf Ghadiali" />
            </Head>
            <div className="container mx-auto py-24 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">Selected Work</h1>
                <p className="text-slate-400 mb-12 max-w-xl">
                    A collection of projects spanning Quantum Computing, Machine Learning, and Full-Stack Engineering.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-[minmax(180px,auto)]">
                    {projects.map((project: Project, index: number) => (
                        <a
                            key={project.id}
                            href={project.github || project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group relative bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 overflow-hidden
                ${index === 0 || index === 3 ? 'md:col-span-2' : ''}
              `}
                        >
                            {/* Glow Effect */}
                            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 blur-[50px] rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/20 transition-all"></div>

                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex justify-between items-start mb-4">
                                    <span className={`text-xs font-mono px-2 py-1 rounded bg-white/5 border border-white/10
                    ${project.category === 'Quantum' ? 'text-violet-400 border-violet-500/30' :
                                            project.category === 'ML/AI' ? 'text-blue-400 border-blue-500/30' : 'text-slate-400'}
                  `}>
                                        {project.category}
                                    </span>
                                    {project.github && <span className="text-slate-500 group-hover:text-white transition-colors">↗</span>}
                                </div>

                                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-primary transition-colors">{project.title}</h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">{project.description}</p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.techStack.map(tech => (
                                        <span key={tech} className="text-xs text-slate-500 font-medium">#{tech}</span>
                                    ))}
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </>
    );
}
