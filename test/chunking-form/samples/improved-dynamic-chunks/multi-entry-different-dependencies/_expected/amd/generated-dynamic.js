define(['exports', './generated-dep1', './generated-dep3'], function (exports, dep1, dep3) { 'use strict';

	console.log('dynamic1', dep1.value1, dep3.value2);

	exports.value1 = dep1.value1;
	exports.value2 = dep3.value2;

});
