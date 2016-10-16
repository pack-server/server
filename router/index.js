var router = require('koa-router')();
var controller = require('../controller/index');
module.exports = function(){
    //首页
    router.get('/',controller.index);
    router.get('/build',controller.build);
    router.get('/cloud/:site/:user/:pname',controller.site);
    router.get('/cloud/:site/:user/:pname/:branch',controller.site);
    router.post('/upload', controller.upload);
    return router;
};