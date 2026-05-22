import type { Metadata } from 'next';
import { ArrowUpRight, BookOpen, Gamepad2, Play } from 'lucide-react';

import PageIntro from '@/components/site/PageIntro';
import { bookShelves, channels, featuredGame, games } from '@/data/hobbies';
import { absoluteUrl } from '@/lib/site';

export const metadata: Metadata = {
    title: 'Hobbies',
    description: 'Books, games, and channels that shape how I think when I am off the clock.',
    alternates: {
        canonical: absoluteUrl('/hobbies'),
    },
};

export default function HobbiesPage() {
    return (
        <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-24 pt-10 sm:px-6 lg:px-8 lg:pt-16">
            <PageIntro
                eyebrow="Hobbies"
                title="The inputs I choose when I am not building software."
                description="Reading, games, and long-form video are where I usually refill attention and curiosity before returning to technical work."
            />

            <div className="grid gap-6 xl:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
                <section className="panel p-6 sm:p-8">
                    <div className="flex items-center gap-3 text-foreground/78">
                        <BookOpen className="h-5 w-5 text-primary" />
                        <h2 className="text-2xl font-semibold">The Library</h2>
                    </div>

                    <div className="mt-6 grid gap-8">
                        {bookShelves.map((shelf) => (
                            <div key={shelf.title} className="space-y-4 border-t border-border/60 pt-6 first:border-t-0 first:pt-0">
                                <p className="font-mono text-xs uppercase tracking-[0.24em] text-foreground/45">{shelf.title}</p>
                                <div className="grid gap-3">
                                    {shelf.books.map((book) => (
                                        <div key={book.title} className="rounded-2xl border border-border/60 bg-background/45 p-4">
                                            <div className="flex items-start justify-between gap-4">
                                                <div>
                                                    <h3 className="text-lg font-semibold text-foreground">{book.title}</h3>
                                                    <p className="mt-1 text-sm italic text-foreground/56">by {book.author}</p>
                                                </div>
                                                <span className="rounded-md border border-border/60 bg-surface px-2.5 py-1 text-[11px] font-mono uppercase tracking-[0.14em] text-foreground/58">
                                                    {book.tag}
                                                </span>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                <div className="grid gap-6">
                    <section className="panel p-6 sm:p-8">
                        <div className="flex items-center gap-3 text-foreground/78">
                            <Gamepad2 className="h-5 w-5 text-accent" />
                            <h2 className="text-2xl font-semibold">The Arcade</h2>
                        </div>

                        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {games.map((game) => (
                                <article key={game.name} className="rounded-2xl border border-border/60 bg-background/45 p-4">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <h3 className="text-base font-semibold text-foreground">{game.name}</h3>
                                            <p className="mt-1 text-xs font-mono uppercase tracking-[0.18em] text-foreground/56">{game.genre}</p>
                                        </div>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-border/60 bg-surface font-mono text-sm font-semibold text-foreground/75">
                                            {game.code}
                                        </div>
                                    </div>
                                </article>
                            ))}
                        </div>

                        <div className="mt-6 border-t border-border/60 pt-6">
                            <p className="font-mono text-xs uppercase tracking-[0.22em] text-foreground/45">Long-running favorite</p>
                            <div className="mt-4 rounded-2xl border border-border/60 bg-surface px-5 py-5">
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-lg font-semibold text-foreground">{featuredGame.name}</h3>
                                    <p className="text-sm leading-7 text-foreground/64">
                                        {featuredGame.label} and {featuredGame.achievement}. {featuredGame.clan}.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="panel p-6 sm:p-8">
                        <div className="flex items-center gap-3 text-foreground/78">
                            <Play className="h-5 w-5 text-secondary" />
                            <h2 className="text-2xl font-semibold">The Watchlist</h2>
                        </div>

                        <div className="mt-6 grid gap-4 md:grid-cols-2">
                            {channels.map((channel, index) => (
                                <a
                                    key={channel.name}
                                    href={`https://www.youtube.com/results?search_query=${encodeURIComponent(channel.name)}`}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="rounded-2xl border border-border/60 bg-background/45 p-4 transition hover:border-primary/25 hover:bg-surface-elevated"
                                >
                                    <div className="flex items-start justify-between gap-3">
                                        <div className="min-w-0">
                                            <div className="flex items-center gap-3">
                                                <span className="font-mono text-xs uppercase tracking-[0.18em] text-foreground/35">
                                                    {String(index + 1).padStart(2, '0')}
                                                </span>
                                                <span className={`h-2.5 w-2.5 rounded-full ${channel.accent}`} />
                                            </div>
                                            <h3 className="mt-3 text-base font-semibold text-foreground">{channel.name}</h3>
                                            <p className="mt-2 text-sm leading-7 text-foreground/64">{channel.description}</p>
                                        </div>
                                        <ArrowUpRight className="h-4 w-4 shrink-0 text-foreground/40" />
                                    </div>
                                </a>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
}