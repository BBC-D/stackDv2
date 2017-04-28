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

router.get('/:user_name/experience', (req, res) =>{
  var user = req.params.user_name
  res.render('experience', {user:user});
})


router.get('/:user_name/experience/beginner', (req,res) => {
  res.render('beginner')
})

router.get('/:user_name/experience/intermediate', (req,res) => {
  res.render('intermediate')
})


router.get('/:user_name/experience/advanced', (req,res) => {


})
router.get('/profile/:user_name/experience/advanced', (req,res) => {

  res.render('advanced')
})

router.get('/:user_name/edit', (req, res) => {
  var user = req.params.user_name
  console.log(user);
  res.render('editProfile', {user})
})
router.post('/:user_name/edit', (req ,res) => {
  var user = req.params.user_name
  console.log(user);
  pg('personal').update('bio', req.body.bio).where('user_name', user).then(()=>{
    res.redirect('/profile/'+ user);
  })

})


router.get('/:user_name/project.title', (req, res) => {
  var title = req.params.title
  console.log(title);
  res.render('singleview', {title})
})
router.post('/:user_name/project.title', (req ,res) => {
  var user = req.params.user_name
  console.log(user);
  pg('project').update('bio', req.body.bio).where('user_name', user).then(()=>{
    res.redirect('/profile/'+ {title:title});
  })

})


















module.exports = router;
