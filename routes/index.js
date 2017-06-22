var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  const num = Math.floor((Math.random() * 3) + 1);
  const langSet = [{
    lang1: 'HTML5',
    lang2: 'CSS',
    lang3: 'Javascript',
    lang4: 'Node.js',
    logo: '../images/galvanize-logo.png',
    logo1: '../images/brider-logo.png'
  },
  {
    lang1: 'HTML',
    lang2: 'Sass',
    lang3: 'jQuery',
    lang4: 'Node.js',
    logo: '../images/galvanize-logo.png',
    logo1: '../images/brider-logo.png'
  },
  {
    lang1: 'Angular',
    lang2: 'Sass',
    lang3: 'Node.js',
    lang4: 'Heroku',
    logo: '../images/galvanize-logo.png',
    logo1: '../images/brider-logo.png'
  },
  {
    lang1: 'React.js',
    lang2: 'Redux',
    lang3: 'Node.js',
    lang4: 'Heroku',
    logo: '../images/galvanize-logo.png',
    logo1: '../images/brider-logo.png'
  }
]
  res.render('index', langSet[(num)]);
});

module.exports = router;
