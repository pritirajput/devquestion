// question 24 is Escaping Literal Quotes in Strings
let myStr1 = "I am a \"double quoted\" string inside \"double quotes\".";
console.log(myStr1);

//question 25 is Quoting Strings with Single Quotes
let myStr2 = '<a href="http://www.example.com" target="_blank">Link</a>';
console.log(myStr2);

//question 26 is Escape Sequences in Strings
let myStr3 = "FirstLine\n\t\\SecondLine\nThirdLine"; 
console.log(myStr3);

//question 27 is Concatenating Strings with Plus Operator
let myStr4 = "This is the start." + " This is the end.";
console.log("plus operator in string : "+myStr4);

//question 28 is Concatenating Strings with the Plus Equals Operator
let myStr5 = "This is the first sentence.";
myStr5 += " This is the second sentence.";
console.log("Plus equal operator in string : "+myStr5);

//question 29 is Constructing Strings with Variables
let myName = "My name is";
let myStr6 = " Priti " +myName+ "and i am well";
console.log("constructing string : "+myStr6);

//question 30 is Appending Variables to Strings
let someAdjective = "easy to understand";
let myStr7 = "Learning to code is ";
myStr7 += someAdjective;
console.log("Appending Variables to Strings : "+myStr7);

//question 31 is Find the Length of a String
let lastNameLength = 0;
const lastName = "Lovelace";
lastNameLength = lastName.length;
console.log("length of a string : "+lastNameLength);

//question 32 is Use Bracket Notation to Find the First Character in a String
let firstLetterOflastName = "";
firstLetterOflastName = lastName[0];
console.log("frist character in a string : "+firstLetterOflastName);

//question 33 is Understand String Immutability
let myStr8 = "Jello World";
myStr8 = "Hello World"; 
console.log("String Immutability : "+myStr8);

//question 34 is Use Bracket Notation to Find the Nth Character in a String
let thirdLetterOflastName= lastName[2];
console.log("nth character :"+thirdLetterOflastName);

//question 35 is Use Bracket Notation to Find the Last Character in a String
let lastLetter = lastName[lastName.length -1];
let lastLetterOfLastName = lastLetter; 
console.log("last character in a string : "+lastLetterOfLastName);

//question 36 is Use Bracket Notation to Find the Nth-to-Last Character in a String
let secondToLastLetterOfLastName = lastName[lastName.length -2];
console.log("Nth-to-Last Character in a String : "+secondToLastLetterOfLastName);

//question 37 is Word Blanks
let myNoun = "dog";
let myAdjective = "big";
let myVerb = "ran";
let myAdverb = "quickly";
let wordBlanks = "The " + myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; 
console.log(wordBlanks);
