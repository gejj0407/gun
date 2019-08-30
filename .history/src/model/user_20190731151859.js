module.exports = class extends think.Model {
  async getUserById(id) {
    const userInfo = await this.query('select * from user where 1=1');
    return userInfo;
  }
};
