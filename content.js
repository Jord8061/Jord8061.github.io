const siteData = {
  profile: {
    avatar: "./assets/avatar.jpg",
    navAvatar: "./assets/nav.jpg",
    navName: "Good day, Lord Phaethon",
    nameCn: "Jin Chen | 陈瑾",
    nameEn: "Artificial Intelligence / SWUFE",
    tagline:
      "AI undergraduate at SWUFE, interested in LLMs, agents, algorithms, and practical AI systems.",
    links: [
      { name: "Email", url: "mailto:Jord8061@foxmail.com", icon: "email" },
      { name: "GitHub", url: "https://github.com/Jord8061", icon: "github" },
      { name: "OpenReview", url: "https://openreview.net/profile?id=%7EJin_Chen12", icon: "openreview" },
      { name: "ORCID", url: "https://orcid.org/0009-0009-3425-8118", icon: "orcid" }
    ]
  },

  about: [
    "I am an undergraduate student in Artificial Intelligence at Southwestern University of Finance and Economics (SWUFE). My interests lie in large language models, intelligent agents, GraphRAG security, and practical AI systems.",
    "My background spans competitive programming, full-stack development, and AI application engineering. I enjoy connecting research ideas with solid implementation, especially in scenarios where system design, reasoning ability, and engineering reliability all matter.",
    "Currently, I am working on front-end development in an AI-oriented business team, while also conducting research on adversarial attacks against GraphRAG systems. I am particularly interested in building useful AI systems that are both practical in deployment and rigorous in methodology."
  ],

  news: [
    { date: "2026.01", text: "Started my front-end internship at Taikang Online, in a team actively moving toward AI integration." },
    { date: "2026.01", text: "Completed major experimental work and method refinement for LogicPoison, our ACL 2026 submission on attacks against GraphRAG systems." },
    { date: "2025.10", text: "Delivered a speech as the student representative at the opening ceremony of the 2025 CCPC Girls Contest." }
  ],

  projects: [
    {
      title: "LogicPoison: Logical Attacks on Graph Retrieval-Augmented Generation",
      meta: "Co-first Author | ACL 2026 submission",
      description:
        "A research project on adversarial attacks against GraphRAG systems. As a co-first author, I was responsible for the full experimental pipeline and made major contributions to method refinement and experimental design. The work studies how logical corruption can compromise GraphRAG reasoning while remaining stealthy at the text level. Code will be released after the review decision.",
      tags: ["GraphRAG", "Security", "LLM", "ACL Submission"],
      links: [
        { name: "Paper", url: "#" }
      ]
    },
    {
      title: "AI-Agent System for Automated Data Processing and LLM Fine-tuning",
      meta: "Full-stack Developer | 2024.12 – 2025.06",
      description:
        "Built an end-to-end system for automated document processing, data cleaning, RAG workflow integration, and model-related task execution. I was mainly responsible for the front-end architecture and core module development, while also participating in backend pipeline integration, real-time task monitoring, and Docker-based deployment. The project reached the national finals of the Citi Cup and won a National Third Prize (Top 20).",
      tags: ["Vue3", "Node.js", "FastAPI", "RAG", "AI Agent"],
      links: [
        { name: "Code", url: "#" }
      ]
    }
  ],

  education: [
    {
      title: "Southwestern University of Finance and Economics",
      meta: "B.Eng. in Artificial Intelligence | 2022 – 2026",
      description:
        "Relevant interests: LLMs, intelligent agents, algorithms, AI applications, and system building."
    }
  ],

  experience: [
    {
      title: "Taikang Online",
      meta: "Front-end Development Intern | 2026 – Present",
      description:
        "Working on front-end development in a team that is actively moving toward AI integration. Given my combined background in AI and engineering, I am interested in contributing not only to current front-end work, but also to future AI-related system building and collaboration."
    },
    {
      title: "China Center for Behavioral Economics and Finance, SWUFE",
      meta: "RAG Project Crawling Engineer | 2025.02 – 2025.06",
      description:
        "Built the data acquisition pipeline for a RAG-oriented academic literature knowledge base. I designed multi-source crawlers, handled structured parsing and cleaning, and applied LLM-based judging to identify 4,000+ papers aligned with target topics in behavioral finance."
    },
    {
      title: "Singularity Lab, School of Computing and Artificial Intelligence, SWUFE",
      meta: "Student Head | 2025.06.04 – Present",
      description:
        "Leading the overall operation of the student technical community, including training system design, contest organization, internal selection, and the coordination of the campus-level 'Singularity Cup'."
    },
    {
      title: "Singularity Lab, School of Computing and Artificial Intelligence, SWUFE",
      meta: "Head of Programming Division | 2023.12.12 – 2025.06.03",
      description:
        "Focused on algorithm training, weekly practice organization, internal contest problem setting, and member development. I was also involved in managing online training platforms and helping build the studio’s ACM/ICPC training workflow."
    }
  ],

  awards: [
    "ICPC Asia Regional Contest (Xi'an) Bronze Medal, 2025",
    "CCPC Girls Contest Silver Medal, 2025",
    "China-ASEAN International Collegiate Programming Contest Gold Medal, 2024",
    "Citi Cup Financial Innovation Application Competition, National Third Prize, 2025",
    "National College Mathematical Contest in Modeling, Sichuan First Prize, 2024",
    "Lanqiao Cup (Python A Group), Sichuan First Prize, 2024"
  ],

};

function escapeHtml(text) {
  return String(text)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
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
  container.innerHTML = items.map((text) => `<p>${escapeHtml(text)}</p>`).join("");
}

function renderNews(items) {
  const container = document.getElementById("news-list");
  container.innerHTML = items
    .map(
      (item) => `<li><strong>${escapeHtml(item.date)}</strong> ${escapeHtml(item.text)}</li>`
    )
    .join("");
}

function renderCardItems(items, targetId) {
  const container = document.getElementById(targetId);
  container.innerHTML = items
    .map((item) => {
      const tagsHtml = item.tags
        ? `<div class="badges">${item.tags
            .map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`)
            .join("")}</div>`
        : "";

      const linksHtml = item.links
        ? `<p>${item.links
            .map(
              (link) =>
                `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.name)}</a>`
            )
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

function renderAwards(items) {
  const container = document.getElementById("awards-list");
  container.innerHTML = items.map((text) => `<li>${escapeHtml(text)}</li>`).join("");
}

function renderPage(data) {
  const navAvatar = data.profile.navAvatar || data.profile.avatar;
  const navName = data.profile.navName || data.profile.nameCn;

  document.getElementById("avatar").src = data.profile.avatar;
  document.getElementById("nav-avatar").src = navAvatar;
  document.getElementById("nav-name").textContent = navName;

  document.getElementById("name-cn").textContent = data.profile.nameCn;
  document.getElementById("name-en").textContent = data.profile.nameEn;
  document.getElementById("tagline").textContent = data.profile.tagline;
  document.title = `${data.profile.nameCn} | Academic Homepage`;

  renderLinks(data.profile.links);
  renderAbout(data.about);
  renderNews(data.news);
  renderCardItems(data.projects, "projects-list");
  renderCardItems(data.education, "education-list");
  renderCardItems(data.experience, "experience-list");
  renderAwards(data.awards);

  const footer = document.getElementById("footer-text");
  if (footer && data.footer) footer.textContent = data.footer;
}

renderPage(siteData);

const header = document.querySelector(".site-header");
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const brandLink = document.querySelector(".brand");
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
    Number.parseFloat(
      getComputedStyle(document.documentElement).getPropertyValue("--anchor-offset")
    ) || 6;
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

window.addEventListener("scroll", syncNavVisualState, { passive: true });
window.addEventListener("resize", syncActiveNavOnScroll);
window.addEventListener("load", syncNavVisualState);
syncNavVisualState();
