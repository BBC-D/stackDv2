exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects', (table) => {
    table.increments('project_id');
    table.string('title').notNullable();
    table.string('description')
    table.string('skill')
    table.string('database')
    table.string('emailList')
    table.string('timeCommit')
    table.string('mainFeature')
    table.string('subFeature1')
    table.string('subFeature2')
    table.integer('owner').references('users')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('projects');
};
