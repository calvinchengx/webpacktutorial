'use strict';

// require additional javascript modules
var yell = require('./js/alert.js');
require('hash-change').on('change', function(hash) {
    yell(hash);
});

// require additional css
require('./css/style.css');

// example usage for asynchronously required module
require(['./js/exampleasync.js'], function() {
  console.log('loaded example async'); 
});
