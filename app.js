const express = require('express');
const { db } = require('./db');
const router = require('./todo/todo.routes');
const router1 = require('./phonebook/book.routes');
const app = express();
const dbURI = 'mongodb+srv://mehrand77:lJb8KPvpuOYgqfTX@nodetuts.n7qqvho.mongodb.net/?retryWrites=true&w=majority';


app.use(express.static('public'));
app.use(express.json());

app.use('/api/todolist', router)
app.use('/api/phonebook', router1)


db(dbURI).then(() => app.listen(3000))