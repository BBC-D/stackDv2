var express = require('express');
var pg = require('../db/knex');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.post('/', (req, res) =>{
  var user = req.body;

  pg('personal').select().where('user_name', user.user_name).then((info) => {

    if (info[0].password == user.password) {
    res.render('profile', {user: info[0]})
    }else{
      res.redirect('/');
    }
  })
})

module.exports = router;
