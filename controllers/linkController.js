const Link = require('../models/link');

const index = (req, res) => {
    res.render('index', {title: 'Home'});
}

module.exports = {
    index
}