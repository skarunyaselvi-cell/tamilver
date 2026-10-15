import React, { useState } from 'react';
import { TAMIL_LITERATURE_CORPUS } from '../data/tamilLiteratureData';
import { WORD_EVOLUTION_DATABASE } from '../data/wordEvolutionData';
import { LiteratureCategory, LiteratureWork, LanguageCode } from '../types/tamilver';
import { REGIONAL_LANGUAGES } from '../data/translations';
import { TamilVirtualKeypad } from './TamilVirtualKeypad';
import {
  Search,
  BookOpen,
  Keyboard,
  Sparkles,
  ArrowRight,
  User,
  Quote,
  Layers,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

interface LiteratureExplorerProps {
  currentLanguage: LanguageCode;
}

export const LiteratureExplorer: React.FC<LiteratureExplorerProps> = ({ currentLanguage }) => {
  const [searchTerm, setSearchTerm] = useState('friendship');
  const [selectedCategory, setSelectedCategory] = useState<LiteratureCategory | 'all'>('all');
  const [showKeypad, setShowKeypad] = useState(false);
  const [expandedBookId, setExpandedBookId] = useState<string | null>('lit-thirukkural');

  const lang = REGIONAL_LANGUAGES[currentLanguage];

  const categories: Array<{ id: LiteratureCategory | 'all'; label: string; count: number }> = [
    { id: 'all', label: 'அனைத்து நூல்கள்', count: TAMIL_LITERATURE_CORPUS.length },
    { id: 'ettuthogai', label: 'எட்டுத்தொகை (8)', count: 8 },
    { id: 'pathuppattu', label: 'பத்துப்பாட்டு (10)', count: 10 },
    { id: 'pathinenkeelkanakku', label: 'பதினெண்கீழ்க்கணக்கு (18)', count: 18 },
    { id: 'aimperum_kappiyam', label: 'ஐம்பெரும் காப்பியங்கள் (5)', count: 5 },
    { id: 'ainchiru_kappiyam', label: 'ஐஞ்சிறு காப்பியங்கள் (5)', count: 5 },
    { id: 'bakthi_ilakkiyam', label: 'பக்தி இலக்கியங்கள் (5)', count: 5 },
    { id: 'other_classics', label: 'பிற காப்பியங்கள் (3)', count: 3 }
  ];

  // Quick search keywords
  const quickSearches = [
    { label: 'Friendship (நட்பு)', value: 'friendship' },
    { label: 'Love (அன்பு/காதல்)', value: 'love' },
    { label: 'King (அரசன்/வேந்தன்)', value: 'king' },
    { label: 'Nature (இயற்கை)', value: 'nature' },
    { label: 'Rain (மழை)', value: 'rain' },
    { label: 'War & Valour (வீரம்)', value: 'war' },
    { label: 'Stone (கல்)', value: 'stone' }
  ];

  // Check if search matches any word evolution record
  const matchingWordEvolution = WORD_EVOLUTION_DATABASE.find(item => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return false;
    return (
      item.conceptEnglish.toLowerCase().includes(q) ||
      item.conceptTamil.includes(q) ||
      item.ancientTamilWord.includes(q) ||
      item.modernTamilWord.toLowerCase().includes(q)
    );
  });

  // Filter books based on search query and category
  const filteredBooks = TAMIL_LITERATURE_CORPUS.filter(book => {
    const matchesCategory =
      selectedCategory === 'all' || book.category === selectedCategory;

    if (!searchTerm.trim()) return matchesCategory;

    const q = searchTerm.toLowerCase().trim();
    const matchesSearch =
      book.nameTamil.toLowerCase().includes(q) ||
      book.nameEnglish.toLowerCase().includes(q) ||
      book.author.toLowerCase().includes(q) ||
      book.specialFeature.toLowerCase().includes(q) ||
      book.poemSample.verse.toLowerCase().includes(q) ||
      book.poemSample.explanation.toLowerCase().includes(q) ||
      book.keywords.some(k => k.toLowerCase().includes(q));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 font-tamil">
      {/* Top Search Banner with Dual Keypad Option */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3 border-b border-stone-100 pb-3">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-emerald-800 font-semibold">
              இலக்கியத் தேடுபொறி · Dual Tamil &amp; English Search Engine
            </div>
            <h2 className="font-tamil-serif text-2xl font-bold text-stone-900 mt-0.5">
              பழந்தமிழ் இலக்கியக் களஞ்சியம் (Ancient Tamil Literature)
            </h2>
          </div>

          <button
            onClick={() => setShowKeypad(!showKeypad)}
            className="px-3.5 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg border border-stone-300 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Keyboard className="w-4 h-4 text-emerald-700" />
            <span>{showKeypad ? 'விசைப்பலகையை மறை' : 'தமிழ் விசைப்பலகை'}</span>
          </button>
        </div>

        {/* Search Input Field */}
        <div className="space-y-2">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="எந்தச் சொல்லையும் ஆங்கிலத்திலோ தமிழிலோ தேடுக (எ.கா: friendship, நட்பு, love, அன்பு, king, அரசன்)..."
              className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 font-tamil"
            />
          </div>

          {/* Quick Search Chips */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1 text-xs">
            <span className="text-stone-500 font-medium">விரைவுத் தேடல்கள்:</span>
            {quickSearches.map(item => (
              <button
                key={item.value}
                onClick={() => setSearchTerm(item.value)}
                className={`px-2.5 py-1 rounded-md border text-xs cursor-pointer transition-colors ${
                  searchTerm === item.value
                    ? 'bg-emerald-50 border-emerald-500 text-emerald-800 font-semibold'
                    : 'bg-stone-100 hover:bg-stone-200 border-stone-200 text-stone-700'
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Tamil On-Screen Keypad dropdown */}
        {showKeypad && (
          <div className="pt-2">
            <TamilVirtualKeypad
              onInsertChar={char => setSearchTerm(prev => prev + char)}
              onBackspace={() => setSearchTerm(prev => prev.slice(0, -1))}
              onClear={() => setSearchTerm('')}
              onSpace={() => setSearchTerm(prev => prev + ' ')}
              activeInputLabel="இலக்கியத் தேடல் பெட்டி"
            />
          </div>
        )}
      </div>

      {/* Dynamic Word Evolution & Linguistic Comparison Card (Shown when searching concepts like 'friendship', 'love', 'king'...) */}
      {matchingWordEvolution && (
        <div className="bg-emerald-50/70 border border-emerald-300 rounded-2xl p-6 shadow-xs space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-emerald-200 pb-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-emerald-700" />
              <h3 className="font-tamil-serif text-lg font-bold text-emerald-950">
                சொல் பரிணாம ஆய்வு: &quot;{matchingWordEvolution.conceptTamil} ({matchingWordEvolution.conceptEnglish})&quot;
              </h3>
            </div>
            <span className="text-xs font-mono bg-white px-2.5 py-1 rounded border border-emerald-200 text-emerald-800">
              பழந்தமிழ் ⟷ நவீனத் தமிழ் ஒப்பீடு
            </span>
          </div>

          {/* Three Pillars: Spelling, Meaning, Usage */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
            {/* 1. Words Comparison */}
            <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2">
              <div className="font-mono font-bold text-stone-500 uppercase text-[11px]">
                1. சொல்லாட்சி வேறுபாடு (Spelling &amp; Word Forms)
              </div>
              <div className="space-y-1">
                <div className="text-stone-500 text-[11px]">பழந்தமிழ் வடிவம்:</div>
                <div className="font-tamil-serif text-base font-bold text-amber-900 bg-amber-50 px-2 py-1 rounded border border-amber-200">
                  {matchingWordEvolution.ancientTamilWord}
                </div>
              </div>
              <div className="space-y-1">
                <div className="text-stone-500 text-[11px]">நவீன வடிவம்:</div>
                <div className="font-tamil font-bold text-sm text-emerald-900 bg-emerald-50 px-2 py-1 rounded border border-emerald-200">
                  {matchingWordEvolution.modernTamilWord}
                </div>
              </div>
              <p className="text-stone-600 font-sans leading-relaxed text-[11px] pt-1">
                {matchingWordEvolution.rootEtymology}
              </p>
            </div>

            {/* 2. Meaning Shift */}
            <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2">
              <div className="font-mono font-bold text-stone-500 uppercase text-[11px]">
                2. பொருள் மாற்றம் (Semantic Shift)
              </div>
              <div className="space-y-1 text-stone-700">
                <div className="font-semibold text-stone-900">பழங்காலப் பொருள்:</div>
                <p className="leading-relaxed">{matchingWordEvolution.meaningShift.ancientMeaning}</p>
              </div>
              <div className="space-y-1 text-stone-700 pt-1 border-t border-stone-100">
                <div className="font-semibold text-stone-900">நவீனப் பொருள்:</div>
                <p className="leading-relaxed">{matchingWordEvolution.meaningShift.modernMeaning}</p>
              </div>
            </div>

            {/* 3. Usage Context */}
            <div className="p-4 bg-white rounded-xl border border-emerald-200 space-y-2">
              <div className="font-mono font-bold text-stone-500 uppercase text-[11px]">
                3. பயன்பாட்டுச் சூழல் (Contextual Usage)
              </div>
              <div className="space-y-1.5 text-stone-700">
                <div className="p-2 bg-stone-50 rounded border border-stone-200">
                  <span className="font-semibold text-stone-900 block text-[10px] uppercase font-mono">சங்க காலப் பயன்பாடு:</span>
                  <span className="italic">{matchingWordEvolution.usageEvolution.ancientContext}</span>
                </div>
                <div className="p-2 bg-stone-50 rounded border border-stone-200">
                  <span className="font-semibold text-stone-900 block text-[10px] uppercase font-mono">நவீன காலப் பயன்பாடு:</span>
                  <span>{matchingWordEvolution.usageEvolution.modernContext}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Category Segmented Tabs */}
      <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-white border border-stone-200 rounded-xl shadow-2xs">
        {categories.map(cat => {
          const isSelected = selectedCategory === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all cursor-pointer ${
                isSelected
                  ? 'bg-emerald-700 text-white shadow-xs'
                  : 'text-stone-600 hover:text-stone-900 hover:bg-stone-100'
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Filtered Books Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between text-xs text-stone-500 px-1 font-mono">
          <span>{filteredBooks.length} இலக்கிய நூல்கள் காட்டப்படுகின்றன</span>
          <span>ஆசிரியர் மற்றும் இலக்கியப் பாடல் சான்றுகள்</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {filteredBooks.map(book => {
            const isExpanded = expandedBookId === book.id;

            return (
              <div
                key={book.id}
                className="p-5 bg-white border border-stone-200 rounded-2xl shadow-xs hover:border-stone-300 transition-all flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3">
                  {/* Book Title & Category Badge */}
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-amber-50 border border-amber-200 flex items-center justify-center text-amber-900 font-serif font-bold text-lg shadow-2xs">
                        {book.nameTamil[0]}
                      </div>
                      <div>
                        <h3 className="font-tamil-serif text-lg font-bold text-stone-900">
                          {book.nameTamil}
                        </h3>
                        <p className="text-xs text-stone-500 font-sans">
                          {book.nameEnglish} · {book.period}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Author Information with Badge */}
                  <div className="flex items-center gap-2 text-xs text-stone-700 bg-stone-50 p-2.5 rounded-lg border border-stone-100">
                    <User className="w-3.5 h-3.5 text-emerald-700 shrink-0" />
                    <div>
                      <span className="font-semibold text-stone-900">ஆசிரியர்: </span>
                      <span>{book.author}</span>
                    </div>
                  </div>

                  {/* Special Feature */}
                  <p className="text-xs text-stone-700 leading-relaxed font-sans">
                    <strong className="text-stone-900">முக்கியச் சிறப்பு: </strong>
                    {book.specialFeature}
                  </p>

                  {/* Sample Poem Drawer */}
                  {isExpanded && (
                    <div className="mt-3 p-4 bg-amber-50/60 rounded-xl border border-amber-200 space-y-2 animate-in fade-in duration-200">
                      <div className="flex items-center gap-1.5 text-xs font-bold text-amber-900">
                        <Quote className="w-3.5 h-3.5 text-amber-700" />
                        <span>இலக்கியப் பாடல் சான்று:</span>
                      </div>
                      <pre className="font-tamil-serif text-xs font-semibold text-stone-900 whitespace-pre-wrap leading-relaxed bg-white p-3 rounded-lg border border-amber-100 shadow-2xs">
                        {book.poemSample.verse}
                      </pre>
                      <div className="text-xs text-stone-700 font-sans leading-relaxed">
                        <strong className="text-stone-900">பொழிப்புரை: </strong>
                        {book.poemSample.explanation}
                      </div>
                      <div className="text-[11px] text-stone-500 font-sans italic border-t border-amber-200/60 pt-1.5">
                        {book.poemSample.englishSummary}
                      </div>
                    </div>
                  )}
                </div>

                {/* Footer Toggle Button */}
                <div className="pt-2 border-t border-stone-100 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1">
                    {book.keywords.slice(0, 3).map((kw, i) => (
                      <span
                        key={i}
                        className="text-[10px] text-stone-600 bg-stone-100 px-2 py-0.5 rounded font-mono"
                      >
                        #{kw}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setExpandedBookId(isExpanded ? null : book.id)}
                    className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold flex items-center gap-1 cursor-pointer"
                  >
                    <span>{isExpanded ? 'பாடலை மறை' : 'பாடல் சான்றைக் காண்க'}</span>
                    {isExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {filteredBooks.length === 0 && (
          <div className="p-12 text-center text-stone-500 bg-white rounded-2xl border border-stone-200 text-sm">
            &quot;{searchTerm}&quot; என்ற சொல்லுக்குரிய இலக்கிய நூல்கள் எதுவும் கிடைக்கவில்லை. மற்றொரு சொல்லைத் தேடுக.
          </div>
        )}
      </div>
    </div>
  );
};
