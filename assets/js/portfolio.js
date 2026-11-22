/* Green Bear IA — page Portfolio : affichage des cartes et filtre par type.
   Les données viennent de assets/js/portfolio-data.js (window.PORTFOLIO_ENTRIES). */
(function () {
  "use strict";

  var list = document.getElementById("portfolio-list");
  var filters = document.getElementById("portfolio-filters");
  var status = document.getElementById("portfolio-status");
  if (!list || !filters || !status) {
    return;
  }

  var TYPES = {
    projet: { label: "Projet", plural: "projets" },
    formation: { label: "Formation", plural: "formations" }
  };
  var MONTHS = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet",
    "août", "septembre", "octobre", "novembre", "décembre"];

  /* ---------- Données ---------- */

  function normalizeType(value) {
    var type = String(value || "").trim().toLowerCase();
    return TYPES.hasOwnProperty(type) ? type : null;
  }

  // Renvoie { iso, label } : iso est vide si la date n'est pas au format AAAA-MM(-JJ).
  function parseDate(value) {
    var text = String(value || "").trim();
    var match = /^(\d{4})-(\d{2})(?:-(\d{2}))?$/.exec(text);
    if (!match || Number(match[2]) < 1 || Number(match[2]) > 12) {
      return { iso: "", label: text };
    }
    var month = MONTHS[Number(match[2]) - 1];
    var label = match[3] ? Number(match[3]) + " " + month + " " + match[1] : month + " " + match[1];
    return { iso: text, label: label.charAt(0).toUpperCase() + label.slice(1) };
  }

  function loadEntries() {
    var raw = Array.isArray(window.PORTFOLIO_ENTRIES) ? window.PORTFOLIO_ENTRIES : [];
    var entries = [];
    raw.forEach(function (item, index) {
      if (!item || !normalizeType(item.type)) {
        return; // entrée incomplète ou type inconnu : ignorée
      }
      entries.push({
        titre: String(item.titre || "").trim(),
        type: normalizeType(item.type),
        date: parseDate(item.date),
        description: String(item.description || "").trim(),
        order: index
      });
    });
    // Les plus récentes d'abord ; les dates non reconnues gardent l'ordre du fichier, en fin de liste.
    entries.sort(function (a, b) {
      if (a.date.iso && b.date.iso && a.date.iso !== b.date.iso) {
        return a.date.iso < b.date.iso ? 1 : -1;
      }
      if (a.date.iso && !b.date.iso) { return -1; }
      if (!a.date.iso && b.date.iso) { return 1; }
      return a.order - b.order;
    });
    return entries;
  }

  /* ---------- Affichage ---------- */

  function createCard(entry) {
    var item = document.createElement("li");
    item.className = "portfolio-card portfolio-card--" + entry.type;
    item.setAttribute("data-type", entry.type);

    var meta = document.createElement("p");
    meta.className = "portfolio-card__meta";

    var badge = document.createElement("span");
    badge.className = "portfolio-card__type";
    badge.textContent = TYPES[entry.type].label;
    meta.appendChild(badge);

    if (entry.date.label) {
      var date = document.createElement(entry.date.iso ? "time" : "span");
      date.className = "portfolio-card__date";
      if (entry.date.iso) {
        date.setAttribute("datetime", entry.date.iso);
      }
      date.textContent = entry.date.label;
      meta.appendChild(date);
    }

    var title = document.createElement("h3");
    title.className = "portfolio-card__title";
    title.textContent = entry.titre;

    var description = document.createElement("p");
    description.className = "portfolio-card__description";
    description.textContent = entry.description;

    item.appendChild(meta);
    item.appendChild(title);
    item.appendChild(description);
    return item;
  }

  function renderList(entries) {
    list.textContent = "";
    entries.forEach(function (entry) {
      list.appendChild(createCard(entry));
    });
  }

  function statusMessage(count, filter) {
    if (count === 0) {
      return filter === "tout" ? "Aucune réalisation pour le moment." : "Aucun élément de ce type pour le moment.";
    }
    var noun = filter === "tout" ? (count > 1 ? "réalisations" : "réalisation")
      : (count > 1 ? TYPES[filter].plural : TYPES[filter].label.toLowerCase());
    var participle = (filter === "projet" ? "affiché" : "affichée") + (count > 1 ? "s" : "");
    return count + " " + noun + " " + participle + ".";
  }

  function applyFilter(filter) {
    var visible = 0;
    Array.prototype.forEach.call(list.children, function (card) {
      var show = filter === "tout" || card.getAttribute("data-type") === filter;
      card.hidden = !show;
      if (show) { visible += 1; }
    });
    Array.prototype.forEach.call(filters.querySelectorAll("[data-filter]"), function (button) {
      button.setAttribute("aria-pressed", button.getAttribute("data-filter") === filter ? "true" : "false");
    });
    status.textContent = statusMessage(visible, filter);
  }

  function updateCounts(entries) {
    Array.prototype.forEach.call(filters.querySelectorAll("[data-filter]"), function (button) {
      var filter = button.getAttribute("data-filter");
      var count = entries.filter(function (entry) {
        return filter === "tout" || entry.type === filter;
      }).length;
      var counter = button.querySelector(".filter-btn__count");
      if (counter) {
        counter.textContent = "(" + count + ")";
      }
    });
  }

  /* ---------- Initialisation ---------- */

  var entries = loadEntries();
  renderList(entries);
  updateCounts(entries);
  filters.hidden = false;
  applyFilter("tout");

  filters.addEventListener("click", function (event) {
    var button = event.target.closest("[data-filter]");
    if (button) {
      applyFilter(button.getAttribute("data-filter"));
    }
  });
})();
