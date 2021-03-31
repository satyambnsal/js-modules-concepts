/**
 * 💁 The import(module) expression loads the module and returns a promise that resolves into a module object that contains
 * all its exports. It can be called from any place in the code
 */

let choice = prompt("Enter 'A' for sum module. Enter 'B' for mul module");

if (choice === 'A') {
  import('./sum.js')
    .then((obj) => {
      console.log(`Sum of 2, 3 is ${obj.sum(2, 3)}`);
    })
    .catch(console.error);
}

if (choice === 'B') {
  import('./mul.js')
    .then((obj) => {
      console.log(`Multiplication of 2, 3 is ${obj.mul(2, 3)}`);
    })
    .catch(console.error);
}

(async () => {
  const obj = await import('./sum.js');
  console.log(`Sum of 2, 3 is ${obj.sum(2, 3)}`);
})();

/**
 * 🚨 Although import() looks like a function call, its a special syntax that just happens to use parentheses. We can
 * not copy import() to a variable or use call/apply with it. Its not a function
 */
