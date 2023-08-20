const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    fullname: {
        type: String,
        required :true
    },
    number: {
        type: Number
    }
});
module.exports = mongoose.model('book', schema);