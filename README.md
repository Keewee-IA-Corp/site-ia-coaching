# Site Green Bear IA (SIC)

Site vitrine statique de **Green Bear IA**, activité de formation et de coaching en intelligence artificielle.

## Charte graphique

- Couleurs dominantes : vert sombre « jaguar » (`#0b3d2e`) et blanc.
- Accent « tech » : vert lumineux `#4fd1a5`, utilisé uniquement sur fond vert sombre.
- Style moderne et technologique : trame en grille dans les bandeaux, étiquettes en police à chasse fixe.
- Toutes les valeurs sont des variables CSS déclarées dans `:root` (`assets/css/style.css`).

## Pages

| Fichier | Rôle |
|---|---|
| `index.html` | Accueil : accroche, présentation de l'offre (formation et coaching IA), public visé, appels à l'action vers Contact |
| `contact.html` | Contact : e-mail (`mailto:`), téléphone (`tel:`) et lien LinkedIn — coordonnées à compléter |
| `portfolio.html` | Portfolio : cartes des projets et formations réalisés, filtrables par type |

L'en-tête, le menu (Accueil, Contact, Portfolio) et le pied de page sont recopiés à l'identique dans chaque page.
Un pictogramme d'ours blanc (SVG intégré, lien vers l'accueil) est centré dans l'en-tête ; sur les écrans de moins de 480 px, il passe sur sa propre ligne, sous le logo et le bouton « Menu ».
Sur mobile, le menu se replie derrière un bouton « Menu » (`assets/js/main.js`) ; sans JavaScript, il reste affiché.

## Structure

```
index.html, contact.html, portfolio.html
assets/css/style.css   feuille de style unique
assets/js/main.js      menu mobile
assets/js/portfolio-data.js  contenu du portfolio (à compléter)
assets/js/portfolio.js       affichage et filtre du portfolio
assets/img/            images
assets/img/GreenBear.png     logo affiché dans l'en-tête de chaque page
```

## Ajouter une réalisation au portfolio

Ouvrir `assets/js/portfolio-data.js`, copier un bloc `{ ... }` de la liste et remplir ses champs :
`titre`, `type` (`"projet"` ou `"formation"`), `date` (de préférence `AAAA-MM`, par exemple `"2026-03"`) et `description`.
La nouvelle entrée apparaît automatiquement sur la page Portfolio, sans autre modification.

## Ouvrir le site

Ouvrir `index.html` directement dans un navigateur : aucune installation ni serveur n'est nécessaire.
