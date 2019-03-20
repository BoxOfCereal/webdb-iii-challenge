const express = require('express');
const router = express.Router();
const db = require('../data/helpers/cohortsModel.js');


router.get('/', (req, res) => {
  db.findAll()
    .then(cohorts => res.status(200)
      .json(cohorts))
    .catch(error => res.status(500)
      .json({ error: "The cohorts could not be retrieved." }));
});

router.post('/', (req, res) => {
  const newCohort = req.body;
  db.add(newCohort)
    .then(id => {
      db.findById(id)
        .then(cohort => res.status(201)
        .json(cohort))
    })
    .catch(error => res.status(500)
      .json({ error: "The cohorts could not be created." }));
});

router.get('/:id', (req, res) => {
  const { id } = req.params;
  db.findById(id)
    .then(cohort => res.status(200)
      .json(cohort))
    .catch(error => res.status(500)
      .json({ error: "The cohorts could not be retrieved." }));
});


module.exports = router;