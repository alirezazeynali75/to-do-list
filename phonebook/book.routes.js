const bookController = require('./controller/book.controller');
const BookRepo = require('./repo/book.repo');
const bookschema = require('./schema/book')
const BookService = require('./service/book.services');
const { Router } = require('express')

const repo = new BookRepo(bookschema)
const service = new BookService(repo)
const controller = new bookController(service)


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