'use client';

import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const AUTO_ADVANCE_INTERVAL_MS = 6000;
const SWIPE_THRESHOLD_PX = 48;

interface CertificateCarouselCardSlide {
    title: string;
    assetPath: string;
}

interface CertificateCarouselCardProps {
    title: string;
    issuer: string;
    label: string;
    description: string;
    slides: CertificateCarouselCardSlide[];
}

export default function CertificateCarouselCard({
    title,
    issuer,
    label,
    description,
    slides,
}: CertificateCarouselCardProps) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoAdvancePaused, setIsAutoAdvancePaused] = useState(false);
    const touchStartXRef = useRef<number | null>(null);
    const touchStartYRef = useRef<number | null>(null);
    const suppressClickUntilRef = useRef(0);
    const activeSlide = slides[activeIndex];

    useEffect(() => {
        if (slides.length <= 1 || isAutoAdvancePaused) {
            return;
        }

        const intervalId = window.setInterval(() => {
            setActiveIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));
        }, AUTO_ADVANCE_INTERVAL_MS);

        return () => {
            window.clearInterval(intervalId);
        };
    }, [slides.length, isAutoAdvancePaused]);

    function showPreviousSlide() {
        setActiveIndex((currentIndex) => (currentIndex === 0 ? slides.length - 1 : currentIndex - 1));
    }

    function showNextSlide() {
        setActiveIndex((currentIndex) => (currentIndex === slides.length - 1 ? 0 : currentIndex + 1));
    }

    function handleTouchStart(event: React.TouchEvent<HTMLDivElement>) {
        const touch = event.changedTouches[0];
        touchStartXRef.current = touch.clientX;
        touchStartYRef.current = touch.clientY;
    }

    function handleTouchEnd(event: React.TouchEvent<HTMLDivElement>) {
        const touch = event.changedTouches[0];

        if (touchStartXRef.current === null || touchStartYRef.current === null) {
            return;
        }

        const deltaX = touch.clientX - touchStartXRef.current;
        const deltaY = touch.clientY - touchStartYRef.current;

        touchStartXRef.current = null;
        touchStartYRef.current = null;

        if (Math.abs(deltaX) < SWIPE_THRESHOLD_PX || Math.abs(deltaX) <= Math.abs(deltaY)) {
            return;
        }

        suppressClickUntilRef.current = Date.now() + 400;

        if (deltaX > 0) {
            showPreviousSlide();
            return;
        }

        showNextSlide();
    }

    function handleSlideClick(event: React.MouseEvent<HTMLAnchorElement>) {
        if (Date.now() < suppressClickUntilRef.current) {
            event.preventDefault();
        }
    }

    return (
        <article
            className="panel flex h-full flex-col overflow-hidden p-4 sm:p-5 md:col-span-2 xl:col-span-2"
            onMouseEnter={() => setIsAutoAdvancePaused(true)}
            onMouseLeave={() => setIsAutoAdvancePaused(false)}
        >
            <div
                className="relative overflow-hidden rounded-2xl border border-border/60 bg-background/45 touch-pan-y"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
            >
                <a href={activeSlide.assetPath} target="_blank" rel="noreferrer" className="block" onClick={handleSlideClick}>
                    <div className="relative aspect-[16/10] bg-[radial-gradient(circle_at_top,_rgba(39,100,167,0.08),_transparent_55%)]">
                        <Image
                            key={activeSlide.assetPath}
                            src={activeSlide.assetPath}
                            alt={`${activeSlide.title} certificate`}
                            fill
                            sizes="(min-width: 1280px) 66vw, (min-width: 768px) 100vw, 100vw"
                            className="object-contain p-3 sm:p-4"
                        />
                    </div>
                </a>

                {slides.length > 1 ? (
                    <div className="pointer-events-none absolute inset-x-0 top-1/2 flex -translate-y-1/2 items-center justify-between px-3">
                        <button
                            type="button"
                            onClick={() => {
                                setIsAutoAdvancePaused(true);
                                showPreviousSlide();
                            }}
                            aria-label="Show previous SQL certificate"
                            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/92 text-foreground transition hover:border-primary/30 hover:text-primary"
                        >
                            <ChevronLeft className="h-4 w-4" />
                        </button>
                        <button
                            type="button"
                            onClick={() => {
                                setIsAutoAdvancePaused(true);
                                showNextSlide();
                            }}
                            aria-label="Show next SQL certificate"
                            className="pointer-events-auto inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/92 text-foreground transition hover:border-primary/30 hover:text-primary"
                        >
                            <ChevronRight className="h-4 w-4" />
                        </button>
                    </div>
                ) : null}
            </div>

            <div className="space-y-4 px-1 pb-1 pt-5">
                <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-[0.18em] text-foreground/45">
                    <span>{label}</span>
                    <span className="h-1 w-1 rounded-full bg-border/90" />
                    <span>{activeIndex + 1}/{slides.length}</span>
                </div>

                <div className="space-y-2">
                    <h2 className="text-2xl font-semibold text-foreground">{title}</h2>
                    <p className="text-sm text-foreground/65">{issuer}</p>
                    <p className="text-sm leading-7 text-foreground/65">{description}</p>
                </div>

                <div className="flex flex-wrap gap-2">
                    {slides.map((slide, index) => (
                        <button
                            key={slide.title}
                            type="button"
                            onClick={() => {
                                setIsAutoAdvancePaused(true);
                                setActiveIndex(index);
                            }}
                            aria-pressed={index === activeIndex}
                            className={`rounded-full border px-3 py-1.5 text-[11px] font-mono uppercase tracking-[0.16em] transition ${
                                index === activeIndex
                                    ? 'border-primary/35 bg-primary/10 text-primary'
                                    : 'border-border/60 bg-background/55 text-foreground/58 hover:border-primary/25 hover:text-foreground'
                            }`}
                        >
                            {slide.title}
                        </button>
                    ))}
                </div>

                <div className="flex items-center justify-between gap-3 border-t border-border/60 pt-4 text-sm text-foreground/62">
                    <span>{activeSlide.title}</span>
                    <a
                        href={activeSlide.assetPath}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 font-medium text-foreground transition hover:text-primary"
                    >
                        View certificate
                        <ArrowUpRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </article>
    );
}