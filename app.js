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

const state = JSON.parse(localStorage.getItem("commute-japanese-week1") || '{"day":0,"done":[],"mistakes":{},"score":""}');
const lesson = document.querySelector("#lesson");
const tabs = document.querySelector("#dayTabs");

function save() {
  localStorage.setItem("commute-japanese-week1", JSON.stringify(state));
  updateProgress();
}

function updateProgress() {
  const count = state.done.length;
  document.querySelector("#progressText").textContent = `${count} / 7일`;
  document.querySelector("#progressBar").style.width = `${(count / 7) * 100}%`;
  document.querySelectorAll(".day-tab").forEach((tab, i) => tab.classList.toggle("done", state.done.includes(i)));
}

function renderTabs() {
  tabs.innerHTML = DAYS.map((day, i) => `
    <button class="day-tab ${i === state.day ? "active" : ""}" data-day="${i}" type="button">
      <span>DAY ${String(i + 1).padStart(2, "0")}</span><strong>${day.title.split(" ")[0]}</strong>
    </button>`).join("");
  tabs.querySelectorAll("button").forEach(button => button.addEventListener("click", () => selectDay(Number(button.dataset.day))));
  updateProgress();
}

function renderLesson() {
  const day = DAYS[state.day];
  const done = state.done.includes(state.day);
  lesson.innerHTML = `
    <div class="lesson-head">
      <div class="meta">DAY ${String(state.day + 1).padStart(2, "0")} · 20~30 MIN</div>
      <h2>${day.title}</h2>
      <p>글자를 보고 소리부터 말한 뒤 힌트를 확인하세요.</p>
    </div>
    <div class="lesson-body">
      <div class="block-title"><h3>오늘의 새 글자</h3><span>${day.letters.length}개 · 약 10분</span></div>
      <div class="letters-grid">
        ${day.letters.map(([jp, en, ko, hint]) => `
          <article class="letter-card">
            <strong lang="ja">${jp}</strong><span class="sound">${en} · ${ko}</span><small>${hint}</small>
          </article>`).join("")}
      </div>
      <div class="tip"><b>발음 포인트</b>${day.tip}</div>
      <div class="block-title"><h3>여행에서 만날 단어</h3><span>글자씩 짚으며 읽기</span></div>
      <div class="word-list">
        ${day.words.map(([jp, ko, meaning]) => `
          <div class="word"><strong lang="ja">${jp}</strong><span>${ko}</span><em>${meaning}</em></div>`).join("")}
      </div>
      <div class="quiz">
        <div class="quiz-head"><h3>3초 읽기 퀴즈</h3><button class="reveal-button" id="reveal" type="button">정답 보기</button></div>
        <div class="quiz-row" lang="ja">${day.quiz.join("<br>")}</div>
        <div class="answer" id="answer" hidden>${day.answer}</div>
      </div>
      <div class="day-review"><strong>짧은 복습</strong><span>${day.review}</span></div>
      <div class="record">
        <input class="mistake-input" id="mistakes" value="${state.mistakes[state.day] || ""}" placeholder="헷갈린 글자 입력 · 예: ぬ, ね" aria-label="헷갈린 글자">
        <button class="complete-button ${done ? "done" : ""}" id="complete" type="button">${done ? "오늘 학습 완료 ✓" : "오늘 학습 완료"}</button>
      </div>
    </div>`;
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
    renderTabs();
  });
}

function selectDay(index, scroll = true) {
  state.day = index;
  save();
  renderTabs();
  renderLesson();
  if (scroll) lesson.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.querySelector("#resumeButton").addEventListener("click", () => {
  const next = DAYS.findIndex((_, i) => !state.done.includes(i));
  selectDay(next === -1 ? 0 : next);
});

document.querySelector("#scoreInput").value = state.score;
document.querySelector("#scoreButton").addEventListener("click", () => {
  const score = Math.max(0, Math.min(35, Number(document.querySelector("#scoreInput").value)));
  state.score = score;
  save();
  const result = document.querySelector("#scoreResult");
  if (score >= 30) result.innerHTML = "<strong>빠른 진도</strong><br>2주차는 새 글자 10개/일 + 오답 3개로 진행하면 좋아요.";
  else if (score >= 24) result.innerHTML = "<strong>기본 진도</strong><br>2주차는 새 글자 8개/일 + 오답 5개로 진행하면 좋아요.";
  else result.innerHTML = "<strong>복습 중심</strong><br>2주차는 새 글자 6개/일 + 기본 46자 이틀 복습으로 시작해요.";
  result.hidden = false;
});

renderTabs();
renderLesson();
