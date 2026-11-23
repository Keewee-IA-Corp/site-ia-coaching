/* Green Bear IA — JavaScript partagé : menu mobile, ours de l'en-tête */

/* Ours blanc de l'en-tête : lien vers l'accueil (href="index.html").
   Depuis l'accueil, la page se recharge ; on remonte d'abord en haut pour
   que le navigateur ne restaure pas l'ancienne position de défilement. */
(function () {
  "use strict";

  var bear = document.querySelector(".header-bear");
  if (!bear) {
    return;
  }

  function withoutHash(url) {
    return url.split("#")[0];
  }

  // L'événement « click » est aussi déclenché par la touche Entrée au clavier.
  bear.addEventListener("click", function () {
    if (withoutHash(bear.href) === withoutHash(window.location.href)) {
      window.scrollTo(0, 0);
    }
  });
})();

/* Menu mobile */
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
