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
        badge: "À partager",
        infoKey: "Plateau Thavnairois"
      }
    ]
  }
};

const DRINK_DESCRIPTIONS = {
  "Masala Chai Traditionnel": {
    ingredients: "Thé noir de Radz-at-Han, lait de hainag et épices (graines de cardamome, gingembre, cannelle, girofle et poivre).",
    description: "Thé emblématique de la région de Thavnair, il s'agit d'un thé fortement infusé que la douceur du lait viendra adoucir. Il est possible de demander une version sans lait ; dans ce cas, le thé sera infusé comme un thé noir simple et non à la thavnairoise."
  },
  "Genmaicha": {
    ingredients: "Thé vert de Kugane, assorti de riz grillé.",
    description: "Il s'agit d'un classique des campagnes hingashiennes. Son goût riche en céréales et sa légèreté désaltérante le rendent idéal pour accompagner une petite douceur."
  },
  "Lao Shu Bai Cha": {
    ingredients: "Thé blanc de Doma, écorce de mandarine et de kaki, gingembre, cannelle.",
    description: "Lorsque vient l'automne à Doma, les kakis et les mandarines arrivent sur toutes les tables pour animer des instants chaleureux et conviviaux. Ce thé allie ces saveurs typiques et traditionnelles avec la noblesse du thé blanc de la région."
  },
  "Esprit de la Sylphe": {
    ingredients: "Tisane de frêne, eucalyptus, tilleul et bleuet, tous en provenance de Sombrelinceul.",
    description: "Ce mélange d'une douce teinte bleutée respire l'air frais de la Sylphe si précieuse aux habitants de Gridania. Relativement corsée, elle a pour vertu de faciliter le dégagement des voies respiratoires, idéale pour prévenir ou atténuer le rhume dû au froid local."
  },
  "Cocktail du Verger": {
    ingredients: "Infusion de pomme aigre-douce, carottes, betterave, raisins secs, rolanbaie et fleurs de tournesol, tous en provenance de la Noscea.",
    description: "Cette infusion de fruits cultivés dans les vergers d'Estival saura vous ravir avec sa robe d'un rose étincelant et son goût naturellement sucré. Une véritable eau de fruits qui saura ravir petits et grands."
  },
  "L'Incandescent": {
    ingredients: "Rooibos, amandes, pistaches, écorces d'orange, coriandre et mélange 4 épices (poivre, muscade, girofle, cannelle).",
    description: "Ce rooibos à la couleur d'un doré intense ne sera pas sans rappeler le célèbre Mur Incandescent des régions du Thanalan. Naturellement sucré, son parfum ne sera pas sans rappeler le pain d'épices."
  }
};

const MENU_ITEM_DESCRIPTIONS = {
  "Plateau Thavnairois": {
    eyebrow: "À partager",
    html: `
      <div class="plateau-modal-list">
        <p><strong>Dodo tandoori hariyali</strong><br><em>Dodo tandoori à la menthe et à la coriandre en brochette</em></p>
        <p><strong>Morue amritsari</strong><br><em>Morue fris avec cardamone et farine de pois chiche</em></p>
        <p><strong>Naan</strong><br><em>Nature, au persil ou au fromage</em></p>
        <p><strong>Bouchées végétariennes</strong><br><em>Petit muffin aux épinards, fleur de courgette, paneer (fromage frais) et curry</em></p>
        <p><strong>Jalapeños fourrés</strong><br><em>Jalapeños grillés puis marinés fourré à une crème pimentée et agrémentée de cacahuètes grillées et de pois chiches</em></p>
        <p><strong>Biryani revisité</strong><br><em>Gâteaux de riz complet soufflé à la cannelle, carottes, oignons, amandes, raisin sec et cumin</em></p>
      </div>
      <div class="plateau-modal-sauces">
        <strong>Sauces pour accompagner</strong>
        <p>Curry au beurre de cacahuète</p>
        <p>Crème au citron, coriandre et menthe</p>
        <p>Piment, ail, persil, coriandre, citron, soja</p>
      </div>
    `
  }
};

const DRINK_LABELS = {
  "Chaï de Thavnair": "Masala Chai Traditionnel",
  "Genmaicha d’Hingashi": "Genmaicha",
  "Lao Shu Bai Cha aux kakis de Doma": "Lao Shu Bai Cha",
  "L'Esprit de la Sylphe": "Esprit de la Sylphe",
  "Le Cocktail du Verger": "Cocktail du Verger",
  "L'Incandescent": "L'Incandescent"
};

function makeDetailsInteractive(details = "") {
  return Object.entries(DRINK_LABELS).reduce((html, [label, drinkName]) => {
    const button = `<button type="button" class="drink-info-link" data-drink="${drinkName}">${label}</button>`;
    return html.split(label).join(button);
  }, details);
}

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
        <h3>${item.infoKey ? `<button type="button" class="menu-item-info-link" data-info="${item.infoKey}">${item.name}</button>` : item.name}</h3>
        <p>${item.desc}</p>
        ${item.details ? `<p class="details">${makeDetailsInteractive(item.details)}</p>` : ''}
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

const drinkModal = document.querySelector('#drink-modal');
const drinkModalTitle = document.querySelector('#drink-modal-title');
const drinkModalIngredients = document.querySelector('#drink-modal-ingredients');
const drinkModalDescription = document.querySelector('#drink-modal-description');

menuContent.addEventListener('click', event => {
  const drinkTrigger = event.target.closest('.drink-info-link');
  if (drinkTrigger) {
    const drink = DRINK_DESCRIPTIONS[drinkTrigger.dataset.drink];
    if (!drink) return;

    drinkModal.querySelector('.eyebrow').textContent = 'À découvrir';
    drinkModalTitle.textContent = drinkTrigger.dataset.drink;
    drinkModalIngredients.hidden = false;
    drinkModalIngredients.textContent = drink.ingredients;
    drinkModalDescription.classList.remove('menu-item-modal-description');
    drinkModalDescription.textContent = drink.description;
    drinkModal.showModal();
    return;
  }

  const itemTrigger = event.target.closest('.menu-item-info-link');
  if (!itemTrigger) return;

  const item = MENU_ITEM_DESCRIPTIONS[itemTrigger.dataset.info];
  if (!item) return;

  drinkModal.querySelector('.eyebrow').textContent = item.eyebrow || 'À découvrir';
  drinkModalTitle.textContent = itemTrigger.dataset.info;
  drinkModalIngredients.hidden = true;
  drinkModalDescription.classList.add('menu-item-modal-description');
  drinkModalDescription.innerHTML = item.html;
  drinkModal.showModal();
});

document.querySelector('[data-close-drink-modal]').addEventListener('click', () => drinkModal.close());
drinkModal.addEventListener('click', event => {
  const rect = drinkModal.getBoundingClientRect();
  const inside =
    event.clientX >= rect.left &&
    event.clientX <= rect.right &&
    event.clientY >= rect.top &&
    event.clientY <= rect.bottom;
  if (!inside) drinkModal.close();
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