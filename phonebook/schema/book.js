const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    fullname: {
        type: String
    },
    Number: {
        type: Number
    }
});
module.exports = mongoose.model('book', schema);