export default function Footer() {
    return (
        <footer className="w-full border-t border-white/5 py-8 mt-20 bg-black/20 backdrop-blur-sm">
            <div className="container mx-auto px-4 text-center">
                <p className="text-slate-500 text-sm font-mono">
                    &copy; {new Date().getFullYear()} Abde Manaaf Ghadiali.
                    <span className="mx-2 text-slate-700">|</span>
                    Built with <span className="text-white hover:text-cyan-400 transition-colors cursor-default">Next.js</span> & <span className="text-white hover:text-violet-400 transition-colors cursor-default">Tailwind</span>
                </p>
            </div>
        </footer>
    );
}
