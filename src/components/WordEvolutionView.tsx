import React, { useState, useEffect } from 'react';
import { WORD_EVOLUTION_DATABASE } from '../data/wordEvolutionData';
import { LanguageCode, WordEvolutionRecord } from '../types/tamilver';
import { REGIONAL_LANGUAGES } from '../data/translations';
import { TamilVirtualKeypad } from './TamilVirtualKeypad';
import { TimelineGlyphIcon } from './ModuleIcons';
import {
  Search,
  BookOpen,
  GitCommit,
  Keyboard,
  BookmarkPlus,
  Printer,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ExternalLink
} from 'lucide-react';

interface WordEvolutionViewProps {
  currentLanguage: LanguageCode;
  userId?: string;
  onNavigateToSavedResearch?: () => void;
}

export const WordEvolutionView: React.FC<WordEvolutionViewProps> = ({
  currentLanguage,
  userId = 'tamizhan@tamilver.org',
  onNavigateToSavedResearch
}) => {
  const [wordsList, setWordsList] = useState<WordEvolutionRecord[]>(WORD_EVOLUTION_DATABASE);
  const [selectedWord, setSelectedWord] = useState<WordEvolutionRecord>(WORD_EVOLUTION_DATABASE[0]);
  const [searchTerm, setSearchTerm] = useState('');
  const [showKeypad, setShowKeypad] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccessMsg, setSaveSuccessMsg] = useState<string | null>(null);

  const lang = REGIONAL_LANGUAGES[currentLanguage];

  // Try fetching words from SQLite backend
  useEffect(() => {
    async function loadWords() {
      try {
        const res = await fetch(`/api/words/search?q=${encodeURIComponent(searchTerm)}`);
        const json = await res.json();
        if (json.success && Array.isArray(json.data) && json.data.length > 0) {
          // If database returns words, merge/use them or keep our rich local word library
        }
      } catch (e) {
        console.warn('Word search API notice:', e);
      }
    }
    loadWords();
  }, [searchTerm]);

  const filteredWords = wordsList.filter(item => {
    const q = searchTerm.toLowerCase().trim();
    if (!q) return true;
    return (
      item.conceptTamil.includes(q) ||
      item.conceptEnglish.toLowerCase().includes(q) ||
      item.ancientTamilWord.includes(q) ||
      item.modernTamilWord.toLowerCase().includes(q)
    );
  });

  const handleSaveToDatabase = async () => {
    setIsSaving(true);
    setSaveSuccessMsg(null);
    try {
      const payload = {
        userId,
        title: `${selectedWord.conceptTamil} (${selectedWord.conceptEnglish}) சொல் பரிணாம ஒப்பாய்வு`,
        researchType: 'word_evolution',
        researchData: {
          conceptTamil: selectedWord.conceptTamil,
          conceptEnglish: selectedWord.conceptEnglish,
          ancientWord: selectedWord.ancientTamilWord,
          modernWord: selectedWord.modernTamilWord,
          rootEtymology: selectedWord.rootEtymology,
          meaningShift: selectedWord.meaningShift,
          spellingTimeline: selectedWord.spellingEvolution.map(s => ({
            era: s.eraNameTamil,
            century: s.century,
            glyph: s.glyphRepresentation,
            context: s.historicalContext
          })),
          evidence: selectedWord.literaryEvidence.map(e => ({
            work: e.workName,
            excerpt: e.verseExcerpt,
            meaning: e.verseMeaning
          })),
          savedAt: new Date().toISOString()
        }
      };

      const res = await fetch('/api/research', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      const data = await res.json();
      if (data.success) {
        setSaveSuccessMsg('ஆய்வுக் குறிப்பு வெற்றிகரமாகத் தரவுத்தளத்தில் சேமிக்கப்பட்டது!');
        setTimeout(() => setSaveSuccessMsg(null), 4000);
      }
    } catch (e) {
      console.error('Error saving research:', e);
    } finally {
      setIsSaving(false);
    }
  };

  const handlePrintReport = () => {
    window.print();
  };

  return (
    <div className="space-y-6 font-tamil">
      {/* Search & Word Selection Header */}
      <div className="bg-white border border-[#D6A84F]/40 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-100 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-[#FFF9EE] border border-[#D6A84F] flex items-center justify-center text-[#087A59] shadow-2xs">
              <TimelineGlyphIcon className="w-7 h-7" />
            </div>
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-[#087A59] font-bold">
                P3 தீர்வு · Word Evolution Across Historical Eras
              </div>
              <h2 className="font-tamil-serif text-2xl font-bold text-[#123D30] mt-0.5">
                {lang.navWordRoots} (Linguistic Evolution Engine)
              </h2>
              <p className="text-xs text-stone-600 font-sans leading-relaxed">
                ஆவணப்படுத்தப்பட்ட இலக்கியச் சான்றுகளின் அடிப்படையில், பழந்தமிழ் மற்றும் நவீனத் தமிழ் சொற்களை ஒப்பிட்டு, எழுத்து வடிவம், பொருள் மற்றும் பயன்பாட்டில் ஏற்பட்ட மாற்றங்கள்.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowKeypad(!showKeypad)}
              className="px-3.5 py-1.5 bg-[#FFF9EE] hover:bg-[#E8D8B7] text-[#123D30] text-xs font-semibold rounded-xl border border-[#D6A84F] flex items-center gap-1.5 transition-colors cursor-pointer shadow-2xs"
            >
              <Keyboard className="w-4 h-4 text-[#087A59]" />
              <span>{showKeypad ? 'விசைப்பலகையை மறை' : lang.keyboardToggle}</span>
            </button>
          </div>
        </div>

        {/* Search input with live filter */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
          <input
            type="text"
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            placeholder={lang.searchPlaceholder}
            className="w-full pl-9 pr-3 py-2.5 bg-[#FFF9EE]/50 border border-[#D6A84F]/40 rounded-xl text-xs font-tamil text-[#202A25] focus:outline-none focus:border-[#087A59] focus:bg-white"
          />
        </div>

        {/* Word Chips Carousel */}
        <div className="space-y-2">
          <div className="text-xs font-semibold text-stone-600 font-mono uppercase flex items-center justify-between">
            <span>ஆய்வுச் சொற்கள் (Comparative Concepts):</span>
            <span className="text-[11px] text-stone-400 font-sans">{filteredWords.length} சொற்கள் உள்ளன</span>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {filteredWords.map(word => {
              const isSelected = selectedWord.id === word.id;
              return (
                <button
                  key={word.id}
                  onClick={() => setSelectedWord(word)}
                  className={`px-3.5 py-2 rounded-xl border text-left transition-all cursor-pointer ${
                    isSelected
                      ? 'bg-[#123D30] text-[#FFF9EE] border-[#D6A84F] shadow-sm ring-1 ring-[#D6A84F]/30'
                      : 'bg-white border-stone-200 text-stone-800 hover:bg-[#FFF9EE] hover:border-[#087A59]/40'
                  }`}
                >
                  <div className="font-bold text-sm">
                    {word.conceptTamil} ({word.conceptEnglish})
                  </div>
                  <div className={`text-[10px] ${isSelected ? 'text-[#D6A84F]' : 'text-stone-500'}`}>
                    பழையது: {word.ancientTamilWord.split('/')[0]}
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tamil Keypad */}
        {showKeypad && (
          <div className="pt-2">
            <TamilVirtualKeypad
              onInsertChar={char => setSearchTerm(prev => prev + char)}
              onBackspace={() => setSearchTerm(prev => prev.slice(0, -1))}
              onClear={() => setSearchTerm('')}
              onSpace={() => setSearchTerm(prev => prev + ' ')}
              activeInputLabel="சொல் தேடல்"
            />
          </div>
        )}
      </div>

      {saveSuccessMsg && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center justify-between shadow-xs">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>{saveSuccessMsg}</span>
          </div>
          {onNavigateToSavedResearch && (
            <button
              onClick={onNavigateToSavedResearch}
              className="text-xs text-emerald-800 underline font-bold cursor-pointer hover:text-emerald-950"
            >
              சேமித்த ஆய்வுகளைப் பார்க்க →
            </button>
          )}
        </div>
      )}

      {/* Selected Word Deep Linguistic Analysis Card */}
      <div className="bg-white border border-[#D6A84F]/40 rounded-2xl p-6 sm:p-8 shadow-xs space-y-6">
        {/* Header Banner & Save Action */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-stone-200 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#087A59] font-bold">
              <ShieldCheck className="w-4 h-4 text-[#D6A84F]" />
              <span>சான்றளிக்கப்பட்ட ஆவணப் பதிவேடு · Verified Linguistic Record</span>
            </div>
            <h3 className="font-tamil-serif text-3xl font-bold text-[#123D30] mt-1">
              {selectedWord.conceptTamil} ({selectedWord.conceptEnglish})
            </h3>
          </div>

          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handleSaveToDatabase}
              disabled={isSaving}
              className="px-4 py-2 bg-[#123D30] hover:bg-[#087A59] text-[#FFF9EE] border border-[#D6A84F] rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-xs transition-colors"
            >
              <BookmarkPlus className="w-4 h-4 text-[#D6A84F]" />
              <span>{isSaving ? 'சேமிக்கப்படுகிறது...' : lang.saveResearchBtn}</span>
            </button>

            <button
              onClick={handlePrintReport}
              className="px-3.5 py-2 bg-[#FFF9EE] hover:bg-[#E8D8B7] text-[#123D30] border border-[#D6A84F] rounded-xl text-xs font-semibold flex items-center gap-1.5 cursor-pointer shadow-2xs transition-colors"
              title="அறிக்கையை அச்சிடுக"
            >
              <Printer className="w-4 h-4 text-[#087A59]" />
              <span className="hidden sm:inline">{lang.exportReportBtn}</span>
            </button>
          </div>
        </div>

        {/* Word Badges */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
          <div className="p-3 bg-[#FFF9EE] rounded-xl border border-[#D6A84F]/40 text-[#123D30]">
            <span className="text-[10px] text-stone-500 block uppercase font-bold">பழந்தமிழ் வடிவம் (Old Tamil):</span>
            <span className="font-bold text-base text-[#123D30] font-tamil-serif">{selectedWord.ancientTamilWord}</span>
          </div>
          <div className="p-3 bg-[#087A59]/10 rounded-xl border border-[#087A59]/30 text-[#123D30]">
            <span className="text-[10px] text-stone-500 block uppercase font-bold">நவீனத் தமிழ் வடிவம் (Modern Tamil):</span>
            <span className="font-bold text-base text-[#087A59] font-tamil-serif">{selectedWord.modernTamilWord}</span>
          </div>
        </div>

        {/* Root Etymology Card */}
        <div className="p-4 bg-[#FFF9EE]/70 rounded-xl border border-[#D6A84F]/40 space-y-1.5">
          <div className="text-xs font-mono font-bold text-[#087A59] uppercase tracking-wider">
            வேர்ச்சொல் தோற்றம் (Etymological Root Origin)
          </div>
          <p className="text-sm text-stone-800 leading-relaxed font-sans">
            {selectedWord.rootEtymology}
          </p>
        </div>

        {/* 1. Historical Inscription & Spelling Evolution Timeline */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-[#123D30] font-mono uppercase tracking-wider flex items-center gap-2">
              <GitCommit className="w-4 h-4 text-[#087A59]" />
              <span>எழுத்து வடிவப் பரிணாமம் (Historical Spelling &amp; Script Evolution)</span>
            </h4>
            <span className="text-[11px] text-stone-500 font-sans">வரலாற்று வரிவடிவ மாற்றங்கள்</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {selectedWord.spellingEvolution.map((era, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl border border-[#D6A84F]/30 hover:border-[#087A59] transition-all space-y-2 flex flex-col justify-between shadow-2xs"
              >
                <div className="space-y-1">
                  <div className="text-[11px] font-bold text-[#087A59] font-tamil">
                    {era.eraNameTamil}
                  </div>
                  <div className="text-[10px] text-stone-500 font-mono">{era.century}</div>
                </div>

                <div className="text-xl font-tamil-serif font-bold text-[#123D30] bg-[#FFF9EE] py-2.5 px-3 rounded-lg border border-[#D6A84F]/40 text-center tracking-wider shadow-2xs">
                  {era.glyphRepresentation}
                </div>

                <div className="text-[11px] text-stone-600 font-sans leading-tight">
                  {era.historicalContext}
                </div>

                {era.inscriptionLocation && (
                  <div className="pt-1.5 border-t border-stone-100 flex items-center gap-1 text-[10px] text-stone-500">
                    <MapPin className="w-3 h-3 text-[#D6A84F] shrink-0" />
                    <span className="truncate">{era.inscriptionLocation}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* 2. Meaning & Semantic Shift Comparison */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-5 bg-[#FFF9EE] rounded-xl border border-[#D6A84F]/50 space-y-2 shadow-2xs">
            <div className="text-xs font-mono font-bold text-[#123D30] uppercase tracking-wider">
              பழந்தமிழில் பொருள் (Ancient Classical Meaning)
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-sans">
              {selectedWord.meaningShift.ancientMeaning}
            </p>
          </div>

          <div className="p-5 bg-[#087A59]/10 rounded-xl border border-[#087A59]/30 space-y-2 shadow-2xs">
            <div className="text-xs font-mono font-bold text-[#087A59] uppercase tracking-wider">
              நவீனத் தமிழில் பொருள் (Modern Meaning)
            </div>
            <p className="text-xs text-stone-700 leading-relaxed font-sans">
              {selectedWord.meaningShift.modernMeaning}
            </p>
          </div>
        </div>

        {/* 3. Literary Evidence & Documented Verses */}
        <div className="space-y-3 pt-2">
          <h4 className="text-sm font-bold text-[#123D30] font-mono uppercase tracking-wider flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-[#087A59]" />
            <span>ஆவணப்படுத்தப்பட்ட இலக்கியச் சான்றுகள் (Documented Literary Evidence)</span>
          </h4>

          <div className="space-y-3">
            {selectedWord.literaryEvidence.map((cit, idx) => (
              <div
                key={idx}
                className="p-4 bg-white rounded-xl border border-[#D6A84F]/30 space-y-2 shadow-2xs"
              >
                <div className="flex items-center justify-between text-xs font-semibold text-stone-900">
                  <span className="text-[#087A59] font-bold">{cit.workName}</span>
                  <span className="text-stone-500 font-mono text-[11px]">{cit.era}</span>
                </div>

                <pre className="font-tamil-serif text-xs font-bold text-[#123D30] whitespace-pre-wrap leading-relaxed bg-[#FFF9EE] p-3 rounded-lg border border-[#D6A84F]/30 shadow-2xs">
                  {cit.verseExcerpt}
                </pre>

                <p className="text-xs text-stone-700 font-sans leading-relaxed">
                  <strong className="text-stone-900">விளக்கம்: </strong>
                  {cit.verseMeaning}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
