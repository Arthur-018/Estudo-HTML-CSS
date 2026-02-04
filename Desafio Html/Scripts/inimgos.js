
const ENEMIES = [
  // 1) Marionetes (Puppets)
  {
    id: "marionete-basica",
    name: "Marionete Básica",
    category: "Marionetes (Puppets)",
    description:
      "Autômatos comuns da cidade de Krat. Atacam com golpes simples e servem como o padrão de combate: pressionam em sequência curta e punem distrações.",
    img: "../img/enemies/marionete_treino.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },
  {
    id: "marionete-policial",
    name: "Marionete Policial (Police Puppet)",
    category: "Marionetes (Puppets)",
    description:
      "Versão mais agressiva, com investidas e golpes mais firmes. Costuma punir cura e avanços mal calculados.",
    img: "../img/enemies/marionete_policial.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },
  {
    id: "marionete-choque",
    name: "Marionete de Choque",
    category: "Marionetes (Puppets)",
    description:
      "Modelos com eletrificação: podem aplicar Choque (Shock) e atrapalhar sua recuperação de stamina. Evite trocar golpes em sequência.",
    img: "../img/enemies/marionete_choque.jpg",
    location: {
      name: "Center of Venigni Works",
      chapter: "Capítulo 3",
      img: "../img/locations/center_of_venigni_works.jpg",
    },
  },
  {
    id: "marionete-lancadora",
    name: "Marionete Lançadora (Thrower)",
    category: "Marionetes (Puppets)",
    description:
      "Ataca à distância com arremessos (bombas/itens). Pressione com cuidado e quebre a linha de ataque usando ângulos e cobertura.",
    img: "../img/enemies/marionete_arremesso.jpg",
    location: {
      name: "Rosa Isabelle Street Entrance",
      chapter: "Capítulo 6",
      img: "../img/locations/rosa_isabelle_street_entrance.jpg",
    },
  },
  {
    id: "marionete-criada",
    name: "Marionete Criada (Maid Puppet)",
    category: "Marionetes (Puppets)",
    description:
      "Rápida e insistente, com sequências curtas. Cuidado com ataques em diagonal e com contra-ataques após esquivas.",
    img: "../img/enemies/marionete_maid.jpg",
    location: {
      name: "Estella Opera House Stage",
      chapter: "Capítulo 6",
      img: "../img/locations/estella_opera_house_stage.jpg",
    },
  },
  {
    id: "marionete-mordomo",
    name: "Marionete Mordomo (Butler Puppet)",
    category: "Marionetes (Puppets)",
    description:
      "Mais resistente e com alcance maior. Normalmente tem golpes com atraso (timing) para punir esquiva cedo.",
    img: "../img/enemies/marionete_butler.jpg",
    location: {
      name: "Lorenzini Arcade",
      chapter: "Capítulo 5",
      img: "../img/locations/lorenzini_arcade.jpg",
    },
  },
  {
    id: "cao-marionete",
    name: "Cão-Marionete",
    category: "Marionetes (Puppets)",
    description:
      "Quadrúpede veloz. Costuma pular e morder em sequência. Mantenha a distância controlada e finalize após a investida.",
    img: "../img/enemies/marionete_cao.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },
  {
    id: "marionete-atiradora",
    name: "Marionete Atiradora (Shooter Puppet)",
    category: "Marionetes (Puppets)",
    description:
      "Atira de longe e força você a se mover sob pressão. Use cobertura e avance após o disparo para punir a recuperação.",
    img: "../img/enemies/marionete_atiradora.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },
  {
    id: "marionete-aranha",
    name: "Marionete de Aranha (Opera House)",
    category: "Marionetes (Puppets)",
    description:
      "Marionete com movimentos irregulares e alcance estranho. Espere o avanço e puna quando ela terminar a sequência.",
    img: "../img/enemies/marionete_aranha.jpg",
    location: {
      name: "Estella Opera House Stage",
      chapter: "Capítulo 6",
      img: "../img/locations/estella_opera_house_stage.jpg",
    },
  },
  {
    id: "marionete-carroca",
    name: "Marionete Gigante de Carroça",
    category: "Marionetes (Puppets)",
    description:
      "Brutamontes que bate com peças grandes. Ataques pesados e lentos — jogue no 'bate e sai' e puna o recovery.",
    img: "../img/enemies/marionete_carroca.jpg",
    location: {
      name: "Krat Central Station Lobby",
      chapter: "Capítulo 1",
      img: "../img/locations/krat_central_station_lobby.jpg",
    },
  },

  // 2) Carcaças e Mutantes (Carcasses)
  {
    id: "carcaca-basica",
    name: "Carcaça Básica",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Humanos transformados que atacam com as mãos ou armas improvisadas. Padrões mais orgânicos e agressivos.",
    img: "../img/enemies/carcaca_basica.jpg",
    location: {
      name: "St. Frangelico Cathedral Chapel",
      chapter: "Capítulo 4",
      img: "../img/locations/st_frangelico_cathedral_chapel.png",
    },
  },
  {
    id: "carcaca-acida",
    name: "Carcaça Ácida",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Explodem ou cospem ácido ao morrer. Evite ficar colado e finalize com cuidado para não tomar respingos.",
    img: "../img/enemies/carcaca_acida.jpg",
    location: {
      name: "St. Frangelico Cathedral Chapel",
      chapter: "Capítulo 4",
      img: "../img/locations/st_frangelico_cathedral_chapel.png",
    },
  },
  {
    id: "carcaca-tentaculos",
    name: "Carcaça de Tentáculos",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Mutações nos braços aumentam bastante o alcance. Mantenha mais espaço do que parece necessário e puna o fim dos golpes.",
    img: "../img/enemies/carcaca_tentaculos.jpg",
    location: {
      name: "St. Frangelico Cathedral Chapel",
      chapter: "Capítulo 4",
      img: "../img/locations/st_frangelico_cathedral_chapel.png",
    },
  },
  {
    id: "cao-mutante",
    name: "Cão Mutante",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Versão orgânica e deformada dos cães. Muito agressivo e rápido — controle câmera e não deixe encurralar.",
    img: "../img/enemies/cao_mutante.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },
  {
    id: "carcaca-urso",
    name: 'Carcaça "Urso"',
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Um urso gigante e mutante encontrado no Pântano. Golpes pesados e alcance alto — jogue no 'hit & run'.",
    img: "../img/enemies/carcaca_urso.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },
  {
    id: "carcaca-cristal-cura",
    name: "Carcaça de Cristal de Cura",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Regenera vida ou dá buffs aos inimigos próximos. Prioridade alta: elimine cedo para não prolongar a luta.",
    img: "../img/enemies/carcaca_cristal_cura.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },
  {
    id: "mutante-touro",
    name: "Mutante Touro/Grande",
    category: "Carcaças e Mutantes (Carcasses)",
    description:
      "Criatura massiva com marretadas pesadas. Respeite o timing e castigue apenas após ataques comprometidos.",
    img: "../img/enemies/mutante_touro.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },

  // 3) Humanos e Alquimistas
  {
    id: "stalkers-minion",
    name: "Rastreadores (Stalkers)",
    category: "Humanos e Alquimistas",
    description:
      'Humanos mascarados com estilo de luta parecido com o do P. Existem "minions" (máscaras de animais) espalhados pelo mapa.',
    img: "../img/enemies/stalker_minion.jpg",
    location: {
      name: "Black Seaside",
      chapter: "Capítulo 9",
      img: "../img/locations/black_seaside.jpg",
    },
  },
  {
    id: "soldados-alquimistas",
    name: "Soldados Alquimistas",
    category: "Humanos e Alquimistas",
    description:
      "Guardas de elite encontrados na Abadia de Arche. Combate mais técnico e pressão maior em combos.",
    img: "../img/enemies/soldado_alquimista.jpg",
    location: {
      name: "Arche Abbey Entrance",
      chapter: "Capítulo 10",
      img: "../img/locations/arche_abbey_entrance.jpg",
    },
  },
  {
    id: "atiradores-elite-alquimistas",
    name: "Atiradores de Elite Alquimistas",
    category: "Humanos e Alquimistas",
    description:
      "Usam bestas de repetição e dardos com efeitos de status (Choque ou Perturbação). Corte a linha de visão e avance após o disparo.",
    img: "../img/enemies/atirador_alquimista.jpg",
    location: {
      name: "Arche Abbey Entrance",
      chapter: "Capítulo 10",
      img: "../img/locations/arche_abbey_entrance.jpg",
    },
  },
  {
    id: "experimentos-alquimistas",
    name: "Experimentos Alquimistas",
    category: "Humanos e Alquimistas",
    description:
      'Criaturas tipo "Frankenstein" com braços de metal ou armas pesadas. Ataques amplos e fortes — jogue no stagger e fatal.',
    img: "../img/enemies/experimento_alquimista.jpg",
    location: {
      name: "Arche Abbey Entrance",
      chapter: "Capítulo 10",
      img: "../img/locations/arche_abbey_entrance.jpg",
    },
  },

  // Elite (Mini-bosses)
  {
    id: "marionete-do-futuro",
    name: "Marionete do Futuro",
    category: "Inimigos de Elite (Mini-bosses)",
    description:
      "Robôs gigantes que patrulham áreas perigosas (muitas vezes em pântanos venenosos). Muito resistentes e com golpes devastadores.",
    img: "../img/enemies/marionete_do_futuro.jpg",
    location: {
      name: "Barren Swamp",
      chapter: "Capítulo 8",
      img: "../img/locations/barren_swamp.jpg",
    },
  },
  {
    id: "boxeadores-metal",
    name: "Boxeadores de Metal",
    category: "Inimigos de Elite (Mini-bosses)",
    description:
      "Marionetes grandes com luvas de boxe que dão combos rápidos. Respeite o ritmo e puna as pausas.",
    img: "../img/enemies/boxeador_metal.jpg",
    location: {
      name: "Lorenzini Arcade",
      chapter: "Capítulo 5",
      img: "../img/locations/lorenzini_arcade.jpg",
    },
  },
  {
    id: "mad-clown",
    name: "Palhaço Maluco (Mad Clown)",
    category: "Inimigos de Elite (Mini-bosses)",
    description:
      "Versão recorrente e perigosa. Ataques de alcance alto e pressão. Espere o timing real antes de esquivar.",
    img: "../img/enemies/mad_clown.jpg",
    location: {
      name: "Rosa Isabelle Street Entrance",
      chapter: "Capítulo 6",
      img: "../img/locations/rosa_isabelle_street_entrance.jpg",
    },
  },
  {
    id: "guardioes-porta",
    name: "Guardiões de Porta",
    category: "Inimigos de Elite (Mini-bosses)",
    description:
      "Gigantes blindados que protegem entradas importantes. Alta defesa e ataques pesados — busque stagger e fatal attack.",
    img: "../img/enemies/guardian_porta.jpg",
    location: {
      name: "Arche Abbey Entrance",
      chapter: "Capítulo 10",
      img: "../img/locations/arche_abbey_entrance.jpg",
    },
  },
];

function normalize(s) {
  return String(s)
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "");
}

function uniqueCategories(enemies) {
  const seen = new Set();
  const out = [];
  enemies.forEach((e) => {
    if (!seen.has(e.category)) {
      seen.add(e.category);
      out.push(e.category);
    }
  });
  return out;
}

document.addEventListener("DOMContentLoaded", () => {
  const categoryListEl = document.getElementById("categoryList");
  const enemyPanelEl = document.getElementById("enemyPanel");
  const activeCategoryBadgeEl = document.getElementById("activeCategoryBadge");
  const enemyListEl = document.getElementById("enemyList");
  const searchInput = document.getElementById("searchInput");

  const emptyState = document.getElementById("emptyState");
  const details = document.getElementById("details");
  const closeBtn = document.getElementById("closeBtn");

  const enemyName = document.getElementById("enemyName");
  const enemyCategory = document.getElementById("enemyCategory");
  const enemyDescription = document.getElementById("enemyDescription");
  const enemyImage = document.getElementById("enemyImage");

  const enemyLocation = document.getElementById("enemyLocation");
  const enemyChapter = document.getElementById("enemyChapter");
  const locationImage = document.getElementById("locationImage");

  let activeCategory = null;
  let activeEnemyId = null;

  function setEnemyPanelVisible(visible) {
    enemyPanelEl.dataset.hidden = visible ? "false" : "true";
  }

  function clearDetails() {
    activeEnemyId = null;
    emptyState.classList.remove("hidden");
    details.classList.add("hidden");

    enemyName.textContent = "—";
    enemyCategory.textContent = "—";
    enemyDescription.textContent = "—";
    enemyImage.removeAttribute("src");
    enemyImage.alt = "";

    enemyLocation.textContent = "—";
    enemyChapter.textContent = "—";
    locationImage.removeAttribute("src");
    locationImage.alt = "";
  }

  function renderCategories(filterText = "") {
    const q = normalize(filterText.trim());
    const cats = uniqueCategories(ENEMIES);

    // se estiver pesquisando, filtra categorias que tenham algum inimigo batendo
    const filteredCats = !q
      ? cats
      : cats.filter((c) =>
          ENEMIES.some(
            (e) =>
              e.category === c &&
              (normalize(e.name).includes(q) || normalize(e.category).includes(q))
          )
        );

    categoryListEl.innerHTML = "";
    filteredCats.forEach((cat) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "cat-btn" + (cat === activeCategory ? " is-active" : "");
      btn.textContent = cat;

      btn.addEventListener("click", () => {
        // toggle: clicou na mesma categoria => fecha lista
        if (activeCategory === cat) {
          activeCategory = null;
          activeCategoryBadgeEl.textContent = "—";
          enemyListEl.innerHTML = "";
          setEnemyPanelVisible(false);
          clearDetails();
          renderCategories(searchInput.value);
          return;
        }

        activeCategory = cat;
        activeCategoryBadgeEl.textContent = cat;
        setEnemyPanelVisible(true);
        activeEnemyId = null;
        clearDetails();
        renderEnemyList(searchInput.value);
        renderCategories(searchInput.value);
      });

      categoryListEl.appendChild(btn);
    });
  }

  function renderEnemyList(filterText = "") {
    enemyListEl.innerHTML = "";

    if (!activeCategory) return;

    const q = normalize(filterText.trim());
    const list = ENEMIES.filter((e) => e.category === activeCategory).filter((e) => {
      if (!q) return true;
      return normalize(e.name).includes(q) || normalize(e.category).includes(q);
    });

    if (!list.length) {
      const div = document.createElement("div");
      div.className = "empty-mini";
      div.textContent = "Nenhum inimigo encontrado nessa categoria.";
      enemyListEl.appendChild(div);
      return;
    }

    list.forEach((e) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = "enemy-btn" + (e.id === activeEnemyId ? " is-active" : "");
      btn.dataset.id = e.id;
      btn.innerHTML = `<span>${e.name}</span><small>${e.location.name} • ${e.location.chapter}</small>`;

      btn.addEventListener("click", () => {
        if (activeEnemyId === e.id) {
         
          activeEnemyId = null;
          clearDetails();
         
          document.querySelectorAll(".enemy-btn").forEach((b) =>
            b.classList.remove("is-active")
          );
          return;
        }
        selectEnemy(e.id);
      });

      enemyListEl.appendChild(btn);
    });
  }

  function selectEnemy(id) {
    const e = ENEMIES.find((x) => x.id === id);
    if (!e) return;

    activeEnemyId = id;

    document.querySelectorAll(".enemy-btn").forEach((b) => {
      b.classList.toggle("is-active", b.dataset.id === id);
    });

    emptyState.classList.add("hidden");
    details.classList.remove("hidden");

    enemyName.textContent = e.name;
    enemyCategory.textContent = e.category;
    enemyDescription.textContent = e.description;

    enemyImage.src = e.img;
    enemyImage.alt = `Imagem de ${e.name}`;

    enemyLocation.textContent = e.location.name;
    enemyChapter.textContent = e.location.chapter;

    locationImage.src = e.location.img;
    locationImage.alt = `Local: ${e.location.name}`;
  }

  closeBtn.addEventListener("click", () => {
    activeEnemyId = null;
    clearDetails();
    // limpa seleção visual
    document.querySelectorAll(".enemy-btn").forEach((b) => b.classList.remove("is-active"));
  });

  
  setEnemyPanelVisible(false);
  clearDetails();
  renderCategories("");

  // pesquisa: filtra categorias e (se categoria ativa) lista
  searchInput.addEventListener("input", (ev) => {
    const value = ev.target.value || "";
    renderCategories(value);
    renderEnemyList(value);
  });
});
