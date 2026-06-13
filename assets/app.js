/* =========================================================
   LeadData — App logic
   i18n · direction switch · reveal · use cases · marquee · hero canvas
   ========================================================= */
(function () {
  "use strict";
  const LD = window.LD;
  const root = document.documentElement;
  const $  = (s, c = document) => c.querySelector(s);
  const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const state = {
    lang: localStorage.getItem("ld.lang") || "fr",
    dir:  "b",            // Direction unique : B — Signal (sélecteur retiré)
    filter: "all"
  };

  /* ---------- Icons ---------- */
  const I = {
    target: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor"/></svg>',
    pin:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.6"/></svg>',
    data:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><ellipse cx="12" cy="6" rx="7" ry="3"/><path d="M5 6v6c0 1.66 3.13 3 7 3s7-1.34 7-3V6"/><path d="M5 12v6c0 1.66 3.13 3 7 3s7-1.34 7-3v-6"/></svg>',
    compass:'<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="12" cy="12" r="9"/><path d="m15.5 8.5-2 5-5 2 2-5 5-2Z"/></svg>',
    cpu:    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 2v3M14 2v3M10 19v3M14 19v3M2 10h3M2 14h3M19 10h3M19 14h3"/></svg>',
    chart:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M4 20V4"/><path d="M4 20h16"/><rect x="7" y="12" width="3" height="5"/><rect x="12" y="8" width="3" height="9"/><rect x="17" y="5" width="3" height="12"/></svg>',
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 3 5 6v5c0 4.5 3 8 7 10 4-2 7-5.5 7-10V6l-7-3Z"/><path d="m9.5 12 1.8 1.8 3.5-3.6"/></svg>',
    linkedin:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.3 8.9h3.3V21H3.3V8.9Zm5.4 0h3.16v1.65h.05c.44-.83 1.5-1.7 3.1-1.7 3.32 0 3.93 2.18 3.93 5.02V21h-3.3v-5.46c0-1.3-.02-2.97-1.8-2.97-1.82 0-2.1 1.42-2.1 2.88V21H8.7V8.9Z"/></svg>',
    mail:   '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="m4 7 8 6 8-6"/></svg>',
    pinSm:  '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M12 21s7-5.3 7-11a7 7 0 1 0-14 0c0 5.7 7 11 7 11Z"/><circle cx="12" cy="10" r="2.4"/></svg>',
    arrow:  '<svg class="arr" viewBox="0 0 24 24" width="17" height="17" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M5 12h14M13 6l6 6-6 6"/></svg>',
    close:  '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M6 6l12 12M18 6 6 18"/></svg>',
    menu:   '<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4 7h16M4 12h16M4 17h16"/></svg>',
    globe:  '<svg viewBox="0 0 24 24" width="15" height="15" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="12" cy="12" r="9"/><path d="M3 12h18"/><path d="M12 3c2.5 2.6 2.5 15.4 0 18M12 3c-2.5 2.6-2.5 15.4 0 18"/></svg>'
  };
  const featureIcons = [I.target, I.pin, I.data];
  const knowIcons = [I.compass, I.cpu, I.chart, I.shield];

  /* ---------- Use-case thumbnail glyphs (abstract data motifs) ---------- */
  function ucGlyph(kind) {
    const c = "rgba(6,110,135,.55)", c2 = "rgba(6,110,135,.28)", f = "rgba(6,110,135,.12)";
    const base = (inner) => `<svg class="glyph" viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" fill="none">
      <rect width="320" height="200" fill="url(#g_${kind})"/>
      <defs><linearGradient id="g_${kind}" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#eef6f8"/><stop offset="1" stop-color="#dceaee"/></linearGradient></defs>
      ${inner}</svg>`;
    const G = {
      map: `<g stroke="${c}" stroke-width="1.4">
        <path d="M30 60 Q90 40 140 70 T270 60" fill="none"/><path d="M20 100 Q90 80 150 108 T300 96" fill="none"/>
        <path d="M40 140 Q110 120 170 148 T300 140" fill="none"/></g>
        <circle cx="150" cy="108" r="6" fill="${c}"/><circle cx="150" cy="108" r="16" fill="none" stroke="${c2}"/>`,
      route:`<g stroke="${c}" stroke-width="1.6" fill="none"><path d="M40 160 C100 160 90 80 150 80 S220 40 280 60"/></g>
        <circle cx="40" cy="160" r="6" fill="${c}"/><circle cx="150" cy="80" r="5" fill="#fff" stroke="${c}" stroke-width="1.6"/>
        <circle cx="280" cy="60" r="6" fill="${c}"/>`,
      target:`<circle cx="160" cy="100" r="14" fill="${f}" stroke="${c}" stroke-width="1.4"/>
        <circle cx="160" cy="100" r="34" fill="none" stroke="${c2}"/><circle cx="160" cy="100" r="56" fill="none" stroke="${c2}"/>
        <circle cx="160" cy="100" r="4" fill="${c}"/>`,
      gauge:`<g stroke="${c}" stroke-width="1.6" fill="none"><path d="M70 140 A70 70 0 0 1 250 140"/></g>
        <g stroke="${c2}" stroke-width="1.4"><path d="M160 140 L120 95"/></g>
        <circle cx="160" cy="140" r="6" fill="${c}"/>
        <g fill="${c2}"><circle cx="80" cy="120" r="2.5"/><circle cx="120" cy="80" r="2.5"/><circle cx="160" cy="68" r="2.5"/><circle cx="200" cy="80" r="2.5"/><circle cx="240" cy="120" r="2.5"/></g>`,
      layers:`<g stroke="${c}" stroke-width="1.4" fill="${f}"><path d="M160 56 220 86 160 116 100 86Z"/></g>
        <g stroke="${c2}" stroke-width="1.4" fill="none"><path d="M100 108 160 138 220 108"/><path d="M100 128 160 158 220 128"/></g>`,
      pulse:`<g stroke="${c}" stroke-width="1.6" fill="none"><path d="M20 100 H90 L110 60 L140 140 L165 90 L185 110 H300"/></g>
        <circle cx="140" cy="140" r="4" fill="${c}"/>`
    };
    return base(G[kind] || G.map);
  }

  /* ---------- Placeholder client logo marks ---------- */
  function clientMark(i) {
    const marks = [
      '<svg class="lmark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6"><circle cx="16" cy="16" r="11"/><path d="M16 5v22M5 16h22"/></svg>',
      '<svg class="lmark" viewBox="0 0 32 32" fill="currentColor"><path d="M16 4 28 16 16 28 4 16Z" opacity=".85"/></svg>',
      '<svg class="lmark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6"><rect x="6" y="6" width="20" height="20" rx="5"/><path d="M11 20l5-9 5 9"/></svg>',
      '<svg class="lmark" viewBox="0 0 32 32" fill="currentColor"><circle cx="11" cy="16" r="6"/><circle cx="21" cy="16" r="6" opacity=".55"/></svg>',
      '<svg class="lmark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M6 22 16 6l10 16Z"/></svg>',
      '<svg class="lmark" viewBox="0 0 32 32" fill="none" stroke="currentColor" stroke-width="1.6"><path d="M16 5a11 11 0 1 0 11 11"/><circle cx="16" cy="16" r="3" fill="currentColor"/></svg>'
    ];
    return marks[i % marks.length];
  }

  /* ---------- Brand abstract visual (data territory) ---------- */
  function buildBrandVisual() {
    const host = document.getElementById("brand-visual");
    if (!host) return;
    const W = 360, H = 450;
    const cx = 250, cy = 150;
    // topographic isolines
    let iso = "";
    for (let i = 1; i <= 7; i++) {
      const rx = 30 + i * 26, ry = 22 + i * 20;
      iso += `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="none" stroke="rgba(33,201,221,${0.26 - i*0.025})" stroke-width="1" transform="rotate(-18 ${cx} ${cy})"/>`;
    }
    // node network (deterministic positions)
    const pts = [
      [70,300],[120,360],[200,330],[270,390],[150,250],[230,260],
      [300,300],[90,210],[180,410],[250,200],[120,150],[60,360]
    ];
    let links = "";
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const d = Math.hypot(pts[i][0]-pts[j][0], pts[i][1]-pts[j][1]);
        if (d < 110) links += `<line x1="${pts[i][0]}" y1="${pts[i][1]}" x2="${pts[j][0]}" y2="${pts[j][1]}" stroke="rgba(140,225,238,0.16)" stroke-width="1"/>`;
      }
    }
    let nodes = "";
    pts.forEach((p, i) => {
      const r = (i % 3 === 0) ? 4.5 : 2.6;
      nodes += `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="rgba(140,225,238,${i%3===0?0.95:0.6})">
        <animate attributeName="opacity" values="${i%3===0?0.95:0.5};0.3;${i%3===0?0.95:0.5}" dur="${3+i%4}s" repeatCount="indefinite" begin="${i*0.2}s"/></circle>`;
    });
    const cap = state.lang === "en" ? "Data · Territory · Decision" : "Donnée · Territoire · Décision";
    host.innerHTML = `<svg viewBox="0 0 ${W} ${H}" preserveAspectRatio="xMidYMid slice" fill="none">
      <g opacity="0.9">${iso}</g>${links}${nodes}
    </svg><div class="bv-cap">${cap}</div>`;
  }

  /* ---------- Typewriter on hero accent word ---------- */
  let twTimer = null;
  function typewriter() {
    const el = document.querySelector(".hero h1 .accentword");
    if (!el) return;
    if (twTimer) { clearTimeout(twTimer); twTimer = null; }
    const full = el.dataset.full || el.textContent;
    el.dataset.full = full;
    if (reduced) { el.textContent = full; el.classList.remove("typing"); return; }
    el.classList.add("typing");
    el.textContent = "";
    let i = 0;
    (function step() {
      el.textContent = full.slice(0, i);
      if (i <= full.length) { i++; twTimer = setTimeout(step, 78); }
      else { setTimeout(() => el.classList.remove("typing"), 1400); }
    })();
  }

  /* ---------- i18n ---------- */
  function t(key) {
    const e = LD.i18n[key];
    return e ? (e[state.lang] || e.fr) : key;
  }
  function applyI18n() {
    $$("[data-i18n]").forEach(el => {
      const e = LD.i18n[el.dataset.i18n];
      if (!e) return;
      if (e.html) el.innerHTML = e[state.lang] || e.fr;
      else el.textContent = e[state.lang] || e.fr;
    });
    document.documentElement.lang = state.lang;
  }

  /* ---------- Lang switching ---------- */
  function setLang(lang) {
    state.lang = lang; localStorage.setItem("ld.lang", lang);
    $$(".lang-seg button").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.lang === lang)));
    applyI18n();
    renderCases();
    buildMarquee();
    buildExpertise();
    buildBrandVisual();
    typewriter();
  }

  /* ---------- Use cases ---------- */
  function sectorLabel(key) {
    const s = LD.sectors.find(x => x.key === key);
    return s ? s[state.lang] : key;
  }
  function buildFilters() {
    const wrap = $("#uc-filters");
    if (!wrap) return;
    const mk = (key, label) => `<button class="uc-filter" data-f="${key}" aria-pressed="${state.filter===key}">${label}</button>`;
    wrap.innerHTML = mk("all", t("cases.all")) + LD.sectors.map(s => mk(s.key, s[state.lang])).join("");
    $$(".uc-filter", wrap).forEach(b => b.addEventListener("click", () => { state.filter = b.dataset.f; renderCases(); }));
  }
  function renderCases() {
    buildFilters();
    const grid = $("#uc-grid");
    if (!grid) return;
    const list = LD.useCases.filter(u => state.filter === "all" || u.sector === state.filter);
    if (!list.length) { grid.innerHTML = `<div class="uc-empty">—</div>`; return; }
    grid.innerHTML = list.map(u => `
      <button class="uc-card reveal" data-id="${u.id}">
        <div class="uc-thumb">
          <span class="uc-sector">${sectorLabel(u.sector)}</span>
          ${ucGlyph(u.glyph)}
        </div>
        <div class="uc-body">
          <h3>${u.title[state.lang]}</h3>
          <p>${u.summary[state.lang]}</p>
          <div class="uc-foot">
            <span class="uc-metric"><span class="v">${u.metric.v}</span><span class="k">${u.metric.k[state.lang]}</span></span>
            <span class="more">${t("cases.more")} ${I.arrow}</span>
          </div>
        </div>
      </button>`).join("");
    $$(".uc-card", grid).forEach(c => c.addEventListener("click", () => openCase(c.dataset.id)));
    revealInView();
    requestAnimationFrame(revealInView);
  }
  function openCase(id) {
    const u = LD.useCases.find(x => x.id === id);
    if (!u) return;
    const L = state.lang;
    $("#modal-body").innerHTML = `
      <button class="modal-close" aria-label="Close">${I.close}</button>
      <div class="modal-hero">${ucGlyph(u.glyph)}</div>
      <div class="modal-content">
        <span class="mc-sector">${sectorLabel(u.sector)}</span>
        <h2>${u.title[L]}</h2>
        <p class="muted">${u.summary[L]}</p>
        <div class="mc-tags">${u.tags.map(tg => `<span class="mc-tag">${tg[L]}</span>`).join("")}</div>
        <div class="modal-metrics">${u.metrics.map(m => `<div class="mm"><div class="v">${m.v}</div><div class="k">${m.k[L]}</div></div>`).join("")}</div>
        <div class="mc-block"><h4>${t("cases.challenge")}</h4><p>${u.challenge[L]}</p></div>
        <div class="mc-block"><h4>${t("cases.approach")}</h4><p>${u.approach[L]}</p></div>
        <div class="mc-block"><h4>${t("cases.result")}</h4><p>${u.result[L]}</p></div>
      </div>`;
    $("#modal-body .modal-close").addEventListener("click", closeModal);
    const m = $("#modal");
    m.classList.add("open");
    document.body.style.overflow = "hidden";
  }
  function closeModal() {
    $("#modal").classList.remove("open");
    document.body.style.overflow = "";
  }
  function openMember(key) {
    const L = state.lang;
    const name = t(key + ".name"), role = t(key + ".role");
    const paras = (LD.i18n[key + ".bioFull"] || {})[L] || [];
    const orgs = (LD.i18n[key + ".orgs"] || {})[L] || [];
    const initials = name.split(/[\s-]+/).map(w => w[0]).filter(Boolean).slice(0, 2).join("");
    $("#modal-body").innerHTML = `
      <button class="modal-close" aria-label="Close">${I.close}</button>
      <div class="modal-hero modal-hero--person"><span class="modal-initials">${initials}</span></div>
      <div class="modal-content">
        <span class="mc-sector">${role}</span>
        <h2>${name}</h2>
        ${orgs.length ? `<div class="mc-tags">${orgs.map(o => `<span class="mc-tag">${o}</span>`).join("")}</div>` : ""}
        ${paras.map(p => `<p class="mc-para">${p}</p>`).join("")}
      </div>`;
    $("#modal-body .modal-close").addEventListener("click", closeModal);
    $("#modal").classList.add("open");
    document.body.style.overflow = "hidden";
  }

  /* ---------- Marquee ---------- */
  function buildMarquee() {
    const track = $("#marquee-track");
    if (!track) return;
    const item = (name, i) => `<div class="logo-item">${clientMark(i)}<span class="lname">${name}</span></div>`;
    const seq = LD.clients.map((n, i) => item(n, i)).join("");
    track.innerHTML = seq + seq; // duplicate for seamless loop
  }

  /* ---------- Expertise ticker (hero→mission seam) ---------- */
  function buildExpertise() {
    const track = $("#xticker-track");
    if (!track) return;
    const words = (LD.expertise && (LD.expertise[state.lang] || LD.expertise.fr)) || [];
    const seq = words.map(w => `<span class="xticker-word">${w}</span>`).join("");
    track.innerHTML = seq + seq; // duplicate for seamless loop
  }

  /* ---------- Reveal (rect-based; robust to offscreen/headless render) ---------- */
  function revealInView() {
    const vh = window.innerHeight || document.documentElement.clientHeight;
    $$(".reveal:not(.in)").forEach(el => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > -40) el.classList.add("in");
    });
  }

  /* ---------- Hero node canvas (Direction B) ---------- */
  const heroCanvas = (function () {
    let cv, ctx, nodes = [], raf = null, w = 0, h = 0, running = false;
    function init() {
      cv = $("#hero-canvas"); if (!cv) return;
      ctx = cv.getContext("2d");
      resize();
      window.addEventListener("resize", resize);
    }
    function resize() {
      if (!cv) return;
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = r.width; h = r.height;
      cv.width = w * dpr; cv.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const count = Math.round(Math.min(64, Math.max(26, w / 26)));
      nodes = Array.from({ length: count }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
        r: Math.random() * 1.6 + .6
      }));
    }
    function frame() {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j], dx = a.x - b.x, dy = a.y - b.y, d = Math.hypot(dx, dy);
          if (d < 118) {
            ctx.strokeStyle = `rgba(33,201,221,${(1 - d / 118) * 0.22})`;
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke();
          }
        }
        ctx.fillStyle = "rgba(140,225,238,.55)";
        ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fill();
      }
      raf = requestAnimationFrame(frame);
    }
    function update() {
      if (!cv) return;
      const on = state.dir === "b";
      if (on && !reduced) {
        if (!running) { running = true; resize(); frame(); }
      } else {
        running = false; if (raf) cancelAnimationFrame(raf);
        if (on && reduced) staticDraw();
        else if (ctx) ctx.clearRect(0, 0, w, h);
      }
    }
    function staticDraw() {
      ctx.clearRect(0, 0, w, h);
      nodes.forEach(a => { ctx.fillStyle = "rgba(140,225,238,.5)"; ctx.beginPath(); ctx.arc(a.x, a.y, a.r, 0, 6.283); ctx.fill(); });
    }
    return { init, update };
  })();

  /* ---------- Header scroll + progress ---------- */
  function onScroll() {
    const y = window.scrollY;
    $(".site-header").classList.toggle("is-scrolled", y > 24);
    const docH = document.documentElement.scrollHeight - window.innerHeight;
    $("#scrollbar").style.width = (docH > 0 ? (y / docH) * 100 : 0) + "%";
  }

  /* ---------- Mobile menu ---------- */
  function setupMobileMenu() {
    const btn = $("#nav-toggle"), links = $("#nav-links");
    if (!btn) return;
    btn.innerHTML = I.menu;
    btn.addEventListener("click", () => links.classList.toggle("open"));
    $$("#nav-links a").forEach(a => a.addEventListener("click", () => links.classList.remove("open")));
  }

  /* ---------- Inject static icons ---------- */
  function injectIcons() {
    $$(".feature .ficon").forEach((el, i) => el.innerHTML = featureIcons[i] || "");
    $$(".know-item .kdot").forEach((el, i) => el.innerHTML = knowIcons[i] || "");
    $$("[data-icon]").forEach(el => { if (I[el.dataset.icon]) el.innerHTML = I[el.dataset.icon]; });
    $$(".m-soc a").forEach(a => a.innerHTML = I.linkedin);
  }

  /* ---------- Init ---------- */
  function init() {
    root.setAttribute("data-dir", state.dir);
    applyI18n();
    injectIcons();
    renderCases();
    buildMarquee();
    buildExpertise();
    heroCanvas.init();
    buildBrandVisual();

    $$(".lang-seg button").forEach(b => b.addEventListener("click", () => setLang(b.dataset.lang)));
    heroCanvas.update();   // démarre la grille animée du hero (Direction B)
    setLang(state.lang);

    $("#modal-scrim").addEventListener("click", closeModal);
    document.addEventListener("keydown", e => { if (e.key === "Escape") closeModal(); });
    $$(".m-more").forEach(b => b.addEventListener("click", () => openMember(b.dataset.member)));

    window.addEventListener("scroll", () => { onScroll(); revealInView(); }, { passive: true });
    window.addEventListener("resize", revealInView, { passive: true });
    onScroll();
    revealInView();
    requestAnimationFrame(revealInView);
    setTimeout(revealInView, 250);
    setupMobileMenu();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
