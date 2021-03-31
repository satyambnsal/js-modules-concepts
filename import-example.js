import {
  getNameParts,
  subscriptionPlans as plans,
  MyUser,
} from './export-example.js';
// import multiplication, { states } from './mul.js';

// A
// import * as utils from './export-example.js'; // B
// import *
// TODO

/**
 * Is "import everything" is a good thing ?
 *
 */
console.log(getNameParts('Satyam A B Kumar Bansal'));
console.log(plans);
// console.log(multiplication(2, 3));
// console.log(states[1]);

/** We should not use "import everything". we should explicitly list what we want to import
 * 💁 Modern build tools like Webpack bundle modules together and optimizes them to speedup loading and remove unused
 * stuff. This process is called "Tree-shaking"
 * 💁 Explicitly listing what to import gives shorter names.
 * 💁 Explict list of imports gives better overview of code structure: what is used and where. It makes code support and refactoring easier.
 *
 */

// Import "as"
//TODO
