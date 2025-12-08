import Head from 'next/head';

export default function Hobbies() {
    return (
        <>
            <Head>
                <title>Hobbies | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Hobbies of Abde Manaaf Ghadiali" />
            </Head>
            <div className="container mx-auto py-24 px-4">
                <h1 className="text-4xl md:text-5xl font-bold mb-16">Downtime</h1>

                <div className="grid md:grid-cols-2 gap-16">
                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="text-accent">📚</span> Reading List
                        </h2>
                        <div className="space-y-8">
                            {/* Non-Fiction */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-300 mb-4 uppercase tracking-wider text-xs">Non-Fiction</h3>
                                <div className="space-y-4">
                                    {[
                                        { title: "Atomic Habits", author: "James Clear", desc: "Optimization" },
                                        { title: "The Subtle Art of Not Giving a F*ck", author: "Mark Manson", desc: "Perspective" },
                                        { title: "Ego is the Enemy", author: "Ryan Holiday", desc: "Stoicism" },
                                    ].map((book) => (
                                        <div key={book.title} className="group flex items-baseline justify-between border-b border-white/5 pb-2">
                                            <div>
                                                <h4 className="text-base font-medium text-slate-200 group-hover:text-white transition-colors">{book.title}</h4>
                                                <p className="text-slate-500 text-xs">{book.author}</p>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-600 hidden md:block">{book.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Fiction */}
                            <div>
                                <h3 className="text-lg font-bold text-slate-300 mb-4 uppercase tracking-wider text-xs">Fantasy & Fiction</h3>
                                <div className="space-y-4">
                                    {[
                                        { title: "A Song of Ice and Fire (1-3)", author: "G.R.R. Martin", desc: "Fantasy Epic" },
                                        { title: "The Alchemist", author: "Paulo Coelho", desc: "Philosophy" },
                                        { title: "The Devil's Prayer", author: "Luke Gracias", desc: "Thriller" },
                                        { title: "No Shadow Without Light", author: "Luke Gracias", desc: "Thriller" },
                                    ].map((book) => (
                                        <div key={book.title} className="group flex items-baseline justify-between border-b border-white/5 pb-2">
                                            <div>
                                                <h4 className="text-base font-medium text-slate-200 group-hover:text-white transition-colors">{book.title}</h4>
                                                <p className="text-slate-500 text-xs">{book.author}</p>
                                            </div>
                                            <span className="text-[10px] font-mono text-slate-600 hidden md:block">{book.desc}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="text-secondary">🎮</span> Gaming
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {[
                                "Marvel's Spider-Man",
                                "Assassin's Creed Valhalla",
                                "Resident Evil Series",
                                "GTA San Andreas",
                                "Clash of Clans (TH18)"
                            ].map((game) => (
                                <div key={game} className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors cursor-default border border-white/5 flex items-center justify-center">
                                    <span className="text-slate-300 font-medium">{game}</span>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}
