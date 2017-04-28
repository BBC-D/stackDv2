

exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', (table) => {
    table.increments();
    table.string('Title')
    table.string('description')
    table.string('tech').notNullable();
    table.integer('owner').references('personal')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('project');
};
