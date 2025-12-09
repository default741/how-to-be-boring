import Head from 'next/head';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa6';
import Link from 'next/link';

export default function Contact() {
    const socialLinks = [
        {
            name: 'Email',
            value: 'abdemanaaf.ghadiali.1998@gmail.com',
            icon: FaEnvelope,
            color: 'from-blue-500 to-cyan-500',
            bgGlow: 'bg-blue-500/20',
            href: 'mailto:abdemanaaf.ghadiali.1998@gmail.com',
            isPrimary: true
        },
        {
            name: 'LinkedIn',
            value: 'Add me on LinkedIn',
            icon: FaLinkedin,
            color: 'from-blue-600 to-blue-400',
            bgGlow: 'bg-blue-600/20',
            href: 'https://www.linkedin.com/in/abde-manaaf-ghadiali/',
            isPrimary: false
        },
        {
            name: 'GitHub',
            value: 'Check out my Repos',
            icon: FaGithub,
            color: 'from-slate-100 to-slate-400',
            bgGlow: 'bg-white/10',
            href: 'https://github.com/default741',
            isPrimary: false
        },
        {
            name: 'Medium',
            value: 'Read my Tech Blog',
            icon: FaMedium,
            color: 'from-green-400 to-emerald-600',
            bgGlow: 'bg-green-500/20',
            href: 'https://medium.com/@abdemanaaf.ghadiali.1998/',
            isPrimary: false
        }
    ];

    return (
        <>
            <Head>
                <title>Contact | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Get in touch with Abde Manaaf Ghadiali" />
            </Head>

            <div className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden px-4">
                {/* Background Atmosphere */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
                    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-pulse"></div>
                    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                </div>

                <div className="container max-w-5xl mx-auto flex flex-col md:flex-row gap-12 lg:gap-20 items-center">

                    {/* Visual / Text Section */}
                    <div className="flex-1 text-center md:text-left z-10">
                        <div className="inline-block px-4 py-1.5 mb-6 text-xs font-mono font-medium text-cyan-400 bg-cyan-900/10 border border-cyan-500/20 rounded-full backdrop-blur-sm">
                            OPEN FOR OPPORTUNITIES
                        </div>
                        <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 bg-gradient-to-br from-white via-slate-200 to-slate-500 bg-clip-text text-transparent">
                            Let's Build <br />
                            <span className="text-primary/90">Something Impactful.</span>
                        </h1>
                        <p className="text-lg md:text-xl text-slate-400 leading-relaxed mb-8 max-w-lg mx-auto md:mx-0">
                            Whether it's optimizing <span className="text-white">ML pipelines</span>, exploring <span className="text-white">Quantum algorithms</span>, or designing <span className="text-white">Scalable systems</span> — I'm ready to collaborate.
                        </p>

                        <div className="hidden md:block absolute -z-10 w-[2px] h-32 bg-gradient-to-b from-slate-800 to-transparent left-12 bottom-0"></div>
                    </div>

                    {/* Interactive Cards Section */}
                    <div className="flex-1 w-full max-w-md flex flex-col gap-4">
                        {socialLinks.map((link, idx) => (
                            <Link
                                href={link.href}
                                key={link.name}
                                target={link.name === 'Email' ? undefined : '_blank'}
                                className="group relative"
                            >
                                <div className={`relative z-10 flex items-center p-1 rounded-2xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 overflow-hidden`}>

                                    {/* Link-Specific Glow on Hover */}
                                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r ${link.color} blur-2xl opacity-20`}></div>

                                    {/* Icon Box */}
                                    <div className={`flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-xl ${link.bgGlow} mx-2`}>
                                        <link.icon className={`text-2xl md:text-3xl text-white`} />
                                    </div>

                                    {/* Text Content */}
                                    <div className="flex-1 px-4 py-3">
                                        <div className="text-xs font-mono text-slate-400 mb-1 tracking-wider uppercase">{link.name}</div>
                                        <div className="text-base md:text-lg font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-slate-300 transition-all font-mono break-all md:break-normal line-clamp-1">
                                            {link.value}
                                        </div>
                                    </div>

                                    {/* Arrow */}
                                    <div className="mr-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-1">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
