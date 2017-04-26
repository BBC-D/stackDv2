var express = require('express');
var pg = require('../db/knex');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;
const password = res.body.password;
var salt = bcrypt.genSaltSync(saltRounds);
var hash = bcrypt.hashSync(password, salt);





bcrypt.genSalt(saltRounds, (err, salt) =>{
  if(err){
    console.error(err)
    process.exit()
  }
  console.log('salt', salt)

  bcrypt.hash(password, salt, (err, hash) =>{
    if(err){
      console.error(err)
      process.exit()

      }
      console.log('hash', hash)
  })
})

bcrypt.compare(password, hash, (err, isMatch) =>{
  if(err){
    console.error(err)
    process.exit()

    }

    console.log('ismatch', isMatch)
})

/* GET users listing. */
router.get('/signup', function(req, res) {
  res.render('signup');
});
router.post('/signup',function(req, res) {
  console.log(req.body);
  var info = req.body;
  var pass = hashPassword(info.password);
  pg('personal').insert({
    first_name: info.first_name,
    last_name: info.last_name,
    email: info.email,
    password: pass,
    user_name: info.user_name,

  }).then(()=>{
    res.redirect('/');
  })
} )

module.exports = router;
