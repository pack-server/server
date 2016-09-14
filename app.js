const debug = require('debug')('demo');
const koa = require('koa');
const IO = require('koa-socket');
const io = new IO();

//配置文件
const config = require('./config/config');

const app = koa();
io.attach(app);

app.use(function*(next) {
    //config 注入中间件，方便调用配置信息
    if (!this.config) {
        this.config = config;
    }
    yield next;
});

//log记录
const Logger = require('mini-logger');
const logger = Logger({
    dir: config.logDir,
    format: 'YYYY-MM-DD-[{category}][.log]'
});

//router use : this.logger.error(new Error(''))
app.context.logger = logger;

const onerror = require('koa-onerror');
onerror(app);

//xtemplate对koa的适配
const xtplApp = require('xtpl/lib/koa');
//xtemplate模板渲染
xtplApp(app, {
    //配置模板目录
    views: config.viewDir
});




const session = require('koa-session');
app.use(session(app));


//post body 解析
const bodyParser = require('koa-bodyparser');
app.use(bodyParser());
//数据校验
const validator = require('koa-validator');
app.use(validator());

//静态文件cache
const staticCache = require('koa-static-cache');
var staticDir = config.staticDir;
app.use(staticCache(staticDir + '/js'));
app.use(staticCache(staticDir + '/css'));


//应用路由
const appRouter = require('./router/index');
var router = appRouter(router);
app.use(router.routes())
    .use(router.allowedMethods());

app.listen(config.port);
console.log('listening on port %s', config.port);
//build
const Build = require('./model/build.js');
const build = new Build(app._io);
//socket
app.io.on('connection', ()=>{
  console.log('99999');
  app.io.on('chat message', function(msg){ 
    build.addTask(msg);
  });
});
app.io.on('build', ()=>{
  console.log('99999');
});
module.exports = app;
