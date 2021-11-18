const express = require('express');
const notesController = require('../controllers/notesController');

const router = express.Router();

router.route('/').get(notesController.getNotes);

module.exports = router;