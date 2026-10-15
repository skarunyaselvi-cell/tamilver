export interface ScriptLetterEvolution {
  modernChar: string;
  brahmiGlyph: string;
  brahmiUnicode: string;
  vatteluttuGlyph: string;
  pallavaGlyph: string;
  cholaGlyph: string;
  phoneticName: string;
  letterCategory: 'uyir' | 'mei' | 'ayutham';
  evolutionNotes: string;
}

export const SCRIPT_LETTERS_DATABASE: ScriptLetterEvolution[] = [
  // உயிர் எழுத்துகள் (Vowels)
  {
    modernChar: 'அ',
    brahmiGlyph: '𑀅',
    brahmiUnicode: 'U+11005',
    vatteluttuGlyph: '𑁔',
    pallavaGlyph: 'அ (வலஞ்சுழி)',
    cholaGlyph: 'அ (இடைக்கோடு)',
    phoneticName: 'அகரம் (Short A)',
    letterCategory: 'uyir',
    evolutionNotes: 'பிராமியில் மூன்று புள்ளிகள் அல்லது முட்கரண்டி போன்ற வடிவம்; வட்டெழுத்தில் மேல் வளைவாகி; சோழர் காலத்தில் இன்றைய கீழ் வளைவை எட்டியது.'
  },
  {
    modernChar: 'ஆ',
    brahmiGlyph: '𑀆',
    brahmiUnicode: 'U+11006',
    vatteluttuGlyph: '𑁕',
    pallavaGlyph: 'ஆ',
    cholaGlyph: 'ஆ (கால் சுழி)',
    phoneticName: 'ஆகாரம் (Long AA)',
    letterCategory: 'uyir',
    evolutionNotes: 'அகரத்தின் வலப்பக்கம் கிடைமட்டக் கோடு சேர்க்கப்பட்டு பின்னர் கீழ்நோக்கிச் சுழிக்கும் துணைக்கால் வடிவம் பெற்றது.'
  },
  {
    modernChar: 'இ',
    brahmiGlyph: '𑀇',
    brahmiUnicode: 'U+11007',
    vatteluttuGlyph: '𑁖',
    pallavaGlyph: 'இ',
    cholaGlyph: 'இ',
    phoneticName: 'இகரம் (Short I)',
    letterCategory: 'uyir',
    evolutionNotes: 'பிராமியில் மூன்று தனித்தனிப் புள்ளிகளாகத் தோன்றி, வட்டெழுத்தில் இணைக்கப்பட்டு, சோழர் காலத்தில் இரு சுழிகளோடு கூடிய வடிவமானது.'
  },
  {
    modernChar: 'ஈ',
    brahmiGlyph: '𑀈',
    brahmiUnicode: 'U+11008',
    vatteluttuGlyph: '𑁗',
    pallavaGlyph: 'ஈ',
    cholaGlyph: 'ஈ',
    phoneticName: 'ஈகாரம் (Long II)',
    letterCategory: 'uyir',
    evolutionNotes: 'நான்கு புள்ளிகளிலிருந்து செங்குத்துக் கோட்டின் இருபுறமும் புள்ளிகள் வைக்கப்பட்டு, பின்னர் நவீன சுழி பெற்ற எழுத்து.'
  },
  {
    modernChar: 'உ',
    brahmiGlyph: '𑀉',
    brahmiUnicode: 'U+11009',
    vatteluttuGlyph: '𑁘',
    pallavaGlyph: 'உ',
    cholaGlyph: 'உ',
    phoneticName: 'உகரம் (Short U)',
    letterCategory: 'uyir',
    evolutionNotes: 'பிராமியில் L போன்ற செங்கோண வடிவம்; வட்டெழுத்தில் மேல் வளைவு பெற்று, பின்னர் பல்லவர் காலத்தில் கிடைமட்டமாக நீண்டது.'
  },
  {
    modernChar: 'ஊ',
    brahmiGlyph: '𑀊',
    brahmiUnicode: 'U+1100A',
    vatteluttuGlyph: '𑁙',
    pallavaGlyph: 'ஊ',
    cholaGlyph: 'ஊ (ளகரக் கொம்பு)',
    phoneticName: 'ஊகாரம் (Long UU)',
    letterCategory: 'uyir',
    evolutionNotes: 'உகரத்தின் மேல் கிடைமட்டக் கோடு இணைந்து, பின்னர் வீரமாமுனிவர் காலத்தில் ள-கரக் கொம்பு சேர்க்கப்பட்டு வேறுபடுத்தப்பட்டது.'
  },
  {
    modernChar: 'எ',
    brahmiGlyph: '𑀏',
    brahmiUnicode: 'U+1100F',
    vatteluttuGlyph: '𑁚',
    pallavaGlyph: 'எ',
    cholaGlyph: 'எ',
    phoneticName: 'எகரம் (Short E)',
    letterCategory: 'uyir',
    evolutionNotes: 'பிராமியில் முக்கோண வடிவம்; வட்டெழுத்தில் கூர்மை குறைந்து வளைவானது; பல்லவர் காலத்தில் இன்றைய கீழ் வளைவு உருவானது.'
  },
  {
    modernChar: 'ஏ',
    brahmiGlyph: '𑀏+',
    brahmiUnicode: 'U+1100F (நீட்சி)',
    vatteluttuGlyph: '𑁛',
    pallavaGlyph: 'ஏ',
    cholaGlyph: 'ஏ',
    phoneticName: 'ஏகாரம் (Long EE)',
    letterCategory: 'uyir',
    evolutionNotes: 'பண்டைய காலத்தில் எ, ஏ இரண்டிற்கும் ஒரே வடிவம் (புள்ளி வேறுபாடு); 18ஆம் நூற்றாண்டில் வீரமாமுனிவர் கீழே சாய்வுக்கோடு இட்டு "ஏ" என வேறுபடுத்தினார்.'
  },
  {
    modernChar: 'ஐ',
    brahmiGlyph: '𑀐',
    brahmiUnicode: 'U+11010',
    vatteluttuGlyph: '𑁜',
    pallavaGlyph: 'ஐ',
    cholaGlyph: 'ஐ',
    phoneticName: 'ஐகாரம் (Diphthong AI)',
    letterCategory: 'uyir',
    evolutionNotes: 'இரு அலைவடிவக் கோடுகளிலிருந்து தொடர்ச்சியான வளைவாகப் பரிணமித்தது.'
  },
  {
    modernChar: 'ஒ',
    brahmiGlyph: '𑀑',
    brahmiUnicode: 'U+11011',
    vatteluttuGlyph: '𑁝',
    pallavaGlyph: 'ஒ',
    cholaGlyph: 'ஒ',
    phoneticName: 'ஒகரம் (Short O)',
    letterCategory: 'uyir',
    evolutionNotes: 'பிராமியில் Z போன்ற வடிவம்; பின்னர் நடுவில் சுழியாகி நவீன ஒகர வடிவத்தைப் பெற்றது.'
  },
  {
    modernChar: 'ஓ',
    brahmiGlyph: '𑀒',
    brahmiUnicode: 'U+11012',
    vatteluttuGlyph: '𑁞',
    pallavaGlyph: 'ஓ',
    cholaGlyph: 'ஓ',
    phoneticName: 'ஓகாரம் (Long OO)',
    letterCategory: 'uyir',
    evolutionNotes: 'ஒகரத்தின் கீழ்ப்பகுதியில் சுழி இட்டு வீரமாமுனிவர் நெடிலாக வடிவமைத்தார்.'
  },
  {
    modernChar: 'ஔ',
    brahmiGlyph: '𑀓𑁅',
    brahmiUnicode: 'U+11013',
    vatteluttuGlyph: '𑁟',
    pallavaGlyph: 'ஔ',
    cholaGlyph: 'ஔ',
    phoneticName: 'ஔகாரம் (Diphthong AU)',
    letterCategory: 'uyir',
    evolutionNotes: 'ஒகரத்தோடு ள-கரக் குறியீடு சேர்க்கப்பட்டு நவீன ஔ வடிவம் நிலைபெற்றது.'
  },
  {
    modernChar: 'ஃ',
    brahmiGlyph: 'ஃ',
    brahmiUnicode: 'U+0B83',
    vatteluttuGlyph: 'ஃ',
    pallavaGlyph: 'ஃ',
    cholaGlyph: 'ஃ',
    phoneticName: 'ஆய்த எழுத்து (Visarga / Ayutham)',
    letterCategory: 'ayutham',
    evolutionNotes: 'முப்புள்ளி வடிவம்; கி.மு. தொல்காப்பியக் காலம் தொட்டு இன்று வரை மாறாத முக்கோண மூன்று புள்ளி வடிவம்!'
  },

  // மெய் எழுத்துகள் (Consonants)
  {
    modernChar: 'க',
    brahmiGlyph: '𑀓',
    brahmiUnicode: 'U+11013',
    vatteluttuGlyph: 'ᮊ',
    pallavaGlyph: 'க (மேற்கோடு)',
    cholaGlyph: 'க',
    phoneticName: 'ககரம் (Ka)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் கூட்டல் குறி (+) போன்ற வடிவம்! வட்டெழுத்தில் நடுக்கோடு வளைந்து, சோழர் காலத்தில் இன்றைய கீழ் வளைவு பெற்றது.'
  },
  {
    modernChar: 'ச',
    brahmiGlyph: '𑀘',
    brahmiUnicode: 'U+11018',
    vatteluttuGlyph: 'ᮎ',
    pallavaGlyph: 'ச',
    cholaGlyph: 'ச',
    phoneticName: 'சகரம் (Cha / Sa)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் முறுக்கிய கயிறு வடிவம்; வட்டெழுத்தில் சிறிய சுழியாகி; பல்லவர் காலத்தில் செவ்வக மேற்கோடு அமைந்தது.'
  },
  {
    modernChar: 'த',
    brahmiGlyph: '𑀢',
    brahmiUnicode: 'U+11022',
    vatteluttuGlyph: 'ᮒ',
    pallavaGlyph: 'த',
    cholaGlyph: 'த',
    phoneticName: 'தகரம் (Tha)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் தலைகீழ் Y அல்லது அரைவட்ட வடிவம்; சோழர் காலத்தில் இடப்பக்கச் சுழியோடு கூடிய தகரமானது.'
  },
  {
    modernChar: 'ந',
    brahmiGlyph: '𑀦',
    brahmiUnicode: 'U+11026',
    vatteluttuGlyph: 'ᮦ',
    pallavaGlyph: 'ந',
    cholaGlyph: 'ந',
    phoneticName: 'நகரம் (Na)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் கீழ்நோக்கிய கிடைமட்டக் கோடு; பல்லவர் காலத்தில் சுழி பெற்று சோழர் காலத்தில் இன்றைய வடிவம் நிலைத்தது.'
  },
  {
    modernChar: 'ப',
    brahmiGlyph: '𑀧',
    brahmiUnicode: 'U+11027',
    vatteluttuGlyph: 'ᮕ',
    pallavaGlyph: 'ப',
    cholaGlyph: 'ப',
    phoneticName: 'பகரம் (Pa)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் U போன்ற வடிவம்! கீழடி பானைகளில் தெளிவான U வடிவில் காணப்படுகிறது; சோழர் காலத்தில் செவ்வகப் பெட்டி வடிவமானது.'
  },
  {
    modernChar: 'ம',
    brahmiGlyph: '𑀫',
    brahmiUnicode: 'U+1102B',
    vatteluttuGlyph: 'ᮙ',
    pallavaGlyph: 'ம',
    cholaGlyph: 'ம',
    phoneticName: 'மகரம் (Ma)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் வட்டத்தின் மேல் இரு கொம்புகள்; வட்டெழுத்தில் வளைந்த சுழியாகி; சோழர் காலத்தில் நவீன மகரமானது.'
  },
  {
    modernChar: 'ய',
    brahmiGlyph: '𑀬',
    brahmiUnicode: 'U+1102C',
    vatteluttuGlyph: 'ᮚ',
    pallavaGlyph: 'ய',
    cholaGlyph: 'ய',
    phoneticName: 'யகரம் (Ya)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் மூன்று முனைகள் கொண்ட நங்கூர வடிவம்; பல்லவர் காலத்தில் இரு வளைவுகளாகி நவீன யகரமானது.'
  },
  {
    modernChar: 'ர',
    brahmiGlyph: '𑀭',
    brahmiUnicode: 'U+1102D',
    vatteluttuGlyph: 'ᮛ',
    pallavaGlyph: 'ர',
    cholaGlyph: 'ர',
    phoneticName: 'ரகரம் (Ra)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் நெளிந்த பாம்பு போன்ற செங்குத்து அலைக்கோடு; சோழர் காலத்தில் நேர்க்கோடாகி கீழ்நோக்கி வளைந்தது.'
  },
  {
    modernChar: 'ல',
    brahmiGlyph: '𑀮',
    brahmiUnicode: 'U+1102E',
    vatteluttuGlyph: 'ᮜ',
    pallavaGlyph: 'ல',
    cholaGlyph: 'ல',
    phoneticName: 'லகரம் (La)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் வலப்பக்கம் திரும்பிய கொக்கி வடிவம்; வட்டெழுத்தில் சுழி பெற்று நவீன லகரமாக மாறியது.'
  },
  {
    modernChar: 'வ',
    brahmiGlyph: '𑀯',
    brahmiUnicode: 'U+1102F',
    vatteluttuGlyph: 'ᮝ',
    pallavaGlyph: 'வ',
    cholaGlyph: 'வ',
    phoneticName: 'வகரம் (Va)',
    letterCategory: 'mei',
    evolutionNotes: 'பிராமியில் வட்டத்தின் மேல் செங்குத்துக் கோடு (விளக்கு வடிவம்); வட்டெழுத்தில் உருண்டையாகி நவீன வகரமானது.'
  },
  {
    modernChar: 'ழ',
    brahmiGlyph: '𑀵',
    brahmiUnicode: 'U+11035',
    vatteluttuGlyph: '᮵',
    pallavaGlyph: 'ழ',
    cholaGlyph: 'ழ',
    phoneticName: 'சிறப்பு ழகரம் (Retroflex Zha)',
    letterCategory: 'mei',
    evolutionNotes: 'தமிழுக்கே உரிய தனிச்சிறப்பு எழுத்து! மாங்குளம் கல்வெட்டில் பிராமி ழகரம் தனித்துவமாகப் பொறிக்கப்பட்டுள்ளது.'
  }
];
