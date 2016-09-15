const Site = require('../model/site.js');
const site = new Site();
module.exports = {
  index: function*() {
    yield this.render('index', { "mod": 0 });
  },
  build: function*() {

  },
  site: function*(id) {
    let mod = JSON.stringify(this.params);
    if (!mod) {
      mod = 0;
    }
    console.log(this.params)
    yield this.render('index', { "mod": mod });
    console.log(this.params);
  }
}
