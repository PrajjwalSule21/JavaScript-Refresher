// Data Types and Type System in JavaScript

// There are 2 types of data types in JavaScript:
// 1. Primitive Data Types
// 2. Reference Data Types

// Primitive Data Types:
// This will written without brackets. We can copy this data types directly to another variable.

// Reference Data Types:
// This will be written with brackets. we cannot copy this data types directly to another variable.

 
// Primitive Data Types
// string, number, boolean, null, undefined, symbol, bigint


// Reference Data Types
// object, array, function, date, regex
// {} []  ()


// Example of Primitive Data Types
let name = "John"; // string -> '', "", ``
let age = 30; // number
let isStudent = true; // boolean
let address = null; // null
let phoneNumber; // undefined
let uniqueId = Symbol('id'); // symbol
let bigNumber = BigInt(12345678901234567890); // bigint

console.log(typeof name); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
console.log(typeof address); // object (null is a special case)
console.log(typeof phoneNumber); // undefined
console.log(typeof uniqueId); // symbol
console.log(typeof bigNumber); // bigint


let a = 12;
let b = a;

a = a + 2; // this will not change b


let num = [1,2,3]
let num2 = num; // this will copy the reference of the array

num.push(4); // this will change num2 as well 
num2.push(5); // this will change num as well




// Symbol -> unique immutable value
let u1 = Symbol('uuid');
let u2 = Symbol('uuid');

// when we do this u1 === u2 -> False, because Symbol make them unique not same.

obj = {
    uuid: 21,
    name: "prajjwal",
    email: "prajjwal@test.com"
}

let u3 = Symbol("uuid");
obj[u1] = "2121";

// when we check obj so it will create new Symbol(uuid), and not override the eixisting one.
// {uuid: 21, name: 'prajjwal', email: 'prajjwal@test.com', Symbol(uuid): '2121'}email: "prajjwal@test.com"name: "prajjwal"uuid: 21Symbol(uuid): "2121"[[Prototype]]: Object

// Number.MAX_SAFE_INTEGER -> 9007199254740991 (this the max value of an integer that we can hold in variable)

// bigint can give us that liberty to cross this max limit.

let bign = 9007199254740991n;

// this is bigint variable, and if we want to add some more into this, then that should be bigint (not noraml int)
// ex: bign + 21n -> 9007199254741012n
// ex: bign + 21 ->  TypeError: Cannot mix BigInt and other types, use explicit conversions.
// Having n after the number create that number in bigint from normal integer.

// arrays

let arr1 = [1,2,3];
let arr2 = arr1

arr2.pop(3) // This will pop value from arr1, because arr2 uses the reference of arr1, not copy it explicitly.


// object

let nameobject1 = {
    name: "Prajjwal",
};

let nameobject2 = nameobject1;

nameobject2.name = "Tanu";

// This will also chage the name of nameobject1, as it uses its reference.


// Whenever you see any bracket, it is reference data type.


// Dynamic Typing -> You can change data at any time, because of dynamic typring.

let dynamicVariable = 21;
dynamicVariable = 'Twenty One';
dynamicVariable = true;


// types of quirks -> you can check type of values, you don't need guess it.

typeof dynamicVariable // -> boolean
typeof NaN // -> number. 


// Example of Quirks
// NaN == Nan -> False
// .1 + .4 -> 0.5 but .1 + .2 = 0.3908098090
// 1 + "1" -> "11"
// 1 == "1" -> True, 1 === "1" -> False



// type Coercion (== vs ===)

// type coercion -> it is a concept which automatically convert the type of a value

"5" + 1 // This is possible in JS because of type coercion -> "51"
// if any one of them operand is string then JS decide to contcat them.

"5" - 1 // This will became 4, because of type coercion in JS
// as + have two operation one is addition and other is concatination.
// a - have only one operation which subtraction

// Truthy vs Faslsy values

// 0 flase "" null undefined NaN document.all -> Falsy nature
// all apart from these are -> Truthy nature

