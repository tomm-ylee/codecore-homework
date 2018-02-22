const express = require('express');
const router = express.Router();

const knex = require('../db');

// Function makeTeams contains all the code to create the randomized teams
const makeTeams = (members, maxTeams) => {
  let outArr = [];
  for (let j = 0; j < maxTeams; j += 1) {
    outArr[j] = [];
  }

  // This for loop shuffle the members array
  for (let i = 0; i < members.length; i += 1) {
    let r = Math.floor(Math.random() * members.length);
    let temp = members[i];
    members[i] = members[r];
    members[r] = temp;
  }

  let b = 0;
  while(b < 1000) {
    b += 1;

    for (let team of outArr) {
      team.push(members.pop());
      if (members.length === 0) break;
    }
    if (members.length === 0) break;
  }
  return outArr;
};

// FOLLOWING ARE ALL HTTP  ROUTES

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
      let allTeams = null;
      let members = thisCohort.members.split(',');


      if (methodType === "teamCount") {
        let maxTeams = Math.round(quantity);
        allTeams = makeTeams(members, maxTeams);
      } else if (methodType === "memberCount") {
        let maxTeams = Math.ceil(members.length / quantity);
        console.log(members);
        allTeams = makeTeams(members, maxTeams);
      }

      res.render('cohorts/show', {thisCohort, allTeams, methodType, quantity});
    })
});

// PATH: /cohorts/:id/updateUrl VERB: POST
router.post('/:id/updateUrl', (req, res) => {
  const cohortId = req.params.id;
  const logoUrl = req.body.logoUrl;

  if (logoUrl === '') {
    res.redirect(`/cohorts/${cohortId}`);
  } else {
    knex('cohorts')
    .where('id', cohortId)
    .update({'logo_url': logoUrl})
    .then(() => {
      res.redirect(`/cohorts/${cohortId}`);
    });
  }
});

// PATH: /cohorts/:id/delete VERB: POST
router.post('/:id/delete', (req, res) => {
  const cohortId = req.params.id;

  knex('cohorts')
  .where('id', cohortId)
  .del()
  .then(() => {
    res.redirect(`/cohorts`);
  });
});

module.exports = router;
