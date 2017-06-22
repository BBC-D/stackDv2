var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');


// Router Mounted at localhost3000:profile/

router.get('/:user_name', function(req, res, next) {
  console.log(req.params);
  var user = req.params.user_name
  knex('projects').select().then((info)=> {
    res.render('profile', { info: info,
    user_name: user });
  })
});

router.post('/', (req, res) =>{
  var user = req.body;
  knex('users').select().where('user_name', user.user_name).then((info) => {
    console.log(info[0].id);
        res.redirect('/profile/' + user.user_name);
    })
  });

  router.get('/:user_name/newidea/add', function(req, res, next) {
    var user_name = req.params.user_name
    const num = Math.floor((Math.random() * 4) + 1);
    // var id = req.params.id
    const type = [{
        type: 'My Idea',
        adj: 'Great',
        user_name: user_name
      },
      {
        type: 'My Project',
        adj: 'Bigly Successful',
        user_name: user_name
      },
      {
        type: 'My Website',
        adj: 'Mobile Ready',
        user_name: user_name
      },
      {
        type: 'My App',
        adj: 'Go Viral',
        user_name: user_name
      },
      {
        type: 'My Business',
        adj: 'Efficient',
        user_name: user_name
      }
    ];
    // knex('users').select().where('id', id).then(() => {
      res.render('newIdea', type[(num)]);
  });

  router.post('/:user_name/newidea/completed', (req,res,next) => {
    var user_name = req.params.user_name
    var body = req.body
    knex('projects').insert({
      title: body.title,
      description: body.description,
      skill: body.skill,
      database: body.database,
      emailList: body.emailList,
      timeCommit: body.timeCommit,
      mainFeature: body.mainFeature,
      subFeature1: body.subFeature1,
      subFeature2: body.subFeature2
    }).then(() => {
      res.redirect('/profile/' + user_name)
    })
  })

module.exports = router;
