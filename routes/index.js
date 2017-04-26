var express = require('express');
var pg = require('../db/knex');
var router = express.Router();
const bcrypt = require('bcrypt');
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

//
// function hashPassword(){
//   bcrypt.hash(req.body.password, 10).then(function(hash){
//     req.body.password = hash;
//     console.log(req.body);
//     queries.userTable(req.body)
//     .then(function(){
//       res.send('new user')
//     })
//   })
// }
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', (req, res) =>{
  var user = req.body;
  var pass = hashPassword(user.password)

  pg('personal').select().where('user_name', user.user_name).then((info) => {

    if (info[0].password == pass) {
    res.render('profile', {user: info[0]})
    }else{
      res.redirect('/');
    }
  })
})

module.exports = router;
