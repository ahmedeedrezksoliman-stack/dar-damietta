// دار دمياط — interactions, listing data/rendering, filters, forms, overlays, motion and 3D scene.
// CITY: دمياط الجديدة | BRAND_NAME: دار دمياط

const BRAND_NAME = "دار دمياط";
const CITY = "دمياط الجديدة";
const WHATSAPP_NUMBER = "20XXXXXXXXXX";

// Fallback data in case fetch fails
const FALLBACK_LISTINGS = [
  {
    id: "fb-001",
    title: "شقة 120 م² للبيع في الحي الرابع",
    type: "شقة",
    deal: "بيع",
    source: "مالك",
    companyId: null,
    price: 1250000,
    area: 120,
    rooms: 3,
    district: "الحي الرابع",
    finishing: "تشطيب كامل",
    payment: "تقسيط",
    images: [],
    verified: true,
    updatedAt: "2026-10-01",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-002",
    title: "شقة 90 م² للإيجار في الحي الثالث",
    type: "شقة",
    deal: "إيجار",
    source: "مالك",
    companyId: null,
    price: 4500,
    area: 90,
    rooms: 2,
    district: "الحي الثالث",
    finishing: "تشطيب متوسط",
    payment: "كاش",
    images: [],
    verified: true,
    updatedAt: "2026-10-02",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-003",
    title: "وحدة سكنية 170 م² من مشروع بريق",
    type: "شقة",
    deal: "بيع",
    source: "مطور",
    companyId: "arx",
    price: 2100000,
    area: 170,
    rooms: 3,
    district: "مركز الحي الثالث",
    finishing: "تشطيب كامل",
    payment: "تقسيط",
    images: [],
    verified: true,
    updatedAt: "2026-10-02",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-004",
    title: "وحدة تجارية بمركز الحي الخامس",
    type: "تجاري",
    deal: "بيع",
    source: "مطور",
    companyId: "barlosy",
    price: 3500000,
    area: 95,
    rooms: 0,
    district: "مركز الحي الخامس",
    finishing: "غير تشطيب",
    payment: "تقسيط",
    images: [],
    verified: true,
    updatedAt: "2026-10-01",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-005",
    title: "محل 40 م² للبيع في الحي الرابع",
    type: "محل",
    deal: "بيع",
    source: "وسيط",
    companyId: null,
    price: 1450000,
    area: 40,
    rooms: 0,
    district: "الحي الرابع",
    finishing: "غير تشطيب",
    payment: "كاش",
    images: [],
    verified: true,
    updatedAt: "2026-10-03",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-006",
    title: "قطعة أرض 600 م² بالقرية الذكية",
    type: "أرض",
    deal: "بيع",
    source: "مطور",
    companyId: "banaa-alahram",
    price: 1800000,
    area: 600,
    rooms: 0,
    district: "القرية الذكية - أول مطل بحر",
    finishing: "أرض فضاء",
    payment: "تقسيط",
    images: [],
    verified: true,
    updatedAt: "2026-10-03",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-007",
    title: "شقة 150 م² مشروع La vie",
    type: "شقة",
    deal: "بيع",
    source: "مطور",
    companyId: "arx",
    price: 2400000,
    area: 150,
    rooms: 3,
    district: "شرق جامعة حورس",
    finishing: "تشطيب كامل",
    payment: "تقسيط",
    images: [],
    verified: true,
    updatedAt: "2026-10-02",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-008",
    title: "فيلا 200 م² للبيع في الحي الخامس",
    type: "فيلا",
    deal: "بيع",
    source: "مالك",
    companyId: null,
    price: 4200000,
    area: 200,
    rooms: 4,
    district: "الحي الخامس",
    finishing: "تشطيب كامل",
    payment: "كاش",
    images: [],
    verified: true,
    updatedAt: "2026-09-30",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-009",
    title: "وحدة إدارية 85 م² للإيجار",
    type: "إداري",
    deal: "إيجار",
    source: "وسيط",
    companyId: null,
    price: 6500,
    area: 85,
    rooms: 0,
    district: "مركز الحي الخامس",
    finishing: "تشطيب كامل",
    payment: "كاش",
    images: [],
    verified: true,
    updatedAt: "2026-10-03",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-010",
    title: "شقة 110 م² مشروع حياة - لاكازا",
    type: "شقة",
    deal: "بيع",
    source: "مطور",
    companyId: "lacasa",
    price: 1650000,
    area: 110,
    rooms: 3,
    district: "الحي الرابع",
    finishing: "تشطيب كامل",
    payment: "تقسيط",
    images: [],
    verified: true,
    updatedAt: "2026-10-01",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-011",
    title: "شقة 70 م² للإيجار من وسيط",
    type: "شقة",
    deal: "إيجار",
    source: "وسيط",
    companyId: null,
    price: 3800,
    area: 70,
    rooms: 2,
    district: "الحي الثالث",
    finishing: "تشطيب متوسط",
    payment: "كاش",
    images: [],
    verified: true,
    updatedAt: "2026-10-02",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
  {
    id: "fb-012",
    title: "وحدة إدارية 65 م² بمشروع ميراج",
    type: "إداري",
    deal: "بيع",
    source: "مطور",
    companyId: "arx",
    price: 2900000,
    area: 65,
    rooms: 0,
    district: "مركز الحي السادس",
    finishing: "تشطيب كامل",
    payment: "تقسيط",
    images: [],
    verified: true,
    updatedAt: "2026-10-03",
    phone: "20XXXXXXXXXX",
    whatsapp: "20XXXXXXXXXX",
  },
];

const FALLBACK_COMPANIES = {
  arx: {
    id: "arx",
    name: "ARX Development",
    arabicName: "ARX Development",
    shortName: "ARX",
    logo: "./assets/logos/arx/arx.jpg",
    description:
      "شركة ARX Development متخصصة في التطوير العقاري بمدينة دمياط الجديدة.",
    projects: [
      {
        name: "بريق",
        location: "مركز الحي الثالث - دمياط الجديدة",
        type: "سكني، تجاري، إداري",
        info: "مشروع 'بريق' بمركز الحي الثالث. الوحدات السكنية المتبقية 160-170 م².",
        available: "سكني متبقي 160-170 م²، تجاري وإداري متاح",
      },
      {
        name: "ميراج",
        location: "مركز الحي السادس - دمياط الجديدة",
        type: "سكني، تجاري، إداري",
        info: "السكني خلص، وحدات تجارية وإدارية متاحة.",
        available: "السكني خلص، متاح إداري وتجاري",
      },
      {
        name: "La vie",
        location: "شرق جامعة حورس - دمياط الجديدة",
        type: "سكني فندقي",
        info: "مشروع 'La vie' سكني فندقي شرق جامعة حورس.",
        available: "وحدات سكنية فندقية متاحة",
      },
    ],
    images: [],
  },
  barlosy: {
    id: "barlosy",
    name: "البرلسي للتطوير العقاري",
    arabicName: "البرلسي للتطوير العقاري",
    shortName: "البرلسي",
    logo: "./assets/logos/barlosy/barlosy.jpg",
    description: "البرلسي للتطوير العقاري بمدينة دمياط الجديدة.",
    projects: [
      {
        name: "سكون",
        location: "الحي الرابع - دمياط الجديدة",
        type: "سكني",
        info: "كمبوند سكون سكني بالحي الرابع.",
        available: "وحدات سكنية متاحة",
      },
      {
        name: "سيتي سنتر",
        location: "مركز الحي الخامس - دمياط الجديدة",
        type: "تجاري، إداري",
        info: "سيتي سنتر تجاري وإداري بمركز الحي الخامس.",
        available: "وحدات تجارية وإدارية متاحة",
      },
    ],
    images: [],
  },
  lacasa: {
    id: "lacasa",
    name: "لاكازا للتطوير العقاري",
    arabicName: "لاكازا للتطوير العقاري",
    shortName: "لاكازا",
    logo: "./assets/logos/lacasa/lacasa.jpg",
    description: "لاكازا للتطوير العقاري تعمل في دمياط الجديدة.",
    projects: [
      {
        name: "حياة",
        location: "الحي الرابع - دمياط الجديدة",
        type: "سكني",
        info: "مشروع حياة سكني بالحي الرابع.",
        available: "وحدات سكنية متاحة",
      },
    ],
    images: [],
  },
  "banaa-alahram": {
    id: "banaa-alahram",
    name: "بناة الأهرام العقارية",
    arabicName: "بناة الأهرام العقارية",
    shortName: "بناة الأهرام",
    logo: "./assets/logos/banaa-alahram/banaa-alahram.jpg",
    description: "بناة الأهرام العقارية في دمياط الجديدة.",
    projects: [
      {
        name: "سلسلة قطع أراضٍ - القرية الذكية",
        location: "القرية الذكية، أول مطل بحر - دمياط الجديدة",
        type: "أرض",
        info: "قطع أراضٍ بالقرية الذكية أول مطل بحر.",
        available: "قطع أراضٍ متاحة",
      },
    ],
    images: [],
  },
};

// State
let listings = [];
let companies = {};
let favorites = new Set(JSON.parse(localStorage.getItem("dar2_favorites") || "[]"));
let currentFilters = {
  source: "الكل",
  deal: "الكل",
  type: "الكل",
  priceMin: "",
  priceMax: "",
  areaMin: "",
  areaMax: "",
  rooms: "الكل",
  district: "",
  payment: "الكل",
};
let currentSearch = "";
let revealObserver = null;
let motionObserver = null;
let activeModalListing = null;

// Init
function init() {
  setupLoader();
  setupTheme();
  setupHeader();
  setupHero();
  setupPartners();
  setupStats();
  setupBottomNav();
  setupFiltersSheet();
  setupMultiStepForm();
  setupSourcePanels();
  setupYear();
  loadData();
  renderSourceChips();
  renderListings();
  observeAnimations();
  setupSmoothScroll();
  setupMagneticAndCursor();
  setupPropertyDetails();
  setupImageUploads();
  setupEnhancedInteractions();
  setupCityScene();
}

function setupLoader() {
  const loader = document.getElementById("loader");
  const loaderLogo = document.getElementById("loaderLogo");
  if (loaderLogo) {
    loaderLogo.innerHTML = hasBrandLogo() ? "" : BRAND_NAME;
    if (hasBrandLogo()) {
      const img = document.createElement("img");
      img.src = "./assets/brand/logo.jpg";
      img.alt = BRAND_NAME;
      img.style.maxWidth = "150px";
      img.style.maxHeight = "80px";
      loaderLogo.appendChild(img);
    }
  }
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    setTimeout(() => loader.classList.add("hidden"), 300);
  } else {
    setTimeout(() => loader.classList.add("hidden"), 1200);
  }
}

function hasBrandLogo() {
  return true; // logo.jpg exists
}

function setupTheme() {
  const toggle = document.getElementById("themeToggle");
  const saved = localStorage.getItem("dar2_theme");
  if (saved !== "light") document.body.classList.add("dark-mode");
  if (toggle) {
    toggle.innerHTML = `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
    toggle.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem(
        "dar2_theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
      );
      updateThemeIcon(toggle);
    });
    updateThemeIcon(toggle);
  }
}

function updateThemeIcon(btn) {
  const isDark = document.body.classList.contains("dark-mode");
  btn.innerHTML = isDark
    ? `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>`
    : `<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>`;
}

function setupHeader() {
  const header = document.getElementById("header");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) header.classList.add("scrolled");
    else header.classList.remove("scrolled");
  });
  const brandLogo = document.getElementById("brandLogo");
  const footerLogo = document.getElementById("footerLogo");
  if (brandLogo && !brandLogo.querySelector("img")) {
    const img = document.createElement("img");
    img.src = "./assets/brand/logo.jpg";
    img.alt = BRAND_NAME;
    brandLogo.appendChild(img);
  }
  if (footerLogo) {
    footerLogo.style.backgroundImage = "url('./assets/brand/logo.jpg')";
  }
  const footerWhatsApp = document.getElementById("footerWhatsApp");
  if (footerWhatsApp) {
    footerWhatsApp.href = `https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}`;
  }
}

function setupHero() {
  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value;
      renderListings();
    });
  }
}

function setupPartners() {
  const grid = document.getElementById("partnersGrid");
  if (!grid) return;
  const partners = [
    { id: "arx", name: "ARX Development", logo: "./assets/logos/arx/arx.jpg" },
    {
      id: "banaa-alahram",
      name: "بناة الأهرام العقارية",
      logo: "./assets/logos/banaa-alahram/banaa-alahram.jpg",
    },
    { id: "lacasa", name: "لاكازا للتطوير العقاري", logo: "./assets/logos/lacasa/lacasa.jpg" },
    { id: "barlosy", name: "البرلسي للتطوير العقاري", logo: "./assets/logos/barlosy/barlosy.jpg" },
  ];
  grid.innerHTML = partners
    .map(
      (p) => `
    <button class="partner-card" type="button" data-partner="${p.id}" aria-label="${p.name}">
      <span class="partner-card-inner">
        <span class="partner-card-face partner-card-front"><img src="${p.logo}" alt="${p.name}" class="partner-logo" loading="lazy" /></span>
        <span class="partner-card-face partner-card-back"><span class="partner-name">${escapeHtml(p.name)}</span><span class="partner-count">${(companies[p.id]?.projects || FALLBACK_COMPANIES[p.id]?.projects || []).length} مشروعات متاحة</span><span class="partner-hint">اضغط مرة أخرى لعرض الشركة</span></span>
      </span>
    </button>
  `
    )
    .join("");
  const marquee = document.getElementById("partnersMarquee");
  if (marquee) {
    const logos = partners.map((p) => `<img src="${p.logo}" alt="" loading="lazy">`).join("");
    marquee.innerHTML = logos + logos;
  }
  grid.querySelectorAll(".partner-card").forEach((card) => {
    bindTilt(card.querySelector(".partner-card-inner"));
    card.addEventListener("pointerenter", () => {
      if (window.matchMedia("(hover: hover) and (pointer: fine)").matches) card.classList.add("is-flipped");
    });
    card.addEventListener("pointerleave", () => {
      if (!card.dataset.activated) card.classList.remove("is-flipped");
    });
    card.addEventListener("click", () => {
      if (!card.classList.contains("is-flipped")) {
        card.classList.add("is-flipped");
        card.dataset.activated = "true";
        return;
      }
      openCompanyOverlay(card.dataset.partner);
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.click();
      }
    });
  });
}

function openCompanyOverlay(id) {
  const overlay = document.getElementById("companyOverlay");
  const title = document.getElementById("companyOverlayTitle");
  const body = document.getElementById("companyOverlayBody");
  const comp = companies[id];
  if (!overlay || !comp) return;
  title.textContent = comp.arabicName || comp.name;
  let html = `<div class="company-card"><div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
      <div class="company-logo-wrap"><img src="${escapeHtml(comp.logo)}" alt="${escapeHtml(comp.name)}" /></div>
      <div style="flex:1;min-width:0;"><h3 style="font-size:1.25rem;margin:0 0 .5rem;">${escapeHtml(comp.name)}</h3>
        <p style="margin:0;color:var(--muted);line-height:1.7;">${escapeHtml(comp.description || "")}</p></div>
    </div></div>`;
  if (comp.projects && comp.projects.length) {
    html += `<div style="margin-top:24px;"><h4 style="font-size:1.125rem;margin:0 0 1rem;">المشروعات</h4><div style="display:grid;grid-template-columns:1fr;gap:.8rem;">`;
    comp.projects.forEach((p) => {
      html += `<div class="company-project">
        <h5>${escapeHtml(p.name)}</h5>
        <p>${escapeHtml(p.location)}</p>
        <p>النوع: ${escapeHtml(p.type)}</p>
        <p>${escapeHtml(p.info)}</p>
        <p style="color:var(--gold-light);">متاح: ${escapeHtml(p.available)}</p>
      </div>`;
    });
    html += `</div></div>`;
  }
  html += `<div style="margin-top:20px;"><a href="https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}" target="_blank" rel="noopener" class="btn btn-primary">واتساب الشركة</a></div>`;
  body.innerHTML = html;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

document.getElementById("closeCompanyOverlay")?.addEventListener("click", () => {
  document.getElementById("companyOverlay").classList.remove("active");
  document.body.style.overflow = "";
  document.querySelectorAll(".partner-card").forEach((card) => { card.dataset.activated = ""; card.classList.remove("is-flipped"); });
});

async function loadData() {
  try {
    const [listRes, compRes] = await Promise.all([
      fetch("./data/listings.json"),
      fetch("./data/companies.json"),
    ]);
    if (listRes.ok) listings = await listRes.json();
    else listings = FALLBACK_LISTINGS;
    if (compRes.ok) companies = await compRes.json();
    else companies = FALLBACK_COMPANIES;
  } catch (e) {
    listings = FALLBACK_LISTINGS;
    companies = FALLBACK_COMPANIES;
  }
  // Enhance listings with images from properties
  listings = listings.map((item) => {
    if (!item.images || item.images.length === 0) {
      if (item.companyId && companies[item.companyId]) {
        item.images = [`./assets/properties/${item.companyId}.jpg`];
      } else {
        item.images = [];
      }
    }
    return item;
  });
  renderListings();
  renderSourceChips();
}

function renderSourceChips() {
  const chips = document.getElementById("sourceChips");
  if (!chips) return;
  const sources = ["الكل", "مالك", "مطور", "وسيط"];
  const icons = {
    "الكل": '<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/></svg>',
    "مالك": '<svg viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.5"/><path d="M5 21v-2a7 7 0 0 1 14 0v2M19 8h3m-1.5-1.5v3"/></svg>',
    "مطور": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21h18M5 21V5l7-2v18M12 9h7v12M8 7h1m-1 4h1m-1 4h1m8-3h1m-1 4h1"/></svg>',
    "وسيط": '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 11l9-8 9 8M5 10v10h14V10M9 20v-6h6v6M2 12l3 3 4-3m13 0-3 3-4-3"/></svg>',
  };
  chips.innerHTML = sources
    .map(
      (s) => `
      <button class="chip ${currentFilters.source === s ? "active" : ""}" data-source="${s}">
        ${icons[s]}
        ${s}
      </button>
  `
    )
    .join("");
  chips.querySelectorAll(".chip").forEach((chip) => {
    chip.addEventListener("click", () => {
      currentFilters.source = chip.dataset.source;
      renderSourceChips();
      renderListings();
    });
  });
}

// Simple renderListings - basic implementation
function renderListings() {
  const grid = document.getElementById("listingsGrid");
  const empty = document.getElementById("emptyState");
  const count = document.getElementById("resultsCount");
  if (!grid) return;
  let filtered = [...listings];
  const q = currentSearch.trim().toLocaleLowerCase();
  if (q) filtered = filtered.filter((l) => [l.title, l.district, l.type, l.source].some((value) => String(value || "").toLocaleLowerCase().includes(q)));
  if (currentFilters.source !== "الكل") filtered = filtered.filter((l) => l.source === currentFilters.source);
  if (currentFilters.deal !== "الكل") filtered = filtered.filter((l) => l.deal === currentFilters.deal);
  if (currentFilters.type !== "الكل") filtered = filtered.filter((l) => l.type === currentFilters.type);
  if (currentFilters.priceMin !== "") filtered = filtered.filter((l) => Number(l.price) >= Number(currentFilters.priceMin));
  if (currentFilters.priceMax !== "") filtered = filtered.filter((l) => Number(l.price) <= Number(currentFilters.priceMax));
  if (currentFilters.areaMin !== "") filtered = filtered.filter((l) => Number(l.area) >= Number(currentFilters.areaMin));
  if (currentFilters.areaMax !== "") filtered = filtered.filter((l) => Number(l.area) <= Number(currentFilters.areaMax));
  if (currentFilters.rooms !== "الكل") {
    const roomCount = Number(currentFilters.rooms);
    filtered = filtered.filter((l) => roomCount === 3 ? Number(l.rooms) >= 3 : Number(l.rooms) === roomCount);
  }
  if (currentFilters.district.trim()) filtered = filtered.filter((l) => String(l.district || "").includes(currentFilters.district.trim()));
  if (currentFilters.payment !== "الكل") filtered = filtered.filter((l) => l.payment === currentFilters.payment);
  if (count) count.textContent = `عرض ${filtered.length} نتيجة`;
  if (filtered.length === 0) {
    grid.innerHTML = "";
    if (empty) empty.hidden = false;
    return;
  }
  if (empty) empty.hidden = true;
  const localPhotos = ["./assets/properties/arx.jpg", "./assets/properties/lacasa.jpg", "./assets/properties/barlosy.jpg", "./assets/properties/banaa-alahram.jpg"];
  grid.innerHTML = filtered
    .slice(0, 12)
    .map((item, index) => {
      const priceText = item.deal === "إيجار" ? `${formatNumber(item.price)} ج.م / شهرياً` : `${formatNumber(item.price)} ج.م`;
      const isFav = favorites.has(item.id);
      const imageList = item.images && item.images.length ? item.images : [item.companyId ? `./assets/properties/${item.companyId}.jpg` : localPhotos[index % localPhotos.length]];
      const img = imageList[0];
      const verifiedBadge = item.verified ? `<span class="listing-badge verified">موثّق</span>` : "";
      return `
      <article class="listing-card reveal-init" tabindex="0" data-id="${escapeHtml(item.id)}" data-images="${escapeHtml(JSON.stringify(imageList))}" style="--index: ${index};transition-delay:${Math.min(index, 6) * 65}ms;">
        <div class="listing-image-wrapper">
          <img src="${escapeHtml(img)}" alt="${escapeHtml(item.title)}" class="listing-image" loading="lazy" decoding="async" />
          <button class="favorite-btn ${isFav ? "active" : ""}" data-id="${escapeHtml(item.id)}" aria-label="${isFav ? "إزالة من المفضلة" : "إضافة للمفضلة"}" aria-pressed="${isFav}">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <div class="listing-badges">
            <span class="listing-badge">${escapeHtml(item.source)}</span>
            ${verifiedBadge}
          </div>
        </div>
        <div class="listing-content">
          <div class="listing-price">${escapeHtml(priceText)}</div>
          <h3 class="listing-title">${escapeHtml(item.title)}</h3>
          <div class="listing-meta">
            <div class="listing-meta-item">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              ${escapeHtml(item.area)} م²
            </div>
            ${item.rooms ? `<div class="listing-meta-item"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>${escapeHtml(item.rooms)} غرف</div>` : ""}
            <div class="listing-meta-item">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${escapeHtml(item.district)}
            </div>
          </div>
          <span class="listing-source">${escapeHtml(item.deal)}</span>
          <div class="listing-updated">آخر تحديث: ${escapeHtml(item.updatedAt || "")}</div>
        </div>
      </article>
    `;
    })
    .join("");
  grid.querySelectorAll(".listing-card").forEach((card) => revealObserver ? revealObserver.observe(card) : card.classList.add("revealed"));
  setupCardCarousels(grid);
}

function formatNumber(n) {
  return Number(n).toLocaleString("ar-EG");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Statistics counters animate once as their glass cards enter view.
function setupStats() {
  const nums = document.querySelectorAll(".stat-number");
  const motionOff = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!("IntersectionObserver" in window)) {
    nums.forEach((n) => {
      const target = parseInt(n.dataset.count || "0");
      n.textContent = target.toLocaleString();
    });
    return;
  }
  const obs = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          const el = e.target;
          const target = parseInt(el.dataset.count || "0");
          if (motionOff) {
            el.textContent = target.toLocaleString("ar-EG");
            obs.unobserve(el);
            return;
          }
          let cur = 0;
          const started = Date.now();
          const timer = setInterval(() => {
            const progress = Math.min((Date.now() - started) / 1250, 1);
            cur = Math.round(target * (1 - Math.pow(1 - progress, 4)));
            el.textContent = cur.toLocaleString("ar-EG");
            if (progress >= 1) {
              clearInterval(timer);
            }
          }, 24);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((n) => obs.observe(n));
}

function setupBottomNav() {
  const nav = document.querySelector(".bottom-nav");
  let indicator = nav?.querySelector(".nav-indicator");
  if (nav && !indicator) {
    indicator = document.createElement("span");
    indicator.className = "nav-indicator";
    indicator.setAttribute("aria-hidden", "true");
    nav.prepend(indicator);
  }
  document.querySelectorAll(".nav-item").forEach((item) => {
    item.addEventListener("click", () => {
      if (item.id !== "favoritesNav") {
        document.querySelectorAll(".nav-item").forEach((navItem) => navItem.classList.toggle("active", navItem === item));
        item.classList.add("tapped");
        setTimeout(() => item.classList.remove("tapped"), 600);
        updateNavIndicator(item);
      }
    });
    item.addEventListener("click", (e) => {
      if (item.id === "favoritesNav") {
        e.preventDefault();
        document.getElementById("favoritesPanel")?.classList.add("active");
        document.body.style.overflow = "hidden";
        renderFavorites();
      }
    });
  });
  document.getElementById("closeFavorites")?.addEventListener("click", () => {
    document.getElementById("favoritesPanel")?.classList.remove("active");
    document.body.style.overflow = "";
  });
  const sectionLinks = { home: "home", listings: "listings", partners: "partners" };
  if ("IntersectionObserver" in window) {
    const navSpy = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const target = Object.keys(sectionLinks).find((key) => sectionLinks[key] === entry.target.id);
        if (!target) return;
        const item = document.querySelector(`.nav-item[data-nav="${target}"]`);
        if (item) {
          document.querySelectorAll(".nav-item").forEach((navItem) => navItem.classList.toggle("active", navItem === item));
          updateNavIndicator(item);
        }
      });
    }, { rootMargin: "-40% 0px -50% 0px" });
    Object.values(sectionLinks).forEach((id) => { const section = document.getElementById(id); if (section) navSpy.observe(section); });
  }
}

function updateNavIndicator(item) {
  const nav = document.querySelector(".bottom-nav");
  const indicator = nav?.querySelector(".nav-indicator");
  if (!nav || !indicator || !item) return;
  const items = [...nav.querySelectorAll(".nav-item")];
  indicator.style.transform = `translateX(${items.indexOf(item) * -100}%)`;
}

function renderFavorites() {
  const panel = document.getElementById("favoritesList");
  if (!panel) return;
  const favs = listings.filter((l) => favorites.has(l.id));
  if (favs.length === 0) {
    panel.innerHTML = `<p class="empty-state">لا توجد عناصر في المفضلة</p>`;
    return;
  }
  panel.innerHTML = favs
    .map((item) => {
      const img = item.images && item.images[0] ? item.images[0] : "./assets/properties/arx.jpg";
      return `<article class="listing-card" tabindex="0" data-id="${escapeHtml(item.id)}"><div class="listing-image-wrapper"><img src="${escapeHtml(img)}" class="listing-image" loading="lazy"/></div><div class="listing-content"><div class="listing-price">${formatNumber(item.price)}</div><h3 class="listing-title">${escapeHtml(item.title)}</h3></div></article>`;
    })
    .join("");
}

function setupFiltersSheet() {
  const btn = document.getElementById("filtersBtn");
  const sheet = document.getElementById("filtersSheet");
  const overlay = document.getElementById("sheetOverlay");
  const content = sheet?.querySelector(".sheet-content");
  const syncControls = () => {
    const fields = { filterSource: "source", filterDeal: "deal", filterType: "type", filterRooms: "rooms", filterPayment: "payment" };
    Object.entries(fields).forEach(([name, key]) => {
      const input = sheet.querySelector(`input[name="${name}"][value="${CSS.escape(currentFilters[key])}"]`);
      if (input) input.checked = true;
    });
    ["priceMin", "priceMax", "areaMin", "areaMax", "filterDistrict"].forEach((id) => {
      const input = document.getElementById(id);
      if (input) input.value = id === "filterDistrict" ? currentFilters.district : currentFilters[id];
    });
  };
  const close = () => {
    sheet?.classList.remove("active");
    document.body.style.overflow = "";
    if (content) { content.style.transform = ""; content.style.transition = ""; }
  };
  btn?.addEventListener("click", () => {
    syncControls();
    sheet?.classList.add("active");
    document.body.style.overflow = "hidden";
  });
  overlay?.addEventListener("click", close);
  document.getElementById("applyFilters")?.addEventListener("click", () => {
    const fields = { filterSource: "source", filterDeal: "deal", filterType: "type", filterRooms: "rooms", filterPayment: "payment" };
    Object.entries(fields).forEach(([name, key]) => {
      currentFilters[key] = sheet.querySelector(`input[name="${name}"]:checked`)?.value || "الكل";
    });
    currentFilters.priceMin = document.getElementById("priceMin").value;
    currentFilters.priceMax = document.getElementById("priceMax").value;
    currentFilters.areaMin = document.getElementById("areaMin").value;
    currentFilters.areaMax = document.getElementById("areaMax").value;
    currentFilters.district = document.getElementById("filterDistrict").value;
    renderSourceChips();
    renderListings();
    close();
  });
  document.getElementById("clearFilters")?.addEventListener("click", () => {
    currentFilters = { source: "الكل", deal: "الكل", type: "الكل", priceMin: "", priceMax: "", areaMin: "", areaMax: "", rooms: "الكل", district: "", payment: "الكل" };
    syncControls();
    renderSourceChips();
    renderListings();
  });
  sheet?.addEventListener("change", (event) => {
    if (event.target.matches("input[type=radio]")) event.target.closest(".chip-option")?.scrollIntoView({ block: "nearest", inline: "nearest" });
  });
  const handle = sheet?.querySelector(".sheet-handle");
  let dragStart = 0;
  let dragAt = 0;
  let dragTime = 0;
  handle?.addEventListener("pointerdown", (event) => {
    dragStart = event.clientY;
    dragAt = dragStart;
    dragTime = performance.now();
    handle?.setPointerCapture?.(event.pointerId);
    if (content) content.style.transition = "none";
  });
  handle?.addEventListener("pointermove", (event) => {
    if (!dragStart || !content) return;
    dragAt = event.clientY;
    const distance = Math.max(0, dragAt - dragStart);
    content.style.transform = `translateY(${distance}px)`;
  });
  handle?.addEventListener("pointerup", () => {
    if (!dragStart) return;
    const velocity = (dragAt - dragStart) / Math.max(performance.now() - dragTime, 1);
    if (dragAt - dragStart > 110 || velocity > .55) close();
    else if (content) { content.style.transition = "transform .62s cubic-bezier(.22,1,.36,1)"; content.style.transform = ""; }
    dragStart = 0;
  });
}

function setupPropertyDetails() {
  const modal = document.getElementById("propertyModal");
  const close = () => {
    modal?.classList.remove("active");
    document.body.style.overflow = "";
    activeModalListing = null;
  };
  document.getElementById("modalClose")?.addEventListener("click", close);
  document.getElementById("modalOverlay")?.addEventListener("click", close);
  document.addEventListener("click", (event) => {
    const favoriteButton = event.target.closest(".favorite-btn");
    if (favoriteButton) {
      event.preventDefault();
      event.stopPropagation();
      const id = favoriteButton.dataset.id;
      if (favorites.has(id)) favorites.delete(id);
      else favorites.add(id);
      localStorage.setItem("dar2_favorites", JSON.stringify([...favorites]));
      favoriteButton.classList.toggle("active", favorites.has(id));
      favoriteButton.classList.add("pop");
      favoriteButton.setAttribute("aria-pressed", String(favorites.has(id)));
      favoriteButton.setAttribute("aria-label", favorites.has(id) ? "إزالة من المفضلة" : "إضافة للمفضلة");
      for (let i = 0; i < 8; i++) {
        const particle = document.createElement("i");
        const angle = (Math.PI * 2 * i) / 8;
        particle.className = "heart-particle";
        particle.style.setProperty("--dx", `${Math.cos(angle) * 28}px`);
        particle.style.setProperty("--dy", `${Math.sin(angle) * 28}px`);
        particle.style.inset = "50% auto auto 50%";
        favoriteButton.appendChild(particle);
        setTimeout(() => particle.remove(), 750);
      }
      favoriteButton.closest(".listing-card")?.classList.add("favorite-changed");
      setTimeout(() => { renderListings(); if (document.getElementById("favoritesPanel")?.classList.contains("active")) renderFavorites(); }, 720);
      return;
    }
    const dot = event.target.closest(".image-dot");
    if (dot) {
      event.preventDefault();
      event.stopPropagation();
      setCardImage(dot.closest(".listing-card"), Number(dot.dataset.index));
      return;
    }
    const card = event.target.closest(".listing-card[data-id]");
    if (card) openPropertyModal(card.dataset.id, card);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      if (document.getElementById("filtersSheet")?.classList.contains("active")) document.getElementById("sheetOverlay")?.click();
      if (modal?.classList.contains("active")) close();
      if (document.getElementById("companyOverlay")?.classList.contains("active")) document.getElementById("closeCompanyOverlay")?.click();
      if (document.getElementById("favoritesPanel")?.classList.contains("active")) document.getElementById("closeFavorites")?.click();
    }
    if ((event.key === "Enter" || event.key === " ") && event.target.matches(".listing-card")) {
      event.preventDefault();
      openPropertyModal(event.target.dataset.id, event.target);
    }
  });
}

function openPropertyModal(id, sourceCard = null) {
  const item = listings.find((listing) => String(listing.id) === String(id));
  const body = document.getElementById("modalBody");
  const modal = document.getElementById("propertyModal");
  if (!item || !body || !modal) return;
  activeModalListing = item;
  const image = item.images?.[0] || "./assets/properties/arx.jpg";
  const price = item.deal === "إيجار" ? `${formatNumber(item.price)} ج.م / شهرياً` : `${formatNumber(item.price)} ج.م`;
  body.innerHTML = `<div class="modal-gallery"><img src="${escapeHtml(image)}" alt="${escapeHtml(item.title)}"></div>
    <p class="eyebrow">${escapeHtml(item.source)} · ${escapeHtml(item.deal)}</p>
    <div class="modal-price">${escapeHtml(price)}</div>
    <h2 class="modal-property-title">${escapeHtml(item.title)}</h2>
    <div class="modal-details">
      ${modalDetail("المساحة", `${item.area || "—"} م²`)}
      ${modalDetail("الغرف", item.rooms || "—")}
      ${modalDetail("المنطقة", item.district || "—")}
      ${modalDetail("التشطيب", item.finishing || "—")}
      ${modalDetail("الدفع", item.payment || "—")}
      ${modalDetail("الحالة", item.verified ? "موثّق" : "متاح")}
    </div><p style="color:var(--muted);font-size:13px;">آخر تحديث: ${escapeHtml(item.updatedAt || "")}</p>`;
  const phone = String(item.phone || WHATSAPP_NUMBER).replace(/[^\d+]/g, "");
  const whatsapp = String(item.whatsapp || item.phone || WHATSAPP_NUMBER).replace(/\D/g, "");
  document.getElementById("callBtn").href = `tel:${phone}`;
  document.getElementById("whatsappBtn").href = `https://wa.me/${whatsapp}`;
  const modalContent = modal.querySelector(".modal-content");
  if (sourceCard && modalContent) {
    const cardRect = sourceCard.getBoundingClientRect();
    const modalRect = modalContent.getBoundingClientRect();
    modalContent.style.transformOrigin = `${cardRect.left + cardRect.width / 2 - modalRect.left}px ${cardRect.top + cardRect.height / 2 - modalRect.top}px`;
  } else if (modalContent) modalContent.style.transformOrigin = "50% 50%";
  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}

function modalDetail(label, value) {
  return `<div class="modal-detail">${escapeHtml(label)}<strong>${escapeHtml(value)}</strong></div>`;
}

function setupCardCarousels(root = document) {
  root.querySelectorAll(".listing-card").forEach((card) => {
    let images = [];
    try { images = JSON.parse(card.dataset.images || "[]"); } catch (error) { images = []; }
    const wrapper = card.querySelector(".listing-image-wrapper");
    if (images.length > 1 && wrapper && !wrapper.querySelector(".image-dots")) {
      wrapper.insertAdjacentHTML("beforeend", `<div class="image-dots" aria-label="صور العقار">${images.map((_, index) => `<button class="image-dot ${index === 0 ? "active" : ""}" type="button" data-index="${index}" aria-label="الصورة ${index + 1}"></button>`).join("")}</div>`);
    }
    if (wrapper && !wrapper.dataset.swipeReady) {
      wrapper.dataset.swipeReady = "true";
      let startX = 0;
      wrapper.addEventListener("touchstart", (event) => { startX = event.touches[0].clientX; }, { passive: true });
      wrapper.addEventListener("touchend", (event) => {
        const delta = event.changedTouches[0].clientX - startX;
        if (Math.abs(delta) < 38) return;
        const current = Number(wrapper.querySelector(".image-dot.active")?.dataset.index || 0);
        setCardImage(card, (current + (delta < 0 ? 1 : -1) + images.length) % images.length);
      }, { passive: true });
    }
    bindTilt(card);
    if (motionObserver) motionObserver.observe(card);
    else card.classList.add("is-inview");
  });
}

function setCardImage(card, index) {
  if (!card) return;
  let images = [];
  try { images = JSON.parse(card.dataset.images || "[]"); } catch (error) { images = []; }
  if (!images.length) return;
  const next = (index + images.length) % images.length;
  const image = card.querySelector(".listing-image");
  if (image) image.src = images[next];
  card.querySelectorAll(".image-dot").forEach((dot) => dot.classList.toggle("active", Number(dot.dataset.index) === next));
}

function setupImageUploads() {
  const zone = document.getElementById("dropzone");
  const input = document.getElementById("imageInput");
  const grid = document.getElementById("previewGrid");
  if (!zone || !input || !grid) return;
  let files = [];
  const render = () => {
    grid.querySelectorAll("img").forEach((image) => { if (image.src.startsWith("blob:")) URL.revokeObjectURL(image.src); });
    grid.innerHTML = files.map((file, index) => `<div class="preview-item"><img src="${URL.createObjectURL(file)}" alt="معاينة الصورة ${index + 1}"><button type="button" class="preview-remove" data-remove="${index}" aria-label="حذف الصورة">×</button></div>`).join("");
    grid.querySelectorAll(".preview-remove").forEach((button) => button.addEventListener("click", () => { files.splice(Number(button.dataset.remove), 1); render(); }));
  };
  const addFiles = (list) => {
    files = [...files, ...[...list].filter((file) => /^image\/(jpeg|jpg)$/i.test(file.type))];
    render();
  };
  zone.addEventListener("click", (event) => { if (event.target !== input) input.click(); });
  input.addEventListener("change", () => addFiles(input.files));
  ["dragenter", "dragover"].forEach((name) => zone.addEventListener(name, (event) => { event.preventDefault(); zone.classList.add("dragover"); }));
  ["dragleave", "drop"].forEach((name) => zone.addEventListener(name, (event) => { event.preventDefault(); zone.classList.remove("dragover"); }));
  zone.addEventListener("drop", (event) => addFiles(event.dataTransfer.files));
}

function setupMultiStepForm() {
  const form = document.getElementById("addPropertyForm");
  if (!form) return;
  form.noValidate = true;
  const steps = form.querySelectorAll(".step");
  const nextBtns = form.querySelectorAll(".btn-next");
  const prevBtns = form.querySelectorAll(".btn-prev");
  const progress = document.getElementById("progressFill");
  let current = 0;
  nextBtns.forEach((b, i) => {
    b.addEventListener("click", () => {
      if (current < steps.length - 1) {
        const required = [...steps[current].querySelectorAll("[required]")];
        const checkedNames = new Set(required.filter((field) => field.type === "radio" && field.checked).map((field) => field.name));
        const invalid = required.find((field) => field.type === "radio" ? !checkedNames.has(field.name) : !field.checkValidity());
        if (invalid) { invalid.reportValidity(); return; }
        steps[current].classList.remove("active");
        current++;
        steps[current].classList.add("active");
        if (progress) progress.style.transform = `scaleX(${(current + 1) / steps.length})`;
      }
    });
  });
  prevBtns.forEach((b) => {
    b.addEventListener("click", () => {
      if (current > 0) {
        steps[current].classList.remove("active");
        current--;
        steps[current].classList.add("active");
        if (progress) progress.style.transform = `scaleX(${(current + 1) / steps.length})`;
      }
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const activeStep = form.querySelector(".step.active");
    const invalid = [...(activeStep?.querySelectorAll("[required]") || [])].find((field) => !field.checkValidity());
    if (invalid) { invalid.reportValidity(); return; }
    document.getElementById("formSuccess")?.removeAttribute("hidden");
    form.style.display = "none";
    setTimeout(() => {
      form.style.display = "block";
      document.getElementById("formSuccess").hidden = true;
      form.reset();
      steps.forEach((s, i) => s.classList.toggle("active", i === 0));
      current = 0;
      if (progress) progress.style.transform = `scaleX(${1 / steps.length})`;
    }, 3000);
  });
}

function setupSourcePanels() {
  document.querySelectorAll(".source-panel .panel-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.dataset.target;
      const panel = btn.parentElement;
      if (panel.dataset.source && target === "listings") {
        currentFilters.source = panel.dataset.source;
        renderSourceChips();
        renderListings();
        document.getElementById("listings")?.scrollIntoView({ behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth", block: "start" });
      }
    });
  });
}

function setupYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

function observeAnimations() {
  const sections = [...document.querySelectorAll(".section")];
  sections.forEach((section, index) => {
    section.classList.add("reveal-init");
    if (!section.querySelector(":scope > .section-divider")) {
      const divider = document.createElement("div");
      divider.className = "section-divider";
      divider.setAttribute("aria-hidden", "true");
      section.appendChild(divider);
    }
    const heading = section.querySelector(".section-title");
    if (heading && !heading.querySelector(".line-reveal")) {
      const title = heading.textContent;
      heading.innerHTML = `<span class="line-reveal"><span>${escapeHtml(title)}</span></span>`;
    }
    if (index < 3) {
      for (let orbIndex = 0; orbIndex < 2; orbIndex++) {
        const orb = document.createElement("i");
        orb.className = "orb";
        orb.setAttribute("aria-hidden", "true");
        orb.style.top = `${18 + index * 15 + orbIndex * 24}%`;
        orb.style.insetInlineStart = `${8 + index * 20 + orbIndex * 9}%`;
        section.appendChild(orb);
      }
    }
  });
  if (!("IntersectionObserver" in window)) {
    sections.forEach((section) => section.classList.add("revealed"));
    document.querySelectorAll(".section-divider").forEach((divider) => divider.classList.add("revealed"));
    revealObserver = null;
    return;
  }
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        if (entry.target.classList.contains("section")) entry.target.querySelector(".section-divider")?.classList.add("revealed");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -35px 0px" });
  motionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle("is-inview", entry.isIntersecting));
  }, { threshold: 0.02 });
  sections.forEach((section) => revealObserver.observe(section));
  document.querySelectorAll(".partner-card,.source-panel,.stat-item").forEach((card, index) => {
    card.classList.add("reveal-init");
    card.style.transitionDelay = `${index % 4 * 85}ms`;
    revealObserver.observe(card);
  });
}

function setupSmoothScroll() {
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const heroImage = document.querySelector(".hero picture img");
  let scrollQueued = false;
  window.addEventListener("scroll", () => {
    if (scrollQueued) return;
    scrollQueued = true;
    requestAnimationFrame(() => {
      if (heroImage) heroImage.style.setProperty("--hero-parallax", `${Math.min(window.scrollY * .3, 130)}px`);
      scrollQueued = false;
    });
  }, { passive: true });
}

function setupMagneticAndCursor() {
  if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const cursor = document.createElement("div");
  cursor.className = "cursor-ring";
  cursor.setAttribute("aria-hidden", "true");
  document.body.appendChild(cursor);
  let cursorQueued = false;
  let pointerX = 0;
  let pointerY = 0;
  window.addEventListener("pointermove", (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;
    if (cursorQueued) return;
    cursorQueued = true;
    requestAnimationFrame(() => {
      cursor.style.left = `${pointerX}px`;
      cursor.style.top = `${pointerY}px`;
      cursorQueued = false;
    });
  }, { passive: true });
  document.querySelectorAll("a,button,.listing-card").forEach((element) => {
    element.addEventListener("pointerenter", () => cursor.classList.add("is-hover"));
    element.addEventListener("pointerleave", () => cursor.classList.remove("is-hover"));
  });
  document.querySelectorAll(".btn,.icon-btn,.panel-btn").forEach((element) => {
    let queued = false;
    element.addEventListener("pointermove", (event) => {
      if (queued) return;
      queued = true;
      const pointerX = event.clientX;
      const pointerY = event.clientY;
      requestAnimationFrame(() => {
        const rect = element.getBoundingClientRect();
        const x = (pointerX - rect.left - rect.width / 2) * .12;
        const y = (pointerY - rect.top - rect.height / 2) * .12;
        element.style.translate = `${x}px ${y}px`;
        queued = false;
      });
    });
    element.addEventListener("pointerleave", () => { element.style.translate = ""; });
  });
}

function setupEnhancedInteractions() {
  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    document.querySelectorAll(".source-panel,.stat-item").forEach(bindTilt);
  }
}

const tiltElements = new WeakSet();
function bindTilt(card) {
  if (!card || tiltElements.has(card) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  tiltElements.add(card);
  let queued = false;
  let clientX = 0;
  let clientY = 0;
  const move = (event) => {
    clientX = event.clientX;
    clientY = event.clientY;
    if (queued) return;
    queued = true;
    requestAnimationFrame(() => {
      const rect = card.getBoundingClientRect();
      const x = (clientX - rect.left) / rect.width - .5;
      const y = (clientY - rect.top) / rect.height - .5;
      card.style.setProperty("--tilt-x", `${-y * 5}deg`);
      card.style.setProperty("--tilt-y", `${x * 6}deg`);
      card.style.setProperty("--glare-x", `${(x + .5) * 100}%`);
      card.style.setProperty("--glare-y", `${(y + .5) * 100}%`);
      queued = false;
    });
  };
  const reset = () => {
    card.style.setProperty("--tilt-x", "0deg");
    card.style.setProperty("--tilt-y", "0deg");
  };
  card.addEventListener("pointermove", move, { passive: true });
  card.addEventListener("pointerleave", reset, { passive: true });
  card.addEventListener("touchend", reset, { passive: true });
}

function setupCityScene() {
  const host = document.getElementById("cityScene");
  if (!host || !window.THREE || !("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  const THREE = window.THREE;
  let renderer;
  try {
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true, powerPreference: "low-power" });
  } catch (error) {
    return;
  }
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 1.5));
  renderer.setClearColor(0x0a0a0a, 0);
  host.appendChild(renderer.domElement);
  const scene = new THREE.Scene();
  scene.fog = new THREE.FogExp2(0x0a0a0a, .032);
  const camera = new THREE.PerspectiveCamera(38, 1, .1, 100);
  camera.position.set(0, 6.5, 17);
  camera.lookAt(0, 1.1, 0);
  const city = new THREE.Group();
  scene.add(city);
  scene.add(new THREE.HemisphereLight(0xe5dfd0, 0x16120a, 1.5));
  const goldLight = new THREE.PointLight(0xd5a642, 42, 32, 2);
  goldLight.position.set(-5, 8, 2);
  scene.add(goldLight);
  const fill = new THREE.PointLight(0xc8d3df, 17, 24, 2);
  fill.position.set(5, 5, -5);
  scene.add(fill);
  const floor = new THREE.Mesh(new THREE.PlaneGeometry(70, 70), new THREE.MeshStandardMaterial({ color: 0x101010, metalness: .58, roughness: .3 }));
  floor.rotation.x = -Math.PI / 2;
  floor.position.y = -.035;
  scene.add(floor);
  const groundGrid = new THREE.GridHelper(48, 24, 0x483919, 0x242119);
  groundGrid.position.y = -.025;
  groundGrid.material.transparent = true;
  groundGrid.material.opacity = .21;
  scene.add(groundGrid);
  const towerWhite = new THREE.MeshStandardMaterial({ color: 0xe4e1d8, metalness: .28, roughness: .32 });
  const towerGold = new THREE.MeshStandardMaterial({ color: 0xc6a04a, metalness: .48, roughness: .28, emissive: 0x30220a, emissiveIntensity: .24 });
  let seed = 23;
  const random = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
  for (let i = 0; i < 37; i++) {
    const width = .42 + random() * .85;
    const depth = .42 + random() * .8;
    const height = 1.15 + random() * (i < 8 ? 6.1 : 3.8);
    const x = (random() - .5) * 19;
    const z = (random() - .5) * 12;
    const outline = new THREE.Shape();
    outline.moveTo(-width / 2, -depth / 2);
    outline.lineTo(width / 2, -depth / 2);
    outline.lineTo(width / 2, depth / 2);
    outline.lineTo(-width / 2, depth / 2);
    outline.closePath();
    const geometry = new THREE.ExtrudeGeometry(outline, { depth: height, bevelEnabled: false, curveSegments: 1, steps: 1 });
    geometry.rotateX(-Math.PI / 2);
    const tower = new THREE.Mesh(geometry, random() > .78 ? towerGold : towerWhite);
    tower.position.set(x, 0, z);
    city.add(tower);
    const crown = new THREE.Mesh(new THREE.BoxGeometry(width + .055, .075, depth + .055), random() > .54 ? towerGold : towerWhite);
    crown.position.set(x, height + .02, z);
    city.add(crown);
  }
  const glow = new THREE.Mesh(new THREE.SphereGeometry(.13, 12, 10), new THREE.MeshBasicMaterial({ color: 0xe8cf8f }));
  glow.position.set(-4.5, 7.8, 1.5);
  city.add(glow);
  const pointer = { x: 0, y: 0 };
  let sceneVisible = false;
  let animationFrame = 0;
  let previousTime = 0;
  const resize = () => {
    const width = Math.max(host.clientWidth, 1);
    const height = Math.max(host.clientHeight, 1);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
  };
  resize();
  if ("ResizeObserver" in window) new ResizeObserver(resize).observe(host);
  else window.addEventListener("resize", resize, { passive: true });
  window.addEventListener("pointermove", (event) => {
    pointer.x = (event.clientX / window.innerWidth - .5) * 2;
    pointer.y = (event.clientY / window.innerHeight - .5) * 2;
  }, { passive: true });
  window.addEventListener("deviceorientation", (event) => {
    if (event.gamma !== null) pointer.x = Math.max(-1, Math.min(1, event.gamma / 28));
    if (event.beta !== null) pointer.y = Math.max(-1, Math.min(1, (event.beta - 35) / 38));
  }, { passive: true });
  const draw = (time) => {
    if (!sceneVisible) { animationFrame = 0; return; }
    const delta = previousTime ? Math.min((time - previousTime) / 1000, .05) : 0;
    previousTime = time;
    city.rotation.y += delta * .035;
    camera.position.x += (pointer.x * 1.5 - camera.position.x) * .025;
    camera.position.y += (6.5 - pointer.y * .5 - camera.position.y) * .025;
    camera.lookAt(0, 1.1, 0);
    renderer.render(scene, camera);
    animationFrame = requestAnimationFrame(draw);
  };
  const visibility = new IntersectionObserver((entries) => {
    sceneVisible = entries.some((entry) => entry.isIntersecting);
    if (sceneVisible && !animationFrame) animationFrame = requestAnimationFrame(draw);
    if (!sceneVisible && animationFrame) { cancelAnimationFrame(animationFrame); animationFrame = 0; previousTime = 0; }
  }, { threshold: .01 });
  visibility.observe(host);
}

// Run on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
