// 引入spa类库
require('./lib/spa.min.js');
require('./lib/swiper-3.3.1.min.js');
// require('./lib/iscroll-probe.js');

// 引入views
require('./views/guide.js');
require('./views/details.js');
require('./views/my.js');
require('./views/nail.js');
require('./views/search.js');
require('./views/home.js');
require('./views/login.js');
require('./views/index.js');

//打开app时的默认视图
SPA.config({
  indexView: 'guide'
});
