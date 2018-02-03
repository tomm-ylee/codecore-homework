const express = require('express');
const router = express.Router();

const knex = require('../db');

// index#GET
router.get('/', (req, res) => {
  res.render('index');
});

module.exports = router;
