/**
* Functions
*/
// A basic function that returns a console log
function test() {
    console.log('Hello world!');
};
test(); //MUST call the function in order to actually run it.

// A function using parameters
let name = 'Khalil',
    age = 53;

// Takes in 2 parameters. Be aware of the order the parameters are!
function getUser(name, age) {
    let welcome = 'Hello, ' + name + '. Why are you ' + age + ' years old??';
    console.log(welcome);
};
getUser(name, age);


let testName = 'Khalil';

// Function takes in a parameters and runs basic logic inside
function conditionalTest(testName) {
    let results;
    // Check if name is equal to ____
    if (testName === 'Khalil') {
        results = "This isn't Chia!";
        console.log(results);
    } else {
        results = "Hello Chia!";
        console.log(results);
    }
};
conditionalTest(testName);

// How to: Get random item in an array!
let createArr = Array(7); //quick way of creating a number array

const months = ["January", "February", "March", "April", "May", "June", "July"];

const randomNum = Math.floor(Math.random() * 100); //returns a random number between 0-99

const randomMonthIndex = Math.floor(Math.random() * months.length); //returns a random number that's the length of the array (in this case it's 7)
console.log(randomMonthIndex, months[randomMonthIndex]); //returns the random item in the months array