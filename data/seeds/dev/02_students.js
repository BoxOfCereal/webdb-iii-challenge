exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function() {
      // Inserts seed entries
      return knex('students').insert([
        { name: 'Noah', cohort_id: 1 },
        { name: 'James', cohort_id: 2 },
        { name: 'Alex', cohort_id: 1 }
      ]);
    });
};