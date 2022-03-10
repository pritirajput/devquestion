//question 38 is Store Multiple Values in one Variable using JavaScript Arrays
let myArray1 = ["string",3];
console.log("array store multiple value : "+myArray1);

//question 39 is Nest one Array within Another Array
let myArray2 = [["string",1],["string",2]];
console.log("Nest one Array within Another Array : "+myArray2);

//question 40 is Access Array Data with Indexes
let myArray3 = [50, 60, 70];
myArray3 [0];
let myData = myArray3[0];
console.log("Array Data with Indexes : "+myData);

//question 41 is Modify Array Data With Indexes
let myArray4 = [18, 64, 99];
myArray4[0] = 45;
console.log("Modify Array Data With Indexes : "+myArray4);

//question 42 is Access Multi-Dimensional Arrays With Indexes
let myArray5 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [[10, 11, 12], 13, 14],
]; 
let myDataArray = myArray5[2][1];
console.log("Multi-Dimensional Arrays With Indexes : "+myDataArray);

//question 43 is Manipulate Arrays With push()
let myArray6 = [["John", 23], ["cat", 2]];
myArray6.push(["dog",3]);
console.log("Array with push : "+myArray6);

//question 44 is Manipulate Arrays With pop()
let myArray7 = [["John", 23], ["cat", 2]];
let removedFromMyArray =myArray7.pop();
console.log("Array with pop : "+myArray7);

//question 45 is Manipulate Arrays With shift()
let myArray8 = [["John", 23], ["dog", 3]];
let removedArray = myArray8.shift();
console.log("Array with shift : "+myArray8);

//question 46 is Manipulate Arrays With unshift()
let myArray9 = [["John", 23], ["dog", 3]];
myArray9.shift();
myArray9.unshift(["Paul",35]);
console.log("Array with unshift : "+myArray9);
 
//question 47 is Shopping List
const myList = [["first",1],["second",2],["third",3],["forth",4],["fivth",5]];
console.log("array list : ",myList);


