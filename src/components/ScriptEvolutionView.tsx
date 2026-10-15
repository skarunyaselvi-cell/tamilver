import React, { useState } from 'react';
import { SCRIPT_LETTERS_DATABASE } from '../data/tamilScriptEvolutionData';
import { TamilVirtualKeypad } from './TamilVirtualKeypad';
import { LanguageCode } from '../types/tamilver';
import { REGIONAL_LANGUAGES } from '../data/translations';
import { Search, History, Keyboard, Sparkles } from 'lucide-react';

interface ScriptEvolutionViewProps {
  currentLanguage: LanguageCode;
}

export const ScriptEvolutionView: React.FC<ScriptEvolutionViewProps> = ({ currentLanguage }) => {
  const [searchTerm, setSearchTerm] = useState('தமிழ்');
  const [showKeypad, setShowKeypad] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState(SCRIPT_LETTERS_DATABASE[0]);

  const lang = REGIONAL_LANGUAGES[currentLanguage];

  const quickWords = ['தமிழ்', 'கல்', 'கண்', 'அரசன்', 'நீர்', 'நிலம்', 'நாடு', 'சொல்', 'நட்பு', 'அன்பு', 'தாய்', 'வீடு'];

  // Match letters or words from search
  const queryChars = Array.from(searchTerm.trim());
  const matchedLetters = SCRIPT_LETTERS_DATABASE.filter(item => {
    if (!searchTerm.trim()) return true;
    return (
      searchTerm.includes(item.modernChar) ||
      item.modernChar.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.phoneticName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const handleKeypadInsert = (char: string) => {
    setSearchTerm(prev => prev + char);
  };

  const handleKeypadBackspace = () => {
    setSearchTerm(prev => prev.slice(0, -1));
  };

  const handleKeypadClear = () => {
    setSearchTerm('');
  };

  const handleKeypadSpace = () => {
    setSearchTerm(prev => prev + ' ');
  };

  return (
    <div className="space-y-6 font-tamil">
      {/* Title & Cultural Banner */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs font-semibold">
              <History className="w-3.5 h-3.5 text-amber-700" />
              <span>கி.மு. 4ஆம் நூற்றாண்டு கீழடி முதல் இன்றைய கணினித் தமிழ் வரை</span>
            </div>
            <h2 className="font-tamil-serif text-2xl font-bold text-stone-900">
              தமிழ் எழுத்து வடிவங்களின் பரிணாமம் (Script Evolution)
            </h2>
            <p className="text-xs text-stone-600 font-sans leading-relaxed">
              தமிழ்ப் பிராமி (தமிழி), வட்டெழுத்து, பல்லவர், சோழர் காலக் கல்வெட்டு எழுத்துக்கள் மற்றும் நவீன வரிவடிவ ஒப்பீடு.
            </p>
          </div>

          <button
            onClick={() => setShowKeypad(!showKeypad)}
            className="px-3 py-1.5 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg border border-stone-300 flex items-center gap-1.5 transition-colors cursor-pointer"
          >
            <Keyboard className="w-4 h-4 text-emerald-700" />
            <span>{showKeypad ? 'விசைப்பலகையை மறை' : 'தமிழ் விசைப்பலகை'}</span>
          </button>
        </div>

        {/* Dual Search Input with Keypad Support */}
        <div className="pt-2">
          <div className="relative">
            <Search className="w-4 h-4 text-stone-400 absolute left-3.5 top-3.5" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="எழுத்து அல்லது சொல்லைத் தேடுக (எ.கா: தமிழ், கல், அரசன், நட்பு, அன்பு, தாய்)..."
              className="w-full bg-stone-50 border border-stone-300 rounded-xl pl-10 pr-4 py-3 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none focus:border-emerald-600 focus:ring-2 focus:ring-emerald-500/20 font-tamil"
            />
          </div>

          {/* Quick Word Suggestions */}
          <div className="flex flex-wrap items-center gap-1.5 pt-2 text-xs">
            <span className="text-stone-500 font-medium">பரிந்துரை சொற்கள்:</span>
            {quickWords.map(w => (
              <button
                key={w}
                onClick={() => setSearchTerm(w)}
                className="px-2.5 py-1 rounded-md bg-stone-100 hover:bg-emerald-50 hover:text-emerald-800 border border-stone-200 text-stone-700 cursor-pointer transition-colors"
              >
                {w}
              </button>
            ))}
          </div>
        </div>

        {/* Tamil Virtual Keypad dropdown */}
        {showKeypad && (
          <div className="pt-2">
            <TamilVirtualKeypad
              onInsertChar={handleKeypadInsert}
              onBackspace={handleKeypadBackspace}
              onClear={handleKeypadClear}
              onSpace={handleKeypadSpace}
              activeInputLabel="எழுத்துத் தேடல் பெட்டி"
            />
          </div>
        )}
      </div>

      {/* Searched Word Inscription Timeline Breakdown */}
      {queryChars.length > 0 && (
        <div className="bg-amber-50/50 border border-amber-200 rounded-2xl p-6 shadow-xs space-y-4">
          <div className="flex items-center gap-2 text-amber-900 font-bold text-sm">
            <Sparkles className="w-4 h-4 text-amber-700" />
            <span>தேடப்பட்ட சொல்: &quot;{searchTerm}&quot; — வரலாற்று வரிவடிவப் பரிணாமம்</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-center">
            {/* Era 1: Tamil Brahmi */}
            <div className="p-4 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-2">
              <div className="text-[11px] font-mono font-bold text-amber-800 uppercase">
                1. தமிழ்ப் பிராமி (தமிழி)
              </div>
              <div className="text-[10px] text-stone-500 font-mono">கி.மு. 3ஆம் - கி.பி. 2ஆம் நூ.</div>
              <div className="text-3xl font-serif text-amber-900 py-3 tracking-widest bg-amber-50/40 rounded-lg border border-amber-100">
                {queryChars.map((ch, idx) => {
                  const match = SCRIPT_LETTERS_DATABASE.find(l => l.modernChar === ch);
                  return <span key={idx} className="mx-1">{match ? match.brahmiGlyph : ch}</span>;
                })}
              </div>
              <div className="text-[11px] text-stone-600 leading-tight">
                கீழடி, மாங்குளம், புகழூர்க் கல்வெட்டு வடிவம்
              </div>
            </div>

            {/* Era 2: Vatteluttu */}
            <div className="p-4 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-2">
              <div className="text-[11px] font-mono font-bold text-amber-800 uppercase">
                2. வட்டெழுத்து
              </div>
              <div className="text-[10px] text-stone-500 font-mono">கி.பி. 5ஆம் - 10ஆம் நூ.</div>
              <div className="text-3xl font-serif text-amber-900 py-3 tracking-widest bg-amber-50/40 rounded-lg border border-amber-100">
                {queryChars.map((ch, idx) => {
                  const match = SCRIPT_LETTERS_DATABASE.find(l => l.modernChar === ch);
                  return <span key={idx} className="mx-1">{match ? match.vatteluttuGlyph : ch}</span>;
                })}
              </div>
              <div className="text-[11px] text-stone-600 leading-tight">
                பாண்டியர், சேர நாட்டு நடுகல் நெளிவு வடிவம்
              </div>
            </div>

            {/* Era 3: Pallava */}
            <div className="p-4 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-2">
              <div className="text-[11px] font-mono font-bold text-amber-800 uppercase">
                3. பல்லவர் கால எழுத்து
              </div>
              <div className="text-[10px] text-stone-500 font-mono">கி.பி. 7ஆம் - 9ஆம் நூ.</div>
              <div className="text-2xl font-serif font-bold text-amber-900 py-3 tracking-widest bg-amber-50/40 rounded-lg border border-amber-100">
                {queryChars.map((ch, idx) => (
                  <span key={idx} className="mx-0.5">{ch}</span>
                ))}
              </div>
              <div className="text-[11px] text-stone-600 leading-tight">
                மாமல்லபுரம், காஞ்சிக் குடைவரை வரிவடிவம்
              </div>
            </div>

            {/* Era 4: Chola */}
            <div className="p-4 bg-white rounded-xl border border-amber-200 shadow-2xs space-y-2">
              <div className="text-[11px] font-mono font-bold text-amber-800 uppercase">
                4. சோழர் காலத் தமிழ்
              </div>
              <div className="text-[10px] text-stone-500 font-mono">கி.பி. 10ஆம் - 13ஆம் நூ.</div>
              <div className="text-2xl font-serif font-bold text-amber-900 py-3 tracking-widest bg-amber-50/40 rounded-lg border border-amber-100">
                {queryChars.map((ch, idx) => (
                  <span key={idx} className="mx-0.5">{ch}</span>
                ))}
              </div>
              <div className="text-[11px] text-stone-600 leading-tight">
                தஞ்சைப் பெருவுடையார் கோவில் செதுக்கல்
              </div>
            </div>

            {/* Era 5: Modern Tamil */}
            <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-300 shadow-2xs space-y-2">
              <div className="text-[11px] font-mono font-bold text-emerald-900 uppercase">
                5. நவீனத் தமிழ்
              </div>
              <div className="text-[10px] text-emerald-700 font-mono">18ஆம் நூ. - இன்றைய அச்சு</div>
              <div className="text-3xl font-tamil font-bold text-emerald-900 py-3 tracking-widest bg-white rounded-lg border border-emerald-200">
                {searchTerm}
              </div>
              <div className="text-[11px] text-emerald-800 leading-tight">
                வீரமாமுனிவர், பெரியார் சீர்திருத்த வடிவம்
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Letter Explorer Catalog */}
      <div className="bg-white border border-stone-200 rounded-2xl p-6 shadow-xs space-y-4">
        <div className="flex items-center justify-between border-b border-stone-100 pb-3">
          <h3 className="font-tamil-serif text-lg font-bold text-stone-900">
            எழுத்து வாரியான வரிவடிவ ஒப்பீடு (Letter by Letter Archaeological Study)
          </h3>
          <span className="text-xs text-stone-500 font-mono">
            {matchedLetters.length} எழுத்துகள் காட்டப்படுகின்றன
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {matchedLetters.map(letter => {
            const isSelected = selectedLetter.modernChar === letter.modernChar;
            return (
              <div
                key={letter.modernChar}
                onClick={() => setSelectedLetter(letter)}
                className={`p-4 rounded-xl border cursor-pointer transition-all space-y-2 ${
                  isSelected
                    ? 'bg-emerald-50/70 border-emerald-600 ring-2 ring-emerald-500/20 shadow-xs'
                    : 'bg-stone-50/60 border-stone-200 hover:border-stone-300 hover:bg-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span className="w-10 h-10 rounded-lg bg-white border border-stone-300 flex items-center justify-center font-tamil text-xl font-bold text-stone-900 shadow-2xs">
                      {letter.modernChar}
                    </span>
                    <div>
                      <div className="font-tamil font-bold text-sm text-stone-900">
                        {letter.phoneticName}
                      </div>
                      <div className="text-[10px] font-mono text-stone-500">
                        பிராமி: {letter.brahmiUnicode}
                      </div>
                    </div>
                  </div>
                  <span className="text-2xl font-serif text-amber-800 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {letter.brahmiGlyph}
                  </span>
                </div>

                <div className="text-xs text-stone-600 font-sans leading-relaxed pt-1 border-t border-stone-200/60">
                  {letter.evolutionNotes}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
