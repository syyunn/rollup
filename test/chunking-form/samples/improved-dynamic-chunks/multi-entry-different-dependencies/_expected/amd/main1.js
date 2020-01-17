define(['require', 'exports', './generated-dep1', './generated-dep3'], function (require, exports, dep1, dep3) { 'use strict';

	console.log('main1', dep1.value1, dep3.value2, dep3.value3);
	new Promise(function (resolve, reject) { require(['./generated-dynamic'], resolve, reject) });

	exports.value1 = dep1.value1;
	exports.value2 = dep3.value2;
	exports.value3 = dep3.value3;

	Object.defineProperty(exports, '__esModule', { value: true });

});
