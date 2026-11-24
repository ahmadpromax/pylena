(function () {
  "use strict";

  const COURSE = window.ELENA_COURSE_DATA;
  const STORAGE_KEY = "elena_python_academy_state_v1";

  function toPersianDigits(input) {
    return String(input).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[d]);
  }

  function normalizeDigits(str) {
    return String(str)
      .replace(/[۰-۹]/g, (d) => "۰۱۲۳۴۵۶۷۸۹".indexOf(d))
      .replace(/[٠-٩]/g, (d) => "٠١٢٣٤٥٦٧٨٩".indexOf(d))
      .trim();
  }

  // Persistent State
  const defaultState = {
    currentLessonId: 1,
    completedLessons: [],
    unlockedWardrobe: [],
    chargedUntil: 0,
    lastChargedLessonId: null
  };

  let state = loadState();
  let activeChapterTab = Math.ceil(state.currentLessonId / 20) || 1;
  let pyodideInstance = null;
  let pyodideReady = false;
  let chargeInterval = null;
  let mathAttemptsLeft = 2;
  let sliderInteractive = false;

  function loadState() {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return { ...defaultState };
      const parsed = JSON.parse(raw);
      return {
        currentLessonId: Number(parsed.currentLessonId) || 1,
        completedLessons: Array.isArray(parsed.completedLessons) ? parsed.completedLessons : [],
        unlockedWardrobe: Array.isArray(parsed.unlockedWardrobe) ? parsed.unlockedWardrobe : [],
        chargedUntil: Number(parsed.chargedUntil) || 0,
        lastChargedLessonId: parsed.lastChargedLessonId || null
      };
    } catch (_) {
      return { ...defaultState };
    }
  }

  function saveState() {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch (_) {}
  }

  // DOM Elements
  const el = {
    chapterLocationLabel: document.getElementById("chapter-location-label"),
    chargePill: document.getElementById("charge-pill"),
    chargeStatusText: document.getElementById("charge-status-text"),
    chargeTimer: document.getElementById("charge-timer"),
    overallProgressText: document.getElementById("overall-progress-text"),
    lessonNumberBadge: document.getElementById("lesson-number-badge"),
    lessonExamTag: document.getElementById("lesson-exam-tag"),
    elenaMainImg: document.getElementById("elena-main-img"),
    stateRibbon: document.getElementById("state-ribbon"),
    btnReopenSpotlight: document.getElementById("btn-reopen-spotlight"),
    wardrobeCount: document.getElementById("wardrobe-count"),
    wardrobeItems: document.getElementById("wardrobe-items"),
    lessonTitle: document.getElementById("lesson-title"),
    dialogueFeed: document.getElementById("dialogue-feed"),
    conceptBody: document.getElementById("concept-body"),
    missionStatus: document.getElementById("mission-status"),
    missionText: document.getElementById("mission-text"),
    pyodideStatus: document.getElementById("pyodide-status"),
    codeEditor: document.getElementById("code-editor"),
    btnRunCode: document.getElementById("btn-run-code"),
    btnResetCode: document.getElementById("btn-reset-code"),
    consoleOutput: document.getElementById("console-output"),
    btnClearConsole: document.getElementById("btn-clear-console"),
    mathBox: document.getElementById("math-box"),
    mathAttemptsBadge: document.getElementById("math-attempts-badge"),
    mathBody: document.getElementById("math-body"),
    mathEquation: document.getElementById("math-equation"),
    mathAnswerInput: document.getElementById("math-answer-input"),
    btnSubmitMath: document.getElementById("btn-submit-math"),
    mathFeedback: document.getElementById("math-feedback"),
    hintRevealed: document.getElementById("hint-revealed"),
    chapterTabs: document.getElementById("chapter-tabs"),
    lessonPillsStrip: document.getElementById("lesson-pills-strip"),
    btnPrevLesson: document.getElementById("btn-prev-lesson"),
    btnNextLesson: document.getElementById("btn-next-lesson"),
    // Spotlight modal
    spotlightOverlay: document.getElementById("spotlight-overlay"),
    btnCloseSpotlight: document.getElementById("btn-close-spotlight"),
    comparisonContainer: document.getElementById("comparison-container"),
    spotlightAfterImg: document.getElementById("spotlight-after-img"),
    spotlightBeforeImg: document.getElementById("spotlight-before-img"),
    compBeforeClip: document.getElementById("comp-before-clip"),
    compSliderLine: document.getElementById("comp-slider-line"),
    sliderInstruction: document.getElementById("slider-instruction"),
    spotlightTimerText: document.getElementById("spotlight-timer-text"),
    spotlightLessonHeading: document.getElementById("spotlight-lesson-heading"),
    unlockedItemBanner: document.getElementById("unlocked-item-banner"),
    spotlightWhisperText: document.getElementById("spotlight-whisper-text"),
    examGateBox: document.getElementById("exam-gate-box"),
    examGateTitle: document.getElementById("exam-gate-title"),
    examGateDesc: document.getElementById("exam-gate-desc"),
    examOfficialLink: document.getElementById("exam-official-link"),
    btnSpotlightNextLesson: document.getElementById("btn-spotlight-next-lesson"),
    // Roadmap modal
    btnExamRoadmap: document.getElementById("btn-exam-roadmap"),
    roadmapOverlay: document.getElementById("roadmap-overlay"),
    btnCloseRoadmap: document.getElementById("btn-close-roadmap")
  };

  function getLesson(id) {
    return COURSE.lessons.find((l) => l.id === id) || COURSE.lessons[0];
  }

  function isChargedNow() {
    return Date.now() < state.chargedUntil;
  }

  function maxUnlockedLessonId() {
    if (state.completedLessons.length === 0) return 1;
    const maxDone = Math.max(...state.completedLessons);
    return Math.min(80, maxDone + 1);
  }

  // Initialize Pyodide for real browser Python execution
  async function initPyodideEngine() {
    try {
      if (typeof loadPyodide !== "function") {
        el.pyodideStatus.textContent = "⚠️ عدم دسترسی به CDN پایتون؛ بررسی اینترنت";
        return;
      }
      pyodideInstance = await loadPyodide();
      pyodideReady = true;
      el.pyodideStatus.textContent = "✅ موتور Python 3 آماده است";
      el.btnRunCode.disabled = false;
    } catch (err) {
      el.pyodideStatus.textContent = "❌ خطا در بارگذاری پایتون";
      el.consoleOutput.textContent = String(err);
      el.consoleOutput.classList.add("error");
    }
  }

  // Run User Python Code & Validate
  async function runUserPythonCode() {
    if (!pyodideReady || !pyodideInstance) return;
    const lesson = getLesson(state.currentLessonId);
    const userCode = el.codeEditor.value;

    el.btnRunCode.disabled = true;
    el.consoleOutput.classList.remove("error");
    el.consoleOutput.textContent = "در حال اجرا...";

    try {
      // Redirect stdout/stderr cleanly in Python
      pyodideInstance.runPython(`
import sys, io
_elena_stdout = io.StringIO()
sys.stdout = _elena_stdout
sys.stderr = _elena_stdout
`);
      await pyodideInstance.runPythonAsync(userCode);
      const stdout = pyodideInstance.runPython("_elena_stdout.getvalue()");
      el.consoleOutput.textContent = stdout || "(برنامه بدون خروجی متنی اجرا شد)";

      // Validate lesson mission expression inside Python
      pyodideInstance.globals.set("output", stdout);
      const passed = Boolean(pyodideInstance.runPython(`bool(${lesson.validationExpr})`));

      if (passed) {
        onLessonSolved(lesson);
      } else {
        el.consoleOutput.textContent += "\n\n⚠️ کد اجرا شد اما خروجی دقیقاً مطابق مأموریت این درس نیست.";
      }
    } catch (err) {
      el.consoleOutput.classList.add("error");
      el.consoleOutput.textContent = String(err);
    } finally {
      el.btnRunCode.disabled = false;
    }
  }

  function onLessonSolved(lesson) {
    if (!state.completedLessons.includes(lesson.id)) {
      state.completedLessons.push(lesson.id);
    }
    if (!state.unlockedWardrobe.includes(lesson.rewardItem)) {
      state.unlockedWardrobe.push(lesson.rewardItem);
    }

    // Activate 60-second Charge state
    state.chargedUntil = Date.now() + 60 * 1000;
    state.lastChargedLessonId = lesson.id;
    saveState();

    renderWardrobe();
    renderNavBar();
    updateProgressHeader();
    syncChargeVisualState();
    openSpotlightShowcase(lesson);
  }

  // 60-Second Charge vs Withered Timer Loop
  function startChargeTicker() {
    if (chargeInterval) clearInterval(chargeInterval);
    chargeInterval = setInterval(() => {
      syncChargeVisualState();
    }, 500);
  }

  function syncChargeVisualState() {
    const lesson = getLesson(state.currentLessonId);
    const remainingMs = state.chargedUntil - Date.now();
    const charged = remainingMs > 0;

    if (charged) {
      const sec = Math.ceil(remainingMs / 1000);
      const secFa = toPersianDigits(sec);
      el.chargePill.classList.remove("withered");
      el.chargePill.classList.add("charged");
      el.chargeStatusText.textContent = "وضعیت: درخشان و شارژ شده";
      el.chargeTimer.hidden = false;
      el.chargeTimer.textContent = `${secFa} ثانیه`;

      el.stateRibbon.classList.remove("withered");
      el.stateRibbon.classList.add("charged");
      el.stateRibbon.textContent = `✨ شارژ فعال (${secFa} ثانیه)`;

      el.spotlightTimerText.textContent = `طراوت باقی‌مانده: ${secFa} ثانیه`;
      el.btnReopenSpotlight.hidden = false;

      // Show after image on main stage if current lesson is completed
      const imgState = state.completedLessons.includes(lesson.id) ? "after" : "before";
      if (el.elenaMainImg.dataset.currentKey !== `${lesson.id}_${imgState}`) {
        el.elenaMainImg.dataset.currentKey = `${lesson.id}_${imgState}`;
        window.ElenaAssetLoader.applyImageWithFallback(el.elenaMainImg, lesson.id, imgState, lesson.chapter);
      }
    } else {
      // Withered State (All unlocked wardrobe items remain preserved!)
      el.chargePill.classList.remove("charged");
      el.chargePill.classList.add("withered");
      el.chargeStatusText.textContent = "وضعیت: نیازمند شارژ";
      el.chargeTimer.hidden = true;

      el.stateRibbon.classList.remove("charged");
      el.stateRibbon.classList.add("withered");
      el.stateRibbon.textContent = "حالت پژمرده / نیازمند شارژ مجدد";

      el.spotlightTimerText.textContent = "زمان طراوت ۶۰ ثانیه‌ای به پایان رسید";
      el.btnReopenSpotlight.hidden = !state.completedLessons.includes(lesson.id);

      if (el.elenaMainImg.dataset.currentKey !== `${lesson.id}_before`) {
        el.elenaMainImg.dataset.currentKey = `${lesson.id}_before`;
        window.ElenaAssetLoader.applyImageWithFallback(el.elenaMainImg, lesson.id, "before", lesson.chapter);
      }
    }
  }

  // Spotlight Showcase + Crossfade -> Interactive Before/After Slider
  function openSpotlightShowcase(lesson) {
    window.ElenaAssetLoader.applyImageWithFallback(el.spotlightBeforeImg, lesson.id, "before", lesson.chapter);
    window.ElenaAssetLoader.applyImageWithFallback(el.spotlightAfterImg, lesson.id, "after", lesson.chapter);

    el.spotlightLessonHeading.textContent = `درس ${toPersianDigits(lesson.id)}: ${lesson.title}`;
    el.unlockedItemBanner.textContent = `🎁 آیتم آزادشده و افزوده به کمد لباس: ${lesson.rewardItem}`;
    el.spotlightWhisperText.textContent = lesson.whisper;

    // Chapter End Exam Gate (Lessons 20, 40, 60, 80)
    if (lesson.isChapterExam) {
      el.examGateBox.hidden = false;
      if (lesson.id === 20) {
        el.examGateTitle.textContent = "🏅 پایان فصل اول • پوشش بخش اول آزمون PCEP™";
        el.examGateDesc.textContent = "شما سرفصل‌های پایه پایتون را با موفقیت پشت سر گذاشتید. آماده ورود به پاریس برای تکمیل PCEP هستید!";
        el.examOfficialLink.href = "https://pythoninstitute.org/pcep";
      } else if (lesson.id === 40) {
        el.examGateTitle.textContent = "🎓 قبولی جامع PCEP™ • آمادگی آزمون بین‌المللی";
        el.examGateDesc.textContent = "تبریک! کل سرفصل‌های آزمون PCEP™ پوشش داده شد. می‌توانید از لینک زیر وارد صفحه رسمی Python Institute شوید.";
        el.examOfficialLink.href = "https://pythoninstitute.org/pcep";
      } else if (lesson.id === 60) {
        el.examGateTitle.textContent = "🏅 پایان فصل سوم • پوشش بخش اول آزمون PCAP™";
        el.examGateDesc.textContent = "توابع، ماژول‌ها و مدیریت خطاها تکمیل شد. آخرین ایستگاه در توکیو برای تکمیل PCAP™ پیش روی شماست!";
        el.examOfficialLink.href = "https://pythoninstitute.org/pcap";
      } else if (lesson.id === 80) {
        el.examGateTitle.textContent = "👑 فتح کامل ۸۰ درس • آمادگی کامل آزمون بین‌المللی PCAP™";
        el.examGateDesc.textContent = "تمام سرفصل‌های PCEP™ و PCAP™ را با موفقیت به پایان رساندید. لینک رسمی ثبت‌نام آزمون PCAP™:";
        el.examOfficialLink.href = "https://pythoninstitute.org/pcap";
      }
    } else {
      el.examGateBox.hidden = true;
    }

    el.btnSpotlightNextLesson.textContent = lesson.id < 80 ? "ورود به درس بعدی ◀" : "پایان دوره • مرور درس ۸۰";

    // Reset Crossfade -> Interactive Slider sequence
    sliderInteractive = false;
    el.compSliderLine.classList.remove("active");
    el.compBeforeClip.style.transition = "none";
    el.compBeforeClip.style.clipPath = "inset(0 0 0 0)";
    el.compBeforeClip.style.opacity = "1";
    el.sliderInstruction.textContent = "در حال نمایش تصویر قبل از شارژ و انتقال نرم به حالت درخشان...";

    el.spotlightOverlay.hidden = false;

    // Step 1: Crossfade from Before to After
    setTimeout(() => {
      el.compBeforeClip.style.transition = "opacity 0.95s ease";
      el.compBeforeClip.style.opacity = "0";
    }, 450);

    // Step 2: Activate Interactive Before/After Comparison Slider at 50%
    setTimeout(() => {
      el.compBeforeClip.style.transition = "none";
      el.compBeforeClip.style.opacity = "1";
      setSliderPercentage(50);
      el.compSliderLine.classList.add("active");
      sliderInteractive = true;
      el.sliderInstruction.textContent = "دستگیره اسلایدر را به چپ و راست بکشید تا تفاوت قبل و بعد از شارژ را بررسی کنید";
    }, 1500);
  }

  function setSliderPercentage(percent) {
    const clamped = Math.max(2, Math.min(98, percent));
    // Clip the 'before' image from right side so left shows 'before' and right shows 'after'
    el.compBeforeClip.style.clipPath = `inset(0 ${100 - clamped}% 0 0)`;
    el.compSliderLine.style.left = `${clamped}%`;
  }

  function initBeforeAfterSliderEvents() {
    let dragging = false;

    function updateFromClientX(clientX) {
      if (!sliderInteractive) return;
      const rect = el.comparisonContainer.getBoundingClientRect();
      const relX = clientX - rect.left;
      const pct = (relX / rect.width) * 100;
      setSliderPercentage(pct);
    }

    el.comparisonContainer.addEventListener("pointerdown", (e) => {
      if (!sliderInteractive) return;
      dragging = true;
      el.comparisonContainer.setPointerCapture(e.pointerId);
      updateFromClientX(e.clientX);
    });

    el.comparisonContainer.addEventListener("pointermove", (e) => {
      if (!dragging) return;
      updateFromClientX(e.clientX);
    });

    el.comparisonContainer.addEventListener("pointerup", () => {
      dragging = false;
    });
  }

  // Math Challenge Box (2 attempts max; disappears completely if both fail)
  function resetMathBoxForLesson(lesson) {
    mathAttemptsLeft = 2;
    el.mathBox.hidden = false;
    el.mathBody.hidden = false;
    el.hintRevealed.hidden = true;
    el.mathAttemptsBadge.textContent = `تلاش باقی‌مانده: ${toPersianDigits(2)}`;
    el.mathEquation.textContent = lesson.mathEquation;
    el.mathAnswerInput.value = "";
    el.mathFeedback.textContent = "";
  }

  function handleMathSubmit() {
    const lesson = getLesson(state.currentLessonId);
    const userVal = normalizeDigits(el.mathAnswerInput.value);
    if (!userVal) return;

    if (Number(userVal) === Number(lesson.mathAnswer)) {
      el.mathBody.hidden = true;
      el.hintRevealed.hidden = false;
      el.hintRevealed.innerHTML = `<strong>💡 راهنمای کدنویسی:</strong><br>${lesson.hint}`;
      el.mathAttemptsBadge.textContent = "راهنما باز شد ✅";
    } else {
      mathAttemptsLeft -= 1;
      if (mathAttemptsLeft > 0) {
        el.mathAttemptsBadge.textContent = `تلاش باقی‌مانده: ${toPersianDigits(mathAttemptsLeft)}`;
        el.mathFeedback.textContent = "پاسخ نادرست است؛ یک فرصت دیگر دارید.";
        el.mathAnswerInput.value = "";
        el.mathAnswerInput.focus();
      } else {
        // Both attempts failed: hide the entire math challenge box without unlocking any hint
        el.mathBox.hidden = true;
      }
    }
  }

  // Render Lesson Content
  function loadLessonIntoUI(lessonId) {
    const maxAllowed = maxUnlockedLessonId();
    if (lessonId > maxAllowed) return;

    state.currentLessonId = lessonId;
    saveState();

    const lesson = getLesson(lessonId);
    const chMeta = COURSE.chapters[lesson.chapter];
    activeChapterTab = lesson.chapter;

    el.chapterLocationLabel.textContent = chMeta.name;
    el.lessonNumberBadge.textContent = `درس ${toPersianDigits(lesson.id)} از ۸۰`;
    el.lessonExamTag.textContent = chMeta.examTag;
    el.lessonTitle.textContent = lesson.title;

    // Render Dialogue
    el.dialogueFeed.innerHTML = "";
    lesson.dialogue.forEach(([speaker, text]) => {
      const div = document.createElement("div");
      div.className = `dialogue-msg ${speaker}`;
      const label = speaker === "camille" ? "کمیل (مشاور استایل و تشریفات):" : "النا:";
      div.innerHTML = `<span class="speaker-name">${label}</span>${text}`;
      el.dialogueFeed.appendChild(div);
    });

    el.conceptBody.innerHTML = lesson.concept;
    el.missionText.innerHTML = lesson.mission;

    const done = state.completedLessons.includes(lesson.id);
    el.missionStatus.textContent = done ? "تکمیل شده ✅" : "در انتظار اجرای کد";
    el.missionStatus.classList.toggle("done", done);

    el.codeEditor.value = lesson.starterCode;
    el.consoleOutput.classList.remove("error");
    el.consoleOutput.textContent = "آماده اجرای کد...";

    resetMathBoxForLesson(lesson);
    el.elenaMainImg.dataset.currentKey = "";
    syncChargeVisualState();
    renderWardrobe();
    renderNavBar();
    updateProgressHeader();
  }

  function renderWardrobe() {
    const items = state.unlockedWardrobe;
    el.wardrobeCount.textContent = `${toPersianDigits(items.length)} آیتم`;
    if (items.length === 0) {
      el.wardrobeItems.innerHTML =
        '<span class="wardrobe-empty">هنوز آیتمی آزاد نشده است؛ با حل اولین درس، تحول النا آغاز می‌شود.</span>';
      return;
    }
    el.wardrobeItems.innerHTML = "";
    items.forEach((item) => {
      const span = document.createElement("span");
      span.className = "wardrobe-chip";
      span.textContent = `✨ ${item}`;
      el.wardrobeItems.appendChild(span);
    });
  }

  function updateProgressHeader() {
    el.overallProgressText.textContent = `${toPersianDigits(state.completedLessons.length)} از ۸۰ درس`;
  }

  function renderNavBar() {
    // Update chapter tabs
    document.querySelectorAll(".ch-tab").forEach((btn) => {
      btn.classList.toggle("active", Number(btn.dataset.chapter) === activeChapterTab);
    });

    const startId = (activeChapterTab - 1) * 20 + 1;
    const endId = activeChapterTab * 20;
    const maxAllowed = maxUnlockedLessonId();

    el.lessonPillsStrip.innerHTML = "";
    for (let id = startId; id <= endId; id++) {
      const btn = document.createElement("button");
      const isDone = state.completedLessons.includes(id);
      const isCurrent = id === state.currentLessonId;
      const isLocked = id > maxAllowed;

      btn.className = "lesson-pill";
      if (isDone) btn.classList.add("completed");
      if (isCurrent) btn.classList.add("current");
      if (isLocked) btn.classList.add("locked");

      btn.textContent = isLocked ? `🔒${toPersianDigits(id)}` : toPersianDigits(id);
      btn.disabled = isLocked;
      btn.title = isLocked ? `درس ${toPersianDigits(id)} (قفل)` : `درس ${toPersianDigits(id)}`;
      btn.addEventListener("click", () => loadLessonIntoUI(id));
      el.lessonPillsStrip.appendChild(btn);
    }

    el.btnPrevLesson.disabled = state.currentLessonId <= 1;
    el.btnNextLesson.disabled = state.currentLessonId >= maxAllowed || state.currentLessonId >= 80;
  }

  // Event Bindings
  el.btnRunCode.addEventListener("click", runUserPythonCode);
  el.btnResetCode.addEventListener("click", () => {
    const lesson = getLesson(state.currentLessonId);
    el.codeEditor.value = lesson.starterCode;
  });
  el.btnClearConsole.addEventListener("click", () => {
    el.consoleOutput.classList.remove("error");
    el.consoleOutput.textContent = "";
  });

  // Support Tab key in code editor
  el.codeEditor.addEventListener("keydown", (e) => {
    if (e.key === "Tab") {
      e.preventDefault();
      const start = el.codeEditor.selectionStart;
      const end = el.codeEditor.selectionEnd;
      el.codeEditor.value =
        el.codeEditor.value.substring(0, start) + "    " + el.codeEditor.value.substring(end);
      el.codeEditor.selectionStart = el.codeEditor.selectionEnd = start + 4;
    }
  });

  el.btnSubmitMath.addEventListener("click", handleMathSubmit);
  el.mathAnswerInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleMathSubmit();
  });

  el.btnCloseSpotlight.addEventListener("click", () => {
    el.spotlightOverlay.hidden = true;
  });

  el.btnReopenSpotlight.addEventListener("click", () => {
    const lesson = getLesson(state.currentLessonId);
    if (state.completedLessons.includes(lesson.id)) {
      openSpotlightShowcase(lesson);
    }
  });

  el.btnSpotlightNextLesson.addEventListener("click", () => {
    el.spotlightOverlay.hidden = true;
    const nextId = Math.min(80, state.currentLessonId + 1);
    if (nextId <= maxUnlockedLessonId()) {
      loadLessonIntoUI(nextId);
    }
  });

  el.btnPrevLesson.addEventListener("click", () => {
    if (state.currentLessonId > 1) {
      loadLessonIntoUI(state.currentLessonId - 1);
    }
  });

  el.btnNextLesson.addEventListener("click", () => {
    const nextId = state.currentLessonId + 1;
    if (nextId <= maxUnlockedLessonId() && nextId <= 80) {
      loadLessonIntoUI(nextId);
    }
  });

  document.querySelectorAll(".ch-tab").forEach((btn) => {
    btn.addEventListener("click", () => {
      activeChapterTab = Number(btn.dataset.chapter);
      renderNavBar();
    });
  });

  el.btnExamRoadmap.addEventListener("click", () => {
    el.roadmapOverlay.hidden = false;
  });
  el.btnCloseRoadmap.addEventListener("click", () => {
    el.roadmapOverlay.hidden = true;
  });

  // Boot
  initBeforeAfterSliderEvents();
  loadLessonIntoUI(state.currentLessonId);
  startChargeTicker();
  initPyodideEngine();
})();
