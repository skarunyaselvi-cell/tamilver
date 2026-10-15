export type LanguageCode = 'ta' | 'en' | 'hi' | 'te' | 'kn' | 'ml' | 'bn' | 'or';

export interface UserAuth {
  email: string;
  username: string;
  isAuthenticated: boolean;
}

export type LiteratureCategory =
  | 'ettuthogai'
  | 'pathuppattu'
  | 'pathinenkeelkanakku'
  | 'aimperum_kappiyam'
  | 'ainchiru_kappiyam'
  | 'bakthi_ilakkiyam'
  | 'other_classics';

export interface LiteratureWork {
  id: string;
  nameTamil: string;
  nameEnglish: string;
  author: string;
  period: string;
  category: LiteratureCategory;
  specialFeature: string;
  poemSample: {
    verse: string;
    explanation: string;
    englishSummary: string;
  };
  keywords: string[];
}

export interface ScriptEraGlyph {
  eraNameTamil: string;
  eraNameEnglish: string;
  century: string;
  glyphRepresentation: string;
  historicalContext: string;
  inscriptionLocation: string;
}

export interface WordEvolutionRecord {
  id: string;
  conceptTamil: string;
  conceptEnglish: string;
  ancientTamilWord: string;
  modernTamilWord: string;
  rootEtymology: string;
  spellingEvolution: ScriptEraGlyph[];
  meaningShift: {
    ancientMeaning: string;
    modernMeaning: string;
    evolutionAnalysis: string;
  };
  usageEvolution: {
    ancientContext: string;
    modernContext: string;
  };
  literaryEvidence: Array<{
    workName: string;
    verseExcerpt: string;
    verseMeaning: string;
    era: string;
  }>;
}

export interface ManuscriptDecodeResult {
  sourceText: string;
  decodedTamil: string;
  modernParaphrase: string;
  sandhiSplit: string;
  rootEtymology: Array<{
    word: string;
    root: string;
    meaning: string;
    grammarNote: string;
  }>;
  historicalEra: string;
  literaryContext: string;
  regionalTranslation: string;
}

export interface ModuleConfigItem {
  id: string;
  slug: 'literature' | 'script' | 'ai_nanban' | 'word_evolution' | 'saved_research';
  titleTamil: string;
  titleEnglish: string;
  descriptionTamil: string;
  descriptionEnglish: string;
  categoryLabelTamil: string;
  iconIdentifier: 'book_palm_leaf' | 'inscription_stele' | 'scanner_sparkles' | 'timeline_glyph' | 'archive_ribbon';
  route: string;
  badge: string;
}

export interface SavedResearchItem {
  id: string;
  user_id: string;
  title: string;
  research_type: string;
  research_data: string;
  created_at: string;
}
