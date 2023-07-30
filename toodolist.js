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

app.get('/api/todolist', async (req, res) => {
    try {const todooo= await todoo.find()
        res.status(200).send(todooo)
    } catch (e) {
        res.status(500).send({'error':e.message})
    }
    
});

app.get('/api/todolist/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const todo1 = await todoo.findById(id)
        res.status(200).send(todo1)
    } catch (e) {
        res.status(500).send({ "error": e.message })
    }
});

app.post('/api/todolist/', async (req, res) => {
    const todo = new todoo({
        title: req.body.title,
        completed: false
    });
    try {
        const todo2 = await todo.save()
        res.status(201).send(todo2)
    } catch (e) {
        res.status(500).send({ 'error': e.message })
    }
});


app.put('/api/todolist/:id', async (req, res) => {
    const id = req.params.id;
    const title = req.body.title;
    const completed = req.body.completed;

    try {
        const todo3 = await todoo.findByIdAndUpdate(id, { title, completed })
        res.status(202).send(todo3)
    } catch (e) {
        res.status(500).send({ 'error ': e.message })
    }

});

app.delete('/api/todolist/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const todo4 = await todoo.findByIdAndDelete(id)
        res.status(204).send(todo4)
    } catch (e) {
        res.status(500).send({ 'Error': e.message })
    }
});
