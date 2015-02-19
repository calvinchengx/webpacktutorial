'use strict';

var yell = require('./js/alert.js');
require('./css/style.css');

require('hash-change').on('change', function(hash) {
    yell(hash);
});
