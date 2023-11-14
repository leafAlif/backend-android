const express = require('express');

const router = express.Router();
const registrasiController = require('../controllers/registrasiController');

router.get('/get_registrasi', registrasiController.getItems);
router.get('/get_registrasi_by_id/:id', registrasiController.getItemById);
router.post('/insert_registrasi', registrasiController.createItem);
router.put('/update_registrasi_by_id/:id', registrasiController.updateItemById);
router.delete('/delete_registrasi_by_id/:id', registrasiController.deleteItemById);

module.exports = router;
