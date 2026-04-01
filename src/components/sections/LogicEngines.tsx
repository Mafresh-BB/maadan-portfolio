import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Cpu, Grid3X3, Search } from 'lucide-react';

/* ─── Brainfuck Interpreter Visualization ─── */
const BF_PROGRAM = '++++++++++[>+++++++>++++++++++>+++>+<<<<-]>++.>+.+++++++..+++.>++.<<+++++++++++++++.>.+++.------.--------.>+.>.';
const BF_TAPE_SIZE = 20;

const BrainfuckViz = () => {
  const [tape, setTape] = useState<number[]>(new Array(BF_TAPE_SIZE).fill(0));
  const [pointer, setPointer] = useState(0);
  const [output, setOutput] = useState('');
  const [pc, setPc] = useState(0);
  const [running, setRunning] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });
  const intervalRef = useRef<ReturnType<typeof setInterval> | undefined>(undefined);

  const reset = useCallback(() => {
    setTape(new Array(BF_TAPE_SIZE).fill(0));
    setPointer(0);
    setOutput('');
    setPc(0);
    setRunning(false);
    if (intervalRef.current) clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    if (isInView && !running && pc === 0) setRunning(true);
  }, [isInView, running, pc]);

  useEffect(() => {
    if (!running) return;
    const t = [...tape];
    let p = pointer, o = output, i = pc, bracketDepth = 0;

    intervalRef.current = setInterval(() => {
      if (i >= BF_PROGRAM.length) { setRunning(false); clearInterval(intervalRef.current); return; }
      const cmd = BF_PROGRAM[i];
      switch (cmd) {
        case '+': t[p] = (t[p] + 1) % 256; break;
        case '-': t[p] = (t[p] - 1 + 256) % 256; break;
        case '>': p = Math.min(p + 1, BF_TAPE_SIZE - 1); break;
        case '<': p = Math.max(p - 1, 0); break;
        case '.': o += String.fromCharCode(t[p]); break;
        case '[':
          if (t[p] === 0) { bracketDepth = 1; while (bracketDepth > 0) { i++; if (BF_PROGRAM[i] === '[') bracketDepth++; if (BF_PROGRAM[i] === ']') bracketDepth--; } }
          break;
        case ']':
          if (t[p] !== 0) { bracketDepth = 1; while (bracketDepth > 0) { i--; if (BF_PROGRAM[i] === ']') bracketDepth++; if (BF_PROGRAM[i] === '[') bracketDepth--; } }
          break;
      }
      i++;
      setTape([...t]); setPointer(p); setOutput(o); setPc(i);
    }, 15);
    return () => { if (intervalRef.current) clearInterval(intervalRef.current); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [running]);

  return (
    <div ref={ref} className="space-y-4">
      <div className="flex gap-1 overflow-x-auto pb-2">
        {tape.slice(0, 15).map((val, idx) => (
          <div
            key={idx}
            className={`flex-shrink-0 w-10 h-12 rounded-lg flex flex-col items-center justify-center text-[10px] font-mono transition-all duration-150 ${
              idx === pointer
                ? 'bg-blue-600 text-white ring-2 ring-blue-400 shadow-lg shadow-blue-500/30'
                : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 border border-gray-200 dark:border-gray-700'
            }`}
          >
            <span className="text-[8px] opacity-50">{idx}</span>
            <span className="font-bold">{val}</span>
          </div>
        ))}
      </div>
      <div className="bg-black/80 rounded-lg p-3 font-mono text-sm">
        <span className="text-gray-500 text-xs">output: </span>
        <span className="text-green-400">{output || '...'}</span>
        <span className="animate-pulse text-green-400">▋</span>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-[10px] text-gray-500 font-mono">PC: {pc}/{BF_PROGRAM.length}</span>
        <button onClick={reset} className="text-xs text-blue-500 hover:text-blue-400 font-medium">Reset</button>
      </div>
    </div>
  );
};

/* ─── Sudoku Solver Visualization ─── */
const SUDOKU_PUZZLE: number[][] = [
  [5,3,0,0,7,0,0,0,0],[6,0,0,1,9,5,0,0,0],[0,9,8,0,0,0,0,6,0],
  [8,0,0,0,6,0,0,0,3],[4,0,0,8,0,3,0,0,1],[7,0,0,0,2,0,0,0,6],
  [0,6,0,0,0,0,2,8,0],[0,0,0,4,1,9,0,0,5],[0,0,0,0,8,0,0,7,9],
];

const SudokuViz = () => {
  const [grid, setGrid] = useState<number[][]>(SUDOKU_PUZZLE.map(r => [...r]));
  const [solving, setSolving] = useState(false);
  const [activeCell, setActiveCell] = useState<[number, number] | null>(null);
  const [solved, setSolved] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => {
    if (isInView && !solving && !solved) setSolving(true);
  }, [isInView, solving, solved]);

  useEffect(() => {
    if (!solving) return;
    const g = SUDOKU_PUZZLE.map(r => [...r]);
    const allSteps: { row: number; col: number; snapshot: number[][] }[] = [];

    const isValid = (board: number[][], row: number, col: number, num: number) => {
      for (let i = 0; i < 9; i++) if (board[row][i] === num || board[i][col] === num) return false;
      const sr = Math.floor(row / 3) * 3, sc = Math.floor(col / 3) * 3;
      for (let i = sr; i < sr + 3; i++) for (let j = sc; j < sc + 3; j++) if (board[i][j] === num) return false;
      return true;
    };

    const solve = (board: number[][]): boolean => {
      for (let r = 0; r < 9; r++) for (let c = 0; c < 9; c++) {
        if (board[r][c] === 0) {
          for (let n = 1; n <= 9; n++) {
            if (isValid(board, r, c, n)) {
              board[r][c] = n;
              allSteps.push({ row: r, col: c, snapshot: board.map(row => [...row]) });
              if (solve(board)) return true;
              board[r][c] = 0;
              allSteps.push({ row: r, col: c, snapshot: board.map(row => [...row]) });
            }
          }
          return false;
        }
      }
      return true;
    };

    solve(g);

    const maxSteps = 120;
    let steps = allSteps;
    if (allSteps.length > maxSteps) {
      const sampled: typeof allSteps = [];
      const step = Math.floor(allSteps.length / maxSteps);
      for (let i = 0; i < allSteps.length; i += step) sampled.push(allSteps[i]);
      sampled.push(allSteps[allSteps.length - 1]);
      steps = sampled;
    }

    let idx = 0;
    const interval = setInterval(() => {
      if (idx >= steps.length) { setSolving(false); setSolved(true); setActiveCell(null); clearInterval(interval); return; }
      const { row, col, snapshot } = steps[idx];
      setGrid(snapshot); setActiveCell([row, col]); idx++;
    }, 40);

    return () => clearInterval(interval);
  }, [solving]);

  return (
    <div ref={ref} className="space-y-3">
      <div className="grid grid-cols-9 gap-px bg-gray-300 dark:bg-gray-600 rounded-lg overflow-hidden">
        {grid.map((row, r) => row.map((val, c) => {
          const isOriginal = SUDOKU_PUZZLE[r][c] !== 0;
          const isActive = activeCell && activeCell[0] === r && activeCell[1] === c;
          return (
            <div
              key={`${r}-${c}`}
              className={`aspect-square flex items-center justify-center text-xs font-mono font-bold transition-colors duration-100 ${
                isActive ? 'bg-blue-500 text-white' : isOriginal ? 'bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white' : val !== 0 ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400' : 'bg-white dark:bg-gray-900 text-transparent'
              } ${(c === 2 || c === 5) ? 'border-r-2 border-gray-400 dark:border-gray-500' : ''} ${(r === 2 || r === 5) ? 'border-b-2 border-gray-400 dark:border-gray-500' : ''}`}
            >
              {val || ''}
            </div>
          );
        }))}
      </div>
      <div className="flex items-center justify-between text-[10px] text-gray-500">
        <span className="font-mono">{solved ? '✓ Solved' : solving ? 'Solving...' : 'Ready'}</span>
        <button onClick={() => { setGrid(SUDOKU_PUZZLE.map(r => [...r])); setSolved(false); setActiveCell(null); setTimeout(() => setSolving(true), 50); }} className="text-blue-500 hover:text-blue-400 font-medium text-xs">Replay</button>
      </div>
    </div>
  );
};

/* ─── Quadchecker Visualization ─── */
const QUAD_GRID = [
  [0,0,1,1,0,0,0,0],[0,0,1,1,0,0,0,0],[0,0,0,0,0,1,1,0],[0,0,0,0,0,1,1,0],
  [1,1,0,0,0,0,0,0],[1,1,0,0,0,0,1,1],[0,0,0,0,0,0,1,1],[0,0,0,1,1,0,0,0],
];

const QuadcheckerViz = () => {
  const [highlights, setHighlights] = useState<Set<string>>(new Set());
  const [scanning, setScanning] = useState(false);
  const [foundCount, setFoundCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  useEffect(() => { if (isInView && !scanning && foundCount === 0) setScanning(true); }, [isInView, scanning, foundCount]);

  useEffect(() => {
    if (!scanning) return;
    const quads: string[][] = [];
    for (let r = 0; r < 7; r++) for (let c = 0; c < 7; c++) {
      if (QUAD_GRID[r][c] === 1 && QUAD_GRID[r][c+1] === 1 && QUAD_GRID[r+1][c] === 1 && QUAD_GRID[r+1][c+1] === 1)
        quads.push([`${r}-${c}`, `${r}-${c+1}`, `${r+1}-${c}`, `${r+1}-${c+1}`]);
    }
    let idx = 0;
    const interval = setInterval(() => {
      if (idx >= quads.length) { setScanning(false); clearInterval(interval); return; }
      setHighlights(prev => { const next = new Set(prev); quads[idx].forEach(k => next.add(k)); return next; });
      setFoundCount(p => p + 1); idx++;
    }, 600);
    return () => clearInterval(interval);
  }, [scanning]);

  return (
    <div ref={ref} className="space-y-3">
      <div className="grid grid-cols-8 gap-1">
        {QUAD_GRID.map((row, r) => row.map((val, c) => {
          const key = `${r}-${c}`;
          const isHighlighted = highlights.has(key);
          return (
            <div
              key={key}
              className={`aspect-square rounded-sm flex items-center justify-center text-[10px] font-mono transition-all ${
                isHighlighted ? 'bg-green-500 text-white shadow-md shadow-green-500/30' : val === 1 ? 'bg-gray-300 dark:bg-gray-600 text-gray-600 dark:text-gray-300' : 'bg-gray-100 dark:bg-gray-800/50 text-gray-300 dark:text-gray-700'
              }`}
            >
              {val}
            </div>
          );
        }))}
      </div>
      <div className="flex items-center justify-between text-[10px] text-gray-500">
        <span className="font-mono">Patterns found: {foundCount}</span>
        <button onClick={() => { setHighlights(new Set()); setFoundCount(0); setScanning(true); }} className="text-blue-500 hover:text-blue-400 font-medium text-xs">Replay</button>
      </div>
    </div>
  );
};

/* ─── Engine Card Data ─── */
const engines = [
  {
    title: 'Brainfuck Interpreter',
    subtitle: 'Virtual Memory Tape',
    icon: Cpu,
    description: 'A working interpreter managing virtual memory tapes and program counters. Watch it execute "Hello World!" one instruction at a time.',
    component: BrainfuckViz,
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    title: 'Recursive Sudoku Solver',
    subtitle: 'Backtracking Algorithm',
    icon: Grid3X3,
    description: 'Visualizes backtracking — cells fill, detect conflicts, revert, and try until solved.',
    component: SudokuViz,
    gradient: 'from-indigo-600 to-purple-500',
  },
  {
    title: 'Quadchecker Engine',
    subtitle: 'Pattern Recognition',
    icon: Search,
    description: 'Scans a binary grid to detect 2×2 square patterns. Watch each quadrilateral highlighted in real-time.',
    component: QuadcheckerViz,
    gradient: 'from-emerald-600 to-teal-500',
  },
];

/* ─── Main Section: Horizontal Scroll ─── */
export const LogicEngines = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Map vertical scroll to horizontal translation
  const x = useTransform(scrollYProgress, [0, 1], ['5%', '-65%']);

  return (
    <section id="logic-engines" ref={containerRef} className="horizontal-scroll-container bg-white dark:bg-gray-900/50 transition-colors duration-300">
      <div className="horizontal-scroll-sticky">
        <div className="max-w-none px-8 sm:px-12 w-full">
          {/* Section Label - fixed on left */}
          <div className="absolute top-8 left-8 sm:left-12 z-10">
            <span className="text-xs font-semibold tracking-[0.3em] uppercase text-blue-600 dark:text-blue-400 block mb-1">
              Logic Engines
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight">
              The Piscine Projects
            </h2>
            <p className="text-gray-500 dark:text-gray-400 text-sm mt-2 max-w-xs">
              Built during Learn2Earn — 4 weeks of zero instruction, pure problem-solving in Go.
            </p>
          </div>

          {/* Horizontal Track */}
          <motion.div
            className="horizontal-scroll-track pt-24 sm:pt-28"
            style={{ x }}
          >
            {engines.map((engine) => (
              <motion.div
                key={engine.title}
                className="flex-shrink-0 w-[85vw] sm:w-[60vw] lg:w-[38vw]"
                initial={{ opacity: 0.3, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.5 }}
              >
                <div className="h-full bg-white dark:bg-gray-800/60 backdrop-blur-sm rounded-3xl border border-gray-100 dark:border-gray-700/50 overflow-hidden shadow-sm hover:shadow-2xl transition-all">
                  {/* Header */}
                  <div className={`p-6 bg-gradient-to-r ${engine.gradient} relative`}>
                    <div className="absolute inset-0 bg-black/10" />
                    <div className="relative z-10 flex items-center gap-3">
                      <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-sm">
                        <engine.icon size={24} className="text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-white text-lg">{engine.title}</h3>
                        <p className="text-white/70 text-sm">{engine.subtitle}</p>
                      </div>
                    </div>
                  </div>

                  {/* Visualization */}
                  <div className="p-6">
                    <engine.component />
                  </div>

                  {/* Description */}
                  <div className="px-6 pb-6">
                    <p className="text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                      {engine.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
