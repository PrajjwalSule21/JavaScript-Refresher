// var, let, const 


// variable is a kind of a container which store some value or data.

// var - part of ES5
// let const - part of ES6

var a = 21;

var username = "prajjwal";

var maths = ((12*23*45)%21)*2121;

var a;

let a = 21;

const a = 21; // this is constant

a = 21; // this can still create variable, but not good practice, we can say kind of loop hole of JS, that it allow us to create variable.


// decalaration and initialization

var b; // declaration

var b = 21; // declare and initialize (first value, whenever we give first value to a varaible to called as initialization)

// whenever we create variable with var, so there are some problem with it:
// 1. It will add it in window.
// 2. It is always function scoped.
// 3. We can declare it again with same name, and there is no error.

var c = 12;
var c = 13;


let d = 21;
// let d = 12; // this will give error
// let is must way or better way to declare variable

const name = "prajjwal";
const lastname = "sule";
// These values are constant in entire program, it can be changed, and if we do so then we got error


// Scope (global, block, functional)

// means what will be the scope of variable.

// global scope
var ab = 2121; // it can used every where


// block scope
{
    var ba = 1212; // this can be used in this block, but var don not respect block so it can used even outside this block.

    let cd = 1212; // this is a right block scope variable, and only can accessible or used in this block.
}

// functional scope

function abcd(){
    let a = 10; // this can only be used inside this function.
    if(true){
        var x = 10; // this can be used outside this block, because var do not respect block scope.
        let y = 20; // this can only be used inside this block.
    }
}


// Reasignment and Redeclaration

// reassign means giving a value to a variable which is already declared.
// redeclare means declaring a variable with same name again.

var xy = 10;
xy = 20; // this is reasignment, and it is allowed with var, let, const


let yz = 20;
// yz = 30; // this is reasignment, and it is allowed with let,
// let yz = 40; // this is redeclaration, and it is not allowed with let    


// Temporal Dead Zone (TDZ)

// It is a time period when variable is not accessible, even it is declared.

console.log(tdz); // this will give error, because tdz is not defined yet, it is in TDZ.


// the sapce above the variable declaration is called Temporal Dead Zone (TDZ).
let tdz = 12; 


// temporal dead zone is not work on var.
console.log(tdzVar); 
var tdzVar = 21; 

// Hoisting impact per type of variable

// Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase.
// When we create variable in Js, it will divided into two parts: declaration and initialization, abvoe is the declare part and below is the initialization part.


// var hoisting
// like at the backend
// var a = undefined;
// a = 21;

console.log(a); // undefined
var a = 21; // initialization

// let hoisting
// let a; // declaration
// a = 21; // initialization

// console.log(b); // this will give error, because let is not hoisted.

// const hoisting
// const a; // declaration
// a = 21; // initialization

// console.log(c); // this will give error, because const is not hoisted.

// Hoisting is a mechanism in JavaScript where variable and function declarations are moved to the top of their containing scope during the compile phase.
// This means that you can use variables and functions before they are declared in the code, but only for var, not for let and const.

// In the case of var, the variable is hoisted and initialized with undefined, so you can access it before its declaration, but it will return undefined.
// For let and const, they are also hoisted, but they are not initialized, so accessing them before their declaration will result in a ReferenceError due to the Temporal Dead Zone (TDZ).


// var -> Hoist -> undefined
// let -> Hoist -> TDZ (Temporal Dead Zone) (X) no initialization
// const -> Hoist -> TDZ (Temporal Dead Zone) (X) no initialization

// In summary, var is hoisted and initialized with undefined, while let and const are hoisted but not initialized, leading to a ReferenceError if accessed before declaration.

// In practice, it's recommended to always declare variables at the top of their scope to avoid confusion and potential errors related to hoisting.

// Best Practices
// 1. Always use let and const instead of var.
// 2. Use const for variables that won't change, and let for those that will.
// 3. Declare variables at the top of their scope to avoid confusion with hoisting.
// 4. Avoid using global variables unless absolutely necessary.

