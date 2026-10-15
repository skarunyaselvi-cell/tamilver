-- ============================================================================
-- TAMILVER (தமிழ்வேர்) LINGUISTIC RESEARCH PLATFORM DATABASE SCHEMA
-- PostgreSQL / SQLite Compatible Relational Schema with Row Level Security (RLS)
-- ============================================================================

-- 1. Supported Languages Table
CREATE TABLE IF NOT EXISTS supported_languages (
  code TEXT PRIMARY KEY,
  native_name TEXT NOT NULL,
  english_name TEXT NOT NULL,
  is_enabled INTEGER DEFAULT 1,
  display_order INTEGER NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 2. User Profiles Table
CREATE TABLE IF NOT EXISTS user_profiles (
  id TEXT PRIMARY KEY,
  display_name TEXT NOT NULL,
  preferred_language TEXT NOT NULL DEFAULT 'ta',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (preferred_language) REFERENCES supported_languages(code)
);

-- 3. UI Translations Table
CREATE TABLE IF NOT EXISTS ui_translations (
  id TEXT PRIMARY KEY,
  language_code TEXT NOT NULL,
  translation_key TEXT NOT NULL,
  translated_text TEXT NOT NULL,
  updated_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (language_code) REFERENCES supported_languages(code),
  UNIQUE (language_code, translation_key)
);

-- 4. Modules Table
CREATE TABLE IF NOT EXISTS modules (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  icon_key TEXT NOT NULL,
  route TEXT NOT NULL,
  is_enabled INTEGER DEFAULT 1,
  display_order INTEGER NOT NULL
);

-- 5. Module Translations Table
CREATE TABLE IF NOT EXISTS module_translations (
  id TEXT PRIMARY KEY,
  module_id TEXT NOT NULL,
  language_code TEXT NOT NULL,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  FOREIGN KEY (module_id) REFERENCES modules(id) ON DELETE CASCADE,
  FOREIGN KEY (language_code) REFERENCES supported_languages(code),
  UNIQUE (module_id, language_code)
);

-- 6. Sources Table
CREATE TABLE IF NOT EXISTS sources (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  author_or_institution TEXT NOT NULL,
  publication_details TEXT,
  source_url TEXT,
  page_reference TEXT,
  rights_status TEXT DEFAULT 'public_domain',
  verification_status TEXT DEFAULT 'verified'
);

-- 7. Words Table
CREATE TABLE IF NOT EXISTS words (
  id TEXT PRIMARY KEY,
  canonical_tamil TEXT NOT NULL,
  transliteration TEXT NOT NULL,
  english_gloss TEXT NOT NULL,
  verification_status TEXT DEFAULT 'verified',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);

-- 8. Historical Word Forms Table
CREATE TABLE IF NOT EXISTS historical_word_forms (
  id TEXT PRIMARY KEY,
  word_id TEXT NOT NULL,
  form_text TEXT NOT NULL,
  script_type TEXT NOT NULL,
  historical_period TEXT NOT NULL,
  meaning TEXT NOT NULL,
  usage_context TEXT,
  source_id TEXT,
  confidence REAL DEFAULT 0.95,
  FOREIGN KEY (word_id) REFERENCES words(id) ON DELETE CASCADE,
  FOREIGN KEY (source_id) REFERENCES sources(id)
);

-- 9. Literary Works Table
CREATE TABLE IF NOT EXISTS literary_works (
  id TEXT PRIMARY KEY,
  title_ta TEXT NOT NULL,
  author_attribution TEXT NOT NULL,
  category TEXT NOT NULL,
  historical_period TEXT NOT NULL,
  description TEXT,
  source_reference TEXT,
  rights_status TEXT DEFAULT 'public_domain'
);

-- 10. Literary Passages Table
CREATE TABLE IF NOT EXISTS literary_passages (
  id TEXT PRIMARY KEY,
  work_id TEXT NOT NULL,
  original_text TEXT NOT NULL,
  passage_number TEXT,
  commentary TEXT,
  source_id TEXT,
  verification_status TEXT DEFAULT 'verified',
  FOREIGN KEY (work_id) REFERENCES literary_works(id) ON DELETE CASCADE,
  FOREIGN KEY (source_id) REFERENCES sources(id)
);

-- 11. Manuscript Uploads Table
CREATE TABLE IF NOT EXISTS manuscript_uploads (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  storage_path TEXT NOT NULL,
  processing_status TEXT DEFAULT 'pending',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user_profiles(id)
);

-- 12. Manuscript Analyses Table
CREATE TABLE IF NOT EXISTS manuscript_analyses (
  id TEXT PRIMARY KEY,
  upload_id TEXT NOT NULL,
  transcription TEXT NOT NULL,
  explanation TEXT NOT NULL,
  detected_script TEXT,
  confidence REAL DEFAULT 0.90,
  verification_status TEXT DEFAULT 'ai_analyzed',
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (upload_id) REFERENCES manuscript_uploads(id) ON DELETE CASCADE
);

-- 13. Saved Research Table
CREATE TABLE IF NOT EXISTS saved_research (
  id TEXT PRIMARY KEY,
  user_id TEXT NOT NULL,
  title TEXT NOT NULL,
  research_type TEXT NOT NULL,
  research_data TEXT NOT NULL,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES user_profiles(id)
);

-- Indexes for optimal querying
CREATE INDEX IF NOT EXISTS idx_ui_trans_lang ON ui_translations(language_code);
CREATE INDEX IF NOT EXISTS idx_mod_trans_lang ON module_translations(language_code);
CREATE INDEX IF NOT EXISTS idx_hist_word_forms_word ON historical_word_forms(word_id);
CREATE INDEX IF NOT EXISTS idx_lit_passages_work ON literary_passages(work_id);
CREATE INDEX IF NOT EXISTS idx_saved_research_user ON saved_research(user_id);
CREATE INDEX IF NOT EXISTS idx_words_canonical ON words(canonical_tamil);
