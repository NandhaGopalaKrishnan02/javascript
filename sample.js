//API
//---
// function helloWorld() {
//   //
//   console.log("hello world");
// }

// //spring boot
// function saveUser() {
//   //
//   console.log("hello world");
// }

// helloWorld();
// https:localhost:8082/login -> call the function which is residing in server
// https:localhost:8082/api/v1/user/save
// https:localhost:8082/api/v1/users/userName

// function call -> client
// function definition -> server

//variables
//----------
/*
var -> function scope
----------------------
function variables() {
  // Available only to this function
  var i = 1;
  console.log(i);
}
// console.log(i); // throw reference errors
variables();

let and const
-------------
let -> modify the variable
cont -> we cant modify
block scope

let
---
var j = 1;
if (j < 5) {
  //Accessible only to this block
  let letVar = 2;
  letVar += 1;
  console.log(letVar);
}
console.log(letVar);

const
-----
var j = 1;
if (j < 5) {
  const constVar = 2;
  // constVar += 1; // not allowed to change const variable
  console.log(constVar);
}
console.log(constVar);
*/

// Object
//-------
//declaration
// let obj = {
//   userName: "nandhu",
//   password: "12345",
//   printHelloWorld: function () {
//     console.log("hello javascript");
//   },
//   address: {
//     street: "no 10 ",
//     city: " ",
//     state: "",
//   },
//   roles: [
//     {
//       roleName: "Role_Admin",
//     },
//   ],
// };

// access properties
// console.log(obj.address.city);

// obj.printHelloWorld();

// // iterate through object
// let obj2 = {
//   userName: "nandhu",
//   password: "12345",
// };

// for (let prop in obj2) {
//   // print key
//   console.log(prop);
//   // print value
//   console.log(obj2[prop]);
// }

// Array Functions
//------------------
//let array = [1, 2, 3, 4, 5];

// 1) map array function
// To change elements in array to some other form we will use map
// array size shouldn't be changed
// function square(num) {
//   console.log(num);
//   if (num % 2 == 0) return num * num;
//   else return num;
// }

// let result = array.map(square);
// console.log(result);

// filter method
//-------------
// Add elements in new array only if condition satisfied
// array size can be changed
// function getEvenNumbers(num) {
//   console.log(num);
//   if (!(num % 2 == 0)) return num;
// }

// // [1,2,3,4,5,6] -> [1,4,9,16,25,36]

// let result2 = array.filter(getEvenNumbers);
// console.log(result2);

// Callback (passing function as a parameter that callback function may be called later)
// --------

// function func1(f) {
//   console.log("func1");
//   console.log(f);
//   f();
// }

// function func2() {
//   console.log("func2");
// }
// func1(func2);

// function func3() {
//   console.log("func3");
// }

// setTimeout(func3, 5000);

// Arrow functions
//----------------
// In javascript, we can assign function to a variable
// function helloworld() {}
const helloworld = function () {
  console.log("heelo");
};
helloworld();

// Arrow func Syntax
const helloJavascript = () => {
  console.log("hello javascript");
};
helloJavascript();
// normal function
function hello(num) {
  return num * num;
}
// If we have one statment inside function then
//  1) no need to add curly braces
//  2) no need to add return keyword, it will return automatically
// Arrow function
const helloArrow = (num) => num * num;
console.log(helloArrow);
const result = helloArrow(2);
console.log(result);
const strArrow = (str) => str.split(",");
console.log(strArrow("im, learning, java"));

// html -> structure the page
// css -> designing the page
// javascript -> functionality

// DOM(Document Object Model) ->
// it looks like a javascript object(html, head, body), everything that we are writing in html stored as javascript object
// It is not a part of javascrit compiler , it is part of browser.
// Javascript is used to manipulate the DOM.
