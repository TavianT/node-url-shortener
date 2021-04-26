const { result } = require('lodash');
const Link = require('../models/link');
const Util = require('../util')

const index = (req, res) => {
    res.render('index', {title: 'Home'});
}

const createShortLink = async (req, res) => {
    console.log(req.body);
    let newUrl = "";
    if (req.body.hasOwnProperty('custom_url')) {
        newUrl = "/" + req.body.custom_url
        let exists = await Link.exists({shortUrl: newUrl})
        if (exists) {
            let message = '400 Error: ' + newUrl + " already exists";
            res.statusMessage = 'Url exists'
            res.status(400).render('index', {title: 'Home', message})
            return
        }
    } else {
        let urlFound = false;
        do {
            util = new Util();
            newUrl = "/" + util.createRandomUrl();
            console.log("newUrl: " + newUrl);
            let exists = await Link.exists({shortUrl: newUrl})
            if (!exists) {
               urlFound = true; 
            }
        } while (!urlFound);
    }
    const link = new Link({originalUrl: req.body.url, shortUrl: newUrl})
    link.save()
    .then(result => {
        console.log(result);
        let message = `Short URL: ${req.hostname+newUrl}`
        res.render('index', {title: 'Home', message})
    })
    .catch(err => {
        console.log(err);
    })
}

const goToShortLink = (req, res) => {
    const url = "/" + req.params.id;
    Link.findOne({shortUrl: url})
    .then(result => {
        res.redirect(result.originalUrl);
    })
    .catch(err => {
        res.status(404).render('404', {title: "Page not found"})
    })
}

module.exports = {
    index,
    createShortLink,
    goToShortLink
}