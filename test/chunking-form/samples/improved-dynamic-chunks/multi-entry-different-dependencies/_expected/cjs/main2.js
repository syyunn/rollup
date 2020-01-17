'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var dep3 = require('./generated-dep3.js');

console.log('main2', dep3.value2, dep3.value3);
new Promise(function (resolve) { resolve(require('./generated-dynamic.js')); });

exports.value2 = dep3.value2;
exports.value3 = dep3.value3;
