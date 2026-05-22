'use client';

import clsx from 'clsx';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import ThemeToggle from '@/components/theme/ThemeToggle';
import { primaryNavigation } from '@/lib/navigation';

function NavLink({ href, title, active }: { href: string; title: string; active: boolean }) {
    return (
        <Link
            href={href}
            className={clsx(
                'relative inline-flex items-center border-b-2 px-1 py-2 text-sm font-medium transition',
                active
                    ? 'border-foreground text-foreground'
                    : 'border-transparent text-foreground/62 hover:border-border hover:text-foreground'
            )}
        >
            {title}
        </Link>
    );
}

export default function SiteHeader() {
    const pathname = usePathname();
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [pathname]);

    return (
        <header className="sticky top-0 z-50 border-b border-border/75 bg-background/88 backdrop-blur-md">
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between gap-4 py-4">
                    <Link href="/" className="flex min-w-0 items-center gap-3">
                        <span className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border/80 bg-surface-elevated font-mono text-sm font-semibold tracking-[0.18em] text-foreground">
                                AG
                        </span>
                        <span className="min-w-0">
                            <span className="block truncate text-sm font-semibold">Abde Manaaf Ghadiali</span>
                            <span className="block truncate text-xs text-foreground/55">Machine learning engineer</span>
                        </span>
                    </Link>

                    <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary">
                        {primaryNavigation.map((item) => (
                            <NavLink key={item.href} href={item.href} title={item.title} active={pathname === item.href} />
                        ))}
                    </nav>

                    <div className="flex items-center gap-2">
                        <ThemeToggle />
                        <button
                            type="button"
                            onClick={() => setMenuOpen((open) => !open)}
                            aria-expanded={menuOpen}
                            aria-controls="mobile-navigation"
                            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-surface-elevated text-foreground lg:hidden"
                        >
                            {menuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {menuOpen ? (
                    <motion.div
                        id="mobile-navigation"
                        initial={{ opacity: 0, y: -12 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -12 }}
                        transition={{ duration: 0.2 }}
                        className="mx-auto max-w-6xl px-4 sm:px-6 lg:hidden lg:px-8"
                    >
                        <div className="border-x border-b border-border/75 bg-background/96 px-2 pb-3 pt-1 shadow-[0_12px_30px_rgba(15,23,42,0.08)]">
                            <nav className="grid gap-1" aria-label="Mobile">
                                {primaryNavigation.map((item) => {
                                    const active = pathname === item.href;

                                    return (
                                        <Link
                                            key={item.href}
                                            href={item.href}
                                            className={clsx(
                                                'flex items-center border-l-2 px-4 py-3 text-sm font-medium transition',
                                                active
                                                    ? 'border-foreground text-foreground'
                                                    : 'border-transparent text-foreground/68 hover:border-border hover:text-foreground'
                                            )}
                                        >
                                            {item.title}
                                        </Link>
                                    );
                                })}
                            </nav>
                        </div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
}