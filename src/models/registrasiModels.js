/* eslint-disable no-useless-catch */
const { v4: uuidv4 } = require('uuid');

const { pool } = require('../config/dbConfig');

const getItems = async () => {
  const result = await pool.query('SELECT * FROM registrasi');
  return result.rows;
};

const getItemById = async (id) => {
  const result = await pool.query('SELECT * FROM registrasi WHERE id=$1', [id]);
  return result.rows[0];
};

const createItem = async (data) => {
  const id = uuidv4();
  const columns = [...Object.keys(data), 'id'];
  const values = [...Object.values(data), id];

  const result = await pool.query(
    `INSERT INTO registrasi (${columns.join(', ')}) VALUES (${values.map((_, index) => `$${index + 1}`).join(', ')}) RETURNING *`,
    values,
  );
  return result;
};

const updateItemById = async (id, updatedData) => {
  const columns = Object.keys(updatedData);
  const values = Object.values(updatedData);

  const result = await pool.query(
    `UPDATE registrasi SET ${columns.map((col, index) => `${col}=$${index + 1}`).join(', ')} WHERE id=$${columns.length + 1} RETURNING *`,
    [...values, id],
  );
  return result.rows[0];
};

const deleteItemById = async (id) => {
  await pool.query('DELETE FROM registrasi WHERE id=$1', [id]);
};

const getKrs = async () => {
  const result = await pool.query('SELECT * FROM krs');
  return result.rows;
};

const getKrsById = async (id) => {
  const result = await pool.query('SELECT * FROM krs WHERE id=$1', [id]);
  return result.rows[0];
};

const createKrs = async (data) => {
  const id = uuidv4();
  const columns = [...Object.keys(data), 'id'];
  const values = [...Object.values(data), id];

  const result = await pool.query(
    `INSERT INTO krs (${columns.join(', ')}) VALUES (${values.map((_, index) => `$${index + 1}`).join(', ')}) RETURNING *`,
    values,
  );
  return result;
};

const updateKrsById = async (id, updatedData) => {
  const columns = Object.keys(updatedData);
  const values = Object.values(updatedData);

  const result = await pool.query(
    `UPDATE krs SET ${columns.map((col, index) => `${col}=$${index + 1}`).join(', ')} WHERE id=$${columns.length + 1} RETURNING *`,
    [...values, id],
  );
  return result.rows[0];
};

const deleteKrsById = async (id) => {
  await pool.query('DELETE FROM krs WHERE id=$1', [id]);
};

module.exports = {
  getItems,
  getItemById,
  createItem,
  updateItemById,
  deleteItemById,
  getKrs,
  getKrsById,
  createKrs,
  updateKrsById,
  deleteKrsById,
};
