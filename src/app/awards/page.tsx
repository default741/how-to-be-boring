import type { Metadata } from 'next';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

import CertificateCarouselCard from '@/components/site/CertificateCarouselCard';
import PageIntro from '@/components/site/PageIntro';
import { awardCredentials, certificateCarousels } from '@/data/awards';
import { absoluteUrl, withBasePath } from '@/lib/site';

const recognitions = awardCredentials.filter((item) => item.type === 'image');
const certificates = awardCredentials.filter((item) => item.type === 'pdf');
const carouselCertificateCount = certificateCarousels.reduce((total, carousel) => total + carousel.slides.length, 0);
const recognitionCount = recognitions.length;
const certificateCount = certificates.length + carouselCertificateCount;

function toAwardAssetPath(filename: string) {
    return withBasePath(`/images/awards/${encodeURIComponent(filename)}`);
}

export const metadata: Metadata = {
    title: 'Awards & Certifications',
    description: 'Recognition, certifications, and milestones across engineering and continuous learning.',
    alternates: {
        canonical: absoluteUrl('/awards'),
    },
};

export default function AwardsPage() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
            <PageIntro
                eyebrow="Awards & Certifications"
                title="Proof of work, not just claims of intent."
                description="A short record of recognition and formal learning milestones across professional work, technical training, and continuous upskilling."
            />

            <div className="grid gap-3 sm:grid-cols-2">
                <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-surface px-4 py-3 text-sm text-foreground/70">
                    <span>Recognitions</span>
                    <span className="text-base font-semibold text-foreground">{recognitionCount}</span>
                </div>
                <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-surface px-4 py-3 text-sm text-foreground/70">
                    <span>Certificates</span>
                    <span className="text-base font-semibold text-foreground">{certificateCount}</span>
                </div>
            </div>

            <section className="grid gap-6">
                <div className="flex flex-col gap-3 border-b border-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/45">Recognitions</p>
                        <h2 className="text-3xl font-semibold">Selected awards and recognition.</h2>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-foreground/62">
                        Visual records from work and learning milestones that were worth keeping, not just listing.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {recognitions.map((item, index) => {
                        const assetPath = toAwardAssetPath(item.filename);

                        return (
                            <a
                                key={item.filename}
                                href={assetPath}
                                target="_blank"
                                rel="noreferrer"
                                className="panel group overflow-hidden p-4 transition hover:border-primary/25 hover:bg-surface-elevated"
                            >
                                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/60 bg-background/45">
                                    <Image
                                        src={assetPath}
                                        alt={`${item.title} award`}
                                        fill
                                        priority={index === 0}
                                        loading={index === 0 ? 'eager' : undefined}
                                        sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                                        className="object-cover transition duration-500 group-hover:scale-[1.02]"
                                    />
                                </div>

                                <div className="space-y-2 px-1 pb-1 pt-4">
                                    <p className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/45">{item.label}</p>
                                    <h2 className="text-2xl font-semibold text-foreground transition group-hover:text-primary">{item.title}</h2>
                                    <p className="text-sm text-foreground/65">{item.issuer}</p>
                                </div>
                            </a>
                        );
                    })}
                </div>
            </section>

            <section className="grid gap-6">
                <div className="flex flex-col gap-3 border-b border-border/70 pb-5 sm:flex-row sm:items-end sm:justify-between">
                    <div className="space-y-2">
                        <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/45">Certificates</p>
                        <h2 className="text-3xl font-semibold">Formal training and coursework.</h2>
                    </div>
                    <p className="max-w-xl text-sm leading-7 text-foreground/62">
                        Shorter learning artifacts that back up the broader engineering and ML work shown elsewhere on the site.
                    </p>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {certificateCarousels.map((carousel) => (
                        <CertificateCarouselCard
                            key={carousel.title}
                            title={carousel.title}
                            issuer={carousel.issuer}
                            label={carousel.label}
                            description={carousel.description}
                            slides={carousel.slides.map((slide) => ({
                                title: slide.title,
                                assetPath: toAwardAssetPath(slide.filename),
                            }))}
                        />
                    ))}

                    {certificates.map((item) => {
                        const assetPath = toAwardAssetPath(item.filename);

                        return (
                            <a
                                key={item.filename}
                                href={assetPath}
                                target="_blank"
                                rel="noreferrer"
                                className="panel group flex h-full flex-col justify-between p-6 transition hover:border-primary/25 hover:bg-surface-elevated"
                            >
                                <div>
                                    <p className="text-xs font-mono uppercase tracking-[0.18em] text-foreground/45">{item.label}</p>
                                    <h2 className="mt-4 text-2xl font-semibold text-foreground transition group-hover:text-primary">{item.title}</h2>
                                    <p className="mt-2 text-sm leading-7 text-foreground/65">{item.issuer}</p>
                                </div>

                                <div className="mt-8 flex items-center justify-between border-t border-border/60 pt-4 text-sm text-foreground/62">
                                    <span>Open document</span>
                                    <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-primary" />
                                </div>
                            </a>
                        );
                    })}
                </div>
            </section>
        </section>
    );
}