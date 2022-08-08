// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Pseudo code:

// Set one:
const fruit1 = "apple"
const fruit2 = "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point"

// Pseudo code:
//set temp variables
//create function
//set if/else/else statements
//invoke fuction with console.log
//take user input

const temp1 = 42
const temp2 = 350
const temp3 = 212


const boilingPoint = (temp) => {
    if (temp < 212) {
            return `"${temp} is below boiling point"`}
         else if (temp > 212) {
            return `"${temp} is above boiling point"`}
         else  (temp === 212) ;{
            return `"${temp} is at boiling point"`}
         }

console.log(boilingPoint(temp3));



// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// Pseudo code:
// creat funtion to concat arrays
//console log .length 

const myNumbers1 = [3, 7, 0, 36, -9]
const myNumbers2 = [8, -7, 42, 9, 13]

const newArray = myNumbers1.concat(myNumbers2);
//prints combined array
console.log("New Array = " + newArray)

//finds the length of array and stores it in variable arrayLength

let  arrayLength = newArray.length;

//prints the array length
console.log("Array Length is : " + arrayLength);


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ohcE"

// Pseudo code:
//console.log what original string is
//create function to reverse currentCohort
//create funtion to join reversed string
//console.log new string

const currentCohort = "Echo 2022"

console.log('The original string is: ' + currentCohort);

let reverseString = currentCohort.split(''); 
let reversedArr = reverseString.reverse();
let reversedStr = reversedArr.join('');
console.log("The reversed string is: " + reversedStr);

// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// Pseudo code:

const myArray = [13, 34, 5, 10, 27, 42]
const evenOdd = myArray.filter(element => {
    //condition for odd number
    if(element %2 !== 0){
        console.log("Odd");
    }
    //condition for even number
    else{
        console.log("Even");
    }
});


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Pseudo code:
// function subtract(a,b) then  
//   if(a>b)
//     then
//     Display (a-b);
//   end if
//   else 
//     Display (b-a);
// end function 


// Assign number1 = 58;
// Assign number2 = 100;
// call subtract(number1,number2);


// Assign number3 = 27;
// Assign number4 = 24;
// call subtract(number3,number4);

// Set one:
const number1 = 58
const number2 = 100

// Set two:
const number3 = 27
const number4 = 24

function subtract(a,b){
    //check which one is smaller
    //b is smaller
    if(a>b){
        console.log(a-b);
    }else //a is smaller
        console.log(b-a);
}

//assign two numbers
// const number1 = 58
// const number2 = 100
//call the funtion
subtract(number1,number2);
subtract(number3,number4);
