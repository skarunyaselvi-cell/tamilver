import React from 'react';
import { Sprout, Compass, Sparkles, BookOpen, Calendar, Calculator, Printer } from 'lucide-react';

interface NavbarProps {
  activeView: 'canvas' | 'plants' | 'companions' | 'calendar';
  setActiveView: (view: 'canvas' | 'plants' | 'companions' | 'calendar') => void;
  onOpenPreferences: () => void;
  onOpenMaterials: () => void;
  onOpenPrint: () => void;
  currentGardenName: string;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeView,
  setActiveView,
  onOpenPreferences,
  onOpenMaterials,
  onOpenPrint,
  currentGardenName
}) => {
  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200 text-stone-900 shadow-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Single text element wordmark */}
        <div className="flex items-center gap-3 shrink-0">
          <div className="w-9 h-9 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center text-emerald-700 shadow-2xs">
            <Sprout className="w-5 h-5" />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-lg font-semibold tracking-tight text-stone-900 whitespace-nowrap">
              Verdant Studio
            </span>
            <span className="text-[11px] text-stone-500 truncate max-w-[200px] sm:max-w-[280px]">
              {currentGardenName}
            </span>
          </div>
        </div>

        {/* Zone 2: 4–5 clean single-line text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-stone-600">
          <button
            onClick={() => setActiveView('canvas')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 pb-0.5 cursor-pointer ${
              activeView === 'canvas'
                ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                : 'hover:text-stone-900'
            }`}
          >
            <Compass className="w-4 h-4" />
            <span>2D Layout Canvas</span>
          </button>

          <button
            onClick={() => setActiveView('plants')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 pb-0.5 cursor-pointer ${
              activeView === 'plants'
                ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                : 'hover:text-stone-900'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Botanical Library</span>
          </button>

          <button
            onClick={() => setActiveView('companions')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 pb-0.5 cursor-pointer ${
              activeView === 'companions'
                ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                : 'hover:text-stone-900'
            }`}
          >
            <Sparkles className="w-4 h-4" />
            <span>Companion Matrix</span>
          </button>

          <button
            onClick={() => setActiveView('calendar')}
            className={`flex items-center gap-1.5 transition-colors whitespace-nowrap shrink-0 pb-0.5 cursor-pointer ${
              activeView === 'calendar'
                ? 'text-emerald-700 font-semibold border-b-2 border-emerald-600'
                : 'hover:text-stone-900'
            }`}
          >
            <Calendar className="w-4 h-4" />
            <span>Seasonal Care</span>
          </button>
        </nav>

        {/* Zone 3: Action group with primary CTA */}
        <div className="flex items-center gap-2.5 shrink-0">
          <button
            onClick={onOpenMaterials}
            title="Materials & Quantities"
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
          >
            <Calculator className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenPrint}
            title="Print Blueprint"
            className="p-2 text-stone-600 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors cursor-pointer"
          >
            <Printer className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenPreferences}
            className="px-3.5 py-1.5 text-xs font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md shadow-xs transition-colors whitespace-nowrap shrink-0 flex items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>New Garden</span>
          </button>
        </div>
      </div>
    </header>
  );
};
