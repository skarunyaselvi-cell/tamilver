import React from 'react';

export interface ModuleDefinition {
  id: string;
  slug: 'literature' | 'script' | 'ai_nanban' | 'word_evolution' | 'saved_research';
  titleTamil: string;
  descriptionTamil: string;
  categoryLabelTamil: string;
  iconIdentifier: string;
  route: string;
  badge: string;
  themeVariant: 'emerald' | 'amber' | 'gold' | 'sage' | 'bronze';
}

export const MODULES_CONFIG: ModuleDefinition[] = [
  {
    id: 'mod-literature',
    slug: 'literature',
    titleTamil: 'பழந்தமிழ் இலக்கியக் கருவூலம்',
    descriptionTamil: 'எட்டுத்தொகை, பத்துப்பாட்டு, பதினெண்கீழ்க்கணக்கு மற்றும் ஐம்பெரும் காப்பியங்களின் ஆவணப்படுத்தப்பட்ட பாக்களும் ஆய்வுரைகளும்.',
    categoryLabelTamil: 'செவ்வியல் இலக்கியம்',
    iconIdentifier: 'book_palm_leaf',
    route: '/literature',
    badge: '50+ நூல்கள்',
    themeVariant: 'emerald'
  },
  {
    id: 'mod-script',
    slug: 'script',
    titleTamil: 'எழுத்து வடிவப் பரிணாமம்',
    descriptionTamil: 'தமிழ்ப் பிராமி (கி.மு 300) மற்றும் வட்டெழுத்து முதல் சோழர் காலக் கல்வெட்டுகள் வழி நவீன அச்சு வடிவம் வரையிலான வரிவடிவ மாற்றங்கள்.',
    categoryLabelTamil: 'கல்வெட்டியல் & வரிவடிவம்',
    iconIdentifier: 'inscription_stele',
    route: '/script',
    badge: '2300 ஆண்டு வரலாறு',
    themeVariant: 'gold'
  },
  {
    id: 'mod-ai-nanban',
    slug: 'ai_nanban',
    titleTamil: 'AI நண்பன் — சுவடி வாசிப்பான்',
    descriptionTamil: 'பழந்தமிழ் ஓலைச்சுவடி, செப்பேடுகள் மற்றும் நடுகல் கல்வெட்டுகளைக் கணினி வழியே நவீனத் தமிழாகவும் புணர்ச்சிப் பிரிப்பாகவும் மாற்றும் கருவி.',
    categoryLabelTamil: 'செயற்கை நுண்ணறிவு OCR',
    iconIdentifier: 'scanner_sparkles',
    route: '/ai_nanban',
    badge: 'Gemini AI Vision',
    themeVariant: 'amber'
  },
  {
    id: 'mod-word-evolution',
    slug: 'word_evolution',
    titleTamil: 'சொல் பரிணாம ஒப்பீடு (P3)',
    descriptionTamil: 'பழந்தமிழ் மற்றும் நவீன தமிழ் சொற்களின் எழுத்து வடிவம், பொருள் மற்றும் பயன்பாட்டு மாற்றங்களை இலக்கியச் சான்றுகளுடன் ஒப்பிடும் முதன்மைப் பொறி.',
    categoryLabelTamil: 'ஒப்பியல் மொழியியல்',
    iconIdentifier: 'timeline_glyph',
    route: '/word_evolution',
    badge: 'முக்கிய தீர்வு (P3)',
    themeVariant: 'sage'
  },
  {
    id: 'mod-saved-research',
    slug: 'saved_research',
    titleTamil: 'சேமித்த ஆய்வுக் குறிப்புகள்',
    descriptionTamil: 'நீங்கள் மேற்கொண்ட ஒப்பாய்வுகள், சுவடி வாசிப்புகள் மற்றும் சொல்லாராய்ச்சிக் குறிப்புகளின் தொகுப்பு (Export & Download Report).',
    categoryLabelTamil: 'ஆய்வுக் களஞ்சியம்',
    iconIdentifier: 'archive_ribbon',
    route: '/research',
    badge: 'தரவுத்தளம் (Database)',
    themeVariant: 'bronze'
  }
];
