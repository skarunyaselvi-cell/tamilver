/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { UserAuth, LanguageCode } from './types/tamilver';
import { REGIONAL_LANGUAGES } from './data/translations';
import { MODULES_CONFIG, ModuleDefinition } from './config/modulesConfig';
import { ModuleCard } from './components/ModuleCard';
import { LoginPage } from './components/LoginPage';
import { LanguageSelectorModal } from './components/LanguageSelectorModal';
import { LiteratureExplorer } from './components/LiteratureExplorer';
import { ScriptEvolutionView } from './components/ScriptEvolutionView';
import { AiNanbanDecoder } from './components/AiNanbanDecoder';
import { WordEvolutionView } from './components/WordEvolutionView';
import { SavedResearchView } from './components/SavedResearchView';
import {
  Globe,
  BookOpen,
  GitBranch,
  Sparkles,
  History,
  Archive,
  LogOut,
  User,
  ShieldCheck
} from 'lucide-react';

export default function App() {
  // Authentication State
  const [auth, setAuth] = useState<UserAuth | null>(null);

  // Active Regional Language - initialize from localStorage if available
  const [currentLanguage, setCurrentLanguage] = useState<LanguageCode>(() => {
    try {
      const saved = localStorage.getItem('tamilver_preferred_language') as LanguageCode;
      if (saved && REGIONAL_LANGUAGES[saved]) {
        return saved;
      }
    } catch (e) {
      // ignore
    }
    return 'ta';
  });

  const [isLangModalOpen, setIsLangModalOpen] = useState<boolean>(false);

  // Active Main Feature Tab
  const [activeTab, setActiveTab] = useState<ModuleDefinition['slug']>('literature');

  const lang = REGIONAL_LANGUAGES[currentLanguage] || REGIONAL_LANGUAGES.ta;

  // Sync user profile preference from DB upon login
  useEffect(() => {
    if (auth?.email) {
      fetch(`/api/user/profile/${encodeURIComponent(auth.email)}`)
        .then(res => res.json())
        .then(data => {
          if (data.success && data.data?.preferred_language) {
            const pref = data.data.preferred_language as LanguageCode;
            if (REGIONAL_LANGUAGES[pref]) {
              setCurrentLanguage(pref);
            }
          }
        })
        .catch(err => console.warn('User profile fetch error:', err));
    }
  }, [auth]);

  // If user is not logged in, render the Tamil Login Page with live Tamil keypad
  if (!auth || !auth.isAuthenticated) {
    return (
      <>
        <LoginPage
          onLoginSuccess={newAuth => setAuth(newAuth)}
          onOpenLanguageModal={() => setIsLangModalOpen(true)}
          currentLanguage={currentLanguage}
        />
        <LanguageSelectorModal
          isOpen={isLangModalOpen}
          onClose={() => setIsLangModalOpen(false)}
          currentLanguage={currentLanguage}
          onSelectLanguage={setCurrentLanguage}
          currentUser={auth}
        />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-[#FFF9EE] text-[#202A25] font-tamil flex flex-col selection:bg-[#D6A84F]/30 selection:text-[#123D30]">
      {/* Background Cultural Heritage Texture (Light Theme) */}
      <div className="fixed inset-0 z-0 opacity-10 pointer-events-none">
        <img
          src="/src/assets/images/tamil_culture_bg_1792063061178.jpg"
          alt="Ancient Tamil Culture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#FFF9EE]/85" />
      </div>

      {/* Top Navigation Bar */}
      <header className="sticky top-0 z-40 bg-[#123D30] text-[#FFF9EE] border-b border-[#D6A84F]/40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Zone 1: Brand Wordmark */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="w-10 h-10 rounded-xl bg-[#087A59] border border-[#D6A84F] flex items-center justify-center font-tamil-serif font-bold text-[#FFF9EE] text-lg shadow-2xs">
              வேர்
            </div>
            <div>
              <div className="font-tamil-serif text-lg font-bold text-[#FFF9EE] leading-tight">
                தமிழ்வேர் (TAMILVER)
              </div>
              <div className="text-[10px] text-[#A7B9A0] font-sans hidden sm:block">
                Digital Linguistic Research Platform · P3
              </div>
            </div>
          </div>

          {/* Zone 2: Navigation Links */}
          <nav className="hidden lg:flex items-center gap-5 text-xs font-semibold text-[#E8D8B7]">
            <button
              onClick={() => setActiveTab('literature')}
              className={`flex items-center gap-1.5 transition-colors pb-0.5 cursor-pointer ${
                activeTab === 'literature'
                  ? 'text-[#FFF9EE] font-bold border-b-2 border-[#D6A84F]'
                  : 'hover:text-[#FFF9EE]'
              }`}
            >
              <BookOpen className="w-4 h-4 text-[#D6A84F]" />
              <span>{lang.navLiterature}</span>
            </button>

            <button
              onClick={() => setActiveTab('script')}
              className={`flex items-center gap-1.5 transition-colors pb-0.5 cursor-pointer ${
                activeTab === 'script'
                  ? 'text-[#FFF9EE] font-bold border-b-2 border-[#D6A84F]'
                  : 'hover:text-[#FFF9EE]'
              }`}
            >
              <GitBranch className="w-4 h-4 text-[#D6A84F]" />
              <span>{lang.navScriptEvolution}</span>
            </button>

            <button
              onClick={() => setActiveTab('ai_nanban')}
              className={`flex items-center gap-1.5 transition-colors pb-0.5 cursor-pointer ${
                activeTab === 'ai_nanban'
                  ? 'text-[#FFF9EE] font-bold border-b-2 border-[#D6A84F]'
                  : 'hover:text-[#FFF9EE]'
              }`}
            >
              <Sparkles className="w-4 h-4 text-[#D6A84F]" />
              <span>{lang.navAiNanban}</span>
            </button>

            <button
              onClick={() => setActiveTab('word_evolution')}
              className={`flex items-center gap-1.5 transition-colors pb-0.5 cursor-pointer ${
                activeTab === 'word_evolution'
                  ? 'text-[#FFF9EE] font-bold border-b-2 border-[#D6A84F]'
                  : 'hover:text-[#FFF9EE]'
              }`}
            >
              <History className="w-4 h-4 text-[#D6A84F]" />
              <span>{lang.navWordRoots}</span>
            </button>

            <button
              onClick={() => setActiveTab('saved_research')}
              className={`flex items-center gap-1.5 transition-colors pb-0.5 cursor-pointer ${
                activeTab === 'saved_research'
                  ? 'text-[#FFF9EE] font-bold border-b-2 border-[#D6A84F]'
                  : 'hover:text-[#FFF9EE]'
              }`}
            >
              <Archive className="w-4 h-4 text-[#D6A84F]" />
              <span>{lang.navSavedResearch}</span>
            </button>
          </nav>

          {/* Zone 3: Actions Group (Language Selector & User Profile) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Regional Language Icon on Top Right Corner */}
            <button
              onClick={() => setIsLangModalOpen(true)}
              className="px-3 py-1.5 bg-[#087A59] hover:bg-[#087A59]/80 border border-[#D6A84F] rounded-xl text-[#FFF9EE] text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs"
              title="மொழியைத் தேர்வு செய்க (Choose Regional Language)"
            >
              <Globe className="w-4 h-4 text-[#D6A84F]" />
              <span className="font-bold">{lang.nativeName}</span>
              <span className="text-[10px] text-[#123D30] bg-[#D6A84F] px-1.5 py-0.2 rounded font-mono font-bold">8</span>
            </button>

            {/* User Profile Badge & Logout */}
            <div className="hidden sm:flex items-center gap-1.5 px-2.5 py-1 bg-white/10 rounded-xl border border-white/15 text-xs text-[#FFF9EE]">
              <User className="w-3.5 h-3.5 text-[#D6A84F]" />
              <span className="font-medium max-w-[100px] truncate">{auth.username}</span>
            </div>

            <button
              onClick={() => setAuth(null)}
              className="p-2 text-[#A7B9A0] hover:text-rose-300 hover:bg-rose-900/30 rounded-xl transition-colors cursor-pointer"
              title="வெளியேறுக (Logout)"
            >
              <LogOut className="w-4 h-4" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 w-full flex-1 space-y-6">
        {/* Top Cultural Banner with Bharathiyar's Face & Immortal Quote (Objective 4) */}
        <div className="bg-white border-2 border-[#D6A84F]/40 rounded-2xl p-5 sm:p-6 shadow-sm flex flex-col sm:flex-row items-center gap-5 sm:gap-6 relative overflow-hidden">
          {/* Subtle gold accent background */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-radial from-[#D6A84F]/10 to-transparent pointer-events-none" />

          {/* Mahakavi Bharathiyar Portrait Image */}
          <div className="shrink-0 relative">
            <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-[#D6A84F] shadow-md bg-stone-100 ring-2 ring-[#D6A84F]/20">
              <img
                src="/src/assets/images/bharathiyar_portrait_1792063060520.jpg"
                alt="Mahakavi Subramania Bharathiyar"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-2 -right-1 bg-[#123D30] text-[#FFF9EE] border border-[#D6A84F] text-[10px] font-bold px-2 py-0.5 rounded shadow-2xs font-tamil">
              பாரதியார்
            </div>
          </div>

          {/* Bharathiyar's Preserved Quote */}
          <div className="space-y-1.5 text-center sm:text-left flex-1">
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#087A59] font-bold">
              மகாகவி சுப்பிரமணிய பாரதியாரின் அழியாப் பொன்மொழி
            </div>
            <blockquote className="font-tamil-serif text-xl sm:text-2xl font-bold text-[#123D30] leading-snug tracking-tight">
              &quot;யாமறிந்த மொழிகளிலே தமிழ்மொழி போல்<br className="hidden sm:inline" />
              இனிதாவது எங்கும் காணோம்&quot;
            </blockquote>
            <p className="text-xs text-[#087A59] font-semibold">
              — மகாகவி சுப்பிரமணிய பாரதியார் (Mahakavi Bharathiyar)
            </p>
          </div>

          {/* P3 Problem Statement Badge */}
          <div className="sm:border-l sm:border-[#D6A84F]/30 sm:pl-6 text-center sm:text-left space-y-1 text-xs text-stone-600 max-w-xs shrink-0">
            <div className="font-bold text-[#123D30] flex items-center justify-center sm:justify-start gap-1 font-mono">
              <ShieldCheck className="w-4 h-4 text-[#087A59]" />
              <span>பிரச்சினை அறிக்கை: P3</span>
            </div>
            <p className="text-[11px] leading-relaxed text-stone-600 font-sans">
              பழந்தமிழ் மற்றும் நவீனத் தமிழ் சொற்களை ஒப்பிட்டு, எழுத்து வடிவம், பொருள், பயன்பாட்டு மாற்றங்களை அடையாளம் காணும் டிஜிட்டல் தளம்.
            </p>
          </div>
        </div>

        {/* 5 Distinct Module Cards Grid (Objective 2: Reusable ModuleCard & Unique Icons) */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs font-mono font-bold uppercase tracking-wider text-[#123D30]">
            <span>ஆய்வுத் தொகுதிகள் (Research Modules)</span>
            <span className="text-stone-400 font-sans font-normal">தனித்துவமான 5 தொகுதிகள்</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-3.5">
            {MODULES_CONFIG.map(mod => (
              <ModuleCard
                key={mod.id}
                module={mod}
                isActive={activeTab === mod.slug}
                onSelect={slug => setActiveTab(slug)}
              />
            ))}
          </div>
        </div>

        {/* Active Feature Viewport (No card leads to a blank page) */}
        <div className="pt-2">
          {activeTab === 'literature' && (
            <LiteratureExplorer currentLanguage={currentLanguage} />
          )}

          {activeTab === 'script' && (
            <ScriptEvolutionView currentLanguage={currentLanguage} />
          )}

          {activeTab === 'ai_nanban' && (
            <AiNanbanDecoder
              currentLanguage={currentLanguage}
              userId={auth.email}
              onNavigateToSavedResearch={() => setActiveTab('saved_research')}
            />
          )}

          {activeTab === 'word_evolution' && (
            <WordEvolutionView
              currentLanguage={currentLanguage}
              userId={auth.email}
              onNavigateToSavedResearch={() => setActiveTab('saved_research')}
            />
          )}

          {activeTab === 'saved_research' && (
            <SavedResearchView
              currentLanguage={currentLanguage}
              userId={auth.email}
            />
          )}
        </div>
      </main>

      {/* 8 Regional Language Selector Modal (Objective 3) */}
      <LanguageSelectorModal
        isOpen={isLangModalOpen}
        onClose={() => setIsLangModalOpen(false)}
        currentLanguage={currentLanguage}
        onSelectLanguage={newLang => setCurrentLanguage(newLang)}
        currentUser={auth}
      />

      {/* Footer */}
      <footer className="mt-12 bg-[#123D30] text-[#FFF9EE] border-t border-[#D6A84F]/40 py-8 text-center text-xs font-tamil">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-bold text-[#D6A84F] font-tamil-serif text-sm">தமிழ்வேர் (TAMILVER)</span>
            <span className="text-[#A7B9A0]">·</span>
            <span className="text-[#E8D8B7]">வரலாற்றுக் காலங்களில் தமிழ் சொற்களின் பரிணாமத்தை ஆய்வு செய்யும் தளம்</span>
          </div>
          <div className="text-[#A7B9A0] font-mono text-[11px]">
            8 பிராந்திய மொழிகள் · சங்க இலக்கியங்கள் · பிராமி கல்வெட்டுகள் · SQLite Relational Database
          </div>
        </div>
      </footer>
    </div>
  );
}
