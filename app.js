// const add = require('./utils.js');

// const sum = add(4, -2);
// console.log(sum);
const chalk = require('chalk');
const { describe, demandCommand, demandOption } = require('yargs');
const yargs = require('yargs');
const notes = require('./notes.js');
const getNotes = require('./notes.js');

// const msg = getNotes();
// console.log(msg);cls

// const greenMsg = chalk.red.inverse.bold('Error!');
// console.log(greenMsg);

// // console.log(validator.isEmail('endritg18@gmail.com'));
// // console.log(validator.isURL('https.med.io'));

// console.log(process.argv);

//Customize yargs version
yargs.version('1.1.0');

//add command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Add a new title',
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});
//add ,remove,read,list

//remove command
yargs.command({
  command: 'remove',
  describe: 'Remove a Note',
  builder: {
    title: {
      describe: 'Notes Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//list command
yargs.command({
  command: 'list',
  describe: 'showing the list',
  handler: function () {
    console.log('Showing the list');
  },
});

//READ

yargs.command({
  command: 'read',
  describe: 'Read a Note',
  handler: function () {
    console.log('Reading a Note');
  },
});

console.log(yargs.argv);

// if (command === 'add') {
//   console.log('Adding Note!');
// } else if (command === 'remove') {
//   console.log('Removing Note!');
// }
