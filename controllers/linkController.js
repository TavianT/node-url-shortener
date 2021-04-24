const Link = require('../models/link');

const index = (req, res) => {
    res.render('index', {title: 'Home'});
}

const createShortLink = (req, res) => {
    console.log(req.body);
    let newURL = "";
    if (req.body.hasOwnProperty('custom_url')) {
        newURL = req.body.custom_url
        console.log(newURL);
    }
}

module.exports = {
    index,
    createShortLink
}