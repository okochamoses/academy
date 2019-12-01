class BaseRepository {
  constructor(model) {
    if (model === null || model === undefined) {
      throw new Error("Repository must havae a model attribute passed");
    }
    this.model = model;
  }

  async findById(id) {
    return await this.model.findByPk(id);
  }

  async findAll() {
    return await this.model.findAll();
  }

  async create(obj) {
    return await this.model.create(obj);
  }

  async update(id, obj) {
    await this.model.update(obj, { where: { id: id } });
    return await this.model.findByPk(id);
  }

  async findFirst(condition) {
    return await this.model.findOne({ where: condition });
  }

  async find(condition) {
    return await this.model.findAll({ where: condition });
  }

  // TODO: add delete method
}

module.exports = BaseRepository;
