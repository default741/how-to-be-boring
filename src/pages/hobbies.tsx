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
                        <div className="space-y-4">
                            {[
                                { title: "Atomic Habits", author: "James Clear", desc: "Systematic improvement." },
                                { title: "Deep Work", author: "Cal Newport", desc: "Focused productivity." },
                                { title: "Clean Code", author: "Robert C. Martin", desc: "Craftsmanship." },
                                { title: "The Pragmatic Programmer", author: "Andrew Hunt", desc: "Professionalism." },
                            ].map((book) => (
                                <div key={book.title} className="group flex items-baseline justify-between border-b border-white/5 pb-4">
                                    <div>
                                        <h3 className="text-lg font-medium text-slate-200 group-hover:text-white transition-colors">{book.title}</h3>
                                        <p className="text-slate-500 text-sm">{book.author}</p>
                                    </div>
                                    <span className="text-xs font-mono text-slate-600 hidden md:block">{book.desc}</span>
                                </div>
                            ))}
                        </div>
                    </section>

                    <section>
                        <h2 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
                            <span className="text-secondary">🎮</span> Gaming
                        </h2>
                        <div className="grid grid-cols-2 gap-4">
                            {["Counter-Strike 2", "Valorant", "Chess", "Cyberpunk 2077", "Portal 2", "Hades"].map((game) => (
                                <div key={game} className="bg-white/5 rounded-lg p-4 text-center hover:bg-white/10 transition-colors cursor-default border border-white/5">
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
