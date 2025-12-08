import { useState, useRef, useEffect, KeyboardEvent } from 'react';
import { FaTerminal, FaXmark, FaMinus } from 'react-icons/fa6';

interface CommandLine {
    type: 'input' | 'output' | 'system';
    content: string;
}

export default function Terminal() {
    const [isOpen, setIsOpen] = useState(false);
    const [input, setInput] = useState('');
    const [history, setHistory] = useState<CommandLine[]>([
        { type: 'system', content: 'Quantum OS v1.0.4 initialized...' },
        { type: 'system', content: 'Type "help" for available commands.' }
    ]);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [history, isOpen]);

    const handleCommand = async (cmd: string) => {
        const trimmedCmd = cmd.trim().toLowerCase();

        // Add user input to history
        setHistory(prev => [...prev, { type: 'input', content: cmd }]);
        setInput('');

        switch (trimmedCmd) {
            case 'help':
                setHistory(prev => [...prev, {
                    type: 'output', content: `
Available Commands:
  whoami    - Display system identity
  measure   - Collapse local qubit wavefunction
  train     - Initiate neural network training sim
  clear     - Clear terminal buffer
  exit      - Close terminal session
        `.trim()
                }]);
                break;

            case 'whoami':
                setHistory(prev => [...prev, {
                    type: 'output', content: `
User: Abde Manaaf Ghadiali
Role: Machine Learning Engineer | Quantum Researcher
Location: Arlington, VA (Superposition)
Status: Building Intelligence...
        `.trim()
                }]);
                break;

            case 'measure':
                setHistory(prev => [...prev, { type: 'system', content: 'Preparing Stern-Gerlach apparatus...' }]);
                setTimeout(() => {
                    const result = Math.random() > 0.5 ? '|1⟩ (Spin Up)' : '|0⟩ (Spin Down)';
                    const color = result.includes('1') ? 'text-accent' : 'text-primary';
                    setHistory(prev => [...prev, { type: 'output', content: `Wavefunction collapsed result: ${result}` }]);
                }, 800);
                break;

            case 'train':
                let progress = 0;
                const trainId = setInterval(() => {
                    progress += 10;

                    if (progress > 100) {
                        clearInterval(trainId);
                        setHistory(prev => [...prev, { type: 'output', content: 'Training Complete. Model Accuracy: 98.4%' }]);
                        return;
                    }

                    const bar = '█'.repeat(progress / 5) + '░'.repeat((100 - progress) / 5);
                    const loss = (Math.random() * 0.5 / (progress / 10 + 1)).toFixed(4);

                    if (progress % 20 === 0) {
                        setHistory(prev => [...prev, { type: 'output', content: `Epoch ${progress / 10}/10 [${bar}] Loss: ${loss}` }]);
                    }
                }, 300);
                break;

            case 'clear':
                setHistory([]);
                break;

            case 'exit':
                setIsOpen(false);
                break;

            default:
                setHistory(prev => [...prev, { type: 'output', content: `Command not found: ${trimmedCmd}` }]);
        }
    };

    const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleCommand(input);
        }
    };

    if (!isOpen) {
        return (
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 p-4 bg-black/80 backdrop-blur-md border border-accent/30 rounded-full text-accent hover:bg-accent/10 hover:border-accent hover:scale-110 transition-all duration-300 z-50 shadow-[0_0_15px_rgba(16,185,129,0.2)] group"
            >
                <FaTerminal className="text-xl" />
                <span className="absolute right-full top-1/2 -translate-y-1/2 mr-3 px-2 py-1 bg-black/90 text-xs text-accent rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none border border-accent/20">
                    Dev Terminal
                </span>
            </button>
        );
    }

    return (
        <div className="fixed bottom-6 right-6 w-[90vw] md:w-[600px] h-[400px] bg-black/95 backdrop-blur-xl border border-white/10 rounded-lg shadow-2xl z-50 flex flex-col font-mono text-sm overflow-hidden ring-1 ring-white/5 mx-auto">
            {/* Header */}
            <div className="flex items-center justify-between px-4 py-2 bg-white/5 border-b border-white/5 drag-handle">
                <div className="flex items-center gap-2 text-slate-400">
                    <FaTerminal className="text-accent" />
                    <span>bash — quantum-cli — 80x24</span>
                </div>
                <div className="flex items-center gap-3">
                    <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-white transition-colors"><FaMinus /></button>
                    <button onClick={() => setIsOpen(false)} className="text-slate-500 hover:text-red-400 transition-colors"><FaXmark /></button>
                </div>
            </div>

            {/* Body */}
            <div className="flex-1 p-4 overflow-y-auto scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent space-y-2" onClick={() => document.getElementById('terminal-input')?.focus()}>
                {history.map((line, i) => (
                    <div key={i} className={`${line.type === 'input' ? 'text-white' :
                        line.type === 'system' ? 'text-blue-400' : 'text-slate-300'
                        }`}>
                        {line.type === 'input' && <span className="text-accent mr-2">$</span>}
                        <span className="whitespace-pre-wrap">{line.content}</span>
                    </div>
                ))}
                <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="flex items-center px-4 py-3 border-t border-white/5 bg-black/50">
                <span className="text-accent mr-2">$</span>
                <input
                    id="terminal-input"
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    autoFocus
                    className="flex-1 bg-transparent border-none outline-none text-white placeholder-slate-600 font-mono"
                    placeholder="Type 'help'..."
                    autoComplete="off"
                />
            </div>
        </div>
    );
}
