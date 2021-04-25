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
            res.statusMessage = 'Url exists'
            res.status(400).render('index', {title: 'Home'})
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
    const link = new Link({orignalUrl: req.body.url, shortUrl: newUrl})
    link.save()
    .then(result => {
        console.log(result);
        let message = 'Short URL: ' + newUrl
        res.render('index', {title: 'Home', message})
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    index,
    createShortLink
}