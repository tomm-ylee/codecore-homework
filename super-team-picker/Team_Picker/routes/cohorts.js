const express = require('express');
const router = express.Router();

const knex = require('../db');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('cohorts');
});

module.exports = router;
