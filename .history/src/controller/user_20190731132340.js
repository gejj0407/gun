const Base = require('./base.js');

module.exports = class extends Base {
  indexAction() {
    return this.success({id: '123'});
    // return this.display();
  }
};
