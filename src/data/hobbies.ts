export interface BookEntry {
    title: string;
    author: string;
    tag: string;
    accent: string;
}

export interface BookShelf {
    title: string;
    books: BookEntry[];
}

export interface GameEntry {
    name: string;
    genre: string;
    code: string;
    accent: string;
}

export interface ChannelEntry {
    name: string;
    description: string;
    accent: string;
}

export const bookShelves: BookShelf[] = [
    {
        title: 'Uploads to Brain',
        books: [
            { title: 'Atomic Habits', author: 'James Clear', tag: 'Optimization', accent: 'bg-amber-600 text-white' },
            { title: 'The Subtle Art...', author: 'Mark Manson', tag: 'Perspective', accent: 'bg-orange-600 text-white' },
            { title: 'Ego is the Enemy', author: 'Ryan Holiday', tag: 'Stoicism', accent: 'bg-yellow-600 text-white' },
        ],
    },
    {
        title: 'Simulations',
        books: [
            { title: 'A Song of Ice and Fire', author: 'G.R.R. Martin', tag: 'Epic Fantasy', accent: 'bg-red-700 text-white' },
            { title: 'The Alchemist', author: 'Paulo Coelho', tag: 'Philosophy', accent: 'bg-emerald-600 text-white' },
            { title: "The Devil's Prayer", author: 'Luke Gracias', tag: 'Thriller', accent: 'bg-purple-600 text-white' },
            { title: 'No Shadow Without Light', author: 'Luke Gracias', tag: 'Thriller', accent: 'bg-violet-600 text-white' },
        ],
    },
];

export const games: GameEntry[] = [
    { name: "Marvel's Spider-Man", genre: 'Action', code: 'MS', accent: 'from-red-600 to-blue-600' },
    { name: "Assassin's Creed Valhalla", genre: 'RPG', code: 'AC', accent: 'from-teal-600 to-cyan-600' },
    { name: 'Resident Evil Series', genre: 'Horror', code: 'RE', accent: 'from-red-900 to-red-600' },
    { name: 'GTA San Andreas', genre: 'Open World', code: 'GTA', accent: 'from-green-600 to-yellow-600' },
    { name: 'Tekken', genre: 'Fighting', code: 'TK', accent: 'from-yellow-600 to-red-600' },
    { name: 'Dragon Ball Z: Kakarot', genre: 'Action RPG', code: 'DB', accent: 'from-orange-500 to-yellow-500' },
    { name: 'The Witcher 3', genre: 'RPG', code: 'TW', accent: 'from-stone-700 to-slate-500' },
    { name: 'Mortal Kombat', genre: 'Fighting', code: 'MK', accent: 'from-red-900 to-stone-800' },
];

export const featuredGame = {
    name: 'Clash of Clans',
    label: 'Town Hall 18',
    achievement: 'Maxed account',
    clan: 'Clan: TrunstileTime',
};

export const channels: ChannelEntry[] = [
    { name: 'Think School', description: 'Business case studies and geopolitics.', accent: 'bg-yellow-500' },
    { name: 'LEMMiNO', description: 'High-quality documentaries and mysteries.', accent: 'bg-indigo-500' },
    { name: 'Computerphile', description: 'Deep dives into computer science concepts.', accent: 'bg-blue-500' },
    { name: 'James Veitch', description: 'Comedy, spam emails, and rubber ducks.', accent: 'bg-pink-500' },
    { name: 'Corey Schafer', description: 'Python tutorials and software engineering.', accent: 'bg-teal-500' },
    { name: 'ArjanCodes', description: 'Software design patterns and architecture.', accent: 'bg-orange-500' },
    { name: 'Kyle Hill', description: 'Science, nuclear physics, and pop culture.', accent: 'bg-emerald-500' },
    { name: 'PBS Space Time', description: 'Astrophysics and quantum mechanics.', accent: 'bg-violet-500' },
    { name: 'Vsauce', description: 'Scientific curiosities and philosophy.', accent: 'bg-green-500' },
    { name: 'Dude Perfect', description: 'Trick shots and entertainment.', accent: 'bg-cyan-500' },
];