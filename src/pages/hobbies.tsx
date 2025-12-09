import Head from 'next/head';
import { FaBookOpen, FaGamepad, FaTrophy } from 'react-icons/fa6';

export default function Hobbies() {
    return (
        <>
            <Head>
                <title>Downtime | Abde Manaaf Ghadiali</title>
                <meta name="description" content="Books and Games I enjoy" />
            </Head>
            <div className="container mx-auto py-24 px-4 max-w-6xl">
                <div className="text-center mb-20">
                    <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent mb-6">
                        The Off-Hours.
                    </h1>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        When I'm not optimizing gradients or training models, I'm usually leveling up characters or expanding my mind.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
                    {/* The Library Section */}
                    <section className="relative">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-amber-500/10 rounded-xl">
                                <FaBookOpen className="text-amber-500 text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">The Library</h2>
                        </div>

                        <div className="grid gap-6">
                            {/* Non-Fiction Group */}
                            <div className="space-y-4">
                                <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest pl-2">Uploads to Brain</h3>
                                <div className="grid gap-4">
                                    {[
                                        { title: "Atomic Habits", author: "James Clear", tag: "Optimization", color: "bg-amber-600 text-white shadow-amber-500/20" },
                                        { title: "The Subtle Art...", author: "Mark Manson", tag: "Perspective", color: "bg-orange-600 text-white shadow-orange-500/20" },
                                        { title: "Ego is the Enemy", author: "Ryan Holiday", tag: "Stoicism", color: "bg-yellow-600 text-white shadow-yellow-500/20" },
                                    ].map((book) => (
                                        <BookCard key={book.title} book={book} />
                                    ))}
                                </div>
                            </div>

                            {/* Fiction Group */}
                            <div className="space-y-4 mt-8">
                                <h3 className="text-xs font-mono font-bold text-slate-500 uppercase tracking-widest pl-2">Simulations</h3>
                                <div className="grid gap-4">
                                    {[
                                        { title: "A Song of Ice and Fire", author: "G.R.R. Martin", tag: "Epic Fantasy", color: "bg-red-700 text-white shadow-red-500/20" },
                                        { title: "The Alchemist", author: "Paulo Coelho", tag: "Philosophy", color: "bg-emerald-600 text-white shadow-emerald-500/20" },
                                        { title: "The Devil's Prayer", author: "Luke Gracias", tag: "Thriller", color: "bg-purple-600 text-white shadow-purple-500/20" },
                                        { title: "No Shadow Without Light", author: "Luke Gracias", tag: "Thriller", color: "bg-violet-600 text-white shadow-violet-500/20" },
                                    ].map((book, i) => (
                                        <BookCard key={i} book={book} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* The Arcade Section */}
                    <section className="relative">
                        <div className="flex items-center gap-4 mb-10">
                            <div className="p-3 bg-violet-500/10 rounded-xl">
                                <FaGamepad className="text-violet-500 text-2xl" />
                            </div>
                            <h2 className="text-3xl font-bold text-white">The Arcade</h2>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {[
                                { name: "Marvel's Spider-Man", genre: "Action", icon: "🕸️", bg: "from-red-600 to-blue-600" },
                                { name: "Assassin's Creed Valhalla", genre: "RPG", icon: "⚔️", bg: "from-teal-600 to-cyan-600" },
                                { name: "Resident Evil Series", genre: "Horror", icon: "🧟", bg: "from-red-900 to-red-600" },
                                { name: "GTA San Andreas", genre: "Open World", icon: "🔫", bg: "from-green-600 to-yellow-600" },
                            ].map((game) => (
                                <div key={game.name} className="group relative overflow-hidden rounded-2xl bg-white/5 border border-white/10 p-6 h-32 hover:border-white/20 transition-all hover:scale-[1.02] hover:shadow-2xl">
                                    <div className={`absolute inset-0 bg-gradient-to-br ${game.bg} opacity-0 group-hover:opacity-20 transition-opacity duration-500`}></div>
                                    <div className="relative z-10 flex flex-col justify-between h-full">
                                        <div className="text-3xl mb-2">{game.icon}</div>
                                        <div>
                                            <div className="font-bold text-white leading-tight">{game.name}</div>
                                            <div className="text-xs text-slate-400 font-mono mt-1">{game.genre}</div>
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {/* Special Card for CoC */}
                            <div className="sm:col-span-2 group relative overflow-hidden rounded-2xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 p-6 flex flex-col sm:flex-row items-center justify-between gap-4 hover:border-amber-500/40 transition-all">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-amber-500/20 rounded-full">
                                        <FaTrophy className="text-amber-500 text-xl" />
                                    </div>
                                    <div>
                                        <div className="font-bold text-white text-lg">Clash of Clans</div>
                                        <div className="text-sm text-amber-200/60 font-mono">Town Hall 18 • Maxed</div>
                                    </div>
                                </div>
                                <div className="px-4 py-2 bg-amber-500/10 rounded-lg border border-amber-500/20 text-amber-400 font-mono text-sm">
                                    Clan: TrunstileTime
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </>
    );
}

function BookCard({ book }: { book: { title: string, author: string, tag: string, color: string } }) {
    return (
        <div className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 hover:bg-white/[0.07] hover:border-white/10 transition-all cursor-default">
            <div>
                <div className="font-serif text-lg text-slate-200 group-hover:text-white transition-colors">{book.title}</div>
                <div className="text-sm text-slate-500 italic">by {book.author}</div>
            </div>
            <span className={`text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded shadow-md border border-white/10 ${book.color}`}>
                {book.tag}
            </span>
        </div>
    )
}
