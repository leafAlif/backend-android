const express = require('express');

const router = express.Router();
const registrasiController = require('../controllers/registrasiController');

// Define routes related to items
router.get('/', registrasiController.getItems);

module.exports = router;
