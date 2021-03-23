/**
* Variables: var, let, const
*/
// "Old" way, works the same as 'let'
var lorem = "Hello!";
let ipsum = "World!";

// 'const' are variables that CANNOT change in value
const dolor = "Hola";
console.log(dolor);

/**
* Data Types: string, number, bool, null, undefined, object (key value pairs and arrays)
*/
let someNumber = 30, //NO quotes for numbers
    someString = "Jello's Name", //use double quotes if you are using single quotes inside the string
    someBool = false, //Used to check if something exists and/or in a logical sense
    someNull = null, //value unknown "empty"
    someUndefined = undefined, //value not assigned
    someObject = {
        userName: 'Alexa',
        userEmail: 'example@gmail.com',
        'some Key': 'some value' //use quotes when defining a key that has a space
    }, //key value pairs! JSON (not Jason) files are formatted in objects.
    someArray = [1, 2, 3, 4, 5]; //use the index of an array to get a specfic value. Always starts at 0. e.x. someArray[1]

console.log(someObject.userName); //e.x. getting a specific value from an object
console.log(someArray[0]); //first item in the array

/**
* Math Operators +, -, *, /, %, **
*/
let a = 3,
    b = 7,
    c = b % a, //gets the remainder 
    d =  a**a; //exponents. Same as 3*3*3 or 3^3

// console.log(c);
// console.log(d);

// String concatenation: Appending one string after another
let stringConc = 'Hello, ' + someObject.userName + '!'
console.log(stringConc);

/**
* Logical Operators &&, ||, !
*/
let logiTest1 = 'Cat',
    logiTest2 = 'Dog',
    logiTest3 = 3;

console.log(logiTest3 === '3'); //returns false. "strict" Checks the value AND data type
console.log(logiTest3 == '3'); //returns true. "loose" Only checks the value

if (logiTest1 === 'Cat' && logiTest3 === '3') {
    // Both values are true
    console.log('passed first if');
} else if (logiTest2 === 'Hamster' || logiTest3 === 'Cat') {
    // ONE value is true
    console.log('passed sec if');
} else if (logiTest3 !== 3) {
    // Checks if the value is NOT equal to ___.
    console.log('passed third if');
} else {
    // The fallback. "Default". If all else fails, do this
    console.log('sucks to suck');
};
