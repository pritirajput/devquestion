//question 59 is Comparison with the Equality Operator
function testEqual(val) {
    if (val == 12) { 
      return "Equal";
    }
    return "Not Equal";
  }
  
let equale =  testEqual(10);
console.log(equale);

//question 60 is Comparison with the Strict Equality Operator
function testStrict(val) {
    if (val===7) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
let strictequale = testStrict(10);
console.log(strictequale);

//question 61 is Practice comparing different values
function compareEquality(a, b) {
    if (a === b) { // Change this line
      return "Equal";
    }
    return "Not Equal";
  }
  
let compare = compareEquality(10, "10");
console.log(compare);


//question 62 is Comparison with the Inequality Operator
function testNotEqual(val) {
    if (val!=99) { 
      return "Not Equal";
    }
    return "Equal";
  }
let inequality = testNotEqual(10);
console.log(inequality);
 
//question 63 is Comparison with the Strict Inequality Operator
function testStrictNotEqual(val) {
    if (val!==17) { 
      return "Not Equal";
    }
    return "Equal";
}
  
let strictInequality =  testStrictNotEqual(10);
console.log(strictInequality);

//question 64 is Comparison with the Greater Than Operator
function testGreaterThan(val) {
    if (val>100) { 
      return "Over 100";
    }
    if (val>10) {  
      return "Over 10";
    }
    return "10 or Under";
  }
  
let testGrater =  testGreaterThan(10);
console.log(testGrater);

//question  65 is Comparison with the Greater Than Or Equal To Operator
function testGreaterOrEqual(val) {
    if (val>=20) {  
      return "20 or Over";
    }
    if (val>=10) {  
      return "10 or Over";
    }
    return "Less than 10";
}
  
  let greaterthenEqual = testGreaterOrEqual(10);
  console.log(greaterthenEqual);

//question 66 is Comparison with the Less Than Operator
function testLessThan(val) {
    if (val<25) { 
      return "Under 25";
    }
    if (val<55) { 
      return "Under 55";
    }  
    return "55 or Over";
}
  
let testless =  testLessThan(10);
console.log(testless);

//question 67 is Comparison with the Less Than Or Equal To Operator
function testLessOrEqual(val) {
    if (val<=12) { 
      return "Smaller Than or Equal to 12";
    }
    if (val<=24) {
      return "Smaller Than or Equal to 24";
    }
  
    return "More Than 24";
}
  
let lessthanequal = testLessOrEqual(10);
console.log(lessthanequal);

//question 68 is Comparisons with the Logical And Operator
function testLogicalAnd(val) {  
    if (val>=25 && val<=50) {
      
        return "Yes";
    
    }
    return "No";
}
  
let andOperator = testLogicalAnd(10);
console.log(andOperator);

//question 69 is Comparisons with the Logical Or Operator
function testLogicalOr(val) {
    if (val<10 || val>20) {
      return "Outside";
    }
   return "Inside";
}
  
let logicalOperator =  testLogicalOr(15);
console.log(logicalOperator);





