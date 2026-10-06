// ===============================
// TEXTILE EXPLORER - SCRIPT.JS
// ===============================

// ---------- FABRIC DATABASE ----------
const fabrics = [
  {
    id: 1,
    name: "Cotton",
    category: "woven",
    icon: "🧵",
    gsm: "100–250",
    description: "Soft, breathable and comfortable natural fiber fabric.",
    uses: "Shirts, T-shirts, dresses, home textiles",
    properties: "Breathable, absorbent, comfortable"
  },
  {
    id: 2,
    name: "Denim",
    category: "woven",
    icon: "👖",
    gsm: "250–500",
    description: "Strong cotton twill fabric commonly used for jeans.",
    uses: "Jeans, jackets, bags",
    properties: "Strong, durable, abrasion resistant"
  },
  {
    id: 3,
    name: "Single Jersey",
    category: "knit",
    icon: "👕",
    gsm: "120–220",
    description: "Lightweight knitted fabric with good stretch.",
    uses: "T-shirts, tops, casual wear",
    properties: "Stretchable, soft, lightweight"
  },
  {
    id: 4,
    name: "Polyester",
    category: "synthetic",
    icon: "🧶",
    gsm: "80–300",
    description: "Synthetic fiber known for durability and easy care.",
    uses: "Sportswear, uniforms, garments",
    properties: "Durable, quick drying, wrinkle resistant"
  },
  {
    id: 5,
    name: "Twill",
    category: "woven",
    icon: "🧥",
    gsm: "180–350",
    description: "Woven fabric with a characteristic diagonal structure.",
    uses: "Pants, uniforms, jackets",
    properties: "Durable, strong, structured"
  },
  {
    id: 6,
    name: "Satin",
    category: "woven",
    icon: "✨",
    gsm: "80–180",
    description: "Smooth fabric with a shiny surface.",
    uses: "Dresses, lingerie, decorative textiles",
    properties: "Smooth, shiny, soft"
  },
  {
    id: 7,
    name: "Linen",
    category: "woven",
    icon: "🌿",
    gsm: "120–250",
    description: "Natural fiber fabric made from flax.",
    uses: "Shirts, trousers, summer clothing",
    properties: "Cool, breathable, natural"
  },
  {
    id: 8,
    name: "Viscose",
    category: "woven",
    icon: "🌱",
    gsm: "100–220",
    description: "Soft regenerated cellulose fiber with a silk-like feel.",
    uses: "Dresses, shirts, scarves",
    properties: "Soft, breathable, comfortable"
  },
  {
    id: 9,
    name: "Rib Knit",
    category: "knit",
    icon: "👚",
    gsm: "180–350",
    description: "Elastic knitted structure commonly used for cuffs and necks.",
    uses: "Cuffs, collars, fitted garments",
    properties: "Highly elastic, comfortable"
  },
  {
    id: 10,
    name: "Interlock",
    category: "knit",
    icon: "🧵",
    gsm: "180–300",
    description: "Double-knit fabric with a smooth appearance on both sides.",
    uses: "T-shirts, babywear, sportswear",
    properties: "Smooth, stable, soft"
  },
  {
    id: 11,
    name: "Pique",
    category: "knit",
    icon: "👔",
    gsm: "180–250",
    description: "Textured knitted fabric commonly used for polo shirts.",
    uses: "Polo shirts, casual wear",
    properties: "Textured, breathable, durable"
  },
  {
    id: 12,
    name: "Fleece",
    category: "knit",
    icon: "🧣",
    gsm: "200–400",
    description: "Warm knitted fabric with a soft brushed surface.",
    uses: "Sweatshirts, hoodies, winterwear",
    properties: "Warm, soft, insulating"
  }
];


// ---------- GLOBAL VARIABLES ----------
let currentFilter = "all";
let favoriteFabrics = JSON.parse(
  localStorage.getItem("textileFavorites") || "[]"
);


// ---------- ELEMENT HELPER ----------
function getElement(id) {
  return document.getElementById(id);
}


// ---------- TOAST ----------
function showToast(message) {
  const toast = getElement("toast");

  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}


// ---------- FAVORITES ----------
function updateFavoriteCount() {
  const count = getElement("favoriteCount");

  if (count) {
    count.textContent = favoriteFabrics.length;
  }
}


function toggleFavorite(id) {
  const index = favoriteFabrics.indexOf(id);

  if (index === -1) {
    favoriteFabrics.push(id);
    showToast("ফ্যাব্রিক Favorites-এ যোগ হয়েছে ❤️");
  } else {
    favoriteFabrics.splice(index, 1);
    showToast("Favorites থেকে সরানো হয়েছে");
  }

  localStorage.setItem(
    "textileFavorites",
    JSON.stringify(favoriteFabrics)
  );

  updateFavoriteCount();
  displayFabrics(getFilteredFabrics());
}


// ---------- FILTER ----------
function getFilteredFabrics() {
  if (currentFilter === "all") {
    return fabrics;
  }

  return fabrics.filter(
    fabric => fabric.category === currentFilter
  );
}


// ---------- DISPLAY FABRICS ----------
function displayFabrics(list) {
  const grid = getElement("fabricGrid");

  if (!grid) return;

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-state">
        <h3>কোনো Fabric পাওয়া যায়নি</h3>
        <p>অন্য Category অথবা Search ব্যবহার করুন।</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(fabric => {
    const isFavorite = favoriteFabrics.includes(fabric.id);

    return `
      <article class="fabric-card">

        <button
          class="favorite-btn"
          onclick="toggleFavorite(${fabric.id})"
          title="Favorite"
        >
          ${isFavorite ? "❤️" : "♡"}
        </button>

        <div class="fabric-icon">
          ${fabric.icon}
        </div>

        <div class="fabric-card-content">

          <span class="fabric-category">
            ${fabric.category.toUpperCase()}
          </span>

          <h3>${fabric.name}</h3>

          <p>${fabric.description}</p>

          <div class="fabric-info">
            <span>
              <strong>GSM:</strong> ${fabric.gsm}
            </span>
          </div>

          <button
            class="btn btn-primary fabric-details-btn"
            onclick="openFabricDetails(${fabric.id})"
          >
            View Details
          </button>

        </div>
      </article>
    `;
  }).join("");
}


// ---------- FABRIC DETAILS ----------
function openFabricDetails(id) {
  const fabric = fabrics.find(item => item.id === id);

  if (!fabric) return;

  let modal = getElement("fabricModal");

  if (!modal) {
    modal = document.createElement("div");
    modal.id = "fabricModal";
    modal.className = "modal";

    document.body.appendChild(modal);
  }

  modal.innerHTML = `
    <div class="modal-overlay" onclick="closeFabricModal()"></div>

    <div class="modal-content">

      <button
        class="modal-close"
        onclick="closeFabricModal()"
        aria-label="Close"
      >
        ×
      </button>

      <div class="modal-icon">
        ${fabric.icon}
      </div>

      <span class="fabric-category">
        ${fabric.category.toUpperCase()}
      </span>

      <h2>${fabric.name}</h2>

      <p>${fabric.description}</p>

      <div class="detail-list">

        <div>
          <strong>GSM Range</strong>
          <span>${fabric.gsm}</span>
        </div>

        <div>
          <strong>Common Uses</strong>
          <span>${fabric.uses}</span>
        </div>

        <div>
          <strong>Properties</strong>
          <span>${fabric.properties}</span>
        </div>

      </div>

    </div>
  `;

  modal.classList.add("active");
  document.body.style.overflow = "hidden";
}


function closeFabricModal() {
  const modal = getElement("fabricModal");

  if (modal) {
    modal.classList.remove("active");
  }

  document.body.style.overflow = "";
}


// ---------- CATEGORY FILTER ----------
document.querySelectorAll("[data-filter]").forEach(button => {

  button.addEventListener("click", () => {

    document.querySelectorAll("[data-filter]").forEach(btn => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    currentFilter = button.dataset.filter;

    displayFabrics(getFilteredFabrics());
  });

});


// ---------- VIEW ALL FABRICS ----------
const viewAllButton = getElement("viewAllFabrics");

if (viewAllButton) {
  viewAllButton.addEventListener("click", () => {

    currentFilter = "all";

    document.querySelectorAll("[data-filter]").forEach(btn => {
      btn.classList.remove("active");
    });

    const allButton = document.querySelector(
      '[data-filter="all"]'
    );

    if (allButton) {
      allButton.classList.add("active");
    }

    displayFabrics(fabrics);
  });
}


// ---------- MOBILE MENU ----------
const menuToggle = getElement("menuToggle");
const navMenu = getElement("navMenu");

if (menuToggle && navMenu) {

  menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    menuToggle.classList.toggle("active");
  });

  navMenu.querySelectorAll("a").forEach(link => {

    link.addEventListener("click", () => {
      navMenu.classList.remove("active");
      menuToggle.classList.remove("active");
    });

  });
}


// ---------- GSM CALCULATOR ----------
const gsmButton = getElement("calculateGSM");

if (gsmButton) {

  gsmButton.addEventListener("click", () => {

    const weight = parseFloat(
      getElement("gsmWeight")?.value
    );

    const length = parseFloat(
      getElement("gsmLength")?.value
    );

    const width = parseFloat(
      getElement("gsmWidth")?.value
    );

    const result = getElement("gsmResult");

    if (!result) return;

    if (
      isNaN(weight) ||
      isNaN(length) ||
      isNaN(width) ||
      length <= 0 ||
      width <= 0
    ) {
      result.innerHTML = "⚠️ সঠিক তথ্য দিন";
      return;
    }

    const gsm =
      (weight * 10000) /
      (length * width);

    result.innerHTML = `
      <strong>${gsm.toFixed(2)} GSM</strong>
    `;
  });
}


// ---------- SHRINKAGE CALCULATOR ----------
const shrinkageButton = getElement("calculateShrinkage");

if (shrinkageButton) {

  shrinkageButton.addEventListener("click", () => {

    const original = parseFloat(
      getElement("originalLength")?.value
    );

    const finalLength = parseFloat(
      getElement("finalLength")?.value
    );

    const result = getElement("shrinkageResult");

    if (!result) return;

    if (
      isNaN(original) ||
      isNaN(finalLength) ||
      original <= 0
    ) {
      result.innerHTML = "⚠️ সঠিক তথ্য দিন";
      return;
    }

    const shrinkage =
      ((original - finalLength) / original) * 100;

    result.innerHTML = `
      <strong>${shrinkage.toFixed(2)}%</strong>
      <span>Shrinkage</span>
    `;
  });
}


// ---------- FABRIC WEIGHT ----------
const fabricWeightButton =
  getElement("calculateFabricWeight");

if (fabricWeightButton) {

  fabricWeightButton.addEventListener("click", () => {

    const gsm = parseFloat(
      getElement("fabricGSM")?.value
    );

    const length = parseFloat(
      getElement("fabricLength")?.value
    );

    const width = parseFloat(
      getElement("fabricWidth")?.value
    );

    const result =
      getElement("fabricWeightResult");

    if (!result) return;

    if (
      isNaN(gsm) ||
      isNaN(length) ||
      isNaN(width) ||
      length <= 0 ||
      width <= 0
    ) {
      result.innerHTML = "⚠️ সঠিক তথ্য দিন";
      return;
    }

    const weightKg =
      (gsm * length * width) / 1000;

    result.innerHTML = `
      <strong>${weightKg.toFixed(2)} KG</strong>
      <span>Estimated Fabric Weight</span>
    `;
  });
}


// ---------- YARN COUNT ----------
const yarnButton =
  getElement("calculateYarnCount");

if (yarnButton) {

  yarnButton.addEventListener("click", () => {

    const type =
      getElement("yarnCountType")?.value;

    const value =
      parseFloat(getElement("yarnCountValue")?.value);

    const result =
      getElement("yarnCountResult");

    if (!result) return;

    if (
      isNaN(value) ||
      value <= 0
    ) {
      result.innerHTML = "⚠️ সঠিক Yarn Count দিন";
      return;
    }

    let ne;
    let nm;
    let tex;
    let denier;

    if (type === "Ne") {

      ne = value;
      nm = ne * 1.693;
      tex = 590.5 / ne;
      denier = tex * 9;

    } else if (type === "Nm") {

      nm = value;
      ne = nm / 1.693;
      tex = 1000 / nm;
      denier = tex * 9;

    } else if (type === "Tex") {

      tex = value;
      nm = 1000 / tex;
      ne = 590.5 / tex;
      denier = tex * 9;

    } else if (type === "Denier") {

      denier = value;
      tex = denier / 9;
      nm = 1000 / tex;
      ne = 590.5 / tex;

    }

    result.innerHTML = `
      <div class="yarn-results">

        <div>
          <strong>Ne</strong>
          <span>${ne.toFixed(2)}</span>
        </div>

        <div>
          <strong>Nm</strong>
          <span>${nm.toFixed(2)}</span>
        </div>

        <div>
          <strong>Tex</strong>
          <span>${tex.toFixed(2)}</span>
        </div>

        <div>
          <strong>Denier</strong>
          <span>${denier.toFixed(2)}</span>
        </div>

      </div>
    `;
  });
}


// ---------- EPI CALCULATOR ----------
const epiButton =
  getElement("calculateEPI");

if (epiButton) {

  epiButton.addEventListener("click", () => {

    const ends = parseFloat(
      getElement("totalEnds")?.value
    );

    const width = parseFloat(
      getElement("epiWidth")?.value
    );

    const result =
      getElement("epiResult");

    if (!result) return;

    if (
      isNaN(ends) ||
      isNaN(width) ||
      width <= 0
    ) {
      result.innerHTML = "⚠️ সঠিক তথ্য দিন";
      return;
    }

    const epi = ends / width;

    result.innerHTML = `
      <strong>${epi.toFixed(2)} EPI</strong>
    `;
  });
}


// ---------- PPI CALCULATOR ----------
const ppiButton =
  getElement("calculatePPI");

if (ppiButton) {

  ppiButton.addEventListener("click", () => {

    const picks = parseFloat(
      getElement("totalPicks")?.value
    );

    const length = parseFloat(
      getElement("ppiLength")?.value
    );

    const result =
      getElement("ppiResult");

    if (!result) return;

    if (
      isNaN(picks) ||
      isNaN(length) ||
      length <= 0
    ) {
      result.innerHTML = "⚠️ সঠিক তথ্য দিন";
      return;
    }

    const ppi = picks / length;

    result.innerHTML = `
      <strong>${ppi.toFixed(2)} PPI</strong>
    `;
  });
}


// ---------- GLOBAL SEARCH ----------
const searchInput =
  getElement("globalSearch");

const searchButton =
  getElement("searchBtn");

const searchResults =
  getElement("searchResults");


function performSearch() {

  if (!searchInput || !searchResults) return;

  const query =
    searchInput.value.trim().toLowerCase();

  if (!query) {
    searchResults.innerHTML = "";
    return;
  }

  const results = fabrics.filter(fabric =>
    fabric.name.toLowerCase().includes(query) ||
    fabric.category.toLowerCase().includes(query) ||
    fabric.description.toLowerCase().includes(query) ||
    fabric.uses.toLowerCase().includes(query)
  );

  if (!results.length) {

    searchResults.innerHTML = `
      <div class="search-empty">
        কোনো Fabric পাওয়া যায়নি।
      </div>
    `;

    return;
  }

  searchResults.innerHTML = results.map(fabric => `
    <button
      class="search-result-item"
      onclick="openFabricDetails(${fabric.id})"
    >
      <span>${fabric.icon}</span>
      <strong>${fabric.name}</strong>
      <small>${fabric.category}</small>
    </button>
  `).join("");
}


if (searchButton) {
  searchButton.addEventListener(
    "click",
    performSearch
  );
}


if (searchInput) {

  searchInput.addEventListener(
    "keydown",
    event => {

      if (event.key === "Enter") {
        performSearch();
      }

    }
  );

}


// ---------- THEME TOGGLE ----------
const themeToggle =
  getElement("themeToggle");

const savedTheme =
  localStorage.getItem("textileTheme");

if (savedTheme === "dark") {
  document.documentElement.dataset.theme = "dark";
}


function updateThemeIcon() {

  if (!themeToggle) return;

  const isDark =
    document.documentElement.dataset.theme === "dark";

  themeToggle.textContent =
    isDark ? "☀️" : "🌙";
}


if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    const isDark =
      document.documentElement.dataset.theme === "dark";

    if (isDark) {

      document.documentElement.dataset.theme = "";
      localStorage.setItem(
        "textileTheme",
        "light"
      );

    } else {

      document.documentElement.dataset.theme = "dark";
      localStorage.setItem(
        "textileTheme",
        "dark"
      );

    }

    updateThemeIcon();
  });

}


updateThemeIcon();


// ---------- FAVORITE BUTTON ----------
const favoriteButton =
  getElement("favoriteBtn");

if (favoriteButton) {

  favoriteButton.addEventListener("click", () => {

    if (!favoriteFabrics.length) {
      showToast("এখনও কোনো Favorite নেই ❤️");
      return;
    }

    const favoriteList =
      fabrics.filter(fabric =>
        favoriteFabrics.includes(fabric.id)
      );

    displayFabrics(favoriteList);

    showToast(
      `${favoriteList.length}টি Favorite Fabric দেখানো হচ্ছে`
    );
  });

}


// ---------- FAQ ----------
document.querySelectorAll(".faq-question").forEach(question => {

  question.addEventListener("click", () => {

    const item =
      question.parentElement;

    item.classList.toggle("active");

  });

});


// ---------- COMING SOON ----------
document.querySelectorAll(".coming-soon").forEach(button => {

  button.addEventListener("click", event => {

    event.preventDefault();

    showToast("এই Feature খুব শিগগিরই আসছে 🚀");

  });

});


// ---------- BACK TO TOP ----------
const backToTop =
  getElement("backToTop");

if (backToTop) {

  window.addEventListener("scroll", () => {

    if (window.scrollY > 500) {
      backToTop.classList.add("show");
    } else {
      backToTop.classList.remove("show");
    }

  });

  backToTop.addEventListener("click", () => {

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  });

}


// ---------- SMOOTH SCROLL ----------
document.querySelectorAll('a[href^="#"]').forEach(link => {

  link.addEventListener("click", event => {

    const targetId =
      link.getAttribute("href");

    if (
      !targetId ||
      targetId === "#"
    ) {
      return;
    }

    const target =
      document.querySelector(targetId);

    if (target) {

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });

    }

  });

});


// ---------- INITIAL LOAD ----------
displayFabrics(fabrics);
updateFavoriteCount();


// ---------- GLOBAL ESCAPE KEY ----------
document.addEventListener("keydown", event => {

  if (event.key === "Escape") {
    closeFabricModal();
  }

});

console.log(
  "Textile Explorer JavaScript Loaded Successfully ✅"
);
