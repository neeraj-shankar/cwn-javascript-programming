/**
 * Here we would be exploring the different functions in javascript
 * 1. Function Declaration
 */


// Function declaration 
function greet(firstName, lastName) {
    let morningGreet = `Hello, Good Morning Mr. ${firstName} ${lastName}`;

    return morningGreet;
}

// Function expreesion --> calculates average of two numbers
const average = function (firstNumber, secondNumber) {
    let avg = (firstNumber + secondNumber) / 2;
    return avg;
};

// named function expression 

const interestCalc = function simpleInterest(principal, rate, time) {
    let si = (principal * rate * time) / 100;
    return si;
}


/**
 * 
 * Function call and input data
 */

const FIRST_NAME = "Neeraj";
const LAST_NAME = "Shankar";

// getting output from function declaration 
let greetCall = greet(FIRST_NAME, LAST_NAME);
console.log("======================================================================================");
console.log(greetCall);

// getting out of the unamed function expression 
console.log("======================================================================================");
const avgResult = average(10, 20);
console.log(`Average by basic function expression: ${avgResult}`);


// getting output of the named function expression 
console.log("======================================================================================");
const interest = interestCalc(1000, 10, 2)
console.log(`Simple Interest calculated: ${interest}`)


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                         Immediately Invoked Function Expression (IIFE):
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// An IIFE is a function expression that is executed immediately after being defined.

// (function (){
//    // console.log("======================================================================================");
//     const message = "India is playing against England";
//    // console.log(message);
// })();



///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                        Function Expression as a Callback:
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// Function expressions are often used as callback functions, which are passed as 
// arguments to other functions.
console.log("======================================================================================");
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(function (num) {
    return num * num;
});

console.log(squaredNumbers); // Output: [1, 4, 9, 16, 25]


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                          Arrow Function Expression:
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//You can assign an arrow function to a variable and call it as needed.
const square = (x) => x * x;

const result = square(7);
console.log(result); // Output: 49

