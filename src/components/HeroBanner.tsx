import React from 'react';
import { GardenDesign, GardenStyle } from '../types/garden';
import { PRESET_GARDEN_DESIGNS } from '../data/plantLibrary';
import { Sun, Droplets, Layers, Sparkles } from 'lucide-react';

interface HeroBannerProps {
  currentDesign: GardenDesign;
  onSelectPreset: (design: GardenDesign) => void;
  onOpenCustomizer: () => void;
}

export const HeroBanner: React.FC<HeroBannerProps> = ({
  currentDesign,
  onSelectPreset,
  onOpenCustomizer
}) => {
  const stylesList: Array<{ style: GardenStyle; title: string; image: string; tag: string }> = [
    {
      style: 'cottage',
      title: 'English Cottage',
      image: '/src/assets/images/garden_english_cottage_1792061105544.jpg',
      tag: 'Romantic Perennial Spire'
    },
    {
      style: 'zen',
      title: 'Modern Zen',
      image: '/src/assets/images/garden_modern_zen_1792061105458.jpg',
      tag: 'Karesansui Dry Landscape'
    },
    {
      style: 'mediterranean',
      title: 'Mediterranean Courtyard',
      image: '/src/assets/images/garden_mediterranean_courtyard_1792061107483.jpg',
      tag: 'Drought-Resilient Living'
    },
    {
      style: 'potager',
      title: 'French Potager',
      image: '/src/assets/images/garden_potager_kitchen_1792061106263.jpg',
      tag: 'Geometric Kitchen Beds'
    }
  ];

  return (
    <section className="relative overflow-hidden bg-stone-100 text-stone-900 border-b border-stone-200">
      {/* Background Hero Image with light scrim */}
      <div className="absolute inset-0 z-0 opacity-25">
        <img
          src="/src/assets/images/hero_dream_garden_1792061103994.jpg"
          alt="Dream garden with raised cedar beds, flower borders, and timber pergola at sunset"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50 via-stone-50/90 to-stone-50/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-100 via-transparent to-stone-50/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 lg:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Main Hero Column */}
          <div className="lg:col-span-7 space-y-3.5">
            {/* Unboxed Metadata Header */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-mono uppercase tracking-wider text-emerald-800">
              <span className="font-semibold">Architectural Landscape AI</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span>Ecological Guilds</span>
              <span aria-hidden="true" className="text-stone-400">·</span>
              <span className="text-stone-600">{currentDesign.climateZone}</span>
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-stone-900 leading-tight max-w-2xl" style={{ textWrap: 'balance' }}>
              {currentDesign.name}
            </h1>

            <p className="text-sm sm:text-base text-stone-700 leading-relaxed max-w-2xl font-sans">
              {currentDesign.narrative ||
                'Design, visualize, and refine your living sanctuary. Verdant synthesizes microclimate sun paths, companion planting botany, and spatial architecture into interactive 2D blueprints.'}
            </p>

            {/* Quick Spec Metrics - Tabular Numerals */}
            <div className="pt-2 flex flex-wrap items-center gap-5 text-xs text-stone-700 font-mono tabular-nums">
              <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-md border border-stone-200 shadow-2xs">
                <Layers className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {currentDesign.dimensions.width}×{currentDesign.dimensions.length} {currentDesign.dimensions.unit} ({(currentDesign.dimensions.width * currentDesign.dimensions.length).toLocaleString()} sq {currentDesign.dimensions.unit})
                </span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-md border border-stone-200 shadow-2xs">
                <Sun className="w-3.5 h-3.5 text-amber-600" />
                <span className="capitalize">{currentDesign.sunlight.replace('-', ' ')}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-md border border-stone-200 shadow-2xs">
                <Droplets className="w-3.5 h-3.5 text-sky-600" />
                <span className="capitalize">{currentDesign.soilType} soil</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-md border border-stone-200 shadow-2xs">
                <span className="text-emerald-700 font-semibold">{currentDesign.zones.length}</span>
                <span>Zones</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white/80 px-2.5 py-1 rounded-md border border-stone-200 shadow-2xs">
                <span className="text-emerald-700 font-semibold">{currentDesign.plants.length}</span>
                <span>Species</span>
              </div>
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={onOpenCustomizer}
                className="px-5 py-2.5 text-xs sm:text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors shadow-sm flex items-center gap-2 whitespace-nowrap cursor-pointer"
              >
                <Sparkles className="w-4 h-4" />
                <span>Customize Design Preferences</span>
              </button>
            </div>
          </div>

          {/* Preset Styles Showcase Cards */}
          <div className="lg:col-span-5 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-stone-500 font-medium">
              <span>Curated Aesthetic Blueprints</span>
              <span>4 Presets</span>
            </div>

            <div className="grid grid-cols-2 gap-2.5">
              {stylesList.map(item => {
                const isActive = currentDesign.style === item.style;
                const preset = PRESET_GARDEN_DESIGNS[item.style];
                return (
                  <button
                    key={item.style}
                    onClick={() => preset && onSelectPreset(preset)}
                    className={`group text-left rounded-lg overflow-hidden border p-1.5 transition-all bg-white cursor-pointer ${
                      isActive
                        ? 'border-emerald-600 ring-2 ring-emerald-500/30 shadow-sm'
                        : 'border-stone-200 hover:border-stone-300 shadow-2xs'
                    }`}
                  >
                    <div className="aspect-[4/3] rounded overflow-hidden relative mb-1.5 bg-stone-100">
                      <img
                        src={item.image}
                        alt={item.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="px-1 py-0.5">
                      <div className="font-serif text-xs font-semibold text-stone-900 truncate">
                        {item.title}
                      </div>
                      <div className="text-[10px] text-stone-500 truncate font-sans">
                        {item.tag}
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
