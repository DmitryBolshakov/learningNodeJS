const db = require('../ext/db');

const schema = new db.Schema({
    title: {
        type: String,
        required: true,
        maxlength: 255,
        minlength: 2,
        trim: true
    },
    price: Number,
    img: String,
    description: {
        type: String,
        maxlength: 1000
    },
    sku: {
        type: String,
        required: true,
        maxlength: 30,
        unique: true,
        trim: true
    },
    published: {
        type: Boolean,
        default: true,
    },
    category: {
        type: String,
        required: true,
    },
    manufacturer: {
        type: String,
        required: true,
    },
    created: {
        type: Date,
        default: Date.now
    }   
}, {versionKey: false});

module.exports = db.model('Product', schema);