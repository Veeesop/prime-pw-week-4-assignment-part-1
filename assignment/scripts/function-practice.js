console.log("***** Function Practice *****");

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return "Hello World!";
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hey ${name}! That is your name right? ${name}? We met at that thing...`;
}
// Remember to call the function to test
console.log(helloName("Jasper"));

// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}
console.log(addNumbers(5, 4));
// 4. Function to multiply three numbers & return the result
function multiplyThree(number) {
  return number * 3;
}
console.log(multiplyThree(3));
// 5. Function that will return true if a number is positive,
//    or greater than zero, and false otherwise
function isPositive(number) {
  return number > 0 ? true : false;
}
console.log(isPositive(9));
// Call the function to test each outcome (true & false)
// Write a separate console.log statement for each outcome
console.log("isPositive - should say true", isPositive(3));
console.log("isPositive - should say false", isPositive(0));
console.log("isPositive - should say false", isPositive(-3));

// 6. Function to return the _last_ item in an array. If the
//    array is empty, return `undefined`.
let numSet = [4, 6, 7, 9];

function getLast(array) {
  return array[array.length - 1];
}
console.log(getLast(numSet));
// 7. Function to find a value in an array. Return true if the
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find

let foodArr = ["chicken", "steak", "apple", "banana", "romaine"];

function find(value, array) {
  let valExists = false;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      valExists = true;
      break;
    }
  }
  return valExists;
}
console.log(find("burger", foodArr));

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  let firstLetterMatch = false;
  if (string[0] === letter) {
    firstLetterMatch = true;
  }
  return firstLetterMatch;
}
console.log("isFirstLetter - should say true", isFirstLetter("a", "apple"));
console.log("isFirstLetter - should say false", isFirstLetter("z", "apple"));

// 9. Function to return the sum of all numbers in an array
function sumAll(arr) {
  let sum = 0;
  // TODO: loop to add items
  for (num of arr) {
    sum += num;
  }
  return sum;
}
console.log(sumAll(numSet));

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.

let testArr = [-2, 26, -9, 100, -70];

function posNum(arr) {
  let posNumArr = [];
  for (num of arr) {
    if (num > 0) {
      posNumArr.push(num);
    }
  }
  return posNumArr;
}

console.log(posNum(testArr));
// 11. Pick a problem from Edabit(https://edabit.com/) or
//     CodeWars(https://www.codewars.com/). Then describe it
//     here in a comment, write the function, and test it!
//Convert Age to Days
//
//Create a function that takes the age in years and returns the age in days.
//Use 365 days as the length of a year for this challenge.
//Ignore leap years and days between last birthday and now.
//Expect only positive integer inputs.

function calcAge(age) {
  return age > 0 ? age * 365 : 0;
}
