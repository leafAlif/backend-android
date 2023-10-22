const { pool } = require('../config/dbConfig');

const getItems = (req, res) => {
  pool.query('SELECT * FROM registrasi', (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      return;
    }
    res.json(result.rows);
  });
};

module.exports = { getItems };
