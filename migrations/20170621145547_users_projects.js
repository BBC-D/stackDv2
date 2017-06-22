exports.up = function(knex, Promise) {
  return knex.schema.createTable('projects_users', function(table){
    table.increments()
    table.integer('users_id').references('users.user_id').onDelete('CASCADE');
    table.integer('projects_id').references('projects.project_id').onDelete('CASCADE');
    })
  }

exports.down = function(knex, Promise) {
 return knex.schema.dropTable('users_projects')
};
