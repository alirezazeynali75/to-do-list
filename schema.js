const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const todolistschema = new Schema({
    title: {
        type: String,
        required: true,
    },completed: {
        type: Boolean,
        default: false
      }
});
const todo = mongoose.model('todo', todolistschema);
module.exports = todo;