//question 82 is Build JavaScript Objects
const myDog = {
    "name": "Coder",
    "legs": 4,
    "tails": 1,
    "friends": ["freeCodeCamp Campers"]
};

//question 83 is Accessing Object Properties with Dot Notation
const testObj = {
    "hat": "ballcap",
    "shirt": "jersey",
    "shoes": "cleats"
};
const hatValue = testObj.hat;     
const shirtValue = testObj.shirt;
console.log(hatValue,shirtValue); 

//question 84 is Accessing Object Properties with Bracket Notation
const testObj1 = {
    "an entree": "hamburger",
    "my side": "veggies",
    "the drink": "water"
};
const entreeValue = testObj1["an entree"];
const drinkValue = testObj1["the drink"];
console.log(entreeValue,drinkValue);

//question 85 is Accessing Object Properties with Variables
const testObj2 = {
    12: "Namath",
    16: "Montana",
    19: "Unitas"
};
const playerNumber = 16;
const player = testObj2[playerNumber];
console.log(player);

//question 86 is Updating Object Properties
myDog.name = "Happy Coder";
console.log(myDog.name);

//question 87 is Add New Properties to a JavaScript Object
myDog.bark = "woof";
console.log(myDog.bark);

//question 88 is Delete Properties from a JavaScript Object
delete myDog.tails;

//question 89 is Using Objects for Lookups
function phoneticLookup(val) {
    let result = "";
    const lookup={
        "alpha": "Adams",
        "bravo":"Boston",
        "charlie":"Chicago",
        "delta":"Denver",
        "echo":"Easy",
        "foxtrot":"Frank",
    }
    result =lookup[val];
    return result;
}
  
console.log(phoneticLookup("charlie"));

//question 90 is Testing Objects for Properties
function checkObj(obj, checkProp) {
    
    if(obj.hasOwnProperty(checkProp)){
      return obj[checkProp];
    }else {
      return "Not Found";
    }
}

//question 91 is Manipulating Complex Objects
const myMusic = [
    {
      "artist": "Billy Joel",
      "title": "Piano Man",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    },
    {
      "artist": "Dark Punk",
      "title": "Home Work",
      "release_year": 1973,
      "formats": [
        "CD",
        "8T",
        "LP"
      ],
      "gold": true
    }
];

//question 92 is Accessing Nested Objects
const myStorage = {
    "car": {
      "inside": {
        "glove box": "maps",
        "passenger seat": "crumbs"
       },
      "outside": {
        "trunk": "jack"
      }
    }
};
const gloveBoxContents =myStorage.car.inside["glove box"];

