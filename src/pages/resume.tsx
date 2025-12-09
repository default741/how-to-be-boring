import Head from 'next/head';
import { experience, Experience } from '../data/experience';
import CompanyLogo from '../components/CompanyLogo';

export default function Resume() {
    return (
        <>
            <Head>
                <title>Experience | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Professional Experience of Abde Manaaf Ghadiali" />
            </Head>
            <div className="container mx-auto py-24 px-4 max-w-4xl">
                <div className="flex justify-between items-end mb-16">
                    <div>
                        <h1 className="text-4xl md:text-5xl font-bold mb-2">Experience</h1>
                        <p className="text-slate-400">My professional journey in Tech & Research.</p>
                    </div>
                    <a
                        href="/how-to-be-boring/AbdeManaaf_Resume.pdf"
                        download
                        className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition-colors text-sm font-medium"
                    >
                        Download Resume
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
                    </a>
                </div>

                {/* Updated Timeline styling to accommodate larger logos */}
                <div className="space-y-16 relative border-l-2 border-white/5 ml-6 md:ml-8 pl-8 md:pl-16">
                    {experience.map((exp: Experience) => (
                        <div key={exp.id} className="relative">
                            {/* Creative Company Logo Layout */}
                            <div className="absolute -left-[58px] md:-left-[88px] top-0 transition-transform duration-300 hover:scale-110">
                                <CompanyLogo company={exp.company} logo={exp.logo} />
                            </div>

                            <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-2">
                                <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                                <span className="text-slate-500 font-mono text-sm">{exp.period}</span>
                            </div>

                            <div className="text-lg text-primary mb-4 font-medium">{exp.company} <span className="text-slate-600 text-sm font-normal">• {exp.location}</span></div>

                            <ul className="space-y-3 mb-6">
                                {exp.description.map((item, i) => (
                                    <li key={i} className="text-slate-400 leading-relaxed text-sm md:text-base flex items-start gap-2">
                                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/20 shrink-0"></span>
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <div className="flex flex-wrap gap-2">
                                {exp.skills.map(skill => (
                                    <span key={skill} className="px-2 py-1 bg-white/5 rounded text-xs text-slate-400 font-mono border border-white/5">
                                        {skill}
                                    </span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 text-center md:hidden">
                    <a href="/how-to-be-boring/AbdeManaaf_Resume.pdf" download className="btn w-full">Download Full Resume</a>
                </div>
            </div>
        </>
    );
}
