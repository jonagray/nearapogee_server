'use strict';

const Pool = require("pg").Pool;
require('dotenv').config();

const pool = new Pool({
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE
});

module.exports = pool;