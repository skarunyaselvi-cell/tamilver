import React, { useState } from 'react';
import { UserAuth, LanguageCode } from '../types/tamilver';
import { REGIONAL_LANGUAGES } from '../data/translations';
import { TamilVirtualKeypad } from './TamilVirtualKeypad';
import { Shield, Sparkles, BookOpen, ArrowRight, UserCheck, Globe } from 'lucide-react';

interface LoginPageProps {
  onLoginSuccess: (auth: UserAuth) => void;
  onOpenLanguageModal?: () => void;
  currentLanguage?: LanguageCode;
}

export const LoginPage: React.FC<LoginPageProps> = ({
  onLoginSuccess,
  onOpenLanguageModal,
  currentLanguage = 'ta'
}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Active input tracking for the Tamil on-screen keypad
  const [activeField, setActiveField] = useState<'email' | 'username' | 'password'>('username');
  const [showKeypad, setShowKeypad] = useState<boolean>(true);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);

  // Keypad insert handler
  const handleInsertChar = (char: string) => {
    if (activeField === 'username') {
      setUsername(prev => prev + char);
    } else if (activeField === 'email') {
      setEmail(prev => prev + char);
    } else if (activeField === 'password') {
      setPassword(prev => prev + char);
    }
  };

  const handleBackspace = () => {
    if (activeField === 'username') {
      setUsername(prev => prev.slice(0, -1));
    } else if (activeField === 'email') {
      setEmail(prev => prev.slice(0, -1));
    } else if (activeField === 'password') {
      setPassword(prev => prev.slice(0, -1));
    }
  };

  const handleClear = () => {
    if (activeField === 'username') {
      setUsername('');
    } else if (activeField === 'email') {
      setEmail('');
    } else if (activeField === 'password') {
      setPassword('');
    }
  };

  const handleSpace = () => {
    handleInsertChar(' ');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!username.trim() && !email.trim()) {
      setErrorMsg('தயவுசெய்து உங்கள் பயனர் பெயர் அல்லது மின்னஞ்சலை உள்ளிடவும்.');
      return;
    }

    onLoginSuccess({
      email: email.trim() || 'tamizhan@tamilver.org',
      username: username.trim() || 'தமிழ்ப் பயனர்',
      isAuthenticated: true
    });
  };

  const handleGuestLogin = () => {
    onLoginSuccess({
      email: 'aivu@tamilver.org',
      username: 'மொழி ஆய்வாளர்',
      isAuthenticated: true
    });
  };

  const fieldLabels: Record<'email' | 'username' | 'password', string> = {
    username: 'பயனர் பெயர் (Username)',
    email: 'மின்னஞ்சல் (Email)',
    password: 'கடவுச்சொல் (Password)'
  };

  return (
    <div className="min-h-screen bg-stone-100 flex flex-col justify-center items-center p-4 sm:p-6 font-tamil">
      {/* Background Ambience with Heritage Scrim */}
      <div className="fixed inset-0 z-0 opacity-15 pointer-events-none">
        <img
          src="/src/assets/images/tamil_culture_bg_1792063061178.jpg"
          alt="Ancient Tamil Culture"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-stone-100/90" />
      </div>

      <div className="relative z-10 w-full max-w-4xl space-y-6">
        {/* Header Branding */}
        <div className="text-center space-y-2 relative">
          {onOpenLanguageModal && (
            <div className="sm:absolute sm:right-0 sm:top-0 flex justify-center mb-2 sm:mb-0">
              <button
                type="button"
                onClick={onOpenLanguageModal}
                className="px-3 py-1.5 bg-[#FFF9EE] hover:bg-[#E8D8B7] border border-[#D6A84F] rounded-xl text-[#123D30] text-xs font-semibold flex items-center gap-2 transition-all cursor-pointer shadow-xs hover:shadow-sm"
                title="பிராந்திய மொழியைத் தேர்வு செய்க (Choose Regional Language)"
              >
                <Globe className="w-3.5 h-3.5 text-[#087A59]" />
                <span className="font-bold">{REGIONAL_LANGUAGES[currentLanguage]?.nativeName || 'தமிழ்'}</span>
                <span className="text-[10px] text-[#087A59] bg-[#A7B9A0]/20 px-1.5 py-0.2 rounded font-mono font-bold">8</span>
              </button>
            </div>
          )}

          <div className="inline-flex items-center gap-2.5 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-semibold shadow-2xs">
            <Sparkles className="w-3.5 h-3.5" />
            <span>டிஜிட்டல் மொழியியல் ஆய்வுத் தளம் · Digital Linguistic Platform</span>
          </div>

          <h1 className="font-tamil-serif text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
            தமிழ்வேர் (TamilVer)
          </h1>
          <p className="text-sm text-stone-600 max-w-lg mx-auto font-sans leading-relaxed">
            வரலாற்றுக் காலங்களில் தமிழ் சொற்களின் பரிணாமத்தை ஆய்வு செய்யும் தளம் (Tamil Root Linguistic Research)
          </p>
        </div>

        {/* Login Card & Visual Lockup */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-white border border-stone-200 rounded-2xl p-6 sm:p-8 shadow-sm">
          {/* Left Column: Portrait & Mission Quote */}
          <div className="lg:col-span-5 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-stone-200 pb-6 lg:pb-0 lg:pr-6 space-y-4">
            <div className="space-y-3">
              <div className="w-24 h-24 mx-auto rounded-xl overflow-hidden border border-amber-200 shadow-xs relative bg-amber-50">
                <img
                  src="/src/assets/images/thiruvalluvar_saint_1792063063291.jpg"
                  alt="Saint Thiruvalluvar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="text-center space-y-1">
                <h3 className="font-tamil-serif font-bold text-stone-900 text-base">
                  சொல் பரிணாம ஆய்வுக்கூடம்
                </h3>
                <p className="text-xs text-stone-600 leading-relaxed italic font-tamil-serif">
                  &quot;எப்பொருள் யார்யார்வாய்க் கேட்பினும் அப்பொருள்<br />
                  மெய்ப்பொருள் காண்ப தறிவு&quot;
                </p>
              </div>
            </div>

            <div className="bg-amber-50/70 border border-amber-200 rounded-xl p-3.5 space-y-2 text-xs text-stone-800">
              <div className="flex items-center gap-2 font-bold text-amber-900">
                <BookOpen className="w-4 h-4 text-amber-700" />
                <span>ஆய்வுக் களஞ்சியங்கள்:</span>
              </div>
              <ul className="space-y-1 text-stone-700 list-disc pl-4 text-[11px] leading-relaxed">
                <li>எட்டுத்தொகை &amp; பத்துப்பாட்டு இலக்கியங்கள்</li>
                <li>பதினெண்கீழ்க்கணக்கு &amp; ஐம்பெரும் காப்பியங்கள்</li>
                <li>தமிழ்ப் பிராமி முதல் நவீனத் தமிழ் வரை எழுத்து மாற்றம்</li>
                <li>AI நண்பன் சுவடி வாசிப்பு &amp; 8 மாநில/உலக மொழிகள்</li>
              </ul>
            </div>
          </div>

          {/* Right Column: Interactive Login Form */}
          <div className="lg:col-span-7 space-y-4">
            <div className="flex items-center justify-between border-b border-stone-100 pb-2">
              <h2 className="font-tamil-serif text-lg font-bold text-stone-900">
                உள்நுழைக (User Login)
              </h2>
              <button
                type="button"
                onClick={() => setShowKeypad(!showKeypad)}
                className="text-xs text-emerald-700 hover:text-emerald-800 font-semibold underline cursor-pointer"
              >
                {showKeypad ? 'விசைப்பலகையை மறை' : 'தமிழ் விசைப்பலகையைக் காட்டு'}
              </button>
            </div>

            {errorMsg && (
              <div className="p-2.5 bg-rose-50 border border-rose-200 text-rose-800 text-xs rounded-lg">
                {errorMsg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-3.5">
              {/* Username Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700 flex items-center justify-between">
                  <span>பயனர் பெயர் (Username):</span>
                  {activeField === 'username' && (
                    <span className="text-[10px] text-emerald-700 font-mono">விசைப்பலகை செயல்படுகிறது ●</span>
                  )}
                </label>
                <input
                  type="text"
                  value={username}
                  onFocus={() => setActiveField('username')}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="எ.கா: இளங்கோ, பாரதி, தமிழன்..."
                  className={`w-full bg-stone-50 border rounded-lg px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all ${
                    activeField === 'username'
                      ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-white'
                      : 'border-stone-200'
                  }`}
                />
              </div>

              {/* Email Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700 flex items-center justify-between">
                  <span>மின்னஞ்சல் (Email):</span>
                  {activeField === 'email' && (
                    <span className="text-[10px] text-emerald-700 font-mono">விசைப்பலகை செயல்படுகிறது ●</span>
                  )}
                </label>
                <input
                  type="email"
                  value={email}
                  onFocus={() => setActiveField('email')}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="எ.கா: user@tamilver.org"
                  className={`w-full bg-stone-50 border rounded-lg px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all ${
                    activeField === 'email'
                      ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-white'
                      : 'border-stone-200'
                  }`}
                />
              </div>

              {/* Password Input */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-stone-700 flex items-center justify-between">
                  <span>கடவுச்சொல் (Password):</span>
                  {activeField === 'password' && (
                    <span className="text-[10px] text-emerald-700 font-mono">விசைப்பலகை செயல்படுகிறது ●</span>
                  )}
                </label>
                <input
                  type="password"
                  value={password}
                  onFocus={() => setActiveField('password')}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className={`w-full bg-stone-50 border rounded-lg px-3.5 py-2.5 text-sm text-stone-900 placeholder:text-stone-400 focus:outline-none transition-all ${
                    activeField === 'password'
                      ? 'border-emerald-600 ring-2 ring-emerald-500/20 bg-white'
                      : 'border-stone-200'
                  }`}
                />
              </div>

              {/* Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-center gap-2.5">
                <button
                  type="submit"
                  className="w-full sm:flex-1 py-2.5 px-4 bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold rounded-lg shadow-sm transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <ArrowRight className="w-4 h-4" />
                  <span>உள்நுழைக (Login)</span>
                </button>

                <button
                  type="button"
                  onClick={handleGuestLogin}
                  className="w-full sm:w-auto py-2.5 px-4 bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 cursor-pointer border border-stone-200"
                >
                  <UserCheck className="w-4 h-4 text-emerald-700" />
                  <span>விருந்தினராக நுழைக</span>
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Live Working Tamil Virtual Keypad Display */}
        {showKeypad && (
          <div className="transition-all animate-in fade-in slide-in-from-bottom-2 duration-200">
            <TamilVirtualKeypad
              onInsertChar={handleInsertChar}
              onBackspace={handleBackspace}
              onClear={handleClear}
              onSpace={handleSpace}
              activeInputLabel={fieldLabels[activeField]}
            />
          </div>
        )}
      </div>
    </div>
  );
};
