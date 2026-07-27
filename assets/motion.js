const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
const root = document.documentElement;
const body = document.body;
const app = document.querySelector("#app");

const clamp = (value, min, max) => Math.min(Math.max(value, min), max);
const qsa = (selector, context = document) => [...context.querySelectorAll(selector)];

function addGlobalChrome() {
  const progress = document.createElement("div");
  progress.className = "ggc-scroll-progress";
  progress.setAttribute("aria-hidden", "true");
  progress.innerHTML = "<span></span>";

  const signature = document.createElement("div");
  signature.className = "ggc-side-signature";
  signature.setAttribute("aria-hidden", "true");
  signature.textContent = "Built with precision · Cairo";

  const wipe = document.createElement("div");
  wipe.className = "ggc-page-wipe";
  wipe.setAttribute("aria-hidden", "true");

  wipe.innerHTML = `
  <div class="ggc-wipe-brand">
    <img src="/assets/images/logo.png" alt="">
    <span>Giants General Contracting</span>
  </div>
`;

  body.append(progress, signature, wipe);

  if (!reduceMotion && finePointer) {
    const ring = document.createElement("div");
    const dot = document.createElement("div");
    ring.className = "ggc-cursor";
    dot.className = "ggc-cursor-dot";
    ring.setAttribute("aria-hidden", "true");
    dot.setAttribute("aria-hidden", "true");
    body.append(ring, dot);

    let mouseX = -100;
    let mouseY = -100;
    let ringX = -100;
    let ringY = -100;

    window.addEventListener("pointermove", (event) => {
      mouseX = event.clientX;
      mouseY = event.clientY;
      dot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    }, { passive: true });

    const renderCursor = () => {
      ringX += (mouseX - ringX) * 0.16;
      ringY += (mouseY - ringY) * 0.16;
      ring.style.transform = `translate3d(${ringX}px, ${ringY}px, 0)`;
      requestAnimationFrame(renderCursor);
    };
    requestAnimationFrame(renderCursor);

    document.addEventListener("pointerover", (event) => {
      if (event.target.closest("a, button")) body.classList.add("motion-link-hover");
    });
    document.addEventListener("pointerout", (event) => {
      if (event.target.closest("a, button")) body.classList.remove("motion-link-hover");
    });
  }
}

function playIntro() {
  if (reduceMotion || sessionStorage.getItem("ggc-intro-seen")) {
    requestAnimationFrame(() => body.classList.add("motion-play"));
    return;
  }

  const intro = document.createElement("div");
  intro.className = "ggc-intro";
  intro.setAttribute("aria-hidden", "true");
 intro.innerHTML = `
  <div class="ggc-intro-mark">
    <img
      class="ggc-intro-logo"
      src="/assets/images/logo.png"
      alt="Giants General Contracting"
    >
    <small>Giants General Contracting</small>
  </div>
`;
  body.prepend(intro);
  sessionStorage.setItem("ggc-intro-seen", "true");

  window.setTimeout(() => {
    intro.classList.add("is-finished");
    body.classList.add("motion-play");
  }, 1250);
  window.setTimeout(() => intro.remove(), 2200);
}

function addMarquee() {
  if (document.querySelector(".ggc-marquee")) return;
  const anchor = document.querySelector(".hero-section, .portfolio-hero, .detail-hero");
  if (!anchor) return;

  const marquee = document.createElement("div");
  marquee.className = "ggc-marquee";
  marquee.setAttribute("aria-hidden", "true");
  const phrase = [
    "Landscape",
    "Irrigation",
    "Maintenance",
    "Construction",
    "Hardscape",
  ];
  const repeated = [...phrase, ...phrase, ...phrase, ...phrase]
    .map((item) => `<span>${item}</span>`)
    .join("");
  marquee.innerHTML = `<div class="ggc-marquee-track">${repeated}</div>`;
  anchor.insertAdjacentElement("afterend", marquee);
}

function prepareHero() {
  const heroItems = [
    ".hero-copy .eyebrow",
    ".hero-copy h1 > *",
    ".hero-copy > p",
    ".hero-actions > *",
    ".hero-feature",
    ".hero-rail > *",
    ".portfolio-hero-copy > *",
    ".detail-title > *"
  ];

  let order = 0;
  heroItems.forEach((selector) => {
    qsa(selector).forEach((element) => {
      if (element.classList.contains("motion-hero-item")) return;
      element.classList.add("motion-hero-item");
      element.style.setProperty("--motion-order", String(order));
      order += element.closest(".hero-rail") ? 0.28 : 1;
    });
  });
}

const revealObserver = reduceMotion ? null : new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add("is-visible");
    revealObserver.unobserve(entry.target);
  });
}, {
  rootMargin: "0px 0px -9% 0px",
  threshold: 0.08
});

function addReveal(selector, kind = "up") {
  qsa(selector).forEach((element, index) => {
    if (element.dataset.motionPrepared) return;
    element.dataset.motionPrepared = "true";
    element.dataset.motionKind = kind;
    element.classList.add("motion-reveal");
    element.style.setProperty("--motion-delay", String(index % 6));
    if (reduceMotion) element.classList.add("is-visible");
    else revealObserver.observe(element);
  });
}

function prepareReveals() {
  addReveal(".section-heading > *, .about-copy > *, .contact-copy > *, .detail-overview > *", "left");
  addReveal(".project-card, .service-card, .process-panel, .contact-actions a, .filter-row, .project-facts > *, .scope-list > div, .site-footer > *");
  addReveal(".portfolio-hero-image", "scale");

  const indexedSections = qsa(
    ".projects-preview, .about-section, .services-section, .contact-section, .portfolio-list, .detail-content, .scope-section"
  );
  indexedSections.forEach((section, index) => {
    section.dataset.motionIndex = String(index + 1).padStart(2, "0");
  });
}

function prepareTilt() {
  if (!finePointer || reduceMotion) return;
  qsa(".project-card").forEach((card) => {
    if (card.dataset.tiltPrepared) return;
    card.dataset.tiltPrepared = "true";
    card.classList.add("motion-tilt");

    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const x = (event.clientX - bounds.left) / bounds.width;
      const y = (event.clientY - bounds.top) / bounds.height;
      card.style.setProperty("--tilt-x", `${(0.5 - y) * 6}deg`);
      card.style.setProperty("--tilt-y", `${(x - 0.5) * 7}deg`);
      card.style.setProperty("--card-x", `${x * 100}%`);
      card.style.setProperty("--card-y", `${y * 100}%`);
    }, { passive: true });

    card.addEventListener("pointerleave", () => {
      card.style.setProperty("--tilt-x", "0deg");
      card.style.setProperty("--tilt-y", "0deg");
      card.style.setProperty("--card-x", "50%");
      card.style.setProperty("--card-y", "50%");
    });
  });
}

function prepareMagnetic() {
  if (!finePointer || reduceMotion) return;
  qsa(".button, .header-cta, .lang-button, .project-link-arrow, .service-card > a").forEach((element) => {
    if (element.dataset.magneticPrepared) return;
    element.dataset.magneticPrepared = "true";
    element.classList.add("motion-magnetic");

    element.addEventListener("pointermove", (event) => {
      const bounds = element.getBoundingClientRect();
      const x = event.clientX - (bounds.left + bounds.width / 2);
      const y = event.clientY - (bounds.top + bounds.height / 2);
      element.style.setProperty("--magnetic-x", `${clamp(x * 0.22, -12, 12)}px`);
      element.style.setProperty("--magnetic-y", `${clamp(y * 0.22, -10, 10)}px`);
    }, { passive: true });

    element.addEventListener("pointerleave", () => {
      element.style.setProperty("--magnetic-x", "0px");
      element.style.setProperty("--magnetic-y", "0px");
    });
  });
}

function prepareDynamicContent() {
  prepareReveals();
  prepareTilt();
  prepareMagnetic();
}

function setupScrollMotion() {
  const hero = document.querySelector(".hero-section");
  const portfolioHero = document.querySelector(".portfolio-hero");
  const detailHero = document.querySelector(".detail-hero");
  const header = document.querySelector(".site-header");
  let ticking = false;

  const render = () => {
    const y = window.scrollY;
    const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
    root.style.setProperty("--scroll-ratio", String(clamp(y / max, 0, 1)));
    header?.classList.toggle("motion-scrolled", y > 22);

    if (!reduceMotion) {
      if (hero) hero.style.setProperty("--hero-parallax", `${Math.min(y * 0.16, 90)}px`);
      if (portfolioHero) portfolioHero.style.setProperty("--portfolio-parallax", `${Math.min(y * 0.1, 58)}px`);
      if (detailHero) detailHero.style.setProperty("--detail-parallax", `${Math.min(y * 0.12, 78)}px`);
    }
    ticking = false;
  };

  window.addEventListener("scroll", () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(render);
  }, { passive: true });
  render();

  if (hero && finePointer && !reduceMotion) {
    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = clamp((event.clientX - bounds.left) / bounds.width * 2 - 1, -1, 1);
      const yPosition = clamp((event.clientY - bounds.top) / bounds.height * 2 - 1, -1, 1);
      hero.style.setProperty("--hero-pointer-x", x.toFixed(3));
      hero.style.setProperty("--hero-pointer-y", yPosition.toFixed(3));
    }, { passive: true });
    hero.addEventListener("pointerleave", () => {
      hero.style.setProperty("--hero-pointer-x", "0");
      hero.style.setProperty("--hero-pointer-y", "0");
    });
  }
}

function setupPageTransitions() {
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[href]");
    if (!link || event.defaultPrevented || event.button !== 0) return;
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if (link.target === "_blank" || link.hasAttribute("download")) return;

    const href = link.getAttribute("href");
    if (!href || href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:")) return;

    const url = new URL(link.href, window.location.href);
    if (url.origin !== window.location.origin) return;
    if (url.pathname === window.location.pathname && url.hash) return;

    event.preventDefault();
    body.classList.add("motion-leaving");
    window.setTimeout(() => {
      window.location.href = url.href;
    }, reduceMotion ? 0 : 560);
  });
}

function init() {
  if (!app?.querySelector("main")) {
    requestAnimationFrame(init);
    return;
  }

  body.classList.add("motion-mounted");
  addGlobalChrome();
  addMarquee();
  prepareHero();
  prepareDynamicContent();
  setupScrollMotion();
  setupPageTransitions();
  playIntro();

  let refreshQueued = false;
  const observer = new MutationObserver(() => {
    if (refreshQueued) return;
    refreshQueued = true;
    requestAnimationFrame(() => {
      prepareDynamicContent();
      refreshQueued = false;
    });
  });
  observer.observe(app, { childList: true, subtree: true });
}

init();
