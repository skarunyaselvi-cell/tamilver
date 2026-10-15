import { LanguageCode } from '../types/tamilver';

export interface RegionalLanguageMeta {
  code: LanguageCode;
  nativeName: string;
  englishName: string;
  scriptBadge: string;
  flagSymbol: string;
  mandelaQuote: string;
  bharathiyarQuote: string;
  stoneInscriptionQuote: string;
  appTitle: string;
  appSubtitle: string;
  searchPlaceholder: string;
  navLiterature: string;
  navScriptEvolution: string;
  navAiNanban: string;
  navWordRoots: string;
  navSavedResearch: string;
  problemTitle: string;
  problemSummary: string;
  loginEmail: string;
  loginUser: string;
  loginPass: string;
  loginBtn: string;
  guestBtn: string;
  keyboardToggle: string;
  saveResearchBtn: string;
  exportReportBtn: string;
}

export const REGIONAL_LANGUAGES: Record<LanguageCode, RegionalLanguageMeta> = {
  ta: {
    code: 'ta',
    nativeName: 'தமிழ்',
    englishName: 'Tamil',
    scriptBadge: 'த',
    flagSymbol: '🏛️',
    mandelaQuote: 'ஒருவருக்குப் புரியும் மொழியில் பேசினால் அது அவருடைய அறிவைச் சென்றடையும்; அவருடைய சொந்த மொழியில் பேசினால் அது அவருடைய இதயத்தைச் சென்றடையும்.',
    bharathiyarQuote: 'யாமறிந்த மொழிகளிலே தமிழ்மொழி போல் இனிதாவது எங்கும் காணோம்',
    stoneInscriptionQuote: 'கல் தோன்றி மண் தோன்றாக் காலத்தே முன் தோன்றிய மூத்தகுடி தமிழ்!',
    appTitle: 'தமிழ்வேர் (TamilVer)',
    appSubtitle: 'வரலாற்றுக் காலங்களில் தமிழ் சொற்களின் பரிணாமத்தை ஆய்வு செய்யும் டிஜிட்டல் மொழியியல் தளம்',
    searchPlaceholder: 'சொல்லைத் தேடுக (எ.கா: நட்பு, அன்பு, அரசு, காதல், சொல்)...',
    navLiterature: 'பழந்தமிழ் இலக்கியங்கள்',
    navScriptEvolution: 'எழுத்து வடிவ பரிணாமம்',
    navAiNanban: 'AI நண்பன் (சுவடி வாசிப்பான்)',
    navWordRoots: 'சொல் பரிணாம ஒப்பீடு',
    navSavedResearch: 'சேமித்த ஆய்வுகள்',
    problemTitle: 'வரலாற்றுக் காலங்களில் தமிழ் சொற்களின் பரிணாமத்தை ஆய்வு செய்யும் கருவி (P3)',
    problemSummary: 'ஆவணப்படுத்தப்பட்ட இலக்கியச் சான்றுகளின் அடிப்படையில், பழந்தமிழ் மற்றும் நவீனத் தமிழ் சொற்களை ஒப்பிட்டு, எழுத்து வடிவம், பொருள் மற்றும் பயன்பாட்டில் ஏற்பட்ட மாற்றங்கள்.',
    loginEmail: 'மின்னஞ்சல் முகவரி',
    loginUser: 'பயனர் பெயர்',
    loginPass: 'கடவுச்சொல்',
    loginBtn: 'உள்நுழைக',
    guestBtn: 'விருந்தினராக நுழைக',
    keyboardToggle: 'தமிழ் விசைப்பலகை',
    saveResearchBtn: 'ஆய்வைச் சேமிக்க',
    exportReportBtn: 'அறிக்கையைப் பதிவிறக்குக'
  },

  en: {
    code: 'en',
    nativeName: 'English',
    englishName: 'English',
    scriptBadge: 'En',
    flagSymbol: '🌐',
    mandelaQuote: 'If you talk to a man in a language he understands, that goes to his head. If you talk to him in his language, that goes to his heart.',
    bharathiyarQuote: 'Among all the languages I know, nowhere have I found one as sweet as Tamil.',
    stoneInscriptionQuote: 'Tamil is the primordial civilization that emerged before stone and soil were formed!',
    appTitle: 'TamilVer (தமிழ்வேர்)',
    appSubtitle: 'Digital Linguistic Research Platform for the Evolution of Tamil Words Across Historical Periods',
    searchPlaceholder: 'Search words (e.g. natpu, friendship, love, government)...',
    navLiterature: 'Ancient Literature',
    navScriptEvolution: 'Script Evolution',
    navAiNanban: 'AI Nanban (Manuscript Reader)',
    navWordRoots: 'Word Evolution Engine',
    navSavedResearch: 'Saved Research',
    problemTitle: 'Linguistic Research Platform for Tamil Word Evolution (P3)',
    problemSummary: 'Comparing Old and Modern Tamil words based on documented literary evidence to identify shifts in spelling, meaning, and contextual usage.',
    loginEmail: 'Email Address',
    loginUser: 'Username',
    loginPass: 'Password',
    loginBtn: 'Log In',
    guestBtn: 'Continue as Guest',
    keyboardToggle: 'Tamil Virtual Keypad',
    saveResearchBtn: 'Save Research',
    exportReportBtn: 'Export Report'
  },

  hi: {
    code: 'hi',
    nativeName: 'हिन्दी',
    englishName: 'Hindi',
    scriptBadge: 'हि',
    flagSymbol: '🇮🇳',
    mandelaQuote: 'यदि आप किसी व्यक्ति से उस भाषा में बात करते हैं जो वह समझता है, तो वह उसके दिमाग में जाती है; यदि आप उसकी अपनी भाषा में बात करते हैं, तो वह उसके दिल में उतरती है।',
    bharathiyarQuote: 'जितनी भाषाएँ मैंने जानी हैं, उनमें तमिल जैसी मधुर भाषा मैंने कहीं नहीं देखी।',
    stoneInscriptionQuote: 'तमिल पाषाण और मिट्टी से भी पूर्व प्रकट हुई विश्व की सबसे प्राचीन भाषा है!',
    appTitle: 'तमिलवेर (TamilVer)',
    appSubtitle: 'ऐतिहासिक कालों में तमिल शब्दों के क्रमिक विकास का डिजिटल भाषावैज्ञानिक अध्ययन मंच',
    searchPlaceholder: 'शब्द खोजें (उदा: मैत्री, प्रेम, शासन, शब्द)...',
    navLiterature: 'प्राचीन साहित्य',
    navScriptEvolution: 'लिपि विकास',
    navAiNanban: 'एआई ननबन (पाण्डुलिपि वाचक)',
    navWordRoots: 'शब्द विकास तुलना',
    navSavedResearch: 'सहेजे गए शोध',
    problemTitle: 'तमिल शब्द विकास अध्ययन अनुसंधान उपकरण (P3)',
    problemSummary: 'दस्तावेजीकृत साहित्यिक साक्ष्यों के आधार पर प्राचीन और आधुनिक तमिल शब्दों की तुलना और वर्तनी व अर्थ परिवर्तन की पहचान।',
    loginEmail: 'ईमेल पता',
    loginUser: 'उपयोगकर्ता नाम',
    loginPass: 'पासवर्ड',
    loginBtn: 'लॉग इन करें',
    guestBtn: 'अतिथि के रूप में प्रवेश',
    keyboardToggle: 'तमिल कीपैड',
    saveResearchBtn: 'शोध सहेजें',
    exportReportBtn: 'रिपोर्ट निर्यात करें'
  },

  te: {
    code: 'te',
    nativeName: 'తెలుగు',
    englishName: 'Telugu',
    scriptBadge: 'తె',
    flagSymbol: '🇮🇳',
    mandelaQuote: 'ఒక వ్యక్తికి అర్థమయ్యే భాషలో మాట్లాడితే అది మెదడుకు చేరుతుంది; అతని స్వంత భాషలో మాట్లాడితే అది అతని హృదయానికి తాకుతుంది.',
    bharathiyarQuote: 'నేను చూసిన భాషలన్నింటిలోనూ తమిళం వంటి మధురమైన భాషను ఎక్కడా చూడలేదు.',
    stoneInscriptionQuote: 'రాళ్ళు, మట్టి పుట్టకముందే ఉద్భవించిన ప్రాచీన నాగరికత తమిళం!',
    appTitle: 'తమిళవేర్ (TamilVer)',
    appSubtitle: 'చారిత్రక కాలాల్లో తమిళ పదాల పరిణామాన్ని పరిశోధించే డిజిటల్ భాషా పరిశోధనా వేదిక',
    searchPlaceholder: 'పదాన్ని వెతకండి (ఉదా: స్నేహం, ప్రేమ, ప్రభుత్వం)...',
    navLiterature: 'ప్రాచీన సాహిత్యం',
    navScriptEvolution: 'లిపి పరిణామం',
    navAiNanban: 'AI నన్బన్ (తాళపత్ర పాఠకం)',
    navWordRoots: 'పద పరిణామ పోలిక',
    navSavedResearch: 'భద్రపరిచిన పరిశోధనలు',
    problemTitle: 'తమిళ పదాల పరిణామ పరిశోధనా సాధనం (P3)',
    problemSummary: 'సాహిత్య ఆధారాల ఆధారంగా ప్రాచీన మరియు ఆధునిక తమిళ పదాల స్పెల్లింగ్, అర్థం మరియు వాడుక మార్పులను గుర్తించే డిజిటల్ వేదిక.',
    loginEmail: 'ఈమెయిల్ చిరునామా',
    loginUser: 'వినియోగదారు పేరు',
    loginPass: 'పాస్‌వర్డ్',
    loginBtn: 'లాగిన్ అవ్వండి',
    guestBtn: 'అతిథిగా ప్రవేశించండి',
    keyboardToggle: 'తమిళ కీప్యాడ్',
    saveResearchBtn: 'పరిశోధన భద్రపరచు',
    exportReportBtn: 'నివేదిక ఎగుమతి'
  },

  kn: {
    code: 'kn',
    nativeName: 'ಕನ್ನಡ',
    englishName: 'Kannada',
    scriptBadge: 'ಕ',
    flagSymbol: '🇮🇳',
    mandelaQuote: 'ಒಬ್ಬ ವ್ಯಕ್ತಿಗೆ ಅರ್ಥವಾಗುವ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿದರೆ ಅದು ಅವನ ತಲೆಗೆ ತಲುಪುತ್ತದೆ; ಅವನ ಸ್ವಂತ ಭಾಷೆಯಲ್ಲಿ ಮಾತನಾಡಿದರೆ ಅದು ಅವನ ಹೃದಯವನ್ನು ಮುಟ್ಟುತ್ತದೆ.',
    bharathiyarQuote: 'ನಾನು ತಿಳಿದಿರುವ ಭಾಷೆಗಳಲ್ಲಿ ತಮಿಳಿನಷ್ಟು ಮಧುರವಾದ ಭಾಷೆಯನ್ನು ಬೇರೆಲ್ಲೂ ಕಂಡಿಲ್ಲ.',
    stoneInscriptionQuote: 'ಕಲ್ಲು ಮತ್ತು ಮಣ್ಣು ಹುಟ್ಟುವ ಮುನ್ನವೇ ಉದಯಿಸಿದ ಅತಿ ಪ್ರಾಚೀನ ನಾಗರಿಕತೆ ತಮಿಳು!',
    appTitle: 'ತಮಿಳುಬೇರು (TamilVer)',
    appSubtitle: 'ಐತಿಹಾಸಿಕ ಕಾಲಾವಧಿಗಳಲ್ಲಿ ತಮಿಳು ಪದಗಳ ವಿಕಾಸವನ್ನು ಅಧ್ಯಯನ ಮಾಡುವ ಡಿಜಿಟಲ್ ಭಾಷಾ ಸಂಶೋಧನಾ ವೇದಿಕೆ',
    searchPlaceholder: 'ಪದಗಳನ್ನು ಹುಡುಕಿ (ಉದಾ: ಗೆಳೆತನ, ಪ್ರೀತಿ, ಆಡಳಿತ)...',
    navLiterature: 'ಪ್ರಾಚೀನ ಸಾಹಿತ್ಯ',
    navScriptEvolution: 'ಲಿಪಿ ವಿಕಾಸ',
    navAiNanban: 'ಎಐ ನನ್ಬನ್ (ಹಸ್ತಪ್ರತಿ ವಾಚಕ)',
    navWordRoots: 'ಪದ ವಿಕಾಸ ಹೋಲಿಕೆ',
    navSavedResearch: 'ಉಳಿಸಿದ ಸಂಶೋಧನೆ',
    problemTitle: 'ತಮಿಳು ಪದ ವಿಕಾಸ ಸಂಶೋಧನಾ ಪರಿಕರ (P3)',
    problemSummary: 'ದಾಖಲಿತ ಸಾಹಿತ್ಯಕ ಪುರಾವೆಗಳ ಆಧಾರದ ಮೇಲೆ ಪ್ರಾಚೀನ ಮತ್ತು ಆಧುನಿಕ ತಮಿಳು ಪದಗಳ ಕಾಗುಣಿತ ಮತ್ತು ಅರ್ಥ ಬದಲಾವಣೆಗಳ ಅಧ್ಯಯನ.',
    loginEmail: 'ಇಮೇಲ್ ವಿಳಾಸ',
    loginUser: 'ಬಳಕೆದಾರ ಹೆಸರು',
    loginPass: 'ಪಾಸ್‌ವರ್ಡ್',
    loginBtn: 'ಲಾಗಿನ್ ಮಾಡಿ',
    guestBtn: 'ಅತಿಥಿಯಾಗಿ ಮುಂದುವರಿಯಿರಿ',
    keyboardToggle: 'ತಮಿಳು ಕೀಲಿಮಣೆ',
    saveResearchBtn: 'ಸಂಶೋಧನೆ ಉಳಿಸಿ',
    exportReportBtn: 'ವರದಿ ರಫ್ತು ಮಾಡಿ'
  },

  ml: {
    code: 'ml',
    nativeName: 'മലയാളം',
    englishName: 'Malayalam',
    scriptBadge: 'മ',
    flagSymbol: '🇮🇳',
    mandelaQuote: 'ഒരാൾക്ക് മനസ്സിലാകുന്ന ഭാഷയിൽ സംസാരിച്ചാൽ അത് തലച്ചോറിലെത്തും; സ്വന്തം മാതൃഭാഷയിൽ സംസാരിച്ചാൽ അത് ഹൃദയത്തെ തൊടും.',
    bharathiyarQuote: 'ഞാൻ അറിഞ്ഞ ഭാഷകളിൽ തമിഴ് പോലെ മധുരമായ മറ്റൊരു ഭാഷയും എങ്ങും കണ്ടിട്ടില്ല.',
    stoneInscriptionQuote: 'കല്ലും മണ്ണും ജനിക്കുന്നതിന് മുമ്പേ പിറന്ന മൂത്ത കുടിയാണ് തമിഴ്!',
    appTitle: 'തമിഴ്വേര് (TamilVer)',
    appSubtitle: 'ചരിത്ര കാലഘട്ടങ്ങളിലെ തമിഴ് വാക്കുകളുടെ പരിണാമം പഠിക്കുന്നതിനുള്ള ഡിജിറ്റൽ ഭാഷാശാസ്ത്ര ഗവേഷണ പ്ലാറ്റ്‌ഫോം',
    searchPlaceholder: 'വാക്ക് തിരയുക (ഉദാ: സൗഹൃദം, സ്നേഹം, ഭരണം)...',
    navLiterature: 'പ്രാചീന സാഹിത്യം',
    navScriptEvolution: 'ലിപി പരിണാമം',
    navAiNanban: 'എഐ നൺപൻ (താളിയോല വായന)',
    navWordRoots: 'പദ പരിണാമ താരതമ്യം',
    navSavedResearch: 'സംരക്ഷിച്ച ഗവേഷണം',
    problemTitle: 'തമിഴ് പദ പരിണാമ ഗവേഷണ ഉപകരണം (P3)',
    problemSummary: 'രേഖപ്പെടുത്തപ്പെട്ട സാഹിത്യ തെളിവുകളുടെ അടിസ്ഥാനത്തിൽ പഴയതും ആധുനികവുമായ തമിഴ് പദങ്ങളുടെ താരതമ്യ പഠനം.',
    loginEmail: 'ഇമെയിൽ വിലാസം',
    loginUser: 'ഉപയോക്തൃനാമം',
    loginPass: 'പാസ്‌വേഡ്',
    loginBtn: 'പ്രവേശിക്കുക',
    guestBtn: 'അതിഥിയായി തുടരുക',
    keyboardToggle: 'തമിഴ് കീബോർഡ്',
    saveResearchBtn: 'ഗവേഷണം സംരക്ഷിക്കുക',
    exportReportBtn: 'റിപ്പോർട്ട് ഡൗൺലോഡ്'
  },

  bn: {
    code: 'bn',
    nativeName: 'বাংলা',
    englishName: 'Bengali',
    scriptBadge: 'বা',
    flagSymbol: '🇮🇳',
    mandelaQuote: 'যদি আপনি কারো সাথে এমন ভাষায় কথা বলেন যা সে বোঝে, তা তার মাথায় যায়; কিন্তু যদি তার মাতৃভাষায় কথা বলেন, তা তার হৃদয়ে পৌঁছে যায়।',
    bharathiyarQuote: 'আমার জানা সমস্ত ভাষার মধ্যে তামিলের মতো মিষ্টি ভাষা আমি কোথাও দেখিনি।',
    stoneInscriptionQuote: 'প্রস্তর ও মৃত্তিকা সৃষ্টিরও পূর্বে আবির্ভূত বিশ্বের প্রাচীনতম মহাজাতি হলো তামিল!',
    appTitle: 'তামিলভের (TamilVer)',
    appSubtitle: 'ঐতিহাসিক যুগে তামিল শব্দের বিবর্তন গবেষণার ডিজিটাল ভাষাতাত্ত্বিক প্ল্যাটফর্ম',
    searchPlaceholder: 'শব্দ অনুসন্ধান করুন (যেমন: বন্ধুত্ব, প্রেম, সরকার)...',
    navLiterature: 'প্রাচীন সাহিত্য',
    navScriptEvolution: 'লিপি বিবর্তন',
    navAiNanban: 'এআই ননবন (পাণ্ডুলিপি পাঠক)',
    navWordRoots: 'শব্দ বিবর্তন তুলনা',
    navSavedResearch: 'সংরক্ষিত গবেষণা',
    problemTitle: 'তামিল শব্দ বিবর্তন গবেষণা প্ল্যাটফর্ম (P3)',
    problemSummary: 'নথিভুক্ত সাহিত্যিক প্রমাণের ভিত্তিতে প্রাচীন ও আধুনিক তামিল শব্দের বানান, অর্থ ও ব্যবহারের তুলনামূলক বিশ্লেষণ।',
    loginEmail: 'ইমেল ঠিকানা',
    loginUser: 'ব্যবহারকারীর নাম',
    loginPass: 'পাসওয়ার্ড',
    loginBtn: 'লগ ইন করুন',
    guestBtn: 'অতিথি হিসেবে প্রবেশ',
    keyboardToggle: 'তামিল কীবোর্ড',
    saveResearchBtn: 'গবেষণা সংরক্ষণ',
    exportReportBtn: 'প্রতিবেদন রপ্তানি'
  },

  or: {
    code: 'or',
    nativeName: 'ଓଡ଼ିଆ',
    englishName: 'Odia',
    scriptBadge: 'ଓ',
    flagSymbol: '🇮🇳',
    mandelaQuote: 'ଯଦି ଆପଣ କାହା ସହିତ ସେ ବୁଝୁଥିବା ଭାଷାରେ କଥା ହୁଅନ୍ତି ତେବେ ତାହା ମୁଣ୍ଡକୁ ଯାଏ; କିନ୍ତୁ ଯଦି ତାଙ୍କ ମାତୃଭାଷାରେ କଥା ହୁଅନ୍ତି ତେବେ ତାହା ହୃଦୟକୁ ଛୁଇଁଥାଏ।',
    bharathiyarQuote: 'ମୋର ଜ୍ଞାତ ସମସ୍ତ ଭାଷା ମଧ୍ୟରେ ତାମିଲ ପରି ମଧୁର ଭାଷା ମୁଁ କେଉଁଠି ଦେଖିନାହିଁ।',
    stoneInscriptionQuote: 'ପଥର ଏବଂ ମାଟି ସୃଷ୍ଟି ହେବା ପୂର୍ବରୁ ଆବିର୍ଭୂତ ବିଶ୍ୱର ସର୍ବପୁରାତନ ସଭ୍ୟତା ହେଉଛି ତାମିଲ!',
    appTitle: 'ତାମିଲଭେର୍ (TamilVer)',
    appSubtitle: 'ଐତିହାସିକ ଯୁଗରେ ତାମିଲ ଶବ୍ଦର କ୍ରମବିକାଶ ଅଧ୍ୟୟନ ପାଇଁ ଡିଜିଟାଲ୍ ଭାଷାତାତ୍ତ୍ୱିକ ମଞ୍ଚ',
    searchPlaceholder: 'ଶବ୍ଦ ଖୋଜନ୍ତୁ (ଯଥା: ବନ୍ଧୁତା, ସ୍ନେହ, ଶାସନ)...',
    navLiterature: 'ପ୍ରାଚୀନ ସାହିତ୍ୟ',
    navScriptEvolution: 'ଲିପି ବିବର୍ତ୍ତନ',
    navAiNanban: 'ଏଆଇ ନନବନ (ପୋଥି ପାଠକ)',
    navWordRoots: 'ଶବ୍ଦ ବିବର୍ତ୍ତନ ତୁଳନା',
    navSavedResearch: 'ସଂରକ୍ଷିତ ଗବେଷଣା',
    problemTitle: 'ତାମିଲ ଶବ୍ଦ ବିବର୍ତ୍ତନ ଗବେଷଣା ଉପକରଣ (P3)',
    problemSummary: 'ପ୍ରମାଣିତ ସାହିତ୍ୟିକ ପ୍ରମାଣ ଆଧାରରେ ପ୍ରାଚୀନ ଏବଂ ଆଧୁନିକ ତାମିଲ ଶବ୍ଦର ବନାନ, ଅର୍ଥ ଓ ବ୍ୟବହାର ପରିବର୍ତ୍ତନ ନିର୍ଣ୍ଣୟ।',
    loginEmail: 'ଇମେଲ୍ ଠିକଣା',
    loginUser: 'ୟୁଜର ନାମ',
    loginPass: 'ପାସୱାର୍ଡ',
    loginBtn: 'ଲଗ୍ ଇନ୍ କରନ୍ତୁ',
    guestBtn: 'ଅତିଥି ଭାବରେ ପ୍ରବେଶ',
    keyboardToggle: 'ତାମିଲ କୀବୋର୍ଡ',
    saveResearchBtn: 'ଗବେଷଣା ସଞ୍ଚୟ',
    exportReportBtn: 'ରିପୋର୍ଟ ଡାଉନଲୋଡ୍'
  }
};
