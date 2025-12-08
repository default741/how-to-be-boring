import { useState, useEffect } from 'react';

export default function Footer() {
    const [date, setDate] = useState<string>("");

    useEffect(() => {
        setDate(new Date().toLocaleDateString());
    }, []);

    return (
        <footer className="w-full border-t border-white/5 bg-black/40 backdrop-blur-md relative overflow-hidden">
            {/* System Ticker */}
            <div className="w-full bg-black/60 border-b border-white/5 py-1 overflow-hidden">
                <div className="animate-marquee whitespace-nowrap flex items-center gap-8 text-[10px] font-mono text-green-500/50">
                    <span>SYSTEM: ONLINE</span>
                    <span>COHERENCE: 99.9%</span>
                    <span>VENV: ACTIVE</span>
                    <span>QUBITS: STABLE</span>
                    <span>LAST_LOGIN: {date}</span>
                    <span>REGION: US-EAST-1 (ARLINGTON)</span>
                    <span>DEPENDENCIES: UP-TO-DATE</span>
                    <span>SYSTEM: ONLINE</span>
                    <span>COHERENCE: 99.9%</span>
                    <span>VENV: ACTIVE</span>
                    <span>QUBITS: STABLE</span>
                    <span>LAST_LOGIN: {date}</span>
                    <span>REGION: US-EAST-1 (ARLINGTON)</span>
                </div>
            </div>

            <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-slate-500 text-sm font-mono hover:text-white transition-colors duration-500">
                    &copy; 2025 Abde Manaaf Ghadiali.
                    <span className="mx-2 text-slate-700">|</span>
                    Built with <span className="text-white hover:text-cyan-400 transition-colors cursor-default">Next.js</span> & <span className="text-white hover:text-violet-400 transition-colors cursor-default">Tailwind</span>
                </p>
            </div>
        </footer>
    );
}
