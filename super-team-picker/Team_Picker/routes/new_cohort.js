const express = require('express');
const router = express.Router();

const knex = require('../db');

// new_cohort#GET
router.get('/', (req, res) => {
  res.render('new_cohort');
});

// new_cohort#POST
router.post('/', (req, res) => {
  const logoUrl = req.body.logoUrl;
  const cohortName = req.body.cohortName;
  const members = req.body.members.replace(/,\s+/g, ',');

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
