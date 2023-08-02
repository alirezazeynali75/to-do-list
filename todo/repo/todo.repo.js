class TodoRepo {
  schema;

  constructor(
    schema
  ) {
    this.schema = schema;
  }

  async getList() {
    return this.schema.find()
  }

  async getById(id) {
    return this.schema.findById(id)
  }

  async create(title) {
    await this.schema.create({
      title,
    })
  }

  async updateById(id, newTitle, newCompleted) {
    return this.schema.findByIdAndUpdate(id, {
      title: newTitle,
      completed: newCompleted,
    })
  }

  async delete(id) {
    await this.schema.findByIdAndDelete(id)
  }
}

module.exports = TodoRepo