# Journal des modifications

## SIC-20261122-012322-2 — Rendre le pictogramme d'ours cliquable vers la page d'accueil

- Le pictogramme d'ours de l'en-tête était déjà un lien `href="index.html"` sur les trois pages (US précédente) : il ramène à l'accueil depuis Contact et Portfolio, à la souris comme au clavier (Tab puis Entrée), avec le contour de focus commun du site.
- `assets/js/main.js` : depuis l'accueil, un clic sur l'ours remonte en haut de page avant le rechargement, pour que le navigateur ne restaure pas l'ancienne position de défilement (fonctionne aussi depuis `index.html#offre`).
- `assets/css/style.css` : léger agrandissement de l'ours au survol, pour signaler qu'il est cliquable.
- `README.md` : comportement de l'ours documenté.

## SIC-20261122-012322 — Afficher un pictogramme d'ours blanc centré dans le bandeau (correction)

- Correction du léger décalage horizontal de l'en-tête (logo, ours et menu) sur la page Contact par rapport à l'Accueil et au Portfolio.
- Cause : la page Contact est assez courte pour ne pas avoir de barre de défilement verticale ; la page était alors plus large de la largeur de cette barre, et le contenu centré se décalait de quelques pixels.
- `assets/css/style.css` : `overflow-y: scroll` sur `html`, pour que la place de la barre de défilement soit réservée sur toutes les pages. L'en-tête est désormais à la même position sur les trois pages.
- HTML de l'en-tête inchangé (déjà identique sur les trois pages).

## SIC-20261122-012322 — Afficher un pictogramme d'ours blanc centré dans le bandeau

- En-tête de `index.html`, `contact.html` et `portfolio.html` : ajout d'un pictogramme SVG intégré d'ours blanc (tête de face, léger contour vert sombre), lien vers `index.html`.
- Accessibilité : le lien porte le libellé « Ours blanc Green Bear IA : retour à l'accueil » (`aria-label`), le SVG est masqué aux lecteurs d'écran (`aria-hidden`).
- `assets/css/style.css` : l'en-tête passe en grille à trois colonnes (deux colonnes latérales de même largeur) pour centrer exactement l'ours ; nouvelle variable `--header-bear-size` et styles `.header-bear`.
- Sous 480 px de large, l'ours se place sur sa propre ligne, centrée, sous le logo et le bouton « Menu » (pas de chevauchement à 360 px) ; décalage d'ancre (`scroll-margin-top`) ajusté en conséquence.
- Logo, nom « Green Bear IA » et menu inchangés.

## SIC-20261122-000431-2 — Afficher le logo Green Bear dans l'en-tête (correction)

- Chemin du logo modifié dans `index.html`, `contact.html` et `portfolio.html` : `src="assets/img/GreenBear.png"` au lieu de `src="GreenBear.png"`.
- `README.md` : le logo figure désormais dans `assets/img/` dans la structure du projet.
- Le fichier `GreenBear.png` reste à déplacer manuellement de la racine vers `assets/img/`.

## SIC-20261122-000431-2 — Afficher le logo Green Bear dans l'en-tête

- En-tête de `index.html`, `contact.html` et `portfolio.html` : le pictogramme SVG provisoire est remplacé par le logo `GreenBear.png`, à côté du nom « Green Bear IA ».
- Texte alternatif du logo : « Logo Green Bear IA : tête d'ours stylisée dans des tons verts ».
- Style `.logo__mark` dans `assets/css/style.css` : hauteur fixe de 2,5 rem, largeur proportionnelle, coins arrondis ; l'en-tête reste sans défilement horizontal à 360 px.
- Le logo est chargé depuis la racine du projet (`GreenBear.png`), là où le fichier a été fourni.

## SIC-20261122-000431 — Remplacer le nom de la société par Green Bear IA

- En-tête (`index.html`, `contact.html`, `portfolio.html`) : le nom affiché à côté du pictogramme devient « Green Bear IA » (le mot « IA » garde sa couleur d'accent).
- Pied de page de toutes les pages : « © Green Bear IA ».
- Titres d'onglet au format « Green Bear IA — Page » (Accueil, Contact, Portfolio) et méta-descriptions mises à jour.
- Accueil : titre du bandeau et phrase de présentation de l'offre mentionnent « Green Bear IA ».
- Contact : libellé du lien LinkedIn « Green Bear IA sur LinkedIn » ; Portfolio : phrase d'introduction mise à jour.
- Commentaires d'en-tête de `style.css`, `main.js`, `portfolio.js`, `portfolio-data.js` et `README.md` mis à jour.

## SIC-20261120-214730-2 — Présenter Keewee IA training sur la page d'accueil

- Bandeau d'accueil : nom « Keewee IA training » et nouvelle phrase d'accroche (« Nous formons vos équipes aux outils d'intelligence artificielle… »).
- Deux boutons dans le bandeau : « Nous contacter » (vers `contact.html`) et « Découvrir l'offre » (ancre `#offre`).
- Section « Notre offre » : deux cartes, Formations aux outils IA et Coaching IA personnalisé, avec leurs points clés.
- Section « Pour qui ? » : public visé et trois atouts (Concret, Accessible, Sur mesure).
- Bandeau final d'appel à l'action « Prendre contact » vers `contact.html`.
- Styles `.hero__actions`, `.btn--ghost`, `.offer-list`, `.offer-card`, `.benefit-list`, `.benefit` et `.cta-band` dans `assets/css/style.css` (une colonne sur mobile, plusieurs sur grand écran).

## SIC-20261120-214730-4 — Afficher les projets et formations réalisés dans le portfolio

- Page `portfolio.html` : remplacement de l'emplacement « Réalisations à compléter » par une liste de cartes (type, date, titre, courte description).
- Filtre par type (Tout / Projets / Formations) : boutons avec `aria-pressed`, nombre d'éléments par type, nombre d'éléments affichés annoncé dans une zone `aria-live`.
- Contenu du portfolio dans `assets/js/portfolio-data.js` : ajouter une entrée dans ce fichier suffit à la faire apparaître, sans toucher au code.
- Affichage et filtrage dans `assets/js/portfolio.js` ; tri de la plus récente à la plus ancienne quand la date est au format `AAAA-MM` ou `AAAA-MM-JJ`.
- Styles `.portfolio-filters`, `.filter-btn`, `.portfolio-list` et `.portfolio-card` dans `assets/css/style.css` (une colonne sur mobile, deux sur grand écran).
- Entrées d'exemple à remplacer par les vraies réalisations.

## SIC-20261120-214730-3 — Afficher les informations de contact

- Page `contact.html` : remplacement de l'emplacement « Coordonnées à compléter » par trois cartes de contact (E-mail, Téléphone, LinkedIn).
- Lien e-mail en `mailto:` (ouvre le client de messagerie), lien téléphone en `tel:` (appel direct sur mobile).
- Lien LinkedIn ouvert dans un nouvel onglet (`target="_blank"`, `rel="noopener noreferrer"`), signalé aux lecteurs d'écran.
- Styles `.contact-list`, `.contact-card` et classe utilitaire `.visually-hidden` dans `assets/css/style.css` (une colonne sur mobile, trois sur grand écran).
- Coordonnées réelles à compléter (emplacements repérés par des commentaires HTML).

## SIC-20261120-214730 — Mettre en place la charte graphique et la structure du site

- Création de la charte graphique dans `assets/css/style.css` : variables CSS (vert sombre `#0b3d2e`, blanc, accent `#4fd1a5`), typographie système, espacements.
- Création des trois pages `index.html`, `contact.html` et `portfolio.html` avec en-tête, menu et pied de page communs.
- Menu principal Accueil / Contact / Portfolio, page courante signalée par `aria-current="page"`.
- Menu mobile repliable et accessible au clavier (`aria-expanded`, touche Échap) dans `assets/js/main.js`.
- Mise en page « mobile d'abord », sans défilement horizontal dès 360 px.
- Emplacements de contenu à compléter sur chaque page.
- Création de `README.md` et du dossier `assets/img/`.
