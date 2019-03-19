const db = require('../dbConfig.js');

module.exports = {
  findAll: id => {
    return db('cohorts');
  }
}