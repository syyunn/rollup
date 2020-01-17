'use strict';

var dep1 = require('./generated-dep1.js');
var dep3 = require('./generated-dep3.js');

console.log('dynamic1', dep1.value1, dep3.value2);

exports.value1 = dep1.value1;
exports.value2 = dep3.value2;
