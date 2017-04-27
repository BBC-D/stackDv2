var pg = require('./knex')


function getAll(){
 return pg('post').select()
}

function add(obj){
 return pg('post').insert(obj)
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
 getAll,
 add,
 findUserIfExists,
 userTable
}
