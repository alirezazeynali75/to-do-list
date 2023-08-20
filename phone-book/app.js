const express = require('express');
const { db } = require('./phonebook/db');
const phonebookRouter = require('../phone-book/phonebook/book.routes');
const app = express();
const dbURI = 'mongodb+srv://mehrand77:lJb8KPvpuOYgqfTX@nodetuts.n7qqvho.mongodb.net/?retryWrites=true&w=majority';


app.use(express.static('public'));
app.use(express.json());
app.use('/api/phonebook', phonebookRouter)


db(dbURI).then(() => app.listen(3000))