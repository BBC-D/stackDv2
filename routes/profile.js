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
  res.render('experience');

})

router.get('/profile/:user_name/experience/beginner', (req,res) => {
  res.render()
})

router.get('/profile/:user_name/experience/intermediate', (req,res) => {
  res.render()
})

router.get('/profile/:user_name/experience/advanced', (req,res) => {
  res.render()
})



module.exports = router;
