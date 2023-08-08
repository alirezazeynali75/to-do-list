class BookService {
    repo;

    constructor(repo) {
        this.repo = repo;
    }

    async get(fullname) {
        await this.repo.getbyname(fullname)
    }
    async get(number) {
        if (number) {
            return this.repo.getbynumber(number)
        }
        return this.repo.getfull()
    }

    async create(fullname, number) {
        await this.repo.create(fullname, number)
    }

    async update(fullname, number) {
        return this.repo.updatebyname(fullname, number)
    }
    async update(fullname, number) {
        return this.repo.updatebynumber(fullname, number)
    }

    async delete(fullname, number) {
        await this.repo.delete(fullname, number)
    }
}

module.exports = BookService;