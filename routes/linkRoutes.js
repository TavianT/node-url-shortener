const express = require('express');
const linkController = require('../controllers/linkController')
const router = express.Router();

//link routes

//index page
router.get('/', linkController.index);

router.post('/', linkController.createShortLink)

module.exports = router;