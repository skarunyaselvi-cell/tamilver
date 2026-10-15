import { GoogleGenAI, Type } from '@google/genai';
import { ManuscriptDecodeResult } from '../src/types/tamilver';

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
  httpOptions: {
    headers: {
      'User-Agent': 'aistudio-build',
    },
  },
});

const DECODE_SCHEMA = {
  type: Type.OBJECT,
  properties: {
    decodedTamil: { type: Type.STRING, description: 'Normalized modern Tamil script transcription' },
    modernParaphrase: { type: Type.STRING, description: 'Clear modern Tamil meaning' },
    sandhiSplit: { type: Type.STRING, description: 'Word by word Sandhi separation (புணர்ச்சிப் பிரிப்பு)' },
    rootEtymology: {
      type: Type.ARRAY,
      items: {
        type: Type.OBJECT,
        properties: {
          word: { type: Type.STRING },
          root: { type: Type.STRING },
          meaning: { type: Type.STRING },
          grammarNote: { type: Type.STRING }
        },
        required: ['word', 'root', 'meaning', 'grammarNote']
      }
    },
    historicalEra: { type: Type.STRING, description: 'e.g. சங்க காலம், பல்லவர் காலம், சோழர் காலம்' },
    literaryContext: { type: Type.STRING, description: 'Literary style, poetic meter, or genre background' },
    regionalTranslation: { type: Type.STRING, description: 'Detailed linguistic explanation written in the requested target language' }
  },
  required: ['decodedTamil', 'modernParaphrase', 'sandhiSplit', 'rootEtymology', 'historicalEra', 'literaryContext', 'regionalTranslation']
};

export async function decodeAncientManuscript(
  sourceText: string,
  targetLanguage: string = 'ta'
): Promise<ManuscriptDecodeResult> {
  const languageNames: Record<string, string> = {
    ta: 'Tamil',
    en: 'English',
    ml: 'Malayalam',
    te: 'Telugu',
    kn: 'Kannada',
    hi: 'Hindi',
    fr: 'French',
    de: 'German'
  };

  const targetLangName = languageNames[targetLanguage] || 'Tamil';

  const prompt = `You are a world-renowned Tamil epigraphist, historical linguist, and classical scholar.
Analyze and decode the following ancient Tamil inscription or palm-leaf manuscript excerpt:
"${sourceText}"

Tasks:
1. Normalize and transcribe into clear modern Tamil characters.
2. Provide word-by-word sandhi breakdown (புணர்ச்சி பிரிப்பு).
3. Identify the etymological roots (வேர்ச்சொற்கள்) and grammatical classifications for key words.
4. Provide a clear modern Tamil paraphrase.
5. Provide a comprehensive explanation written in ${targetLangName} (explaining cultural nuance, historical era, and grammatical evolution).`;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: DECODE_SCHEMA,
      },
    });

    const text = response.text;
    if (!text) {
      throw new Error('Empty response received from Gemini');
    }

    const data = JSON.parse(text);

    return {
      sourceText,
      decodedTamil: data.decodedTamil || sourceText,
      modernParaphrase: data.modernParaphrase || '',
      sandhiSplit: data.sandhiSplit || '',
      rootEtymology: data.rootEtymology || [],
      historicalEra: data.historicalEra || 'சங்க காலம் (Sangam Classical Era)',
      literaryContext: data.literaryContext || '',
      regionalTranslation: data.regionalTranslation || data.modernParaphrase || ''
    };
  } catch (error) {
    console.error('Gemini Tamil decoding error:', error);
    throw error;
  }
}
