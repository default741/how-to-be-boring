import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex min-h-[70vh] flex-col items-center justify-center gap-6 px-4 text-center">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-foreground/45">404</p>
            <h1 className="max-w-2xl text-balance text-5xl font-semibold sm:text-7xl">
                Quantum superposition collapsed.
            </h1>
            <p className="max-w-lg text-lg leading-8 text-foreground/65">
                The wavefunction for this page collapsed to zero. It exists in a parallel universe — or someone sent a broken link.
            </p>
            <Link href="/" className="btn mt-4 rounded-full px-7 py-3.5">
                Return to observed reality
            </Link>
        </div>
    );
}
