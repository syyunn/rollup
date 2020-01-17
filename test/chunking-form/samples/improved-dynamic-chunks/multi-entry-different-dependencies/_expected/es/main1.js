import { v as value1 } from './generated-dep1.js';
export { v as value1 } from './generated-dep1.js';
import { v as value2, a as value3 } from './generated-dep3.js';
export { v as value2, a as value3 } from './generated-dep3.js';

console.log('main1', value1, value2, value3);
import('./generated-dynamic.js');
