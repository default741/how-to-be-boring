import React, { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import ParticlesBackground from './ParticlesBackground';
import Terminal from './Terminal';

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <div className="flex flex-col min-h-screen text-foreground font-sans selection:bg-primary/30 relative overflow-x-hidden">
            <ParticlesBackground />
            <Terminal />
            <Navbar />
            <main className="flex-1 w-full z-10">{children}</main>
            <Footer />
        </div>
    );
}
