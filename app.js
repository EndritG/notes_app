// const add = require('./utils.js');

// const sum = add(4, -2);
// console.log(sum);
const chalk = require('chalk');
const yargs = require('yargs');
const getNotes = require('./notes.js');

// const msg = getNotes();
// console.log(msg);cls

// const greenMsg = chalk.red.inverse.bold('Error!');
// console.log(greenMsg);

// // console.log(validator.isEmail('endritg18@gmail.com'));
// // console.log(validator.isURL('https.med.io'));

// console.log(process.argv);

console.log(yargs.argv);

// if (command === 'add') {
//   console.log('Adding Note!');
// } else if (command === 'remove') {
//   console.log('Removing Note!');
// }
