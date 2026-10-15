import React from 'react';
import { GardenDesign, GardenZone, Plant } from '../types/garden';
import {
  Sun,
  Droplets,
  Layers,
  HeartHandshake,
  AlertTriangle,
  Info,
  X,
  Sparkles,
  Maximize2
} from 'lucide-react';

interface GardenInspectorProps {
  design: GardenDesign;
  selectedZone: GardenZone | null;
  selectedPlant: Plant | null;
  onClose: () => void;
  onOpenPlantLibrary: () => void;
  onRemovePlantFromZone?: (plantId: string, zoneId: string) => void;
}

export const GardenInspector: React.FC<GardenInspectorProps> = ({
  design,
  selectedZone,
  selectedPlant,
  onClose,
  onOpenPlantLibrary,
  onRemovePlantFromZone
}) => {
  const { width: gWidth, length: gLength, unit } = design.dimensions;

  // If a plant is selected
  if (selectedPlant) {
    return (
      <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 shadow-xl space-y-4">
        {/* Plant Header */}
        <div className="flex items-start justify-between gap-3 border-b border-stone-800 pb-3">
          <div className="flex items-center gap-3">
            <span className="text-3xl p-2 rounded-lg bg-stone-800 border border-stone-700/60 select-none">
              {selectedPlant.iconGlyph || '🌱'}
            </span>
            <div>
              <div className="text-xs uppercase font-mono tracking-wider text-emerald-400">
                {selectedPlant.category}
              </div>
              <h3 className="font-serif text-lg font-semibold text-white">
                {selectedPlant.commonName}
              </h3>
              <p className="text-xs italic text-stone-400 font-serif">
                {selectedPlant.botanicalName}
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white rounded hover:bg-stone-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Vital Botanical Specs Grid */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono tabular-nums">
          <div className="p-2.5 bg-stone-950 rounded border border-stone-800 space-y-1">
            <div className="flex items-center gap-1.5 text-stone-400">
              <Sun className="w-3.5 h-3.5 text-amber-400" />
              <span>Sunlight</span>
            </div>
            <div className="font-medium text-stone-100 capitalize">
              {selectedPlant.sunRequirement.replace('-', ' ')}
            </div>
          </div>

          <div className="p-2.5 bg-stone-950 rounded border border-stone-800 space-y-1">
            <div className="flex items-center gap-1.5 text-stone-400">
              <Droplets className="w-3.5 h-3.5 text-sky-400" />
              <span>Moisture</span>
            </div>
            <div className="font-medium text-stone-100 capitalize">
              {selectedPlant.waterNeed} Water
            </div>
          </div>

          <div className="p-2.5 bg-stone-950 rounded border border-stone-800 space-y-1">
            <div className="text-stone-400">Mature Height</div>
            <div className="font-medium text-stone-100 truncate">
              {selectedPlant.matureHeight}
            </div>
          </div>

          <div className="p-2.5 bg-stone-950 rounded border border-stone-800 space-y-1">
            <div className="text-stone-400">Mature Spread</div>
            <div className="font-medium text-stone-100 truncate">
              {selectedPlant.matureSpread}
            </div>
          </div>
        </div>

        {/* Bloom & Color details */}
        {selectedPlant.bloomTime && (
          <div className="text-xs text-stone-300 space-y-1 font-sans">
            <span className="text-stone-400 font-medium font-mono text-[11px]">Bloom Season:</span>
            <div className="flex items-center gap-2">
              <span className="text-stone-200">{selectedPlant.bloomTime}</span>
              {selectedPlant.flowerColor && (
                <span className="text-stone-400">({selectedPlant.flowerColor})</span>
              )}
            </div>
          </div>
        )}

        {/* Ecological Guild Benefit */}
        <div className="p-3 bg-emerald-950/30 rounded-lg border border-emerald-800/40 text-xs space-y-1">
          <div className="flex items-center gap-1.5 font-semibold text-emerald-400">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Ecological Role</span>
          </div>
          <p className="text-stone-300 leading-relaxed font-sans">
            {selectedPlant.ecologicalBenefit}
          </p>
        </div>

        {/* Companion Synergies */}
        <div className="space-y-2 text-xs font-sans">
          {selectedPlant.companionFriends.length > 0 && (
            <div className="space-y-1">
              <div className="flex items-center gap-1.5 text-stone-400 font-medium">
                <HeartHandshake className="w-3.5 h-3.5 text-emerald-400" />
                <span>Companion Synergies:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {selectedPlant.companionFriends.map((friend, i) => (
                  <span
                    key={i}
                    className="text-[11px] text-emerald-300 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded"
                  >
                    {friend}
                  </span>
                ))}
              </div>
            </div>
          )}

          {selectedPlant.companionFoes.length > 0 && (
            <div className="space-y-1 pt-1">
              <div className="flex items-center gap-1.5 text-stone-400 font-medium">
                <AlertTriangle className="w-3.5 h-3.5 text-rose-400" />
                <span>Avoid Planting Near:</span>
              </div>
              <div className="flex flex-wrap gap-1">
                {selectedPlant.companionFoes.map((foe, i) => (
                  <span
                    key={i}
                    className="text-[11px] text-rose-300 bg-rose-950/60 border border-rose-800/50 px-2 py-0.5 rounded"
                  >
                    {foe}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Care Tip */}
        <div className="p-2.5 bg-stone-950 rounded border border-stone-800 text-xs text-stone-400 space-y-1">
          <span className="font-semibold text-stone-300">Master Gardener Note:</span>
          <p className="leading-relaxed">{selectedPlant.careTip}</p>
        </div>
      </div>
    );
  }

  // If a zone is selected
  if (selectedZone) {
    const zoneAreaSqFt = Math.round(
      ((selectedZone.width / 100) * gWidth) * ((selectedZone.height / 100) * gLength)
    );
    const assignedPlants = design.plants.filter(p => selectedZone.plantIds.includes(p.id));

    return (
      <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 shadow-xl space-y-4">
        {/* Zone Header */}
        <div className="flex items-start justify-between gap-3 border-b border-stone-800 pb-3">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-emerald-400">
              {selectedZone.type.replace('_', ' ')}
            </div>
            <h3 className="font-serif text-lg font-semibold text-white">
              {selectedZone.name}
            </h3>
            <p className="text-xs text-stone-400 font-mono mt-0.5">
              Material: {selectedZone.surfaceMaterial}
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1 text-stone-400 hover:text-white rounded hover:bg-stone-800 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Calculated Spatial Dimensions */}
        <div className="grid grid-cols-2 gap-2 text-xs font-mono tabular-nums">
          <div className="p-2.5 bg-stone-950 rounded border border-stone-800 space-y-0.5">
            <span className="text-stone-400">Calculated Footprint</span>
            <div className="text-sm font-semibold text-stone-100">
              {zoneAreaSqFt.toLocaleString()} sq {unit}
            </div>
          </div>
          <div className="p-2.5 bg-stone-950 rounded border border-stone-800 space-y-0.5">
            <span className="text-stone-400">Relative Boundary</span>
            <div className="text-sm font-semibold text-stone-100">
              {selectedZone.width}% × {selectedZone.height}%
            </div>
          </div>
        </div>

        {/* Zone Description */}
        <p className="text-xs text-stone-300 leading-relaxed font-sans">
          {selectedZone.description}
        </p>

        {/* Assigned Plants in this Zone */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-stone-400 font-medium">
            <span>Botanical Inhabitants ({assignedPlants.length})</span>
            <button
              onClick={onOpenPlantLibrary}
              className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
            >
              <span>+ Add Plant</span>
            </button>
          </div>

          {assignedPlants.length === 0 ? (
            <div className="p-3 bg-stone-950/60 rounded border border-dashed border-stone-800 text-xs text-stone-500 text-center">
              No plants currently assigned to this zone. Click &quot;+ Add Plant&quot; to assign specimens.
            </div>
          ) : (
            <div className="space-y-1.5 max-h-48 overflow-y-auto">
              {assignedPlants.map(plant => (
                <div
                  key={plant.id}
                  className="p-2 bg-stone-950 rounded border border-stone-800 flex items-center justify-between gap-2 text-xs"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span>{plant.iconGlyph || '🌱'}</span>
                    <span className="text-stone-200 truncate font-medium">{plant.commonName}</span>
                  </div>
                  {onRemovePlantFromZone && (
                    <button
                      onClick={() => onRemovePlantFromZone(plant.id, selectedZone.id)}
                      className="text-stone-500 hover:text-rose-400 p-1 transition-colors"
                      title="Remove from zone"
                    >
                      <X className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  }

  // Fallback: General Garden Summary
  const totalArea = gWidth * gLength;

  return (
    <div className="bg-stone-900 border border-stone-800 rounded-xl p-5 shadow-xl space-y-4">
      <div className="border-b border-stone-800 pb-3">
        <div className="text-xs uppercase font-mono tracking-wider text-emerald-400">
          Spatial Inspector
        </div>
        <h3 className="font-serif text-lg font-semibold text-white">
          Garden Architecture
        </h3>
        <p className="text-xs text-stone-400 font-sans mt-0.5">
          Select any zone or plant node on the canvas to inspect horticultural and structural specs.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 text-xs font-mono tabular-nums">
        <div className="p-2.5 bg-stone-950 rounded border border-stone-800 space-y-1">
          <span className="text-stone-400">Total Acreage</span>
          <div className="font-semibold text-stone-100 text-sm">
            {totalArea.toLocaleString()} sq {unit}
          </div>
        </div>
        <div className="p-2.5 bg-stone-950 rounded border border-stone-800 space-y-1">
          <span className="text-stone-400">Hardiness Zone</span>
          <div className="font-semibold text-stone-100 text-sm truncate">
            {design.climateZone}
          </div>
        </div>
      </div>

      <div className="p-3 bg-stone-950 rounded border border-stone-800 text-xs space-y-2">
        <div className="flex items-center gap-1.5 font-semibold text-stone-300">
          <Info className="w-3.5 h-3.5 text-emerald-400" />
          <span>Interactive Canvas Tips</span>
        </div>
        <ul className="text-stone-400 space-y-1 list-disc pl-4 leading-relaxed font-sans">
          <li>Switch to <strong className="text-stone-200">CAD Blueprint Mode</strong> to view technical grid dimensions.</li>
          <li>Use <strong className="text-stone-200">Sun &amp; Shadow Simulator</strong> to test shadow casts throughout the daylight cycle.</li>
          <li>Click and drag any zone on the canvas to adjust spatial arrangement.</li>
        </ul>
      </div>

      <button
        onClick={onOpenPlantLibrary}
        className="w-full py-2 bg-stone-800 hover:bg-stone-700 text-stone-200 text-xs font-semibold rounded-md transition-colors"
      >
        Browse Complete Botanical Database
      </button>
    </div>
  );
};
