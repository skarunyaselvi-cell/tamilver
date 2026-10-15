import React from 'react';
import { GardenDesign } from '../types/garden';
import { X, Calculator, PackageCheck, Layers } from 'lucide-react';

interface MaterialsEstimateModalProps {
  isOpen: boolean;
  onClose: () => void;
  design: GardenDesign;
}

export const MaterialsEstimateModal: React.FC<MaterialsEstimateModalProps> = ({
  isOpen,
  onClose,
  design
}) => {
  if (!isOpen) return null;

  const totalArea = design.dimensions.width * design.dimensions.length;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-2xl bg-stone-900 border border-stone-800 rounded-xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-950 shrink-0">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-emerald-400">
              Quantity Surveyor Engine
            </div>
            <h2 className="font-serif text-xl font-semibold text-white">
              Estimated Materials &amp; Construction Bill
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
        <div className="p-6 overflow-y-auto space-y-5">
          {/* Garden Footprint Banner */}
          <div className="p-3 bg-stone-950 rounded-lg border border-stone-800 flex items-center justify-between text-xs font-mono tabular-nums">
            <div className="flex items-center gap-2 text-stone-300">
              <Layers className="w-4 h-4 text-emerald-400" />
              <span>Project Footprint: {design.dimensions.width}×{design.dimensions.length} {design.dimensions.unit}</span>
            </div>
            <span className="font-semibold text-emerald-400">{totalArea.toLocaleString()} Total sq {design.dimensions.unit}</span>
          </div>

          {/* Materials Table */}
          <div className="space-y-2">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-mono">
              Hardscape &amp; Soil Estimates
            </h4>

            <div className="border border-stone-800 rounded-lg overflow-hidden divide-y divide-stone-800/80 bg-stone-950">
              {design.materialsEstimate.map((mat, idx) => (
                <div key={idx} className="p-3.5 flex items-start justify-between gap-4 text-xs">
                  <div className="space-y-0.5">
                    <div className="font-medium text-stone-100">{mat.item}</div>
                    <div className="text-[11px] text-stone-400 font-sans">{mat.purpose}</div>
                  </div>
                  <div className="text-right shrink-0 font-mono tabular-nums">
                    <div className="text-sm font-semibold text-emerald-400">{mat.quantity}</div>
                    <div className="text-[10px] text-stone-500 uppercase">{mat.unit}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Plant Count Overview */}
          <div className="space-y-2 pt-2 border-t border-stone-800">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-stone-400 font-mono">
              Botanical Inventory ({design.plants.length} species)
            </h4>

            <div className="grid grid-cols-2 gap-2 max-h-48 overflow-y-auto text-xs">
              {design.plants.map(p => (
                <div
                  key={p.id}
                  className="p-2.5 bg-stone-950 rounded border border-stone-800 flex items-center justify-between gap-2"
                >
                  <div className="flex items-center gap-2 truncate">
                    <span>{p.iconGlyph || '🌱'}</span>
                    <span className="text-stone-200 truncate">{p.commonName}</span>
                  </div>
                  <span className="font-mono text-[11px] text-stone-500 uppercase shrink-0">
                    {p.category}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
