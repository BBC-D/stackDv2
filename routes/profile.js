var express = require('express');
var pg = require('../db/knex');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;

/* Router mounted at "url/profile/" */
router.get('/:user_name', (req, res) =>{
  var user = req.params.user_name
  pg('personal').select().where('user_name', user).then((info) => {
    res.render('profile', {user: info[0]});
  })
})


router.post('/', (req, res) =>{
  var user = req.body;
  pg('personal').select().where('user_name', user.user_name).then((info) => {
    console.log(info[0].id);
    bcrypt.compare(user.password, info[0].password).then((pass) => {
      if (pass) {
        // pg('personal').join('project').where('personal.id','project.owner').then((user) => {
          res.redirect('/profile/' + user.user_name);
        // })
      }else{
          res.redirect('/');
      }
    })
  });
});


router.post('/:user_name/experience/advanced', (req,res) => {
var user = req.params.user_name
  pg('project').insert({
    Title: req.body.Title;
    description: req.body.description,
    tech: getteck(),
    owner: pg('personal').select('id').where('user_name', user)
  })
})
router.get('/:user_name/experience', (req, res) =>{
  var user = req.params.user_name

  res.render('experience', {user});

})

router.post('/:user_name/experience/advanced', (req,res) => {
var user = req.params.user_name

})
router.get('/:user_name/experience/beginner', (req,res) => {
  var user = req.params.user_name
  res.render('beginner', {user})
})

router.post('/:user_name/experience/advanced', (req,res) => {
var user = req.params.user_name

})
router.get('/:user_name/experience/intermediate', (req,res) => {
  var user = req.params.user_name
  res.render('intermediate', {user})
})


router.post('/:user_name/experience/advanced', (req,res) => {
var user = req.params.user_name

})
router.get('/:user_name/experience/advanced', (req,res) => {
var user = req.params.user_name
  res.render('advanced', {user})
})





router.get('/:user_name/edit', (req, res) => {
  var user = req.params.user_name

  res.render('editProfile', {user})
})
router.post('/:user_name/edit', (req ,res) => {
  var user = req.params.user_name


  pg('personal').update(req.body).where('user_name', user).then(()=>{

    res.redirect('/profile/'+ user);
  })
})

// router.get('/:user_name/', (req, res) => {
//   var Title = req.params.Title
//   console.log(Title);
//   res.render('singleview', {Title})
// })


router.post('/project/beginner', (req ,res) => {


  console.log(req.body);
  var project = {
    Title: req.body.Title,
    description: req.body.description,
    tech: req.body.tech
  }
  // res.json({project});
  pg('project')
    .insert(project, 'project.Title')
    .then(Titles => {
      const Title = Titles[0]

      res.render('singleview', {project})

  })
  // pg('project').update('created-project', req.body).where('Title', Title).then(()=>{
  //   console.log(req.body)
  //   res.redirect('/singleview/'+ {Title:Title});
  // })

})


















module.exports = router;
