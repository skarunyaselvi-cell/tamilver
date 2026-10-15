import React, { useState } from 'react';
import { GardenDesign } from '../types/garden';
import { X, Calendar, CheckSquare, Square, Flower, Sun, CloudRain, Snowflake } from 'lucide-react';

interface SeasonalCareModalProps {
  isOpen: boolean;
  onClose: () => void;
  design: GardenDesign;
}

export const SeasonalCareModal: React.FC<SeasonalCareModalProps> = ({
  isOpen,
  onClose,
  design
}) => {
  const [activeSeason, setActiveSeason] = useState<'spring' | 'summer' | 'autumn' | 'winter'>('spring');
  const [completedTasks, setCompletedTasks] = useState<Record<string, boolean>>({});

  if (!isOpen) return null;

  const seasons: Array<{
    id: 'spring' | 'summer' | 'autumn' | 'winter';
    title: string;
    icon: React.ReactNode;
    color: string;
    desc: string;
  }> = [
    {
      id: 'spring',
      title: 'Spring Awakening',
      icon: <Flower className="w-4 h-4 text-emerald-400" />,
      color: 'border-emerald-500 text-emerald-400',
      desc: 'Soil preparation, cold-frame starts, early division, and perennial feeding'
    },
    {
      id: 'summer',
      title: 'Summer Abundance',
      icon: <Sun className="w-4 h-4 text-amber-400" />,
      color: 'border-amber-500 text-amber-400',
      desc: 'Drip hydration monitoring, deadheading, pest patrol, and succession harvesting'
    },
    {
      id: 'autumn',
      title: 'Autumn Harvest & Roots',
      icon: <CloudRain className="w-4 h-4 text-orange-400" />,
      color: 'border-orange-500 text-orange-400',
      desc: 'Bulb planting, seed collection, green manure covers, and root mulch replenishment'
    },
    {
      id: 'winter',
      title: 'Winter Dormancy',
      icon: <Snowflake className="w-4 h-4 text-sky-400" />,
      color: 'border-sky-500 text-sky-400',
      desc: 'Tool conditioning, winter bird seed stations, structure repair, and dormant pruning'
    }
  ];

  const currentTasks = design.seasonalTasks[activeSeason] || [];

  const toggleTask = (task: string) => {
    setCompletedTasks(prev => ({
      ...prev,
      [`${activeSeason}-${task}`]: !prev[`${activeSeason}-${task}`]
    }));
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm overflow-y-auto">
      <div className="relative w-full max-w-3xl bg-stone-900 border border-stone-800 rounded-xl shadow-2xl overflow-hidden my-8 flex flex-col max-h-[85vh]">
        {/* Modal Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between bg-stone-950 shrink-0">
          <div>
            <div className="text-xs uppercase font-mono tracking-wider text-emerald-400">
              Horticultural Calendar
            </div>
            <h2 className="font-serif text-xl font-semibold text-white">
              Seasonal Care &amp; Maintenance Schedule
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-white rounded-md hover:bg-stone-800 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Seasonal Navigation Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-4 bg-stone-950/80 border-b border-stone-800 shrink-0">
          {seasons.map(s => {
            const isActive = activeSeason === s.id;
            return (
              <button
                key={s.id}
                onClick={() => setActiveSeason(s.id)}
                className={`p-2.5 rounded-lg border text-left transition-all ${
                  isActive
                    ? 'bg-stone-800 border-emerald-400 text-white shadow-sm'
                    : 'bg-stone-900 border-stone-800 text-stone-400 hover:text-stone-200'
                }`}
              >
                <div className="flex items-center gap-2 mb-1">
                  {s.icon}
                  <span className="font-serif text-xs font-semibold">{s.title.split(' ')[0]}</span>
                </div>
                <div className="text-[10px] text-stone-500 truncate">{s.title}</div>
              </button>
            );
          })}
        </div>

        {/* Task List */}
        <div className="p-6 overflow-y-auto space-y-4">
          <div className="text-xs text-stone-400">
            {seasons.find(s => s.id === activeSeason)?.desc}
          </div>

          <div className="space-y-2">
            {currentTasks.map((task, idx) => {
              const isChecked = !!completedTasks[`${activeSeason}-${task}`];

              return (
                <div
                  key={idx}
                  onClick={() => toggleTask(task)}
                  className={`p-3.5 rounded-lg border cursor-pointer transition-all flex items-start gap-3 select-none ${
                    isChecked
                      ? 'bg-stone-950/50 border-stone-800 text-stone-500'
                      : 'bg-stone-950 border-stone-800/80 text-stone-200 hover:border-stone-700'
                  }`}
                >
                  <button
                    type="button"
                    className="mt-0.5 text-stone-400 hover:text-emerald-400 transition-colors"
                  >
                    {isChecked ? (
                      <CheckSquare className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <Square className="w-4 h-4" />
                    )}
                  </button>
                  <span className={`text-xs font-sans leading-relaxed ${isChecked ? 'line-through' : ''}`}>
                    {task}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};
