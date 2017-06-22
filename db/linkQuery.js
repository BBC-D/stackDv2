var knex = require('./knex')



function projectInfo(user_id) {
  return knex('projects')
    .fullOuterJoin('projects_users', 'projects.project_id', 'projects_users.projects_id')
    .fullOuterJoin('users', 'users.user_id', 'projects_users.users_id')
    .select('title','genre','description','coverPic', 'fName', 'lName', 'user_id', 'project_id')
}

module.exports = {
  projectInfo
}
