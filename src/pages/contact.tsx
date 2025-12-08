import Head from 'next/head';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa6';

export default function Contact() {
    return (
        <>
            <Head>
                <title>Contact | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Contact Abde Manaaf Ghadiali" />
            </Head>
            <div className="container mx-auto py-24 px-4 max-w-2xl min-h-[80vh] flex flex-col justify-center">
                <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">Get in Touch</h1>
                <p className="text-xl text-slate-400 mb-12 text-center leading-relaxed">
                    Always open to discussing <span className="text-white">Quantum Research</span>, <span className="text-white">ML Engineering</span>, or just nerdy tech talk.
                </p>

                <div className="grid gap-6">
                    <a
                        href="mailto:abdemanaaf.ghadiali.1998@gmail.com"
                        className="group block bg-white/5 p-8 rounded-2xl border border-white/10 hover:bg-white/10 hover:scale-[1.02] transition-all duration-300"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <FaEnvelope className="text-slate-500 group-hover:text-blue-400 transition-colors text-xl" />
                            <h2 className="text-sm font-mono text-slate-500 group-hover:text-blue-400 transition-colors">EMAIL</h2>
                        </div>
                        <div className="text-xl md:text-2xl font-medium text-white break-all">abdemanaaf.ghadiali.1998@gmail.com</div>
                    </a>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <a
                            href="https://www.linkedin.com/in/abde-manaaf-ghadiali/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 transition-all duration-300 flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <FaLinkedin className="text-2xl text-slate-400 group-hover:text-[#0077b5] transition-colors" />
                                <span className="text-lg font-medium text-slate-300 group-hover:text-[#0077b5]">LinkedIn</span>
                            </div>
                            <span className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>

                        <a
                            href="https://github.com/default741"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-between group"
                        >
                            <div className="flex items-center gap-3">
                                <FaGithub className="text-2xl text-slate-400 group-hover:text-white transition-colors" />
                                <span className="text-lg font-medium text-slate-300 group-hover:text-white">GitHub</span>
                            </div>
                            <span className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>

                        <a
                            href="https://medium.com/@abdemanaaf.ghadiali.1998/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white/5 p-6 rounded-2xl border border-white/10 hover:bg-white/10 hover:border-white/50 transition-all duration-300 flex items-center justify-between group md:col-span-2"
                        >
                            <div className="flex items-center gap-3">
                                <FaMedium className="text-2xl text-slate-400 group-hover:text-white transition-colors" />
                                <span className="text-lg font-medium text-slate-300 group-hover:text-white">Medium Blog</span>
                            </div>
                            <span className="text-slate-500 opacity-0 group-hover:opacity-100 transition-opacity">↗</span>
                        </a>
                    </div>
                </div>
            </div>
        </>
    );
}
