import { LiteratureWork } from '../types/tamilver';

export const TAMIL_LITERATURE_CORPUS: LiteratureWork[] = [
  // ---------------- எட்டுத்தொகை (Ettuthogai - 8 Anthologies) ----------------
  {
    id: 'lit-natrinai',
    nameTamil: 'நற்றிணை',
    nameEnglish: 'Natrinai',
    author: 'பல்வேறு சங்கப் புலவர்கள் (தொகுத்தவர்: பன்னாடு தந்த மாறன் வழுதி)',
    period: 'சங்க காலம் (கி.மு. 300 - கி.பி. 200)',
    category: 'ettuthogai',
    specialFeature: 'காதல், அன்பு, இயற்கை வளம் சார்ந்த 400 அகத்திணைப் பாடல்கள்',
    poemSample: {
      verse: 'நின்ற சொல்லர்; நீடுதோன் றினியர்;\nஎன்றும் என் தோள் பிரிபு அறியலரே;\nதாமரைத் தண்தாது ஊதி, மீமிசைச்\nசாந்தின் தொடுத்த தீந்தேன் போல,\nஇனிய மன்ற அவர் திறம்!',
      explanation: 'அவர் சொன்ன சொல் தவறாதவர்; என்றும் என்னைப் பிரியாதவர்; தாமரை மலர் தாதுண்டு, சந்தன மரத்தில் வைத்த தூய தேனைப் போல அவர் அன்பு இனிமையானது.',
      englishSummary: 'His promises are unwavering; his sweet love is like pure honey distilled from lotus pollen on a fragrant sandalwood bough.'
    },
    keywords: ['காதல்', 'அன்பு', 'இயற்கை', 'அகம்', 'love', 'nature', 'friendship', 'நட்பு']
  },
  {
    id: 'lit-kurunthogai',
    nameTamil: 'குறுந்தொகை',
    nameEnglish: 'Kurunthogai',
    author: 'பல்வேறு சங்கப் புலவர்கள் (தொகுத்தவர்: பூரிக்கோ)',
    period: 'சங்க காலம் (கி.மு. 200 - கி.பி. 100)',
    category: 'ettuthogai',
    specialFeature: 'காதல் உணர்வுகளைச் சொல்லும் குறும்பாடல்கள் (4 முதல் 8 அடிகள்)',
    poemSample: {
      verse: 'யாயும் ஞாயும் யாரா கியரோ?\nஎந்தையும் நுந்தையும் எம்முறைக் கேளிர்?\nயானும் நீயும் எவ்வழி அறிதும்?\nசெம்புலப் பெயல்நீர் போல,\nஅன்புடை நெஞ்சம் தாம் கலந்தனவே!',
      explanation: 'என் தாயும் உன் தாயும் எவ்வகையில் உறவினர்? என் தந்தையும் உன் தந்தையும் எந்த முறைப்படி கேளிர்? ஆயினும், செம்மண் நிலத்தில் பெய்த மழைநீர் போல நம் அன்பு நெஞ்சங்கள் ஒன்றோடொன்று கலந்தன.',
      englishSummary: 'What kin was my mother to yours? Or my father to yours? Yet like red earth and pouring rain, our hearts in love have blended.'
    },
    keywords: ['காதல்', 'நட்பு', 'உணர்வு', 'friendship', 'love', 'மழை', 'rain', 'நெஞ்சம்', 'heart']
  },
  {
    id: 'lit-aingurunooru',
    nameTamil: 'ஐங்குறுநூறு',
    nameEnglish: 'Aingurunooru',
    author: 'ஓரம்போகியார், கபிலர், பேயனார், அம்மூவனார், ஓதலாந்தையார்',
    period: 'சங்க காலம் (கி.மு. 100 - கி.பி. 200)',
    category: 'ettuthogai',
    specialFeature: 'ஐந்திணை சார்ந்த காதல் பாடல்கள் (திணைக்கு நூறு பாடல்கள் வீதம் 500 பாடல்கள்)',
    poemSample: {
      verse: 'வாழி ஆதன்! வாழி அவினி!\nநெற்பல பொலிக! பொன்பெரிது சிறக்க!\nஎனவேட்டோளே யாயே! யாமே\nபூத்த மாஅத்து மெல்லிணர்த் தாதின்\nஈயடி யோர்க்கும் பூந்தண் சுனையே!',
      explanation: 'ஆதன் வாழ்க! அவினி வாழ்க! நெல் விளைச்சல் பெருகட்டும்! செல்வம் சிறக்கட்டும் என்று தாய் வேண்டினாள். நாங்களோ பூத்த மாமரத்துத் தாது மலரும் குளிர்ந்த சுனையை விரும்பினோம்.',
      englishSummary: 'The elders prayed for golden grain and wealth; we longed for the cool mountain pool bordered by blossoming mango trees.'
    },
    keywords: ['ஐந்திணை', 'காதல்', 'குறிஞ்சி', 'முல்லை', 'மருதம்', 'நெய்தல்', 'பாலை']
  },
  {
    id: 'lit-pathitrupathu',
    nameTamil: 'பதிற்றுப்பத்து',
    nameEnglish: 'Pathitrupathu',
    author: 'குமட்டூர்க் கண்ணனார், பாலைக் கௌதமனார், காப்பியாற்றுக் காப்பியனார் முதலியோர்',
    period: 'சங்க காலம் (கி.பி. 1ஆம் - 3ஆம் நூற்றாண்டு)',
    category: 'ettuthogai',
    specialFeature: 'சேர மன்னர்கள், அவர்களின் சிறப்புகள், வீரம், கொடைத் திறன்',
    poemSample: {
      verse: 'இமிழ் கடல் வளைஇய ஈண்டு அகன் கிடக்கைத்\nதமிழ் தலைமயங்கிய தலையாலங்கானத்து,\nமண்முழுதும் ஒருங்குடைக் கவித்து,\nபுரையோர் தொழுகழல் சேரலாதன்!',
      explanation: 'கடல் சூழ்ந்த தமிழகத்தின் பெரும் நிலப்பரப்பில் வாழும் குடிமக்களுக்கு இன்னருள் பாலித்து ஆட்சி செய்த சேர மன்னனின் அருமை பெருமைகள்.',
      englishSummary: 'O Chera King, whose golden ankleted feet are revered by nobles across the sea-girt Tamil lands.'
    },
    keywords: ['சேர மன்னர்', 'வீரம்', 'கொடை', 'அரசன்', 'king', 'war', 'போர்']
  },
  {
    id: 'lit-paripaadal',
    nameTamil: 'பரிபாடல்',
    nameEnglish: 'Paripaadal',
    author: 'இளம்பெருவழுதி, கடியலூர் உருத்திரங்கண்ணனார் முதலியோர்',
    period: 'சங்க காலம் (கி.பி. 1ஆம் - 2ஆம் நூற்றாண்டு)',
    category: 'ettuthogai',
    specialFeature: 'இயற்கை, இசை, வைகை நதி, திருமால், முருகப் பெருமான் தெய்வ வழிபாடு',
    poemSample: {
      verse: 'மாயோன் கொப்பூழ் மலர்ந்த தாமரைப்\nபூவொடு புரையுஞ் சீரூர், பூவின்\nஇதழகத் தனைய தெருவம், இதழகத்து\nஅரும்பொகுட் டனைத்தே அண்ணல் கோயில்!',
      explanation: 'திருமாலின் உந்திக் கமல மலர் போன்றது மதுரை மாநகரம்; அதன் தாமரை இதழ்கள் போன்றன நகரின் தெருக்கள்; அதன் நடுவே உள்ள பொகுட்டு போன்றது சொக்கநாதர் ஆலயம்.',
      englishSummary: 'Madurai is fashioned like the sacred lotus blooming from the navel of the Lord; its petals are streets, and its core is the shrine.'
    },
    keywords: ['இயற்கை', 'இசை', 'தெய்வ வழிபாடு', 'வைகை', 'மதுரை', 'music', 'temple']
  },
  {
    id: 'lit-kalithogai',
    nameTamil: 'கலித்தொகை',
    nameEnglish: 'Kalithogai',
    author: 'நல்லந்துவனார், கபிலர், மருதன் இளநாகனார் முதலியோர்',
    period: 'சங்க காலம் (கி.பி. 2ஆம் நூற்றாண்டு)',
    category: 'ettuthogai',
    specialFeature: 'துள்ளல் ஓசை கொண்ட கலிப்பாவால் அமைந்த காதல் மற்றும் வாழ்வியல் அறநெறிகள்',
    poemSample: {
      verse: 'ஆற்றுதல் என்பது ஒன்று அலந்தவர்க்கு உதவுதல்;\nபோற்றுதல் என்பது புணர்ந்தாரைப் பிரியாமை;\nபண்பெனப் படுவது பாடறிந்து ஒழுகுதல்;\nஅன்பெனப் படுவது தன்கிளை செறாஅமை;\nஅறிவெனப் படுவது பேதையார் சொல்நோன்றல்;\nசெறிவெனப் படுவது கூறியது மறாஅமை!',
      explanation: 'ஆற்றுதல் என்பது வறியவர்க்கு உதவுதல்; போற்றுதல் என்பது சேர்ந்தவரைப் பிரியாமல் பாதுகாத்தல்; பண்பு என்பது உலக நடையறிந்து நடத்தல்; அன்பு என்பது உறவினரை வெறுக்காமல் இருத்தல்.',
      englishSummary: 'Benevolence is aiding the suffering; loyalty is not deserting kin; virtue is attuned conduct; love is embracing your kindred.'
    },
    keywords: ['பண்பு', 'அன்பு', 'அறம்', 'வாழ்வியல்', 'virtue', 'love', 'morals', 'நட்பு']
  },
  {
    id: 'lit-agananooru',
    nameTamil: 'அகநானூறு',
    nameEnglish: 'Agananooru',
    author: '145 சங்கப் புலவர்கள் (தொகுத்தவர்: உருத்திரசன்மர்)',
    period: 'சங்க காலம் (கி.மு. 200 - கி.பி. 200)',
    category: 'ettuthogai',
    specialFeature: 'காதல், பிரிவு, காத்திருத்தல் போன்ற அக உணர்வுகளை விரிவாகக் கூறும் 400 பாடல்கள்',
    poemSample: {
      verse: 'யானே ஈண்டை யேனே; என்நலனே\nஏனல் காவலர் கவணொலி வெரீஇ,\nகான யானை கைதெற முறிந்த\nகடுங்கண் வேழத்து மருப்புப்போல்\nபிரிந்தன்று மாதோ பெருங்களிற்றுக் கோவே!',
      explanation: 'நான் இங்கு தனித்திருக்கிறேன்; தலைவனைப் பிரிந்த ஏக்கத்தால் என் அழகு யானைத் தந்தம் உடைந்தாற்போல பொலிவிழந்து வாடுகின்றது.',
      englishSummary: 'Left alone in separation, my maiden beauty wanes like the ivory tusks snapped in forest trails.'
    },
    keywords: ['காதல்', 'பிரிவு', 'காத்திருத்தல்', 'அகம்', 'love', 'separation']
  },
  {
    id: 'lit-purananooru',
    nameTamil: 'புறநானூறு',
    nameEnglish: 'Purananooru',
    author: 'ஒளவையார், கபிலர், நக்கீரர், பிசிராந்தையார் உள்ளிட்ட 157 புலவர்கள்',
    period: 'சங்க காலம் (கி.மு. 300 - கி.பி. 200)',
    category: 'ettuthogai',
    specialFeature: 'வீரம், கொடை, போர், மன்னர்கள், தமிழர்களின் சமூகப் பண்பாடு, மனிதநேயம்',
    poemSample: {
      verse: 'யாதும் ஊரே; யாவரும் கேளிர்;\nதீதும் நன்றும் பிறர்தர வாரா;\nநோதலும் தணிதலும் அவற்றோ ரன்ன;\nசாதலும் புதுவது அன்றே; வாழ்தல்\nஇனிதுஎன மகிழ்ந்தன்றும் இலமே; முனிவின்\nஇன்னாது என்றலும் இலமே!',
      explanation: 'எல்லா ஊரும் எம் ஊரே; எல்லா மக்களும் எம் உறவினரே. நன்மையும் தீமையும் பிறரால் வருவதில்லை; துன்பமும் அதன் தணிவும் அத்தகையதே. சாவும் புதிதல்ல; வாழ்வு இனிது என்று மகிழ்ந்ததுமில்லை, இன்னாதென்று வெறுத்ததுமில்லை.',
      englishSummary: 'Every city is our home, every human our kin. Good and evil come not from others. Death is nothing new; we neither fawn over life nor recoil from hardship.'
    },
    keywords: ['வீரம்', 'கொடை', 'கேளிர்', 'நட்பு', 'மனிதநேயம்', 'friendship', 'kinship', 'humanity', 'world']
  },

  // ---------------- பத்துப்பாட்டு (Pathuppattu - 10 Idylls) ----------------
  {
    id: 'lit-thirumurugatruppadai',
    nameTamil: 'திருமுருகாற்றுப்படை',
    nameEnglish: 'Thirumurugatruppadai',
    author: 'நக்கீரர்',
    period: 'சங்க காலம் (கி.பி. 1ஆம் - 2ஆம் நூற்றாண்டு)',
    category: 'pathuppattu',
    specialFeature: 'முருக வழிபாடு, ஆறுபடை வீடுகள், பக்தி நெறி',
    poemSample: {
      verse: 'உலகம் உவப்ப வலனேர்பு திரிதரு\nபலர்புகழ் ஞாயிறு கடற்கண் டாஅங்கு,\nஓஅற இமைக்கும் சேண்விளங்கு அவிர்ஒளி,\nஉறுநர்த் தாங்கிய மதன்உடை நோன்தாள்,\nசெவ்வேல் சேவடி பரவுதும் யாமே!',
      explanation: 'உலகம் மகிழுமாறு கடலிலிருந்து தோன்றும் பரிதிபோல பேரொளியோடு திகழும் முருகப் பெருமானின் திருவடிகளைத் தொழுகின்றோம்.',
      englishSummary: 'Like the radiant sun ascending from morning oceans to gladden the earth, we bow at the sacred feet of Lord Murugan.'
    },
    keywords: ['முருகன்', 'பக்தி', 'வழிபாடு', 'ஆற்றுப்படை', 'worship', 'devotion']
  },
  {
    id: 'lit-porunaratruppadai',
    nameTamil: 'பொருநராற்றுப்படை',
    nameEnglish: 'Porunaratruppadai',
    author: 'முடத்தாமக்கண்ணியார்',
    period: 'சங்க காலம்',
    category: 'pathuppattu',
    specialFeature: 'கலைஞர்களும் வள்ளல்களும், சோழன் கரிகால் பெருவளத்தானின் கொடைச் சிறப்பு',
    poemSample: {
      verse: 'கல்லா இளைஞர் கவளம் கைப்பற்ற,\nவல்லோன் புகுந்த வான்படர் அடுக்கத்து,\nகரிகால் வளவன் காட்டிய அருங்கொடை!',
      explanation: 'இசைக்கலைஞரான பொருநரை ஆதரித்து பரிசளித்த கரிகால் வளவனின் வண்டமிழ் வள்ளன்மை.',
      englishSummary: 'The bounty bestowed by King Karikalan upon wandering poets, rewarding song and artistry.'
    },
    keywords: ['கரிகாலன்', 'கலைஞர்கள்', 'வள்ளல்', 'கொடை', 'patronage', 'generosity']
  },
  {
    id: 'lit-sirupanatruppadai',
    nameTamil: 'சிறுபாணாற்றுப்படை',
    nameEnglish: 'Sirupanatruppadai',
    author: 'இடைக்கழிநாட்டு நல்லூர் நத்தத்தனார்',
    period: 'சங்க காலம்',
    category: 'pathuppattu',
    specialFeature: 'சிறுபாணர்களின் பயணமும், கடையெழு வள்ளல்களின் கொடை வரலாறும்',
    poemSample: {
      verse: 'வானம்பாத்த வறங்கோள் பக்குவத்து,\nநல்லியக் கோடன் நல்கிய கொடைத்திறம்!',
      explanation: 'மழை வேண்டி நிற்கும் வானம்பாடி பறவை போல துயர் துடைத்த நல்லியக்கோடனின் கருணை உள்ளம்.',
      englishSummary: 'The boundless benevolence of Nalliyakkodan sheltering traveling minstrels in harsh drought.'
    },
    keywords: ['வள்ளல்கள்', 'கொடை', 'பயணம்', 'travel', 'generosity']
  },
  {
    id: 'lit-perumpanatruppadai',
    nameTamil: 'பெரும்பாணாற்றுப்படை',
    nameEnglish: 'Perumpanatruppadai',
    author: 'கடியலூர் உருத்திரங்கண்ணனார்',
    period: 'சங்க காலம்',
    category: 'pathuppattu',
    specialFeature: 'பெரும்பாணர்களும் தொண்டைமான் இளந்திரையனின் அரச ஆதரவும் பண்பாடும்',
    poemSample: {
      verse: 'பாணர் தாங்கிய பைந்தமிழ்க் கோமான்\nகாஞ்சிபுரத்து இளந்திரையன் தாள்கொடை!',
      explanation: 'யாழ் மீட்டும் பாணர்களை காஞ்சி மாநகருக்கு வழிநடத்தி தொண்டைமான் வழங்கிய நல்வரவு.',
      englishSummary: 'Directing musicians to Kanchipuram to receive royal hospitality from ruler Ilanthirayan.'
    },
    keywords: ['தொண்டைமான்', 'காஞ்சி', 'இசை', 'music', 'hospitality']
  },
  {
    id: 'lit-mullaippattu',
    nameTamil: 'முல்லைப்பாட்டு',
    nameEnglish: 'Mullaippattu',
    author: 'நப்பூதனார்',
    period: 'சங்க காலம்',
    category: 'pathuppattu',
    specialFeature: 'காத்திருத்தல், பிரிவு, முல்லை நிலத்து ஆற்றி இருத்தல் பண்பு',
    poemSample: {
      verse: 'நனந்தலை உலகம் வளைஇ நேமியொடு\nவலம்புரி பொறித்த மாதாங்கு தடக்கை\nநீர்செல, நிமிர்ந்த மாஅல் போல,\nபாடுஇமிழ் பனிக்கடல் பருகி, வலனேர்பு\nகோடுகொண்டு எழுந்த கொடுஞ்செலவு எழிலி!',
      explanation: 'திருமால் விண்ணுக்கும் மண்ணுக்குமாய் பேருருவம் எடுத்தது போல, கடலின் நீரை உட்கொண்டு வலமாக எழுந்து கார்மேகம் மழை பொழியத் தொடங்கியது.',
      englishSummary: 'Rising like Vishnu striding across worlds after absorbing the roaring ocean, the monsoon clouds deluge the woodlands.'
    },
    keywords: ['காத்திருத்தல்', 'முல்லை', 'மழை', 'பிரிவு', 'rain', 'patience']
  },
  {
    id: 'lit-maduraikkanji',
    nameTamil: 'மதுரைக்காஞ்சி',
    nameEnglish: 'Maduraikkanji',
    author: 'மாங்குடி மருதனார்',
    period: 'சங்க காலம்',
    category: 'pathuppattu',
    specialFeature: 'மதுரை நகரமும் அக்கால வாழ்க்கையும், பாண்டியன் நெடுஞ்செழியனுக்கு நிலையாமை உணர்த்துதல்',
    poemSample: {
      verse: 'ஓங்குசீர் மதுரை மன்னவன் வாழ்கென,\nநாளங்காடி அல்லங்காடி இரண்டிலும்\nகாவலர் ஓம்பும் கவின்நகர் மாண்பு!',
      explanation: 'பகலில் செயல்படும் நாளங்காடி, இரவிலும் செயல்படும் அல்லங்காடி என சதா விழித்திருக்கும் மதுரை நகரின் வணிக மாண்பு.',
      englishSummary: 'The eternal glory of Madurai, bustling day and night through twin day-markets and night-markets.'
    },
    keywords: ['மதுரை', 'நகரம்', 'வணிகம்', 'city', 'trade', 'history']
  },
  {
    id: 'lit-nedunalvaadai',
    nameTamil: 'நெடுநல்வாடை',
    nameEnglish: 'Nedunalvaadai',
    author: 'நக்கீரர்',
    period: 'சங்க காலம்',
    category: 'pathuppattu',
    specialFeature: 'பிரிவுணர்வும் அரண்மனைச் சூழலும், போர்க்களத்தில் அரசனின் காவல்',
    poemSample: {
      verse: 'வையகம் பனிப்ப வலனேர்பு வளைஇ\nபொய்யா வானம் புதுப்பெயல் பொழிந்தென,\nவாடை வீசும் குளிர்காலத்து அரசியின் பிரிவுத்துயர்!',
      explanation: 'குளிர்கால வாடைக்காற்றில் தலைவனைப் பிரிந்த அரசி அரண்மனையிலும், காயம்பட்ட வீரர்களை நள்ளிரவில் அரசன் போர்ப்பாசறையிலும் காணும் காட்சி.',
      englishSummary: 'The bitter north wind weeping over the lonely queen in palace towers while her king tends wounded soldiers under starlight.'
    },
    keywords: ['வாடை', 'பிரிவு', 'அரண்மனை', 'போர்க்களம்', 'palace', 'winter']
  },
  {
    id: 'lit-kurinjippattu',
    nameTamil: 'குறிஞ்சிப்பாட்டு',
    nameEnglish: 'Kurinjippattu',
    author: 'கபிலர்',
    period: 'சங்க காலம்',
    category: 'pathuppattu',
    specialFeature: 'மலைநிலக் காதல், 99 வகையான பழந்தமிழ்ப் பூக்களின் ஒப்பற்ற பட்டியல்',
    poemSample: {
      verse: 'ஆம்பல், குவளை, காந்தள், செங்காந்தள்,\nகுளவி, மல்லிகை, குருக்கத்தி, பாதிரி...\nதொண்ணூற்று ஒன்பது மலர்களைக் கொய்த மரபு!',
      explanation: 'கபிலர் மலைச்சாரலில் மலரும் 99 வகையான மலர்களின் பெயர்களை வரிசைப்படுத்தி இயற்கையோடு இயைந்த தமிழ்க் காதலை பாடிய நூல்.',
      englishSummary: 'A glorious botanical catalog of 99 distinct flowers blooming across misted mountain crags.'
    },
    keywords: ['பூக்கள்', 'மலர்கள்', 'குறிஞ்சி', 'இயற்கை', 'flowers', 'nature', 'botany']
  },
  {
    id: 'lit-pattinappaalai',
    nameTamil: 'பட்டினப்பாலை',
    nameEnglish: 'Pattinappaalai',
    author: 'கடியலூர் உருத்திரங்கண்ணனார்',
    period: 'சங்க காலம்',
    category: 'pathuppattu',
    specialFeature: 'காவிரிப்பூம்பட்டினம், சர்வதேசக் கடல் வணிகம், நகர வாழ்க்கை, கரிகாலன் வீரம்',
    poemSample: {
      verse: 'நீரின் வந்த நிமிர்பரிப் புரவியும்,\nகாலின் வந்த கருங்கறி மூடையும்,\nவடமலைப் பிறந்த மணியும் பொன்னும்,\nகுடமலைப் பிறந்த ஆரமும் அகிலும்,\nதென்கடல் முத்தும் குணகடல் துகிரும்!',
      explanation: 'காவிரிப்பூம்பட்டினத் துறைமுகத்தில் கடல்வழியே வந்த குதிரைகள், தரைவழியே வந்த மிளகு மூட்டைகள், வடமலையின் பொன்னும் மணியும் குவிந்த பன்னாட்டு வாணிபம்.',
      englishSummary: 'Arabian horses landed by ships, black pepper sacks by cart, northern gold and southern pearls flooding ancient Poompuhar port.'
    },
    keywords: ['பூம்புகார்', 'வணிகம்', 'துறைமுகம்', 'கப்பல்', 'port', 'trade', 'commerce']
  },
  {
    id: 'lit-malaipadukadaam',
    nameTamil: 'மலைபடுகடாம்',
    nameEnglish: 'Malaipadukadaam',
    author: 'இரணியமுட்டத்துப் பெருங்குன்றூர்ப் பெருங்கௌசிகனார்',
    period: 'சங்க காலம்',
    category: 'pathuppattu',
    specialFeature: 'மலைநிலம், பயணம், இயற்கையின் பலவகை ஓசைகள் (கூத்தராற்றுப்படை)',
    poemSample: {
      verse: 'அருவி முழங்கும் அருவரை அடுக்கத்து\nமலைபடுகடாம் எனும் இயற்கைப் பேரொலி!',
      explanation: 'யானையின் மத்தகம் போலவும் அருவிகளின் முழக்கம் போலவும் மலையில் எழும் இயற்கை ஒலிகளின் சங்கமம்.',
      englishSummary: 'Echoing symphony of roaring cascades and trumpeting mountain elephants resounding off towering cliffs.'
    },
    keywords: ['மலை', 'இயற்கை', 'ஓசை', 'அருவி', 'mountain', 'sound', 'nature']
  },

  // ---------------- பதினெண்கீழ்க்கணக்கு (18 Minor Works) ----------------
  {
    id: 'lit-thirukkural',
    nameTamil: 'திருக்குறள்',
    nameEnglish: 'Thirukkural',
    author: 'திருவள்ளுவர்',
    period: 'கி.மு. 1ஆம் - கி.பி. 1ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'அறம், பொருள், இன்பம் என்ற முப்பால் நெறி; உலகப் பொதுமறை (1330 குறள்கள்)',
    poemSample: {
      verse: 'உடுக்கை இழந்தவன் கைபோல ஆங்கே\nஇடுக்கண் களைவதாம் நட்பு.',
      explanation: 'ஆடை நழுவும் போது ஒருவனது கை தாமாகவே சென்று காப்பது போல, நண்பனுக்குத் துன்பம் வந்த கணமே விரைந்து சென்று அத்துன்பத்தைப் போக்குவதே உண்மையான நட்பு.',
      englishSummary: 'True friendship rushes unasked to relieve another’s grief, as swift as a hand darting to catch falling garments.'
    },
    keywords: ['நட்பு', 'அறம்', 'பொருள்', 'இன்பம்', 'friendship', 'morals', 'ethics', 'virtue']
  },
  {
    id: 'lit-thinaimozhi-aimpathu',
    nameTamil: 'திணைமொழி ஐம்பது',
    nameEnglish: 'Thinaimozhi Aimpathu',
    author: 'கண்ணன் சேந்தனார்',
    period: 'கி.பி. 5ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'திணை சார்ந்த காதல் மரபுகள் (50 பாடல்கள்)',
    poemSample: {
      verse: 'முல்லை நறுமலர் மெல்ல அவிழ்ந்தன;\nசொல்லிய காலம் இதுவெனக் காட்டிட\nவந்தனன் காதலன் தேர்!',
      explanation: 'கார்கால முல்லை மலர்கள் மலர்ந்தன; வாக்குறுதி அளித்த பருவம் வந்துவிட்டது என்று காதலன் தன் தேரில் வந்தணைந்தான்.',
      englishSummary: 'The jasmine buds unfurl to announce the promised season, and the lover’s chariot returns home.'
    },
    keywords: ['முல்லை', 'திணை', 'காதல்', 'love', 'seasons']
  },
  {
    id: 'lit-thinaimaalai-nootraimpathu',
    nameTamil: 'திணைமாலை நூற்றைம்பது',
    nameEnglish: 'Thinaimaalai Nootraimpathu',
    author: 'கணிமேதாவியார்',
    period: 'கி.பி. 5ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'ஐந்திணை வாழ்வியல் மற்றும் தமிழ்க் காதல் பண்பாடு (150 பாடல்கள்)',
    poemSample: {
      verse: 'நன்மணல் ஞெமிர்த்த நறுந்தண் பொழிலகத்து\nஇன்மணம் பூத்த இளவேனில் நல்வரவு!',
      explanation: 'தூய வெண்மணல் பரப்பிய கடற்கரைச் சோலையில் பூக்கள் மலர்ந்து மணம் வீசும் இனிய இளவேனிற் காலம்.',
      englishSummary: 'Springtime blossoms blooming sweetly along shores dusted with fragrant pristine sand.'
    },
    keywords: ['ஐந்திணை', 'காதல்', 'வாழ்வியல்', 'spring', 'love']
  },
  {
    id: 'lit-thirikadugam',
    nameTamil: 'திரிகடுகம்',
    nameEnglish: 'Thirikadugam',
    author: 'நல்லாதனார்',
    period: 'கி.பி. 5ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'சுக்கு, மிளகு, திப்பிலி போல ஒவ்வொரு பாடலிலும் மூன்று கருத்துகளைக் கொண்டு அறம் புகட்டுதல்',
    poemSample: {
      verse: 'கொல்லான் புலாலை மறுத்தானை எல்லாரும்\nகைமுகிழ்த்துத் தொழுது ஏத்தும் பண்பு,\nபிறன்மனை நோக்காத பேராண்மை,\nஇம்மூன்றும் ஆன்றோர்க்கு அழகு!',
      explanation: 'உயிர்களைக் கொல்லாமை, புலால் மறுத்தல், பிறன் மனைவியைப் பார்க்காத தூய பேராண்மை ஆகிய மூன்றும் சான்றோரின் அணிகலன்கள்.',
      englishSummary: 'Non-violence towards all living beings, abstaining from meat, and pure fidelity: these three crown noble minds.'
    },
    keywords: ['அறம்', 'மருத்துவம்', 'அறிவு', 'ethics', 'wisdom', 'health']
  },
  {
    id: 'lit-aasarakkovai',
    nameTamil: 'ஆசாரக்கோவை',
    nameEnglish: 'Aasarakkovai',
    author: 'பெருவாயின் முள்ளியார்',
    period: 'கி.பி. 5ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'தினசரி ஒழுக்கமும், தூய்மையும், சமுதாய நடைமுறைகளும்',
    poemSample: {
      verse: 'நன்றி அறிதல் பொறையுடைமை இன்சொல்லோடு\nஇன்னாத எவ்வுயிர்க்கும் செய்யாமை கல்வியோடு\nஒப்புரவு ஆற்ற அறிதல் அறிவுடைமை\nநல்லினத்தாரோடு நட்டல் இவை எட்டும்\nசொல்லிய ஆசார வித்து!',
      explanation: 'செய்த உதவியை மறவாமை, பொறுமை, இன்சொல், பிற உயிர்களுக்குத் துன்பம் செய்யாமை, நல்லோருடன் நட்பு கொள்ளுதல் ஆகிய எட்டும் உயர்ந்த வாழ்வின் விதைகள்.',
      englishSummary: 'Gratitude, forbearance, sweet speech, compassion, learning, civic charity, and noble friendship: the seeds of righteous living.'
    },
    keywords: ['ஒழுக்கம்', 'தூய்மை', 'நட்பு', 'friendship', 'conduct', 'morals']
  },
  {
    id: 'lit-pazhamozhi-nanooru',
    nameTamil: 'பழமொழி நானூறு',
    nameEnglish: 'Pazhamozhi Nanooru',
    author: 'முன்றுறை அரையனார்',
    period: 'கி.பி. 5ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'பாடலின் இறுதியில் புகழ்பெற்ற பழமொழிகளை அமைத்து அனுபவ அறிவு புகட்டுதல்',
    poemSample: {
      verse: 'ஆற்றவும் கற்றார் அறிவுடையார் அஃதுடையார்\nநாற்றிசையும் செல்லாத நாடில்லை அந்நாடு\nவேற்றுநாடு ஆகா தமவேயாம் ஆயினால்\nஆற்றுணா வேண்டுவது இல்!',
      explanation: 'நன்கு கற்றறிந்த அறிஞருக்குச் செல்லாத நாடே இல்லை; அந்நாடு வேற்று நாடாகாது தன் சொந்த நாடேயாகும். ஆதலால் வழிச்செலவுக்கு கட்டுச்சோறு கூட தேவையில்லை.',
      englishSummary: 'For the truly learned, no foreign land is alien; wisdom is a universal home that needs no travel provisions.'
    },
    keywords: ['பழமொழி', 'அறிவு', 'கல்வி', 'proverb', 'education', 'wisdom']
  },
  {
    id: 'lit-sirupanchamoolam',
    nameTamil: 'சிறுபஞ்சமூலம்',
    nameEnglish: 'Sirupanchamoolam',
    author: 'காரியாசான்',
    period: 'கி.பி. 5ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'ஐந்து மூலிகைகளின் வேர் போல ஒவ்வொரு பாடலிலும் ஐந்து அறக் கருத்துகள்',
    poemSample: {
      verse: 'கண்ணுக்கு அழகு இரக்கம்; காலுக்கு அழகு நல்லோர்பால் செல்லுதல்;\nஎண்ணுக்கு அழகு உண்மையறிதல்; நாவுக்கு அழகு வாய்மை!',
      explanation: 'கண்களுக்கு உண்மையான அழகு இரக்கம் காட்டுதல்; நாவிற்கு அழகு உண்மை பேசுதல்; அறிவுக்கு அழகு உள்ளதை உள்ளபடி அறிதல்.',
      englishSummary: 'The eye’s true grace is mercy; the tongue’s jewel is truthfulness; the intellect’s beauty is discerning wisdom.'
    },
    keywords: ['அறம்', 'கருணை', 'வாய்மை', 'truth', 'mercy', 'virtue']
  },
  {
    id: 'lit-muthumozhikkanji',
    nameTamil: 'முதுமொழிக்காஞ்சி',
    nameEnglish: 'Muthumozhikkanji',
    author: 'மதுரைக்கூடலூர் கிழார்',
    period: 'கி.பி. 5ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'வாழ்க்கை அனுபவம், முதுமொழிகள், சுருக்கமான வாழ்வியல் உண்மைகள்',
    poemSample: {
      verse: 'கற்றலின் கற்றாரை வழிபடுதல் சிறந்தன்று;\nசெற்றாரைச் செறுத்தலின் இன்சொல் சிறந்தன்று!',
      explanation: 'நூல்களைக் கற்பதை விட கற்றறிந்த பெரியோரை வணங்கிப் பின்பற்றுதல் சிறந்தது; பகைவரைத் தண்டிப்பதை விட இன்சொல் பேசுதல் சிறந்தது.',
      englishSummary: 'Better than bookish lore is venerating the wise; sweeter than vengeance is kind speech.'
    },
    keywords: ['அனுபவம்', 'இன்சொல்', 'முதுமொழி', 'wisdom', 'speech']
  },
  {
    id: 'lit-elathi',
    nameTamil: 'ஏலாதி',
    nameEnglish: 'Elathi',
    author: 'கணிமேதாவியார்',
    period: 'கி.பி. 5ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'ஏலம் உள்ளிட்ட ஆறு மருந்துச் சரக்குகள் போல ஆறு நற்கருத்துகள்',
    poemSample: {
      verse: 'கொலை அஞ்சான், பொய் அஞ்சான், கோபம் திருத்தான்,\nஇலை அஞ்சான் ஈவார் முன் நில்லான் - இவன்\nதலை ஆய மூடர் தலை!',
      explanation: 'கொலை செய்ய அஞ்சாதவனும், பொய் பேச அஞ்சுவதும் இல்லாதவனும், கோபத்தை அடக்காதவனும் மூடரில் மூடன்.',
      englishSummary: 'He who fears neither murder nor falsehood, who tames not his anger, is the crown among fools.'
    },
    keywords: ['மருந்து', 'அறம்', 'நல்வழி', 'virtue', 'healing']
  },
  {
    id: 'lit-kainnilai',
    nameTamil: 'கைந்நிலை',
    nameEnglish: 'Kainnilai',
    author: 'புல்லங்காடனார்',
    period: 'கி.பி. 5ஆம் நூற்றாண்டு',
    category: 'pathinenkeelkanakku',
    specialFeature: 'ஐந்திணை சார்ந்த காதல் ஒழுக்கம் (திணைக்கு 12 பாடல்கள் வீதம் 60 பாடல்கள்)',
    poemSample: {
      verse: 'கார்மழை பொழிந்த காதலர் நல்வரவு கண்டு\nபூரித்த நெஞ்சின் பூங்கொடி மகிழ்ச்சி!',
      explanation: 'கார்முகில் பொழியும் மழைக் காலத்தில் தலைவனின் வருகை கண்டு அகமகிழ்ந்த தலைவி.',
      englishSummary: 'The blossoming joy of the maiden as rain clouds gather and her beloved returns.'
    },
    keywords: ['ஐந்திணை', 'காதல்', 'மழை', 'love', 'rain']
  },

  // ---------------- தமிழின் ஐம்பெரும் காப்பியங்கள் ----------------
  {
    id: 'lit-silappathikaram',
    nameTamil: 'சிலப்பதிகாரம்',
    nameEnglish: 'Silappathikaram',
    author: 'இளங்கோ அடிகள்',
    period: 'கி.பி. 2ஆம் - 5ஆம் நூற்றாண்டு',
    category: 'aimperum_kappiyam',
    specialFeature: 'கண்ணகி, கோவலன், மாதவி; அரசியற் பிழைத்தோர்க்கு அறங்கூற்றாவதூஉம், உரைசால் பத்தினியை உயர்ந்தோர் ஏத்தலும்',
    poemSample: {
      verse: 'திங்களைப் போற்றுதும்! திங்களைப் போற்றுதும்!\nகொங்கலர்தார்ச் சென்னி குளிர்வெண் குடைபோன்றிவ்\nவங்கண் உலகுஅளித்த லான்!\nஞாயிறு போற்றுதும்! ஞாயிறு போற்றுதும்!\nகாவிரி நாடன் திகிரிபோற் பொற்கோட்டு\nமேரு வலந்திரித லான்!',
      explanation: 'சோழ மன்னனின் குளிர்ந்த வெண்கொற்றக் குடைபோல உலகிற்கு அருள்புரியும் சந்திரனைப் போற்றுவோம்! மன்னனின் ஆணைச் சக்கரம் போல மேரு மலையை வலம்வரும் கதிரவனைப் போற்றுவோம்!',
      englishSummary: 'Praise be to the Moon, gentle as the King’s white canopy! Praise be to the Sun, turning like his golden wheel of justice!'
    },
    keywords: ['கண்ணகி', 'கோவலன்', 'சிலம்பு', 'நீதி', 'justice', 'chastity', 'epic']
  },
  {
    id: 'lit-manimekalai',
    nameTamil: 'மணிமேகலை',
    nameEnglish: 'Manimekalai',
    author: 'சீத்தலைச் சாத்தனார்',
    period: 'கி.பி. 6ஆம் நூற்றாண்டு',
    category: 'aimperum_kappiyam',
    specialFeature: 'அமுதசுரபி, பசிப்பிணி மருத்துவம், பௌத்த மெய்யியல் சிந்தனைகள், துறவு நெறி',
    poemSample: {
      verse: 'ஆற்றுநர்க்கு அளிப்போர் அறவிலை பகர்வோர்;\nஆற்றா மாக்கள் அரும்பசி களைவோர்\nமேற்றே உலகின் மெய்ந்நெறி வாழ்க்கை!\nமண்டிணி ஞாலத்து வாழ்வோர்க்கு எல்லாம்\nஉண்டி கொடுத்தோர் உயிர் கொடுத்தோரே!',
      explanation: 'பசியில் வாடும் எளிய மக்களின் பசியைப் போக்குபவர்களே இவ்வுலகில் வாழ்வுக்கு மெய்ந்நெறி காண்பவர்கள். உணவு கொடுத்தவரே இவ்வுலகில் உயிர் கொடுத்தவர் ஆவர்!',
      englishSummary: 'Those who feed the destitute give life itself to humanity; true righteousness is banishing hunger.'
    },
    keywords: ['அமுதசுரபி', 'பசிப்பிணி', 'பௌத்தம்', 'அறம்', 'hunger', 'charity', 'buddhism']
  },
  {
    id: 'lit-seevagachinthamani',
    nameTamil: 'சீவகசிந்தாமணி',
    nameEnglish: 'Seevagachinthamani',
    author: 'திருத்தக்கதேவர்',
    period: 'கி.பி. 10ஆம் நூற்றாண்டு',
    category: 'aimperum_kappiyam',
    specialFeature: 'விருத்தப்பாவால் இயற்றப்பட்ட முதற்காப்பியம்; சீவகனின் வீர, காதல் வாழ்க்கை, சமணத் துறவு',
    poemSample: {
      verse: 'செம்பொன் சுடர்செய் செழுமணிக் குன்றின்\nஅம்பரத்து இலங்கும் ஆயிரங் கதிர்போல்,\nசீவகன் பொலிந்தான் செழுநிலம் வியப்ப!',
      explanation: 'பொற்குன்றின் மேல் உதித்த ஆயிரம் கதிர்களைக் கொண்ட சூரியனைப் போல, சீவகன் தன் பெருவீரத்தோடு விளங்கி நின்றான்.',
      englishSummary: 'Radiant as a thousand suns crowning a mountain of ruby and gold, Prince Seevagan stood victorious.'
    },
    keywords: ['சீவகன்', 'சமணம்', 'விருத்தம்', 'துறவு', 'jainism', 'chivalry']
  },
  {
    id: 'lit-valayapathi',
    nameTamil: 'வளையாபதி',
    nameEnglish: 'Valayapathi',
    author: 'ஆசிரியர் பெயர் உறுதியாகத் தெரியவில்லை',
    period: 'கி.பி. 9ஆம் - 10ஆம் நூற்றாண்டு',
    category: 'aimperum_kappiyam',
    specialFeature: 'முழுமையாகக் கிடைக்காத காப்பியம்; சமணக் கருத்துகள், கற்பு நெறி, வணிகர் வாழ்க்கை',
    poemSample: {
      verse: 'மடியிலா மன்னவன் மன்னுயிர் ஓம்பும்;\nகுடியிலா நாட்டுக்குக் கோல்நன்று அன்றே!',
      explanation: 'சோம்பல் இல்லாத அரசனே உயிர்களைக் காப்பான்; நற்பண்புகள் இல்லாத மக்களுக்கு செங்கோல் ஆட்சி பயன் தராது.',
      englishSummary: 'An energetic sovereign protects his realm; justice thrives where citizens cherish virtue.'
    },
    keywords: ['காப்பியம்', 'சமணம்', 'வணிகம்', 'virtue', 'justice']
  },
  {
    id: 'lit-kundalakesi',
    nameTamil: 'குண்டலகேசி',
    nameEnglish: 'Kundalakesi',
    author: 'நாதகுத்தனார்',
    period: 'கி.பி. 10ஆம் நூற்றாண்டு',
    category: 'aimperum_kappiyam',
    specialFeature: 'பௌத்த சமயத் தத்துவ வாதங்கள், பெண்களின் விழிப்புணர்வு',
    poemSample: {
      verse: 'பாளையாம் தன்மை செத்தும் பாலனாம் தன்மை செத்தும்\nகாளையாம் தன்மை செத்தும் காமுறும் இளமை செத்தும்\nநாளும் நாம் சாகின் றோமால் நமக்குநாம் அழாதது என்னோ?',
      explanation: 'கருவிலுள்ள தன்மை மடிந்து குழந்தையாகிறோம்; குழந்தைத்தன்மை மடிந்து சிறுவனாகிறோம்; வாலிபம் மடிந்து முதியவராகிறோம். நாள்தோறும் நாம் இறந்துகொண்டே இருக்கிறோம்; நமக்கு நாமே ஏன் அழுவதில்லை?',
      englishSummary: 'Infancy dies into childhood, youth perishes into old age; dying every day, why do we not weep for ourselves?'
    },
    keywords: ['தத்துவம்', 'நிலையாமை', 'பௌத்தம்', 'philosophy', 'impermanence']
  },

  // ---------------- ஐஞ்சிறு காப்பியங்கள் ----------------
  {
    id: 'lit-soolamani',
    nameTamil: 'சூளாமணி',
    nameEnglish: 'Soolamani',
    author: 'தோலாமொழித்தேவர்',
    period: 'கி.பி. 9ஆம் - 10ஆம் நூற்றாண்டு',
    category: 'ainchiru_kappiyam',
    specialFeature: 'சமண மரபுக் காப்பியம்; திவிட்டன், பயாபதியின் கதைகள்',
    poemSample: {
      verse: 'பொன்னின் ஒளிபோலப் பொலிந்து நின்ற பண்பு!',
      explanation: 'பொன்னின் ஒளிபோல மாசற்ற உயர்ந்த சமண அறநெறிகளைப் போற்றும் அற்புதக் காப்பியம்.',
      englishSummary: 'Celebrating untarnished truth shining like refined gold.'
    },
    keywords: ['சமணம்', 'சூளாமணி', 'காப்பியம்', 'jainism']
  },
  {
    id: 'lit-neelakesi',
    nameTamil: 'நீலகேசி',
    nameEnglish: 'Neelakesi',
    author: 'ஆசிரியர் பெயர் அறியப்படவில்லை',
    period: 'கி.பி. 10ஆம் நூற்றாண்டு',
    category: 'ainchiru_kappiyam',
    specialFeature: 'குண்டலகேசிக்கு மறுப்பாக எழுந்த சமண சமயத் தத்துவ விவாதக் காப்பியம்',
    poemSample: {
      verse: 'உயிர்க்கொலை நீக்கிய உத்தம நெறி!',
      explanation: 'எவ்வுயிரையும் கொல்லாமை மற்றும் தர்க்கவியல் மெய்யறிவு விவாதங்களை முன்வைக்கும் காப்பியம்.',
      englishSummary: 'Philosophical debates championing non-violence and reasoned discourse.'
    },
    keywords: ['தர்க்கம்', 'சமணம்', 'விவாதம்', 'logic', 'debate']
  },
  {
    id: 'lit-yasothara-kaviyam',
    nameTamil: 'யசோதர காவியம்',
    nameEnglish: 'Yasothara Kaviyam',
    author: 'வெண்ணாவலுடையார்',
    period: 'கி.பி. 11ஆம் நூற்றாண்டு',
    category: 'ainchiru_kappiyam',
    specialFeature: 'அறம், உயிர்க்கொலை தவிர்த்தல் மற்றும் சமணச் சிந்தனை',
    poemSample: {
      verse: 'தீவினை தீண்டா திருவுடைய வாழ்க்கை!',
      explanation: 'தீய வினைகளைத் தவிர்த்து நல்வினைகளால் வீடுபேறு அடைய வழிகாட்டும் காவியம்.',
      englishSummary: 'Guiding humanity to transcend karmic sorrow through pure deeds.'
    },
    keywords: ['அறம்', 'காவியம்', 'morals']
  },
  {
    id: 'lit-udayanakumara-kaviyam',
    nameTamil: 'உதயணகுமார காவியம்',
    nameEnglish: 'Udayanakumara Kaviyam',
    author: 'கந்தியார்',
    period: 'கி.பி. 15ஆம் நூற்றாண்டு',
    category: 'ainchiru_kappiyam',
    specialFeature: 'உதயணன் மன்னன் சார்ந்த கதை மரபு, இசை யாழ் மேன்மை',
    poemSample: {
      verse: 'யாழின் இன்னிசை கேட்டு யானை அடங்கிய மாண்பு!',
      explanation: 'யாழிசையால் மதயானையையும் வசப்படுத்திய உதயணனின் கலைத்திறன்.',
      englishSummary: 'The miraculous harp melodies that calmed wild rutting tuskers.'
    },
    keywords: ['யாழ்', 'இசை', 'மன்னன்', 'harp', 'music']
  },
  {
    id: 'lit-nagakumara-kaviyam',
    nameTamil: 'நாககுமார காவியம்',
    nameEnglish: 'Nagakumara Kaviyam',
    author: 'ஆசிரியர் பெயர் அறியப்படவில்லை',
    period: 'கி.பி. 16ஆம் நூற்றாண்டு',
    category: 'ainchiru_kappiyam',
    specialFeature: 'நாககுமாரன் சரித்திரம், சமண அறநெறிப் பண்புகள்',
    poemSample: {
      verse: 'நல்வினையால் வரும் நன்மையின் மாட்சி!',
      explanation: 'அறநெறி பிறழாது வாழ்ந்த நாககுமாரனின் வரலாற்று மரபு.',
      englishSummary: 'The noble lineage of Nagakumara illustrating the fruition of good karma.'
    },
    keywords: ['கதை', 'சமணம்', 'அறம்']
  },

  // ---------------- பக்தி இலக்கியங்கள் ----------------
  {
    id: 'lit-thevaram',
    nameTamil: 'தேவாரம்',
    nameEnglish: 'Thevaram',
    author: 'திருஞானசம்பந்தர், திருநாவுக்கரசர், சுந்தரர்',
    period: 'கி.பி. 7ஆம் - 8ஆம் நூற்றாண்டு',
    category: 'bakthi_ilakkiyam',
    specialFeature: 'சிவபெருமானைப் போற்றும் பக்திப் பதிகங்கள்; பண்ணிசை மேன்மை',
    poemSample: {
      verse: 'தோடுடைய செவியன், விடையேறி, ஓர் தூவெண் மதிசூடி,\nகாடுடைய சுடலைப் பொடிபூசி, என் உள்ளம் கவர்கள்வன்,\nஏடுடைய மலரான் முனைநாட்பணிந்து ஏத்த அருள்செய்த,\nபீடுடைய பிரமா புரம்மேவிய பெம்மான் இவன் அன்றே!',
      explanation: 'தோடு அணிந்த செவியினன், எருதேறும் பெருமான், வெண்மதி சூடி சுடலைப் பொடிபூசி என் உள்ளத்தைக் கவர்ந்த கள்வனாகிய சிவபெருமான் இவனே!',
      englishSummary: 'With jeweled ear, riding the white bull, crowned with crescent moon: He stole my enraptured heart!'
    },
    keywords: ['தேவாரம்', 'சிவன்', 'பக்தி', 'இசை', 'saivism', 'shiva', 'devotion']
  },
  {
    id: 'lit-thiruvasagam',
    nameTamil: 'திருவாசகம்',
    nameEnglish: 'Thiruvasagam',
    author: 'மாணிக்கவாசகர்',
    period: 'கி.பி. 9ஆம் நூற்றாண்டு',
    category: 'bakthi_ilakkiyam',
    specialFeature: 'திருவாசகத்திற்கு உருகார் ஒரு வாசகத்திற்கும் உருகார்; சைவ பக்திப் பாடல்களின் சிகரம்',
    poemSample: {
      verse: 'பால்நினைந்து ஊட்டும் தாயினும் சாலப் பரிந்து,\nநீ பாவியேனுடைய ஊனினை உருக்கி, உள்ளொளி பெருக்கி,\nஉலப்பிலா ஆனந்தமாய தேனினைச் சொரிந்து,\nபுறம்புறம் திரிந்த செல்வனே, சிவபெருமானே!',
      explanation: 'பால் நினைந்து ஊட்டும் தாயை விடவும் என்மீது அன்பு காட்டி, என் உடலை உருக்கி உள்ளத்தில் பேரொளியைப் பெருக்கி, ஆனந்தத் தேனைப் பொழிந்த சிவபெருமானே!',
      englishSummary: 'Tenderer than a nursing mother thinking of her child, melting my flesh, flooding my inner self with boundless nectarous bliss.'
    },
    keywords: ['மாணிக்கவாசகர்', 'தேன்', 'அன்பு', 'பக்தி', 'தாயினும் சால', 'love', 'mother', 'devotion']
  },
  {
    id: 'lit-nalayira-divya-prabandham',
    nameTamil: 'நாலாயிரத் திவ்வியப் பிரபந்தம்',
    nameEnglish: 'Nalayira Divya Prabandham',
    author: 'பன்னிரு ஆழ்வார்கள் (தொகுத்தவர்: நாதமுனிகள்)',
    period: 'கி.பி. 6ஆம் - 9ஆம் நூற்றாண்டு',
    category: 'bakthi_ilakkiyam',
    specialFeature: 'ஆழ்வார்களின் 4000 வைணவ பக்திப் பாடல்கள்; திருவாய்மொழி, திருப்பாவை அடங்கியது',
    poemSample: {
      verse: 'கற்பூரம் நாறுமோ? கமலப்பூ நாறுமோ?\nதிருப்பவளச் செவ்வாய்தான் தித்தித்திருக்குமோ?\nமருப்பொசித்த மாதவன்தன் வாய்ச்சுவையும் வாசமும்\nவிருப்புற்றுக் கேட்கின்றேன் சொல்லாழி வெண்சங்கே!',
      explanation: 'திருமாலின் பவளம் போன்ற செவ்வாய் கற்பூர மணம் வீசுமோ? தாமரைப்பூ மணம் வீசுமோ? அத்திருவாயின் சுவையும் மணமும் எத்தன்மையது? சங்கே எனக்குச் சொல்!',
      englishSummary: 'Does His coral mouth smell of sweet camphor or lotus? Tell me, white conch shell, what is the fragrant nectar of His lips?'
    },
    keywords: ['ஆழ்வார்கள்', 'திருமால்', 'கண்ணன்', 'சங்கு', 'vishnu', 'conch', 'devotion']
  },
  {
    id: 'lit-periyapuranam',
    nameTamil: 'பெரியபுராணம் (திருத்தொண்டர் புராணம்)',
    nameEnglish: 'Periyapuranam',
    author: 'சேக்கிழார்',
    period: 'கி.பி. 12ஆம் நூற்றாண்டு',
    category: 'bakthi_ilakkiyam',
    specialFeature: '63 நாயன்மார்களின் தவ வாழ்வையும் அருளையும் விவரிக்கும் சைவக் காப்பியம்',
    poemSample: {
      verse: 'அன்பே சிவம் என்று அறிந்து வாழ்ந்த\nஅறுபத்து மூவர் அருள்வரலாறு!',
      explanation: 'சாதி மத எல்லைகளைக் கடந்து இறைவனிடம் கொண்ட தூய பக்தியால் முக்தி பெற்ற அடியார்கள் வரலாறு.',
      englishSummary: 'The luminous lives of the 63 Nayanmar saints discovering that Love and Divinity are one.'
    },
    keywords: ['நாயன்மார்', 'அன்பே சிவம்', 'சேக்கிழார்', 'saints', 'love']
  },
  {
    id: 'lit-thiruppugazh',
    nameTamil: 'திருப்புகழ்',
    nameEnglish: 'Thiruppugazh',
    author: 'அருணகிரிநாதர்',
    period: 'கி.பி. 15ஆம் நூற்றாண்டு',
    category: 'bakthi_ilakkiyam',
    specialFeature: 'சந்த ஓசை நயம் மிக்க முருகப் பெருமானைப் போற்றும் திருப்பாடல்கள்',
    poemSample: {
      verse: 'முத்தைத்தரு பத்தித் திருநகை அத்திக்கிறை சத்திச் சரவண\nமுத்திக்கொரு வித்துக் குருபர எனவோதும்,\nபத்தர்க்கருள் தத்துவத் தனி முதல்வனே!',
      explanation: 'முத்து போன்ற புன்னகையுடைய தெய்வானையின் தலைவரே! சரவணபவனே! முக்திக்கு வித்தான குருபரனே என்று பாடும் பக்தர்க்கருளும் முதல்வனே!',
      englishSummary: 'Rhythmic garland of praise glorifying the Lord of the Spear who dispels worldly delusion.'
    },
    keywords: ['முருகன்', 'சந்தம்', 'அருணகிரிநாதர்', 'music', 'rhythm']
  },

  // ---------------- பிற முக்கியமான பழந்தமிழ் இலக்கியங்கள் ----------------
  {
    id: 'lit-kambaramayanam',
    nameTamil: 'கம்பராமாயணம்',
    nameEnglish: 'Kambaramayanam',
    author: 'கவிச்சக்கரவர்த்தி கம்பர்',
    period: 'கி.பி. 12ஆம் நூற்றாண்டு',
    category: 'other_classics',
    specialFeature: 'இராமாயணக் கதையின் தமிழ்க் காப்பிய வடிவம்; கம்பன் வீட்டுக் கட்டுத்தறியும் கவிபாடும்',
    poemSample: {
      verse: 'தோள் கண்டார் தோளே கண்டார்;\nதொடுகழல் கமலம் அன்ன\nதாள் கண்டார் தாளே கண்டார்;\nதடக்கை கண்டாரும் அஃதே;\nவாள்கண்டார் வாளே கண்டார்;\nவடிவு கண்டாரும் இல்லை;\nயாழ்கண்டார் என்ன நின்றார்,\nஅண்ணல்தன் வடிவு கண்டார்!',
      explanation: 'இராமனின் தோள்களைப் பார்த்தவர்கள் தோளிலேயே லயித்து நின்றனர்; தாமரை போன்ற திருவடிகளைப் பார்த்தவர்கள் திருவடியையே நோக்கினர். யாராலும் முழு அழகையும் ஒருங்கே காண முடியாதபடி அளப்பரிய பேரழகாய் நின்றான்!',
      englishSummary: 'Those who saw His mighty shoulders saw only them; those who gazed at His lotus feet could look nowhere else. Such was His ineffable beauty.'
    },
    keywords: ['கம்பர்', 'இராமன்', 'காவியம்', 'அழகு', 'beauty', 'epic']
  },
  {
    id: 'lit-nalavenba',
    nameTamil: 'நளவெண்பா',
    nameEnglish: 'Nalavenba',
    author: 'புகழேந்திப் புலவர்',
    period: 'கி.பி. 13ஆம் நூற்றாண்டு',
    category: 'other_classics',
    specialFeature: 'வெண்பா யாப்பில் நளன் - தமயந்தி காதல், பிரிவு, வெற்றி வரலாறு; வெண்பாவில் புகழேந்தி',
    poemSample: {
      verse: 'மங்கல நாண் பூண்ட மலரன்ன மெல்லடிக்குச்\nசெங்கமலக் கைவிரலால் செப்பரிய அன்பளித்த\nநளன் புகழே பாடுவோம் நாம்!',
      explanation: 'அன்னப் பறவையைத் தூதுவிட்டு தமயந்தியை மணந்து வாழ்ந்த நள மன்னனின் காதலைப் போற்றும் இனிய வெண்பா.',
      englishSummary: 'Celebrating the eternal devotion of King Nala and Princess Damayanti united by the golden swan.'
    },
    keywords: ['நளன்', 'தமயந்தி', 'வெண்பா', 'அன்னம்', 'swan', 'love']
  },
  {
    id: 'lit-thiruppavai',
    nameTamil: 'திருப்பாவை',
    nameEnglish: 'Thiruppavai',
    author: 'சூடிக்கொடுத்த சுடர்க்கொடி ஆண்டாள்',
    period: 'கி.பி. 8ஆம் நூற்றாண்டு',
    category: 'other_classics',
    specialFeature: 'மார்கழி நோன்பு, வைணவ பக்திப் பாடல்கள் (30 பாசுரங்கள்)',
    poemSample: {
      verse: 'மார்கழித் திங்கள் மதிநிறைந்த நன்னாளால்,\nநீராடப் போதுவீர் போதுமினோ நேரிழையீர்!\nசீர்மல்கும் ஆய்ப்பாடிச் செல்வச் சிறுமீர்காள்,\nகூர்வேல் கொடுந்தொழிலன் நந்தகோபன் குமரன்,\nஏரார்ந்த கண்ணி யசோதை இளம்சிங்கம்,\nகார்மேனிச் செங்கண் கதிர்மதியம் போல்முகத்தான்,\nநாராயணனே நமக்கே பறைதருவான்\nபாரோர் புகழப் படிந்தேலோர் எம்பாவாய்!',
      explanation: 'மார்கழி மாதத்தின் முழுநிலவு நாளில், நந்தகோபனின் மகனான கண்ணனைப் போற்றி நீராட வாருங்கள் பெண்களே!',
      englishSummary: 'Awaken, maidens adorned with jewels, on this full moon dawn of Margazhi to praise Narayana.'
    },
    keywords: ['ஆண்டாள்', 'மார்கழி', 'கண்ணன்', 'பக்தி', 'krishna', 'dawn', 'devotion']
  }
];
