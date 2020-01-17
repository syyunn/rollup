define(['require', 'exports', './generated-dep3'], function (require, exports, dep3) { 'use strict';

	console.log('main2', dep3.value2, dep3.value3);
	new Promise(function (resolve, reject) { require(['./generated-dynamic'], resolve, reject) });

	exports.value2 = dep3.value2;
	exports.value3 = dep3.value3;

	Object.defineProperty(exports, '__esModule', { value: true });

});
