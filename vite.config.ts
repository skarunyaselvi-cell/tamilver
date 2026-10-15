import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig, Plugin } from 'vite';
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

try {
  initializeDatabase();
} catch (e) {
  console.warn('Vite dev DB init notice:', e);
}

function tamilApiPlugin(): Plugin {
  return {
    name: 'tamil-api-middleware',
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (!req.url?.startsWith('/api/')) {
          return next();
        }

        const urlObj = new URL(req.url, `http://${req.headers.host || 'localhost'}`);
        const pathname = urlObj.pathname;

        const sendJson = (data: any, status = 200) => {
          res.statusCode = status;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(data));
        };

        // 1. Languages
        if (pathname === '/api/languages' && req.method === 'GET') {
          return sendJson({ success: true, data: getSupportedLanguages() });
        }

        // 2. Modules
        if (pathname === '/api/modules' && req.method === 'GET') {
          const lang = urlObj.searchParams.get('lang') || 'ta';
          return sendJson({ success: true, data: getModulesWithTranslations(lang) });
        }

        // 3. Words Search
        if (pathname === '/api/words/search' && req.method === 'GET') {
          const q = urlObj.searchParams.get('q') || '';
          return sendJson({ success: true, data: searchWords(q) });
        }

        // Words detail: /api/words/:id
        if (pathname.startsWith('/api/words/') && req.method === 'GET') {
          const wordId = pathname.replace('/api/words/', '');
          const word = getWordById(wordId);
          if (!word) return sendJson({ success: false, error: 'Word not found' }, 404);
          return sendJson({ success: true, data: word });
        }

        // 4. Literature
        if (pathname === '/api/literature' && req.method === 'GET') {
          const cat = urlObj.searchParams.get('category') || undefined;
          return sendJson({ success: true, data: getLiteraryWorks(cat) });
        }

        if (pathname.startsWith('/api/literature/') && req.method === 'GET') {
          const workId = pathname.replace('/api/literature/', '');
          const work = getLiteraryWorkWithPassages(workId);
          if (!work) return sendJson({ success: false, error: 'Work not found' }, 404);
          return sendJson({ success: true, data: work });
        }

        // Read POST body helper
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });

        req.on('end', async () => {
          try {
            const parsed = body ? JSON.parse(body) : {};

            // User preferences
            if (pathname === '/api/user/preferences' && req.method === 'POST') {
              const { userId, preferredLanguage, displayName } = parsed;
              const updated = upsertUserLanguagePreference(userId, preferredLanguage, displayName);
              return sendJson({ success: true, data: updated });
            }

            if (pathname.startsWith('/api/user/profile/') && req.method === 'GET') {
              const uId = pathname.replace('/api/user/profile/', '');
              return sendJson({ success: true, data: getUserProfile(uId) || null });
            }

            // Research
            if (pathname === '/api/research' && req.method === 'GET') {
              const userId = urlObj.searchParams.get('userId') || 'tamizhan@tamilver.org';
              return sendJson({ success: true, data: getSavedResearch(userId) });
            }

            if (pathname === '/api/research' && req.method === 'POST') {
              const { userId, title, researchType, researchData } = parsed;
              const created = createSavedResearch(userId, title, researchType, researchData);
              return sendJson({ success: true, data: created });
            }

            if (pathname.startsWith('/api/research/') && req.method === 'DELETE') {
              const rId = pathname.replace('/api/research/', '');
              const userId = urlObj.searchParams.get('userId') || 'tamizhan@tamilver.org';
              deleteSavedResearch(rId, userId);
              return sendJson({ success: true, message: 'Deleted' });
            }

            // Decode manuscript
            if (pathname === '/api/tamil/decode-manuscript' && req.method === 'POST') {
              const { sourceText, targetLanguage, userId, imageBase64 } = parsed;
              const effectiveText = sourceText || 'பழந்தமிழ் ஓலைச்சுவடி எழுத்துக்கள் (Ancient palm manuscript)';
              const result = await decodeAncientManuscript(effectiveText, targetLanguage || 'ta');

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
                } catch (e) {
                  console.warn('DB manuscript persist error:', e);
                }
              }

              return sendJson({ success: true, result });
            }

            next();
          } catch (err: any) {
            console.error('Vite API Middleware error:', err);
            sendJson({ success: false, error: err.message || 'Internal server error' }, 500);
          }
        });
      });
    },
  };
}

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), tamilApiPlugin()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});
