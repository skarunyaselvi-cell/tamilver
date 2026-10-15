import { DatabaseSync } from 'node:sqlite';
import fs from 'node:fs';
import path from 'node:path';

const DB_FILE_PATH = path.resolve(process.cwd(), 'tamilver.db');
const MIGRATIONS_FILE_PATH = path.resolve(process.cwd(), 'server/db/migrations.sql');

// Initialize SQLite database instance
export const db = new DatabaseSync(DB_FILE_PATH);

// Run migrations on start
export function initializeDatabase() {
  const migrationsSql = fs.readFileSync(MIGRATIONS_FILE_PATH, 'utf-8');
  db.exec(migrationsSql);
  seedInitialDatabase();
}

function seedInitialDatabase() {
  // Check if supported_languages is seeded
  const langCountStmt = db.prepare('SELECT count(*) as count FROM supported_languages');
  const countRow = langCountStmt.get() as { count: number };

  if (countRow.count === 0) {
    const insertLang = db.prepare(`
      INSERT INTO supported_languages (code, native_name, english_name, is_enabled, display_order)
      VALUES (?, ?, ?, ?, ?)
    `);

    const languages = [
      ['ta', 'தமிழ்', 'Tamil', 1, 1],
      ['en', 'English', 'English', 1, 2],
      ['hi', 'हिन्दी', 'Hindi', 1, 3],
      ['te', 'తెలుగు', 'Telugu', 1, 4],
      ['kn', 'ಕನ್ನಡ', 'Kannada', 1, 5],
      ['ml', 'മലയാളം', 'Malayalam', 1, 6],
      ['bn', 'বাংলা', 'Bengali', 1, 7],
      ['or', 'ଓଡ଼ିଆ', 'Odia', 1, 8],
    ];

    for (const l of languages) {
      insertLang.run(l[0], l[1], l[2], l[3], l[4]);
    }
  }

  // Seed default admin and guest user profiles
  const userCheck = db.prepare('SELECT count(*) as count FROM user_profiles');
  const userCount = (userCheck.get() as { count: number }).count;
  if (userCount === 0) {
    const insertUser = db.prepare(`
      INSERT INTO user_profiles (id, display_name, preferred_language)
      VALUES (?, ?, ?)
    `);
    insertUser.run('tamizhan@tamilver.org', 'தமிழ்ப் பயனர்', 'ta');
    insertUser.run('aivu@tamilver.org', 'மொழி ஆய்வாளர்', 'ta');
  }

  // Seed modules
  const modCheck = db.prepare('SELECT count(*) as count FROM modules');
  const modCount = (modCheck.get() as { count: number }).count;
  if (modCount === 0) {
    const insertMod = db.prepare(`
      INSERT INTO modules (id, slug, icon_key, route, is_enabled, display_order)
      VALUES (?, ?, ?, ?, ?, ?)
    `);

    insertMod.run('mod-literature', 'literature', 'book_palm_leaf', '/literature', 1, 1);
    insertMod.run('mod-script', 'script', 'inscription_stele', '/script', 1, 2);
    insertMod.run('mod-ai-nanban', 'ai_nanban', 'scanner_sparkles', '/ai_nanban', 1, 3);
    insertMod.run('mod-word-evolution', 'word_evolution', 'timeline_glyph', '/word_evolution', 1, 4);
    insertMod.run('mod-saved-research', 'saved_research', 'archive_ribbon', '/research', 1, 5);

    // Seed module translations
    const insertModTrans = db.prepare(`
      INSERT INTO module_translations (id, module_id, language_code, title, description)
      VALUES (?, ?, ?, ?, ?)
    `);

    const modTranslations = [
      // Tamil
      ['mt-lit-ta', 'mod-literature', 'ta', 'பழந்தமிழ் இலக்கியக் கருவூலம்', 'சங்க காலம், பதினெண்கீழ்க்கணக்கு மற்றும் ஐம்பெரும் காப்பியங்களின் பாக்களும் அடிக்குறிப்புகளும்.'],
      ['mt-scr-ta', 'mod-script', 'ta', 'எழுத்து வடிவப் பரிணாமம்', 'தமிழ்ப் பிராமி, வட்டெழுத்து முதல் சோழர் மற்றும் நவீன தமிழ் வரிவடிவ மாற்றங்களின் காலவரிசை.'],
      ['mt-ai-ta', 'mod-ai-nanban', 'ta', 'AI நண்பன் — சுவடி வாசிப்பான்', 'ஓலைச்சுவடி மற்றும் கல்வெட்டுப் படங்களை OCR மூலம் நவீன எழுத்தாகவும் புணர்ச்சிப் பிரிப்பாகவும் மாற்றும் கருவி.'],
      ['mt-wrd-ta', 'mod-word-evolution', 'ta', 'சொல் பரிணாம ஒப்பீடு', 'பழந்தமிழ் மற்றும் நவீன தமிழ் சொற்களின் எழுத்து வடிவம், பொருள் மற்றும் பயன்பாட்டு மாற்ற ஒப்பாய்வு.'],
      ['mt-res-ta', 'mod-saved-research', 'ta', 'சேமித்த ஆய்வுக் குறிப்புகள்', 'உங்கள் மொழி ஆய்வுகள், சுவடி பகுப்பாய்வுகள் மற்றும் ஒப்பீட்டு அறிக்கைகளின் சேமிப்பகம்.'],

      // English
      ['mt-lit-en', 'mod-literature', 'en', 'Ancient Tamil Literature Treasury', 'Explore Sangam classics, didactic epics, and ancient poetry with source-linked commentaries.'],
      ['mt-scr-en', 'mod-script', 'en', 'Script Evolution Engine', 'Timeline of Tamil script from Tamil-Brahmi and Vatteluttu to Chola and Modern typography.'],
      ['mt-ai-en', 'mod-ai-nanban', 'en', 'AI Nanban — Manuscript Reader', 'AI-assisted OCR transcription, sandhi separation, and translation of palm-leaf manuscripts.'],
      ['mt-wrd-en', 'mod-word-evolution', 'en', 'Word Evolution Comparative Tool', 'Track documented shifts in spelling, meaning, and contextual usage across historical eras.'],
      ['mt-res-en', 'mod-saved-research', 'en', 'Saved Research & Reports', 'Archive of your saved linguistic investigations, transcriptions, and exported research reports.'],

      // Hindi
      ['mt-lit-hi', 'mod-literature', 'hi', 'प्राचीन तमिल साहित्य भंडार', 'संगम काल के ग्रंथ, महाकाव्य और स्रोत-सत्यापित पद्य व्याख्याएँ।'],
      ['mt-scr-hi', 'mod-script', 'hi', 'लिपि विकास कालक्रम', 'तमिल-ब्राह्मी और वट्टेळुत्तु से आधुनिक तमिल लिपि तक का ऐतिहासिक विकास।'],
      ['mt-ai-hi', 'mod-ai-nanban', 'hi', 'एआई ननबन — पाण्डुलिपि वाचक', 'ताड़पत्र और शिलालेखों का एआई आधारित वाचन, संधि विच्छेद और अर्थ।'],
      ['mt-wrd-hi', 'mod-word-evolution', 'hi', 'शब्द विकास तुलना इंजन', 'ऐतिहासिक कालखंडों में तमिल शब्दों के रूप, अर्थ और प्रयोग का तुलनात्मक अध्ययन।'],
      ['mt-res-hi', 'mod-saved-research', 'hi', 'सहेजे गए शोध और रिपोर्ट', 'आपके द्वारा सहेजे गए भाषाई अध्ययन और निर्यात योग्य शोध रिपोर्ट।'],

      // Telugu
      ['mt-lit-te', 'mod-literature', 'te', 'ప్రాచీన తమిళ సాహిత్య నిధి', 'సంఘం సాహిత్యం, కావ్యాలు మరియు మూల ఆధారిత వ్యాఖ్యానాలు.'],
      ['mt-scr-te', 'mod-script', 'te', 'లిపి పరిణామ క్రమం', 'తమిళ-బ్రాహ్మీ, వట్టెళుత్తు నుండి ఆధునిక లిపి వరకు అక్షరాల పరిణామం.'],
      ['mt-ai-te', 'mod-ai-nanban', 'te', 'AI నన్బన్ — తాళపత్ర పాఠకం', 'తాళపత్రాలు మరియు శాసనాల OCR వివరణ, సంధి విడదీయడం మరియు అనువాదం.'],
      ['mt-wrd-te', 'mod-word-evolution', 'te', 'పద పరిణామ పోలిక యంత్రం', 'చారిత్రక కాలాల్లో తమిళ పదాల స్పెల్లింగ్, అర్థం మరియు వాడుక మార్పుల పరిశోధన.'],
      ['mt-res-te', 'mod-saved-research', 'te', 'భద్రపరిచిన పరిశోధనలు', 'మీరు భద్రపరిచిన భాషా పరిశోధనా రికార్డులు మరియు నివేదికలు.'],

      // Kannada
      ['mt-lit-kn', 'mod-literature', 'kn', 'ಪ್ರಾಚೀನ ತಮಿಳು ಸಾಹಿತ್ಯ ಭಂಡಾರ', 'ಸಂಗಂ ಸಾಹಿತ್ಯ, ಮಹಾಕಾವ್ಯಗಳು ಮತ್ತು ಮೂಲ ದಾಖಲಿತ ವ್ಯಾಖ್ಯಾನಗಳು.'],
      ['mt-scr-kn', 'mod-script', 'kn', 'ಲಿಪಿ ವಿಕಾಸ ಕಾಲಾನುಕ್ರಮ', 'ತಮಿಳು-ಬ್ರಾಹ್ಮಿ, ವಟ್ಟೆಳುತ್ತು ಇಂದ ಆಧುನಿಕ ತಮಿಳು ಲಿಪಿಯವರೆಗಿನ ಅಕ್ಷರ ರೂಪಾಂತರ.'],
      ['mt-ai-kn', 'mod-ai-nanban', 'kn', 'ಎಐ ನನ್ಬನ್ — ಹಸ್ತಪ್ರತಿ ಓದುಗ', 'ತಾಳೆಗರಿ ಹಸ್ತಪ್ರತಿಗಳು ಮತ್ತು ಶಾಸನಗಳ ಎಐ ಓದುವಿಕೆ, ಸಂಧಿ ವಿಭಾಗ ಮತ್ತು ವಿವರಣೆ.'],
      ['mt-wrd-kn', 'mod-word-evolution', 'kn', 'ಪದ ವಿಕಾಸ ಹೋಲಿಕೆ ಎಂಜಿನ್', 'ಐತಿಹಾಸಿಕ ಕಾಲಾವಧಿಗಳಲ್ಲಿ ತಮಿಳು ಪದಗಳ ಕಾಗುಣಿತ, ಅರ್ಥ ಮತ್ತು ಬಳಕೆಯ ಬದಲಾವಣೆಗಳು.'],
      ['mt-res-kn', 'mod-saved-research', 'kn', 'ಉಳಿಸಲಾದ ಸಂಶೋಧನೆಗಳು', 'ನಿಮ್ಮ ಉಳಿಸಿದ ಭಾಷಾಶಾಸ್ತ್ರದ ವಿಶ್ಲೇಷಣೆಗಳು ಮತ್ತು ವರದಿಗಳು.'],

      // Malayalam
      ['mt-lit-ml', 'mod-literature', 'ml', 'പ്രാചീന തമിഴ് സാഹിത്യ നിധി', 'സംഘസാഹിത്യം, കാവ്യങ്ങൾ, പദ്യങ്ങൾ എന്നിവയുടെ ആധികാരിക ശേഖരം.'],
      ['mt-scr-ml', 'mod-script', 'ml', 'ലിപി പരിണാമ രേഖ', 'തമിഴ്-ബ്രാഹ്മി, വട്ടെഴുത്ത് മുതൽ ആധുനിക തമിഴ് വരെയുള്ള ലിപി മാറ്റങ്ങൾ.'],
      ['mt-ai-ml', 'mod-ai-nanban', 'ml', 'എഐ നൺപൻ — താളിയോല വായനക്കാരൻ', 'താളിയോലകളും ശിലാശാസനങ്ങളും എഐ സാങ്കേതികവിദ്യ വഴി വായിച്ചെടുക്കുന്നു.'],
      ['mt-wrd-ml', 'mod-word-evolution', 'ml', 'പദ പരിണാമ താരതമ്യ യന്ത്രം', 'ചരിത്ര കാലഘട്ടങ്ങളിലെ തമിഴ് വാക്കുകളുടെ അർത്ഥ, പ്രയോഗ മാറ്റങ്ങൾ.'],
      ['mt-res-ml', 'mod-saved-research', 'ml', 'സൂക്ഷിച്ച ഗവേഷണങ്ങൾ', 'നിങ്ങൾ സംരക്ഷിച്ച ഭാഷാശാസ്ത്ര ഗവേഷണ കുറിപ്പുകളും റിപ്പോർട്ടുകളും.'],

      // Bengali
      ['mt-lit-bn', 'mod-literature', 'bn', 'প্রাচীন তামিল সাহিত্য কোষ', 'সঙ্গম সাহিত্য, মহাকাব্য এবং সূত্র-যাচাইকৃত কাব্যের সুবিশাল সংগ্রহ।'],
      ['mt-scr-bn', 'mod-script', 'bn', 'লিপি বিবর্তন কালক্রম', 'তামিল-ব্রাহ্মী ও বট্টেলুত্তু থেকে আধুনিক তামিল লিপির বিবর্তনধারা।'],
      ['mt-ai-bn', 'mod-ai-nanban', 'bn', 'এআই ননবন — পাণ্ডুলিপি পাঠক', 'তালপাতা এবং শিলালিপির এআই ভিত্তিক পাঠোদ্ধার ও সন্ধি বিশ্লেষণ।'],
      ['mt-wrd-bn', 'mod-word-evolution', 'bn', 'শব্দ বিবর্তন তুলনামূলক ইঞ্জিন', 'ঐতিহাসিক যুগে তামিল শব্দের বানান, অর্থ ও ব্যবহারের রূপান্তর গবেষণা।'],
      ['mt-res-bn', 'mod-saved-research', 'bn', 'সংরক্ষিত গবেষণা ও প্রতিবেদন', 'আপনার সংরক্ষিত ভাষাগত বিশ্লেষণ ও রপ্তানিযোগ্য গবেষণা প্রতিবেদন।'],

      // Odia
      ['mt-lit-or', 'mod-literature', 'or', 'ପ୍ରାଚୀନ ତାମିଲ ସାହିତ୍ୟ କୋଷ', 'ସଙ୍ଗମ ସାହିତ୍ୟ, ମହାକାବ୍ୟ ଏବଂ ପ୍ରମାଣିତ ପଦ୍ୟର ସଂଗ୍ରହ।'],
      ['mt-scr-or', 'mod-script', 'or', 'ଲିପି ବିବର୍ତ୍ତନ ଧାରା', 'ତାମିଲ-ବ୍ରାହ୍ମୀ ଏବଂ ବଟ୍ଟେଳୁତ୍ତୁରୁ ଆଧୁନିକ ତାମିଲ ଲିପିର ବିବର୍ତ୍ତନ।'],
      ['mt-ai-or', 'mod-ai-nanban', 'or', 'ଏଆଇ ନନବନ — ପୋଥି ପାଠକ', 'ତାଳପତ୍ର ପୋଥି ଓ ଶିଳାଲେଖର ଏଆଇ ପାଠୋଦ୍ଧାର, ସନ୍ଧି ବିଚ୍ଛେଦ ଓ ବ୍ୟାଖ୍ୟା।'],
      ['mt-wrd-or', 'mod-word-evolution', 'or', 'ଶବ୍ଦ ବିବର୍ତ୍ତନ ତୁଳନା ଇଞ୍ଜିନ', 'ଐତିହାସିକ ଯୁଗରେ ତାମିଲ ଶବ୍ଦର ବନାନ, ଅର୍ଥ ଓ ବ୍ୟବହାର ପରିବର୍ତ୍ତନ।'],
      ['mt-res-or', 'mod-saved-research', 'or', 'ସଂରକ୍ଷିତ ଗବେଷଣା ରିପୋର୍ଟ', 'ଆପଣଙ୍କ ସଂରକ୍ଷିତ ଭାଷାତାତ୍ତ୍ୱିକ ତଥ୍ୟ ଏବଂ ରପ୍ତାନି ରିପୋର୍ଟ।'],
    ];

    for (const mt of modTranslations) {
      insertModTrans.run(mt[0], mt[1], mt[2], mt[3], mt[4]);
    }
  }

  // Seed sample sources, words, and historical forms
  seedLinguisticData();
}

function seedLinguisticData() {
  const sourceCheck = db.prepare('SELECT count(*) as count FROM sources');
  if ((sourceCheck.get() as { count: number }).count > 0) return;

  // Insert sources
  const insertSource = db.prepare(`
    INSERT INTO sources (id, title, author_or_institution, publication_details, source_url, page_reference, rights_status, verification_status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertSource.run('src-tolkappiyam', 'தொல்காப்பியம் (Tolkappiyam)', 'தொல்காப்பியர்', 'Classical Tamil Epigraphy & Grammar Society', 'https://tamilvu.org', 'சொல்லதிகாரம் 1-52', 'public_domain', 'verified');
  insertSource.run('src-mangulam', 'மாங்குளம் தமிழ்ப் பிராமிக் கல்வெட்டு (Mangulam Tamil-Brahmi)', 'நெடுஞ்செழியன் பாண்டியர் கல்வெட்டு', 'தமிழ்நாடு தொல்லியல் துறை', 'https://tnarch.gov.in', 'Inscription 1, Mangulam hill, Madurai', 'public_domain', 'verified');
  insertSource.run('src-thirukkural', 'திருக்குறள் (Thirukkural)', 'திருவள்ளுவர்', 'Classical Sangam Canon', 'https://tamilvu.org', 'குறள் 785, நட்பு அதிகாரம்', 'public_domain', 'verified');
  insertSource.run('src-kuruntokai', 'குறுந்தொகை (Kuruntokai)', 'சங்கப் புலவர்கள்', 'எட்டுத்தொகை செவ்வியல் தொகுப்பு', 'https://tamilvu.org', 'பாடல் 40', 'public_domain', 'verified');
  insertSource.run('src-thanjavur', 'தஞ்சைப் பெருவுடையார் கல்வெட்டு (Thanjavur Big Temple Inscription)', 'முதலாம் இராசராச சோழன்', 'மத்திய தொல்லியல் துறை (ASI)', 'https://asi.nic.in', 'South Wall Inscription, CE 1010', 'public_domain', 'verified');

  // Insert words
  const insertWord = db.prepare(`
    INSERT INTO words (id, canonical_tamil, transliteration, english_gloss, verification_status)
    VALUES (?, ?, ?, ?, ?)
  `);

  insertWord.run('w-natpu', 'நட்பு', 'natpu', 'Friendship, kinship, mutual alliance', 'verified');
  insertWord.run('w-anbu', 'அன்பு', 'anbu', 'Affection, deep empathetic love, universal goodwill', 'verified');
  insertWord.run('w-arasu', 'அரசு', 'arasu', 'Sovereignty, monarchy, constitutional state government', 'verified');
  insertWord.run('w-kaathal', 'காதல்', 'kaathal', 'Romantic love, longing, divine passion', 'verified');
  insertWord.run('w-sol', 'சொல்', 'sol', 'Word, linguistic root, utterance, promise', 'verified');

  // Insert historical word forms
  const insertForm = db.prepare(`
    INSERT INTO historical_word_forms (id, word_id, form_text, script_type, historical_period, meaning, usage_context, source_id, confidence)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
  `);

  // Forms for நட்பு
  insertForm.run('hwf-natpu-1', 'w-natpu', 'நட்டல் / நட்டு', 'தமிழ்ப் பிராமி (Tamil-Brahmi)', 'கி.மு 300 - கி.மு 100', 'மனதால் ஒன்றை நடுதல், பிணைத்தல், வேரூன்றிய தோழமை', 'மாங்குளம் & புகழூர்க் கல்வெட்டுகளில் கூட்டாண்மை', 'src-mangulam', 0.98);
  insertForm.run('hwf-natpu-2', 'w-natpu', 'நட்பு / கேண்மை', 'வட்டெழுத்து (Vatteluttu)', 'கி.பி 400 - கி.பி 700', 'உயிரனைய இனிய உறவு, துன்பத்தில் உதவும் கரம்', 'திருக்குறள்: உடுக்கை இழந்தவன் கைபோல', 'src-thirukkural', 0.99);
  insertForm.run('hwf-natpu-3', 'w-natpu', 'நட்பு', 'நவீன தமிழ் (Modern Tamil)', 'கி.பி 1900 - தற்காலம்', 'தோழமை, பரஸ்பர சமூக நட்பு (Friendship)', 'நவீன இலக்கியம், அன்றாட உரையாடல்', 'src-thirukkural', 1.0);

  // Forms for அரசு
  insertForm.run('hwf-arasu-1', 'w-arasu', 'அரசன் / கோ', 'தமிழ்ப் பிராமி (Tamil-Brahmi)', 'கி.மு 400 - கி.மு 200', 'செங்கோல் ஏந்திய முதல்வன், பாதுகாப்புத் தலைவன்', 'ஜம்பை கல்வெட்டு (சதியபுதோ அதியமான்)', 'src-mangulam', 0.97);
  insertForm.run('hwf-arasu-2', 'w-arasu', 'அரசு / கோக்கோன்', 'சோழர் கால வரிவடிவம் (Chola Script)', 'கி.பி 900 - கி.பி 1200', 'பேரரசு, ஆட்சி அதிகாரம், நிர்வாகக் கட்டமைப்பு', 'தஞ்சை பெரியகோயில் கல்வெட்டு', 'src-thanjavur', 0.99);
  insertForm.run('hwf-arasu-3', 'w-arasu', 'அரசாங்கம் / அரசு', 'நவீன தமிழ் (Modern Tamil)', 'தற்காலம்', 'மக்களாட்சி, சட்டமன்றம் மற்றும் மாநில அரசு (Government)', 'இந்திய அரசியலமைப்பு, செய்தி ஊடகங்கள்', 'src-tolkappiyam', 1.0);

  // Forms for அன்பு
  insertForm.run('hwf-anbu-1', 'w-anbu', 'அன்புடைமை', 'சங்க காலம் (Sangam Era)', 'கி.மு 300 - கி.பி 200', 'அகத்திணைப் பிணைப்பு, தன்னலமற்ற இரக்கம்', 'குறுந்தொகை பாடல் 40: செம்புலப் பெயல் நீர் போல', 'src-kuruntokai', 0.99);
  insertForm.run('hwf-anbu-2', 'w-anbu', 'அன்பு', 'நவீன தமிழ் (Modern Tamil)', 'தற்காலம்', 'பாசம், மனிதநேயம், நேசம் (Love & Compassion)', 'நவீன கவிதைகள், சமூக உரையாடல்கள்', 'src-kuruntokai', 1.0);

  // Insert literary works
  const insertLit = db.prepare(`
    INSERT INTO literary_works (id, title_ta, author_attribution, category, historical_period, description, source_reference, rights_status)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `);

  insertLit.run('lit-natrinai', 'நற்றிணை', 'பல்வேறு சங்கப் புலவர்கள்', 'ettuthogai', 'சங்க காலம் (கி.மு 300 - கி.பி 200)', 'அகப்பொருள் சார்ந்த 400 நயமிகு பாடல்களைக் கொண்ட எட்டுத்தொகை நூல்.', 'மதுரை தமிழ்ச் சங்கம்', 'public_domain');
  insertLit.run('lit-kuruntokai', 'குறுந்தொகை', '205 புலவர்கள்', 'ettuthogai', 'சங்க காலம் (கி.மு 300 - கி.பி 200)', 'நான்கு முதல் எட்டு அடிகள் கொண்ட செறிவான அகவற்பாக்கள்.', 'எட்டுத்தொகை முதல் தொகுதி', 'public_domain');
  insertLit.run('lit-thirukkural', 'திருக்குறள்', 'திருவள்ளுவர்', 'pathinenkeelkanakku', 'சங்க மருவிய காலம் (கி.பி 300 - 500)', 'அறம், பொருள், இன்பம் என்ற முப்பாலையும் விளக்கும் உலகப் பொதுமறை.', 'பதினெண்கீழ்க்கணக்கு', 'public_domain');
  insertLit.run('lit-silambu', 'சிலப்பதிகாரம்', 'இளங்கோவடிகள்', 'aimperum_kappiyam', 'சங்க மருவிய காலம் (கி.பி 450 - 550)', 'தமிழ்ப் பண்பாட்டையும் கண்ணகியின் அறச்சீற்றத்தையும் பாடும் முதல் காப்பியம்.', 'ஐம்பெரும் காப்பியங்கள்', 'public_domain');
  insertLit.run('lit-mullaipattu', 'முல்லைப்பாட்டு', 'நப்பூதனார்', 'pathuppattu', 'சங்க காலம்', 'பத்துப்பாட்டு நூல்களுள் மிகக் குறுகிய அடிகளுடைய அழகிய அகப்பொருள் நூல்.', 'பத்துப்பாட்டு', 'public_domain');

  // Insert literary passages
  const insertPassage = db.prepare(`
    INSERT INTO literary_passages (id, work_id, original_text, passage_number, commentary, source_id, verification_status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);

  insertPassage.run('pas-kurun-40', 'lit-kuruntokai', 'யாயும் ஞாயும் யாரா கியரோ\nஎந்தையும் நுந்தையும் எம்முறைக் கேளிர்\nயானும் நீயும் எவ்வழி அறிதும்\nசெம்புலப் பெயல்நீர் போல\nஅன்புடை நெஞ்சம் தாம்கலந் தனவே.', 'பாடல் 40', 'செம்மண் நிலத்தில் பெய்த மழைநீர் நிலத்தோடு இரண்டறக் கலப்பது போல அன்புடை நெஞ்சங்கள் ஒன்றாயின.', 'src-kuruntokai', 'verified');
  insertPassage.run('pas-kural-788', 'lit-thirukkural', 'உடுக்கை இழந்தவன் கைபோல ஆங்கே\nஇடுக்கண் களைவதாம் நட்பு.', 'குறள் 788', 'ஆடை நெகிழ்ந்தவனின் கை உடனே ஆடையை இழுத்துக் காப்பதுபோல துன்பம் வந்தவுடன் ஓடிச் சென்று காப்பதே நட்பு.', 'src-thirukkural', 'verified');
  insertPassage.run('pas-silambu-1', 'lit-silambu', 'திங்களைப் போற்றுதும் திங்களைப் போற்றுதும்\nஞாயிறு போற்றுதும் ஞாயிறு போற்றுதும்\nமாமழை போற்றுதும் மாமழை போற்றுதும்.', 'மங்கல வாழ்த்துப் பாடல்', 'இயற்கையின் கொடைகளான சந்திரன், சூரியன், பெருமழையை சோழனின் செங்கோலோடு உவமை கூறி போற்றுதல்.', 'src-silambu', 'verified');

  // Insert sample saved research
  const insertRes = db.prepare(`
    INSERT INTO saved_research (id, user_id, title, research_type, research_data)
    VALUES (?, ?, ?, ?, ?)
  `);

  const initialResearchData = JSON.stringify({
    word: 'நட்பு (Friendship)',
    ancientScript: 'தமிழ்ப் பிராமி (Tamil-Brahmi)',
    historicalShifts: [
      { era: 'கி.மு 300', form: 'நட்டல்', meaning: 'வேரூன்றுதல்' },
      { era: 'கி.பி 500', form: 'நட்பு / கேண்மை', meaning: 'உயிரனைய தோழமை' },
      { era: 'தற்காலம்', form: 'நட்பு', meaning: 'Friendship' }
    ],
    citation: 'திருக்குறள் குறள் 788 & மாங்குளம் கல்வெட்டு',
    conclusion: 'வேர்ச்சொல் நள் (ஒன்றுபடு/நெருங்கு) என்பதிலிருந்து தோன்றி காலப்போக்கில் உன்னத உறவாகப் பரிணமித்துள்ளது.'
  });

  insertRes.run('res-initial-1', 'tamizhan@tamilver.org', 'நட்பு சொல்லின் 2300 ஆண்டு பரிணாம ஒப்பாய்வு', 'word_evolution', initialResearchData);
}

// ----------------------------------------------------------------------------
// Database Query APIs
// ----------------------------------------------------------------------------

export function getSupportedLanguages() {
  const stmt = db.prepare('SELECT * FROM supported_languages WHERE is_enabled = 1 ORDER BY display_order ASC');
  return stmt.all();
}

export function getUserProfile(userId: string) {
  const stmt = db.prepare('SELECT * FROM user_profiles WHERE id = ?');
  return stmt.get(userId);
}

export function upsertUserLanguagePreference(userId: string, preferredLanguage: string, displayName?: string) {
  const existing = getUserProfile(userId);
  if (existing) {
    const stmt = db.prepare('UPDATE user_profiles SET preferred_language = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?');
    stmt.run(preferredLanguage, userId);
  } else {
    const stmt = db.prepare('INSERT INTO user_profiles (id, display_name, preferred_language) VALUES (?, ?, ?)');
    stmt.run(userId, displayName || userId, preferredLanguage);
  }
  return getUserProfile(userId);
}

export function getModulesWithTranslations(languageCode: string = 'ta') {
  const stmt = db.prepare(`
    SELECT m.id, m.slug, m.icon_key, m.route, m.is_enabled, m.display_order,
           COALESCE(mt.title, mt_fallback.title) as title,
           COALESCE(mt.description, mt_fallback.description) as description
    FROM modules m
    LEFT JOIN module_translations mt ON m.id = mt.module_id AND mt.language_code = ?
    LEFT JOIN module_translations mt_fallback ON m.id = mt_fallback.module_id AND mt_fallback.language_code = 'ta'
    WHERE m.is_enabled = 1
    ORDER BY m.display_order ASC
  `);
  return stmt.all(languageCode);
}

export function searchWords(query: string = '') {
  const cleanQ = query.trim().toLowerCase();
  let stmt;
  if (!cleanQ) {
    stmt = db.prepare(`
      SELECT w.*, 
        (SELECT json_group_array(json_object(
          'id', hwf.id,
          'form_text', hwf.form_text,
          'script_type', hwf.script_type,
          'historical_period', hwf.historical_period,
          'meaning', hwf.meaning,
          'usage_context', hwf.usage_context,
          'confidence', hwf.confidence,
          'source_title', s.title
        )) FROM historical_word_forms hwf LEFT JOIN sources s ON hwf.source_id = s.id WHERE hwf.word_id = w.id) as forms_json
      FROM words w
    `);
    const rows: any[] = stmt.all();
    return rows.map(r => ({
      ...r,
      forms: r.forms_json ? JSON.parse(r.forms_json) : []
    }));
  }

  stmt = db.prepare(`
    SELECT w.*, 
      (SELECT json_group_array(json_object(
        'id', hwf.id,
        'form_text', hwf.form_text,
        'script_type', hwf.script_type,
        'historical_period', hwf.historical_period,
        'meaning', hwf.meaning,
        'usage_context', hwf.usage_context,
        'confidence', hwf.confidence,
        'source_title', s.title
      )) FROM historical_word_forms hwf LEFT JOIN sources s ON hwf.source_id = s.id WHERE hwf.word_id = w.id) as forms_json
    FROM words w
    WHERE lower(w.canonical_tamil) LIKE ? OR lower(w.transliteration) LIKE ? OR lower(w.english_gloss) LIKE ?
  `);
  const pattern = `%${cleanQ}%`;
  const rows: any[] = stmt.all(pattern, pattern, pattern);
  return rows.map(r => ({
    ...r,
    forms: r.forms_json ? JSON.parse(r.forms_json) : []
  }));
}

export function getWordById(wordId: string) {
  const wordStmt = db.prepare('SELECT * FROM words WHERE id = ?');
  const word: any = wordStmt.get(wordId);
  if (!word) return null;

  const formsStmt = db.prepare(`
    SELECT hwf.*, s.title as source_title, s.author_or_institution, s.page_reference
    FROM historical_word_forms hwf
    LEFT JOIN sources s ON hwf.source_id = s.id
    WHERE hwf.word_id = ?
    ORDER BY hwf.id ASC
  `);
  word.forms = formsStmt.all(wordId);
  return word;
}

export function getLiteraryWorks(category?: string) {
  let stmt;
  if (category && category !== 'all') {
    stmt = db.prepare('SELECT * FROM literary_works WHERE category = ? ORDER BY id ASC');
    return stmt.all(category);
  }
  stmt = db.prepare('SELECT * FROM literary_works ORDER BY id ASC');
  return stmt.all();
}

export function getLiteraryWorkWithPassages(workId: string) {
  const workStmt = db.prepare('SELECT * FROM literary_works WHERE id = ?');
  const work: any = workStmt.get(workId);
  if (!work) return null;

  const passStmt = db.prepare(`
    SELECT p.*, s.title as source_title 
    FROM literary_passages p
    LEFT JOIN sources s ON p.source_id = s.id
    WHERE p.work_id = ?
    ORDER BY p.id ASC
  `);
  work.passages = passStmt.all(workId);
  return work;
}

export function getSavedResearch(userId: string) {
  const stmt = db.prepare('SELECT * FROM saved_research WHERE user_id = ? ORDER BY created_at DESC');
  return stmt.all(userId);
}

export function createSavedResearch(userId: string, title: string, researchType: string, researchData: any) {
  const id = `res-${Date.now()}-${Math.random().toString(36).substring(2, 7)}`;
  const jsonStr = typeof researchData === 'string' ? researchData : JSON.stringify(researchData);
  const stmt = db.prepare(`
    INSERT INTO saved_research (id, user_id, title, research_type, research_data)
    VALUES (?, ?, ?, ?, ?)
  `);
  stmt.run(id, userId, title, researchType, jsonStr);
  return { id, user_id: userId, title, research_type: researchType, research_data: jsonStr };
}

export function deleteSavedResearch(id: string, userId: string) {
  const stmt = db.prepare('DELETE FROM saved_research WHERE id = ? AND user_id = ?');
  return stmt.run(id, userId);
}

export function createManuscriptAnalysis(userId: string, storagePath: string, transcription: string, explanation: string, detectedScript: string, confidence: number = 0.95) {
  const uploadId = `upl-${Date.now()}`;
  const uploadStmt = db.prepare(`
    INSERT INTO manuscript_uploads (id, user_id, storage_path, processing_status)
    VALUES (?, ?, ?, ?)
  `);
  uploadStmt.run(uploadId, userId, storagePath, 'completed');

  const analysisId = `ana-${Date.now()}`;
  const anaStmt = db.prepare(`
    INSERT INTO manuscript_analyses (id, upload_id, transcription, explanation, detected_script, confidence, verification_status)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `);
  anaStmt.run(analysisId, uploadId, transcription, explanation, detectedScript, confidence, 'verified_ai');

  return { uploadId, analysisId, transcription, explanation, detectedScript };
}
