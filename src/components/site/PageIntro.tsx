import type { ReactNode } from 'react';

interface PageIntroProps {
    eyebrow: string;
    title: string;
    description: string;
    action?: ReactNode;
}

export default function PageIntro({ eyebrow, title, description, action }: PageIntroProps) {
    return (
        <div className="flex flex-col gap-6 border-b border-border/70 pb-10 sm:flex-row sm:items-end sm:justify-between">
            <div className="max-w-3xl space-y-4">
                <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/45">{eyebrow}</p>
                <h1 className="max-w-4xl text-balance text-4xl font-semibold leading-[0.98] sm:text-5xl lg:text-[3.9rem]">{title}</h1>
                <p className="max-w-2xl text-base leading-7 text-foreground/68 sm:text-lg">{description}</p>
            </div>

            {action ? <div className="shrink-0">{action}</div> : null}
        </div>
    );
}