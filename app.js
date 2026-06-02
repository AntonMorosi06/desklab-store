const STORE_CONFIG = {
  storeName: "DeskLab Store",
  contactEmail: "desklab@example.com",
  ownerName: "Anton",
  currency: "€"
};

const state = {
  products: [],
  query: "",
  category: "all"
};

const el = {
  grid: document.querySelector("#productGrid"),
  search: document.querySelector("#searchInput"),
  category: document.querySelector("#categorySelect"),
  reset: document.querySelector("#resetFilters"),
  dialog: document.querySelector("#productDialog"),
  dialogContent: document.querySelector("#dialogContent"),
  dialogClose: document.querySelector(".dialog-close"),
  navToggle: document.querySelector(".nav-toggle"),
  navLinks: document.querySelector("#navLinks"),
  generalMailLink: document.querySelector("#generalMailLink"),
  copyEmailBtn: document.querySelector("#copyEmailBtn"),
  copyStatus: document.querySelector("#copyStatus")
};

function formatPrice(value) {
  return new Intl.NumberFormat("it-IT", {
    style: "currency",
    currency: "EUR"
  }).format(value);
}

function mailtoForProduct(product) {
  const subject = encodeURIComponent(`Richiesta disponibilità — ${product.name}`);
  const body = encodeURIComponent(
`Ciao ${STORE_CONFIG.ownerName},

vorrei ricevere informazioni su questo prodotto:

Prodotto: ${product.name}
Codice: ${product.id}
Prezzo indicativo: ${formatPrice(product.price)}
Quantità desiderata: 1
Città di spedizione:
Note:

Prima del pagamento vorrei conferma di disponibilità, tempi stimati, prezzo finale e condizioni di reso.

Grazie.`
  );

  return `mailto:${STORE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
}

function generalMailto() {
  const subject = encodeURIComponent("Richiesta informazioni — DeskLab Store");
  const body = encodeURIComponent(
`Ciao,

vorrei ricevere informazioni sui prodotti DeskLab Store.

Prodotto/i di interesse:
Quantità:
Città di spedizione:
Domande:

Grazie.`
  );

  return `mailto:${STORE_CONFIG.contactEmail}?subject=${subject}&body=${body}`;
}

async function loadProducts() {
  try {
    const response = await fetch("products.json");
    if (!response.ok) throw new Error("Impossibile caricare products.json");
    state.products = await response.json();
    hydrateCategories();
    renderProducts();
  } catch (error) {
    el.grid.innerHTML = `
      <article class="product-card">
        <div class="product-body">
          <h3>Errore caricamento catalogo</h3>
          <p>${error.message}. Se stai aprendo il file direttamente dal Finder, avvialo con un server locale: python3 -m http.server 8000</p>
        </div>
      </article>
    `;
  }
}

function hydrateCategories() {
  const categories = [...new Set(state.products.map(product => product.category))].sort();
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    el.category.appendChild(option);
  }
}

function getFilteredProducts() {
  const q = state.query.trim().toLowerCase();

  return state.products.filter(product => {
    const matchesCategory = state.category === "all" || product.category === state.category;
    const haystack = [
      product.name,
      product.category,
      product.short,
      product.description,
      product.features.join(" ")
    ].join(" ").toLowerCase();

    return matchesCategory && (!q || haystack.includes(q));
  });
}

function renderProducts() {
  const products = getFilteredProducts();

  if (!products.length) {
    el.grid.innerHTML = `
      <article class="product-card">
        <div class="product-body">
          <h3>Nessun prodotto trovato</h3>
          <p>Prova a cambiare ricerca o categoria.</p>
          <button class="btn secondary" type="button" onclick="resetFilters()">Reset filtri</button>
        </div>
      </article>
    `;
    return;
  }

  el.grid.innerHTML = products.map(product => `
    <article class="product-card">
      <img src="${product.image}" alt="${product.name}" loading="lazy" />
      <div class="product-body">
        <div class="product-meta">
          <span class="product-pill product-category">${product.category}</span>
          <span class="product-pill product-risk">Rischio ${product.risk}</span>
        </div>
        <h3>${product.name}</h3>
        <p>${product.short}</p>
        <p><strong>Stato:</strong> ${product.status}</p>
        <div class="price-row">
          <span class="price">${formatPrice(product.price)}</span>
          <span class="compare">${formatPrice(product.compareAt)}</span>
        </div>
        <div class="product-actions">
          <button class="btn secondary" type="button" data-details="${product.id}">Dettagli</button>
          <a class="btn primary" href="${mailtoForProduct(product)}">Richiedi</a>
        </div>
      </div>
    </article>
  `).join("");

  document.querySelectorAll("[data-details]").forEach(button => {
    button.addEventListener("click", () => {
      const product = state.products.find(item => item.id === button.dataset.details);
      openProductDialog(product);
    });
  });
}

function openProductDialog(product) {
  if (!product) return;

  el.dialogContent.innerHTML = `
    <div class="dialog-content">
      <img src="${product.image}" alt="${product.name}" />
      <p class="eyebrow">${product.category}</p>
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <ul>
        ${product.features.map(feature => `<li>${feature}</li>`).join("")}
      </ul>
      <p><strong>Prezzo indicativo:</strong> ${formatPrice(product.price)}</p>
      <p><strong>Costo fornitore target:</strong> ${product.supplierCostTarget}</p>
      <p><strong>Obiettivo margine:</strong> ${product.marginGoal}</p>
      <p><strong>Tempi stimati:</strong> ${product.shippingEstimate}</p>
      <p><strong>Nota:</strong> pagamento solo dopo conferma disponibilità e condizioni finali.</p>
      <a class="btn primary" href="${mailtoForProduct(product)}">Richiedi disponibilità</a>
    </div>
  `;

  if (typeof el.dialog.showModal === "function") {
    el.dialog.showModal();
  } else {
    alert(`${product.name}\n\n${product.description}`);
  }
}

function resetFilters() {
  state.query = "";
  state.category = "all";
  el.search.value = "";
  el.category.value = "all";
  renderProducts();
}

el.search.addEventListener("input", event => {
  state.query = event.target.value;
  renderProducts();
});

el.category.addEventListener("change", event => {
  state.category = event.target.value;
  renderProducts();
});

el.reset.addEventListener("click", resetFilters);

el.dialogClose.addEventListener("click", () => el.dialog.close());

el.dialog.addEventListener("click", event => {
  const dialogBox = el.dialog.querySelector(".dialog-content");
  if (!dialogBox) return;
  const rect = dialogBox.getBoundingClientRect();
  const clickedOutside =
    event.clientX < rect.left ||
    event.clientX > rect.right ||
    event.clientY < rect.top ||
    event.clientY > rect.bottom;

  if (clickedOutside) el.dialog.close();
});

el.navToggle.addEventListener("click", () => {
  const open = el.navLinks.classList.toggle("is-open");
  el.navToggle.setAttribute("aria-expanded", String(open));
});

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    el.navLinks.classList.remove("is-open");
    el.navToggle.setAttribute("aria-expanded", "false");
  });
});

el.generalMailLink.href = generalMailto();

el.copyEmailBtn.addEventListener("click", async () => {
  try {
    await navigator.clipboard.writeText(STORE_CONFIG.contactEmail);
    el.copyStatus.textContent = `Email copiata: ${STORE_CONFIG.contactEmail}`;
  } catch {
    el.copyStatus.textContent = `Email: ${STORE_CONFIG.contactEmail}`;
  }
});

loadProducts();

/* =========================================================
   DeskLab Store — Premium Loading Controller
   Smooth startup animation before entering the website
   ========================================================= */

(function initPremiumLoader() {
  const body = document.body;
  const loader = document.getElementById("siteLoader");
  const status = document.getElementById("loaderStatus");

  if (!loader) {
    body.classList.add("is-ready");
    return;
  }

  const loadingTexts = [
    "Preparing workspace essentials",
    "Selecting minimal products",
    "Checking catalog structure",
    "Loading DeskLab Store"
  ];

  let textIndex = 0;

  body.classList.add("is-loading");

  const textTimer = window.setInterval(() => {
    textIndex += 1;

    if (textIndex >= loadingTexts.length) {
      window.clearInterval(textTimer);
      return;
    }

    if (status) {
      status.style.opacity = "0";
      status.style.transform = "translateY(6px)";

      window.setTimeout(() => {
        status.textContent = loadingTexts[textIndex];
        status.style.opacity = "1";
        status.style.transform = "translateY(0)";
      }, 180);
    }
  }, 460);

  const minimumLoadingTime = 1900;
  const maximumLoadingTime = 2600;

  const finishLoading = () => {
    window.clearInterval(textTimer);

    if (status) {
      status.textContent = "Ready";
    }

    window.setTimeout(() => {
      loader.classList.add("is-hidden");
      body.classList.remove("is-loading");
      body.classList.add("is-ready");
    }, 320);

    window.setTimeout(() => {
      loader.remove();
    }, 1300);
  };

  const startTime = performance.now();

  window.addEventListener("load", () => {
    const elapsed = performance.now() - startTime;
    const remaining = Math.max(minimumLoadingTime - elapsed, 0);

    window.setTimeout(finishLoading, remaining);
  });

  window.setTimeout(() => {
    if (!body.classList.contains("is-ready")) {
      finishLoading();
    }
  }, maximumLoadingTime);
})();

/* =========================================================
   DeskLab Store — Hero Panel Subtle Parallax
   Very light premium motion for the black hero card
   ========================================================= */

(function initHeroPanelParallax() {
  const hero = document.querySelector(".hero");
  const panel = document.querySelector(".hero-panel .panel-card");

  if (!hero || !panel) return;

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (reduceMotion.matches) return;

  let targetRotateX = 0;
  let targetRotateY = 0;
  let currentRotateX = 0;
  let currentRotateY = 0;
  let rafId = null;

  const animate = () => {
    currentRotateX += (targetRotateX - currentRotateX) * 0.08;
    currentRotateY += (targetRotateY - currentRotateY) * 0.08;

    panel.style.transform = `rotateX(${currentRotateX}deg) rotateY(${currentRotateY}deg)`;

    if (
      Math.abs(targetRotateX - currentRotateX) > 0.01 ||
      Math.abs(targetRotateY - currentRotateY) > 0.01
    ) {
      rafId = window.requestAnimationFrame(animate);
    } else {
      rafId = null;
    }
  };

  hero.addEventListener("mousemove", (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width;
    const y = (event.clientY - rect.top) / rect.height;

    targetRotateY = (x - 0.5) * 3.2;
    targetRotateX = (0.5 - y) * 3.2;

    if (!rafId) {
      rafId = window.requestAnimationFrame(animate);
    }
  });

  hero.addEventListener("mouseleave", () => {
    targetRotateX = 0;
    targetRotateY = 0;

    if (!rafId) {
      rafId = window.requestAnimationFrame(animate);
    }
  });
})();