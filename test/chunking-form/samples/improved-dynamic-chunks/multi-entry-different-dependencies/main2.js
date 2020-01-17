import { value2 } from './dep2.js';
import { value3 } from './dep3.js';
console.log('main2', value2, value3);
import('./dynamic.js');
export { value2, value3 };
