import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaSun } from 'react-icons/fa6';

const navItems = [
  { name: 'About', path: '/' },
  { name: 'Experience', path: '/resume' }, // Renamed from Resume
  { name: 'Projects', path: '/projects' },
  { name: 'Blog', path: '/blog' },
  { name: 'Hobbies', path: '/hobbies' },
  { name: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const router = useRouter();

  const triggerLightModeError = () => {
    window.dispatchEvent(new Event('open-terminal-error'));
  };

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-4xl rounded-full border border-white/10 bg-black/60 backdrop-blur-xl shadow-lg shadow-black/20">
      <div className="flex items-center justify-between px-6 h-14">
        <Link
          href="/"
          className="font-mono text-sm font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent hover:opacity-80 transition-opacity"
        >
          default741
        </Link>
        <div className="flex items-center gap-1 md:gap-6">
          <div className="flex gap-1">
            {navItems.map((item) => {
              const isActive = router.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  href={item.path}
                  className={`text-xs md:text-sm font-medium px-3 py-1.5 rounded-full transition-all duration-300 ${isActive
                    ? 'bg-white/10 text-white shadow-[0_0_10px_rgba(255,255,255,0.1)]'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  {item.name}
                </Link>
              );
            })}
          </div>

          {/* Forbidden Light Mode Toggle */}
          <button
            onClick={triggerLightModeError}
            className="ml-2 w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-slate-400 hover:text-yellow-400 hover:bg-white/10 transition-all"
            title="Toggle Light Mode"
          >
            <FaSun className="text-sm" />
          </button>
        </div>
      </div>
    </nav>
  );
}
