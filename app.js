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

DAYS.push(...window.EXTRA_DAYS);

const state = JSON.parse(localStorage.getItem("commute-japanese-week1") || '{"day":0,"done":[],"mistakes":{},"score":""}');
state.weak ||= [];
state.routine ||= {};
state.listeningScores ||= {};
state.speechRate ||= 0.72;
state.testMode ||= false;
state.weekScores ||= {};
const lesson = document.querySelector("#lesson");
const tabs = document.querySelector("#dayTabs");
const weekTabs = document.querySelector("#weekTabs");
const monthTabs = document.querySelector("#monthTabs");
let audioToastTimer;
let listeningSession = null;

function showAudioStatus(message) {
  const toast = document.querySelector("#audioToast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(audioToastTimer);
  audioToastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
}

function speakJP(text) {
  if (!("speechSynthesis" in window)) {
    showAudioStatus("이 브라우저는 음성 재생을 지원하지 않아요.");
    return;
  }
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ja-JP";
  utterance.rate = state.speechRate;
  utterance.pitch = 1;
  const voices = window.speechSynthesis.getVoices();
  const japaneseVoice = voices.find(voice => voice.lang.toLowerCase().startsWith("ja"));
  if (japaneseVoice) utterance.voice = japaneseVoice;
  utterance.onerror = () => showAudioStatus("일본어 음성을 재생하지 못했어요. 기기의 일본어 음성을 확인해 주세요.");
  window.speechSynthesis.speak(utterance);
  showAudioStatus(`재생 중 · ${text.replaceAll("、", " ")}`);
}

function speakToday() {
  const text = DAYS[state.day].letters.map(([jp]) => jp).join("、");
  speakJP(text);
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
  listeningSession = { day: state.day, round: 0, score: 0 };
  renderListeningQuestion();
}

function renderListeningQuestion() {
  const host = document.querySelector("#listeningQuizBody");
  if (!host || !listeningSession || listeningSession.day !== state.day) return;
  if (listeningSession.round >= 5) {
    const score = listeningSession.score;
    state.listeningScores[state.day] = Math.max(state.listeningScores[state.day] || 0, score);
    if (score >= 3) setRoutine(2, true);
    save();
    host.innerHTML = `
      <div class="listening-result"><strong>${score} / 5점</strong>
      <span>${score >= 4 ? "소리와 글자 연결이 잘 되고 있어요." : score >= 3 ? "통과! 틀린 글자만 한 번 더 들어 보세요." : "복습 바구니에 헷갈린 글자를 넣고 다시 도전해요."}</span></div>
      <button class="quiz-start" type="button" onclick="startListeningQuiz()">다시 도전</button>`;
    return;
  }
  const day = DAYS[state.day];
  const items = day.letters;
  const targetItem = items[Math.floor(Math.random() * items.length)];
  const choices = shuffled([targetItem, ...shuffled(items.filter(item => item[0] !== targetItem[0])).slice(0, 3)]);
  listeningSession.target = targetItem[0];
  listeningSession.round += 1;
  host.innerHTML = `
    <div class="listening-progress">문제 ${listeningSession.round} / 5 · 현재 ${listeningSession.score}점</div>
    <button class="listen-prompt" type="button" onclick="speakJP('${targetItem[0]}')">🔊 소리 다시 듣기</button>
    <div class="listening-choices ${day.kind === "phrase" ? "meaning-choices" : ""}">
      ${choices.map(choice => `<button type="button" data-answer="${choice[0]}" onclick="answerListening('${choice[0]}', this)">${day.kind === "phrase" ? choice[2] : choice[0]}</button>`).join("")}
    </div>
    <div class="listening-feedback" id="listeningFeedback">소리를 듣고 ${day.kind === "phrase" ? "뜻을" : "글자를"} 골라 보세요.</div>`;
  speakJP(targetItem[0]);
}

function answerListening(choice, button) {
  if (!listeningSession || button.parentElement.classList.contains("answered")) return;
  const correct = choice === listeningSession.target;
  if (correct) listeningSession.score += 1;
  button.parentElement.classList.add("answered");
  button.classList.add(correct ? "correct" : "wrong");
  const correctButton = [...button.parentElement.children].find(item => item.dataset.answer === listeningSession.target);
  if (correctButton) correctButton.classList.add("correct");
  document.querySelector("#listeningFeedback").textContent = correct ? "정답이에요!" : "정답을 표시했어요. 소리를 한 번 더 들어 보세요.";
  setTimeout(renderListeningQuestion, 850);
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
  const firstDay = week * 7;
  if (state.day < firstDay || state.day > firstDay + 6) state.day = firstDay;
  save();
  renderWeekTabs();
  renderTabs();
  renderLesson();
  renderWeekCheck();
}

function selectMonth(month) {
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
  const done = state.done.includes(state.day);
  const routine = state.routine[state.day] || [false, false, false, false];
  const weakToday = day.letters.filter(([jp]) => state.weak.includes(jp));
  listeningSession = null;
  lesson.innerHTML = `
    <div class="lesson-head">
      <div class="lesson-head-row">
        <div>
          <div class="meta">DAY ${String(state.day + 1).padStart(2, "0")} · 20~30 MIN</div>
          <h2>${day.title}</h2>
          <p>${isPhrase ? "상황을 떠올리고 일본어 문장 전체를 따라 말하세요." : "글자를 보고 소리부터 말한 뒤 힌트를 확인하세요."}</p>
        </div>
        <div class="audio-actions">
          <select id="speechRate" aria-label="음성 속도">
            <option value="0.62" ${state.speechRate === 0.62 ? "selected" : ""}>느리게</option>
            <option value="0.72" ${state.speechRate === 0.72 ? "selected" : ""}>천천히</option>
            <option value="0.88" ${state.speechRate === 0.88 ? "selected" : ""}>보통</option>
          </select>
          <button class="listen-all" type="button" onclick="speakToday()">🔊 오늘 ${isPhrase ? "표현" : "글자"} 전체 듣기</button>
        </div>
      </div>
    </div>
    <div class="lesson-body ${state.testMode ? "test-mode" : ""}">
      <div class="study-routine">
        <div><b>오늘의 20분 루틴</b><span>전부 완벽하게 하려 하지 말고 순서만 지켜요.</span></div>
        <div class="routine-list">
          ${["전체 듣기 1회", `${isPhrase ? "표현" : "글자"} 따라 말하기 2회`, "듣기 퀴즈 3점 이상", "핵심 단어 따라 말하기 1회"].map((label, i) => `
            <label><input type="checkbox" data-routine="${i}" ${routine[i] ? "checked" : ""} onchange="setRoutine(${i}, this.checked)"><span>${label}</span></label>`).join("")}
        </div>
      </div>
      <div class="block-title">
        <h3>오늘의 ${isPhrase ? "핵심 표현" : "새 글자"}</h3>
        <button class="test-toggle ${state.testMode ? "active" : ""}" type="button" onclick="toggleTestMode()">${state.testMode ? "힌트 보이기" : "힌트 가리고 테스트"}</button>
      </div>
      <p class="audio-guide">재생 버튼을 누르고 한 번 들은 뒤, 두 번째에는 바로 따라 말해 보세요.</p>
      <div class="letters-grid ${isPhrase ? "phrase-grid" : ""}">
        ${day.letters.map(([jp, en, ko, hint]) => `
          <article class="letter-card ${isPhrase ? "phrase-card" : ""}">
            <strong lang="ja">${jp}</strong>
            <button class="audio-button" type="button" onclick="speakJP('${jp}')" aria-label="${jp} 발음 듣기">▶</button>
            <span class="sound">${en ? `${en} · ` : ""}${ko}</span><small>${hint}</small>
            <button class="weak-button ${state.weak.includes(jp) ? "active" : ""}" type="button" onclick="toggleWeak('${jp}')" aria-label="${jp} 복습 표시">${state.weak.includes(jp) ? "★ 복습 중" : "☆ 헷갈려요"}</button>
          </article>`).join("")}
      </div>
      <div class="tip"><b>${isPhrase ? "회화 포인트" : "발음 포인트"}</b>${day.tip}</div>
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
            <strong lang="ja">${jp}</strong><span>${ko}</span><em>${meaning}</em>
            <button class="audio-button" type="button" onclick="speakJP('${jp}')" aria-label="${jp} 발음 듣기">▶</button>
          </div>`).join("")}
      </div>
      <div class="listening-quiz">
        <div class="quiz-head"><div><span class="mini-label">ACTIVE RECALL</span><h3>소리만 듣고 ${isPhrase ? "뜻" : "글자"} 고르기</h3></div><b>최고 ${state.listeningScores[state.day] || 0} / 5</b></div>
        <p>화면을 보지 않고 먼저 소리를 들은 뒤 선택하세요. 3점 이상이면 오늘 루틴 통과입니다.</p>
        <div id="listeningQuizBody"><button class="quiz-start" type="button" onclick="startListeningQuiz()">5문제 시작</button></div>
      </div>
      <div class="quiz">
        <div class="quiz-head"><h3>${isPhrase ? "한국어를 보고 즉답하기" : "3초 읽기 퀴즈"}</h3><button class="reveal-button" id="reveal" type="button">정답 보기</button></div>
        <div class="quiz-row ${isPhrase ? "meaning-quiz" : ""}">${day.quiz.join("<br>")}</div>
        <div class="answer" id="answer" hidden>${day.answer}</div>
      </div>
      <div class="day-review"><strong>짧은 복습</strong><span>${day.review}</span></div>
      <div class="more-study">
        <span class="mini-label">GOOD DAY BONUS · 15 MIN</span>
        <h3>공부가 잘 붙는 날엔 여기까지</h3>
        <p>${day.bonus || "듣기 퀴즈 5점에 도전하고 복습 바구니 표현을 모두 한 번씩 말해 보세요."}</p>
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
  document.querySelector("#reveal").addEventListener("click", event => {
    const answer = document.querySelector("#answer");
    answer.hidden = !answer.hidden;
    event.currentTarget.textContent = answer.hidden ? "정답 보기" : "정답 닫기";
  });
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
  const check = window.WEEK_CHECKS[week];
  const savedScore = state.weekScores[week] ?? "";
  document.querySelector("#weekCheck").innerHTML = `
    <span class="section-kicker coral">WEEK ${week + 1} CHECK</span>
    <h2>${check.title}</h2>
    <p>${check.description}</p>
    ${check.groups.map(([label, content]) => `<div class="check-card"><span>${label}</span><strong>${content}</strong></div>`).join("")}
    <label class="score-label" for="scoreInput">내 점수</label>
    <div class="score-row">
      <input id="scoreInput" type="number" min="0" max="${check.max}" inputmode="numeric" value="${savedScore}" placeholder="0">
      <span>/ ${check.max}점</span>
      <button id="scoreButton" type="button">다음 학습 강도 보기</button>
    </div>
    <div id="scoreResult" class="score-result" hidden></div>`;
  document.querySelector("#scoreButton").addEventListener("click", () => gradeWeek(week, check.max));
}

function gradeWeek(week, max) {
  const score = Math.max(0, Math.min(max, Number(document.querySelector("#scoreInput").value)));
  state.weekScores[week] = score;
  save();
  const result = document.querySelector("#scoreResult");
  const ratio = max ? score / max : 0;
  if (ratio >= .85) result.innerHTML = "<strong>선행 가능</strong><br>다음 주 기본 분량에 보너스 15분을 주 2~3회 더해도 좋아요.";
  else if (ratio >= .65) result.innerHTML = "<strong>기본 진도 유지</strong><br>지금 속도가 적당해요. 복습 바구니만 매일 먼저 확인하세요.";
  else result.innerHTML = "<strong>복습 우선</strong><br>다음 주 첫 이틀은 새 진도 전에 이번 주 역할극을 한 번씩 반복하세요.";
  result.hidden = false;
}

renderMonthTabs();
renderWeekTabs();
renderTabs();
renderLesson();
renderWeekCheck();
