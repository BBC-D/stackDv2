
exports.up = function(knex, Promise) {
  return knex.schema.createTable('project', (table) => {
    table.increments();
    table.string('Title').notNullable();
    table.string('description');
    table.integer('experience').default(1).notNullable();
    table.json('tech').notNullable();
    table.integer('owner').references('personal')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('project');
};
