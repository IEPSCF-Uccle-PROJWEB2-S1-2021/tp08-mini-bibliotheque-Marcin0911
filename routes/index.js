const express = require('express');
const router = new express.Router();
// eslint-disable-next-line require-jsdoc
function Livre(author, title, category){
  this.author = author;
  this.title = title;
  this.category = category;
}

const livre1  = new Livre("Guillaume Debré", "L'affaire Lafayette", "Roman historique");
const livre2  = new Livre("Gérald Messadié", "La conspiration Jeanne d'Arc", "Roman historique");
const livre3  = new Livre("J.R.R. Tolkien", "Le seigneur des anneaux", "Fantaisie");
const livre4  = new Livre("Michael Ende", "L'Histoire sans fin", "Fantaisie");
const livre5  = new Livre("Andrzej Sapkowski", "Le Sorceleur", "Fantaisie");
const livre6  = new Livre("Geroge R. R. Martin" , "Le Trône de fer", "Fantaisie");
const livre7  = new Livre("Hervé Bazin", "Vipère au poing", "Autobiographie");
const livre8  = new Livre("Marie Cardinal", "Les mots pour le dire", "Autobiographie");
const livre9  = new Livre("Giacomo Casanova", "Histoire de ma vie", "Autobiographie");

const tableauLivres = [livre1, livre2, livre3, livre4, livre5, livre6, livre7, livre8, livre9]

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs', { title: 'Mini-bibliothèque' });
});

router.get('/books/search', function (req, res, next) {
  res.render('index.ejs', {
    title: 'Mini-bibliothèque'
  });
});


router.post('/books/list', function (req, res, next){
  const newTab = [];
  let a = 0;
  for(let i = 0; i < tableauLivres.length; i++){
    if(tableauLivres[i].category === req.body.categories){
      newTab[a] = tableauLivres[i];
      a++;
    }
  }
  const length = newTab.length;
  res.render('resultat.ejs',{
   title : 'Résultat recherche',
   message : "Voici ce que vous avez recherché : " + req.body.categories,
   resultat : req.body.categories,
   newTab : newTab,
   longueur : length
  })
});

module.exports = router, tableauLivres;

