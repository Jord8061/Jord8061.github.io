const DATASETS = {
  en: window.siteDataEn,
  zh: window.siteDataZh
};

let currentLang = DATASETS.en ? "en" : "zh";
let currentData = DATASETS[currentLang];

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function setText(id, value) {
  const node = document.getElementById(id);
  if (!node) return;
  node.textContent = value || "";
}

function applyUIText(ui) {
  const locale = ui?.locale || (currentLang === "zh" ? "zh-CN" : "en");
  document.documentElement.lang = locale;

  setText("nav-about", ui?.nav?.about || "About");
  setText("nav-news", ui?.nav?.news || "News");
  setText("nav-projects", ui?.nav?.projects || "Projects");
  setText("nav-education", ui?.nav?.education || "Education");
  setText("nav-experience", ui?.nav?.experience || "Experience");
  setText("nav-awards", ui?.nav?.awards || "Awards");

  setText("heading-about", ui?.sectionHeadings?.about || "About Me");
  setText("heading-news", ui?.sectionHeadings?.news || "News");
  setText("heading-projects", ui?.sectionHeadings?.projects || "Selected Projects");
  setText("heading-education", ui?.sectionHeadings?.education || "Education");
  setText("heading-experience", ui?.sectionHeadings?.experience || "Experience");
  setText("heading-awards", ui?.sectionHeadings?.awards || "Honors & Awards");

  const langToggle = document.getElementById("lang-toggle");
  if (langToggle) {
    langToggle.setAttribute("data-lang", currentLang);
    langToggle.setAttribute("aria-label", ui?.toggleAriaLabel || "Switch language");
    langToggle.setAttribute("title", ui?.toggleAriaLabel || "Switch language");
  }

  const lightbox = document.getElementById("image-lightbox");
  const closeButton = document.getElementById("lightbox-close");
  if (lightbox && ui?.lightboxAriaLabel) {
    lightbox.setAttribute("aria-label", ui.lightboxAriaLabel);
  }
  if (closeButton && ui?.lightboxCloseAriaLabel) {
    closeButton.setAttribute("aria-label", ui.lightboxCloseAriaLabel);
  }
}

function getIconSvg(iconType) {
  switch (iconType) {
    case "email":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M3 5h18v14H3V5zm2 2v.01L12 12l7-4.99V7H5zm14 10V9.44l-7 4.99-7-4.99V17h14z"></path>
        </svg>
      `;
    case "github":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 .5A12 12 0 0 0 8.2 23.9c.6.1.8-.3.8-.6v-2.2c-3.3.7-4-1.4-4-1.4-.5-1.4-1.2-1.7-1.2-1.7-1-.7.1-.7.1-.7 1.1.1 1.8 1.2 1.8 1.2 1 .1 1.6-.7 2-1.1.1-.7.4-1.1.7-1.3-2.7-.3-5.5-1.4-5.5-6.1 0-1.3.5-2.4 1.2-3.3-.1-.3-.5-1.5.1-3.2 0 0 1-.3 3.3 1.2a11.2 11.2 0 0 1 6 0c2.3-1.5 3.3-1.2 3.3-1.2.6 1.7.2 2.9.1 3.2.8.9 1.2 2 1.2 3.3 0 4.8-2.9 5.8-5.6 6.1.5.4.8 1.1.8 2.3v3.4c0 .3.2.7.8.6A12 12 0 0 0 12 .5z"></path>
        </svg>
      `;
    case "scholar":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="m12 3 10 6-10 6L2 9l10-6zm0 9.1 6.7-4L12 4.1 5.3 8l6.7 4.1zM4 12.1l8 4.7 8-4.7V16l-8 5-8-5v-3.9z"></path>
        </svg>
      `;
    case "openreview":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2.5A9.5 9.5 0 1 0 21.5 12 9.5 9.5 0 0 0 12 2.5zm0 2a7.5 7.5 0 1 1-7.5 7.5A7.5 7.5 0 0 1 12 4.5z"></path>
          <path d="M8.8 8h3.6a3.2 3.2 0 0 1 0 6.4h-1.4V17H8.8V8zm2.2 2v2.4h1.3a1.2 1.2 0 0 0 0-2.4H11z"></path>
        </svg>
      `;
    case "orcid":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm-4.6 4.4a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2zM6.4 9.7h2v8.1h-2z"></path>
          <path d="M10.3 9.7h4a3.1 3.1 0 1 1 0 6.2h-2v1.9h-2V9.7zm2 1.8V14h1.9a1.2 1.2 0 0 0 0-2.5h-1.9z"></path>
        </svg>
      `;
    default:
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2zm1 14h-2v-2h2zm0-4h-2V7h2z"></path>
        </svg>
      `;
  }
}

function inferIconType(item) {
  const source = `${item.icon || ""} ${item.name || ""} ${item.url || ""}`.toLowerCase();
  if (source.includes("mail") || source.includes("email")) return "email";
  if (source.includes("github")) return "github";
  if (source.includes("scholar")) return "scholar";
  if (source.includes("openreview")) return "openreview";
  if (source.includes("orcid")) return "orcid";
  return "default";
}

function renderLinks(items) {
  const container = document.getElementById("social-links");
  if (!container) return;

  container.innerHTML = items
    .map((item) => {
      const iconType = inferIconType(item);
      const safeUrl = escapeHtml(item.url);
      const safeName = escapeHtml(item.name);
      const externalAttrs = /^https?:\/\//i.test(item.url)
        ? ` target="_blank" rel="noopener noreferrer"`
        : "";

      return `<a class="icon-link" href="${safeUrl}" aria-label="${safeName}" title="${safeName}"${externalAttrs}>${getIconSvg(iconType)}</a>`;
    })
    .join("");
}

function renderAbout(items) {
  const container = document.getElementById("about-content");
  if (!container) return;
  container.innerHTML = items.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
}

function renderNews(items) {
  const container = document.getElementById("news-list");
  if (!container) return;
  container.innerHTML = items
    .map((item) => {
      const linkHtml = item.url
        ? ` <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.linkText || "Read more")}</a>`
        : "";
      return `<li><strong>${escapeHtml(item.date)}</strong> ${escapeHtml(item.text)}${linkHtml}</li>`;
    })
    .join("");
}

function renderCardItems(items, targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;

  container.innerHTML = items
    .map((item) => {
      const tagsHtml = item.tags
        ? `<div class="badges">${item.tags.map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join("")}</div>`
        : "";

      const linksHtml = item.links
        ? `<p>${item.links
            .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.name)}</a>`)
            .join(" / ")}</p>`
        : "";

      return `
        <div class="item">
          <h3>${escapeHtml(item.title)}</h3>
          <div class="item-meta">${escapeHtml(item.meta)}</div>
          <p class="muted">${escapeHtml(item.description)}</p>
          ${tagsHtml}
          ${linksHtml}
        </div>
      `;
    })
    .join("");
}

function renderEducation(items) {
  const container = document.getElementById("education-list");
  if (!container) return;

  container.innerHTML = items
    .map((item) => {
      const title = escapeHtml(item.title || "");
      const meta = escapeHtml(item.meta || "");
      const description = escapeHtml(item.description || "");
      const imageSrc = item.image ? encodeURI(item.image) : "";
      const imageAlt = escapeHtml(item.logoAlt || `${item.title || "Education"} logo`);
      const logoHtml = imageSrc
        ? `<img class="edu-logo" src="${imageSrc}" alt="${imageAlt}" loading="lazy" decoding="async" fetchpriority="low" />`
        : `<div class="edu-logo edu-logo-placeholder" aria-hidden="true"></div>`;

      return `
        <div class="edu-item">
          <div class="edu-logo-wrap">${logoHtml}</div>
          <div class="edu-content">
            <h3>${title}</h3>
            <div class="item-meta">${meta}</div>
            <p class="muted">${description}</p>
          </div>
        </div>
      `;
    })
    .join("");
}

function renderAwards(items) {
  const container = document.getElementById("awards-list");
  if (!container) return;

  const parseAwardDate = (value) => {
    if (!value) return Number.NEGATIVE_INFINITY;
    const match = String(value).match(/(\d{4})(?:[./-](\d{1,2}))?/);
    if (!match) return Number.NEGATIVE_INFINITY;
    const year = Number.parseInt(match[1], 10);
    const month = match[2] ? Number.parseInt(match[2], 10) : 1;
    return year * 100 + month;
  };

  const getAwardSortKey = (item) => {
    if (typeof item === "string") return parseAwardDate(item);
    return parseAwardDate(item.date || item.description);
  };

  const sortedItems = [...items].sort((a, b) => getAwardSortKey(b) - getAwardSortKey(a));
  const lightboxPrefix = currentData?.ui?.lightboxOpenPrefix || "View full image: ";

  container.innerHTML = sortedItems
    .map((item) => {
      if (typeof item === "string") return `<li>${escapeHtml(item)}</li>`;

      const title = escapeHtml(item.title || "Award");
      const description = escapeHtml(item.description || "");
      const imageSrc = item.image ? encodeURI(item.image) : "";
      const thumbSrc = item.thumb ? encodeURI(item.thumb) : imageSrc;
      const fullSrc = imageSrc || thumbSrc;
      const imageAlt = escapeHtml(item.alt || item.title || "Award image");
      const thumbHtml = thumbSrc
        ? `<button class="award-thumb-trigger" type="button" data-fullsrc="${fullSrc}" data-alt="${imageAlt}" aria-label="${escapeHtml(lightboxPrefix)}${title}">
            <img class="award-thumb" src="${thumbSrc}" alt="${imageAlt}" loading="lazy" decoding="async" fetchpriority="low" />
          </button>`
        : `<div class="award-thumb award-thumb-placeholder" aria-hidden="true"></div>`;

      return `
        <li class="award-item">
          ${thumbHtml}
          <div class="award-body">
            <h3 class="award-title">${title}</h3>
            ${description ? `<p class="award-desc">${description}</p>` : ""}
          </div>
        </li>
      `;
    })
    .join("");

  if (!container.dataset.lightboxBound) {
    container.addEventListener("click", (event) => {
      const trigger = event.target.closest(".award-thumb-trigger");
      if (!trigger) return;
      const fullSrc = trigger.getAttribute("data-fullsrc");
      const fullAlt = trigger.getAttribute("data-alt") || "Award image";
      if (!fullSrc) return;
      openImageLightbox(fullSrc, fullAlt);
    });
    container.dataset.lightboxBound = "true";
  }
}

function renderPage(data) {
  const navAvatar = data.profile.navAvatar || data.profile.avatar;
  const navName = data.profile.navName || data.profile.nameCn;

  const avatar = document.getElementById("avatar");
  const navAvatarNode = document.getElementById("nav-avatar");
  if (avatar) avatar.src = data.profile.avatar;
  if (navAvatarNode) navAvatarNode.src = navAvatar;
  setText("nav-name", navName);

  setText("name-cn", data.profile.nameCn);
  setText("college", data.profile.college || "");
  setText("tagline", data.profile.tagline);

  const pageTitle = data.ui?.pageTitle || "Academic Homepage";
  document.title = `${data.profile.nameCn} | ${pageTitle}`;

  renderLinks(data.profile.links || []);
  renderAbout(data.about || []);
  renderNews(data.news || []);
  renderCardItems(data.projects || [], "projects-list");
  renderEducation(data.education || []);
  renderCardItems(data.experience || [], "experience-list");
  renderAwards(data.awards || []);

  const footer = document.getElementById("footer-text");
  if (footer && data.footer) footer.textContent = data.footer;
}

const header = document.querySelector(".site-header");
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const brandLink = document.querySelector(".brand");
const langToggle = document.getElementById("lang-toggle");
const imageLightbox = document.getElementById("image-lightbox");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxImage = document.getElementById("lightbox-image");
const CLOSED_ICON = "\u2630";
const OPEN_ICON = "\u2715";
const navLinks = siteNav ? Array.from(siteNav.querySelectorAll('a[href^="#"]')) : [];
const navTargets = navLinks
  .map((link) => {
    const id = (link.getAttribute("href") || "").replace("#", "");
    return { link, section: id ? document.getElementById(id) : null };
  })
  .filter((item) => item.section);

function closeMobileNav() {
  if (!header || !navToggle) return;
  header.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.textContent = CLOSED_ICON;
}

function openImageLightbox(src, alt) {
  if (!imageLightbox || !lightboxImage) return;
  lightboxImage.src = src;
  lightboxImage.alt = alt || "Award image";
  imageLightbox.classList.add("open");
  imageLightbox.setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
}

function closeImageLightbox() {
  if (!imageLightbox || !lightboxImage) return;
  imageLightbox.classList.remove("open");
  imageLightbox.setAttribute("aria-hidden", "true");
  lightboxImage.removeAttribute("src");
  lightboxImage.alt = "";
  document.body.classList.remove("modal-open");
}

function setActiveNavById(id) {
  navLinks.forEach((link) => {
    const targetId = (link.getAttribute("href") || "").replace("#", "");
    link.classList.toggle("active", targetId === id);
  });
}

function syncHeaderState() {
  if (!header) return;
  header.classList.toggle("scrolled", window.scrollY > 6);
}

function syncActiveNavOnScroll() {
  if (!navTargets.length) return;
  const anchorOffset =
    Number.parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--anchor-offset")) || 6;
  const offset = header ? header.offsetHeight + anchorOffset : 72;
  const marker = window.scrollY + offset;
  let activeId = navTargets[0].section.id;

  navTargets.forEach(({ section }) => {
    if (section.offsetTop <= marker) activeId = section.id;
  });

  setActiveNavById(activeId);
}

function syncNavVisualState() {
  syncHeaderState();
  syncActiveNavOnScroll();
}

function setLanguage(lang) {
  const nextLang = DATASETS[lang] ? lang : "en";
  if (!DATASETS[nextLang]) return;

  currentLang = nextLang;
  currentData = DATASETS[nextLang];

  closeImageLightbox();
  applyUIText(currentData.ui || {});
  renderPage(currentData);
  syncNavVisualState();
}

if (header && navToggle && siteNav) {
  navToggle.textContent = CLOSED_ICON;

  navToggle.addEventListener("click", () => {
    const isOpen = header.classList.toggle("nav-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
    navToggle.textContent = isOpen ? OPEN_ICON : CLOSED_ICON;
  });

  siteNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      const targetId = (link.getAttribute("href") || "").replace("#", "");
      if (targetId) setActiveNavById(targetId);
      closeMobileNav();
    });
  });
}

if (brandLink) {
  brandLink.addEventListener("click", (event) => {
    if (brandLink.getAttribute("href") !== "#") return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
    syncNavVisualState();
    closeMobileNav();
  });
}

if (langToggle) {
  langToggle.addEventListener("click", () => {
    setLanguage(currentLang === "en" ? "zh" : "en");
  });
}

if (lightboxClose) {
  lightboxClose.addEventListener("click", closeImageLightbox);
}

if (imageLightbox) {
  imageLightbox.addEventListener("click", (event) => {
    if (event.target === imageLightbox) closeImageLightbox();
  });
}

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeImageLightbox();
});

window.addEventListener("scroll", syncNavVisualState, { passive: true });
window.addEventListener("resize", syncActiveNavOnScroll);
window.addEventListener("load", syncNavVisualState);

if (currentData) {
  setLanguage(currentLang);
}
