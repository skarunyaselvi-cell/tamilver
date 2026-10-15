import React from 'react';

interface IconProps {
  className?: string;
}

// Module 1: Open book with palm-leaf manuscript details
export const BookPalmLeafIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Open book spine and base */}
    <path d="M2 4.5C3.5 3.5 6 3 8.5 3c3 0 5 1.5 6.5 2.5C16.5 4.5 18.5 3 21.5 3c1 0 1.5.2 2 .5v14c-.5-.3-1-.5-2-.5-3 0-5 1.5-6.5 2.5-1.5-1-3.5-2.5-6.5-2.5-2.5 0-5 .5-6.5 1.5v-14z" />
    <path d="M15 5.5v14" />
    {/* Palm leaf inscribed lines motif */}
    <path d="M5 8h6M5 11h5M5 14h6" strokeOpacity="0.7" />
    <path d="M17 8h4M17 11h3M17 14h4" strokeOpacity="0.7" />
  </svg>
);

// Module 2: Ancient inscription stele and evolving Tamil letter
export const InscriptionSteleIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Stone Inscription Stele Pillar */}
    <path d="M6 3h12a1 1 0 0 1 1 1v17H5V4a1 1 0 0 1 1-1z" />
    <path d="M3 21h18" strokeWidth="2" />
    {/* Tamil-Brahmi arch / evolving character glyph inside stele */}
    <path d="M9 8h6M12 8v8M9 13h6" strokeWidth="1.5" />
    {/* Stele carved notches */}
    <path d="M7 6h1M16 6h1M7 18h10" strokeOpacity="0.6" />
  </svg>
);

// Module 3: Manuscript scanner with AI sparkles
export const ScannerSparklesIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Scanner viewfinder frame */}
    <path d="M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2" />
    {/* Laser scan beam */}
    <line x1="3" y1="12" x2="21" y2="12" strokeWidth="1.5" strokeDasharray="2 2" />
    {/* AI Sparkle / Palm manuscript glyph */}
    <path d="M12 7l1 2.5L15.5 11 13 12l-1 2.5-1-2.5L8.5 11 11 9.5z" fill="currentColor" fillOpacity="0.2" />
    <circle cx="17.5" cy="7.5" r="1" fill="currentColor" />
  </svg>
);

// Module 4: Tamil letter connected to a historical timeline
export const TimelineGlyphIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    {/* Horizontal Chronological Timeline Axis */}
    <line x1="3" y1="18" x2="21" y2="18" strokeWidth="2" />
    {/* Timeline milestones */}
    <circle cx="5" cy="18" r="2" fill="currentColor" fillOpacity="0.3" />
    <circle cx="12" cy="18" r="2" fill="currentColor" fillOpacity="0.3" />
    <circle cx="19" cy="18" r="2" fill="currentColor" fillOpacity="0.3" />
    {/* Evolution branch line ascending to modern glyph */}
    <path d="M5 16V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v7" />
    {/* Root word node 'வேர்' */}
    <circle cx="12" cy="7" r="3" fill="currentColor" fillOpacity="0.15" />
    <path d="M12 4v3" />
  </svg>
);

// Module 5: Saved Research Archive
export const ArchiveRibbonIcon: React.FC<IconProps> = ({ className = 'w-6 h-6' }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M4 4h16v4H4zM6 8v12h12V8" />
    <path d="M10 12h4" strokeWidth="2" />
    <circle cx="12" cy="16" r="2" fill="currentColor" fillOpacity="0.2" />
  </svg>
);
