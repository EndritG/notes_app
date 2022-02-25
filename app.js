// const add = require('./utils.js');

// const sum = add(4, -2);
// console.log(sum);
const chalk = require('chalk');
const getNotes = require('./notes.js');

const msg = getNotes();
console.log(msg);

const greenMsg = chalk.red.inverse.bold('Error!');
console.log(greenMsg);

// console.log(validator.isEmail('endritg18@gmail.com'));
// console.log(validator.isURL('https.med.io'));
