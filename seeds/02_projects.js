
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          Title:'',
          description:'',
          experience: 1,
          tech:{
            "html": 'html',
            "css": 'css',
            "js": 'js'

          },
          owner: 1
        },
        {
          Title:'',
          description:'',
          experience: 3,
          tech:{
            "html": 'jade',
            "css": 'less',
            "js": 'angular'
          },
          owner: 1
        },
        {
          Title:'',
          description:'',
          experience: 2,
          tech:{
            "html": 'hbs',
            "css": 'scss',
            "js": 'node'
          },
          owner: 1
        }
      ]);
    });
};
