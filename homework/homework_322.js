// npm install prompt-sync
var prompt = require('prompt-sync')();

let userName = prompt('What is your name?'),
fortArray = ['Cow', 'Dog', 'Cat', 'Alien', 'Hamster'],
ranFort = fortArray[Math.floor(Math.random * fortArray.length)],
ranNum = Math.floor(Math.random * 100);

test(userName, ranFort, ranNum);

function test(user, fortune, number) {
  console.log(user);
  console.log(fortune);
  console.log(number);
};