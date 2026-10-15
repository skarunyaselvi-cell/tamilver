import React, { useState } from 'react';
import {
  GardenStyle,
  SunExposure,
  SoilType,
  GenerateGardenRequest
} from '../types/garden';
import { X, Sparkles, Loader2, Check } from 'lucide-react';

interface GardenPreferencesModalProps {
  isOpen: boolean;
  onClose: () => void;
  onGenerate: (prefs: GenerateGardenRequest) => Promise<void>;
  isLoading: boolean;
}

export const GardenPreferencesModal: React.FC<GardenPreferencesModalProps> = ({
  isOpen,
  onClose,
  onGenerate,
  isLoading
}) => {
  const [style, setStyle] = useState<GardenStyle>('cottage');
  const [width, setWidth] = useState<number>(30);
  const [length, setLength] = useState<number>(45);
  const [unit, setUnit] = useState<'ft' | 'm'>('ft');
  const [sunlight, setSunlight] = useState<SunExposure>('full-sun');
  const [soilType, setSoilType] = useState<SoilType>('loam');
  const [climateZone, setClimateZone] = useState<string>('USDA Zone 7b');
  const [userNotes, setUserNotes] = useState<string>('');

  const [selectedGoals, setSelectedGoals] = useState<string[]>([
    'Pollinator Sanctuary',
    'Fragrant Blooms',
    'Organic Kitchen Herbs'
  ]);

  if (!isOpen) return null;

  const styleOptions: Array<{ id: GardenStyle; title: string; desc: string }> = [
    { id: 'cottage', title: 'English Cottage', desc: 'Dense flowering spires, rambling climbing roses, rustic stone walkways' },
    { id: 'zen', title: 'Japanese Zen', desc: 'Raked stone sea, sculpted Niwaki pines, moss islands, bamboo tsukubai basin' },
    { id: 'potager', title: 'French Potager', desc: 'Symmetrical raised cedar beds, culinary herbs, companion flower borders' },
    { id: 'mediterranean', title: 'Mediterranean Courtyard', desc: 'Drought-tolerant olive trees, terracotta urns, travertine pavers, rosemary' },
    { id: 'meadow', title: 'Native Wildlife Meadow', desc: 'Self-sustaining native prairie grasses, coneflowers, low water requirement' },
    { id: 'xeriscape', title: 'Arid Xeriscape', desc: 'High-desert succulents, gravel mulch, sculptural agaves, waterwise perennials' }
  ];

  const goalOptions = [
    'Pollinator Sanctuary',
    'Organic Kitchen Herbs',
    'Cut-Flower Garden',
    'Meditation & Tranquility',
    'Outdoor Dining & Entertaining',
    'Low Maintenance / Waterwise'
  ];

  const toggleGoal = (goal: string) => {
    if (selectedGoals.includes(goal)) {
      setSelectedGoals(selectedGoals.filter(g => g !== goal));
    } else {
      setSelectedGoals([...selectedGoals, goal]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (isLoading) return;

    onGenerate({
      style,
      dimensions: { width: Number(width), length: Number(length), unit },
      sunlight,
      soilType,
      climateZone,
      goals: selectedGoals,
      userNotes: userNotes.trim()
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-xl shadow-2xl overflow-hidden my-8">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-950">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-emerald-400">
              Verdant AI Landscape Architect
            </div>
            <h2 className="font-serif text-xl font-semibold text-white">
              Design Your Dream Garden
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-md hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Form */}
        <form onSubmit={handleSubmit} className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Aesthetic Style Selector */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono">
              1. Garden Aesthetic Style
            </label>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {styleOptions.map(opt => (
                <button
                  type="button"
                  key={opt.id}
                  onClick={() => setStyle(opt.id)}
                  className={`p-3 text-left rounded-lg border transition-all text-xs ${
                    style === opt.id
                      ? 'bg-emerald-950/40 border-emerald-500 text-white'
                      : 'bg-stone-950/60 border-stone-800 text-stone-300 hover:border-stone-700'
                  }`}
                >
                  <div className="font-semibold text-sm text-stone-100 flex items-center justify-between">
                    <span>{opt.title}</span>
                    {style === opt.id && <Check className="w-4 h-4 text-emerald-400" />}
                  </div>
                  <p className="text-[11px] text-stone-400 mt-1 leading-normal font-sans">
                    {opt.desc}
                  </p>
                </button>
              ))}
            </div>
          </div>

          {/* Dimensions & Unit */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono">
              2. Garden Footprint Dimensions
            </label>
            <div className="grid grid-cols-3 gap-3">
              <div>
                <label className="text-[11px] text-stone-400">Width</label>
                <input
                  type="number"
                  min="10"
                  max="300"
                  value={width}
                  onChange={e => setWidth(Math.max(10, Number(e.target.value)))}
                  className="w-full mt-1 bg-stone-950 border border-stone-800 rounded px-3 py-2 text-sm text-white font-mono tabular-nums focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-[11px] text-stone-400">Length</label>
                <input
                  type="number"
                  min="10"
                  max="300"
                  value={length}
                  onChange={e => setLength(Math.max(10, Number(e.target.value)))}
                  className="w-full mt-1 bg-stone-950 border border-stone-800 rounded px-3 py-2 text-sm text-white font-mono tabular-nums focus:outline-none focus:border-emerald-400"
                />
              </div>
              <div>
                <label className="text-[11px] text-stone-400">Measurement Unit</label>
                <div className="mt-1 flex items-center bg-stone-950 rounded border border-stone-800 p-0.5">
                  <button
                    type="button"
                    onClick={() => setUnit('ft')}
                    className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors ${
                      unit === 'ft' ? 'bg-stone-800 text-white' : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    Feet (ft)
                  </button>
                  <button
                    type="button"
                    onClick={() => setUnit('m')}
                    className={`flex-1 py-1.5 text-xs font-medium rounded transition-colors ${
                      unit === 'm' ? 'bg-stone-800 text-white' : 'text-stone-400 hover:text-white'
                    }`}
                  >
                    Meters (m)
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Environmental Conditions: Sun & Soil */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono">
                3. Sunlight Exposure
              </label>
              <select
                value={sunlight}
                onChange={e => setSunlight(e.target.value as SunExposure)}
                className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
              >
                <option value="full-sun">Full Sun (6+ hours direct daylight)</option>
                <option value="part-shade">Partial Shade / Dappled Light (3-6 hours)</option>
                <option value="full-shade">Full Shade (&lt;3 hours direct sunlight)</option>
              </select>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono">
                4. Native Soil Type
              </label>
              <select
                value={soilType}
                onChange={e => setSoilType(e.target.value as SoilType)}
                className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400"
              >
                <option value="loam">Rich, fertile garden loam</option>
                <option value="sandy">Sandy, fast-draining gritty soil</option>
                <option value="clay">Dense, moisture-retentive clay</option>
                <option value="raised-bed">Engineered raised-bed compost blend</option>
                <option value="chalk">Alkaline chalky / limestone soil</option>
              </select>
            </div>
          </div>

          {/* Hardiness Zone & Climate */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono">
              5. Regional Climate / Hardiness Zone
            </label>
            <input
              type="text"
              value={climateZone}
              onChange={e => setClimateZone(e.target.value)}
              placeholder="e.g. USDA Hardiness Zone 7b, Mediterranean Coastal, Pacific Northwest"
              className="w-full bg-stone-950 border border-stone-800 rounded px-3 py-2 text-xs text-white focus:outline-none focus:border-emerald-400 font-mono"
            />
          </div>

          {/* Primary Goals Multi-Select */}
          <div className="space-y-2">
            <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono">
              6. Desired Garden Roles &amp; Functions
            </label>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
              {goalOptions.map(goal => {
                const isSelected = selectedGoals.includes(goal);
                return (
                  <button
                    type="button"
                    key={goal}
                    onClick={() => toggleGoal(goal)}
                    className={`p-2.5 text-left rounded border transition-colors text-xs flex items-center justify-between ${
                      isSelected
                        ? 'bg-emerald-950/40 border-emerald-500/80 text-emerald-200'
                        : 'bg-stone-950/60 border-stone-800 text-stone-400 hover:text-stone-200'
                    }`}
                  >
                    <span className="truncate">{goal}</span>
                    {isSelected && <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Custom Wishes & Text Prompt */}
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-stone-300 uppercase tracking-wider font-mono">
              7. Specific Features &amp; Vision (Optional Prompt)
            </label>
            <textarea
              rows={3}
              value={userNotes}
              onChange={e => setUserNotes(e.target.value)}
              placeholder="Describe any specific dreams: 'A central circular stone water fountain with lavender borders, a shaded pergola for dining, and four raised vegetable beds on the sunny south end'..."
              className="w-full bg-stone-950 border border-stone-800 rounded p-3 text-xs text-stone-200 placeholder:text-stone-500 focus:outline-none focus:border-emerald-400 font-sans"
            />
          </div>

          {/* Submit Action */}
          <div className="pt-2 flex items-center justify-end gap-3 border-t border-stone-800">
            <button
              type="button"
              onClick={onClose}
              disabled={isLoading}
              className="px-4 py-2 text-xs font-medium text-stone-400 hover:text-white transition-colors"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="px-5 py-2.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-stone-950 text-xs font-semibold rounded-md transition-colors shadow-sm flex items-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Synthesizing Architectural Blueprint...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Generate Dream Garden Layout</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
