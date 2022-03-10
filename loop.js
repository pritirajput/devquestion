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
