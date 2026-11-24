(function () {
  function buildPlaceholderSvg(lessonId, state, chapter) {
    const isCharged = state === "after";
    const bg1 = isCharged ? "#1f1224" : "#12141c";
    const bg2 = isCharged ? "#3b152b" : "#1d202b";
    const accent = isCharged ? "#ffc800" : "#fb7185";
    const badgeText = isCharged ? "وضعیت شارژ شده (CHARGED)" : "وضعیت پیش از شارژ (BEFORE)";
    const chapterNames = {
      1: "فصل ۱ • مدیترانه",
      2: "فصل ۲ • پاریس",
      3: "فصل ۳ • میلان",
      4: "فصل ۴ • توکیو و کیوتو"
    };
    const chLabel = chapterNames[chapter] || "آکادمی پایتون النا";
    const numFa = String(lessonId).replace(/\d/g, d => "۰۱۲۳۴۵۶۷۸۹"[d]);
    const fileExpected = `lesson_${String(lessonId).padStart(2, "0")}_${state}.png`;

    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="800" viewBox="0 0 600 800">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${bg1}"/>
          <stop offset="100%" stop-color="${bg2}"/>
        </linearGradient>
      </defs>
      <rect width="600" height="800" fill="url(#g)"/>
      <rect x="24" y="24" width="552" height="752" rx="28" fill="none" stroke="${accent}" stroke-opacity="0.35" stroke-width="2"/>
      <!-- Stylized silhouette of Elena (38yo mature woman, dark brown bob with bangs, hourglass silhouette) -->
      <ellipse cx="300" cy="240" rx="74" ry="86" fill="#2c2228"/>
      <path d="M225 225 Q300 130 375 225 L385 315 Q300 295 215 315 Z" fill="#1b1418"/>
      <ellipse cx="300" cy="250" rx="54" ry="66" fill="#f3d2c1"/>
      <path d="M244 218 Q300 185 356 218 Q330 232 270 232 Z" fill="#1b1418"/>
      <circle cx="280" cy="248" r="5.5" fill="#2563eb"/>
      <circle cx="320" cy="248" r="5.5" fill="#2563eb"/>
      <path d="M287 282 Q300 292 313 282" fill="none" stroke="#be123c" stroke-width="3.5" stroke-linecap="round"/>
      <path d="M220 410 Q300 370 380 410 L355 530 Q300 545 245 530 Z" fill="${isCharged ? "#9f1239" : "#374151"}"/>
      <path d="M245 530 L355 530 L395 750 L205 750 Z" fill="${isCharged ? "#881337" : "#1f2937"}"/>
      <rect x="70" y="54" width="460" height="44" rx="22" fill="rgba(0,0,0,0.45)" stroke="${accent}" stroke-opacity="0.5"/>
      <text x="300" y="82" text-anchor="middle" fill="${accent}" font-family="Vazirmatn, Tahoma, sans-serif" font-size="18" font-weight="bold">${badgeText}</text>
      <text x="300" y="640" text-anchor="middle" fill="#ffffff" font-family="Vazirmatn, Tahoma, sans-serif" font-size="26" font-weight="bold">النا • درس ${numFa}</text>
      <text x="300" y="678" text-anchor="middle" fill="#d1d5db" font-family="Vazirmatn, Tahoma, sans-serif" font-size="17">${chLabel}</text>
      <text x="300" y="722" text-anchor="middle" fill="#9ca3af" font-family="monospace" font-size="14">assets/characters/elena-python/${fileExpected}</text>
    </svg>`;

    return "data:image/svg+xml;charset=UTF-8," + encodeURIComponent(svg);
  }

  window.ElenaAssetLoader = {
    getAssetPath(lessonId, state) {
      const padded = String(lessonId).padStart(2, "0");
      return `assets/characters/elena-python/lesson_${padded}_${state}.png`;
    },
    applyImageWithFallback(imgEl, lessonId, state, chapter) {
      const primarySrc = this.getAssetPath(lessonId, state);
      imgEl.dataset.fallbackApplied = "false";
      imgEl.onerror = function () {
        if (imgEl.dataset.fallbackApplied === "true") return;
        imgEl.dataset.fallbackApplied = "true";
        imgEl.src = buildPlaceholderSvg(lessonId, state, chapter);
      };
      imgEl.src = primarySrc;
    }
  };
})();
