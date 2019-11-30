const models = require("../db/models");
const BaseRepository = require("./BaseRepository");

class Administrator extends BaseRepository {
  constructor(model) {
    super(model);
  }

  async findByUsername(username) {
    return await this.model.findOne({ where: { username } });
  }
}

module.exports = new Administrator(models.Administrator);
