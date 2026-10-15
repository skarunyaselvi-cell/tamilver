import React from 'react';
import { GardenDesign } from '../types/garden';
import { X, Printer } from 'lucide-react';

interface PrintBlueprintModalProps {
  isOpen: boolean;
  onClose: () => void;
  design: GardenDesign;
}

export const PrintBlueprintModal: React.FC<PrintBlueprintModalProps> = ({
  isOpen,
  onClose,
  design
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-4xl bg-stone-900 border border-stone-800 rounded-xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[90vh]">
        {/* Modal Controls (Not printed) */}
        <div className="px-6 py-3 border-b border-stone-800 flex items-center justify-between bg-stone-950 shrink-0 print:hidden">
          <span className="text-xs font-mono text-stone-400">
            Print Preview Mode · Standard Landscape Sheet
          </span>
          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 bg-emerald-500 hover:bg-emerald-400 text-stone-950 text-xs font-semibold rounded transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save as PDF</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 text-stone-400 hover:text-white rounded hover:bg-stone-800"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Blueprint Sheet */}
        <div className="p-8 bg-stone-950 text-stone-100 overflow-y-auto space-y-6 print:p-0 print:bg-white print:text-black">
          {/* Header Title Block */}
          <div className="border-b-2 border-stone-700 print:border-black pb-4 flex items-start justify-between">
            <div>
              <div className="text-xs font-mono uppercase tracking-widest text-emerald-400 print:text-stone-800">
                VERDANT ARCHITECTURAL STUDIO · LANDSCAPE BLUEPRINT
              </div>
              <h1 className="font-serif text-2xl font-bold tracking-tight text-white print:text-black mt-1">
                {design.name}
              </h1>
              <p className="text-xs text-stone-400 print:text-stone-600 mt-1 max-w-2xl font-sans">
                {design.narrative}
              </p>
            </div>

            <div className="text-right text-xs font-mono tabular-nums text-stone-300 print:text-stone-800 border border-stone-800 print:border-black p-2.5 rounded bg-stone-900/50 print:bg-stone-50">
              <div>Scale: {design.dimensions.width}×{design.dimensions.length} {design.dimensions.unit}</div>
              <div>Sunlight: {design.sunlight}</div>
              <div>Soil: {design.soilType}</div>
              <div>Zone: {design.climateZone}</div>
            </div>
          </div>

          {/* Blueprint SVG Preview */}
          <div className="w-full aspect-[16/9] border-2 border-stone-700 print:border-black rounded bg-[#0a192f] print:bg-stone-100 p-4 relative overflow-hidden">
            <svg viewBox="0 0 100 100" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="printGrid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="#1e3a5f" strokeWidth="0.3" />
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#printGrid)" />

              {design.zones.map(z => (
                <g key={z.id}>
                  <rect
                    x={z.x}
                    y={z.y}
                    width={z.width}
                    height={z.height}
                    fill="rgba(56, 189, 248, 0.15)"
                    stroke="#38bdf8"
                    strokeWidth="0.5"
                  />
                  <text
                    x={z.x + z.width / 2}
                    y={z.y + z.height / 2 + 1}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="2.5"
                    fontFamily="monospace"
                    fontWeight="bold"
                  >
                    {z.name}
                  </text>
                </g>
              ))}
            </svg>
          </div>

          {/* Schedules: Zones & Plants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-xs">
            {/* Zone Schedule */}
            <div className="space-y-2">
              <h3 className="font-mono font-semibold uppercase tracking-wider text-emerald-400 print:text-black border-b border-stone-800 pb-1">
                Zone Schedule &amp; Materials
              </h3>
              <div className="space-y-1.5 divide-y divide-stone-800/60 print:divide-stone-200">
                {design.zones.map(z => (
                  <div key={z.id} className="pt-1.5 flex justify-between gap-2">
                    <span className="font-medium text-stone-200 print:text-black">{z.name}</span>
                    <span className="font-mono text-stone-400 print:text-stone-600 truncate">{z.surfaceMaterial}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Plant Schedule */}
            <div className="space-y-2">
              <h3 className="font-mono font-semibold uppercase tracking-wider text-emerald-400 print:text-black border-b border-stone-800 pb-1">
                Botanical Planting Schedule
              </h3>
              <div className="space-y-1.5 divide-y divide-stone-800/60 print:divide-stone-200">
                {design.plants.map(p => (
                  <div key={p.id} className="pt-1.5 flex justify-between gap-2">
                    <div>
                      <span className="text-stone-200 print:text-black font-medium">{p.commonName}</span>
                      <span className="text-[10px] italic text-stone-500 print:text-stone-600 block">{p.botanicalName}</span>
                    </div>
                    <span className="font-mono text-stone-400 print:text-stone-600 uppercase text-[10px] shrink-0">{p.sunRequirement} · {p.waterNeed}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
