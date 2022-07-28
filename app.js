/*
Data Type in JavaScript

Primitive data type

Complex data type

primitive data type:

boolean 
string
number
undefined 
null
symbol

complex data type
object

Boolean have two type:
number one True and number two false
*/

//find type of data:
//boolean
let val = true;
console.log(typeof val);

//number
let nam = 55;
console.log(typeof nam);

//string
let text = "Hello World";
console.log(typeof text);

//null
let findnull = null;
console.log(typeof findnull); //due to bug it show's object.

//symbol
const sym = Symbol('food');
console.log(typeof sym);

//undefine
const und = undefined;
console.log(typeof undefined);

//object in javaScript

let obj ={
    nam: "Tamim",
    age: 28
}
console.log(obj);