'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { MoonStar, SunMedium } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
    const { resolvedTheme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    const isLight = mounted && resolvedTheme === 'light';

    return (
        <button
            type="button"
            onClick={() => setTheme(isLight ? 'dark' : 'light')}
            aria-label={isLight ? 'Switch to dark mode' : 'Switch to light mode'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-border/80 bg-surface-elevated text-foreground/78 transition hover:border-primary/25 hover:text-foreground"
        >
            <AnimatePresence initial={false} mode="wait">
                <motion.span
                    key={isLight ? 'moon' : 'sun'}
                    initial={{ opacity: 0, rotate: -20, scale: 0.75 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 20, scale: 0.75 }}
                    transition={{ duration: 0.18 }}
                    className="flex items-center justify-center"
                >
                    {isLight ? <MoonStar className="h-4 w-4" /> : <SunMedium className="h-4 w-4" />}
                </motion.span>
            </AnimatePresence>
        </button>
    );
}