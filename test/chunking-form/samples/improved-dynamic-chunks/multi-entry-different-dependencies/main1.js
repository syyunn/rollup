import { value1 } from './dep1.js';
import { value2 } from './dep2.js';
import { value3 } from './dep3.js';
console.log('main1', value1, value2, value3);
import('./dynamic.js');
export { value1, value2, value3 };
