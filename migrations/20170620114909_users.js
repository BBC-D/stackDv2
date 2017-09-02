exports.up = function(knex, Promise) {
  return knex.schema.createTable('users', (table) =>{
    table.increments('user_id');
    table.string('email').unique().notNullable();
    table.string('user_name').unique().notNullable();
    table.string('password').notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('users')
};
