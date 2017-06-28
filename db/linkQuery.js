var knex = require('./knex')



function projectInfo(user_id) {
  return knex('projects')
    .fullOuterJoin('projects_users', 'projects.project_id', 'projects_users.projects_id')
    .fullOuterJoin('users', 'users.user_id', 'projects_users.users_id')
    .select('title','genre','description','coverPic', 'fName', 'lName', 'user_id', 'project_id')
}

const beginner = {
  lang1: 'HTML',
  lang2: 'CSS',
  lang3: 'jQuery',
  lang4: 'Node.js'
}

const intermediate = {
  lang1: 'HTML & CSS',
  lang2: 'jQuery',
  lang3: 'Node.js',
  lang4: 'Herokue'
}

const fullStack = {
  lang1: 'Angular',
  lang2: 'Sass',
  lang3: 'Node.js',
  lang4: 'Heroku'
}
// 
// function skillLevel(userSkill) {
//   userSkill = knex('projects').select().where('id', id)
//
//   if(userSkill === 'beginner') {
//      res.render('singleview', )
//   } else if (userSkill === 'intermediate'){
//     Getting Better
//   }
// }

module.exports = {
  projectInfo
}
