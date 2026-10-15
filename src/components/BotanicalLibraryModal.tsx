import React, { useState } from 'react';
import { Plant, GardenDesign } from '../types/garden';
import { BOTANICAL_DATABASE } from '../data/plantLibrary';
import { X, Search, Sun, Droplets, Plus, Check } from 'lucide-react';

interface BotanicalLibraryModalProps {
  isOpen: boolean;
  onClose: () => void;
  design: GardenDesign;
  onAddPlantToGarden: (plant: Plant, targetZoneId?: string) => void;
}

export const BotanicalLibraryModal: React.FC<BotanicalLibraryModalProps> = ({
  isOpen,
  onClose,
  design,
  onAddPlantToGarden
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedSun, setSelectedSun] = useState<string>('all');
  const [targetZoneId, setTargetZoneId] = useState<string>(
    design.zones[0]?.id || ''
  );

  if (!isOpen) return null;

  const categories = [
    { id: 'all', label: 'All Plants' },
    { id: 'vegetable', label: 'Vegetables' },
    { id: 'herb', label: 'Culinary Herbs' },
    { id: 'perennial', label: 'Perennials' },
    { id: 'shrub', label: 'Shrubs & Roses' },
    { id: 'tree', label: 'Architectural Trees' },
    { id: 'climber', label: 'Climbers' },
    { id: 'groundcover', label: 'Groundcovers' }
  ];

  const filteredPlants = BOTANICAL_DATABASE.filter(plant => {
    const matchesSearch =
      plant.commonName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      plant.botanicalName.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      selectedCategory === 'all' || plant.category === selectedCategory;
    const matchesSun =
      selectedSun === 'all' || plant.sunRequirement === selectedSun;

    return matchesSearch && matchesCategory && matchesSun;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-950 shrink-0">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-emerald-400">
              Verdant Botanical Database
            </div>
            <h2 className="font-serif text-xl font-semibold text-white">
              Curated Botanical &amp; Companion Plant Catalog
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-md hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Filter & Search Bar */}
        <div className="p-4 bg-stone-950/80 border-b border-stone-800 space-y-3 shrink-0">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative flex-1 min-w-[200px]">
              <Search className="w-4 h-4 text-stone-500 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Search common or scientific name (e.g. Lavender, Solanum, Rose)..."
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                className="w-full bg-stone-900 border border-stone-800 rounded-md pl-9 pr-3 py-2 text-xs text-white placeholder:text-stone-500 focus:outline-none focus:border-emerald-400 font-sans"
              />
            </div>

            {/* Target Zone Selector */}
            <div className="flex items-center gap-2 text-xs text-stone-300">
              <span className="font-mono text-[11px] text-stone-400 whitespace-nowrap">Assign to:</span>
              <select
                value={targetZoneId}
                onChange={e => setTargetZoneId(e.target.value)}
                className="bg-stone-900 border border-stone-800 rounded px-2.5 py-1.5 text-xs text-emerald-300 focus:outline-none focus:border-emerald-400"
              >
                {design.zones.map(z => (
                  <option key={z.id} value={z.id}>
                    {z.name} ({z.type.replace('_', ' ')})
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 pt-1">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 text-xs rounded-md font-medium transition-colors ${
                  selectedCategory === cat.id
                    ? 'bg-emerald-600 text-white shadow-sm'
                    : 'text-stone-400 hover:text-stone-200 bg-stone-900'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Plant Cards Grid */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredPlants.map(plant => {
              const alreadyInGarden = design.plants.some(p => p.id === plant.id);

              return (
                <div
                  key={plant.id}
                  className="p-4 bg-stone-950 rounded-lg border border-stone-800/80 hover:border-stone-700 transition-all space-y-3 flex flex-col justify-between"
                >
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex items-center gap-2.5">
                        <span className="text-2xl p-1.5 rounded bg-stone-900 border border-stone-800 select-none">
                          {plant.iconGlyph || '🌱'}
                        </span>
                        <div>
                          <h4 className="font-serif text-sm font-semibold text-white">
                            {plant.commonName}
                          </h4>
                          <p className="text-[11px] italic text-stone-400 font-serif">
                            {plant.botanicalName}
                          </p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono uppercase text-emerald-400 bg-emerald-950/60 border border-emerald-900 px-1.5 py-0.5 rounded">
                        {plant.category}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-2 text-[11px] font-mono tabular-nums text-stone-300">
                      <div className="flex items-center gap-1">
                        <Sun className="w-3 h-3 text-amber-400" />
                        <span className="capitalize">{plant.sunRequirement.replace('-', ' ')}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Droplets className="w-3 h-3 text-sky-400" />
                        <span className="capitalize">{plant.waterNeed} Water</span>
                      </div>
                      <div className="text-stone-400">
                        H: <span className="text-stone-200">{plant.matureHeight}</span>
                      </div>
                      <div className="text-stone-400">
                        W: <span className="text-stone-200">{plant.matureSpread}</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-300 font-sans leading-relaxed">
                      {plant.ecologicalBenefit}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-stone-800/60 flex items-center justify-between">
                    <div className="text-[11px] text-stone-400 truncate max-w-[200px]">
                      {plant.bloomTime}
                    </div>

                    <button
                      onClick={() => onAddPlantToGarden(plant, targetZoneId)}
                      className={`px-3 py-1.5 text-xs font-semibold rounded transition-colors flex items-center gap-1.5 ${
                        alreadyInGarden
                          ? 'bg-stone-800 text-emerald-400 hover:bg-stone-700'
                          : 'bg-emerald-500 hover:bg-emerald-400 text-stone-950'
                      }`}
                    >
                      {alreadyInGarden ? (
                        <>
                          <Check className="w-3.5 h-3.5" />
                          <span>In Garden (Add Again)</span>
                        </>
                      ) : (
                        <>
                          <Plus className="w-3.5 h-3.5" />
                          <span>Add to Zone</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {filteredPlants.length === 0 && (
            <div className="p-8 text-center text-stone-500 font-sans text-xs">
              No botanical species found matching your filter criteria. Try adjusting your query or category filters.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
