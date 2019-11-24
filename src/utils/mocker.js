const faker = require("faker");

module.exports = class Mock {
  constructor(fakerObj) {
    this.fakerObj = fakerObj;
  }

  getOne() {
    this.fakerObj;
  }

  get(count) {
    const data = [];
    for (let i = 0; i < count; i++) {
      const keys = Object.keys(this.fakerObj);

      let entry = {};
      for (const key of keys) {
        if (typeof this.fakerObj[key] === "string") {
          entry[key] = faker.fake(this.fakerObj[key]);
        } else {
          entry[key] = this.fakerObj[key];
        }
      }
      data.push(entry);
    }
    return data;
  }
};
