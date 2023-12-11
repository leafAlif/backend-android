const models = require('../models/registrasiModels');

const handleQueryError = (res, err) => {
  // eslint-disable-next-line no-console
  console.error('Database error:', err);
  res.status(500).json({ error: 'Internal Server Error' });
};

const getItems = async (req, res) => {
  try {
    const items = await models.getItems();
    res.json(items);
  } catch (err) {
    handleQueryError(res, err);
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await models.getItemById(req.params.id);
    res.json(item);
  } catch (err) {
    handleQueryError(res, err);
  }
};

const createItem = async (req, res) => {
  try {
    const newItem = await models.createItem(req.body);
    res.status(201).json({ message: 'Registrasi sukses dibuat!', newItem });
  } catch (err) {
    handleQueryError(res, err);
  }
};

const updateItemById = async (req, res) => {
  try {
    const updatedItem = await models.updateItemById(req.params.id, req.body);
    res.json({ message: 'Registrasi sukses diperbarui!', updatedItem });
  } catch (err) {
    handleQueryError(res, err);
  }
};

const deleteItemById = async (req, res) => {
  try {
    await models.deleteItemById(req.params.id);
    res.status(204).json({ message: 'Registrasi sukses dihapus!' });
  } catch (err) {
    handleQueryError(res, err);
  }
};

// KRS
const getKrs = async (req, res) => {
  try {
    const krs = await models.getKrs();
    res.json(krs);
  } catch (err) {
    handleQueryError(res, err);
  }
};

const getKrsById = async (req, res) => {
  try {
    const krs = await models.getKrsById(req.params.id);
    res.json(krs);
  } catch (err) {
    handleQueryError(res, err);
  }
};

const createKrs = async (req, res) => {
  try {
    const newKrs = await models.createKrs(req.body);
    res.status(201).json({ message: 'KRS berhasil dibuat!', newKrs });
  } catch (err) {
    handleQueryError(res, err);
  }
};

const updateKrsById = async (req, res) => {
  try {
    const updatedKrs = await models.updateKrsById(req.params.id, req.body);
    res.json({ message: 'KRS sukses diperbarui!', updatedKrs });
  } catch (err) {
    handleQueryError(res, err);
  }
};

const deleteKrsById = async (req, res) => {
  try {
    await models.deleteKrsById(req.params.id);
    res.json({ message: 'KRS sukses dihapus!' });
  } catch (err) {
    handleQueryError(res, err);
  }
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
