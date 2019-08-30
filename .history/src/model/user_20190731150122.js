module.exports = class extends think.Model {
  async getUserById(id) {
    const userInfo = await this.select();
    return userInfo;
  }
};
