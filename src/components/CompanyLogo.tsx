import { useMemo } from 'react';
import Image from 'next/image';

interface CompanyLogoProps {
    company: string;
    logo?: string;
    className?: string;
}

export default function CompanyLogo({ company, logo, className = "" }: CompanyLogoProps) {
    const { initials, color } = useMemo(() => {
        let initials = "";
        let color = "";

        if (company.includes("ScriptChain")) {
            initials = "SC";
            color = "from-blue-500 to-cyan-400";
        } else if (company.includes("George Washington")) {
            initials = "GW";
            color = "from-blue-900 to-slate-700"; // University Blue/Buff
        } else if (company.includes("Thoucentric")) {
            initials = "TC";
            color = "from-emerald-500 to-teal-400";
        } else {
            // Default: First letters of first two words
            const words = company.split(" ");
            initials = (words[0][0] + (words[1] ? words[1][0] : "")).toUpperCase();
            color = "from-violet-500 to-fuchsia-500";
        }

        return { initials, color };
    }, [company]);

    if (logo) {
        return (
            <div className={`relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${color} bg-opacity-10 shadow-lg shadow-white/5 border border-white/10 group overflow-hidden ${className}`}>
                {/* Glow Effect matching brand color */}
                <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-20 blur-md group-hover:opacity-40 transition-opacity duration-300`}></div>

                <div className="relative w-full h-full p-2 z-10">
                    <Image
                        src={logo}
                        alt={`${company} logo`}
                        fill
                        className="object-contain drop-shadow-md"
                    />
                </div>
            </div>
        );
    }

    return (
        <div className={`relative flex items-center justify-center w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br ${color} shadow-lg shadow-white/5 border border-white/10 group ${className}`}>
            {/* Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${color} blur-md opacity-40 group-hover:opacity-75 transition-opacity duration-300 rounded-xl`}></div>

            {/* Monogram */}
            <span className="relative z-10 font-bold font-mono text-white text-lg md:text-xl tracking-tighter drop-shadow-md">
                {initials}
            </span>
        </div>
    );
}
