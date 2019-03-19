exports.up = function(knex, Promise) {
  return knex.schema.createTable('students', table => {
    table.increments(); //primary key
    table.string('name', 255)
      .notNullable();
    table.integer('cohort_id')
      .references('id')
      .inTable('cohorts')
      .onDelete('CASCADE')
      .onUpdate('CASCADE');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('students');
};