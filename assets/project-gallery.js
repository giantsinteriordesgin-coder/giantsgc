/*
 * PROJECT GALLERIES
 * -----------------
 * Add new image files inside:
 * /assets/images/projects/PROJECT-SLUG/
 *
 * Then add the filename to the matching list below.
 * Example: ["01.jpg", "02.jpg", "03.jpg", "04.jpg", "05.jpg"]
 */
const projectGalleries = {
  "agouza-rehabilitation-hospital": ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  "beit-al-watan-buildings": ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  "district-9-mall": ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  "indoor-pool-ventilation": ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  "private-apartment": ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  "private-villa-finishing": ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  "private-villas-landscape": ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  "sophya-compound": ["01.jpg", "02.jpg", "03.jpg", "04.jpg"],
  "site-mobilization-projects": ["01.jpg", "02.jpg", "03.jpg", "04.jpg"]
};

const galleryCopy = {
  en: {
    eyebrow: "PROJECT GALLERY",
    title: "A closer look at the work.",
    open: "Open image",
    close: "Close gallery",
    previous: "Previous image",
    next: "Next image",
    image: "Image"
  },
  ar: {
    eyebrow: "صور المشروع",
    title: "تفاصيل أكثر من داخل المشروع.",
    open: "فتح الصورة",
    close: "إغلاق معرض الصور",
    previous: "الصورة السابقة",
    next: "الصورة التالية",
    image: "صورة"
  }
};

const getLanguage = () => document.documentElement.lang === "ar" ? "ar" : "en";

function getProjectSlug() {
  const match = window.location.pathname.match(/\/projects\/([^/]+)/);
  return match ? match[1].replace(/\/index\.html$/, "") : null;
}

function buildGallery(slug, filenames) {
  const scopeSection = document.querySelector(".scope-section");
  const detailContent = document.querySelector(".detail-content");
  if (!scopeSection || !detailContent || document.querySelector(".project-gallery")) return;

  const projectTitle = document.querySelector(".detail-title h1")?.textContent.trim() || slug;
  const imagePaths = filenames.map((filename) =>
    `/assets/images/projects/${slug}/${filename}`
  );

  const section = document.createElement("section");
  section.className = "project-gallery";
  section.setAttribute("aria-labelledby", "project-gallery-title");
  section.innerHTML = `
    <div class="project-gallery-heading">
      <div>
        <span class="eyebrow project-gallery-eyebrow"></span>
        <h2 id="project-gallery-title" class="project-gallery-title"></h2>
      </div>
      <span class="project-gallery-count">${String(imagePaths.length).padStart(2, "0")} / IMAGES</span>
    </div>
    <div class="project-gallery-grid"></div>
  `;

  const grid = section.querySelector(".project-gallery-grid");
  imagePaths.forEach((src, index) => {
    const button = document.createElement("button");
    button.className = "project-gallery-item";
    button.type = "button";
    button.dataset.galleryIndex = String(index);
    button.style.setProperty("--gallery-delay", String(index));
    button.innerHTML = `
      <img src="${src}" alt="" loading="lazy" decoding="async">
      <span class="project-gallery-number">${String(index + 1).padStart(2, "0")}</span>
      <span class="project-gallery-open">↗</span>
    `;
    button.querySelector("img").addEventListener("error", () => button.remove());
    grid.append(button);
  });

  scopeSection.insertAdjacentElement("beforebegin", section);
  const lightbox = buildLightbox(imagePaths, projectTitle);

  grid.addEventListener("click", (event) => {
    const item = event.target.closest(".project-gallery-item");
    if (!item) return;
    lightbox.open(Number(item.dataset.galleryIndex));
  });

  const syncLanguage = () => {
    const lang = getLanguage();
    const copy = galleryCopy[lang];
    section.querySelector(".project-gallery-eyebrow").textContent = copy.eyebrow;
    section.querySelector(".project-gallery-title").textContent = copy.title;
    section.querySelector(".project-gallery-count").textContent =
      `${String(imagePaths.length).padStart(2, "0")} / ${lang === "ar" ? "صور" : "IMAGES"}`;
    section.querySelectorAll(".project-gallery-item").forEach((item, index) => {
      item.setAttribute("aria-label", `${copy.open} ${index + 1}`);
      const image = item.querySelector("img");
      image.alt = `${projectTitle} — ${copy.image} ${index + 1}`;
    });
    lightbox.syncLanguage();
  };

  syncLanguage();
  new MutationObserver(syncLanguage).observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["lang", "dir"]
  });

  if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        section.classList.add("is-visible");
        observer.disconnect();
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.08 });
    observer.observe(section);
  } else {
    section.classList.add("is-visible");
  }
}

function buildLightbox(images, projectTitle) {
  const overlay = document.createElement("div");
  overlay.className = "project-lightbox";
  overlay.setAttribute("role", "dialog");
  overlay.setAttribute("aria-modal", "true");
  overlay.setAttribute("aria-hidden", "true");
  overlay.innerHTML = `
    <div class="project-lightbox-topbar">
      <strong>${projectTitle}</strong>
      <button class="project-lightbox-close" type="button">×</button>
    </div>
    <button class="project-lightbox-nav project-lightbox-prev" type="button">←</button>
    <figure>
      <img src="" alt="">
      <figcaption></figcaption>
    </figure>
    <button class="project-lightbox-nav project-lightbox-next" type="button">→</button>
  `;
  document.body.append(overlay);

  const image = overlay.querySelector("figure img");
  const caption = overlay.querySelector("figcaption");
  const closeButton = overlay.querySelector(".project-lightbox-close");
  const previousButton = overlay.querySelector(".project-lightbox-prev");
  const nextButton = overlay.querySelector(".project-lightbox-next");
  let activeIndex = 0;
  let pointerStart = null;
  let previousOverflow = "";

  const show = (index) => {
    activeIndex = (index + images.length) % images.length;
    image.classList.remove("is-loaded");
    image.src = images[activeIndex];
    image.alt = `${projectTitle} — ${galleryCopy[getLanguage()].image} ${activeIndex + 1}`;
    caption.textContent =
      `${String(activeIndex + 1).padStart(2, "0")} / ${String(images.length).padStart(2, "0")}`;
  };

  image.addEventListener("load", () => image.classList.add("is-loaded"));

  const open = (index) => {
    previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    overlay.classList.add("is-open");
    overlay.setAttribute("aria-hidden", "false");
    show(index);
    window.setTimeout(() => closeButton.focus(), 120);
  };

  const close = () => {
    overlay.classList.remove("is-open");
    overlay.setAttribute("aria-hidden", "true");
    document.body.style.overflow = previousOverflow;
  };

  previousButton.addEventListener("click", () => show(activeIndex - 1));
  nextButton.addEventListener("click", () => show(activeIndex + 1));
  closeButton.addEventListener("click", close);
  overlay.addEventListener("click", (event) => {
    if (event.target === overlay) close();
  });

  overlay.addEventListener("pointerdown", (event) => {
    pointerStart = event.clientX;
  });
  overlay.addEventListener("pointerup", (event) => {
    if (pointerStart === null) return;
    const distance = event.clientX - pointerStart;
    if (Math.abs(distance) > 65) show(activeIndex + (distance < 0 ? 1 : -1));
    pointerStart = null;
  });

  document.addEventListener("keydown", (event) => {
    if (!overlay.classList.contains("is-open")) return;
    if (event.key === "Escape") close();
    if (event.key === "ArrowLeft") show(activeIndex - 1);
    if (event.key === "ArrowRight") show(activeIndex + 1);
  });

  const syncLanguage = () => {
    const copy = galleryCopy[getLanguage()];
    closeButton.setAttribute("aria-label", copy.close);
    previousButton.setAttribute("aria-label", copy.previous);
    nextButton.setAttribute("aria-label", copy.next);
    image.alt = `${projectTitle} — ${copy.image} ${activeIndex + 1}`;
  };

  return { open, syncLanguage };
}

let galleryInitializationAttempts = 0;

function initializeProjectGallery() {
  const slug = getProjectSlug();
  if (!slug || !projectGalleries[slug]) return;
  if (document.querySelector(".project-gallery")) return;

  const mount = document.querySelector(".scope-section");
  if (!mount) {
    galleryInitializationAttempts += 1;
    if (galleryInitializationAttempts < 240) {
      window.setTimeout(initializeProjectGallery, 50);
    }
    return;
  }
  buildGallery(slug, projectGalleries[slug]);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initializeProjectGallery, { once: true });
} else {
  initializeProjectGallery();
}

const appRoot = document.querySelector("#app");
if (appRoot) {
  new MutationObserver(initializeProjectGallery).observe(appRoot, {
    childList: true,
    subtree: true
  });
}
