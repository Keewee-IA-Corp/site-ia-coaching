/* Green Bear IA — JavaScript partagé : menu mobile */
(function () {
  "use strict";

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.getElementById("main-nav");
  if (!toggle || !nav) {
    return;
  }

  // Le menu n'est replié que si JavaScript fonctionne (sinon il reste visible).
  document.documentElement.classList.add("js-nav");

  function setOpen(open) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.querySelector(".nav-toggle__label").textContent = open ? "Fermer" : "Menu";
    nav.classList.toggle("is-open", open);
  }

  toggle.addEventListener("click", function () {
    setOpen(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Échap referme le menu et rend le focus au bouton.
  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
      setOpen(false);
      toggle.focus();
    }
  });
})();
