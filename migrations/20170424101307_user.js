
exports.up = function(knex, Promise) {
  return knex.schema.createTable('personal', (table) =>{
    table.increments();
    table.string('first_name').notNullable();
    table.string('last_name').notNullable();
    table.string('email').unique().notNullable();
    table.string('user_name').unique().notNullable();
    table.string('password').notNullable();
    table.string('profPic').default('./public/images/empty-profile1.jpg');
    table.string('bio').default('I need help');

  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('personal')
};
