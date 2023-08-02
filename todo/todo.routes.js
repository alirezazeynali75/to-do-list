const TodoController = require("./controller/todo.controller");
const TodoRepo = require("./repo/todo.repo");
const ToDoSchema = require("./schema/todo")
const TodoService = require("./service/todo.service");
const { Router } = require('express')

const repo = new TodoRepo(ToDoSchema)

const service = new TodoService(repo)

const controller = new TodoController(service)

router = Router()


router.get('/', async (req, res) => {
  await controller.getList(req, res)
})

router.get('/:id', async (req, res) => {
  await controller.getById(req, res)
})


router.post('/', async (req, res) => {
  await controller.create(req, res)
})

router.put('/:id', async (req, res) => {
  await controller.update(req, res)
})

router.delete('/:id', async (req, res) => {
  await controller.delete(req, res)
})

module.exports = router;


