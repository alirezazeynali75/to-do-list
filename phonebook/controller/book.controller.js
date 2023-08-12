class bookController {
  service

  constructor(service) {
    this.service = service;
  }

  async getById(req, res) {
    try {
      const id = req.params.id
      const book = await this.service.get(id)
      res.status(200).json({
        status: true,
        message: "operation is successful",
        result: book
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
      const book = await this.service.get()
      res.status(200).json({
        status: true,
        message: "operation is successful",
        result: book
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
      const { fullname, number } = req.body
      await this.service.create(fullname, number)
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
      const fullname = req.body.id
      const number = req.body.number
      const book = await this.service.update(id,fullname, number)
      res.status(200).json({
        status: true,
        message: "operation is successful",
        result: book,
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

module.exports = bookController;