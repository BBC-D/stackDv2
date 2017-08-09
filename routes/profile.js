var express = require('express');
var router = express.Router();
var linkQuery = require('../db/linkQuery');
var knex = require('../db/knex');


// Router Mounted at localhost3000:profile/

var viewData = {
    itemSize: 20,
    items: [
        'Zimbabwe', 'dog', 'falafel'
    ]
};

router.get('/:user_name', function(req, res, next) {
  var user_name = req.params.user_name
  knex('projects').select().then((info)=> {
    // console.log(info[0]);
    for (let i = 0; i < info.length; i++) {
      info[i].user = user_name
    }
    var big = {
      info: info,
      user_name: user_name
    }
    console.log(big);
    res.render('profile',{ big } );
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

  router.get('/:user_name/:title', function(req, res, next) {
    console.log('made it');
    var user_name = req.params.user_name;
    var title = req.params.title;
    knex('projects').select().where('title', title).then((info) => {
      // var big = {
      //   info: info[0],
      //   user_name: user_name
      // }
      if(info[0].skill === 'beginner') {
        res.render('singleview', {
          info: info[0],
          user_name: user_name,
          lang1: 'HTML',
          lang2: 'CSS',
          lang3: 'jQuery',
          lang4: 'Node.js'
        })
      } else if(info[0].skill === 'intermediate') {
        res.render('singleview', {
          info: info[0],
          user_name: user_name,
          lang1: 'HTML & Sass',
          lang2: 'jQuery',
          lang3: 'Node.js',
          lang4: 'Heroku'
        })
      } else if(info[0].skill === 'advanced') {
        res.render('singleview', {
          info: info[0],
          user_name: user_name,
          lang1: 'Angular 4',
          lang2: 'Sass',
          lang3: 'Node.js',
          lang4: 'Heroku'
        })
      }
    })
  })

    router.get('/:user_name/:title/edit', (req, res, next) => {
      var user_name = req.params.user_name
      var title = req.params.title
      knex('projects').select().where('title', title).then((info) => {
        var big = {
          info: info[0],
          user_name: user_name
        }
        res.render('edit', { big })
      })
    })

  router.post('/:user_name/:project_id/updated', (req, res, next) => {
    var user_name = req.params.user_name
    var id = req.body.project_id
    var project = req.body
    console.log(project);
    console.log('stuff');
    knex('projects').where('project_id', id).update({
      'project_id': project.project_id,
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
      res.redirect('/profile/' + user_name + '/' + project.title)
    })
  })

  router.get('/:user_name/:title/edit/delete', (req, res, next) => {
    var user_name = req.params.user_name
    var title = req.params.title
    knex('projects').where('title', title).del().then((info) => {
      res.redirect('/profile/' + user_name)
    })
  })




module.exports = router;
