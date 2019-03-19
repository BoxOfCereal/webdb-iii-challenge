exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', table => {
    table.increments(); //primary key
    table.string('name', 255)
      .notNullable();
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};