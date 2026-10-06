// ================================
// TEXTILE EXPLORER - SCRIPT.JS
// ================================


// ================================
// FABRIC DATABASE
// ================================

const fabrics = [
  {
    name: "Cotton",
    bangla: "কটন",
    type: "Natural",
    category: "natural",
    gsm: "120–220 GSM",
    fiber: "Cotton",
    construction: "Woven / Knitted",
    process: "Spinning → Weaving/Knitting → Dyeing → Finishing",
    uses: "T-Shirt, Shirt, Trouser, Home Textile",
    advantages: "Comfortable, breathable, absorbent",
    disadvantages: "Wrinkles easily, may shrink"
  },
  {
    name: "Denim",
    bangla: "ডেনিম",
    type: "Woven",
    category: "woven",
    gsm: "250–450 GSM",
    fiber: "Cotton",
    construction: "3/1 Twill",
    process: "Spinning → Warping → Sizing → Weaving → Dyeing → Finishing",
    uses: "Jeans, Jacket, Skirt",
    advantages: "Strong, durable, stylish",
    disadvantages: "Heavy, less breathable"
  },
  {
    name: "Single Jersey",
    bangla: "সিঙ্গেল জার্সি",
    type: "Knitted",
    category: "knitted",
    gsm: "120–180 GSM",
    fiber: "Cotton / Polyester",
    construction: "Single Knit",
    process: "Knitting → Dyeing → Finishing",
    uses: "T-Shirt, Innerwear",
    advantages: "Soft, stretchable, comfortable",
    disadvantages: "Curling tendency, may lose shape"
  },
  {
    name: "Polyester",
    bangla: "পলিয়েস্টার",
    type: "Synthetic",
    category: "synthetic",
    gsm: "80–250 GSM",
    fiber: "Polyester",
    construction: "Woven / Knitted",
    process: "Polymerization → Spinning → Weaving/Knitting → Dyeing",
    uses: "Sportswear, Jacket, T-Shirt",
    advantages: "Strong, quick drying, wrinkle resistant",
    disadvantages: "Low moisture absorption"
  },
  {
    name: "Twill",
    bangla: "টুইল",
    type: "Woven",
    category: "woven",
    gsm: "180–350 GSM",
    fiber: "Cotton / Polyester",
    construction: "Twill Weave",
    process: "Warping → Sizing → Weaving → Dyeing → Finishing",
    uses: "Trouser, Uniform, Workwear",
    advantages: "Durable, good appearance",
    disadvantages: "Can be heavier"
  },
  {
    name: "Satin",
    bangla: "স্যাটিন",
    type: "Woven",
    category: "woven",
    gsm: "80–180 GSM",
    fiber: "Silk / Polyester",
    construction: "Satin Weave",
    process: "Warping → Weaving → Dyeing → Finishing",
    uses: "Dress, Lingerie, Decorative Textile",
    advantages: "Smooth, shiny, luxurious",
    disadvantages: "Can snag easily"
  },
  {
    name: "Linen",
    bangla: "লিনেন",
    type: "Natural",
    category: "natural",
    gsm: "120–250 GSM",
    fiber: "Flax",
    construction: "Plain Weave",
    process: "Flax Processing → Spinning → Weaving → Finishing",
    uses: "Shirt, Dress, Home Textile",
    advantages: "Breathable, cool, durable",
    disadvantages: "Wrinkles easily"
  },
  {
    name: "Viscose",
    bangla: "ভিসকস",
    type: "Synthetic/Regenerated",
    category: "synthetic",
    gsm: "100–220 GSM",
    fiber: "Regenerated Cellulose",
    construction: "Woven / Knitted",
    process: "Pulp → Dissolving → Spinning → Weaving/Knitting",
    uses: "Dress, Shirt, Scarf",
    advantages: "Soft, breathable, good drape",
    disadvantages: "Can weaken when wet"
  },
  {
    name: "Rib Knit",
    bangla: "রিব নিট",
    type: "Knitted",
    category: "knitted",
    gsm: "180–350 GSM",
    fiber: "Cotton / Polyester",
    construction: "1x1 / 2x2 Rib",
    process: "Knitting → Dyeing → Finishing",
    uses: "Cuff, Collar, Waistband",
    advantages: "Highly stretchable, comfortable",
    disadvantages: "May lose recovery"
  },
  {
    name: "Interlock",
    bangla: "ইন্টারলক",
    type: "Knitted",
    category: "knitted",
    gsm: "180–300 GSM",
    fiber: "Cotton / Polyester",
    construction: "Double Knit",
    process: "Knitting → Dyeing → Finishing",
    uses: "T-Shirt, Babywear, Sportswear",
    advantages: "Soft, stable, smooth",
    disadvantages: "Heavier than single jersey"
  },
  {
    name: "Pique",
    bangla: "পিকে",
    type: "Knitted",
    category: "knitted",
    gsm: "180–240 GSM",
    fiber: "Cotton / Polyester",
    construction: "Pique Knit",
    process: "Knitting → Dyeing → Finishing",
    uses: "Polo Shirt",
    advantages: "Breathable, textured appearance",
    disadvantages: "Can shrink if untreated"
  },
  {
    name: "Fleece",
    bangla: "ফ্লিস",
    type: "Knitted",
    category: "knitted",
    gsm: "220–400 GSM",
    fiber: "Polyester / Cotton",
    construction: "Brushed Knit",
    process: "Knitting → Dyeing → Brushing → Finishing",
    uses: "Hoodie, Sweatshirt, Winterwear",
    advantages: "Warm, soft, comfortable",
    disadvantages: "Can pill"
  }
];


// ================================
// FABRIC DISPLAY
// ================================

const fabricGrid = document.getElementById("fabricGrid");
const filterButtons = document.querySelectorAll("[data-filter]");
const viewAllFabrics = document.getElementById("viewAllFabrics");

function displayFabrics(list) {
  if (!fabricGrid) return;

  if (list.length === 0) {
    fabricGrid.innerHTML = `
      <div class="empty-state">
        <h3>No fabric found</h3>
        <p>Try another search or category.</p>
      </div>
    `;
    return;
  }

  fabricGrid.innerHTML = list.map((fabric, index) => `
    <article class="fabric-card" data-index="${index}">
      <div class="fabric-card-top">
        <span class="fabric-type">${fabric.type}</span>
        <span class="fabric-gsm">${fabric.gsm}</span>
      </div>

      <h3>${fabric.name}</h3>
      <p class="fabric-bangla">${fabric.bangla}</p>

      <div class="fabric-info">
        <span><strong>Fiber:</strong> ${fabric.fiber}</span>
        <span><strong>Construction:</strong> ${fabric.construction}</span>
      </div>

      <button type="button" class="fabric-details-btn">
        View Details →
      </button>
    </article>
  `).join("");

  const cards = fabricGrid.querySelectorAll(".fabric-card");

  cards.forEach((card) => {
    card.addEventListener("click", () => {
      const index = Number(card.dataset.index);
      openFabricDetails(list[index]);
    });
  });
}


// ================================
// FABRIC DETAILS MODAL
// ================================

function openFabricDetails(fabric) {
  const modal = document.createElement("div");

  modal.className = "fabric-modal";

  modal.innerHTML = `
    <div class="fabric-modal-overlay"></div>

    <div class="fabric-modal-content">
      <button type="button" class="modal-close" aria-label="Close">
        ×
      </button>

      <span class="fabric-type">${fabric.type}</span>

      <h2>${fabric.name}</h2>
      <p class="fabric-bangla">${fabric.bangla}</p>

      <div class="modal-grid">

        <div>
          <strong>GSM</strong>
          <p>${fabric.gsm}</p>
        </div>

        <div>
          <strong>Fiber</strong>
          <p>${fabric.fiber}</p>
        </div>

        <div>
          <strong>Construction</strong>
          <p>${fabric.construction}</p>
        </div>

        <div>
          <strong>Process</strong>
          <p>${fabric.process}</p>
        </div>

        <div>
          <strong>Uses</strong>
          <p>${fabric.uses}</p>
        </div>

        <div>
          <strong>Advantages</strong>
          <p>${fabric.advantages}</p>
        </div>

        <div>
          <strong>Disadvantages</strong>
          <p>${fabric.disadvantages}</p>
        </div>

      </div>
    </div>
  `;

  document.body.appendChild(modal);

  const closeButton = modal.querySelector(".modal-close");
  const overlay = modal.querySelector(".fabric-modal-overlay");

  function closeModal() {
    modal.remove();
  }

  closeButton.addEventListener("click", closeModal);
  overlay.addEventListener("click", closeModal);

  document.addEventListener("keydown", function escHandler(event) {
    if (event.key === "Escape") {
      closeModal();
      document.removeEventListener("keydown", escHandler);
    }
  });
}


// ================================
// FABRIC FILTERS
// ================================

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");

    const filter = button.dataset.filter;

    if (filter === "all") {
      displayFabrics(fabrics);
    } else {
      const filtered = fabrics.filter(
        fabric => fabric.category === filter
      );

      displayFabrics(filtered);
    }
  });
});

if (viewAllFabrics) {
  viewAllFabrics.addEventListener("click", () => {
    displayFabrics(fabrics);

    filterButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    const allButton = document.querySelector('[data-filter="all"]');

    if (allButton) {
      allButton.classList.add("active");
    }
  });
}


// ================================
// MOBILE MENU
// ================================

const menuToggle = document.querySelector(".menu-toggle");
const mainNav = document.querySelector(".main-nav");

if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
    menuToggle.classList.toggle("active");
  });

  mainNav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      mainNav.classList.remove("open");
      menuToggle.classList.remove("active");
    });
  });
}


// ================================
// GSM CALCULATOR
// Formula:
// GSM = Weight(g) × 10000 / Length(cm) × Width(cm)
// ================================

const gsmWeight = document.getElementById("gsmWeight");
const gsmLength = document.getElementById("gsmLength");
const gsmWidth = document.getElementById("gsmWidth");
const calculateGSM = document.getElementById("calculateGSM");
const gsmResult = document.getElementById("gsmResult");

if (calculateGSM) {
  calculateGSM.addEventListener("click", () => {

    const weight = parseFloat(gsmWeight.value);
    const length = parseFloat(gsmLength.value);
    const width = parseFloat(gsmWidth.value);

    if (
      !Number.isFinite(weight) ||
      !Number.isFinite(length) ||
      !Number.isFinite(width) ||
      weight <= 0 ||
      length <= 0 ||
      width <= 0
    ) {
      gsmResult.textContent = "Please enter valid values.";
      return;
    }

    const gsm = (weight * 10000) / (length * width);

    gsmResult.innerHTML = `
      <strong>GSM = ${gsm.toFixed(2)}</strong>
      <span> g/m²</span>
    `;
  });
}


// ================================
// SHRINKAGE CALCULATOR
// Formula:
// Shrinkage % = (Original - Final) / Original × 100
// ================================

const originalLength = document.getElementById("originalLength");
const finalLength = document.getElementById("finalLength");
const calculateShrinkage = document.getElementById("calculateShrinkage");
const shrinkageResult = document.getElementById("shrinkageResult");

if (calculateShrinkage) {
  calculateShrinkage.addEventListener("click", () => {

    const original = parseFloat(originalLength.value);
    const finalValue = parseFloat(finalLength.value);

    if (
      !Number.isFinite(original) ||
      !Number.isFinite(finalValue) ||
      original <= 0 ||
      finalValue < 0
    ) {
      shrinkageResult.textContent = "Please enter valid values.";
      return;
    }

    const shrinkage =
      ((original - finalValue) / original) * 100;

    shrinkageResult.innerHTML = `
      <strong>Shrinkage = ${shrinkage.toFixed(2)}%</strong>
    `;
  });
}


// ================================
// FABRIC WEIGHT CALCULATOR
// GSM × Length(m) × Width(m) / 1000 = kg
// ================================

const fabricGSM = document.getElementById("fabricGSM");
const fabricLength = document.getElementById("fabricLength");
const fabricWidth = document.getElementById("fabricWidth");
const calculateFabricWeight =
  document.getElementById("calculateFabricWeight");
const fabricWeightResult =
  document.getElementById("fabricWeightResult");

if (calculateFabricWeight) {
  calculateFabricWeight.addEventListener("click", () => {

    const gsm = parseFloat(fabricGSM.value);
    const length = parseFloat(fabricLength.value);
    const width = parseFloat(fabricWidth.value);

    if (
      !Number.isFinite(gsm) ||
      !Number.isFinite(length) ||
      !Number.isFinite(width) ||
      gsm <= 0 ||
      length <= 0 ||
      width <= 0
    ) {
      fabricWeightResult.textContent =
        "Please enter valid values.";
      return;
    }

    const weightKg =
      (gsm * length * width) / 1000;

    fabricWeightResult.innerHTML = `
      <strong>Fabric Weight = ${weightKg.toFixed(2)} kg</strong>
    `;
  });
}


// ================================
// YARN COUNT CALCULATOR
// ================================

const yarnCountValue =
  document.getElementById("yarnCountValue");

const yarnCountType =
  document.getElementById("yarnCountType");

const calculateYarnCount =
  document.getElementById("calculateYarnCount");

const yarnCountResult =
  document.getElementById("yarnCountResult");

if (calculateYarnCount) {

  calculateYarnCount.addEventListener("click", () => {

    const value =
      parseFloat(yarnCountValue.value);

    const type =
      yarnCountType.value;

    if (
      !Number.isFinite(value) ||
      value <= 0
    ) {
      yarnCountResult.textContent =
        "Please enter a valid value.";
      return;
    }

    let ne;
    let nm;
    let tex;
    let denier;

    // Ne → Nm, Tex, Denier
    if (type === "ne") {

      ne = value;

      nm = ne * 1.693;

      tex = 590.5 / ne;

      denier = tex * 9;
    }

    // Nm → Ne, Tex, Denier
    else if (type === "nm") {

      nm = value;

      ne = nm / 1.693;

      tex = 1000 / nm;

      denier = tex * 9;
    }

    // Tex → Ne, Nm, Denier
    else if (type === "tex") {

      tex = value;

      nm = 1000 / tex;

      ne = 590.5 / tex;

      denier = tex * 9;
    }

    // Denier → Ne, Nm, Tex
    else if (type === "denier") {

      denier = value;

      tex = denier / 9;

      nm = 1000 / tex;

      ne = 590.5 / tex;
    }

    yarnCountResult.innerHTML = `
      <strong>Result:</strong>

      <div class="result-line">
        Ne: ${ne.toFixed(2)}
      </div>

      <div class="result-line">
        Nm: ${nm.toFixed(2)}
      </div>

      <div class="result-line">
        Tex: ${tex.toFixed(2)}
      </div>

      <div class="result-line">
        Denier: ${denier.toFixed(2)}
      </div>
    `;
  });
}


// ================================
// GLOBAL SEARCH
// ================================

const globalSearch =
  document.getElementById("globalSearch");

const searchBtn =
  document.getElementById("searchBtn");

const searchResults =
  document.getElementById("searchResults");

function performSearch() {

  if (!globalSearch || !searchResults) return;

  const query =
    globalSearch.value.trim().toLowerCase();

  if (!query) {
    searchResults.innerHTML = "";
    return;
  }

  const results = fabrics.filter((fabric) => {

    const searchableText = `
      ${fabric.name}
      ${fabric.bangla}
      ${fabric.type}
      ${fabric.category}
      ${fabric.gsm}
      ${fabric.fiber}
      ${fabric.construction}
      ${fabric.process}
      ${fabric.uses}
      ${fabric.advantages}
      ${fabric.disadvantages}
    `.toLowerCase();

    return searchableText.includes(query);
  });

  if (results.length === 0) {

    searchResults.innerHTML = `
      <div class="search-empty">
        <strong>No result found</strong>
        <p>Try Cotton, Denim, Jersey, GSM etc.</p>
      </div>
    `;

    return;
  }

  searchResults.innerHTML = results.map((fabric) => `
    <button
      type="button"
      class="search-result-item"
      data-fabric="${fabric.name}"
    >
      <strong>${fabric.name}</strong>
      <span>${fabric.bangla} · ${fabric.type}</span>
    </button>
  `).join("");

  searchResults
    .querySelectorAll(".search-result-item")
    .forEach((item) => {

      item.addEventListener("click", () => {

        const fabricName =
          item.dataset.fabric;

        const fabric =
          fabrics.find(
            f => f.name === fabricName
          );

        if (fabric) {
          openFabricDetails(fabric);
        }
      });
    });
}

if (searchBtn) {
  searchBtn.addEventListener(
    "click",
    performSearch
  );
}

if (globalSearch) {

  globalSearch.addEventListener(
    "keydown",
    (event) => {

      if (event.key === "Enter") {
        performSearch();
      }
    }
  );

  globalSearch.addEventListener(
    "input",
    () => {

      if (
        globalSearch.value.trim().length >= 2
      ) {
        performSearch();
      } else if (searchResults) {
        searchResults.innerHTML = "";
      }
    }
  );
}


// ================================
// SMOOTH SCROLL
// ================================

document
  .querySelectorAll('a[href^="#"]')
  .forEach((link) => {

    link.addEventListener("click", (event) => {

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

      if (!target) return;

      event.preventDefault();

      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    });
  });


// ================================
// INITIAL LOAD
// ================================

displayFabrics(fabrics);

console.log(
  "Textile Explorer loaded successfully."
);
