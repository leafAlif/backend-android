const express = require('express');

const router = express.Router();
const registrasiController = require('../controllers/registrasiController');

router.get('/get_registrasi', registrasiController.getItems);
router.get('/get_registrasi_by_id/:id', registrasiController.getItemById);
router.post('/insert_registrasi', registrasiController.createItem);
router.put('/update_registrasi_by_id/:id', registrasiController.updateItemById);
router.delete('/delete_registrasi_by_id/:id', registrasiController.deleteItemById);
// API untuk KRS
router.get('/get_krs', registrasiController.getKrs);
router.get('/get_krs_by_id/:id', registrasiController.getKrsById);
router.post('/insert_krs', registrasiController.createKrs);

module.exports = router;
