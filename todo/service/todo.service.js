class TodoService {
  repo;

  constructor(repo) {
    this.repo = repo;
  }

  async get(id) {
    if (id) {
      return this.repo.getById(id)
    }
    return this.repo.getList()
  }

  async create(title) {
    await this.repo.create(title)
  }

  async delete(id) {
    await this.repo.delete(id)
  }

  async update(id, title, completed) {
    return updateById(id, title, completed)
  }
}

module.exports = TodoService;