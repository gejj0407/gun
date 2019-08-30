module.exports = class extends think.Model {
  async getUserById(id) {
    const userInfo = await this.where({id: id}).find();
    return userInfo;
  }
};
