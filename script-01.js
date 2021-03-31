import { sayHi, user } from './say.js';

sayHi('Arfat');

console.log(user.newId);

const newId = Symbol('newId');

setTimeout(() => {
  user[newId] = 100;
}, 1000);
