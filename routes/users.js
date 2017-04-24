var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/signup', function(req, res) {
  res.render('signup');
});
router.post('/',function(req, res) {
  console.log(req.body);
} )

module.exports = router;
