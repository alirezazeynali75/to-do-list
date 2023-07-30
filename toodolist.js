const express = require('express');
const mongoose = require('mongoose');
const todoo = require('./schema');
const app = express();
const dbURI = 'mongodb+srv://mehrand77:lJb8KPvpuOYgqfTX@nodetuts.n7qqvho.mongodb.net/?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.use(express.static('public'));
app.use(express.json());

app.get('/api/todolist', (req, res) => {
    todoo.find()
        .then((result) => res.send(result))
        .catch((err) => console.log(err));
});

app.get('/api/todolist/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const todo = await todoo.findById(id)
        res.status(200).send(todo)
    } catch (e) {
        res.status(500).send({"error": e.message})
    }
});

app.post('/api/todolist/', (req, res) => {
    const todo = new todoo({
        title: req.body.title,
        completed: false
    });

    todo.save()
        .then((result) => res.status(201).send(result))
        .catch((err) => console.log(err));
});


app.put('/api/todolist/:id', (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const completed = req.body.completed;

    todoo.findByIdAndUpdate(id, { title, completed })
        .then((result) => res.status(202).send(result))
        .catch((err) => console.log(err));
});

app.delete('/api/todolist/:id', (req, res) => {
    const id = req.params.id;
    todoo.findByIdAndDelete(id)
        .then((result) => res.status(204))
        .catch((err) => console.log(err));
}); 
