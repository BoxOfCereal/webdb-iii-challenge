const express = require('express');
const router = express.Router();
const db = require('../data/helpers/cohortsModel.js');


router.get('/', (req, res) => {
  const { id } = req.params;
  db.findAll(id)
    .then(cohorts => res.status(200)
      .json(cohorts))
    .catch(error => res.status(500)
      .json({ error: "The cohorts could not be retrieved." }))
});


module.exports = router;