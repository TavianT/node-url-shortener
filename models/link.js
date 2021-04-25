const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const linkSchema = new Schema({
    originalUrl: {
        type: String,
        required: true
    },
    shortUrl: {
        type: String,
        required: true
    }
}, {timestamps: true})

const Link = mongoose.model('Link', linkSchema);

module.exports = Link;

