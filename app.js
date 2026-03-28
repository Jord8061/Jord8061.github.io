const DATASETS = {
  en: window.siteDataEn,
  zh: window.siteDataZh
};

let currentLang = DATASETS.en ? "en" : "zh";
let currentData = DATASETS[currentLang];
let awardsExpanded = false;

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

  syncBrandMusicToggleState(Boolean(brandMusicAudio && !brandMusicAudio.paused && !brandMusicAudio.ended));
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
          <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" stroke-width="2"></circle>
          <text x="12" y="15" text-anchor="middle" font-size="8" font-weight="700" font-family="Arial, sans-serif" fill="currentColor">OR</text>
        </svg>
      `;
    case "orcid":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12 2A10 10 0 1 0 22 12 10 10 0 0 0 12 2zm-4.6 4.4a1.2 1.2 0 1 1-1.2 1.2 1.2 1.2 0 0 1 1.2-1.2zM6.4 9.7h2v8.1h-2z"></path>
          <path d="M10.3 9.7h4a3.1 3.1 0 1 1 0 6.2h-2v1.9h-2V9.7zm2 1.8V14h1.9a1.2 1.2 0 0 0 0-2.5h-1.9z"></path>
        </svg>
      `;
    case "csdn":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M4.693 13.638c-.497.568-1.363.63-1.712.63c-.648 0-1.144-.164-1.474-.488c-.313-.307-.478-.76-.489-1.346c-.025-1.358.744-2.762 2.074-2.762c.635 0 1.124.455 1.311.644a.34.34 0 0 0 .282.099a.38.38 0 0 0 .241-.159c.068-.087.135-.237.138-.401s-.057-.344-.243-.49a2.64 2.64 0 0 0-1.668-.591c-.819 0-1.627.376-2.218 1.033c-.621.691-.953 1.63-.935 2.646c.015.815.282 1.5.773 1.982c.528.518 1.3.791 2.235.791c1.097 0 1.776-.325 2.154-.597a.58.58 0 0 0 .24-.456a.7.7 0 0 0-.208-.497c-.23-.248-.448-.101-.503-.037Zm4.97-2.15a8 8 0 0 0-.698-.248q-.237-.072-.45-.131c-.922-.26-1.027-.5-1.017-.68c.022-.363.515-.853 1.352-.792c.607.045 1.015.509 1.205.781c.149.214.371.135.434.095a.6.6 0 0 0 .309-.514a.63.63 0 0 0-.209-.488a2.654 2.654 0 0 0-3.347-.273c-.456.323-.744.772-.77 1.202c-.064 1.061 1.015 1.366 1.803 1.588c.214.061.429.127.667.202c1.14.357 1.173.717 1.092 1.267c-.082.556-.696.834-1.685.761c-1.029-.076-1.464-.61-1.612-.901c-.05-.098-.205-.248-.413-.156c-.514.229-.473.731-.26.993c.339.416 1.15 1.035 2.667 1.035c1.734 0 2.255-.875 2.378-1.64c.092-.572-.022-1.028-.348-1.396c-.236-.267-.592-.495-1.101-.706Zm6.777-2.165c-.598-.431-1.393-.61-2.36-.532c-.712.058-1.274.243-1.335.263l-.006.002a.44.44 0 0 0-.297.379l-.47 5.201a.34.34 0 0 0 .247.35l.072.02l.066.018l.086.021a8 8 0 0 0 1.64.183c.972 0 1.765-.23 2.36-.684c.764-.583 1.141-1.5 1.118-2.725c-.021-1.135-.398-1.974-1.121-2.495Zm-.662 4.461c-.836.639-2.09.562-2.677.481a.13.13 0 0 1-.109-.137l.397-4.248a.11.11 0 0 1 .086-.1c.999-.241 1.777-.168 2.312.218c.189.137.348.331.471.568c.176.339.277.765.286 1.234c.017.916-.24 1.583-.765 1.984Zm8.189-3.374a1.9 1.9 0 0 0-.432-.919c-.399-.465-1.029-.689-1.848-.689c-.734 0-1.372.228-1.947.799c.007-.086.019-.159.018-.223s-.017-.116-.066-.163c-.048-.045-.077-.067-.127-.077s-.122-.008-.256-.006a.587.587 0 0 0-.589.54s-.325 3.874-.428 5.165a.3.3 0 0 0 .073.228a.36.36 0 0 0 .26.131h.387a.224.224 0 0 0 .226-.205l.273-2.929l.014-.147a2 2 0 0 1 .082-.412q.021-.068.047-.14c.245-.694.803-1.72 1.971-1.694c.84.018 1.449.455 1.385 1.114c-.101 1.034-.266 3.1-.358 4.14c-.019.209.182.273.252.273h.304a.44.44 0 0 0 .444-.404s.185-2.127.294-3.352l.048-.532a2 2 0 0 0-.026-.5Z"></path>
        </svg>
      `;
    case "huggingface":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M12.025 1.13c-5.77 0-10.449 4.647-10.449 10.378c0 1.112.178 2.181.503 3.185c.064-.222.203-.444.416-.577a.96.96 0 0 1 .524-.15c.293 0 .584.124.84.284c.278.173.48.408.71.694c.226.282.458.611.684.951v-.014c.017-.324.106-.622.264-.874s.403-.487.762-.543c.3-.047.596.06.787.203s.31.313.4.467c.15.257.212.468.233.542c.01.026.653 1.552 1.657 2.54c.616.605 1.01 1.223 1.082 1.912c.055.537-.096 1.059-.38 1.572c.637.121 1.294.187 1.967.187c.657 0 1.298-.063 1.921-.178c-.287-.517-.44-1.041-.384-1.581c.07-.69.465-1.307 1.081-1.913c1.004-.987 1.647-2.513 1.657-2.539c.021-.074.083-.285.233-.542c.09-.154.208-.323.4-.467a1.08 1.08 0 0 1 .787-.203c.359.056.604.29.762.543s.247.55.265.874v.015c.225-.34.457-.67.683-.952c.23-.286.432-.52.71-.694c.257-.16.547-.284.84-.285a.97.97 0 0 1 .524.151c.228.143.373.388.43.625l.006.04a10.3 10.3 0 0 0 .534-3.273c0-5.731-4.678-10.378-10.449-10.378"></path>
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
  if (source.includes("csdn")) return "csdn";
  return "default";
}

function inferProjectLinkType(link) {
  const source = `${link?.name || ""} ${link?.url || ""}`.toLowerCase();
  if (source.includes("arxiv")) return "arxiv";
  if (source.includes("github")) return "github";
  if (source.includes("openreview")) return "openreview";
  if (source.includes("huggingface")) return "huggingface";
  if (source.includes("paper")) return "paper";
  if (source.includes("code")) return "code";
  return "default";
}

function getProjectLinkIconSvg(linkType) {
  switch (linkType) {
    case "arxiv":
      return `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M3.8 18.5 9.2 5.7h2.1l5.5 12.8h-2.4l-1.3-3.1H7.4l-1.3 3.1H3.8zm4.4-5.1h4.1L10.2 8z"></path>
          <path d="M16.4 7.2h3.8v1.9h-3.8zM16.4 10.8h3.8v1.9h-3.8z"></path>
        </svg>
      `;
    case "github":
      return getIconSvg("github");
    case "openreview":
      return getIconSvg("openreview");
    case "huggingface":
      return getIconSvg("huggingface");
    default:
      return "";
  }
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
        ? ` <a class="news-link" href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(item.linkText || "Read more")}</a>`
        : "";
      return `<li><span class="news-main"><strong>${escapeHtml(item.date)}</strong> ${escapeHtml(item.text)}</span>${linkHtml}</li>`;
    })
    .join("");
}

function renderCardItems(items, targetId) {
  const container = document.getElementById(targetId);
  if (!container) return;
  const isProjectSection = targetId === "projects-list";

  container.innerHTML = items
    .map((item) => {
      const tagsHtml = item.tags
        ? `<div class="badges">${item.tags.map((tag) => `<span class="badge">${escapeHtml(tag)}</span>`).join("")}</div>`
        : "";

      const linksHtml = item.links
        ? (isProjectSection
            ? `<div class="project-links">${item.links
                .map((link) => {
                  const linkType = inferProjectLinkType(link);
                  const iconSvg = getProjectLinkIconSvg(linkType);
                  const iconHtml = linkType === "huggingface"
                    ? `<span class="project-link-icon project-link-icon-emoji" aria-hidden="true">🤗</span>`
                    : (iconSvg ? `<span class="project-link-icon" aria-hidden="true">${iconSvg}</span>` : "");
                  const rawUrl = (link.url || "").trim();
                  const isPlaceholder = rawUrl === "" || rawUrl === "#";
                  const safeUrl = escapeHtml(isPlaceholder ? "#" : rawUrl);
                  const safeName = escapeHtml(link.name || "Link");
                  const externalAttrs = !isPlaceholder && /^https?:\/\//i.test(rawUrl)
                    ? ` target="_blank" rel="noopener noreferrer"`
                    : "";
                  const disabledAttrs = isPlaceholder ? ` aria-disabled="true" tabindex="-1"` : "";
                  const disabledClass = isPlaceholder ? " project-link-disabled" : "";
                  return `<a class="project-link project-link-${linkType}${disabledClass}" href="${safeUrl}"${externalAttrs}${disabledAttrs}>${iconHtml}<span class="project-link-label">${safeName}</span></a>`;
                })
                .join("")}</div>`
            : `<p>${item.links
                .map((link) => `<a href="${escapeHtml(link.url)}" target="_blank" rel="noopener noreferrer">${escapeHtml(link.name)}</a>`)
                .join(" / ")}</p>`)
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
      const rawTipTemplate = item.descriptionTip ? String(item.descriptionTip) : "";
      const tipMarker = escapeHtml(item.descriptionTipMarker || "i");
      const tipLinkTextRaw = item.descriptionTipLinkText ? String(item.descriptionTipLinkText) : "";
      const tipLinkUrlRaw = item.descriptionTipLinkUrl ? String(item.descriptionTipLinkUrl).trim() : "";
      const tipLinkText = escapeHtml(tipLinkTextRaw);
      const safeTipLinkUrl = /^https?:\/\//i.test(tipLinkUrlRaw) ? escapeHtml(tipLinkUrlRaw) : "";
      const tipLinkHtml =
        tipLinkText && safeTipLinkUrl
          ? `<a class="edu-tip-link" href="${safeTipLinkUrl}" target="_blank" rel="noopener noreferrer">${tipLinkText}</a>`
          : "";
      const tipAriaText = escapeHtml(rawTipTemplate.replace("{{link}}", tipLinkTextRaw).replace(/\s+/g, " ").trim());
      const tipBodyHtml = rawTipTemplate
        ? escapeHtml(rawTipTemplate).replace("{{link}}", tipLinkHtml || tipLinkText || "")
        : "";
      const tipHtml = tipBodyHtml
        ? `<span class="edu-inline-tip-wrap"><button class="edu-inline-tip" type="button" aria-expanded="false" aria-label="${tipAriaText}">${tipMarker}</button><span class="edu-inline-tip-content" hidden>${tipBodyHtml}</span></span>`
        : "";
      let description = escapeHtml(item.description || "").replace(/\r?\n/g, "<br>");
      if (tipHtml) {
        const firstBreakIndex = description.indexOf("<br>");
        description =
          firstBreakIndex >= 0
            ? `${description.slice(0, firstBreakIndex)}${tipHtml}${description.slice(firstBreakIndex)}`
            : `${description}${tipHtml}`;
      }
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
  const COLLAPSE_AFTER_DATE = 202408;
  const isPinnedAward = (item) => item && typeof item === "object" && Number.isFinite(item.pinPosition);

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
  const pinnedIndex = sortedItems.findIndex((item) => isPinnedAward(item));
  if (pinnedIndex !== -1) {
    const [pinnedItem] = sortedItems.splice(pinnedIndex, 1);
    const targetIndex = Math.max(0, Math.min(sortedItems.length, Math.floor(pinnedItem.pinPosition) - 1));
    sortedItems.splice(targetIndex, 0, pinnedItem);
  }
  const collapsedItems = sortedItems.filter(
    (item) => !isPinnedAward(item) && getAwardSortKey(item) < COLLAPSE_AFTER_DATE
  );
  const hasCollapsible = collapsedItems.length > 0;
  const expandedLabel = currentLang === "zh" ? "🏅 收起更多奖项" : "🏅 Show fewer awards";
  const collapsedLabel = currentLang === "zh" ? "🏅 展开更多奖项" : "🏅 Show more awards";
  const toggleLabel = awardsExpanded ? expandedLabel : collapsedLabel;
  const lightboxPrefix = currentData?.ui?.lightboxOpenPrefix || "View full image: ";

  const renderAwardItem = (item) => {
    if (typeof item === "string") return `<li>${escapeHtml(item)}</li>`;

    const rawTitle = item.title || "Award";
    const title = escapeHtml(rawTitle);
    const description = escapeHtml(item.description || "");
    const mediaItems = Array.isArray(item.images) && item.images.length
      ? item.images
          .map((imageItem, index) => {
            const fullSrc = imageItem?.image ? encodeURI(imageItem.image) : "";
            const thumbSrc = imageItem?.thumb ? encodeURI(imageItem.thumb) : fullSrc;
            if (!fullSrc && !thumbSrc) return null;
            return {
              fullSrc: fullSrc || thumbSrc,
              thumbSrc: thumbSrc || fullSrc,
              alt: escapeHtml(imageItem?.alt || `${rawTitle} image ${index + 1}`)
            };
          })
          .filter(Boolean)
      : (() => {
          const imageSrc = item.image ? encodeURI(item.image) : "";
          const thumbSrc = item.thumb ? encodeURI(item.thumb) : imageSrc;
          if (!imageSrc && !thumbSrc) return [];
          return [{
            fullSrc: imageSrc || thumbSrc,
            thumbSrc: thumbSrc || imageSrc,
            alt: escapeHtml(item.alt || rawTitle || "Award image")
          }];
        })();

    const buildThumbButton = (mediaItem, index, isSplit) => {
      const ariaSuffix = isSplit ? ` (${index + 1})` : "";
      const ariaLabel = escapeHtml(`${lightboxPrefix}${rawTitle}${ariaSuffix}`);
      const triggerClass = isSplit ? "award-thumb-trigger award-thumb-split-trigger" : "award-thumb-trigger";
      const imageClass = isSplit ? "award-thumb award-thumb-split" : "award-thumb";
      return `<button class="${triggerClass}" type="button" data-fullsrc="${mediaItem.fullSrc}" data-alt="${mediaItem.alt}" aria-label="${ariaLabel}">
          <img class="${imageClass}" src="${mediaItem.thumbSrc}" alt="${mediaItem.alt}" loading="lazy" decoding="async" fetchpriority="low" />
        </button>`;
    };

    let thumbHtml = `<div class="award-thumb award-thumb-placeholder" aria-hidden="true"></div>`;
    if (mediaItems.length === 1) {
      thumbHtml = buildThumbButton(mediaItems[0], 0, false);
    } else if (mediaItems.length > 1) {
      thumbHtml = `<div class="award-thumb-group" style="--thumb-cols:${mediaItems.length}">
          ${mediaItems.map((mediaItem, index) => buildThumbButton(mediaItem, index, true)).join("")}
        </div>`;
    }

    return `
      <li class="award-item">
        ${thumbHtml}
        <div class="award-body">
          <h3 class="award-title">${title}</h3>
          ${description ? `<p class="award-desc">${description}</p>` : ""}
        </div>
      </li>
    `;
  };

  const baseItems = sortedItems.filter((item) => isPinnedAward(item) || getAwardSortKey(item) >= COLLAPSE_AFTER_DATE);
  const baseHtml = baseItems.map((item) => renderAwardItem(item)).join("");
  const foldedHtml = collapsedItems.map((item) => renderAwardItem(item)).join("");
  const toggleHtml = hasCollapsible
    ? `<li class="award-toggle-item">
        <button
          class="awards-fold-toggle"
          type="button"
          data-action="toggle-awards-fold"
          data-expanded-label="${escapeHtml(expandedLabel)}"
          data-collapsed-label="${escapeHtml(collapsedLabel)}"
          aria-expanded="${awardsExpanded ? "true" : "false"}"
        >${escapeHtml(toggleLabel)}</button>
      </li>`
    : "";
  const foldedBlockHtml = hasCollapsible
    ? `<li class="award-fold-item">
        <ul class="awards-fold-list" data-role="awards-fold-list">${foldedHtml}</ul>
      </li>`
    : "";

  container.innerHTML = `${baseHtml}${foldedBlockHtml}${toggleHtml}`;

  const syncAwardsFoldState = (animate = false) => {
    const foldList = container.querySelector('[data-role="awards-fold-list"]');
    const toggleButton = container.querySelector('[data-action="toggle-awards-fold"]');
    if (!foldList || !toggleButton) return;

    const expandedLabel = toggleButton.getAttribute("data-expanded-label") || "";
    const collapsedLabel = toggleButton.getAttribute("data-collapsed-label") || "";
    toggleButton.textContent = awardsExpanded ? expandedLabel : collapsedLabel;
    toggleButton.setAttribute("aria-expanded", String(awardsExpanded));

    const targetHeight = foldList.scrollHeight;
    if (!animate) {
      foldList.style.transition = "none";
      foldList.style.maxHeight = awardsExpanded ? `${targetHeight}px` : "0px";
      foldList.style.opacity = awardsExpanded ? "1" : "0";
      foldList.style.transform = awardsExpanded ? "translateY(0)" : "translateY(-6px)";
      foldList.style.marginTop = awardsExpanded ? "8px" : "0px";
      void foldList.offsetHeight;
      foldList.style.transition = "";
      return;
    }

    if (awardsExpanded) {
      foldList.style.maxHeight = "0px";
      foldList.style.opacity = "0";
      foldList.style.transform = "translateY(-6px)";
      foldList.style.marginTop = "0px";
      window.requestAnimationFrame(() => {
        foldList.style.maxHeight = `${targetHeight}px`;
        foldList.style.opacity = "1";
        foldList.style.transform = "translateY(0)";
        foldList.style.marginTop = "8px";
      });
      return;
    }

    foldList.style.maxHeight = `${targetHeight}px`;
    foldList.style.opacity = "1";
    foldList.style.transform = "translateY(0)";
    foldList.style.marginTop = "8px";
    window.requestAnimationFrame(() => {
      foldList.style.maxHeight = "0px";
      foldList.style.opacity = "0";
      foldList.style.transform = "translateY(-6px)";
      foldList.style.marginTop = "0px";
    });
  };

  syncAwardsFoldState(false);

  if (!container.dataset.lightboxBound) {
    container.addEventListener("click", (event) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const toggleButton = target.closest('[data-action="toggle-awards-fold"]');
      if (toggleButton) {
        awardsExpanded = !awardsExpanded;
        syncAwardsFoldState(true);
        return;
      }

      const trigger = target.closest(".award-thumb-trigger");
      if (!trigger) return;
      const fullSrc = trigger.getAttribute("data-fullsrc");
      const fullAlt = trigger.getAttribute("data-alt") || "Award image";
      if (!fullSrc) return;
      openImageLightbox(fullSrc, fullAlt);
    });
    container.dataset.lightboxBound = "true";
  }
}

function syncExpandedAwardsHeight() {
  const foldList = document.querySelector('#awards-list [data-role="awards-fold-list"]');
  if (!foldList || !awardsExpanded) return;
  foldList.style.maxHeight = `${foldList.scrollHeight}px`;
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
  const rawTitleName = String(data.profile.nameCn || "").trim();
  const titleName = rawTitleName.split(/[|｜]/)[0].trim() || rawTitleName;
  document.title = titleName ? `${titleName} | ${pageTitle}` : pageTitle;

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
const headerInner = document.querySelector(".site-header-inner");
const navToggle = document.getElementById("nav-toggle");
const siteNav = document.getElementById("site-nav");
const brandLink = document.querySelector(".brand");
const brandMusicToggle = document.getElementById("brand-music-toggle");
const brandMusicAudio = document.getElementById("brand-music-audio");
const langToggle = document.getElementById("lang-toggle");
const overflowMenu = document.getElementById("nav-overflow-menu");
const imageLightbox = document.getElementById("image-lightbox");
const lightboxClose = document.getElementById("lightbox-close");
const lightboxImage = document.getElementById("lightbox-image");
const CLOSED_ICON = "\u2630";
const OPEN_ICON = "\u2715";
const NAV_COLLAPSE_BUFFER = 24;
let navLayoutRafId = 0;
const navLinks = siteNav ? Array.from(siteNav.querySelectorAll('a[href^="#"]')) : [];
const navTargets = navLinks
  .map((link) => {
    const id = (link.getAttribute("href") || "").replace("#", "");
    return { link, section: id ? document.getElementById(id) : null };
  })
  .filter((item) => item.section);

function getBrandMusicToggleLabel(isPlaying) {
  if (currentLang === "zh") return isPlaying ? "暂停音乐" : "播放音乐";
  return isPlaying ? "Pause music" : "Play music";
}

function syncBrandMusicToggleState(isPlaying) {
  if (!brandMusicToggle) return;
  const avatarWrap = brandMusicToggle.closest(".brand-avatar-wrap");
  brandMusicToggle.classList.toggle("is-playing", isPlaying);
  if (avatarWrap) avatarWrap.classList.toggle("is-playing", isPlaying);
  brandMusicToggle.setAttribute("aria-pressed", String(isPlaying));
  const label = getBrandMusicToggleLabel(isPlaying);
  brandMusicToggle.setAttribute("aria-label", label);
  brandMusicToggle.setAttribute("title", label);
}

function initBrandMusicPlayer() {
  if (!brandMusicToggle || !brandMusicAudio) return;

  brandMusicAudio.volume = 0.75;
  syncBrandMusicToggleState(false);

  brandMusicToggle.addEventListener("click", async (event) => {
    event.preventDefault();
    event.stopPropagation();

    try {
      if (brandMusicAudio.paused || brandMusicAudio.ended) {
        await brandMusicAudio.play();
      } else {
        brandMusicAudio.pause();
      }
    } catch (error) {
      syncBrandMusicToggleState(false);
    }
  });

  brandMusicAudio.addEventListener("play", () => syncBrandMusicToggleState(true));
  brandMusicAudio.addEventListener("pause", () => syncBrandMusicToggleState(false));
  brandMusicAudio.addEventListener("ended", () => syncBrandMusicToggleState(false));
}

function closeMobileNav() {
  if (!header || !navToggle) return;
  header.classList.remove("nav-open");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.textContent = CLOSED_ICON;
}

function renderOverflowLinks(hiddenLinks) {
  if (!overflowMenu) return;
  overflowMenu.innerHTML = "";

  hiddenLinks.forEach((link) => {
    const clone = link.cloneNode(true);
    clone.removeAttribute("id");
    clone.classList.remove("active");
    clone.classList.remove("nav-overflow-hidden");
    overflowMenu.appendChild(clone);
  });
}

function syncResponsiveNavLayout() {
  if (!header || !headerInner || !navToggle || !siteNav || !navLinks.length) return;

  const wasOverflow = header.classList.contains("nav-overflow");
  const wasOpen = header.classList.contains("nav-open");

  navLinks.forEach((link) => link.classList.remove("nav-overflow-hidden"));
  header.classList.remove("nav-open");
  header.classList.remove("nav-overflow");
  navToggle.setAttribute("aria-expanded", "false");
  navToggle.textContent = CLOSED_ICON;
  if (overflowMenu) overflowMenu.innerHTML = "";

  const styles = getComputedStyle(headerInner);
  const gap = Number.parseFloat(styles.gap) || 0;
  const paddingLeft = Number.parseFloat(styles.paddingLeft) || 0;
  const paddingRight = Number.parseFloat(styles.paddingRight) || 0;
  const availableWidth = Math.floor(headerInner.clientWidth);

  const brandWidth = brandLink ? Math.ceil(brandLink.getBoundingClientRect().width) : 0;
  const langWidth = langToggle ? Math.ceil(langToggle.getBoundingClientRect().width) : 0;
  const navWidth = Math.ceil(siteNav.scrollWidth);
  const requiredWidth = brandWidth + navWidth + langWidth + paddingLeft + paddingRight + gap * 2 + NAV_COLLAPSE_BUFFER;

  if (requiredWidth <= availableWidth) {
    closeMobileNav();
    return;
  }

  const fallbackToggleWidth = 36;
  const toggleWidth = Math.max(fallbackToggleWidth, Math.ceil(navToggle.getBoundingClientRect().width));
  const maxNavWidth = Math.max(
    0,
    availableWidth - (brandWidth + langWidth + toggleWidth + paddingLeft + paddingRight + gap * 3 + NAV_COLLAPSE_BUFFER)
  );

  const hiddenLinks = [];
  for (let i = navLinks.length - 1; i >= 0; i -= 1) {
    if (Math.ceil(siteNav.scrollWidth) <= maxNavWidth) break;
    navLinks[i].classList.add("nav-overflow-hidden");
    hiddenLinks.unshift(navLinks[i]);
  }

  if (!hiddenLinks.length) {
    closeMobileNav();
    return;
  }

  header.classList.add("nav-overflow");
  renderOverflowLinks(hiddenLinks);

  if (wasOverflow && wasOpen) {
    header.classList.add("nav-open");
    navToggle.setAttribute("aria-expanded", "true");
    navToggle.textContent = OPEN_ICON;
  } else {
    closeMobileNav();
  }
}

function requestNavLayoutSync() {
  if (navLayoutRafId) window.cancelAnimationFrame(navLayoutRafId);
  navLayoutRafId = window.requestAnimationFrame(() => {
    navLayoutRafId = 0;
    syncResponsiveNavLayout();
    syncActiveNavOnScroll();
  });
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

  if (overflowMenu) {
    overflowMenu.querySelectorAll('a[href^="#"]').forEach((link) => {
      const targetId = (link.getAttribute("href") || "").replace("#", "");
      link.classList.toggle("active", targetId === id);
    });
  }
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

function isMobileTooltipMode() {
  return window.matchMedia("(max-width: 640px), (hover: none), (pointer: coarse)").matches;
}

let educationTipLayer = null;
let educationTipContent = null;
let activeEducationTip = null;
let educationTipPinned = false;
let educationTipHideTimer = 0;

function ensureEducationTipLayer() {
  if (educationTipLayer && educationTipContent) return;
  const layer = document.createElement("div");
  layer.className = "edu-tip-float";
  layer.setAttribute("aria-hidden", "true");
  layer.setAttribute("data-placement", "top");
  const content = document.createElement("div");
  content.className = "edu-tip-float-content";
  layer.appendChild(content);
  document.body.appendChild(layer);
  educationTipLayer = layer;
  educationTipContent = content;

  layer.addEventListener("mouseenter", () => {
    clearEducationTipHideTimer();
  });

  layer.addEventListener("mouseleave", () => {
    if (!educationTipPinned) scheduleEducationTipHide(150);
  });
}

function clearEducationTipHideTimer() {
  if (!educationTipHideTimer) return;
  window.clearTimeout(educationTipHideTimer);
  educationTipHideTimer = 0;
}

function setEducationTipAnchorState(anchor, open) {
  if (!(anchor instanceof HTMLElement)) return;
  anchor.classList.toggle("open", open);
  anchor.setAttribute("aria-expanded", String(open));
}

function positionEducationTipLayer(anchor) {
  if (!(anchor instanceof HTMLElement) || !educationTipLayer) return;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
  const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
  const padding = 8;
  const gap = 10;
  const anchorRect = anchor.getBoundingClientRect();
  const anchorCenterX = anchorRect.left + anchorRect.width / 2;

  const maxWidth = Math.min(360, viewportWidth - padding * 2);
  const minWidth = Math.min(220, maxWidth);
  educationTipLayer.style.width = `${Math.max(minWidth, maxWidth)}px`;
  educationTipLayer.style.setProperty("--edu-tip-left", `${padding}px`);
  educationTipLayer.style.setProperty("--edu-tip-top", `${padding}px`);
  educationTipLayer.style.setProperty("--edu-tip-arrow-left", "50%");
  educationTipLayer.setAttribute("data-placement", "top");

  const layerRect = educationTipLayer.getBoundingClientRect();
  const layerWidth = layerRect.width;
  const layerHeight = layerRect.height;
  const left = Math.max(padding, Math.min(anchorCenterX - layerWidth / 2, viewportWidth - padding - layerWidth));
  const spaceAbove = anchorRect.top - padding;
  const spaceBelow = viewportHeight - anchorRect.bottom - padding;
  const prefersBottom = spaceAbove < layerHeight + gap && spaceBelow > spaceAbove;
  const placement = prefersBottom ? "bottom" : "top";
  const idealTop = placement === "bottom" ? anchorRect.bottom + gap : anchorRect.top - layerHeight - gap;
  const top = Math.max(padding, Math.min(idealTop, viewportHeight - padding - layerHeight));
  const arrowLeft = Math.max(14, Math.min(layerWidth - 14, anchorCenterX - left));

  educationTipLayer.style.setProperty("--edu-tip-left", `${Math.round(left)}px`);
  educationTipLayer.style.setProperty("--edu-tip-top", `${Math.round(top)}px`);
  educationTipLayer.style.setProperty("--edu-tip-arrow-left", `${Math.round(arrowLeft)}px`);
  educationTipLayer.setAttribute("data-placement", placement);
}

function hideEducationTip(immediate = false) {
  clearEducationTipHideTimer();
  if (activeEducationTip) {
    setEducationTipAnchorState(activeEducationTip, false);
  }
  activeEducationTip = null;
  educationTipPinned = false;
  if (!educationTipLayer) return;
  educationTipLayer.classList.remove("open");
  educationTipLayer.setAttribute("aria-hidden", "true");
  educationTipLayer.removeAttribute("data-active-tip");
  if (immediate) {
    educationTipLayer.style.transition = "none";
    window.requestAnimationFrame(() => {
      if (!educationTipLayer) return;
      educationTipLayer.style.transition = "";
    });
  }
}

function scheduleEducationTipHide(delay = 120) {
  clearEducationTipHideTimer();
  educationTipHideTimer = window.setTimeout(() => {
    if (educationTipPinned) return;
    hideEducationTip();
  }, delay);
}

function showEducationTip(anchor, pinned = false) {
  if (!(anchor instanceof HTMLElement)) return;
  const wrap = anchor.closest(".edu-inline-tip-wrap");
  const source = wrap ? wrap.querySelector(".edu-inline-tip-content") : null;
  if (!(source instanceof HTMLElement)) return;

  ensureEducationTipLayer();
  if (!educationTipLayer || !educationTipContent) return;
  clearEducationTipHideTimer();

  if (activeEducationTip && activeEducationTip !== anchor) {
    setEducationTipAnchorState(activeEducationTip, false);
  }
  activeEducationTip = anchor;
  educationTipPinned = pinned;
  setEducationTipAnchorState(anchor, true);

  educationTipContent.innerHTML = source.innerHTML;
  educationTipLayer.setAttribute("data-active-tip", "true");
  educationTipLayer.classList.add("open");
  educationTipLayer.setAttribute("aria-hidden", "false");
  positionEducationTipLayer(anchor);
}

function setLanguage(lang) {
  const nextLang = DATASETS[lang] ? lang : "en";
  if (!DATASETS[nextLang]) return;

  currentLang = nextLang;
  currentData = DATASETS[nextLang];

  closeMobileNav();
  closeImageLightbox();
  applyUIText(currentData.ui || {});
  renderPage(currentData);
  requestNavLayoutSync();
  syncNavVisualState();
  hideEducationTip(true);
}

if (header && navToggle && siteNav) {
  navToggle.textContent = CLOSED_ICON;

  navToggle.addEventListener("click", () => {
    if (!header.classList.contains("nav-overflow")) return;
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

initBrandMusicPlayer();

if (overflowMenu) {
  overflowMenu.addEventListener("click", (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const targetId = (link.getAttribute("href") || "").replace("#", "");
    if (targetId) setActiveNavById(targetId);
    closeMobileNav();
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
  if (event.key !== "Escape") return;
  closeImageLightbox();
  closeMobileNav();
  hideEducationTip(true);
});

window.addEventListener("click", (event) => {
  if (!header || !header.classList.contains("nav-open")) return;
  const target = event.target;
  if (!(target instanceof Node)) return;
  const clickedToggle = navToggle ? navToggle.contains(target) : false;
  const clickedMenu = overflowMenu ? overflowMenu.contains(target) : false;
  if (!clickedToggle && !clickedMenu) closeMobileNav();
});

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof Element)) return;

  const disabledProjectLink = target.closest("a.project-link-disabled");
  if (disabledProjectLink) {
    event.preventDefault();
    return;
  }

  const tipAnchor = target.closest(".edu-inline-tip");
  if (tipAnchor) {
    event.preventDefault();
    const willClose = activeEducationTip === tipAnchor && educationTipPinned;
    if (willClose) {
      hideEducationTip();
    } else {
      showEducationTip(tipAnchor, true);
    }
    return;
  }

  if (educationTipLayer && educationTipLayer.contains(target)) {
    return;
  }

  hideEducationTip();
});

document.addEventListener("mouseover", (event) => {
  if (isMobileTooltipMode()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest(".edu-inline-tip");
  if (!anchor) return;

  const related = event.relatedTarget;
  if (related instanceof Node && anchor.contains(related)) return;
  showEducationTip(anchor, false);
});

document.addEventListener("mouseout", (event) => {
  if (isMobileTooltipMode()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest(".edu-inline-tip");
  if (!anchor) return;

  const related = event.relatedTarget;
  if (related instanceof Node) {
    if (anchor.contains(related)) return;
    if (educationTipLayer && educationTipLayer.contains(related)) return;
  }
  if (!educationTipPinned) scheduleEducationTipHide(140);
});

document.addEventListener("focusin", (event) => {
  if (isMobileTooltipMode()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest(".edu-inline-tip");
  if (!anchor) return;
  showEducationTip(anchor, false);
});

document.addEventListener("focusout", (event) => {
  if (isMobileTooltipMode()) return;
  const target = event.target;
  if (!(target instanceof Element)) return;
  const anchor = target.closest(".edu-inline-tip");
  if (!anchor) return;

  const related = event.relatedTarget;
  if (related instanceof Node && educationTipLayer && educationTipLayer.contains(related)) {
    return;
  }
  if (!educationTipPinned) scheduleEducationTipHide(140);
});

window.addEventListener(
  "scroll",
  () => {
    syncNavVisualState();
    hideEducationTip(true);
  },
  { passive: true }
);
window.addEventListener("resize", () => {
  requestNavLayoutSync();
  syncExpandedAwardsHeight();
  hideEducationTip(true);
});
window.addEventListener("load", () => {
  requestNavLayoutSync();
  syncExpandedAwardsHeight();
  syncNavVisualState();
  hideEducationTip(true);
});

if (document.fonts && document.fonts.ready) {
  document.fonts.ready.then(requestNavLayoutSync).catch(() => {});
}

if (currentData) {
  setLanguage(currentLang);
}
