var express = require('express');
var pg = require('../db/knex');
var router = express.Router();




function hashPassword(){
  bcrypt.hash(req.body.password, 10).then(function(hash){
    req.body.password = hash;
    console.log(req.body);
    queries.userTable(req.body)
    .then(function(){
      res.send('new user')
    })
  })
}

/* GET users listing. */
router.get('/signup', function(req, res) {
  res.render('signup');
});
router.post('/signup',function(req, res) {
  console.log(req.body);
  var info = req.body;
  pg('personal').insert(info).then(()=>{
    res.redirect('/');
  })
} )

module.exports = router;
