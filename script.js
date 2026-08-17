const MENU = {
  chaud: {
    title: "Boissons chaudes",
    intro: "Cafés, chocolats, thés et infusions : une sélection chaude pensée pour accompagner une pause tranquille ou une gourmandise.",
    image: "assets/cafes.png",
    items: [
      {
        name: "Cafés chauds",
		image: "assets/Nos-Cafes-Chauds.png",
        desc: "Café 100 % arabica originaire des îles Cieldalaes, au léger goût de noisette.",
        details: "Espresso • Allongé • Cappuccino<br/>Moka • Flat White • Latte",
      },
      {
        name: "Chocolats",
		image: "assets/Nos-chocolats.png",
		desc: "Notre chocolat à la kukuru royale se décline en trois versions chaleureuses et gourmandes.",
        details: "Chocolat chaud • Chocolat viennois<br/>Caramélia, chocolat-caramel",
      },
      {
        name: "Thés d’ailleurs",
		image: "assets/Nos-thes-dailleurs.png",
        desc: "Une sélection de thés pensée comme une invitation au voyage et à la découverte.",
        details: "Genmaicha d’Hingashi • Chaï de Thavnair<br/>Lao Shu Bai Cha aux kakis de Doma",
      },
      {
        name: "Infusions",
		image: "assets/Nos-Infusions.png",
        desc: "Trois mélanges mettant à l’honneur différentes contrées d’Éorzéa dans des breuvages doux et généreux.",
        details: "Le Cocktail du Verger • L'Incandescent<br/>L'Esprit de la Sylphe",
      }
    ]
  },

  froid: {
    title: "Boissons froides",
    intro: "Cafés glacés, thés fruités, jus maison et boissons inspirées de nos terres natales.",
    image: "assets/boisson-froide.png",
    items: [
      {
        name: "Cafés froids",
        image: "assets/cafes-froids.png",
        desc: "Un café d’origine turalienne, mélange d’arabica et de robusta, à la saveur forte et presque cacaotée.",
        details: "Café glacé • Affogato à la vanille",
      },
      {
        name: "Thés glacés",
		image: "assets/The-Glace.png",
        desc: "Un thé vert doux et frais, à agrémenter du parfum de votre choix.",
        details: "Rolanbaie • Citron • Fruits rouges • Menthe<br/>Amra-passion • Pêche • Option billes de tapioca",
      },
      {
        name: "Jus de fruits maison",
        image: "assets/jus-fruits.png",
        desc: "Des jus préparés maison à partir d’une sélection de fruits d’ici et d’ailleurs.",
        details: "Raisin des plaines • Rolanbaie • Pomme de fée<br/>Orange noscéenne • Ananas doré • Amra",
      },
      {
        name: "Nos origines",
		image: "assets/Nos-Origines.png",
        desc: "Deux boissons fraîches inspirées des terres natales des propriétaires du Chasha’Miam.",
        details: "Lassi à l’amra de Thavnair<br/>Sharbat au citron et à la rose du Thanalan",
      }
    ]
  },

  gourmandises: {
    title: "Gourmandises",
    intro: "Pâtisseries, crêpes, gaufres, glaces et petites douceurs à emporter : choisissez votre envie du moment.",
    image: "assets/duo-gateau.png",
    subcategories: {
      "patisseries": [
        {
          name: "L’Appelpie",
          desc: "Une pâte sucrée recouverte d’une couche de crème d’amande, elle-même surmontée d’une compote pomme-cannelle et de pommes caramélisées et flambées au rhum vieux.",
          image: "assets/appelpie.png",
        },
        {
          name: "Le Chat d’Or",
          desc: "Une pâte sablée avec une fine couche de chocolat blanc, surmontée d’un dôme de crémeux au citron soleil parsemé de zestes de citron vert et d’une délicate meringue en ruban.",
          image: "assets/chat-dor.png",
        },
        {
          name: "Le Joufflu",
          desc: "Une très moelleuse génoise à la vanille renfermant un cœur gélifié à l’amra dans son écrin de chantilly. Un coulis de passion vient rehausser l’ensemble.",
          image: "assets/joufflu.png",
        },
        {
          name: "Le Bombo Praliné",
          desc: "Un chou garni d’un croquant chocolat-praliné et d’une généreuse mousseline aux éclats de noisettes, couronné d’un craquelin au chocolat.",
          image: "assets/bombo-praline.png",
        }
      ],

      "crepes-gaufres": [
        {
          name: "Une Étreinte Rubis",
          image: "assets/etreinte-rubis.png",
          desc: "Une généreuse gaufre croustillante accompagnée de rolanbaies, d’un coulis acidulé de fruits rouges, d’une quenelle de glace vanille et de chantilly."
        },
        {
          name: "Un Murmure Forestier",
		  image: "assets/murmure-forestier.png",
          desc: "Une gaufre moelleuse garnie de crème de marrons et d’un coulis de cassis, accompagnée de chantilly, de marrons glacés et d’amandes torréfiées."
        },
        {
          name: "Un Cœur de Cookies",
          image: "assets/coeur-cookies.png",
          desc: "Une crêpe nappée de coulis de chocolat noir et parsemée d’éclats de cookies, accompagnée d’une boule de glace vanille et d’un peu de chantilly."
        },
        {
          name: "Une Brise d’Abricot",
          image: "assets/brise-abricots.png",
          desc: "Des quartiers de pêches et d’abricots rôtis accompagnés de chantilly au miel, d’une boule de glace vanille, d’amandes torréfiées et d’un zeste de fleur de sureau."
        }
      ],

      "glaces": [
        {
          name: "Le Paradis du Cieldalaes",
          desc: "Un sorbet coco et un sorbet ananas réunis dans une coque de coco, accompagnés de chantilly, de coulis de passion, de copeaux de chocolat blanc et d’un adorable biscuit chat.",
          image: "assets/Paradis.png",
        },
        {
          name: "Les Kufis",
		  image: "assets/Kulfi.png",
          desc: "Deux variantes inspirées de deux horizons différents.",
          details: "Arkasodara : safran • cardamome • pistache<br/> Félin : miel • amra • noix de cajou",
        },
        {
          name: "La Cœur-de-Glace",
          desc: "Une boule de glace au sapin, une boule à la griotte et une à la vanille, nappées d’un coulis à la liqueur de sapin. Le tout est recouvert de chantilly et saupoudré de cannelle.",
          image: "assets/coeur-de-glace.png",
        },
        {
          name: "La Little Sultana",
          desc: "Glace à la figue de barbarie accompagnée d’une boule de chocolat noir et d’une boule au miel, avec chantilly au miel, éclats de pistaches et morceaux de figues.",
          image: "assets/Little-sultana.png",
        }
      ],

      "gateaux-voyage": [
        {
          name: "Macarons Mignons",
          desc: "Trois petits macarons aux formes et saveurs différentes.",
          details: "Cœur framboise • Ourson chocolat-noisette • Étoile rose-litchi",
          image: "assets/Macarons-mignon.png",
        },
        {
          name: "Mini-Cookies",
		  image: "assets/Mini-Cookies.png",
          desc: "De petits cookies à emporter ou à grignoter sur place.",
          details: "Tout chocolat • Chocolat au lait • Trois chocolats",
		  badge: "À partager"
        },
        {
          name: "Mini-Meringues",
		  image: "assets/Mini-meringues.png",
          desc: "De petites meringues croquantes et parfumées.",
          details: "Citron • Violette • Vanille",
		  badge: "À partager"
        }
      ]
    }
  },

  sale: {
    title: "Salé",
    intro: "Deux propositions généreuses inspirées de Thavnair, pour une faim un peu moins sucrée.",
    image: "assets/sale.png",
    items: [
      {
        name: "Onctueux Baos",
        desc: "De petits pains vapeur en forme de tigre, généreusement garnis d’un curry thavnaïrois peu épicé mêlant une farandole de légumes et du dodo fondant.",
        image: "assets/Nos-baos.png",
		badge: "À partager"
      },
      {
        name: "Plateau Thavnairois",
        desc: "Un assortiment généreux de spécialités thavnaïroises à partager — ou pas. Dodo tandoori hariyali en brochettes, morue amritsari, naan nature, au persil ou au fromage, bouchées végétariennes, jalapeños fourrés et biryani revisité.",
        details: "Servi avec trois sauces maison.",
        image: "assets/Plateau.png",
        badge: "À partager"
      }
    ]
  }
};

const menuContent = document.querySelector('#menu-content');
const categoryTabs = [...document.querySelectorAll('.menu-tab')];
const subTabsWrap = document.querySelector('#gourmand-subtabs');
const subTabs = [...document.querySelectorAll('.subtab')];
let currentCategory = 'chaud';
let currentSubcategory = 'patisseries';

function cardTemplate(item) {
  const classes = ['menu-card'];
  if (item.image) classes.push('with-image');

  return `
    <article class="${classes.join(' ')}">
      <div>
        <h3>${item.name}</h3>
        <p>${item.desc}</p>
        ${item.details ? `<p class="details">${item.details}</p>` : ''}
        ${item.badge ? `<div class="meta"><span class="badge ${item.badge === 'Signature' ? 'signature' : ''}">${item.badge}</span></div>` : ''}
      </div>
      ${item.image ? `<img src="${item.image}" alt="Illustration — ${item.name}" />` : ''}
    </article>`;
}

function renderMenu() {
  const category = MENU[currentCategory];
  const items = category.subcategories ? category.subcategories[currentSubcategory] : category.items;
  subTabsWrap.hidden = currentCategory !== 'gourmandises';

  const subLabel = currentCategory === 'gourmandises'
    ? subTabs.find(b => b.dataset.subcategory === currentSubcategory)?.textContent
    : 'Sélection';

  menuContent.innerHTML = `
    <div class="category-heading">
  ${currentCategory === 'gourmandises' ? `<p class="eyebrow">Gourmandises</p>` : ''}
  <h2>${currentCategory === 'gourmandises' ? subLabel : category.title}</h2>
      <p>${category.intro}</p>
    </div>
    <div class="menu-grid">${items.map(cardTemplate).join('')}</div>
  `;
}

categoryTabs.forEach(button => {
  button.addEventListener('click', () => {
    currentCategory = button.dataset.category;
    categoryTabs.forEach(b => {
      const active = b === button;
      b.classList.toggle('active', active);
      b.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    renderMenu();
  });
});

subTabs.forEach(button => {
  button.addEventListener('click', () => {
    currentSubcategory = button.dataset.subcategory;
    subTabs.forEach(b => b.classList.toggle('active', b === button));
    renderMenu();
  });
});

const modal = document.querySelector('#credits-modal');
document.querySelectorAll('[data-open-modal="credits"]').forEach(button => {
  button.addEventListener('click', () => modal.showModal());
});
document.querySelector('[data-close-modal]').addEventListener('click', () => modal.close());
modal.addEventListener('click', event => {
  const rect = modal.getBoundingClientRect();
  const inside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (!inside) modal.close();
});

renderMenu();

/* =========================================================
   MASCOTTE ALÉATOIRE — RETOUR EN HAUT
   ========================================================= */

const allCats = [
  "IMG_0693.png",
  "IMG_0695.png",
  "IMG_0696.png",
  "IMG_0697.png",
  "IMG_0698.png",
  "IMG_0699.png",
  "IMG_0700.png",
  "IMG_0701.png",
  "IMG_0702.png",
  "IMG_0703.png",
  "IMG_0708.png",
  "IMG_0709.png",
  "IMG_0710.png",
  "IMG_0711.png",
  "IMG_0712.png",
  "IMG_0713.png",
  "IMG_0714.png",
  "IMG_0715.png",
  "IMG_0716.png",
  "IMG_0717.png",
  "IMG_0718.png",
  "IMG_0719.png",
  "IMG_0720.png",
  "IMG_0721.png",
  "IMG_0722.png",
  "IMG_0723.png",
  "IMG_0724.png"
];

const backToTop = document.querySelector("#back-to-top");
const randomCat = document.querySelector("#random-cat");

/* Choisit un Chasha au chargement de la page */
const chosenCat = allCats[Math.floor(Math.random() * allCats.length)];

randomCat.src = `assets/allcat/${chosenCat}`;


/* Affiche la mascotte lorsqu'on descend suffisamment */
function toggleBackToTop() {
  if (window.scrollY > 300) {
    backToTop.classList.add("is-visible");
  } else {
    backToTop.classList.remove("is-visible");
  }
}

window.addEventListener("scroll", toggleBackToTop, { passive: true });
toggleBackToTop();


/* Retour doux en haut de la page */
backToTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

const menuCats = document.querySelectorAll(".menu-cat");

const shuffledCats = [...allCats].sort(() => Math.random() - 0.5);

menuCats.forEach((cat, index) => {
  cat.src = `assets/allcat/${shuffledCats[index]}`;
});