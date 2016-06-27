var tplSearch = require('../templates/search.string');
var util = require('../utils/fn.js');

SPA.defineView('search', {
  html: tplSearch,
  plugins: ['delegated'],

  bindActions:{
    'search.switch.tabs':function(e){
        var index = $(e.el).index();
        util.setFocus(e.el);
        util.setFocus($(".search-propic").eq(index));
    }
  }
});
