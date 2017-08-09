var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');
var bcrypt = require('bcryptjs')


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


router.post('/login', function(req, res, next) {
  knex('users').select().where('user_name', req.body.user_name).first()
  .then(function(user){
    console.log(user);
    if(user){
      bcrypt.compare(
        req.body.password, user.password
      ).then(function(data){
        console.log(user.password);
        console.log('HELLOHELLO' , user.user_name);
        console.log(data);
        // console.log('USERUSERUSER' , user.id);
        if(data){
          // req.session.id = user.id
          res.redirect('/profile/' + user.user_name)
        } else {
          res.redirect('/no/can/do/')
        }
      })
    } else {
      res.redirect('/invalid/creds')
    }
  })
})

router.get('/invalid/creds', (req,res, next) => {
  res.send("Invalid credentials. Please try again <a href='/'>here</a>.")
})




router.get('/:title', function(req, res, next) {
  console.log('made it');
  var title = req.params.title
  knex('projects').select().where('title', title).then((data) => {
      res.render('singleview',data[0])
    })
  })

  router.get('/:title/edit', (req, res, next) => {
    var title = req.params.title
    knex('projects').select().where('title', title).then((data) => {
      res.render('edit', data[0])
    })
  })


router.post('/:title/updated', (req, res, next) => {
  var title = req.params.title
  var project = req.body
  knex('projects').where('title', title).update({
    'title': project.title,
    'description': project.description,
    'skill': project.skill,
    'database': project.database,
    'emailList': project.emailList,
    'timeCommit': project.timeCommit,
    'mainFeature': project.mainFeature,
    'subFeature1': project.subFeature1,
    'subFeature2': project.subFeature2
  }).then((data) => {
    res.redirect('/' + title)
  })
})

router.get('/:title/edit/delete', (req, res, next) => {
  var title = req.params.title
  knex('projects').where('title', title).del().then(() => {
    res.redirect('/profile/' + user_name)
  })
})


// Signup Page
router.get('/signup/forthebestwebsiteever', function(req, res, next) {
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
  res.render('signup', langSet[(num)]);
});

// router.post('/signup/newestuser', (req,res,next) => {
//   knex('projects').update({
//
//   })
// })



//router mounted at localhost:3000/signup
router.post('/signup/newestuser', function(req,res,next){
  knex('users').select().where(
    'user_name', req.body.user_name
  ).first().then((user)=>{
    if(user){
      console.log('you already have an account with us');
      res.redirect('/try/again/please/')
    } else {
      bcrypt.hash(req.body.password,10)
        .then((hash) => {
          var user = req.body;
          user.password = hash
          knex('users').insert({
            user_name: user.user_name,
            email: user.email,
            password: user.password
          }).then(function(){
            knex('users').where(
              'user_name', user.user_name
            ).first().then(function(user){
              res.redirect('/profile/' + user.user_name)
            })
          })
        })
    }
  })
})





module.exports = router;
