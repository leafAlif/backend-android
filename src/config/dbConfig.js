/* eslint-disable no-console */
const { Pool } = require('pg');
const { envConfig } = require('./envConfig');

const pool = new Pool({
  user: envConfig.PG_DB_USER,
  host: envConfig.PG_DB_HOST,
  database: envConfig.PG_DB_NAME,
  password: envConfig.PG_DB_PASSWORD,
  port: envConfig.PG_DB_PORT,
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log(`Connected to PostgreSQL [${envConfig.PG_DB_NAME}] on [${res.rows[0].now}]`);
  }
});

module.exports = { pool };
