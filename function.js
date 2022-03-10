//question 48 is Write Reusable JavaScript with Functions
function reusableFunction(){
    console.log("Hi World");
}
reusableFunction();

//question 49 is Passing Values to Functions with Arguments
function functionWithArgs(one,two){
    console.log(one + two);
}
functionWithArgs(7,9);

//question 50 is Return a Value from a Function with Return
function timesFive(num){
    return num * 5;
}
let number = timesFive(5);
console.log(number);

//question 51 is Global Scope and Functions
var myGlobal = 10;

function fun1() {
  oopsGlobal = 5;
}

function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}

fun2();

//question 52 is  Local Scope and Functions
function myLocalScope() {
   let myVar = 4;
    console.log('inside myLocalScope', myVar);
}
 myLocalScope();
//console.log('outside myLocalScope', myVar);

//question 53 is Global vs. Local Scope in Functions
const outerWear = "T-Shirt";

function myOutfit() {
 let outerWear = "sweater"
  return outerWear;
}

myOutfit();

//question 54 is Understanding Undefined Value returned from a Function
let sum = 0;

function addThree() {
  sum = sum + 3;
  console.log(sum);
}
function addFive(){
  sum = sum +5;
  console.log(sum);
    return;
}
console.log(sum);
addThree();
addFive();

//question 55 is Assignment with a Returned Value
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
processed = processArg(7);
console.log(processed);

//question 56 is Stand in Line
function nextInLine(arr, item) {
    arr.push(item);
    let removed =arr.shift();
    return removed;
}
const testArr = [1, 2, 3, 4, 5];
  
console.log("Before: " + JSON.stringify(testArr));
console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));

//question 57 is Understanding Boolean Values
function welcomeToBooleans() {
    return true; 
}
let bool =welcomeToBooleans();
console.log(bool);

//question 58 is Use Conditional Logic with If Statements
function trueOrFalse(wasThatTrue) {

    if (wasThatTrue) {
      return "Yes, that was true";
    }
    return "No, that was false";
}
let boolen =trueOrFalse(true);
console.log(boolen);

