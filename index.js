const prompt = require('prompt-sync')();

function greet(namePassedIn) {
  return 'Welcome to SALT, ' + namePassedIn;
}

module.exports.greet = greet;

function askDate(datePassedIn) {
  return 'Today is 32 days left until the course starts'
}

// Main program
const name = prompt('What is your name? ');
module.exports.name = name;

const date = prompt('When does that course start? ');

const greeting = greet(name);
console.log(greeting);

const schedule = askDate(date);
console.log(schedule);
