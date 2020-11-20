# TP08 - Mini-bibliothèque

Votre objectif pour ce TP est de réaliser un mini-site affichant une collection de livres.
Un formulaire permet de choisir la catégorie littéraire.
En appuyant sur un bouton, vous arrivez sur une autre page présentant la collection correspondante.

## Consignes

- Le serveur HTTP sera implémenté à l'aide d'express.js dans le script `app.js`.
- La mise en forme et la mise en page du formulaire et de la page d'affichage des livres seront assurées par une feuille de style CSS.
  Vous êtes libres de vos choix de design mais la présentation des deux pages doit être soignée et professionelle.
- Le formulaire de choix de catégorie peut être une page statique HTML ou générée à partir d'un template `ejs`.
  Il présentera le choix de catégorie à l'aide d'une liste déroulante.
  Un bouton permettra de lancer la recherche.
- La page d'affichage de la collection est générée à partir d'un template pug.
  Elle présentera le titre et l'auteur de chaque livre appartenent à la catégorie sélectionnée sous forme de tableau.
  Un lien hypertexte permettra de revenir facilement au formulaire de recherche.
- Les méthodes HTTP et URLs suivantes seront utilisées :
  - `GET /books/search` : affiche un formulaire de recherche, idéalement en direct, une redirection vers une page statique est tolérée.
  - `POST /books/list` : affiche les livres recherchés.
  - `GET /` : redirige vers `/books/search`.
- Les livres seront stockés dans `routes/index.js` sous forme d'un tableau d'objets.
  Ces objets contiendront les propriétés `author`, `title` et `category`.

## Liste de livres

Voici une liste de livres.
Votre code doit contenir au moins ceux-ci.
Vous êtes libres d'en ajouter.

| auteur              | titre                        | catégorie        |
| ------------------- | ---------------------------- | ---------------- |
| Guillaume Debré     | L'affaire Lafayette          | roman historique |
| Gérald Messadié     | La conspiration Jeanne d'Arc | roman historique |
| J.R.R. Tolkien      | Le Seigneur des anneaux      | fantasy          |
| Michael Ende        | L'Histoire sans fin          | fantasy          |
| Andrzej Sapkowski   | Le Sorceleur                 | fantasy          |
| George R. R. Martin | Le Trône de fer              | fantasy          |
| Hervé Bazin         | Vipère au poing              | autobiographie   |
| Marie Cardinal      | Les mots pour le dire        | autobiographie   |
| Giacomo Casanova    | Histoire de ma vie           | autobiographie   |

## Remarques

1. Ce repository est configuré pour ne pas sauvegarder le répertoire `node_modules`.
   Ne changez pas ce réglage.

   Par contre, il vous faudra exécuter la command `npm install` avant de pouvoir démarrer votre serveur avec `npm start` ou `npm run dev`.
2. Vous trouverez un certain nombre de fichiers de configuration (`.elintrc.js`, `.prettierignore`, `.prettierrc.js`) dans ce repository. Leur rôle est de configurer les aides de VSCode pour vous éviter de commettre des erreurs et améliorer votre style. S'ils vous perturbent, vous pouvez les supprimer. Par contre, ne supprimez pas `.editorconfig` et `.gitignore`.
