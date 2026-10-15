import React from 'react';
import { LanguageCode, UserAuth } from '../types/tamilver';
import { REGIONAL_LANGUAGES } from '../data/translations';
import { X, Check, Globe, Sparkles } from 'lucide-react';
import mandelaImg from '../assets/images/nelson_mandela_real.jpg';

interface LanguageSelectorModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLanguage: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  currentUser?: UserAuth | null;
}

export const LanguageSelectorModal: React.FC<LanguageSelectorModalProps> = ({
  isOpen,
  onClose,
  currentLanguage,
  onSelectLanguage,
  currentUser
}) => {
  if (!isOpen) return null;

  const languagesList = Object.values(REGIONAL_LANGUAGES);

  const handleChoose = async (code: LanguageCode) => {
    // 1. Immediate UI update
    onSelectLanguage(code);

    // 2. Persist to local storage
    try {
      localStorage.setItem('tamilver_preferred_language', code);
    } catch (e) {
      console.warn('Could not save to localStorage:', e);
    }

    // 3. Persist to real backend database for user
    const userId = currentUser?.email || 'tamizhan@tamilver.org';
    try {
      fetch('/api/user/preferences', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId,
          preferredLanguage: code,
          displayName: currentUser?.username || 'ஆய்வாளர்'
        })
      }).catch(err => console.warn('Background language preference save notice:', err));
    } catch (e) {
      console.warn('Preference API error:', e);
    }

    // 4. Close modal / navigate back to homepage
    onClose();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="language-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto font-tamil"
    >
      <div className="relative w-full max-w-2xl bg-[#FFF9EE] border-2 border-[#D6A84F]/40 rounded-2xl shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Top Header Bar */}
        <div className="px-6 py-4 border-b border-[#D6A84F]/30 flex items-center justify-between bg-[#123D30] text-[#FFF9EE]">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-[#087A59] border border-[#D6A84F]/50 flex items-center justify-center text-[#FFF9EE] shadow-xs">
              <Globe className="w-4 h-4 text-[#D6A84F]" />
            </div>
            <div>
              <h2 id="language-modal-title" className="font-tamil-serif text-lg font-bold text-[#FFF9EE] leading-tight">
                மொழி தேர்வு (Choose Regional Language)
              </h2>
              <p className="text-[11px] text-[#A7B9A0] font-sans">
                தமிழ்வேர் தளத்தின் 8 பிராந்திய இந்திய மற்றும் உலக மொழிகள்
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="மூடுக (Close modal)"
            className="p-1.5 text-[#A7B9A0] hover:text-[#FFF9EE] rounded-lg hover:bg-white/10 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-6">
          {/* Authentic Nelson Mandela Photographic Portrait & Golden Quote Banner */}
          <div className="bg-[#FFF9EE] border-2 border-[#D6A84F]/50 rounded-2xl p-5 flex flex-col sm:flex-row items-center gap-5 shadow-sm relative overflow-hidden">
            {/* Subtle antique parchment accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#D6A84F]/10 to-transparent pointer-events-none" />

            {/* Real Nelson Mandela Photographic Portrait */}
            <div className="shrink-0 flex flex-col items-center">
              <div className="relative group">
                <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-3 border-[#D6A84F] shadow-lg bg-stone-100 ring-4 ring-[#D6A84F]/20">
                  <img
                    src={mandelaImg}
                    alt="நெல்சன் மண்டேலா (Nelson Mandela) - வரலாற்றுப் புகைப்படம்"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top filter contrast-[1.03] brightness-[1.02]"
                    loading="eager"
                  />
                </div>
                <div className="absolute -bottom-2 inset-x-0 mx-auto w-max bg-[#123D30] text-[#FFF9EE] border border-[#D6A84F] text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-xs tracking-wide">
                  நெல்சன் மண்டேலா
                </div>
              </div>
            </div>

            {/* Preserved Authentic Tamil Mandela Quote */}
            <div className="space-y-2 text-center sm:text-left flex-1">
              <div className="flex items-center justify-center sm:justify-start gap-1.5 text-[11px] font-mono uppercase tracking-wider text-[#087A59] font-bold">
                <Sparkles className="w-3.5 h-3.5 text-[#D6A84F]" />
                <span>நெல்சன் மண்டேலா அவர்களின் புகழ்பெற்ற பொன்மொழி</span>
              </div>
              <blockquote className="font-tamil-serif text-sm sm:text-[15px] font-semibold text-[#202A25] leading-relaxed">
                &ldquo;ஒருவருக்குப் புரியும் மொழியில் பேசினால் அது அவருடைய அறிவைச் சென்றடையும்; அவருடைய சொந்த மொழியில் பேசினால் அது அவருடைய இதயத்தைச் சென்றடையும்.&rdquo;
              </blockquote>
              <div className="text-xs text-[#087A59] font-semibold">
                — நெல்சன் மண்டேலா (Nelson Mandela)
              </div>
            </div>
          </div>

          {/* 8 Regional Indian & English Languages Grid */}
          <div className="space-y-2.5">
            <div className="flex items-center justify-between">
              <div className="text-xs font-bold text-[#123D30] uppercase tracking-wider font-mono flex items-center gap-2">
                <span>8 பிராந்திய மொழிகள் (8 Regional Languages)</span>
              </div>
              <span className="text-[11px] text-stone-500 font-sans">
                தேர்ந்தெடுக்க கிளிக் செய்க
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {languagesList.map(lang => {
                const isSelected = currentLanguage === lang.code;

                return (
                  <button
                    key={lang.code}
                    onClick={() => handleChoose(lang.code)}
                    className={`p-3.5 rounded-xl border text-left transition-all flex items-center justify-between cursor-pointer group ${
                      isSelected
                        ? 'bg-[#123D30] text-[#FFF9EE] border-[#D6A84F] shadow-md ring-2 ring-[#D6A84F]/30'
                        : 'bg-white text-[#202A25] border-stone-200 hover:border-[#087A59]/40 hover:bg-stone-50/80 shadow-2xs'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      {/* Native Script Badge instead of just a flag */}
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center text-base font-bold shrink-0 transition-transform group-hover:scale-105 ${
                          isSelected
                            ? 'bg-[#087A59] border border-[#D6A84F] text-[#FFF9EE]'
                            : 'bg-[#FFF9EE] border border-[#D6A84F]/40 text-[#123D30]'
                        }`}
                      >
                        {lang.scriptBadge}
                      </div>
                      <div>
                        <div className={`font-bold text-sm leading-snug ${isSelected ? 'text-[#FFF9EE]' : 'text-stone-900'}`}>
                          {lang.nativeName}
                        </div>
                        <div className={`text-xs font-sans ${isSelected ? 'text-[#A7B9A0]' : 'text-stone-500'}`}>
                          {lang.englishName} ({lang.code})
                        </div>
                      </div>
                    </div>

                    {isSelected ? (
                      <div className="w-6 h-6 rounded-full bg-[#D6A84F] text-[#123D30] flex items-center justify-center shadow-xs">
                        <Check className="w-4 h-4 stroke-[2.5]" />
                      </div>
                    ) : (
                      <div className="w-6 h-6 rounded-full border border-stone-300 group-hover:border-[#087A59] transition-colors" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
