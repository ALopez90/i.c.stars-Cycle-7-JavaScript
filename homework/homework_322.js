/**
Homework: Fortune Teller
Create a function that tells a furtune!

Must:
Takes in an array as a parameter
Include an if/else conditional statement
Returns a concatinated string of the user's fortune

Challenge: Takes in the user's input as a parameter

DUE: 03/23/2021 @ 1pm.
Deliver your HW by sharing your GitHub repo with me through email (alopez2@icstars.com) and CC Khalil, Brandon, Henry, and Keith
*/
let prompt = require('prompt-sync')();

let userInput = prompt("What's your name? I'll tell you your future..."),
    animal = ['cat/s', 'dog/s', 'shark/s', 'ant/s'],
    char = ['vicious', 'gentle', 'insane', 'stupid', 'trifflin', 'infected'],
    ranAniIndex = Math.floor(Math.random() * animal.length),
    ranAni = animal[ranAniIndex],
    ranCharIndex = Math.floor(Math.random() * char.length),
    ranChar = char[ranCharIndex],
    ranNum = Math.floor(Math.random() * 31);

function fortune(name, attacker, type, amount) {
    let welcome = name + ', this is your fortune: ';
    console.log(welcome);
    if (attacker === 'cat/s') {
        let fortune = 'You will be smothered by ' + amount + ' ' + type + ' ' + attacker;
        console.log(fortune);
    } else if (attacker === 'dog/s') {
        let fortune = amount + ' ' + type + ' ' + attacker + ' will jump at your face!';
        console.log(fortune);
    } else if (attacker === 'shark/s') {
        let fortune = amount + ' ' + type + ' ' + attacker + ' will just vibe with you. Nice!';
        console.log(fortune);
    } else if (attacker === 'ant/s') {
        let fortune = 'You will step on an ant colony and ' + amount + ' ' + type + ' ' + attacker + ' will very upset with you.';
        console.log(fortune);
    } else {
        console.log("You're not worthy of a fortune!");
    }
}

fortune(userInput, ranAni, ranChar, ranNum);