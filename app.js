const DAYS = [
  {
    title: "모음 + か행",
    tip: "う는 한국어 ‘우’보다 입술을 덜 둥글게. か행은 숨이 살짝 섞인 ‘카·키·쿠·케·코’.",
    letters: [["あ","a","아","사과를 베어 문 얼굴"],["い","i","이","나란히 선 두 이"],["う","u","우","우산 손잡이처럼"],["え","e","에","에스컬레이터 난간"],["お","o","오","오리가 한 발 들기"],["か","ka","카","칼날과 손잡이"],["き","ki","키","열쇠 키의 톱니"],["く","ku","쿠","부리처럼 꺾인 〈"],["け","ke","케","케이크 포크"],["こ","ko","코","코의 두 콧구멍"]],
    words: [["えき","에키","역"],["ここ","코코","여기"],["いく","이쿠","가다"],["かう","카우","사다"]],
    quiz: ["あ  く  え  き  こ","か  い  け  う  お"], answer: "아 · 쿠 · 에 · 키 · 코 / 카 · 이 · 케 · 우 · 오",
    review: "き・う・け・あ・こ를 3초 안에 읽기"
  },
  {
    title: "さ행 + た행",
    tip: "し=시, ち=치, つ=‘쓰/츠’ 사이. 세 글자는 로마자대로 억지로 읽지 말고 소리째 익혀요.",
    letters: [["さ","sa","사","사과 꼭지와 몸통"],["し","shi","시","낚싯바늘이 휘익"],["す","su","스","실타래가 스르르"],["せ","se","세","세 갈래가 교차"],["そ","so","소","소용돌이 꼬리"],["た","ta","타","타자 모양"],["ち","chi","치","숫자 5처럼 휘기"],["つ","tsu","쓰","파도가 쓰윽"],["て","te","테","테이블 한쪽"],["と","to","토","토끼 귀와 점"]],
    words: [["すし","스시","초밥"],["そこ","소코","거기"],["たかい","타카이","비싸다/높다"],["ちかい","치카이","가깝다"],["した","시타","아래"]],
    quiz: ["さ  つ  し  て  そ","ち  す  と  せ  た"], answer: "사 · 쓰 · 시 · 테 · 소 / 치 · 스 · 토 · 세 · 타",
    review: "어제 글자 こ・え・き・く・か 섞어 읽기"
  },
  {
    title: "な행 + は행",
    tip: "ふ는 ‘후’이지만 ㅎ과 ㅍ 사이의 부드러운 바람. 조사 は는 훗날 문장 속에서 ‘와’로 읽기도 해요.",
    letters: [["な","na","나","나뭇가지와 매듭"],["に","ni","니","두 줄이라 ‘니’"],["ぬ","nu","누","누운 끈의 고리"],["ね","ne","네","고양이 꼬리 고리"],["の","no","노","한 바퀴 노"],["は","ha","하","기둥 옆 두 갈래"],["ひ","hi","히","웃는 입처럼"],["ふ","fu","후","후 하고 흩어진 점"],["へ","he","헤","산봉우리 하나"],["ほ","ho","호","は에 가로획"]],
    words: [["はい","하이","네"],["いいえ","이에","아니요"],["なに","나니","무엇"],["にく","니쿠","고기"],["へや","헤야","방"]],
    quiz: ["な  ふ  に  へ  の","ひ  ぬ  ほ  ね  は"], answer: "나 · 후 · 니 · 헤 · 노 / 히 · 누 · 호 · 네 · 하",
    review: "1~2일차 し・き・つ・そ・え 섞어 읽기"
  },
  {
    title: "ま행 + や행",
    tip: "や행은 や·ゆ·よ 세 글자뿐. ‘이(yi)’와 ‘예(ye)’ 칸은 비어 있어요.",
    letters: [["ま","ma","마","마지막에 둥근 고리"],["み","mi","미","미끄러운 두 굽이"],["む","mu","무","무릎과 긴 꼬리"],["め","me","메","매듭을 가로지름"],["も","mo","모","낚싯대에 두 줄"],["や","ya","야","새총 들고 야!"],["ゆ","yu","유","물고기 한 마리"],["よ","yo","요","요요가 매달림"]],
    words: [["みせ","미세","가게"],["やすみ","야스미","휴일/쉼"],["やま","야마","산"],["まえ","마에","앞"],["やさい","야사이","채소"]],
    quiz: ["ま  ゆ  み  よ","や  む  も  め"], answer: "마 · 유 · 미 · 요 / 야 · 무 · 모 · 메",
    review: "닮은 글자 ぬ・ね / は・ほ / さ・き 구별하기"
  },
  {
    title: "ら행 + わ행",
    tip: "ら행은 혀끝을 한 번만 가볍게 튕겨 ㄹ과 ㄷ 사이처럼. を는 현대어에서 보통 ‘오’로 읽어요.",
    letters: [["ら","ra","라","라면 그릇의 김"],["り","ri","리","리본 두 가닥"],["る","ru","루","루프를 그린 고리"],["れ","re","레","기둥에서 흐르는 선"],["ろ","ro","로","입구 열린 네모"],["わ","wa","와","고리 보고 와!"],["を","o","오","조사 전용 오"],["ん","n","ㄴ/응","끝에서 코로 마침"]],
    words: [["これ","코레","이것"],["それ","소레","그것"],["いくら","이쿠라","얼마"],["えん","엔","엔(화폐)"],["くるま","쿠루마","차"]],
    quiz: ["ら  を  る  ん","わ  り  ろ  れ"], answer: "라 · 오 · 루 · 응 / 와 · 리 · 로 · 레",
    review: "기본 46자 표를 보지 않고 아는 행 말해 보기"
  },
  {
    title: "탁음 ① が행 + ざ행",
    tip: "오른쪽 위 점 두 개(゛)가 붙으면 소리가 탁해져요: か→が, さ→ざ. じ는 ‘지’.",
    letters: [["が","ga","가","か + 점 두 개"],["ぎ","gi","기","き + 점 두 개"],["ぐ","gu","구","く + 점 두 개"],["げ","ge","게","け + 점 두 개"],["ご","go","고","こ + 점 두 개"],["ざ","za","자","さ + 점 두 개"],["じ","ji","지","し + 점 두 개"],["ず","zu","즈","す + 점 두 개"],["ぜ","ze","제","せ + 점 두 개"],["ぞ","zo","조","そ + 점 두 개"]],
    words: [["かぎ","카기","열쇠"],["みず","미즈","물"],["ざせき","자세키","좌석"],["ごはん","고한","밥/식사"],["すごい","스고이","대단하다"]],
    quiz: ["が  じ  げ  ぞ  ず","ざ  ご  ぎ  ぜ  ぐ"], answer: "가 · 지 · 게 · 조 · 즈 / 자 · 고 · 기 · 제 · 구",
    review: "점 두 개를 가리고 원래 글자 읽기: が→か, じ→し, ず→す"
  },
  {
    title: "탁음 ② だ행 + ば행",
    tip: "ぢ·づ는 보통 じ·ず와 거의 같은 소리이며 등장 빈도도 낮아요. 우선 ‘보고 알아보기’면 충분해요.",
    letters: [["だ","da","다","た + 점 두 개"],["ぢ","ji","지","ち + 점 두 개"],["づ","zu","즈","つ + 점 두 개"],["で","de","데","て + 점 두 개"],["ど","do","도","と + 점 두 개"],["ば","ba","바","は + 점 두 개"],["び","bi","비","ひ + 점 두 개"],["ぶ","bu","부","ふ + 점 두 개"],["べ","be","베","へ + 점 두 개"],["ぼ","bo","보","ほ + 점 두 개"]],
    words: [["でぐち","데구치","출구"],["でんわ","덴와","전화"],["おでん","오덴","오뎅"],["たべる","타베루","먹다"],["ばしょ","바쇼","장소 · ょ는 다음 주"]],
    quiz: ["で  ぶ  だ  ぼ  ぢ","ば  ど  べ  づ  び"], answer: "데 · 부 · 다 · 보 · 지 / 바 · 도 · 베 · 즈 · 비",
    review: "헷갈린 글자 5개만 골라 소리 내어 3회씩"
  }
];

const PRONUNCIATION_DAYS = [
  {
    focus: "う는 ‘우’가 아니에요",
    headline: "입술을 내밀지 않고, 혀의 뒤쪽만 가볍게 올려 짧게 냅니다.",
    cues: [
      ["입술", "둥글게 오므리지 말고 힘을 뺀 상태를 유지해요."],
      ["혀", "혀의 뒤쪽을 올리되 목에 힘을 주지 않아요."],
      ["길이", "あ・い・う・え・お를 같은 한 박자로 말해요."]
    ],
    mora: { word: "えき", tokens: ["え", "き"], note: "두 글자를 늘이지 않고 같은 길이의 두 박자로 말해요." },
    practice: [["う", "입술 확인"], ["うえ", "두 모음 연결"], ["えき", "두 박자 단어"]],
    sources: [
      ["도쿄외국어대 · 일본어 모음", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/01-07-01.php"]
    ]
  },
  {
    focus: "し・ち・つ를 한글 한 글자로 고정하지 않기",
    headline: "つ는 혀를 t 위치에 댔다가 곧바로 す의 마찰을 내고, し는 입술을 둥글리지 않습니다.",
    cues: [
      ["つ", "‘트-스’처럼 나누지 말고 막힘과 마찰을 한 번에 연결해요."],
      ["し", "입술보다 혀의 앞부분과 입천장 사이의 좁은 틈을 의식해요."],
      ["무성화", "すき의 う는 자연 발화에서 아주 약하게 들릴 수 있어요."]
    ],
    mora: { word: "つき", tokens: ["つ", "き"], note: "つ 전체가 한 박자예요. t와 su를 두 박자로 나누지 않아요." },
    practice: [["すき", "약해지는 う"], ["つき", "つ 한 박자"], ["した", "し의 마찰"]],
    sources: [
      ["도쿄외국어대 · つ", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/01-01-01.php"],
      ["도쿄외국어대 · し", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/03-04-01.php"],
      ["도쿄외국어대 · 모음 무성화", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/03-03-01.php"]
    ]
  },
  {
    focus: "ふ는 영어 f도, 한국어 후도 아니에요",
    headline: "윗니를 아랫입술에 대지 않고 두 입술을 가까이해 촛불을 끄듯 마찰을 냅니다.",
    cues: [
      ["입술", "윗입술과 아랫입술 사이에 작은 틈을 만들어요."],
      ["바람", "세게 터뜨리지 말고 좁은 틈으로 부드럽게 흘려요."],
      ["ひ", "혀의 가운데를 입천장에 가까이해 し와 다른 마찰을 만들어요."]
    ],
    mora: { word: "ふね", tokens: ["ふ", "ね"], note: "ふ의 마찰과 모음을 한 박자 안에 넣고 ね와 길이를 맞춰요." },
    practice: [["ふ", "두 입술 마찰"], ["ふね", "두 박자"], ["ひと", "ひ의 위치"]],
    sources: [
      ["도쿄외국어대 · は・ひ・ふ", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/03-06-01.php"]
    ]
  },
  {
    focus: "일본어 리듬의 단위는 모라",
    headline: "강세를 주기보다 각 모라를 거의 같은 시간으로 놓는 것이 일본어다운 리듬의 시작입니다.",
    cues: [
      ["박자", "손가락을 한 번씩 짚으며 각 소리를 같은 간격으로 내요."],
      ["세기", "중요한 글자를 세게 읽거나 길게 늘이지 않아요."],
      ["연결", "빠르게 말해도 박자의 개수는 머릿속에서 유지해요."]
    ],
    mora: { word: "やすみ", tokens: ["や", "す", "み"], note: "야-스미가 아니라 や｜す｜み의 세 박자예요." },
    practice: [["みせ", "두 박자"], ["やすみ", "세 박자"], ["やさい", "세 박자"]],
    sources: [
      ["도쿄외국어대 · 모라", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/01-10-01.php"]
    ]
  },
  {
    focus: "ら행은 혀끝을 한 번만 튕겨요",
    headline: "혀끝이 윗잇몸 뒤쪽을 짧게 한 번 스치고 즉시 떨어집니다. ん은 뒤 소리에 맞춰 모양이 변합니다.",
    cues: [
      ["ら행", "혀를 붙인 채 끌지 말고 한 번만 가볍게 접촉해요."],
      ["ん", "항상 한국어 ㄴ으로 고정하지 말고 다음 소리를 준비해요."],
      ["길이", "ん도 빠뜨리지 않고 독립된 한 박자로 셉니다."]
    ],
    mora: { word: "えん", tokens: ["え", "ん"], note: "짧은 ‘엔’ 한 덩어리가 아니라 え와 ん의 두 박자예요." },
    practice: [["らりるれろ", "혀끝 한 번"], ["くるま", "세 박자"], ["えん", "ん 한 박자"]],
    sources: [
      ["도쿄외국어대 · ら행", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/01-02-01.php"],
      ["도쿄외국어대 · ん", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/02-03-01.php"]
    ]
  },
  {
    focus: "탁음은 목의 울림으로 구별해요",
    headline: "か/が, さ/ざ를 번갈아 말하며 손끝으로 목의 진동 유무를 확인합니다.",
    cues: [
      ["か→が", "입 모양은 가깝지만 が에서는 성대가 먼저 울려요."],
      ["さ→ざ", "마찰을 유지한 채 목의 울림을 더해요."],
      ["주의", "한글 가·자와 같다고 단정하지 말고 일본어 소리를 그대로 복사해요."]
    ],
    mora: { word: "かぎ", tokens: ["か", "ぎ"], note: "두 박자의 길이는 같고 두 번째 박자에서 목의 울림이 생겨요." },
    practice: [["か、が", "울림 비교"], ["さ、ざ", "울림 비교"], ["みず", "ず 확인"]],
    sources: [
      ["도쿄외국어대 · か/が", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/01-06-01.php"],
      ["도쿄외국어대 · ざ행", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/01-03-01.php"]
    ]
  },
  {
    focus: "같은 글자라도 높낮이가 뜻을 바꿔요",
    headline: "도쿄식 공통어 악센트는 세게 읽는 위치가 아니라 음이 내려가는 위치를 듣습니다.",
    cues: [
      ["높낮이", "목소리 크기는 그대로 두고 음의 높이만 움직여요."],
      ["はし", "‘다리’는 낮→높, ‘젓가락’은 높→낮으로 구별돼요."],
      ["문장", "단어를 문장에 넣으면 억양과 연결되므로 낱말과 문장을 둘 다 들어요."]
    ],
    mora: { word: "でんわ", tokens: ["で", "ん", "わ"], note: "ん을 생략하지 않는 세 박자. 뒤의 わ를 준비하며 코 울림이 이어져요." },
    practice: [["でんわ", "세 박자"], ["たべる", "세 박자"], ["はし", "고저 두 방식"]],
    pitch: [
      { label: "다리 · 橋", word: "はし", levels: [["は", "low"], ["し", "high"]], note: "낮 → 높" },
      { label: "젓가락 · 箸", word: "はし", levels: [["は", "high"], ["し", "low"]], note: "높 → 낮" }
    ],
    sources: [
      ["도쿄외국어대 · 표준어 악센트", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/01-08-01.php"],
      ["OJAD · 일본어 악센트 사전", "https://www.gavo.t.u-tokyo.ac.jp/ojad/kor/pages/home"]
    ]
  }
];

DAYS.push(...window.EXTRA_DAYS);

const state = JSON.parse(localStorage.getItem("commute-japanese-week1") || '{"day":0,"done":[],"mistakes":{}}');
state.weak ||= [];
state.routine ||= {};
if (!state.audioVersion || state.audioVersion < 2) {
  state.speechRate = 1;
  state.audioVersion = 2;
}
state.speechRate ||= 1;
state.speechVoiceURI ||= "";
state.precisionMode ??= true;
state.showKoreanReading ??= false;
state.testMode ||= false;
delete state.listeningScores;
delete state.weekScores;
delete state.score;
const lesson = document.querySelector("#lesson");
const tabs = document.querySelector("#dayTabs");
const weekTabs = document.querySelector("#weekTabs");
const monthTabs = document.querySelector("#monthTabs");
let audioToastTimer;
let listeningSession = null;
let activeFixedAudio = null;
let fixedSequenceId = 0;

function showAudioStatus(message) {
  const toast = document.querySelector("#audioToast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(audioToastTimer);
  audioToastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function stopAudioPlayback() {
  fixedSequenceId += 1;
  activeFixedAudio?.pause();
  activeFixedAudio = null;
  window.speechSynthesis?.cancel();
}

function getJapaneseVoices() {
  if (!("speechSynthesis" in window)) return [];
  const preferredNames = [
    "nanami", "masaru", "keita", "aoi", "daichi", "mayu", "naoki", "shiori",
    "google 日本語", "google japanese", "kyoko", "o-ren", "hattori",
    "haruka", "sayaka", "ichiro"
  ];
  const score = voice => {
    const name = voice.name.toLowerCase();
    const preference = preferredNames.findIndex(item => name.includes(item));
    return (voice.lang.toLowerCase() === "ja-jp" ? 100 : 0)
      + (preference === -1 ? 0 : 80 - preference)
      + (!voice.localService ? 8 : 0)
      + (voice.default ? 2 : 0);
  };
  return window.speechSynthesis.getVoices()
    .filter(voice => voice.lang.toLowerCase().replace("_", "-") === "ja-jp")
    .sort((a, b) => score(b) - score(a));
}

function getJapaneseVoice() {
  const voices = getJapaneseVoices();
  return voices.find(voice => voice.voiceURI === state.speechVoiceURI) || voices[0] || null;
}

function voiceOptionLabel(voice, index) {
  const shortName = voice.name
    .replace(/^Microsoft\s+/i, "")
    .replace(/^Google\s+/i, "")
    .replace(/\s+(Online|Desktop|Natural).*$/i, "");
  return `${index === 0 ? "추천 · " : ""}${shortName}`;
}

function speakJP(text, rateOverride = null) {
  const fixedSource = window.STANDARD_AUDIO?.[text];
  if (fixedSource) {
    fixedSequenceId += 1;
    window.speechSynthesis?.cancel();
    activeFixedAudio?.pause();
    activeFixedAudio = new Audio(fixedSource);
    activeFixedAudio.playbackRate = rateOverride ?? state.speechRate;
    activeFixedAudio.preservesPitch = true;
    activeFixedAudio.play().catch(() => showAudioStatus("고정 기준 음성을 재생하지 못했어요."));
    showAudioStatus("재생 중 · 고정 기준 음성");
    return;
  }
  if (!("speechSynthesis" in window)) {
    showAudioStatus("이 브라우저는 음성 재생을 지원하지 않아요.");
    return;
  }
  const japaneseVoice = getJapaneseVoice();
  if (!japaneseVoice) {
    showAudioStatus("일본어(일본) 음성이 없어 재생하지 않았어요. 기기에 일본어 음성을 추가해 주세요.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = rateOverride ?? state.speechRate;
  utterance.pitch = 1;
  utterance.voice = japaneseVoice;
  utterance.onerror = () => showAudioStatus("일본어 음성을 재생하지 못했어요. 기기의 일본어 음성을 확인해 주세요.");
  window.speechSynthesis.speak(utterance);
  showAudioStatus(`재생 중 · ${voiceOptionLabel(japaneseVoice, -1)}`);
}

async function speakFixedSequence(texts, rateOverride = null) {
  const sequenceId = fixedSequenceId + 1;
  fixedSequenceId = sequenceId;
  window.speechSynthesis?.cancel();
  activeFixedAudio?.pause();
  showAudioStatus(`재생 중 · 고정 기준 음성 ${texts.length}개`);

  for (const text of texts) {
    if (fixedSequenceId !== sequenceId) return;
    const source = window.STANDARD_AUDIO?.[text];
    if (!source) {
      showAudioStatus("고정 기준 음성 일부를 찾지 못했어요.");
      return;
    }
    const audio = new Audio(source);
    activeFixedAudio = audio;
    audio.playbackRate = rateOverride ?? state.speechRate;
    audio.preservesPitch = true;
    try {
      await new Promise((resolve, reject) => {
        audio.addEventListener("ended", resolve, { once: true });
        audio.addEventListener("error", reject, { once: true });
        audio.play().catch(reject);
      });
    } catch {
      showAudioStatus("고정 기준 음성을 재생하지 못했어요.");
      return;
    }
  }
}

function togglePrecisionMode() {
  state.precisionMode = !state.precisionMode;
  save();
  renderLesson();
}

function toggleKoreanReading() {
  state.showKoreanReading = !state.showKoreanReading;
  save();
  renderLesson();
}

function splitMora(text) {
  const cleaned = text.replace(/[、。！？・「」『』（）\s〜]/gu, "");
  if (!cleaned || /[^\u3040-\u30ffー]/u.test(cleaned)) return [];
  const smallKana = /[ゃゅょぁぃぅぇぉゎャュョァィゥェォヮ]/u;
  return [...cleaned].reduce((moras, character) => {
    if (smallKana.test(character) && moras.length) moras[moras.length - 1] += character;
    else moras.push(character);
    return moras;
  }, []);
}

function pronunciationDetail(text, romanization = "", isPhrase = false) {
  if (isPhrase || /[。！？、]/u.test(text) || text.length > 8) {
    return "자연 속도에서 문장 전체의 높낮이와 모라 박자를 먼저 듣고, 분해 속도에서는 단어 사이의 연결만 확인하세요.";
  }
  if (/[っッ]/u.test(text)) return "작은 っ·ッ은 다음 자음 앞의 한 모라입니다. 소리를 덧붙이지 말고 입과 공기의 흐름을 잠깐 멈춰요.";
  if (/[ー]/u.test(text)) return "ー는 앞 모음을 한 모라 더 이어 갑니다. 새 모음을 붙이지 말고 같은 음질을 유지하세요.";
  if (/[ゃゅょャュョ]/u.test(text)) return "작은 ゃ·ゅ·ょ는 앞 글자와 합쳐 한 모라입니다. 두 덩어리로 끊지 마세요.";
  if (/^[しシ]$/u.test(text)) return "혀 앞부분을 잇몸 뒤쪽에 가까이 두고 좁은 틈으로 마찰을 냅니다. 한국어 ‘시’보다 입술을 덜 벌려요.";
  if (/^[ちチ]$/u.test(text)) return "혀로 공기를 잠깐 막은 뒤 바로 마찰을 이어 한 모라로 냅니다. ‘치이’처럼 늘이지 않아요.";
  if (/^[つツ]$/u.test(text)) return "t의 막힘과 s의 마찰을 한 모라 안에서 이어 냅니다. ‘츠으’처럼 두 박자로 나누지 않아요.";
  if (/^[ふフ]$/u.test(text)) return "윗니로 아랫입술을 물지 않습니다. 두 입술 사이의 좁은 틈으로 부드럽게 마찰을 내요.";
  if (/^[ひヒ]$/u.test(text)) return "혀의 앞이 아니라 가운데를 입천장에 가까이 두고 가볍게 마찰을 냅니다.";
  if (/^[らりるれろラリルレロ]$/u.test(text)) return "혀끝을 윗잇몸에 한 번만 가볍게 튕깁니다. 한국어 ㄹ을 길게 굴리지 않아요.";
  if (/^[んン]$/u.test(text)) return "독립된 한 모라입니다. 뒤 소리에 따라 입안의 막힘 위치가 자연스럽게 달라집니다.";
  if (/^[をヲ]$/u.test(text)) return "현대 표준어의 조사 を는 보통 お와 같은 소리로 발음합니다.";
  if (/^[うウ]$/u.test(text)) return "입술을 앞으로 둥글게 내밀지 않고 힘을 뺀 채, 혀 뒤쪽을 살짝 높여 짧게 냅니다.";
  if (/^[じジぢヂ]$/u.test(text)) return "표준어에서 じ와 ぢ는 대체로 같은 소리입니다. 혀 앞부분의 좁은 틈에서 유성 마찰을 냅니다.";
  if (/^[ずズづヅ]$/u.test(text)) return "표준어에서 ず와 づ는 대체로 같은 소리입니다. 목의 울림을 유지하며 짧게 냅니다.";
  if (/^[がぎぐげごガギグゲゴ]$/u.test(text)) return "か행과 입 모양은 같고 목의 울림을 더합니다. 단어 안에서는 막힘이 약해질 수 있어요.";
  if (/^[ざぜぞザゼゾ]$/u.test(text)) return "さ행의 마찰 위치를 유지하면서 목을 울립니다. 앞에 강한 ‘ㄷ’을 덧붙이지 않아요.";
  if (/^[ばびぶべぼバビブベボ]$/u.test(text)) return "두 입술을 닫았다 열며 목을 울립니다. 각 글자는 한 모라입니다.";
  if (/^[ぱぴぷぺぽパピプペポ]$/u.test(text)) return "두 입술을 닫았다 가볍게 터뜨리되 목은 울리지 않습니다.";
  if (romanization) {
    const sound = romanization.toLowerCase();
    const consonantCues = [
      [/^k/, "혀 뒤쪽을 여린입천장에 붙여 공기를 막았다가 짧게 풉니다."],
      [/^s/, "혀끝을 윗잇몸 가까이에 두고 좁은 틈으로 공기를 흘립니다."],
      [/^t/, "혀끝을 윗잇몸 뒤에 붙여 공기를 막았다가 짧게 풉니다."],
      [/^n/, "혀끝을 윗잇몸 뒤에 붙이고 공기를 코로 보냅니다."],
      [/^h/, "입안에서 막지 않고 목구멍의 가벼운 마찰로 시작합니다."],
      [/^m/, "두 입술을 닫은 채 목을 울리고 공기를 코로 보냅니다."],
      [/^y/, "혀 앞쪽을 높인 채 다음 모음으로 끊김 없이 미끄러집니다."],
      [/^w/, "입술을 아주 가볍게 모았다가 바로 다음 모음으로 이동합니다."],
      [/^d/, "혀끝으로 공기를 막고 목을 울리며 짧게 풉니다."],
      [/^b/, "두 입술을 닫고 목을 울리며 짧게 엽니다."],
      [/^p/, "두 입술을 닫았다가 목의 울림 없이 가볍게 터뜨립니다."]
    ];
    const vowelCues = {
      a: "입을 세로로 편안히 열고 혀를 낮춥니다.",
      i: "입술을 과하게 당기지 말고 혀 앞쪽을 높입니다.",
      u: "입술을 내밀지 않고 혀 뒤쪽을 살짝 높입니다.",
      e: "혀 앞쪽을 중간 높이에 두고 입을 가볍게 엽니다.",
      o: "입술을 살짝 둥글게 하되 길게 끌지 않습니다."
    };
    const vowel = vowelCues[sound.at(-1)] || "한 덩어리로 이어 냅니다.";
    if (sound.length === 1) return `${vowel} 한 모라만큼 짧고 고르게 내세요.`;
    const consonant = consonantCues.find(([pattern]) => pattern.test(sound))?.[1] || "자음 앞에 한국어식 소리를 덧붙이지 않습니다.";
    return `${consonant} ${vowel} 전체를 한 모라로 짧고 고르게 내세요.`;
  }
  return "자연 속도에서 전체 높낮이를 듣고, 분해 속도에서는 각 모라의 길이와 연결을 확인하세요.";
}

function renderAudioPair(text, className = "") {
  return `
    <div class="precision-audio-pair ${className}">
      <button type="button" onclick="speakJP('${text}', 1)" aria-label="${text} 자연 속도 듣기">자연 ▶</button>
      <button type="button" onclick="speakJP('${text}', 0.78)" aria-label="${text} 분해 속도 듣기">분해 ▶</button>
    </div>`;
}

function renderMoraStrip(text) {
  const moras = splitMora(text);
  if (!moras.length || moras.length > 12) return "";
  return `<div class="item-moras" aria-label="${text} 모라 ${moras.length}개">
    ${moras.map((mora, index) => `<span><i>${index + 1}</i><b lang="ja">${mora}</b></span>`).join("")}
  </div>`;
}

function renderPrecisionPanel(day, pronunciation) {
  const fixedAudioReady = Object.keys(window.STANDARD_AUDIO || {}).length > 0;
  const sources = pronunciation?.sources || [
    ["도쿄외국어대 · 일본어 발음", "https://www.coelang.tufs.ac.jp/ja/en/pmod/practical/"],
    ["OJAD · 표준어 악센트 사전", "https://www.gavo.t.u-tokyo.ac.jp/ojad/kor/pages/home"]
  ];
  return `
    <section class="precision-lab">
      <div class="precision-lab-head">
        <div>
          <span class="precision-kicker">ALL-SOUND LISTENING</span>
          <h3>오늘의 모든 소리를 정밀하게 듣기</h3>
          <p>대표 한두 개만 고르는 대신, 아래 ${day.letters.length}개 항목을 전부 자연 속도와 분해 속도로 비교합니다. 먼저 자연 속도를 기준으로 들으세요.</p>
        </div>
        <button class="reading-toggle" type="button" onclick="toggleKoreanReading()">
          ${state.showKoreanReading ? "한글 독음 숨기기" : "한글 독음 보기"}
        </button>
      </div>
      <div class="precision-sound-grid">
        ${day.letters.map(([text, romanization]) => `
          <article class="precision-sound-card">
            <div><strong lang="ja">${text}</strong>${renderAudioPair(text)}</div>
            ${renderMoraStrip(text)}
            <p>${pronunciationDetail(text, romanization, day.kind === "phrase")}</p>
          </article>`).join("")}
      </div>
      <p class="tts-caution">${fixedAudioReady
        ? "모든 재생 버튼은 같은 일본어 기준 음성 파일을 사용합니다. 자연 속도를 발음 기준으로 듣고, 분해 속도는 소리 연결을 확인할 때만 사용하세요."
        : "다른 언어 목소리로 대체 재생하지 않습니다. 현재는 기기의 일본어(일본) 음성을 사용하며, 고정 기준 음성 파일이 연결되면 같은 버튼에서 자동으로 그 음성을 우선 재생합니다."}</p>
      <div class="source-links">
        <span>발음 원리·악센트 기준</span>
        ${sources.map(([label, url]) => `<a href="${url}" target="_blank" rel="noopener noreferrer">${label} ↗</a>`).join("")}
      </div>
    </section>`;
}

function speakToday() {
  const texts = DAYS[state.day].letters.map(([jp]) => jp);
  if (texts.every(text => window.STANDARD_AUDIO?.[text])) {
    speakFixedSequence(texts);
  } else {
    speakJP(texts.join("、"));
  }
  setRoutine(0, true);
}

function toggleWeak(jp) {
  state.weak = state.weak.includes(jp) ? state.weak.filter(item => item !== jp) : [...state.weak, jp];
  save();
  renderLesson();
}

function setRoutine(index, checked) {
  const routine = state.routine[state.day] || [false, false, false, false];
  routine[index] = checked;
  state.routine[state.day] = routine;
  save();
  const box = document.querySelector(`[data-routine="${index}"]`);
  if (box) box.checked = checked;
}

function toggleTestMode() {
  state.testMode = !state.testMode;
  save();
  renderLesson();
}

function shuffled(items) {
  return [...items].sort(() => Math.random() - 0.5);
}

function startListeningQuiz() {
  const items = shuffled(DAYS[state.day].letters);
  listeningSession = {
    day: state.day,
    remaining: items.slice(0, Math.min(5, items.length)),
    missed: []
  };
  renderListeningQuestion();
}

function renderListeningQuestion() {
  const host = document.querySelector("#listeningQuizBody");
  if (!host || !listeningSession || listeningSession.day !== state.day) return;
  if (!listeningSession.remaining.length) {
    setRoutine(2, true);
    save();
    const missed = [...new Set(listeningSession.missed)];
    host.innerHTML = `
      <div class="listening-result"><strong>오늘 배운 소리를 한 바퀴 들었어요.</strong>
      <span>${missed.length ? "헷갈린 항목은 아래에서 소리만 다시 확인하세요." : "모든 항목을 바로 연결했어요. 자연 속도로 한 번 더 들으면 충분합니다."}</span></div>
      ${missed.length ? `<div class="review-audio-chips">${missed.map(text => `<button type="button" onclick="speakJP('${text}', 1)"><span lang="ja">${text}</span> 자연 ▶</button>`).join("")}</div>` : ""}
      <button class="quiz-start" type="button" onclick="startListeningQuiz()">다시 듣기</button>`;
    return;
  }
  const day = DAYS[state.day];
  const items = day.letters;
  const targetItem = listeningSession.remaining.shift();
  const choices = shuffled([targetItem, ...shuffled(items.filter(item => item[0] !== targetItem[0])).slice(0, 3)]);
  listeningSession.target = targetItem[0];
  host.innerHTML = `
    <div class="listening-progress">오늘 배운 항목에서만 듣는 중</div>
    <button class="listen-prompt" type="button" onclick="speakJP('${targetItem[0]}', 1)">🔊 자연 속도로 다시 듣기</button>
    <div class="listening-choices ${day.kind === "phrase" ? "meaning-choices" : ""}">
      ${choices.map(choice => `<button type="button" data-answer="${choice[0]}" onclick="answerListening('${choice[0]}', this)">${day.kind === "phrase" ? choice[2] : choice[0]}</button>`).join("")}
    </div>
    <div class="listening-feedback" id="listeningFeedback">오늘 배운 소리를 듣고 ${day.kind === "phrase" ? "뜻을" : "글자를"} 골라 보세요.</div>`;
  speakJP(targetItem[0], 1);
}

function answerListening(choice, button) {
  if (!listeningSession || button.parentElement.classList.contains("answered")) return;
  const correct = choice === listeningSession.target;
  if (!correct) listeningSession.missed.push(listeningSession.target);
  button.parentElement.classList.add("answered");
  button.classList.add(correct ? "correct" : "wrong");
  const correctButton = [...button.parentElement.children].find(item => item.dataset.answer === listeningSession.target);
  if (correctButton) correctButton.classList.add("correct");
  document.querySelector("#listeningFeedback").textContent = correct ? "같은 소리예요. 다음 소리로 넘어갑니다." : "이 소리였습니다. 자연 속도로 다시 듣고 넘어가요.";
  if (!correct) speakJP(listeningSession.target, 1);
  setTimeout(renderListeningQuestion, correct ? 700 : 1250);
}

function getLearnedItemsThisWeek() {
  const weekStart = Math.floor(state.day / 7) * 7;
  return DAYS.slice(weekStart, state.day + 1).flatMap((day, offset) =>
    day.letters.map(item => ({ item, dayIndex: weekStart + offset, kind: day.kind || "kana" }))
  );
}

function getLearnedWordsThisWeek() {
  const weekStart = Math.floor(state.day / 7) * 7;
  return DAYS.slice(weekStart, state.day + 1).flatMap(day => day.words);
}

function renderProgressReview(isPhrase) {
  const learned = getLearnedItemsThisWeek().slice(-10);
  if (isPhrase) {
    return `
      <div class="progress-review listening-first-review">
        ${learned.map(({ item: [jp, , ko] }, index) => `
          <div class="listen-first-item">
            <div><span>표현 ${index + 1}</span><button type="button" onclick="speakJP('${jp}', 1)">🔊 자연 ▶</button></div>
            <details><summary>들은 뒤 표현·뜻 보기</summary><strong lang="ja">${jp}</strong><p>${ko}</p></details>
          </div>`).join("")}
      </div>`;
  }
  return `
    <div class="progress-review reading-review">
      ${learned.map(({ item: [jp, en, ko] }) => `
        <details>
          <summary lang="ja">${jp}</summary>
          <div>${renderAudioPair(jp, "compact")}<span>${en}${state.showKoreanReading ? ` · ${ko}` : ""}</span></div>
        </details>`).join("")}
    </div>`;
}

function save() {
  localStorage.setItem("commute-japanese-week1", JSON.stringify(state));
  updateProgress();
}

function updateProgress() {
  const count = state.done.length;
  document.querySelector("#progressText").textContent = `${count} / 140일`;
  document.querySelector("#progressBar").style.width = `${(count / 140) * 100}%`;
  document.querySelectorAll(".day-tab").forEach(tab => tab.classList.toggle("done", state.done.includes(Number(tab.dataset.day))));
}

function renderWeekTabs() {
  const currentWeek = Math.floor(state.day / 7);
  const currentMonth = Math.floor(currentWeek / 4);
  const startWeek = currentMonth * 4;
  weekTabs.innerHTML = window.WEEK_INFO.slice(startWeek, startWeek + 4).map((week, offset) => {
    const i = startWeek + offset;
    const complete = DAYS.slice(i * 7, i * 7 + 7).filter((_, offset) => state.done.includes(i * 7 + offset)).length;
    return `<button class="week-tab ${i === currentWeek ? "active" : ""}" type="button" onclick="selectWeek(${i})">
      <span>WEEK ${i + 1} · ${complete}/7</span><strong>${week.title}</strong><small>${week.subtitle}</small>
    </button>`;
  }).join("");
}

function renderMonthTabs() {
  const currentMonth = Math.floor(state.day / 28);
  const monthNames = ["문자·생존 표현", "회화의 뼈대", "여행 상황 정복", "듣기·즉답", "모의여행·자유 대화"];
  monthTabs.innerHTML = monthNames.map((name, i) => {
    const complete = DAYS.slice(i * 28, i * 28 + 28).filter((_, offset) => state.done.includes(i * 28 + offset)).length;
    return `<button class="month-tab ${i === currentMonth ? "active" : ""}" type="button" onclick="selectMonth(${i})">
      <span>MONTH ${i + 1}</span><strong>${name}</strong><small>${complete}/28일 완료</small>
    </button>`;
  }).join("");
}

function renderTabs() {
  const currentWeek = Math.floor(state.day / 7);
  const start = currentWeek * 7;
  tabs.innerHTML = DAYS.slice(start, start + 7).map((day, offset) => {
    const i = start + offset;
    return `
    <button class="day-tab ${i === state.day ? "active" : ""}" data-day="${i}" type="button">
      <span>DAY ${String(i + 1).padStart(2, "0")}</span><strong>${day.title.split(" ")[0]}</strong>
    </button>`;
  }).join("");
  tabs.querySelectorAll("button").forEach(button => button.addEventListener("click", () => selectDay(Number(button.dataset.day))));
  updateProgress();
}

function selectWeek(week) {
  stopAudioPlayback();
  const firstDay = week * 7;
  if (state.day < firstDay || state.day > firstDay + 6) state.day = firstDay;
  save();
  renderWeekTabs();
  renderTabs();
  renderLesson();
  renderWeekCheck();
}

function selectMonth(month) {
  stopAudioPlayback();
  const firstDay = month * 28;
  if (state.day < firstDay || state.day > firstDay + 27) state.day = firstDay;
  save();
  renderMonthTabs();
  renderWeekTabs();
  renderTabs();
  renderLesson();
  renderWeekCheck();
}

function renderLesson() {
  const day = DAYS[state.day];
  const isPhrase = day.kind === "phrase";
  const pronunciation = state.day < PRONUNCIATION_DAYS.length ? PRONUNCIATION_DAYS[state.day] : null;
  const precisionEnabled = state.precisionMode;
  const showKoreanReading = !precisionEnabled || state.showKoreanReading;
  const done = state.done.includes(state.day);
  const routine = state.routine[state.day] || [false, false, false, false];
  const weakToday = day.letters.filter(([jp]) => state.weak.includes(jp));
  const japaneseVoices = getJapaneseVoices();
  const activeVoice = getJapaneseVoice();
  const fixedAudioCount = Object.keys(window.STANDARD_AUDIO || {}).length;
  const fixedAudioReady = fixedAudioCount > 0;
  listeningSession = null;
  lesson.innerHTML = `
    <div class="lesson-head">
      <div class="lesson-head-row">
        <div>
          <div class="meta">DAY ${String(state.day + 1).padStart(2, "0")} · 20~30 MIN</div>
          <h2>${day.title}</h2>
          <p>${precisionEnabled
            ? "한글 독음보다 소리·입 모양·박자를 먼저 익히세요."
            : isPhrase ? "상황을 떠올리고 일본어 문장 전체를 따라 말하세요." : "글자를 보고 소리부터 말한 뒤 힌트를 확인하세요."}</p>
        </div>
        <div class="audio-actions">
          <select id="speechVoice" aria-label="일본어 목소리" ${fixedAudioReady || !japaneseVoices.length ? "disabled" : ""}>
            ${fixedAudioReady
              ? `<option value="">고정 기준 음성 · ${fixedAudioCount}개</option>`
              : japaneseVoices.length
              ? japaneseVoices.map((voice, index) => `<option value="${encodeURIComponent(voice.voiceURI)}" ${voice.voiceURI === activeVoice?.voiceURI ? "selected" : ""}>${voiceOptionLabel(voice, index)}</option>`).join("")
              : '<option value="">일본어(일본) 음성 없음</option>'}
          </select>
          <select id="speechRate" aria-label="음성 속도">
            <option value="0.62" ${state.speechRate === 0.62 ? "selected" : ""}>느리게</option>
            <option value="0.72" ${state.speechRate === 0.72 ? "selected" : ""}>천천히</option>
            <option value="0.88" ${state.speechRate === 0.88 ? "selected" : ""}>보통</option>
            <option value="1" ${state.speechRate === 1 ? "selected" : ""}>자연스럽게</option>
          </select>
          <button class="listen-all" type="button" onclick="speakToday()">🔊 오늘 ${isPhrase ? "표현" : "글자"} 전체 듣기</button>
          <span class="voice-status">${fixedAudioReady
            ? `고정 기준 음성 · 일본어(일본) · 전체 ${fixedAudioCount}개`
            : activeVoice
            ? `일본어(일본) · ${activeVoice.localService ? "기기 음성" : "온라인 음성"} · 다른 언어 대체 없음`
            : "일본어(일본) 전용 음성이 없어 재생이 잠겨 있어요."}</span>
        </div>
      </div>
    </div>
    <div class="lesson-body ${state.testMode ? "test-mode" : ""}">
      <div class="precision-toolbar ${precisionEnabled ? "active" : ""}">
        <div><span>ALL 140 DAYS</span><b>모든 항목 정밀 듣기</b><small>자연 속도 → 분해 속도 → 모라 → 한글 힌트 순서</small></div>
        <button type="button" onclick="togglePrecisionMode()">${precisionEnabled ? "켜짐 · 간단히 보기" : "꺼짐 · 정밀 듣기 켜기"}</button>
      </div>
      ${precisionEnabled ? renderPrecisionPanel(day, pronunciation) : ""}
      <div class="study-routine">
        <div><b>오늘의 20분 루틴</b><span>전부 완벽하게 하려 하지 말고 순서만 지켜요.</span></div>
        <div class="routine-list">
          ${(precisionEnabled
            ? ["모든 항목 자연 속도 듣기", "분해 속도로 연결 확인", "오늘 배운 소리 확인", "모라 박자 따라 말하기"]
            : ["전체 듣기 1회", `${isPhrase ? "표현" : "글자"} 따라 말하기 2회`, "오늘 배운 소리 확인", "핵심 단어 따라 말하기 1회"]).map((label, i) => `
            <label><input type="checkbox" data-routine="${i}" ${routine[i] ? "checked" : ""} onchange="setRoutine(${i}, this.checked)"><span>${label}</span></label>`).join("")}
        </div>
      </div>
      <div class="block-title">
        <h3>오늘의 ${isPhrase ? "핵심 표현" : "새 글자"}</h3>
        <button class="test-toggle ${state.testMode ? "active" : ""}" type="button" onclick="toggleTestMode()">${state.testMode ? "힌트 보이기" : "힌트 가리고 테스트"}</button>
      </div>
      <p class="audio-guide">${precisionEnabled
        ? fixedAudioReady
          ? "먼저 자연 ▶으로 전체 높낮이와 박자를 듣고 흉내 낸 다음, 분해 ▶으로 연결을 확인하세요."
          : "먼저 ▶만 눌러 듣고 소리를 흉내 낸 다음 글자를 확인하세요. 기기 음성은 반복 연습용입니다."
        : "재생 버튼을 누르고 한 번 들은 뒤, 두 번째에는 바로 따라 말해 보세요."}</p>
      <div class="letters-grid ${isPhrase ? "phrase-grid" : ""}">
        ${day.letters.map(([jp, en, ko, hint]) => `
          <article class="letter-card ${isPhrase ? "phrase-card" : ""}">
            <strong lang="ja">${jp}</strong>
            ${renderAudioPair(jp, "card-audio")}
            <span class="sound">${en || ""}${showKoreanReading ? `${en ? " · " : ""}${ko}` : '<i>한글 독음 숨김</i>'}</span><small>${hint}</small>
            <span class="card-pronunciation">${pronunciationDetail(jp, en, isPhrase)}</span>
            ${renderMoraStrip(jp)}
            <button class="weak-button ${state.weak.includes(jp) ? "active" : ""}" type="button" onclick="toggleWeak('${jp}')" aria-label="${jp} 복습 표시">${state.weak.includes(jp) ? "★ 복습 중" : "☆ 헷갈려요"}</button>
          </article>`).join("")}
      </div>
      <div class="tip"><b>${precisionEnabled ? "정밀 모드 원칙" : isPhrase ? "회화 포인트" : "발음 포인트"}</b>${precisionEnabled
        ? "한글 독음은 기억을 돕는 힌트일 뿐 정답 소리가 아닙니다. 위의 입 모양·혀 위치·모라를 기준으로 연습하세요."
        : day.tip}</div>
      <div class="weak-tray">
        <div><b>복습 바구니</b><span>헷갈리는 ${isPhrase ? "표현" : "글자"}만 모아 다음 날 먼저 들어요.</span></div>
        <div class="weak-chips">
          ${state.weak.length ? state.weak.slice(-12).map(jp => `<button type="button" onclick="speakJP('${jp}')">${jp} <span>▶</span></button>`).join("") : "<small>아직 표시한 항목이 없어요.</small>"}
          ${state.weak.length > 12 ? `<small>최근 12개 표시 · 전체 ${state.weak.length}개</small>` : ""}
        </div>
        ${weakToday.length ? `<p>오늘 ${isPhrase ? "표현" : "글자"} 중 ${weakToday.length}개가 복습 중이에요.</p>` : ""}
      </div>
      <div class="block-title"><h3>핵심 단어</h3><span>소리로 듣고 뜻 연결하기</span></div>
      <div class="word-list">
        ${day.words.map(([jp, ko, meaning]) => `
          <div class="word">
            <strong lang="ja">${jp}</strong><span>${showKoreanReading ? ko : "소리 먼저"}</span><em>${meaning}</em>
            ${renderAudioPair(jp, "word-audio")}
            <small>${pronunciationDetail(jp)}</small>
            ${renderMoraStrip(jp)}
          </div>`).join("")}
      </div>
      <div class="listening-quiz">
        <div class="quiz-head"><div><span class="mini-label">LISTENING CHECK</span><h3>소리만 듣고 ${isPhrase ? "뜻" : "글자"} 연결하기</h3></div><b>오늘 범위만</b></div>
        <p>아직 배우지 않은 항목은 나오지 않습니다. 오늘 화면에서 배운 소리만 짧게 확인해요.</p>
        <div id="listeningQuizBody"><button class="quiz-start" type="button" onclick="startListeningQuiz()">오늘 배운 소리로 시작</button></div>
      </div>
      <div class="quiz">
        <div class="quiz-head"><h3>${isPhrase ? "이번 주 여기까지 표현 듣기" : "이번 주 여기까지 읽기"}</h3><span>DAY ${state.day + 1}까지 배운 항목만</span></div>
        <p class="progress-review-guide">${isPhrase ? "먼저 재생 버튼만 누르고 뜻을 떠올린 뒤 펼쳐 보세요." : "글자를 읽어 본 뒤 펼치면 소리와 힌트를 확인할 수 있어요."}</p>
        ${renderProgressReview(isPhrase)}
      </div>
      <div class="day-review"><strong>짧은 복습</strong><span>${day.review}</span></div>
      <div class="more-study">
        <span class="mini-label">GOOD DAY BONUS · 15 MIN</span>
        <h3>공부가 잘 붙는 날엔 여기까지</h3>
        <p>${(day.bonus || "복습 바구니의 항목을 자연 속도와 분해 속도로 한 번씩 듣고 따라 말해 보세요.")
          .replace(/5점 퀴즈에 재도전/g, "헷갈린 소리를 다시 듣기")
          .replace(/최고점 5점을 만든 뒤/g, "헷갈린 소리를 모두 다시 들은 뒤")
          .replace(/녹음하기/g, "이어 말하기")}</p>
        ${state.day < DAYS.length - 1 ? `<button type="button" onclick="selectDay(${state.day + 1})">다음 날 미리 보기 →</button>` : ""}
      </div>
      <div class="record">
        <input class="mistake-input" id="mistakes" value="${state.mistakes[state.day] || ""}" placeholder="오늘 막힌 ${isPhrase ? "표현" : "글자"} 메모" aria-label="오늘 막힌 내용">
        <button class="complete-button ${done ? "done" : ""}" id="complete" type="button">${done ? "오늘 학습 완료 ✓" : "오늘 학습 완료"}</button>
      </div>
    </div>`;
  document.querySelector("#speechRate").addEventListener("change", event => {
    state.speechRate = Number(event.target.value);
    save();
    showAudioStatus(`재생 속도 · ${event.target.options[event.target.selectedIndex].text}`);
  });
  if (!fixedAudioReady) {
    document.querySelector("#speechVoice").addEventListener("change", event => {
      state.speechVoiceURI = decodeURIComponent(event.target.value);
      save();
      showAudioStatus(`목소리 · ${event.target.options[event.target.selectedIndex].text}`);
      speakJP(day.letters[0][0]);
    });
  }
  document.querySelector("#mistakes").addEventListener("input", event => {
    state.mistakes[state.day] = event.target.value;
    save();
  });
  document.querySelector("#complete").addEventListener("click", () => {
    if (done) state.done = state.done.filter(x => x !== state.day);
    else state.done.push(state.day);
    save();
    renderLesson();
    renderMonthTabs();
    renderWeekTabs();
    renderTabs();
  });
}

function selectDay(index, scroll = true) {
  stopAudioPlayback();
  state.day = index;
  save();
  renderMonthTabs();
  renderWeekTabs();
  renderTabs();
  renderLesson();
  renderWeekCheck();
  if (scroll) lesson.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#resumeButton").addEventListener("click", () => {
  const next = DAYS.findIndex((_, i) => !state.done.includes(i));
  selectDay(next === -1 ? 0 : next);
});

function renderWeekCheck() {
  const week = Math.floor(state.day / 7);
  const weekStart = week * 7;
  const learnedDays = DAYS.slice(weekStart, state.day + 1);
  const learnedItems = learnedDays.flatMap(day =>
    day.letters.map(([jp, , ko]) => ({ jp, ko, isPhrase: day.kind === "phrase" }))
  ).slice(-12);
  const learnedWords = learnedDays.flatMap(day => day.words).slice(-8);
  document.querySelector("#weekCheck").innerHTML = `
    <span class="section-kicker coral">WEEK ${week + 1} · DAY ${state.day + 1}까지</span>
    <h2>이번 주 여기까지 듣기</h2>
    <p>지금 선택한 날까지 실제로 배운 항목만 듣습니다. 막히는 소리는 복습 바구니에 남기세요.</p>
    <div class="check-section">
      <span class="check-label">배운 글자·표현</span>
      <div class="check-listen-grid">
        ${learnedItems.map(({ jp, ko, isPhrase }) => `
          <div class="check-listen-item">
            ${renderAudioPair(jp, "compact")}
            <details><summary>${isPhrase ? "표현·뜻 보기" : "글자 보기"}</summary><strong lang="ja">${jp}</strong>${isPhrase ? `<small>${ko}</small>` : ""}</details>
          </div>`).join("")}
      </div>
    </div>
    <div class="check-section">
      <span class="check-label">배운 여행 단어</span>
      <div class="check-listen-grid">
        ${learnedWords.map(([jp, , meaning]) => `
          <div class="check-listen-item">
            ${renderAudioPair(jp, "compact")}
            <details><summary>단어·뜻 보기</summary><strong lang="ja">${jp}</strong><small>${meaning}</small></details>
          </div>`).join("")}
      </div>
    </div>`;
}

renderMonthTabs();
renderWeekTabs();
renderTabs();
renderLesson();
renderWeekCheck();

if ("speechSynthesis" in window) {
  window.speechSynthesis.addEventListener("voiceschanged", () => {
    const voiceSelect = document.querySelector("#speechVoice");
    if (!voiceSelect || (!voiceSelect.disabled && voiceSelect.options.length > 1)) return;
    renderLesson();
  });
}
