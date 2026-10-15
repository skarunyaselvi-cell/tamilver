import React, { useState } from 'react';
import { Delete, Eraser, Space } from 'lucide-react';

interface TamilVirtualKeypadProps {
  onInsertChar: (char: string) => void;
  onBackspace: () => void;
  onClear: () => void;
  onSpace: () => void;
  activeInputLabel?: string;
  isCompact?: boolean;
}

export const TamilVirtualKeypad: React.FC<TamilVirtualKeypadProps> = ({
  onInsertChar,
  onBackspace,
  onClear,
  onSpace,
  activeInputLabel,
  isCompact = false
}) => {
  const [activeTab, setActiveTab] = useState<'all' | 'uyir' | 'mei' | 'uyirmei_base' | 'symbols'>('all');

  const uyirLetters = ['அ', 'ஆ', 'இ', 'ஈ', 'உ', 'ஊ', 'எ', 'ஏ', 'ஐ', 'ஒ', 'ஓ', 'ஔ', 'ஃ'];
  const meiLetters = ['க்', 'ங்', 'ச்', 'ஞ்', 'ட்', 'ண்', 'த்', 'ந்', 'ப்', 'ம்', 'ய்', 'ர்', 'ல்', 'வ்', 'ழ்', 'ள்', 'ற்', 'ன்'];
  const uyirmeiBaseLetters = ['க', 'ங', 'ச', 'ஞ', 'ட', 'ண', 'த', 'ந', 'ப', 'ம', 'ய', 'ர', 'ல', 'வ', 'ழ', 'ள', 'ற', 'ன'];
  const symbols = ['்', 'ா', 'ி', 'ீ', 'ு', 'ூ', 'ெ', 'ே', 'ை', 'ொ', 'ோ', 'ௌ'];
  const quickWords = ['நட்பு', 'அன்பு', 'அரசன்', 'கல்', 'தாய்', 'நீர்', 'மொழி', 'வீரம்'];

  return (
    <div className="bg-stone-50 border border-stone-200 rounded-xl p-3 shadow-xs space-y-2.5 text-stone-900 select-none">
      {/* Keypad Header */}
      <div className="flex items-center justify-between text-xs border-b border-stone-200 pb-2">
        <div className="flex items-center gap-2">
          <span className="font-tamil font-bold text-stone-800">
            தமிழ் விசைப்பலகை (Tamil Keypad)
          </span>
          {activeInputLabel && (
            <span className="text-[11px] text-emerald-800 bg-emerald-50 border border-emerald-200 px-2 py-0.5 rounded font-mono">
              எழுதுமிடம்: {activeInputLabel}
            </span>
          )}
        </div>

        {/* Tab Filters */}
        <div className="flex items-center gap-1 font-tamil text-[11px]">
          <button
            type="button"
            onClick={() => setActiveTab('all')}
            className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
              activeTab === 'all' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            அனைத்தும்
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('uyir')}
            className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
              activeTab === 'uyir' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            உயிர்
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('mei')}
            className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
              activeTab === 'mei' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            மெய்
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('uyirmei_base')}
            className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
              activeTab === 'uyirmei_base' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            அகர வரிசை
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('symbols')}
            className={`px-2 py-0.5 rounded cursor-pointer transition-colors ${
              activeTab === 'symbols' ? 'bg-stone-800 text-white font-semibold' : 'text-stone-600 hover:bg-stone-200'
            }`}
          >
            குறிகள்
          </button>
        </div>
      </div>

      {/* Row 1: உயிர் எழுத்துகள் (Vowels) */}
      {(activeTab === 'all' || activeTab === 'uyir') && (
        <div className="space-y-1">
          <div className="text-[10px] text-stone-500 font-tamil font-medium">உயிர் எழுத்துகள் (12+1)</div>
          <div className="grid grid-cols-7 sm:grid-cols-13 gap-1">
            {uyirLetters.map(char => (
              <button
                type="button"
                key={char}
                onClick={() => onInsertChar(char)}
                className="h-8 rounded bg-white hover:bg-emerald-50 active:scale-95 border border-stone-200 text-stone-900 font-tamil text-sm font-semibold flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:border-emerald-300"
              >
                {char}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Row 2: மெய் / உயிர்மெய் அடிப்படை எழுத்துகள் */}
      {(activeTab === 'all' || activeTab === 'uyirmei_base') && (
        <div className="space-y-1">
          <div className="text-[10px] text-stone-500 font-tamil font-medium">அகர வரிசை (க, ச, த, ப...)</div>
          <div className="grid grid-cols-6 sm:grid-cols-9 gap-1">
            {uyirmeiBaseLetters.map(char => (
              <button
                type="button"
                key={char}
                onClick={() => onInsertChar(char)}
                className="h-8 rounded bg-white hover:bg-emerald-50 active:scale-95 border border-stone-200 text-stone-900 font-tamil text-sm font-semibold flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:border-emerald-300"
              >
                {char}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Row 3: மெய் எழுத்துகள் (க், ங், ச்...) */}
      {(activeTab === 'all' || activeTab === 'mei') && (
        <div className="space-y-1">
          <div className="text-[10px] text-stone-500 font-tamil font-medium">மெய் எழுத்துகள் (க், ங், ச்...)</div>
          <div className="grid grid-cols-6 sm:grid-cols-9 gap-1">
            {meiLetters.map(char => (
              <button
                type="button"
                key={char}
                onClick={() => onInsertChar(char)}
                className="h-8 rounded bg-stone-100 hover:bg-emerald-50 active:scale-95 border border-stone-200 text-stone-900 font-tamil text-sm font-semibold flex items-center justify-center transition-all cursor-pointer shadow-2xs hover:border-emerald-300"
              >
                {char}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Row 4: உயிர்மெய்க் குறியீடுகள் (ா, ி, ீ, ு, ூ...) */}
      {(activeTab === 'all' || activeTab === 'symbols') && (
        <div className="space-y-1">
          <div className="text-[10px] text-stone-500 font-tamil font-medium">உயிர்மெய்க் குறியீடுகள் (மாத்திரைக் குறிகள்)</div>
          <div className="grid grid-cols-6 sm:grid-cols-12 gap-1">
            {symbols.map(sym => (
              <button
                type="button"
                key={sym}
                onClick={() => onInsertChar(sym)}
                className="h-8 rounded bg-amber-50 hover:bg-amber-100 active:scale-95 border border-amber-200 text-amber-900 font-tamil text-base font-bold flex items-center justify-center transition-all cursor-pointer shadow-2xs"
                title={`சேர்க்கை குறி: ${sym}`}
              >
                {sym}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Quick Words & Action Controls */}
      <div className="pt-1 flex flex-wrap items-center justify-between gap-2 border-t border-stone-200">
        <div className="flex flex-wrap items-center gap-1">
          <span className="text-[10px] text-stone-500 font-tamil font-medium mr-1">விரைவுச் சொற்கள்:</span>
          {quickWords.map(word => (
            <button
              type="button"
              key={word}
              onClick={() => onInsertChar(word)}
              className="px-2 py-0.5 rounded bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 font-tamil text-xs cursor-pointer shadow-2xs transition-colors"
            >
              {word}
            </button>
          ))}
        </div>

        {/* Function Keys: Space, Backspace, Clear */}
        <div className="flex items-center gap-1.5 ml-auto">
          <button
            type="button"
            onClick={onSpace}
            className="px-3 py-1.5 rounded bg-white hover:bg-stone-100 border border-stone-200 text-stone-700 text-xs font-tamil flex items-center gap-1 cursor-pointer shadow-2xs"
            title="இடைவெளி"
          >
            <Space className="w-3.5 h-3.5" />
            <span>இடைவெளி</span>
          </button>
          <button
            type="button"
            onClick={onBackspace}
            className="px-2.5 py-1.5 rounded bg-rose-50 hover:bg-rose-100 border border-rose-200 text-rose-800 text-xs font-tamil flex items-center gap-1 cursor-pointer shadow-2xs"
            title="அழி"
          >
            <Delete className="w-3.5 h-3.5" />
            <span>அழி</span>
          </button>
          <button
            type="button"
            onClick={onClear}
            className="px-2.5 py-1.5 rounded bg-stone-200 hover:bg-stone-300 text-stone-700 text-xs font-tamil flex items-center gap-1 cursor-pointer"
            title="முழுதும் நீக்கு"
          >
            <Eraser className="w-3.5 h-3.5" />
            <span>நீக்கு</span>
          </button>
        </div>
      </div>
    </div>
  );
};
