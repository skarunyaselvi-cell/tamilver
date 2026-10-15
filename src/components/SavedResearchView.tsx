import React, { useState, useEffect } from 'react';
import { LanguageCode, SavedResearchItem } from '../types/tamilver';
import { REGIONAL_LANGUAGES } from '../data/translations';
import { ArchiveRibbonIcon } from './ModuleIcons';
import { Trash2, Download, Search, RefreshCw, FileText, Calendar, CheckCircle2 } from 'lucide-react';

interface SavedResearchViewProps {
  currentLanguage: LanguageCode;
  userId?: string;
}

export const SavedResearchView: React.FC<SavedResearchViewProps> = ({ currentLanguage, userId = 'tamizhan@tamilver.org' }) => {
  const [researchList, setResearchList] = useState<SavedResearchItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedItem, setSelectedItem] = useState<SavedResearchItem | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  const lang = REGIONAL_LANGUAGES[currentLanguage];

  const fetchResearch = async () => {
    setLoading(true);
    try {
      const res = await fetch(`/api/research?userId=${encodeURIComponent(userId)}`);
      const json = await res.json();
      if (json.success && Array.isArray(json.data)) {
        setResearchList(json.data);
        if (json.data.length > 0 && !selectedItem) {
          setSelectedItem(json.data[0]);
        }
      }
    } catch (e) {
      console.error('Error fetching research from DB:', e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchResearch();
  }, [userId]);

  const handleDelete = async (id: string) => {
    try {
      const res = await fetch(`/api/research/${id}?userId=${encodeURIComponent(userId)}`, {
        method: 'DELETE'
      });
      const json = await res.json();
      if (json.success) {
        setResearchList(prev => prev.filter(item => item.id !== id));
        if (selectedItem?.id === id) {
          setSelectedItem(null);
        }
        setMessage('ஆய்வுக் குறிப்பு வெற்றிகரமாக நீக்கப்பட்டது.');
        setTimeout(() => setMessage(null), 3000);
      }
    } catch (e) {
      console.error('Error deleting research:', e);
    }
  };

  const handleExportReport = () => {
    if (!selectedItem) return;
    const reportWindow = window.open('', '_blank');
    if (!reportWindow) {
      window.print();
      return;
    }

    reportWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${selectedItem.title} - தமிழ்வேர் ஆய்வறிக்கை</title>
          <style>
            body { font-family: system-ui, sans-serif; padding: 40px; color: #202A25; line-height: 1.6; }
            h1 { color: #123D30; border-bottom: 2px solid #D6A84F; padding-bottom: 10px; }
            .meta { color: #666; font-size: 14px; margin-bottom: 24px; }
            .card { background: #FFF9EE; border: 1px solid #D6A84F; padding: 20px; border-radius: 8px; margin-top: 20px; }
            pre { background: #fff; padding: 16px; border: 1px solid #ddd; border-radius: 6px; white-space: pre-wrap; font-family: monospace; }
          </style>
        </head>
        <body>
          <h1>தமிழ்வேர் (TAMILVER) — வரலாற்று மொழியியல் ஆய்வறிக்கை</h1>
          <div class="meta">ஆய்வுத் தலைப்பு: <strong>${selectedItem.title}</strong> | ஆய்வாளர்: ${selectedItem.user_id} | நாள்: ${new Date(selectedItem.created_at).toLocaleString()}</div>
          <div class="card">
            <h3>ஆய்வு விவரங்கள் (Linguistic Research Findings):</h3>
            <pre>${typeof selectedItem.research_data === 'string' ? JSON.stringify(JSON.parse(selectedItem.research_data), null, 2) : JSON.stringify(selectedItem.research_data, null, 2)}</pre>
          </div>
          <p style="margin-top: 30px; font-size: 12px; color: #888;">தமிழ்வேர் டிஜிட்டல் மொழியியல் ஆய்வுத் தளத்தால் சான்றளிக்கப்பட்டது.</p>
        </body>
      </html>
    `);
    reportWindow.document.close();
    reportWindow.print();
  };

  const filtered = researchList.filter(item =>
    item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.research_type.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-6 font-tamil">
      {/* Top Banner */}
      <div className="bg-white border border-[#D6A84F]/40 rounded-2xl p-6 shadow-xs flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-xl bg-[#FFF9EE] border border-[#D6A84F] flex items-center justify-center text-[#087A59] shadow-2xs">
            <ArchiveRibbonIcon className="w-7 h-7" />
          </div>
          <div>
            <div className="text-[11px] font-mono uppercase tracking-wider text-[#087A59] font-bold">
              தரவுத்தளக் களஞ்சியம் · SQLite Research Repository
            </div>
            <h2 className="font-tamil-serif text-2xl font-bold text-[#123D30]">
              {lang.navSavedResearch} (Saved Research Archives)
            </h2>
            <p className="text-xs text-stone-600 font-sans">
              நீங்கள் மேற்கொண்ட பழந்தமிழ் சொல் பரிணாம ஒப்பாய்வுகள், சுவடி பகுப்பாய்வுகள் மற்றும் இலக்கியச் சான்றுகளின் சேமிப்பகம்.
            </p>
          </div>
        </div>

        <button
          onClick={fetchResearch}
          disabled={loading}
          className="px-4 py-2 bg-[#FFF9EE] hover:bg-[#E8D8B7] border border-[#D6A84F] text-[#123D30] text-xs font-semibold rounded-xl flex items-center gap-2 cursor-pointer shadow-2xs transition-colors shrink-0"
        >
          <RefreshCw className={`w-3.5 h-3.5 ${loading ? 'animate-spin' : ''}`} />
          <span>புதுப்பிக்க</span>
        </button>
      </div>

      {message && (
        <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-300 text-emerald-800 text-xs font-semibold flex items-center gap-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-600" />
          <span>{message}</span>
        </div>
      )}

      {/* Main Container */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left: Research List */}
        <div className="lg:col-span-5 space-y-3">
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-3 text-stone-400" />
            <input
              type="text"
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
              placeholder="சேமித்த ஆய்வுகளில் தேடுக..."
              className="w-full pl-9 pr-3 py-2 bg-white border border-stone-200 rounded-xl text-xs focus:outline-none focus:border-[#087A59]"
            />
          </div>

          <div className="space-y-2.5 max-h-[600px] overflow-y-auto pr-1">
            {loading ? (
              <div className="p-8 text-center text-xs text-stone-500 bg-white border border-stone-200 rounded-xl">
                தரவுத்தளத்திலிருந்து ஆய்வுக் குறிப்புகள் பெறப்படுகின்றன...
              </div>
            ) : filtered.length === 0 ? (
              <div className="p-8 text-center text-xs text-stone-500 bg-white border border-stone-200 rounded-xl space-y-2">
                <FileText className="w-8 h-8 text-stone-300 mx-auto" />
                <p>சேமிக்கப்பட்ட ஆய்வுகள் எதுவும் இல்லை.</p>
                <p className="text-[11px] text-stone-400">
                  சொல் பரிணாம ஒப்பீட்டுப் பக்கத்தில் &quot;ஆய்வைச் சேமிக்க&quot; பட்டனை அழுத்திப் புதிய ஆய்வைச் சேமிக்கலாம்.
                </p>
              </div>
            ) : (
              filtered.map(item => {
                const isSelected = selectedItem?.id === item.id;
                return (
                  <div
                    key={item.id}
                    onClick={() => setSelectedItem(item)}
                    className={`p-4 rounded-xl border text-left cursor-pointer transition-all flex flex-col justify-between gap-2 ${
                      isSelected
                        ? 'bg-[#123D30] text-[#FFF9EE] border-[#D6A84F] shadow-sm'
                        : 'bg-white border-stone-200 hover:border-[#087A59]/40 hover:bg-stone-50/70'
                    }`}
                  >
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-tamil-serif font-bold text-sm leading-snug">
                        {item.title}
                      </h4>
                      <span
                        className={`text-[9px] font-mono px-2 py-0.5 rounded-full shrink-0 ${
                          isSelected ? 'bg-[#087A59] text-[#D6A84F]' : 'bg-stone-100 text-stone-600'
                        }`}
                      >
                        {item.research_type}
                      </span>
                    </div>

                    <div className="flex items-center justify-between text-[11px] opacity-80">
                      <div className="flex items-center gap-1.5 font-sans">
                        <Calendar className="w-3 h-3" />
                        <span>{new Date(item.created_at).toLocaleDateString()}</span>
                      </div>
                      <button
                        onClick={e => {
                          e.stopPropagation();
                          handleDelete(item.id);
                        }}
                        className={`p-1 rounded hover:bg-rose-100 hover:text-rose-700 transition-colors ${
                          isSelected ? 'text-rose-300' : 'text-stone-400'
                        }`}
                        title="நீக்குக (Delete)"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* Right: Selected Research Detail View */}
        <div className="lg:col-span-7">
          {selectedItem ? (
            <div className="bg-white border border-[#D6A84F]/40 rounded-2xl p-6 shadow-xs space-y-5">
              <div className="flex items-start justify-between border-b border-stone-100 pb-4 gap-4">
                <div>
                  <span className="text-[10px] font-mono text-[#087A59] bg-[#087A59]/10 px-2.5 py-0.5 rounded-full font-bold uppercase">
                    {selectedItem.research_type}
                  </span>
                  <h3 className="font-tamil-serif text-xl font-bold text-[#123D30] mt-1.5">
                    {selectedItem.title}
                  </h3>
                  <div className="text-xs text-stone-500 font-sans mt-0.5">
                    பதிவு எண்: <span className="font-mono">{selectedItem.id}</span> · ஆய்வாளர்: {selectedItem.user_id}
                  </div>
                </div>

                <button
                  onClick={handleExportReport}
                  className="px-3.5 py-1.5 bg-[#123D30] hover:bg-[#087A59] text-[#FFF9EE] border border-[#D6A84F] rounded-xl text-xs font-semibold flex items-center gap-2 cursor-pointer shadow-xs transition-colors shrink-0"
                >
                  <Download className="w-3.5 h-3.5 text-[#D6A84F]" />
                  <span>{lang.exportReportBtn}</span>
                </button>
              </div>

              {/* Research Data Rendering */}
              <div className="bg-[#FFF9EE] border border-[#D6A84F]/30 rounded-xl p-4 space-y-3">
                <div className="text-xs font-bold text-[#123D30] font-mono uppercase tracking-wider">
                  ஆய்வுத் தரவு &amp; சான்றுகள் (Documented Data):
                </div>
                <pre className="p-3 bg-white border border-stone-200 rounded-lg text-xs font-mono text-[#202A25] overflow-x-auto whitespace-pre-wrap leading-relaxed max-h-96">
                  {typeof selectedItem.research_data === 'string'
                    ? JSON.stringify(JSON.parse(selectedItem.research_data), null, 2)
                    : JSON.stringify(selectedItem.research_data, null, 2)}
                </pre>
              </div>
            </div>
          ) : (
            <div className="h-full min-h-[300px] flex flex-col items-center justify-center p-8 bg-white border border-dashed border-stone-300 rounded-2xl text-center text-stone-500 space-y-2">
              <FileText className="w-10 h-10 text-stone-300" />
              <p className="font-bold text-stone-700">ஆய்வு விபரம் தேர்ந்தெடுக்கப்படவில்லை</p>
              <p className="text-xs text-stone-500">
                இடதுபுறப் பட்டியலிலிருந்து ஏதேனும் ஒரு ஆய்வுக் குறிப்பைத் தேர்ந்தெடுத்து முழுமையாகப் பார்வையிடவும்.
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
