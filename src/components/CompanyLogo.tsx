import Image from 'next/image';

interface CompanyLogoProps {
    company: string;
    logo?: string;
    className?: string;
}

function getCompanyIdentity(company: string) {
    if (company.includes('ScriptChain')) {
        return {
            initials: 'SC',
            accent: 'bg-secondary/40',
            text: 'text-secondary',
        };
    }

    if (company.includes('Zyncora')) {
        return {
            initials: 'ZY',
            accent: 'bg-primary/40',
            text: 'text-primary',
        };
    }

    if (company.includes('George Washington')) {
        return {
            initials: 'GW',
            accent: 'bg-foreground/20',
            text: 'text-foreground',
        };
    }

    if (company.includes('Thoucentric')) {
        return {
            initials: 'TC',
            accent: 'bg-accent/40',
            text: 'text-accent',
        };
    }

    const words = company.split(' ');
    return {
        initials: (words[0][0] + (words[1] ? words[1][0] : '')).toUpperCase(),
        accent: 'bg-foreground/18',
        text: 'text-foreground',
    };
}

export default function CompanyLogo({ company, logo, className = "" }: CompanyLogoProps) {
    const { initials, accent, text } = getCompanyIdentity(company);

    if (logo) {
        return (
            <div className={`relative flex h-12 w-12 items-center justify-center overflow-hidden rounded-2xl border border-border/70 bg-surface-elevated shadow-[0_10px_24px_rgba(15,23,42,0.08)] md:h-16 md:w-16 ${className}`}>
                <div className={`absolute inset-x-2 bottom-2 h-1 rounded-full ${accent}`}></div>

                <div className="relative z-10 h-full w-full p-2.5">
                    <Image
                        src={logo}
                        alt={`${company} logo`}
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={`relative flex h-12 w-12 items-center justify-center rounded-2xl border border-border/70 bg-surface-elevated shadow-[0_10px_24px_rgba(15,23,42,0.08)] md:h-16 md:w-16 ${className}`}>
            <div className={`absolute inset-x-2 bottom-2 h-1 rounded-full ${accent}`}></div>

            <span className={`relative z-10 font-mono text-lg font-semibold tracking-[0.18em] md:text-xl ${text}`}>
                {initials}
            </span>
        </div>
    );
}
