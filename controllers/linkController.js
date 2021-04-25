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
        res.redirect('/')
    })
    .catch(err => {
        console.log(err);
    })
}

module.exports = {
    index,
    createShortLink
}