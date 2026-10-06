/* ==========================================
   TEXTILE EXPLORER
   PROFESSIONAL JAVASCRIPT
========================================== */


/* ==========================================
   FABRIC DATABASE
========================================== */

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
    type: "Regenerated",
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


/* ==========================================
   ELEMENTS
========================================== */

const fabricGrid = document.getElementById("fabricGrid");
const filterButtons = document.querySelectorAll("[data-filter]");
const viewAllFabrics = document.getElementById("viewAllFabrics");


/* ==========================================
   FAVORITES
========================================== */

let favorites =
  JSON.parse(localStorage.getItem("textileFavorites")) || [];


function updateFavoriteCount() {

  const count = document.getElementById("favoriteCount");

  if (count) {
    count.textContent = favorites.length;
  }
}


function toggleFavorite(name) {

  if (favorites.includes(name)) {

    favorites =
      favorites.filter(item => item !== name);

    showToast(`${name} removed from favorites`);

  } else {

    favorites.push(name);

    showToast(`${name} added to favorites`);

  }

  localStorage.setItem(
    "textileFavorites",
    JSON.stringify(favorites)
  );

  updateFavoriteCount();

  displayFabrics(
    document.querySelector(".filter-btn.active")?.dataset.filter === "all"
      ? fabrics
      : getCurrentFilteredFabrics()
  );
}


function getCurrentFilteredFabrics() {

  const active =
    document.querySelector(".filter-btn.active");

  if (!active || active.dataset.filter === "all") {
    return fabrics;
  }

  return fabrics.filter(
    fabric => fabric.category === active.dataset.filter
  );
}


/* ==========================================
   DISPLAY FABRICS
========================================== */

function displayFabrics(list) {

  if (!fabricGrid) return;

  if (!list.length) {

    fabricGrid.innerHTML = `
      <div class="empty-state">
        <h3>No fabric found</h3>
        <p>Try another category or search.</p>
      </div>
    `;

    return;
  }


  fabricGrid.innerHTML = list.map((fabric, index) => {

    const isFavorite =
      favorites.includes(fabric.name);

    return `

      <article
        class="fabric-card"
        data-index="${index}"
      >

        <div class="fabric-card-top">

          <span class="fabric-type">
            ${fabric.type}
          </span>

          <span class="fabric-gsm">
            ${fabric.gsm}
          </span>

        </div>


        <h3>${fabric.name}</h3>

        <p class="fabric-bangla">
          ${fabric.bangla}
        </p>


        <div class="fabric-info">

          <span>
            <strong>Fiber:</strong>
            ${fabric.fiber}
          </span>

          <span>
            <strong>Construction:</strong>
            ${fabric.construction}
          </span>

        </div>


        <button
          type="button"
          class="fabric-details-btn"
        >
          View Details →
        </button>


        <button
          type="button"
          class="favorite-fabric"
          data-favorite="${fabric.name}"
          aria-label="Favorite"
          style="
            position:absolute;
            top:55px;
            right:20px;
            width:34px;
            height:34px;
            border:1px solid var(--border);
            border-radius:50%;
            background:var(--card);
            color:${isFavorite ? "var(--primary)" : "var(--muted)"};
            font-size:18px;
          "
        >
          ${isFavorite ? "♥" : "♡"}
        </button>

      </article>

    `;

  }).join("");


  fabricGrid
    .querySelectorAll(".fabric-card")
    .forEach(card => {

      const index =
        Number(card.dataset.index);

      card.addEventListener("click", event => {

        if (
          event.target.closest(".favorite-fabric")
        ) {
          return;
        }

        openFabricDetails(list[index]);

      });

    });


  fabricGrid
    .querySelectorAll(".favorite-fabric")
    .forEach(button => {

      button.addEventListener("click", event => {

        event.stopPropagation();

        toggleFavorite(
          button.dataset.favorite
        );

      });

    });

}


/* ==========================================
   FABRIC MODAL
========================================== */

function openFabricDetails(fabric) {

  const modal =
    document.createElement("div");

  modal.className =
    "fabric-modal";


  modal.innerHTML = `

    <div class="fabric-modal-overlay"></div>

    <div class="fabric-modal-content">

      <button
        type="button"
        class="modal-close"
      >
        ×
      </button>

      <span class="fabric-type">
        ${fabric.type}
      </span>

      <h2>${fabric.name}</h2>

      <p class="fabric-bangla">
        ${fabric.bangla}
      </p>


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


  const close =
    () => modal.remove();


  modal
    .querySelector(".modal-close")
    .addEventListener("click", close);


  modal
    .querySelector(".fabric-modal-overlay")
    .addEventListener("click", close);


  const escHandler = event => {

    if (event.key === "Escape") {

      close();

      document.removeEventListener(
        "keydown",
        escHandler
      );

    }

  };


  document.addEventListener(
    "keydown",
    escHandler
  );

}


/* ==========================================
   FABRIC FILTER
========================================== */

filterButtons.forEach(button => {

  button.addEventListener("click", () => {

    filterButtons.forEach(btn =>
      btn.classList.remove("active")
    );

    button.classList.add("active");

    const filter =
      button.dataset.filter;

    if (filter === "all") {

      displayFabrics(fabrics);

    } else {

      displayFabrics(
        fabrics.filter(
          fabric =>
            fabric.category === filter
        )
      );

    }

  });

});


if (viewAllFabrics) {

  viewAllFabrics.addEventListener(
    "click",
    () => {

      filterButtons.forEach(btn =>
        btn.classList.remove("active")
      );

      document
        .querySelector('[data-filter="all"]')
        ?.classList.add("active");

      displayFabrics(fabrics);

    }
  );

}


/* ==========================================
   MOBILE MENU
========================================== */

const menuToggle =
  document.getElementById("menuToggle");

const mainNav =
  document.getElementById("mainNav");


if (menuToggle && mainNav) {

  menuToggle.addEventListener(
    "click",
    () => {

      mainNav.classList.toggle("open");

    }
  );


  mainNav
    .querySelectorAll("a")
    .forEach(link => {

      link.addEventListener(
        "click",
        () => mainNav.classList.remove("open")
      );

    });

}


/* ==========================================
   GSM CALCULATOR
========================================== */

const gsmWeight =
  document.getElementById("gsmWeight");

const gsmLength =
  document.getElementById("gsmLength");

const gsmWidth =
  document.getElementById("gsmWidth");

const calculateGSM =
  document.getElementById("calculateGSM");

const gsmResult =
  document.getElementById("gsmResult");


if (calculateGSM) {

  calculateGSM.addEventListener(
    "click",
    () => {

      const weight =
        parseFloat(gsmWeight.value);

      const length =
        parseFloat(gsmLength.value);

      const width =
        parseFloat(gsmWidth.value);


      if (
        !Number.isFinite(weight) ||
        !Number.isFinite(length) ||
        !Number.isFinite(width) ||
        weight <= 0 ||
        length <= 0 ||
        width <= 0
      ) {

        gsmResult.textContent =
          "Please enter valid values.";

        return;

      }


      const gsm =
        (weight * 10000) /
        (length * width);


      gsmResult.innerHTML = `
        <strong>
          GSM = ${gsm.toFixed(2)} g/m²
        </strong>
      `;

    }
  );

}


/* ==========================================
   SHRINKAGE
========================================== */

const originalLength =
  document.getElementById("originalLength");

const finalLength =
  document.getElementById("finalLength");

const calculateShrinkage =
  document.getElementById("calculateShrinkage");

const shrinkageResult =
  document.getElementById("shrinkageResult");


if (calculateShrinkage) {

  calculateShrinkage.addEventListener(
    "click",
    () => {

      const original =
        parseFloat(originalLength.value);

      const finalValue =
        parseFloat(finalLength.value);


      if (
        !Number.isFinite(original) ||
        !Number.isFinite(finalValue) ||
        original <= 0 ||
        finalValue < 0
      ) {

        shrinkageResult.textContent =
          "Please enter valid values.";

        return;

      }


      const shrinkage =
        ((original - finalValue) /
        original) * 100;


      shrinkageResult.innerHTML = `
        <strong>
          Shrinkage = ${shrinkage.toFixed(2)}%
        </strong>
      `;

    }
  );

}


/* ==========================================
   FABRIC WEIGHT
========================================== */

const fabricGSM =
  document.getElementById("fabricGSM");

const fabricLength =
  document.getElementById("fabricLength");

const fabricWidth =
  document.getElementById("fabricWidth");

const calculateFabricWeight =
  document.getElementById("calculateFabricWeight");

const fabricWeightResult =
  document.getElementById("fabricWeightResult");


if (calculateFabricWeight) {

  calculateFabricWeight.addEventListener(
    "click",
    () => {

      const gsm =
        parseFloat(fabricGSM.value);

      const length =
        parseFloat(fabricLength.value);

      const width =
        parseFloat(fabricWidth.value);


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
        <strong>
          Fabric Weight = ${weightKg.toFixed(2)} kg
        </strong>
      `;

    }
  );

}


/* ==========================================
   YARN COUNT
========================================== */

const yarnCountValue =
  document.getElementById("yarnCountValue");

const yarnCountType =
  document.getElementById("yarnCountType");

const calculateYarnCount =
  document.getElementById("calculateYarnCount");

const yarnCountResult =
  document.getElementById("yarnCountResult");


if (calculateYarnCount) {

  calculateYarnCount.addEventListener(
    "click",
    () => {

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


      if (type === "ne") {

        ne = value;
        nm = ne * 1.693;
        tex = 590.5 / ne;
        denier = tex * 9;

      }


      else if (type === "nm") {

        nm = value;
        ne = nm / 1.693;
        tex = 1000 / nm;
        denier = tex * 9;

      }


      else if (type === "tex") {

        tex = value;
        nm = 1000 / tex;
        ne = 590.5 / tex;
        denier = tex * 9;

      }


      else if (type === "denier") {

        denier = value;
        tex = denier / 9;
        nm = 1000 / tex;
        ne = 590.5 / tex;

      }


      yarnCountResult.innerHTML = `

        <strong>Result</strong>

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

    }
  );

}


/* ==========================================
   EPI
========================================== */

const calculateEPI =
  document.getElementById("calculateEPI");


if (calculateEPI) {

  calculateEPI.addEventListener(
    "click",
    () => {

      const ends =
        parseFloat(
          document.getElementById("totalEnds").value
        );

      const width =
        parseFloat(
          document.getElementById("epiWidth").value
        );

      const result =
        document.getElementById("epiResult");


      if (
        !Number.isFinite(ends) ||
        !Number.isFinite(width) ||
        ends <= 0 ||
        width <= 0
      ) {

        result.textContent =
          "Please enter valid values.";

        return;

      }


      const epi =
        ends / width;


      result.innerHTML = `
        <strong>
          EPI = ${epi.toFixed(2)}
        </strong>
      `;

    }
  );

}


/* ==========================================
   PPI
========================================== */

const calculatePPI =
  document.getElementById("calculatePPI");


if (calculatePPI) {

  calculatePPI.addEventListener(
    "click",
    () => {

      const picks =
        parseFloat(
          document.getElementById("totalPicks").value
        );

      const length =
        parseFloat(
          document.getElementById("ppiLength").value
        );

      const result =
        document.getElementById("ppiResult");


      if (
        !Number.isFinite(picks) ||
        !Number.isFinite(length) ||
        picks <= 0 ||
        length <= 0
      ) {

        result.textContent =
          "Please enter valid values.";

        return;

      }


      const ppi =
        picks / length;


      result.innerHTML = `
        <strong>
          PPI = ${ppi.toFixed(2)}
        </strong>
      `;

    }
  );

}


/* ==========================================
   GLOBAL SEARCH
========================================== */

const globalSearch =
  document.getElementById("globalSearch");

const searchBtn =
  document.getElementById("searchBtn");

const searchResults =
  document.getElementById("searchResults");


function performSearch() {

  if (!globalSearch || !searchResults) return;


  const query =
    globalSearch.value
      .trim()
      .toLowerCase();


  if (!query) {

    searchResults.innerHTML = "";

    return;

  }


  const results =
    fabrics.filter(fabric => {

      const text = `

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


      return text.includes(query);

    });


  if (!results.length) {

    searchResults.innerHTML = `

      <div class="search-empty">

        <strong>No result found</strong>

        <p>
          Try Cotton, Denim, Jersey, GSM etc.
        </p>

      </div>

    `;

    return;

  }


  searchResults.innerHTML =
    results.map(fabric => `

      <button
        type="button"
        class="search-result-item"
        data-fabric="${fabric.name}"
      >

        <strong>
          ${fabric.name}
        </strong>

        <span>
          ${fabric.bangla} · ${fabric.type}
        </span>

      </button>

    `).join("");


  searchResults
    .querySelectorAll(".search-result-item")
    .forEach(item => {

      item.addEventListener(
        "click",
        () => {

          const fabric =
            fabrics.find(
              f =>
                f.name ===
                item.dataset.fabric
            );


          if (fabric) {

            openFabricDetails(fabric);

          }

        }
      );

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
    event => {

      if (event.key === "Enter") {

        performSearch();

      }

    }
  );

}


/* ==========================================
   THEME
========================================== */

const themeToggle =
  document.getElementById("themeToggle");


const savedTheme =
  localStorage.getItem("textileTheme");


if (savedTheme === "dark") {

  document.documentElement
    .setAttribute(
      "data-theme",
      "dark"
    );

  if (themeToggle) {
    themeToggle.textContent = "☀️";
  }

}


if (themeToggle) {

  themeToggle.addEventListener(
    "click",
    () => {

      const dark =
        document.documentElement
          .getAttribute("data-theme") === "dark";


      if (dark) {

        document.documentElement
          .removeAttribute("data-theme");

        localStorage.setItem(
          "textileTheme",
          "light"
        );

        themeToggle.textContent = "🌙";

      } else {

        document.documentElement
          .setAttribute(
            "data-theme",
            "dark"
          );

        localStorage.setItem(
          "textileTheme",
          "dark"
        );

        themeToggle.textContent = "☀️";

      }

    }
  );

}


/* ==========================================
   FAVORITE BUTTON
========================================== */

const favoriteBtn =
  document.getElementById("favoriteBtn");


if (favoriteBtn) {

  favoriteBtn.addEventListener(
    "click",
    () => {

      if (!favorites.length) {

        showToast(
          "No favorite fabric yet."
        );

        return;

      }


      const favoriteFabrics =
        fabrics.filter(
          fabric =>
            favorites.includes(
              fabric.name
            )
        );


      displayFabrics(favoriteFabrics);


      document
        .getElementById("fabrics")
        ?.scrollIntoView({
          behavior: "smooth"
        });


      showToast(
        `${favoriteFabrics.length} favorite fabric`
      );

    }
  );

}


/* ==========================================
   FAQ
========================================== */

document
  .querySelectorAll(".faq-question")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const item =
          button.parentElement;


        item.classList.toggle("open");


        const icon =
          button.querySelector("span");


        icon.textContent =
          item.classList.contains("open")
            ? "−"
            : "+";

      }
    );

  });


/* ==========================================
   COMING SOON
========================================== */

document
  .querySelectorAll(".coming-btn")
  .forEach(button => {

    button.addEventListener(
      "click",
      () => {

        showToast(
          `${button.dataset.feature} — Coming Soon`
        );

      }
    );

  });


/* ==========================================
   TOAST
========================================== */

const toast =
  document.getElementById("toast");


let toastTimer;


function showToast(message) {

  if (!toast) return;


  toast.textContent =
    message;


  toast.classList.add("show");


  clearTimeout(toastTimer);


  toastTimer =
    setTimeout(
      () => {
        toast.classList.remove("show");
      },
      2200
    );

}


/* ==========================================
   BACK TO TOP
========================================== */

const backToTop =
  document.getElementById("backToTop");


window.addEventListener(
  "scroll",
  () => {

    if (!backToTop) return;


    if (window.scrollY > 500) {

      backToTop.classList.add("show");

    } else {

      backToTop.classList.remove("show");

    }

  }
);


if (backToTop) {

  backToTop.addEventListener(
    "click",
    () => {

      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });

    }
  );

}


/* ==========================================
   SMOOTH ANCHOR
========================================== */

document
  .querySelectorAll('a[href^="#"]')
  .forEach(link => {

    link.addEventListener(
      "click",
      event => {

        const id =
          link.getAttribute("href");


        if (!id || id === "#") {
          return;
        }


        const target =
          document.querySelector(id);


        if (!target) return;


        event.preventDefault();


        target.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });

      }
    );

  });


/* ==========================================
   INITIAL LOAD
========================================== */

displayFabrics(fabrics);

updateFavoriteCount();


console.log(
  "Textile Explorer Professional Version loaded successfully."
);
