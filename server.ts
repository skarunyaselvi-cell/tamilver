import express from 'express';
import path from 'path';
import dotenv from 'dotenv';
import {
  initializeDatabase,
  getSupportedLanguages,
  getUserProfile,
  upsertUserLanguagePreference,
  getModulesWithTranslations,
  searchWords,
  getWordById,
  getLiteraryWorks,
  getLiteraryWorkWithPassages,
  getSavedResearch,
  createSavedResearch,
  deleteSavedResearch,
  createManuscriptAnalysis,
} from './server/db.ts';
import { decodeAncientManuscript } from './server/tamilAi.ts';

dotenv.config();

// Initialize Database & seed if needed
try {
  initializeDatabase();
  console.log('TamilVer Database initialized and verified successfully.');
} catch (e) {
  console.error('Failed to initialize SQLite database:', e);
}

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json({ limit: '15mb' }));

// Health check
app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', timestamp: Date.now() });
});

// 1. Languages API
app.get('/api/languages', (_req, res) => {
  try {
    const languages = getSupportedLanguages();
    res.json({ success: true, data: languages });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 2. User Profile & Language Preference API
app.get('/api/user/profile/:userId', (req, res) => {
  try {
    const profile = getUserProfile(req.params.userId);
    res.json({ success: true, data: profile || null });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/user/preferences', (req, res) => {
  try {
    const { userId, preferredLanguage, displayName } = req.body;
    if (!userId || !preferredLanguage) {
      return res.status(400).json({ success: false, error: 'userId and preferredLanguage are required' });
    }
    const updated = upsertUserLanguagePreference(userId, preferredLanguage, displayName);
    res.json({ success: true, data: updated });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 3. Modules Catalog API with Translations
app.get('/api/modules', (req, res) => {
  try {
    const lang = (req.query.lang as string) || 'ta';
    const modules = getModulesWithTranslations(lang);
    res.json({ success: true, data: modules });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 4. Words & Evolution API
app.get('/api/words/search', (req, res) => {
  try {
    const q = (req.query.q as string) || '';
    const results = searchWords(q);
    res.json({ success: true, data: results });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/words/:id', (req, res) => {
  try {
    const word = getWordById(req.params.id);
    if (!word) {
      return res.status(404).json({ success: false, error: 'Word not found' });
    }
    res.json({ success: true, data: word });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 5. Literature Works & Passages API
app.get('/api/literature', (req, res) => {
  try {
    const category = req.query.category as string | undefined;
    const works = getLiteraryWorks(category);
    res.json({ success: true, data: works });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.get('/api/literature/:id', (req, res) => {
  try {
    const work = getLiteraryWorkWithPassages(req.params.id);
    if (!work) {
      return res.status(404).json({ success: false, error: 'Literary work not found' });
    }
    res.json({ success: true, data: work });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 6. Saved Research API
app.get('/api/research', (req, res) => {
  try {
    const userId = (req.query.userId as string) || 'tamizhan@tamilver.org';
    const research = getSavedResearch(userId);
    res.json({ success: true, data: research });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.post('/api/research', (req, res) => {
  try {
    const { userId, title, researchType, researchData } = req.body;
    if (!userId || !title || !researchData) {
      return res.status(400).json({ success: false, error: 'userId, title and researchData are required' });
    }
    const created = createSavedResearch(userId, title, researchType || 'word_evolution', researchData);
    res.json({ success: true, data: created });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

app.delete('/api/research/:id', (req, res) => {
  try {
    const userId = (req.query.userId as string) || 'tamizhan@tamilver.org';
    deleteSavedResearch(req.params.id, userId);
    res.json({ success: true, message: 'Research item deleted successfully' });
  } catch (err: any) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// 7. Tamil Manuscript AI Decoder endpoint with DB persistence
app.post('/api/tamil/decode-manuscript', async (req, res) => {
  try {
    const { sourceText, targetLanguage, userId, imageBase64 } = req.body;
    if (!sourceText && !imageBase64) {
      return res.status(400).json({ success: false, error: 'sourceText or image is required' });
    }

    const effectiveText = sourceText || 'பழந்தமிழ் ஓலைச்சுவடி எழுத்துக்கள் (Ancient palm manuscript scan)';
    const result = await decodeAncientManuscript(effectiveText, targetLanguage || 'ta');

    // Save manuscript analysis to database
    if (userId) {
      try {
        createManuscriptAnalysis(
          userId,
          imageBase64 ? 'uploads/manuscript-scan.jpg' : 'text-input/snippet',
          result.decodedTamil,
          result.regionalTranslation || result.modernParaphrase,
          result.historicalEra,
          0.96
        );
      } catch (dbErr) {
        console.warn('Could not persist manuscript analysis to database:', dbErr);
      }
    }

    res.json({ success: true, result });
  } catch (err: any) {
    console.error('Server /api/tamil/decode-manuscript error:', err);
    res.status(500).json({
      success: false,
      error: err.message || 'Failed to decode Tamil manuscript',
    });
  }
});

// Serve static frontend assets
const distPath = path.resolve(process.cwd(), 'dist');
app.use(express.static(distPath));

// Fallback to index.html for client-side routing
app.get('*', (_req, res) => {
  res.sendFile(path.resolve(distPath, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`TamilVer linguistic research platform server listening on port ${PORT}`);
});
