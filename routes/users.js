var express = require('express');
var pg = require('../db/knex');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;

/* GET users listing. */
router.get('/signup', function(req, res) {
  res.render('signup');
});

router.post('/signup',function(req, res) {
  console.log(req.body);
  var info = req.body;
  bcrypt.hash(info.password, saltRounds, function(err, hash) {
    pg('personal').insert({
      first_name: info.first_name,
      last_name: info.last_name,
      email: info.email,
      password: hash,
      user_name: info.user_name,
  }).then(()=>{
    res.redirect('/')
  });
});
});

module.exports = router
