var express = require('express');
var pg = require('../db/knex');
var router = express.Router();
const bcrypt = require('bcrypt');
const saltRounds = 10;


// bcrypt.genSalt(saltRounds, (err, salt) =>{
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


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', (req, res) =>{
  var user = req.body;
  pg('personal').select().where('user_name', user.user_name).then((info) => {
    bcrypt.compare(user.password, info[0].password).then((pass) => {
      if (pass) {
        res.render('profile', {user: info[0]});
      }else{
        res.redirect('/');
      }
    })
  });
});


module.exports = router;
