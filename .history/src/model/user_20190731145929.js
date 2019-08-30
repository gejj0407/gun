module.exports = class extends think.Model {
  async getUserById(id) {
    const userInfo = await this.where('1=1');
    return userInfo;
  }
};
