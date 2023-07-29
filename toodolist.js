const express = require('express');
const mongoose = require('mongoose');
const app = express();
const dbURI = 'mongodb+srv://mehrand77:lJb8KPvpuOYgqfTX@nodetuts.n7qqvho.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => app.listen(3000))
  .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(express.json());


let todolist = [
    { id: 1, title: 'read a book', completed: false },
    { id: 2, title: 'watch a Tv', completed: true },
    { id: 3, title: 'write a book', completed: false },
];

app.get('/api/todolist', (req, res) => {
    res.send(todolist)
});

app.get('/api/todolist/:id', (req, res) => {
    const todolist1 = todolist.find(task => task.id === parseInt(req.params.id));
    if (!todolist) return res.status(404).send('In ID Valid Nist');
    res.send(todolist1);
});

app.post('/api/todolist/', (req, res) => {
    const todolist1 = {
        id: todolist.length + 1,
        title: req.body.title,
        completed: false
    };
    todolist.push(todolist1);
    res.send(todolist);
});


app.put('/api/todolist/:id', (req, res) => {
    const todolist1 = todolist.find(task => task.id === parseInt(req.params.id));
    if (!todolist1) return res.status(404).send('In ID Valid Nist');
    todolist1.title = req.body.title;
    todolist1.completed = req.body.completed;
    res.send(todolist);
});

app.delete('/api/todolist/:id', (req, res) => {
    const todolist1 = todolist.find(task => task.id === parseInt(req.params.id));
    if (!todolist1) return res.status(404).send('In ID Valid Nist');
    const index = todolist.indexOf(todolist1);
    todolist.splice(index, 1);
    res.send(todolist1);
});

