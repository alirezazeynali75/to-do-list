class bookController {
  service

  constructor(service) {
    this.service = service;
  }

  async getbyname(req, res) {
    try {
      const fullname = req.body.fullname
      const book = await this.service.get(fullname)
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
  async getbynumber(req, res) {
    try {
      const number = req.body.number
      const book = await this.service.get(number)
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
    const books = await this.service.get()
    res.status(200).json({
      status: true,
      message: "operation is successful",
      result: books
    })
  } catch(e) {
    res.status(500).json({
      status: false,
      message: "operation is not successful",
      error: e.message,
    })
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

  async deletebyname(req, res) {
    try {
      const name = req.params.fullname
      await this.service.delete(name)
      res.sendStatus(204)
    } catch (e) {
      res.status(500).json({
        status: false,
        message: "operation is not successful",
        error: e.message,
      })
    }
  }

  async deletebynumber(req, res) {
    try {
      const number = req.body.number
      await this.service.delete(number)
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
      const fullname = req.body.fullname
      const number = req.body.number
      const book = await this.service.update(fullname, number)
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