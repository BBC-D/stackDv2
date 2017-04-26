var express = require('express');
var pg = require('../db/knex');
var router = express.Router();
var bcrypt = require('bcrypt');
const saltRounds = 10;





// bcrypt.genSalt(saltRounds, password, (err, salt, password) =>{
//   if(err){
//     console.error(err)
//     process.exit()
//   }
//   console.log('salt', salt)
//
//   bcrypt.hash(password, salt, (err, hash) =>{
//     if(err){
//       console.error(err)
//       process.exit()
//
//       }
//       console.log('hash', hash)
//   })
// })
//
// bcrypt.compare(password, hash, (err, isMatch) =>{
//   if(err){
//     console.error(err)
//     process.exit()
//
//     }
//
//     console.log('ismatch', isMatch)
// })

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
