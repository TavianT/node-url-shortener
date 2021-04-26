const express = require('express');
const pageController = require('../controllers/pageController')
const router = express.Router();

//link routes

//index page
router.get('/about', pageController.about);

module.exports = router;