// In order to run a prompt() in the terminal, run 'npm install prompt-sync'
// https://www.npmjs.com/package/prompt-sync
let prompt = require('prompt-sync')(); //must define the prompt-sync in order to actually use it.

let test = prompt("What's your name?"); //using the prompt. It will require you to enter something in the terminal!
console.log(test);

// In order to run a confirm() in the terminal, run 'npm install prompt-confirm'
// https://www.npmjs.com/package/prompt-confirm
const Confirm = require('prompt-confirm'); //must define the prompt-confirm in order to actually use it.

const confirm = new Confirm('Do you like chocolate?')
  .ask(function(answer) {
    console.log(answer);
  });