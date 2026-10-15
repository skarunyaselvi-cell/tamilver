import React, { useState, useRef } from 'react';
import { GardenDesign, GardenZone, Plant } from '../types/garden';
import {
  Compass,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  Sun,
  Eye,
  Grid,
  Info
} from 'lucide-react';

interface InteractiveGardenCanvasProps {
  design: GardenDesign;
  selectedZone: GardenZone | null;
  onSelectZone: (zone: GardenZone | null) => void;
  selectedPlant: Plant | null;
  onSelectPlant: (plant: Plant | null) => void;
  onUpdateZonePosition: (zoneId: string, newX: number, newY: number) => void;
}

export const InteractiveGardenCanvas: React.FC<InteractiveGardenCanvasProps> = ({
  design,
  selectedZone,
  onSelectZone,
  selectedPlant,
  onSelectPlant,
  onUpdateZonePosition
}) => {
  const [viewMode, setViewMode] = useState<'natural' | 'blueprint' | 'shadow'>('natural');
  const [sunHour, setSunHour] = useState<number>(13); // 13 = 1 PM
  const [zoomLevel, setZoomLevel] = useState<number>(1);
  const [showGrid, setShowGrid] = useState<boolean>(true);
  const [isDragging, setIsDragging] = useState<string | null>(null);
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  const containerRef = useRef<HTMLDivElement>(null);

  // Aspect ratio calculation
  const { width: gardenWidth, length: gardenLength, unit } = design.dimensions;
  const aspectRatio = gardenWidth / gardenLength;

  // Sun shadow projection vector based on hour (8 AM to 18 PM)
  const sunAngleRad = ((sunHour - 6) / 12) * Math.PI;
  const shadowDist = Math.max(3, Math.abs(13 - sunHour) * 3);
  const shadowDx = -Math.cos(sunAngleRad) * shadowDist;
  const shadowDy = Math.sin(sunAngleRad) * (shadowDist * 0.5) + 3;

  // Dragging handlers for zones
  const handleMouseDown = (e: React.MouseEvent, zone: GardenZone) => {
    e.stopPropagation();
    onSelectZone(zone);
    onSelectPlant(null);

    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseXPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseYPercent = ((e.clientY - rect.top) / rect.height) * 100;

    setIsDragging(zone.id);
    setDragOffset({
      x: mouseXPercent - zone.x,
      y: mouseYPercent - zone.y
    });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;

    const mouseXPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseYPercent = ((e.clientY - rect.top) / rect.height) * 100;

    const newX = Math.max(0, Math.min(95, mouseXPercent - dragOffset.x));
    const newY = Math.max(0, Math.min(95, mouseYPercent - dragOffset.y));

    onUpdateZonePosition(isDragging, Math.round(newX), Math.round(newY));
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  return (
    <div className="bg-white border border-stone-200 rounded-xl overflow-hidden shadow-xs flex flex-col text-stone-900">
      {/* Canvas Toolbar & Controls */}
      <div className="px-4 py-3 bg-stone-50 border-b border-stone-200 flex flex-wrap items-center justify-between gap-4">
        {/* View Mode Segmented Tabs */}
        <div className="flex items-center gap-1 p-1 bg-stone-100 rounded-lg border border-stone-200 text-xs font-medium">
          <button
            onClick={() => setViewMode('natural')}
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'natural'
                ? 'bg-emerald-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Eye className="w-3.5 h-3.5" />
            <span>Natural Bloom</span>
          </button>
          <button
            onClick={() => setViewMode('blueprint')}
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'blueprint'
                ? 'bg-sky-700 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Grid className="w-3.5 h-3.5" />
            <span>CAD Blueprint</span>
          </button>
          <button
            onClick={() => setViewMode('shadow')}
            className={`px-3 py-1.5 rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'shadow'
                ? 'bg-amber-600 text-white shadow-xs'
                : 'text-stone-600 hover:text-stone-900'
            }`}
          >
            <Sun className="w-3.5 h-3.5" />
            <span>Sun &amp; Shadow Simulator</span>
          </button>
        </div>

        {/* Shadow Time Slider (active when in shadow mode) */}
        {viewMode === 'shadow' && (
          <div className="flex items-center gap-3 px-3 py-1 bg-white rounded-md border border-stone-200 text-xs text-stone-700 shadow-2xs">
            <span className="font-mono text-amber-700 font-semibold tabular-nums">
              {sunHour > 12 ? `${sunHour - 12}:00 PM` : `${sunHour}:00 AM`}
            </span>
            <input
              type="range"
              min="8"
              max="18"
              step="1"
              value={sunHour}
              onChange={e => setSunHour(Number(e.target.value))}
              className="w-32 accent-amber-600 cursor-pointer"
            />
            <span className="text-[11px] text-stone-500">Solar Arc</span>
          </div>
        )}

        {/* Canvas Tools & Zoom */}
        <div className="flex items-center gap-1.5 text-xs text-stone-600">
          <button
            onClick={() => setShowGrid(!showGrid)}
            title="Toggle Scale Grid"
            className={`p-1.5 rounded hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer ${
              showGrid ? 'text-emerald-700 bg-stone-200 font-medium' : ''
            }`}
          >
            <Grid className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(Math.max(0.7, zoomLevel - 0.1))}
            title="Zoom Out"
            className="p-1.5 rounded hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <ZoomOut className="w-4 h-4" />
          </button>
          <span className="font-mono text-[11px] px-1 tabular-nums font-semibold text-stone-700">
            {Math.round(zoomLevel * 100)}%
          </span>
          <button
            onClick={() => setZoomLevel(Math.min(1.5, zoomLevel + 0.1))}
            title="Zoom In"
            className="p-1.5 rounded hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <ZoomIn className="w-4 h-4" />
          </button>
          <button
            onClick={() => setZoomLevel(1)}
            title="Reset Zoom"
            className="p-1.5 rounded hover:text-stone-900 hover:bg-stone-200 transition-colors cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* Main Canvas Viewport Area */}
      <div
        ref={containerRef}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onClick={() => {
          onSelectZone(null);
          onSelectPlant(null);
        }}
        className={`relative w-full overflow-hidden select-none p-6 flex items-center justify-center min-h-[500px] transition-colors ${
          viewMode === 'blueprint'
            ? 'bg-[#0f2438]'
            : viewMode === 'shadow'
            ? 'bg-amber-50/40'
            : 'bg-stone-100'
        }`}
        style={{
          cursor: isDragging ? 'grabbing' : 'default'
        }}
      >
        {/* Compass Rose (North Arrow) */}
        <div className="absolute top-5 right-5 z-20 flex flex-col items-center pointer-events-none opacity-90">
          <div className="w-8 h-8 rounded-full border border-stone-300 bg-white shadow-xs flex items-center justify-center text-stone-700">
            <Compass className="w-5 h-5 text-emerald-700" />
          </div>
          <span className="text-[10px] font-mono font-bold text-emerald-800 mt-0.5">NORTH</span>
        </div>

        {/* Scale Dimension Tag */}
        <div className="absolute bottom-5 left-5 z-20 pointer-events-none text-[11px] font-mono text-stone-600 bg-white/95 px-2.5 py-1 rounded border border-stone-200 shadow-2xs tabular-nums">
          Grid: 1 unit ≈ {(gardenLength / 10).toFixed(1)} {unit} · Overall: {gardenWidth}×{gardenLength} {unit}
        </div>

        {/* Dynamic SVG Garden Stage */}
        <div
          style={{
            transform: `scale(${zoomLevel})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
            width: '100%',
            maxWidth: aspectRatio >= 1 ? '780px' : '600px',
            aspectRatio: `${gardenWidth} / ${gardenLength}`
          }}
          className="relative rounded-lg shadow-md border border-stone-300 overflow-hidden"
        >
          <svg
            viewBox="0 0 100 100"
            className="w-full h-full"
            preserveAspectRatio="none"
          >
            <defs>
              {/* Natural Lawn Pattern */}
              <pattern id="lawnPattern" width="4" height="4" patternUnits="userSpaceOnUse">
                <rect width="4" height="4" fill="#366b3d" />
                <circle cx="2" cy="2" r="0.9" fill="#447d4c" opacity="0.7" />
                <path d="M0,0 L4,4 M0,4 L4,0" stroke="#2a5730" strokeWidth="0.2" />
              </pattern>

              {/* Gravel Pathway Pattern */}
              <pattern id="gravelPattern" width="3" height="3" patternUnits="userSpaceOnUse">
                <rect width="3" height="3" fill="#d6d3d1" />
                <circle cx="1" cy="1" r="0.5" fill="#a8a29e" opacity="0.6" />
                <circle cx="2.5" cy="2.2" r="0.4" fill="#78716c" opacity="0.4" />
              </pattern>

              {/* Blueprint Grid Pattern */}
              <pattern id="blueprintGrid" width="5" height="5" patternUnits="userSpaceOnUse">
                <path d="M 5 0 L 0 0 0 5" fill="none" stroke="#204b73" strokeWidth="0.25" />
              </pattern>

              {/* Blueprint Hatch for Beds */}
              <pattern id="blueprintHatch" width="4" height="4" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="4" stroke="#38bdf8" strokeWidth="0.4" opacity="0.6" />
              </pattern>

              {/* Water Wave Pattern */}
              <pattern id="waterPattern" width="6" height="6" patternUnits="userSpaceOnUse">
                <rect width="6" height="6" fill="#0284c7" />
                <path d="M 0 3 Q 1.5 1.5 3 3 T 6 3" fill="none" stroke="#7dd3fc" strokeWidth="0.4" opacity="0.8" />
              </pattern>

              {/* Timber Wood Plank Pattern */}
              <pattern id="woodPattern" width="8" height="2" patternUnits="userSpaceOnUse">
                <rect width="8" height="2" fill="#92400e" />
                <line x1="0" y1="2" x2="8" y2="2" stroke="#451a03" strokeWidth="0.3" />
                <line x1="4" y1="0" x2="4" y2="2" stroke="#451a03" strokeWidth="0.2" />
              </pattern>

              {/* Drop Shadow Filter */}
              <filter id="softShadow" x="-20%" y="-20%" width="150%" height="150%">
                <feDropShadow dx="0.4" dy="0.8" stdDeviation="0.6" floodColor="#000000" floodOpacity="0.25" />
              </filter>
            </defs>

            {/* Base Ground Layer */}
            {viewMode === 'blueprint' ? (
              <rect width="100" height="100" fill="#0c1f33" />
            ) : (
              <rect width="100" height="100" fill="url(#lawnPattern)" />
            )}

            {/* Scale Grid overlay */}
            {showGrid && (
              <rect width="100" height="100" fill="url(#blueprintGrid)" opacity={viewMode === 'blueprint' ? 0.9 : 0.3} />
            )}

            {/* Simulated Sun Shadows */}
            {viewMode === 'shadow' && (
              <g className="transition-all duration-300">
                {design.zones.map(zone => {
                  if (zone.type === 'pathway') return null;
                  const isTall = zone.type === 'structure' || zone.type === 'accent_tree';
                  const heightMultiplier = isTall ? 1.6 : 0.7;

                  return (
                    <rect
                      key={`shadow-${zone.id}`}
                      x={zone.x + shadowDx * heightMultiplier}
                      y={zone.y + shadowDy * heightMultiplier}
                      width={zone.width}
                      height={zone.height}
                      rx={zone.shape === 'circle' ? zone.width / 2 : 2}
                      ry={zone.shape === 'circle' ? zone.height / 2 : 2}
                      fill="#1c1917"
                      opacity="0.45"
                      filter="blur(1px)"
                    />
                  );
                })}
              </g>
            )}

            {/* Garden Spatial Zones */}
            {design.zones.map(zone => {
              const isSelected = selectedZone?.id === zone.id;

              let fillColor = zone.color;
              let strokeColor = zone.borderColor || '#166534';
              let strokeDash: string | undefined = undefined;

              if (viewMode === 'blueprint') {
                strokeColor = isSelected ? '#38bdf8' : '#7dd3fc';
                fillColor = zone.type === 'planter_bed'
                  ? 'url(#blueprintHatch)'
                  : zone.type === 'water_feature'
                  ? 'rgba(56, 189, 248, 0.25)'
                  : zone.type === 'pathway'
                  ? 'rgba(148, 163, 184, 0.2)'
                  : 'rgba(30, 58, 95, 0.5)';
                strokeDash = zone.type === 'pathway' ? '1,1' : undefined;
              } else {
                if (zone.type === 'pathway') fillColor = 'url(#gravelPattern)';
                if (zone.type === 'water_feature') fillColor = 'url(#waterPattern)';
                if (zone.type === 'planter_bed') fillColor = 'url(#woodPattern)';
              }

              return (
                <g
                  key={zone.id}
                  onMouseDown={e => handleMouseDown(e, zone)}
                  className="cursor-move transition-transform duration-100"
                >
                  {/* Zone Geometry */}
                  {zone.shape === 'circle' ? (
                    <ellipse
                      cx={zone.x + zone.width / 2}
                      cy={zone.y + zone.height / 2}
                      rx={zone.width / 2}
                      ry={zone.height / 2}
                      fill={fillColor}
                      stroke={isSelected ? '#0284c7' : strokeColor}
                      strokeWidth={isSelected ? '0.9' : '0.4'}
                      strokeDasharray={strokeDash}
                      filter="url(#softShadow)"
                    />
                  ) : (
                    <rect
                      x={zone.x}
                      y={zone.y}
                      width={zone.width}
                      height={zone.height}
                      rx={zone.shape === 'rounded' ? 3 : 1}
                      ry={zone.shape === 'rounded' ? 3 : 1}
                      fill={fillColor}
                      stroke={isSelected ? '#0284c7' : strokeColor}
                      strokeWidth={isSelected ? '0.9' : '0.4'}
                      strokeDasharray={strokeDash}
                      filter="url(#softShadow)"
                    />
                  )}

                  {/* Zone Label */}
                  <text
                    x={zone.x + zone.width / 2}
                    y={zone.y + (zone.height > 15 ? 4 : zone.height / 2 + 1)}
                    textAnchor="middle"
                    fill="#ffffff"
                    fontSize="2.4"
                    fontFamily="sans-serif"
                    fontWeight="600"
                    className="pointer-events-none select-none drop-shadow-sm"
                  >
                    {zone.name}
                  </text>

                  {/* Material Annotation */}
                  {zone.height >= 12 && (
                    <text
                      x={zone.x + zone.width / 2}
                      y={zone.y + 7.5}
                      textAnchor="middle"
                      fill="#f1f5f9"
                      fontSize="1.6"
                      fontFamily="monospace"
                      opacity="0.95"
                      className="pointer-events-none select-none"
                    >
                      {zone.surfaceMaterial}
                    </text>
                  )}

                  {/* Botanical Plant Markers */}
                  {zone.plantIds.map((plantId, pIdx) => {
                    const plant = design.plants.find(p => p.id === plantId);
                    if (!plant) return null;

                    const cols = Math.max(1, Math.floor(zone.width / 8));
                    const col = pIdx % cols;
                    const row = Math.floor(pIdx / cols);

                    const plantX = zone.x + 4 + col * 7;
                    const plantY = zone.y + (zone.height > 15 ? 11 : 4) + row * 6;

                    if (plantX > zone.x + zone.width - 4 || plantY > zone.y + zone.height - 3) {
                      return null;
                    }

                    const isPlantSelected = selectedPlant?.id === plant.id;

                    return (
                      <g
                        key={`plant-node-${plant.id}-${pIdx}`}
                        onClick={e => {
                          e.stopPropagation();
                          onSelectPlant(plant);
                          onSelectZone(zone);
                        }}
                        className="cursor-pointer group"
                      >
                        <circle
                          cx={plantX}
                          cy={plantY}
                          r={isPlantSelected ? '2.4' : '1.8'}
                          fill={isPlantSelected ? '#0284c7' : (plant.flowerColor ? '#db2777' : '#16a34a')}
                          stroke="#ffffff"
                          strokeWidth="0.4"
                          opacity={0.95}
                        />
                        <text
                          x={plantX}
                          y={plantY + 0.8}
                          textAnchor="middle"
                          fontSize="2"
                          className="pointer-events-none select-none"
                        >
                          {plant.iconGlyph || '🌱'}
                        </text>
                      </g>
                    );
                  })}
                </g>
              );
            })}

            {/* Perimeter Boundary Rulers */}
            <line x1="0" y1="99" x2="100" y2="99" stroke="#64748b" strokeWidth="0.3" strokeDasharray="1,1" />
            <text x="50" y="98" textAnchor="middle" fill="#64748b" fontSize="2" fontFamily="monospace">
              {gardenLength} {unit}
            </text>

            <line x1="1" y1="0" x2="1" y2="100" stroke="#64748b" strokeWidth="0.3" strokeDasharray="1,1" />
            <text x="3.5" y="50" textAnchor="middle" fill="#64748b" fontSize="2" fontFamily="monospace" transform="rotate(-90 3.5 50)">
              {gardenWidth} {unit}
            </text>
          </svg>
        </div>
      </div>

      {/* Canvas Footnote Instructions */}
      <div className="px-4 py-2.5 bg-stone-50 border-t border-stone-200 text-xs text-stone-600 flex flex-wrap items-center justify-between gap-4 font-mono">
        <div className="flex items-center gap-2">
          <Info className="w-3.5 h-3.5 text-emerald-700" />
          <span>Click any zone or plant marker to inspect botanical specs · Click &amp; drag zones to reposition</span>
        </div>
        <div className="text-stone-700">
          Scale: <span className="text-emerald-700 font-semibold">{gardenWidth} × {gardenLength} {unit}</span>
        </div>
      </div>
    </div>
  );
};
