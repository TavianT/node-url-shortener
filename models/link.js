const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    orignalURL: {
        type: String,
        required: true
    },
    shortURL: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;

