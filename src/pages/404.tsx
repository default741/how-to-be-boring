import Link from 'next/link';
import SEO from '../components/SEO';

export default function Custom404() {
    return (
        <>
            <SEO title="404 - Quantum Collapse" />
            <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
                {/* Quantum Background Effect */}
                <div className="absolute inset-0 opacity-20 pointer-events-none">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-secondary/30 rounded-full blur-[100px] animate-pulse"></div>
                </div>

                <h1 className="text-9xl font-bold bg-gradient-to-r from-blue-500 to-violet-500 bg-clip-text text-transparent mb-4">404</h1>

                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Quantum Superposition Collapsed</h2>

                <p className="text-slate-400 text-lg max-w-lg mb-12 leading-relaxed">
                    The wavefunction for this page has collapsed to zero. It seems the content you are looking for exists in a parallel universe (or a broken link).
                </p>

                <Link href="/" className="btn bg-white/10 hover:bg-white/20 border border-white/10 backdrop-blur-sm">
                    Return to Observed Reality
                </Link>
            </div>
        </>
    );
}
