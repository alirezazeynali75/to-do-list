const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todolistschema = new Schema({
    title: {
        type: String,
        required: true,
    }
});
const todo = mongoose.model('todo', todolistschema);
module.exports = todo;