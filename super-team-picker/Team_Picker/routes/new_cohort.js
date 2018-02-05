const express = require('express');
const router = express.Router();

const knex = require('../db');

// PATH: /new_cohort VERB: GET
router.get('/', (req, res) => {
  res.render('new_cohort');
});

// PATH: /new_cohort VERB: POST
router.post('/', (req, res) => {
  const logoUrl = req.body.logoUrl;
  const cohortName = req.body.cohortName;
  const members = req.body.members.replace(/\s+,/g, ',').replace(/,\s+|,/g, ', ');

  knex
  .insert({
    'logo_url': logoUrl,
    'cohort_name': cohortName,
    'members': members
  })
  .into('cohorts')
  .then(() => {
    res.redirect('/cohorts');
  });
});

module.exports = router;
