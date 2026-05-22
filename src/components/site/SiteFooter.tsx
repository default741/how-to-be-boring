import Link from 'next/link';

import { siteConfig } from '@/lib/site';

const footerLinks = [
    { label: 'GitHub', href: siteConfig.links.github },
    { label: 'LinkedIn', href: siteConfig.links.linkedin },
    { label: 'Medium', href: siteConfig.links.medium },
];

export default function SiteFooter() {
    return (
        <footer className="border-t border-border/70 pb-12 pt-14">
            <div className="mx-auto grid max-w-6xl gap-10 px-4 text-sm sm:px-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(280px,0.85fr)] lg:px-8">
                <div className="max-w-2xl space-y-4">
                    <p className="font-mono text-xs uppercase tracking-[0.26em] text-foreground/45">Abde Manaaf Ghadiali</p>
                    <h2 className="max-w-xl text-3xl font-semibold text-balance">Machine learning work shaped by research, delivery, and real constraints.</h2>
                    <p className="max-w-xl text-base leading-7 text-foreground/68">
                        Recommendation systems, applied AI, technical writing, and software decisions that are easier to defend than to decorate.
                    </p>
                </div>

                <div className="space-y-6 text-foreground/70">
                    <div className="space-y-3">
                        <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/45">Elsewhere</p>
                        <div className="flex flex-wrap gap-x-5 gap-y-2">
                        {footerLinks.map((link) => (
                            <Link
                                key={link.label}
                                href={link.href}
                                target="_blank"
                                rel="noreferrer"
                                className="border-b border-transparent pb-1 hover:border-border hover:text-foreground"
                            >
                                {link.label}
                            </Link>
                        ))}
                        </div>
                    </div>

                    <p className="max-w-sm leading-6">
                        {new Date().getFullYear()} Abde Manaaf Ghadiali. Built with Next.js and shipped as a static site.
                    </p>
                </div>
            </div>
        </footer>
    );
}