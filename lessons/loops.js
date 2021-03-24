/**
While Loops -- repeats the code block as long as the condition is true. Once it's false, it ends
 */

// Syntax

while (someCondition) {
    // some code block to execute
}

// Example
let x = 0; //initial

console.log('while loop starting!');

while (x < 10 /**Condition*/) {
    console.log(x);
    console.log('x is bigger than 3!');

    x++; // iteration // same thing as: x = x + 1;
}

/**
For Loops -- More compact form of looping. Repeats the code block if the condition is met.
 */

// Syntax 
// initial: the starting value
// condition: "run this code block if this is true"
// iteration: change the value of the initial after the code block is done
for (initial, condition, iteration) {
    // some code block to execute
}

// Example
// initial: let i = 0
// condition: i < 10
// iteration: i++
for (let i = 0; i < 10; i++) {
    console.log(i); //prints out 0-9
}


let someArr = ['vicious', 'gentle', 'insane', 'stupid', 'trifflin', 'infected'];

for (let i = 0; i < someArr.length; i++) { //runs the code block for each item in the array
    let item = someArr[i]; //the current item going through for loop

    console.log(i); //prints out a number
    console.log(item); //prints out the current item

    if (item === 'insane') {
        console.log('somethin');
    } else {
        console.log('somethin else');
    }
}


/**
Loop Control! -- Ways to come out of the loop without needing to run the rest of the loop
 */

// Stop -- break;
let someArr = ['vicious', 'gentle', 'insane', 'stupid', 'trifflin', 'infected'];

for (let i = 0; i < someArr.length; i++) {
    let item = someArr[i];
    console.log(i);
    console.log(item);

    if (item === 'insane') {
        someArr[i] = 'dog'; //changes the value of the current item
        console.log(someArr);
        break; //ends the loop
    } else {
        console.log('somethin else');
        break; //ends the loop
    }
}

// Ignore -- continue;
for (let i = 0; i < 10; i++) {
    if (i === 5) {
        continue; //if this condition is met, ignore it
    } else {
        console.log(i); //will print our every number BUT 5
    }
}
