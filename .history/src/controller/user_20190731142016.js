const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.success({id: '123'});
    // return this.display();
  }
  async getUserInfoByIdAction() {
    // const uid = this.post('id');
    const userInfo = await this.model('user').getUserById(1);
    return this.success(userInfo);
  }
};
