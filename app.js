// const add = require('./utils.js');

// const sum = add(4, -2);
// console.log(sum);
const validator = require('validator');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

console.log(validator.isEmail('endritg18@gmail.com'));
console.log(validator.isURL('https.med.io'));
