const Site = require('../model/site.js');
const site = new Site();
module.exports = {
  index: function*() {
    yield this.render('index', { "title": "koa demo" });
  },
  build: function*() {

  },
  site: function*(id) {
    yield this.render('index', { "mod": JSON.stringify(this.params) });
    console.log(this.params);
  }
}
