//question 70 is Introducing Else Statements
function testElse(val) {
    let result = "";
    if (val > 5) {
      result = "Bigger than 5";
    }
    else {
      result = "5 or Smaller";
    }  
    return result;
  }
  
  let test = testElse(4);
  console.log(test);
  
  //question 71 is Introducing Else If Statements
  function testElseIf(val) {
    if (val > 10) {
      return "Greater than 10";
    }
  
    else if (val < 5) {
      return "Smaller than 5";
    }
    else{
    return "Between 5 and 10";
    }
  }
  
  let test1 = testElseIf(7);
  console.log(test1);
  
  //question 72 is Logical Order in If Else Statements
  function orderMyLogic(val) {
    if (val < 5) {
      return "Less than 5";
    } else if (val < 10) {
      return "Less than 10";
    } else {
      return "Greater than or equal to 10";
    }
}
  
let test2 = orderMyLogic(7);
console.log(test2);
  
//question 73 is Chaining If Else Statements
  function testSize(num) {
  
if(num<5){
   return "Tiny";
}else if(num<10){
  return "Small";
}else if(num<15){
  return "Medium";
}else if(num<20){
   return "Large";
}else{
  return "Huge";
}

  return "Change Me";

}

let test3 = testSize(7);
console.log(test3);

//question 74 is Golf Code
const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

function golfScore(par, strokes) {
  
  if(strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes === par - 1) {
    return names[2];
  } else if (strokes === par) {
    return names[3];
  } else if (strokes === par + 1) {
    return names[4];
  } else if (strokes === par + 2) {
    return names[5];
  } else {
    return names[6];
  }

}

let golf = golfScore(5, 4);
console.log(golf);

//question 75 is Selecting from Many Options with Switch Statements
function caseInSwitch(val) {
  let answer = "";
  switch(val){
    case 1:
    answer="alpha";
    break;
    case 2:
    answer="beta";
    break;
    case 3:
    answer="gamma";
    break;
    case 4:
    answer="delta";
    break;
    
  }
  return answer;
}

let switchcase = caseInSwitch(1);
console.log(switchcase);

//question 76 is Adding a Default Option in Switch Statements
function switchOfStuff(val) {
  let answer = "";
  
  switch(val){
    case "a":
    return answer="apple";
    break;
    case "b":
    return answer="bird";
    break;
    case "c":
    return answer="cat";
    break;
    default:
    return answer="stuff";
  
  }  
  return answer;
}

let switchoff = switchOfStuff(1);
console.log(switchoff);

//question 77 is Multiple Identical Options in Switch Statements
function sequentialSizes(val) {
  let answer = "";

switch(val){
  case 1:
  case 2:
  case 3:
  return answer="Low";
  break;
  case 4:
  case 5:
  case 6:
  return answer="Mid";
  break;
  case 7:
  case 8:
  case 9:
  return answer="High";

}

  return answer;
}

let multicaseswitch = sequentialSizes(1);
console.log(multicaseswitch);

//question 78 is Replacing If Else Chains with Switch
function chainToSwitch(val) {
  let answer = "";
  
  /*if (val === "bob") {
    answer = "Marley";
  } else if (val === 42) {
    answer = "The Answer";
  } else if (val === 1) {
    answer = "There is no #1";
  } else if (val === 99) {
    answer = "Missed me by this much!";
  } else if (val === 7) {
    answer = "Ate Nine";
  }*/
  switch(val){
    case "bob":
    answer = "Marley";
    break;
    case 42:
    answer = "The Answer";
    break;
    case 1:
    answer = "There is no #1";
    break;
    case 99:
    answer = "Missed me by this much!";
    break;
    case 7:
    answer = "Ate Nine";
  }

  return answer;
}
let replaceswitch = chainToSwitch(7);
console.log(replaceswitch);

//question 79 is Returning Boolean Values from Functions
function isLess(a, b) {
    return (a < b);
}

console.log(isLess(10, 15));

//question 80is Return Early Pattern for Functions
function abTest(a, b) {
  if(a<0) return undefined;
  else if (b<0) return undefined;
  return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
}

console.log(abTest(2,2));

//question 81 is Counting Cards
let count = 0;
function cc(card) {
switch (card){
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
    count ++;
    break;
    case 10:
    case "J":
    case "Q":
    case "K":
    case "A":
    count--;
    break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
  
}

cc(2); cc(3); cc(7); cc('K'); cc('A');
console.log(cc(5));
