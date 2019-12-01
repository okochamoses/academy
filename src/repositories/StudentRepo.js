const models = require("../db/models");
const BaseRepository = require("./BaseRepository");

class Student extends BaseRepository {
  constructor(model) {
    super(model);
  }

  async findByUsername(username) {
    return await this.model.findOne({ where: { username } });
  }
}

module.exports = new Student(models.Student);
