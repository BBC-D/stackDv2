
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('personal').del()
    .then(function () {
      // Inserts seed entries
      return knex('personal').insert([
        {
          first_name:'John',
          last_name:'Smith',
          email:'jsmith@smith.com',
          password:'password',
          user_name:'jsmaster'
        },
        {
          first_name:'Johny',
          last_name:'Smith',
          email:'jysmith@smith.com',
          password:'password',
          user_name:'javamaster'
        },
        {
          first_name:'deb',
          last_name:'Smith',
          email:'dsmith@smith.com',
          password:'password',
          user_name:'gamemaster'
        }
      ]);
    });
};
