const Site = require('../model/site.js');
const fs = require('fs');
const path = require('path');
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
    yield this.render('index', { "mod": mod });
  },
  upload: function*(next) {
    console.dir(this.req.files)
  }
}
