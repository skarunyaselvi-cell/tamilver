import React from 'react';
import { ModuleDefinition } from '../config/modulesConfig';
import {
  BookPalmLeafIcon,
  InscriptionSteleIcon,
  ScannerSparklesIcon,
  TimelineGlyphIcon,
  ArchiveRibbonIcon
} from './ModuleIcons';
import { ArrowRight } from 'lucide-react';

interface ModuleCardProps {
  module: ModuleDefinition;
  isActive: boolean;
  onSelect: (slug: ModuleDefinition['slug']) => void;
  translatedTitle?: string;
  translatedDescription?: string;
}

export const ModuleCard: React.FC<ModuleCardProps> = ({
  module,
  isActive,
  onSelect,
  translatedTitle,
  translatedDescription,
}) => {
  const renderIcon = () => {
    switch (module.iconIdentifier) {
      case 'book_palm_leaf':
        return <BookPalmLeafIcon className="w-6 h-6" />;
      case 'inscription_stele':
        return <InscriptionSteleIcon className="w-6 h-6" />;
      case 'scanner_sparkles':
        return <ScannerSparklesIcon className="w-6 h-6" />;
      case 'timeline_glyph':
        return <TimelineGlyphIcon className="w-6 h-6" />;
      case 'archive_ribbon':
        return <ArchiveRibbonIcon className="w-6 h-6" />;
      default:
        return <BookPalmLeafIcon className="w-6 h-6" />;
    }
  };

  const title = translatedTitle || module.titleTamil;
  const description = translatedDescription || module.descriptionTamil;

  return (
    <button
      onClick={() => onSelect(module.slug)}
      className={`group relative text-left p-5 rounded-2xl border transition-all duration-200 cursor-pointer flex flex-col justify-between overflow-hidden focus:outline-none focus:ring-2 focus:ring-[#D6A84F] ${
        isActive
          ? 'bg-[#123D30] text-[#FFF9EE] border-[#D6A84F] shadow-lg ring-1 ring-[#D6A84F]/40'
          : 'bg-white text-[#202A25] border-[#D6A84F]/30 hover:border-[#087A59] hover:bg-[#FFF9EE]/70 hover:shadow-md'
      }`}
    >
      {/* Top Bar with Icon & Badge */}
      <div className="flex items-center justify-between w-full mb-3.5">
        <div
          className={`w-12 h-12 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-105 ${
            isActive
              ? 'bg-[#087A59] border-[#D6A84F] text-[#FFF9EE] shadow-xs'
              : 'bg-[#FFF9EE] border-[#D6A84F]/40 text-[#087A59] shadow-2xs'
          }`}
        >
          {renderIcon()}
        </div>

        <div className="flex flex-col items-end gap-1">
          <span
            className={`text-[10px] font-mono px-2 py-0.5 rounded-full font-bold uppercase tracking-wide border ${
              isActive
                ? 'bg-[#087A59]/60 text-[#D6A84F] border-[#D6A84F]/40'
                : 'bg-stone-100 text-[#087A59] border-stone-200'
            }`}
          >
            {module.badge}
          </span>
          <span className={`text-[10px] font-sans ${isActive ? 'text-[#A7B9A0]' : 'text-stone-400'}`}>
            {module.categoryLabelTamil}
          </span>
        </div>
      </div>

      {/* Main Content */}
      <div className="space-y-1.5 flex-1">
        <h3 className="font-tamil-serif font-bold text-base sm:text-lg leading-snug tracking-tight">
          {title}
        </h3>
        <p
          className={`text-xs leading-relaxed line-clamp-2 ${
            isActive ? 'text-[#E8D8B7]' : 'text-stone-600'
          }`}
        >
          {description}
        </p>
      </div>

      {/* Action Footer */}
      <div className="mt-4 pt-3 border-t border-stone-100/10 flex items-center justify-between text-xs font-semibold">
        <span className={isActive ? 'text-[#D6A84F]' : 'text-[#087A59] group-hover:underline'}>
          ஆய்வுப் பகுதிக்குச் செல்க
        </span>
        <div
          className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform group-hover:translate-x-1 ${
            isActive ? 'bg-[#D6A84F] text-[#123D30]' : 'bg-stone-100 text-stone-700'
          }`}
        >
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </div>
      </div>
    </button>
  );
};
