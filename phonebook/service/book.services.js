class BookService {
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

    async create(fullname, number) {
        await this.repo.create(fullname, number)
    }

    async delete(id) {
        await this.repo.delete(id)
    }

    async update(id,fullname, number) {
        return this.repo.updateById(id,fullname, number)
    }
}

module.exports = BookService;