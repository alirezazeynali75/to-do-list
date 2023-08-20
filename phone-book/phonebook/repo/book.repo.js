class BookRepo {
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

    async create(fullname, number) {
        await this.schema.create({
            fullname,
            number
        })
    }

    async updateById(id, newname, newnumber) {
        return this.schema.findByIdAndUpdate(id, {
            fullname: newname,
            number: newnumber
        })
    }

    async delete(id) {
        await this.schema.findByIdAndDelete(id)
    }
}


module.exports = BookRepo