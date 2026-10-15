import React from 'react';
import { GardenDesign } from '../types/garden';
import { X, HeartHandshake, AlertOctagon, Sparkles, ShieldCheck } from 'lucide-react';

interface CompanionMatrixModalProps {
  isOpen: boolean;
  onClose: () => void;
  design: GardenDesign;
}

export const CompanionMatrixModal: React.FC<CompanionMatrixModalProps> = ({
  isOpen,
  onClose,
  design
}) => {
  if (!isOpen) return null;

  const beneficialSynergies = design.companionSynergies.filter(s => s.type === 'beneficial');
  const antagonisticSynergies = design.companionSynergies.filter(s => s.type === 'antagonistic');

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-stone-900 border border-stone-800 rounded-xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-950 shrink-0">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-emerald-400">
              Ecological Guild Synergy Engine
            </div>
            <h2 className="font-serif text-xl font-semibold text-white">
              Companion Planting &amp; Guild Matrix
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-md hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Beneficial Pairings Section */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold text-sm">
              <ShieldCheck className="w-4 h-4" />
              <span>Beneficial Symbiotic Pairings ({beneficialSynergies.length})</span>
            </div>

            {beneficialSynergies.length === 0 ? (
              <div className="p-4 bg-stone-950 rounded border border-stone-800 text-xs text-stone-400 text-center">
                No specific synergies registered for current plants. Try adding classic companion duos like Heirloom Tomato + Sweet Basil or English Rose + Lavender.
              </div>
            ) : (
              <div className="space-y-2.5">
                {beneficialSynergies.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-stone-950 rounded-lg border border-emerald-900/40 space-y-1.5"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="text-white bg-stone-800 px-2 py-0.5 rounded">
                        {item.plantA}
                      </span>
                      <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-white bg-stone-800 px-2 py-0.5 rounded">
                        {item.plantB}
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 font-sans leading-relaxed">
                      {item.mechanism}
                    </p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Antagonistic / Incompatible Pairings */}
          {antagonisticSynergies.length > 0 && (
            <div className="space-y-3 pt-2 border-t border-stone-800">
              <div className="flex items-center gap-2 text-rose-400 font-semibold text-sm">
                <AlertOctagon className="w-4 h-4" />
                <span>Incompatible Plants to Separate ({antagonisticSynergies.length})</span>
              </div>

              <div className="space-y-2.5">
                {antagonisticSynergies.map((item, idx) => (
                  <div
                    key={idx}
                    className="p-3.5 bg-stone-950 rounded-lg border border-rose-900/40 space-y-1.5"
                  >
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
                      <span className="text-white bg-stone-800 px-2 py-0.5 rounded">
                        {item.plantA}
                      </span>
                      <span className="text-rose-400 font-mono text-[11px]">≠ DO NOT ADJOIN ≠</span>
                      <span className="text-white bg-stone-800 px-2 py-0.5 rounded">
                        {item.plantB}
                      </span>
                    </div>
                    <p className="text-xs text-stone-300 font-sans leading-relaxed">
                      {item.mechanism}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Educational Note */}
          <div className="p-4 bg-emerald-950/20 rounded-lg border border-emerald-800/30 text-xs text-stone-300 space-y-1.5">
            <div className="flex items-center gap-2 text-emerald-400 font-semibold">
              <Sparkles className="w-4 h-4" />
              <span>The Science of Botanical Guilds</span>
            </div>
            <p className="leading-relaxed font-sans text-stone-300">
              Companion planting mimics natural ecosystems by pairing taprooted mineral accumulators, nitrogen-fixing root nodules, aromatic pest-repelling terpenes, and predatory wasp attractors in close proximity to reduce pest damage and eliminate chemical fertilizers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
