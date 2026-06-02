/* DeskLab Store v0.4 premium behavior */

(function initV04Reveal() {
  const targets = document.querySelectorAll(".v04-reveal");

  if (!targets.length) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches) {
    targets.forEach(target => target.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("is-visible");
      observer.unobserve(entry.target);
    });
  }, { threshold: 0.16 });

  targets.forEach(target => observer.observe(target));
})();

(function initProductCardReveal() {
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const cards = document.querySelectorAll(".product-card");

  if (!cards.length) return;

  if (reduceMotion.matches) {
    cards.forEach(card => card.classList.add("is-visible"));
    return;
  }

  cards.forEach((card, index) => {
    window.setTimeout(() => {
      card.classList.add("is-visible");
    }, 120 + index * 90);
  });
})();

(function initLocalClickSignals() {
  const storageKey = "desklab_click_signals_v04";

  function readSignals() {
    try {
      return JSON.parse(localStorage.getItem(storageKey)) || {};
    } catch {
      return {};
    }
  }

  function writeSignal(key) {
    const data = readSignals();
    data[key] = (data[key] || 0) + 1;
    localStorage.setItem(storageKey, JSON.stringify(data));
  }

  document.addEventListener("click", event => {
    const details = event.target.closest("[data-details]");
    const request = event.target.closest("a.btn.primary");

    if (details) {
      writeSignal(`details:${details.dataset.details}`);
    }

    if (request && request.href.startsWith("mailto:")) {
      writeSignal("mailto_request");
    }
  });
})();
