require('./main.css');
var Vue = require('vue');
var Router = require('vue-router');
var Header = require('./components/header.vue');
var foo = require('./components/foo.vue');
var foo1 = require('./components/foo1.vue');
var foo2 = require('./components/foo2.vue');
Vue.use(Router);

// routingdfds
var router = new Router();

router.map({
  '/foo': {
    component: foo
  },
  '/foo1': {
    component: foo1
  },
  '/foo1/foo2': {
    component: foo2
  },
});
router.beforeEach(function () {
  window.scrollTo(0, 0);
});

router.redirect({
  '*': '/foo'
});
var div = document.createElement('div');
div.id='app';
document.body.insertBefore(div,document.body.childNodes[0])

router.start(Header, '#app')
