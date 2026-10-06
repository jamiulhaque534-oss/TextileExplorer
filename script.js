/* =========================================================
   TEXTILE EXPLORER — PROFESSIONAL JAVASCRIPT
========================================================= */


/* =========================================================
   FABRIC DATABASE
========================================================= */

const fabrics = [

    {
        name: "Cotton",
        type: "Natural",
        group: "natural",
        gsm: "120–220 GSM",
        fiber: "Cotton",
        construction: "Woven / Knitted",
        use: "T-Shirts, Shirts, Home Textile",
        description:
            "A versatile natural fiber fabric known for comfort, breathability and moisture absorption."
    },

    {
        name: "Denim",
        type: "Woven",
        group: "denim",
        gsm: "250–450 GSM",
        fiber: "Cotton",
        construction: "3/1 Twill",
        use: "Jeans, Jackets, Workwear",
        description:
            "A strong cotton-based twill fabric widely used for jeans and durable garments."
    },

    {
        name: "Single Jersey",
        type: "Knitted",
        group: "knitted",
        gsm: "120–220 GSM",
        fiber: "Cotton / Polyester",
        construction: "Weft Knit",
        use: "T-Shirts, Casual Wear",
        description:
            "A lightweight knitted fabric with good stretch and comfortable hand feel."
    },

    {
        name: "Polyester",
        type: "Synthetic",
        group: "synthetic",
        gsm: "80–250 GSM",
        fiber: "Polyester",
        construction: "Woven / Knitted",
        use: "Sportswear, Fashion, Technical Textile",
        description:
            "A durable synthetic fiber with good strength, dimensional stability and quick drying."
    },

    {
        name: "Twill",
        type: "Woven",
        group: "woven",
        gsm: "180–350 GSM",
        fiber: "Cotton / Polyester",
        construction: "Twill",
        use: "Uniform, Trousers, Workwear",
        description:
            "A durable woven structure recognized by its diagonal surface appearance."
    },

    {
        name: "Satin",
        type: "Woven",
        group: "woven",
        gsm: "70–180 GSM",
        fiber: "Polyester / Silk",
        construction: "Satin",
        use: "Fashion, Dresses, Lining",
        description:
            "A smooth fabric with a glossy surface and elegant appearance."
    },

    {
        name: "Linen",
        type: "Natural",
        group: "natural",
        gsm: "120–250 GSM",
        fiber: "Flax",
        construction: "Plain Weave",
        use: "Shirts, Dresses, Home Textile",
        description:
            "A natural fiber fabric valued for breathability, durability and cool comfort."
    },

    {
        name: "Viscose",
        type: "Synthetic",
        group: "synthetic",
        gsm: "90–220 GSM",
        fiber: "Regenerated Cellulose",
        construction: "Woven / Knitted",
        use: "Dresses, Shirts, Fashion",
        description:
            "A soft regenerated-cellulose fiber known for excellent drape and smooth handle."
    },

    {
        name: "Rib Knit",
        type: "Knitted",
        group: "knitted",
        gsm: "180–350 GSM",
        fiber: "Cotton / Polyester",
        construction: "Rib Knit",
        use: "Collars, Cuffs, Waistbands",
        description:
            "A highly elastic knitted structure commonly used for garment trims."
    },

    {
        name: "Interlock",
        type: "Knitted",
        group: "knitted",
        gsm: "180–300 GSM",
        fiber: "Cotton / Polyester",
        construction: "Double Knit",
        use: "Premium T-Shirts, Babywear",
        description:
            "A stable double-knit fabric with a smooth surface on both sides."
    },

    {
        name: "Pique",
        type: "Knitted",
        group: "knitted",
        gsm: "180–260 GSM",
        fiber: "Cotton / Polyester",
        construction: "Pique Knit",
        use: "Polo Shirts",
        description:
            "A textured knitted fabric widely used for polo shirts."
    },

    {
        name: "Fleece",
        type: "Knitted",
        group: "knitted",
        gsm: "240–400 GSM",
        fiber: "Cotton / Polyester",
        construction: "Knitted",
        use: "Hoodies, Sweatshirts, Winterwear",
        description:
            "A warm knitted fabric with a soft brushed inner surface."
    }

];


/* =========================================================
   DOM ELEMENTS
========================================================= */

const fabricGrid =
    document.getElementById("fabricGrid");

const filterButtons =
    document.querySelectorAll(".filter-btn");

const menuBtn =
    document.getElementById("menuBtn");

const navbar =
    document.querySelector(".navbar");

const navLinks =
    document.querySelectorAll(".nav-link");

const globalSearch =
    document.getElementById("globalSearch");

const searchBtn =
    document.getElementById("searchBtn");

const searchResults =
    document.getElementById("searchResults");


/* =========================================================
   FABRIC CARD
========================================================= */

function createFabricCard(fabric) {

    const card =
        document.createElement("article");

    card.className = "fabric-card";

    card.dataset.group =
        fabric.group;

    card.innerHTML = `

        <div class="fabric-image">

            <span class="fabric-type">
                ${fabric.type}
            </span>

        </div>

        <div class="fabric-info">

            <h3>
                ${fabric.name}
            </h3>

            <p>
                ${fabric.description}
            </p>

            <div class="fabric-meta">

                <span>
                    ${fabric.gsm}
                </span>

                <span>
                    ${fabric.fiber}
                </span>

                <span>
                    ${fabric.construction}
                </span>

            </div>

        </div>

    `;

    return card;
}


/* =========================================================
   DISPLAY FABRICS
========================================================= */

function displayFabrics(filter = "all") {

    if (!fabricGrid) {
        return;
    }

    fabricGrid.innerHTML = "";

    let filteredFabrics;

    if (filter === "all") {

        filteredFabrics =
            fabrics;

    } else {

        filteredFabrics =
            fabrics.filter(
                fabric =>
                    fabric.group === filter
            );

    }


    if (filteredFabrics.length === 0) {

        fabricGrid.innerHTML = `

            <div class="no-results">

                <h3>
                    No fabric found
                </h3>

                <p>
                    Try another category.
                </p>

            </div>

        `;

        return;
    }


    filteredFabrics.forEach(
        fabric => {

            fabricGrid.appendChild(
                createFabricCard(fabric)
            );

        }
    );

}


/* =========================================================
   INITIAL FABRIC LOAD
========================================================= */

displayFabrics();


/* =========================================================
   FABRIC FILTER
========================================================= */

filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(
                btn =>
                    btn.classList.remove(
                        "active"
                    )
            );

            button.classList.add(
                "active"
            );

            const filter =
                button.dataset.filter;

            displayFabrics(filter);

        }
    );

});


/* =========================================================
   MOBILE MENU
========================================================= */

if (menuBtn) {

    menuBtn.addEventListener(
        "click",
        () => {

            navbar.classList.toggle(
                "show"
            );

        }
    );

}


/* =========================================================
   CLOSE MOBILE MENU AFTER CLICK
========================================================= */

navLinks.forEach(link => {

    link.addEventListener(
        "click",
        () => {

            navbar.classList.remove(
                "show"
            );

        }
    );

});


/* =========================================================
   ACTIVE NAVIGATION
========================================================= */

const sections =
    document.querySelectorAll(
        "section[id]"
    );

window.addEventListener(
    "scroll",
    () => {

        let currentSection = "";

        sections.forEach(
            section => {

                const sectionTop =
                    section.offsetTop - 120;

                if (
                    window.scrollY >=
                    sectionTop
                ) {

                    currentSection =
                        section.getAttribute(
                            "id"
                        );

                }

            }
        );


        navLinks.forEach(
            link => {

                link.classList.remove(
                    "active"
                );

                const href =
                    link.getAttribute(
                        "href"
                    );

                if (
                    href ===
                    `#${currentSection}`
                ) {

                    link.classList.add(
                        "active"
                    );

                }

            }
        );

    }
);


/* =========================================================
   GSM CALCULATOR
========================================================= */

const calculateGSM =
    document.getElementById(
        "calculateGSM"
    );

if (calculateGSM) {

    calculateGSM.addEventListener(
        "click",
        () => {

            const weight =
                parseFloat(
                    document.getElementById(
                        "gsmWeight"
                    ).value
                );

            const length =
                parseFloat(
                    document.getElementById(
                        "gsmLength"
                    ).value
                );

            const width =
                parseFloat(
                    document.getElementById(
                        "gsmWidth"
                    ).value
                );

            const result =
                document.getElementById(
                    "gsmResult"// Yarn Count Calculator
const yarnCountValue = document.getElementById("yarnCountValue");
const yarnCountType = document.getElementById("yarnCountType");
const calculateYarnCount = document.getElementById("calculateYarnCount");
const yarnCountResult = document.getElementById("yarnCountResult");

if (calculateYarnCount) {
  calculateYarnCount.addEventListener("click", () => {
    const value = parseFloat(yarnCountValue.value);
    const type = yarnCountType.value;

    if (!value || value <= 0) {
      yarnCountResult.textContent = "Please enter a valid value.";
      return;
    }

    let ne, nm, tex, denier;

    if (type === "ne") {
      ne = value;
      nm = ne * 1.693;
      tex = 590.5 / ne;
      denier = tex * 9;
    } else if (type === "nm") {
      nm = value;
      ne = nm / 1.693;
      tex = 1000 / nm;
      denier = tex * 9;
    } else if (type === "tex") {
      tex = value;
      nm = 1000 / tex;
      ne = 590.5 / tex;
      denier = tex * 9;
    } else if (type === "denier") {
      denier = value;
      tex = denier / 9;
      nm = 1000 / tex;
      ne = 590.5 / tex;
    }

    yarnCountResult.innerHTML = `
      <strong>Result:</strong><br>
      Ne: ${ne.toFixed(2)}<br>
      Nm: ${nm.toFixed(2)}<br>
      Tex: ${tex.toFixed(2)}<br>
      Denier: ${denier.toFixed(2)}
    `;
  });
}
                );


            if (
                !weight ||
                !length ||
                !width ||
                length <= 0 ||
                width <= 0
            ) {

                result.innerHTML =
                    "⚠️ Please enter valid values.";

                return;
            }


            /*
                GSM formula:

                GSM =
                Weight × 10000
                ----------------
                Length × Width

                Length and Width are in cm.
            */

            const gsm =
                (
                    weight *
                    10000
                ) /
                (
                    length *
                    width
                );


            result.innerHTML = `

                <strong>
                    ${gsm.toFixed(2)} GSM
                </strong>

            `;

        }
    );

}


/* =========================================================
   SHRINKAGE CALCULATOR
========================================================= */

const calculateShrinkage =
    document.getElementById(
        "calculateShrinkage"
    );

if (calculateShrinkage) {

    calculateShrinkage.addEventListener(
        "click",
        () => {

            const original =
                parseFloat(
                    document.getElementById(
                        "originalLength"
                    ).value
                );

            const finalLength =
                parseFloat(
                    document.getElementById(
                        "finalLength"
                    ).value
                );

            const result =
                document.getElementById(
                    "shrinkageResult"
                );


            if (
                !original ||
                !finalLength ||
                original <= 0
            ) {

                result.innerHTML =
                    "⚠️ Please enter valid values.";

                return;
            }


            const shrinkage =
                (
                    (original - finalLength) /
                    original
                ) *
                100;


            result.innerHTML = `

                <strong>
                    ${shrinkage.toFixed(2)}% Shrinkage
                </strong>

            `;

        }
    );

}


/* =========================================================
   FABRIC WEIGHT CALCULATOR
========================================================= */

const calculateFabricWeight =
    document.getElementById(
        "calculateFabricWeight"
    );

if (calculateFabricWeight) {

    calculateFabricWeight.addEventListener(
        "click",
        () => {

            const gsm =
                parseFloat(
                    document.getElementById(
                        "fabricGSM"
                    ).value
                );

            const length =
                parseFloat(
                    document.getElementById(
                        "fabricLength"
                    ).value
                );

            const width =
                parseFloat(
                    document.getElementById(
                        "fabricWidth"
                    ).value
                );

            const result =
                document.getElementById(
                    "fabricWeightResult"
                );


            if (
                !gsm ||
                !length ||
                !width ||
                gsm <= 0 ||
                length <= 0 ||
                width <= 0
            ) {

                result.innerHTML =
                    "⚠️ Please enter valid values.";

                return;
            }


            /*
                Fabric Weight:

                GSM × Area

                Area =
                Length × Width

                Since GSM = gram/m²,
                result is in grams.
            */

            const weight =
                gsm *
                length *
                width;


            const kg =
                weight / 1000;


            result.innerHTML = `

                <strong>
                    ${weight.toFixed(2)} g
                </strong>

                <span style="
                    margin-left:6px;
                    color:#748383;
                ">
                    (${kg.toFixed(3)} kg)
                </span>

            `;

        }
    );

}


/* =========================================================
   GLOBAL SEARCH
========================================================= */

function performSearch() {

    const query =
        globalSearch.value
            .trim()
            .toLowerCase();


    if (!query) {

        searchResults.style.display =
            "none";

        searchResults.innerHTML =
            "";

        return;
    }


    const results =
        fabrics.filter(
            fabric => {

                const searchableText = [

                    fabric.name,

                    fabric.type,

                    fabric.group,

                    fabric.gsm,

                    fabric.fiber,

                    fabric.construction,

                    fabric.use,

                    fabric.description

                ]
                .join(" ")
                .toLowerCase();


                return searchableText.includes(
                    query
                );

            }
        );


    searchResults.style.display =
        "block";


    if (results.length === 0) {

        searchResults.innerHTML = `

            <strong>
                No results found.
            </strong>

            <p style="
                margin-top:5px;
                color:#748383;
                font-size:12px;
            ">
                Try searching Cotton, Denim,
                GSM, Knitted or Polyester.
            </p>

        `;

        return;
    }


    searchResults.innerHTML = `

        <div style="
            display:grid;
            gap:10px;
        ">

            ${results.map(
                fabric => `

                    <div style="
                        padding:12px;
                        background:#f6f9f8;
                        border-radius:9px;
                    ">

                        <strong style="
                            color:#102a2a;
                        ">
                            ${fabric.name}
                        </strong>

                        <div style="
                            margin-top:3px;
                            color:#748383;
                            font-size:11px;
                        ">
                            ${fabric.type}
                            •
                            ${fabric.gsm}
                            •
                            ${fabric.fiber}
                        </div>

                    </div>

                `
            ).join("")}

        </div>

    `;

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

            if (
                event.key ===
                "Enter"
            ) {

                performSearch();

            }

        }
    );

}


/* =========================================================
   VIEW ALL FABRICS
========================================================= */

const viewAllFabrics =
    document.getElementById(
        "viewAllFabrics"
    );

if (viewAllFabrics) {

    viewAllFabrics.addEventListener(
        "click",
        () => {

            const allButton =
                document.querySelector(
                    '[data-filter="all"]'
                );

            if (allButton) {

                allButton.click();

            }

        }
    );

}


/* =========================================================
   PREVENT EMPTY # LINKS
========================================================= */

document
    .querySelectorAll('a[href="#"]')
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                event.preventDefault();

            }
        );

    });


/* =========================================================
   PAGE READY MESSAGE
========================================================= */

console.log(
    "Textile Explorer loaded successfully."
);
