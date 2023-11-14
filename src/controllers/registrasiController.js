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

module.exports = {
  getItems, getItemById, createItem, updateItemById, deleteItemById,
};
