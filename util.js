const _ = require('lodash');

class Util {
    constructor() {
       this.alphaNumerics = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890'.split('');
       //console.log(this.alphaNumerics);
    }
    createRandomUrl () {
        let urlLength = _.random(5,7);
        //console.log(urlLength);
        let newUrl = ""
        for (let i = 0; i < urlLength; i++) {
            newUrl += this.alphaNumerics[Math.floor(Math.random()*this.alphaNumerics.length)]
        }
        return newUrl;
    }
}

//util = new Util
//util.createRandomUrl()
module.exports = Util