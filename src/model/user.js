module.exports = class extends think.Model {
  async selectAll() {
    // const userInfo = await this.query('select * from user where 1=1');
    const userInfo = await this.select();
    return userInfo;
  }
  async deleteById(id) {
    // const userInfo = await this.query('delete user where id=1');
    const $res = await this.delete(id);
    return $res;
  }
  async findById(id) {
    // const userInfo = await this.query('delete user where id=1');
    const user = await this.where({id: id});
    return user;
  }
  async addUser(info) {
    const $res = await this.add({
      id: info.id,
      name: info.name,
      age: info.age
    });
    return $res;
  }
  async updateUser(id, info) {
    const $res = await this.find({id: id}).update({name: info.name});
    return $res;
  }
};
