import React, { useState } from 'react';
import { Sparkles, ArrowRight, History, Loader2, Undo2 } from 'lucide-react';
import { GardenDesign } from '../types/garden';

interface PromptEditorBarProps {
  currentDesign: GardenDesign;
  onApplyPrompt: (prompt: string) => Promise<void>;
  isLoading: boolean;
  onRevertHistory?: (historyIndex: number) => void;
}

export const PromptEditorBar: React.FC<PromptEditorBarProps> = ({
  currentDesign,
  onApplyPrompt,
  isLoading,
  onRevertHistory
}) => {
  const [promptText, setPromptText] = useState('');
  const [showHistory, setShowHistory] = useState(false);

  const quickPrompts = [
    'Add an artisan stone water fountain surrounded by fragrant lavender',
    'Add a rustic timber pergola with dining table and wisteria vine',
    'Replace turf lawn with drought-tolerant clover, thyme and stepping stones',
    'Include a pollinator sanctuary with purple coneflowers and bee balm',
    'Add 4 symmetrical cedar raised vegetable beds with basil and tomatoes'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promptText.trim() || isLoading) return;
    onApplyPrompt(promptText.trim());
    setPromptText('');
  };

  const handleQuickPromptClick = (text: string) => {
    if (isLoading) return;
    onApplyPrompt(text);
  };

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-4 sm:p-5 shadow-lg space-y-3">
      {/* Header with History Pill */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
          </div>
          <span className="font-serif text-sm font-semibold text-white">
            AI Layout &amp; Visual Prompt Studio
          </span>
          <span className="text-stone-400 text-xs hidden sm:inline font-sans">
            · Refine zones, plant palettes, or visual features using text prompts
          </span>
        </div>

        {currentDesign.history.length > 1 && (
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="flex items-center gap-1.5 text-xs text-stone-400 hover:text-stone-200 transition-colors"
          >
            <History className="w-3.5 h-3.5" />
            <span className="font-mono tabular-nums">{currentDesign.history.length} Revisions</span>
          </button>
        )}
      </div>

      {/* Revision History Drawer */}
      {showHistory && (
        <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 space-y-2 text-xs">
          <div className="font-semibold text-stone-300 flex items-center justify-between pb-1 border-b border-stone-800">
            <span>Design Revision Timeline</span>
            <button
              onClick={() => setShowHistory(false)}
              className="text-stone-500 hover:text-stone-300"
            >
              Close
            </button>
          </div>
          <div className="max-h-40 overflow-y-auto space-y-1.5 divide-y divide-stone-900">
            {currentDesign.history.map((item, idx) => (
              <div key={item.id} className="pt-1.5 flex items-start justify-between gap-3">
                <div className="space-y-0.5">
                  <div className="font-medium text-stone-200">{item.prompt}</div>
                  <div className="text-[11px] text-stone-500">{item.summary}</div>
                </div>
                {idx > 0 && onRevertHistory && (
                  <button
                    onClick={() => onRevertHistory(idx)}
                    title="Revert to this state"
                    className="shrink-0 p-1 text-stone-400 hover:text-emerald-400 rounded hover:bg-stone-800 transition-colors"
                  >
                    <Undo2 className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Input Form */}
      <form onSubmit={handleSubmit} className="relative">
        <input
          type="text"
          value={promptText}
          onChange={e => setPromptText(e.target.value)}
          placeholder="e.g. 'Add a central stone water fountain surrounded by lavender', 'Convert lawn to gravel courtyard'..."
          disabled={isLoading}
          className="w-full bg-stone-950 border border-stone-700/80 rounded-lg px-4 py-3 pr-28 text-sm text-stone-100 placeholder:text-stone-500 focus:outline-none focus:ring-1 focus:ring-emerald-400 focus:border-emerald-400 transition-all font-sans"
        />

        <button
          type="submit"
          disabled={!promptText.trim() || isLoading}
          className="absolute right-2 top-2 bottom-2 px-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:hover:bg-emerald-500 text-stone-950 text-xs font-semibold rounded-md transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
        >
          {isLoading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Synthesizing...</span>
            </>
          ) : (
            <>
              <span>Apply Prompt</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </>
          )}
        </button>
      </form>

      {/* Suggested Quick Prompt Chips */}
      <div className="flex flex-wrap items-center gap-1.5 pt-1">
        <span className="text-[11px] text-stone-500 font-medium">Quick Suggestions:</span>
        {quickPrompts.map((q, idx) => (
          <button
            key={idx}
            type="button"
            disabled={isLoading}
            onClick={() => handleQuickPromptClick(q)}
            className="text-[11px] font-sans text-stone-400 hover:text-stone-200 bg-stone-950/70 hover:bg-stone-800 border border-stone-800 px-2.5 py-1 rounded-md transition-colors text-left"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};
