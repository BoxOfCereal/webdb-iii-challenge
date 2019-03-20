const db = require('../dbConfig.js');

module.exports = {
  findAll: id => {
    return db('cohorts');
  },
  findById: id => {
    return db('cohorts')
      .where({ id: id })
  },
  add: cohort => {
    return db.insert(cohort)
      .into('cohorts')
      .then(ids => ids[0])

  }


}