const Site = require('../model/site.js');
const site = new Site();
module.exports = {
    index: function*(){
        yield this.render('index',{"title":"koa demo"});
    },
    build: function* () {
      
    },
    site:function* (id) {
      site.getCode(this.params);
      // console.log(user,name);
    }
}