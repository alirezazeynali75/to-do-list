class TodoController {
  service


  constructor(service) {
    this.service = service;
  }

  async getById(req, res) {
    try {
      const id = req.params.id;
      const todo = await this.service.get(id)
      res.status(200).json({
        status: true,
        message: "operation is successful",
        result: todo
      })
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "operation is not successful",
        error: e.message,
      })
    }
  }

  async getList(req, res) {
    try {
      const todos = await this.service.get()
      res.status(200).json({
        status: true,
        message: "operation is successful",
        result: todos
      })
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "operation is not successful",
        error: e.message,
      })
    }
  }

  async create(req, res) {
    try {
      const title = req.body.title
      await this.service.create(title)
      res.sendStatus(201)
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "operation is not successful",
        error: e.message,
      })
    }
  }

  async delete(req, res) {
    try {
      const id = req.params.id
      await this.service.delete(id)
      res.sendStatus(204)
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "operation is not successful",
        error: e.message,
      })
    }
  }

  async update(req, res) {
    try {
      const id = req.params.id;
      const title = req.body.id
      const completed = req.body.completed
      const todo = await this.service.update(id, title, completed)
      res.status(200).json({
        status: true,
        message: "operation is successful",
        result: todo,
      })
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "operation is not successful",
        error: e.message,
      })
    }
  }
}


module.exports = TodoController;