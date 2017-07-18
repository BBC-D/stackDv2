
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email:'jsmith@smith.com',
          password:'password',
          user_name:'jsmaster'
        },
        {
          email:'jysmith@smith.com',
          password:'password',
          user_name:'javamaster'
        },
        {
          email:'dsmith@smith.com',
          password:'password',
          user_name:'gamemaster'
        }
      ]);
    });
};
