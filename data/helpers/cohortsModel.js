const db = require('../dbConfig.js');

module.exports = {
  findAll: id => {
    return db('cohorts');
  },
  findById: id => {
    return db('cohorts')
      .where({ id: id })
  },



}