var pg = require('./knex')


function getAll(){
 return pg('post').select()
}
function editProfile(column , data) {
  return pg('personal').update();

}

function editProfile(column , data) {
  return pg('personal').update();

}

function add(obj){
 return pg('project').insert(obj)
}

function findUserIfExists(obj){
 return pg('myusers').select()
}

function userTable(obj){
 return pg('myusers').insert({
   email: obj.email,
   password: obj.password
 })
}


module.exports = {
  add,
  userTable,
  findUserIfExists
}
