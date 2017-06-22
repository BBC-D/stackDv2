var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');


// Router Mounted at localhost3000:profile/

router.get('/:user_name', function(req, res, next) {
  var user = req.params.user_name
  knex('projects').select().then((info)=> {
    res.render('profile', { info: info,
    user_name: user });
  })
});

router.post('/', (req, res) =>{
  var user = req.body;
  knex('users').select().where('user_name', user.user_name).then((info) => {
        res.redirect('/profile/' + user.user_name);
    })
  });

  router.get('/:user_name/newidea/add', function(req, res, next) {
    var user_name = req.params.user_name
    const num = Math.floor((Math.random() * 4) + 1);
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

  router.get('/:title', function(req, res, next) {
    console.log('made it');
    var title = req.params.title
    knex('projects').select().where('title', title).then((data) => {
      res.render('singleview', data[0])
    })
  })

  router.get('/:user_name/:title', function(req, res, next) {
    console.log('made it');
    var title = req.params.title
    knex('projects').select().where('title', title).then((data) => {
        res.render('singleview',data[0])
      })
    })

    router.get('/:user_name/:title/edit', (req, res, next) => {
      var title = req.params.title
      knex('projects').select().where('title', title).then((data) => {
        res.render('edit', data[0])
      })
    })


  router.post('/user_name/:title/updated', (req, res, next) => {
    var title = req.params.title
    var project = req.body
    knex('projects').where('title', title).update({
      'title': project.title,
      'description': project.description,
      'skill': project.skill,
      'database': project.database,
      'emailList': project.emailList,
      'timeCommit': project.timeCommit,
      'mainFeature': project.mainFeature,
      'subFeature1': project.subFeature1,
      'subFeature2': project.subFeature2
    }).then((data) => {
      res.redirect('/' + title)
    })
  })

  router.get('/user_name/:title/edit/delete', (req, res, next) => {
    var title = req.params.title
    knex('projects').where('title', title).del().then(() => {
      res.redirect('/profile/' + user_name)
    })
  })




module.exports = router;
