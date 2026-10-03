// دار دمياط - Main JavaScript
// Black & White Luxury Real Estate
// CITY: دمياط الجديدة | BRAND_NAME: دار دمياط

const BRAND_NAME = "دار دمياط";
const CITY = "دمياط الجديدة";
const HERO_IMAGE =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&q=80&auto=format&fit=crop";
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
      img.style.filter = "grayscale(1) brightness(1.2)";
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
  if (saved === "dark") document.body.classList.add("dark-mode");
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
    <div class="partner-card" tabindex="0" data-partner="${p.id}" role="button" aria-label="${p.name}">
      <img src="${p.logo}" alt="${p.name}" class="partner-logo" onerror="this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop'" />
    </div>
  `
    )
    .join("");
  grid.querySelectorAll(".partner-card").forEach((card) => {
    card.addEventListener("click", () => openCompanyOverlay(card.dataset.partner));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openCompanyOverlay(card.dataset.partner);
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
  let html = `<div style="display:flex;flex-direction:column;gap:2rem;">
    <div style="display:flex;align-items:center;gap:1rem;flex-wrap:wrap;">
      <img src="${comp.logo}" alt="${comp.name}" style="width:80px;height:80px;object-fit:contain;filter:grayscale(1);border:1px solid var(--color-gray-200);padding:0.75rem;background:#fff;" onerror="this.src='https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80&auto=format&fit=crop'" />
      <div style="flex:1;min-width:0;">
        <h3 style="font-size:1.25rem;margin-bottom:0.5rem;overflow-wrap:break-word;word-break:break-word;">${comp.name}</h3>
        <p style="opacity:0.8;line-height:1.7;overflow-wrap:break-word;word-break:break-word;">${comp.description}</p>
      </div>
    </div>`;
  if (comp.projects && comp.projects.length) {
    html += `<div><h4 style="font-size:1.125rem;margin-bottom:1rem;">المشروعات</h4><div style="display:grid;grid-template-columns:1fr;gap:1rem;">`;
    comp.projects.forEach((p) => {
      html += `<div style="border:1px solid var(--color-gray-200);border-radius:var(--radius-md);padding:1rem;">
        <h5 style="font-weight:600;margin-bottom:0.375rem;">${p.name}</h5>
        <p style="font-size:0.875rem;opacity:0.8;margin-bottom:0.375rem;">${p.location}</p>
        <p style="font-size:0.875rem;opacity:0.8;margin-bottom:0.375rem;">النوع: ${p.type}</p>
        <p style="font-size:0.875rem;opacity:0.8;margin-bottom:0.5rem;">${p.info}</p>
        <p style="font-size:0.875rem;font-weight:500;">متاح: ${p.available}</p>
      </div>`;
    });
    html += `</div></div>`;
  }
  html += `<div><a href="https://wa.me/${WHATSAPP_NUMBER.replace(/\D/g, "")}" target="_blank" rel="noopener" class="btn btn-primary" style="display:inline-flex;">واتساب الشركة</a></div></div>`;
  body.innerHTML = html;
  overlay.classList.add("active");
  document.body.style.overflow = "hidden";
}

document.getElementById("closeCompanyOverlay")?.addEventListener("click", () => {
  document.getElementById("companyOverlay").classList.remove("active");
  document.body.style.overflow = "";
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
  chips.innerHTML = sources
    .map(
      (s) => `
      <button class="chip ${currentFilters.source === s ? "active" : ""}" data-source="${s}">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6m11-7h-6m-6 0H1"></path></svg>
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
  // search
  if (currentSearch) {
    const q = currentSearch.toLowerCase();
    filtered = filtered.filter(
      (l) =>
        l.title.toLowerCase().includes(q) ||
        l.district.toLowerCase().includes(q) ||
        l.type.toLowerCase().includes(q)
    );
  }
  // source filter
  if (currentFilters.source !== "الكل") {
    filtered = filtered.filter((l) => l.source === currentFilters.source);
  }
  if (count) count.textContent = `عرض ${filtered.length} نتيجة`;
  if (filtered.length === 0) {
    grid.innerHTML = "";
    empty.hidden = false;
    return;
  }
  empty.hidden = true;
  grid.innerHTML = filtered
    .slice(0, 12)
    .map((item, index) => {
      const priceText = item.deal === "إيجار" ? `${formatNumber(item.price)} ج.م / شهرياً` : `${formatNumber(item.price)} ج.م`;
      const isFav = favorites.has(item.id);
      const img = item.images && item.images[0] ? item.images[0] : "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop";
      const verifiedBadge = item.verified ? `<span class="listing-badge verified">موثّق</span>` : "";
      return `
      <article class="listing-card" tabindex="0" data-id="${item.id}" style="--index: ${index};">
        <div class="listing-image-wrapper">
          <img src="${img}" alt="${item.title}" class="listing-image" onerror="this.src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop'" />
          <button class="favorite-btn ${isFav ? "active" : ""}" data-id="${item.id}" aria-label="إضافة للمفضلة">
            <svg viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
          </button>
          <div class="listing-badges">
            <span class="listing-badge">${item.source}</span>
            ${verifiedBadge}
          </div>
        </div>
        <div class="listing-content">
          <div class="listing-price">${priceText}</div>
          <h3 class="listing-title">${escapeHtml(item.title)}</h3>
          <div class="listing-meta">
            <div class="listing-meta-item">
              <svg viewBox="0 0 24 24"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
              ${item.area} م²
            </div>
            ${item.rooms ? `<div class="listing-meta-item"><svg viewBox="0 0 24 24"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>${item.rooms} غرف</div>` : ""}
            <div class="listing-meta-item">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              ${item.district}
            </div>
          </div>
          <span class="listing-source">${item.deal}</span>
          <div class="listing-updated">آخر تحديث: ${item.updatedAt}</div>
        </div>
      </article>
    `;
    })
    .join("");
}

function formatNumber(n) {
  return Number(n).toLocaleString("ar-EG");
}

function escapeHtml(text) {
  const div = document.createElement("div");
  div.textContent = text;
  return div.innerHTML;
}

// Placeholder functions to satisfy other interactions - minimal
function setupStats() {
  const nums = document.querySelectorAll(".stat-number");
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
          let cur = 0;
          const step = Math.max(1, Math.floor(target / 60));
          const timer = setInterval(() => {
            cur += step;
            if (cur >= target) {
              cur = target;
              clearInterval(timer);
            }
            el.textContent = cur.toLocaleString();
          }, 20);
          obs.unobserve(el);
        }
      });
    },
    { threshold: 0.5 }
  );
  nums.forEach((n) => obs.observe(n));
}

function setupBottomNav() {
  document.querySelectorAll(".nav-item").forEach((item) => {
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
}

function renderFavorites() {
  const panel = document.getElementById("favoritesList");
  if (!panel) return;
  const favs = listings.filter((l) => favorites.has(l.id));
  if (favs.length === 0) {
    panel.innerHTML = `<p style="opacity:0.7;">لا توجد عناصر في المفضلة</p>`;
    return;
  }
  panel.innerHTML = favs
    .map((item) => {
      const img = item.images && item.images[0] ? item.images[0] : "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop";
      return `<article class="listing-card" style="margin-bottom:1rem;"><div class="listing-image-wrapper"><img src="${img}" class="listing-image" onerror="this.src='https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80&auto=format&fit=crop'"/></div><div class="listing-content"><div class="listing-price">${formatNumber(item.price)}</div><h3 class="listing-title">${escapeHtml(item.title)}</h3></div></article>`;
    })
    .join("");
}

function setupFiltersSheet() {
  const btn = document.getElementById("filtersBtn");
  const sheet = document.getElementById("filtersSheet");
  const overlay = document.getElementById("sheetOverlay");
  const close = () => {
    sheet?.classList.remove("active");
    document.body.style.overflow = "";
  };
  btn?.addEventListener("click", () => {
    sheet?.classList.add("active");
    document.body.style.overflow = "hidden";
  });
  overlay?.addEventListener("click", close);
}

function setupMultiStepForm() {
  const form = document.getElementById("addPropertyForm");
  if (!form) return;
  const steps = form.querySelectorAll(".step");
  const nextBtns = form.querySelectorAll(".btn-next");
  const prevBtns = form.querySelectorAll(".btn-prev");
  const progress = document.getElementById("progressFill");
  let current = 0;
  nextBtns.forEach((b, i) => {
    b.addEventListener("click", () => {
      if (current < steps.length - 1) {
        steps[current].classList.remove("active");
        current++;
        steps[current].classList.add("active");
        if (progress) progress.style.width = `${((current + 1) / steps.length) * 100}%`;
      }
    });
  });
  prevBtns.forEach((b) => {
    b.addEventListener("click", () => {
      if (current > 0) {
        steps[current].classList.remove("active");
        current--;
        steps[current].classList.add("active");
        if (progress) progress.style.width = `${((current + 1) / steps.length) * 100}%`;
      }
    });
  });
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    document.getElementById("formSuccess")?.removeAttribute("hidden");
    form.style.display = "none";
    setTimeout(() => {
      form.style.display = "block";
      document.getElementById("formSuccess").hidden = true;
      form.reset();
      steps.forEach((s, i) => s.classList.toggle("active", i === 0));
      current = 0;
      if (progress) progress.style.width = "25%";
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
        document.getElementById("listings")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });
}

function setupYear() {
  const y = document.getElementById("year");
  if (y) y.textContent = new Date().getFullYear();
}

function observeAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll(".section").forEach((sec) => {
    sec.classList.add("reveal-init");
    observer.observe(sec);
  });
}

function setupSmoothScroll() {
  // CSS handles most; Lenis not added but CSS scroll-behavior used
}

function setupMagneticAndCursor() {
  // Custom cursor and magnetic effects are desktop-only; skip on touch devices.
  if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;
  // No cursor/magnetic enhancements on this build.
}

// Run on load
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}