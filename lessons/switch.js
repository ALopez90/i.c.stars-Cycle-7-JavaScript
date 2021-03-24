/**
Switch -- Basically multiple if/else statements! BUt it's faster
*/

// Syntax
switch (someExpression) {
    case 'true': //if () {}
    // do something
    break; // MUST end each case with a break;
    case 'false': //else if() {}
    // do something else
    break;
    default: //MUST declare a default //else{}
    // if all else fails, do this
}

// Example w User Input
// npm install prompt-sync
let prompt = require('prompt-sync')();

var grade = prompt("What grade do you want?");

// forces the user's input to be ALL CAPS -- significantly reduces user error
grade = grade.toUpperCase();

console.log("Entering switch block...");

switch (grade) {
    // How to check for multiple cases
    case 'A':
    case 'a':
        console.log('Who said you earned it??');
        break;
    case 'B':
        console.log('I gueessss');
        break;
    case 'C':
        console.log('Dang ok');
        break;
    case 'D':
        console.log('dang you failed');
        break;
    case 'F':
        console.log('rip');
        break;
    default:
        console.log("That's not even a grade!");
}
