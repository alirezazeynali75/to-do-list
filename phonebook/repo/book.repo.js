class BookRepo {
    schema;

    constructor(
        schema
    ) {
        this.schema = schema;
    }

    async getfull() {
        return this.schema.find()
    }

    async getbynumber() {
        return this.schema.findbynumber(number)
    }

    async create(fullname, number) {
        await this.schema.create({
            fullname,
            number
        })
    }

    async updatebynumber(id, fullname, number) {
        return this.schema.findbynumberandupdate(number, fullname, {
            fullname: newname,
            number: newnumber
        })
    }

    async updatebyname(fullname, number) {
        return this.schema.findbynameandupdate(fullname, {
            fullname: newname,
            number: newnumber
        })
    }

    async delete(number) {
        await this.schema.findbynumber(number)
    }

    async delete(fullname) {
        await this.schema.findbyname(fullname)
    }
}

module.exports = BookRepo