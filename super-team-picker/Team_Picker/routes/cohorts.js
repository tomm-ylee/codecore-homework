const express = require('express');
const router = express.Router();

const knex = require('../db');

const byTeamsCount = (cohortMembers, quantity) => {

};

// PATH: /cohorts VERB: GET
router.get('/', (req, res) => {
  knex
  .select()
  .from('cohorts')
  .orderBy('created_at', 'DESC')
  .then(allCohorts => {
    res.render('cohorts', {allCohorts});
  });
});

// PATH: /cohorts/:id VERB: GET
router.get('/:id', (req, res) => {

  const methodType = req.query.methodType
  const quantity = req.query.quantity

  const cohortId = req.params.id;
  if (isNaN(parseInt(cohortId, 10))) res.redirect('/');

  knex
    .first()
    .from('cohorts')
    .where({id: cohortId})
    .then(thisCohort => {
      let allTeams = [['a', 'b', 'c'], ['d', 'e']];
      let cohortMembers = thisCohort.members;


      if (methodType === "teamCount") {
        allTeams = byTeamsCount(cohortMembers, quantity);
      } else if (methodType === "memberCount") {
        allTeams = byMemberCount(cohortMembers, quantity);
      }

      res.render('cohorts/show', {thisCohort, allTeams});
    })
});


module.exports = router;
