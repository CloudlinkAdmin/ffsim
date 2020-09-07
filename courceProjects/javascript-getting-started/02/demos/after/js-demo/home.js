/*
function showMessage (message){
    document.getElementById('message').textContent = message;
}
*/
// Variables

/*let price = 49.99,
    name = 'Boots',
    discount = false;

price = 99.99;
*/


// Constants
/*const price = 59.99;*/


//showMessage(price);

//=================================
// Types and Operators
/*
let price = 20;

price = price * 3;

price = price - 20;

price = price + 5;

price = price / 3;

//modulus
//price = price % 2;

price += 5;
price /= 2;
price -= 5;
price *= 6;

let taxrate = 10;

price = price - taxrate;


//showMessage(typeof price)
*/


//=======================================
// Strings (Escape notation: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String)

//let message = "Hello \"World\""; 
//showMessage(message);



//================================
//Methods
/*
let name = 'Andrea';
let message = `Hello ${name}`;

message = message.toLowerCase().substring(1);

showMessage(message);
*/

/* Operator precidence

* and / before + and - 

*/

//=======================================
//converting
/*
let amount = 123;
amount = amount.toString(); //to string method
showMessage(typeof amount);
*/
/*
let amount = Number.parseFloat("123.12");
showMessage(typeof amount);*/
/*
let amount = Number.parseFloat("A123.12");
showMessage(amount); //NaN

let amount = Number.parseFloat("123.12A");
showMessage(amount); 
*/

//======================================
// Bools
/*
let saved = false;
saved = !saved; //NOT swiches the logic
showMessage(saved);
*/
/*
let saved= 10;
saved = null; // null is used by programmer, undefined is JS
showMessage(saved);
console.log(saved);
*/

//==============================
// Objects and symbols

/*
let person = {
    firstName: 'John',
    lastName: 'Adams'
};

showMessage(person.firstName);
console.log(typeof person);
*/
//logging
//console.log("Any message...");


//=============================
// PROGRAM FLOW
//=============================

// if
/*
if (5 === 5) {
    console.log ('Yes'); //true
}

if ( 5 > 10) {
    console.log('No'); //false
}

if (5 >= 5) {
    console.log('Yes'); //true
}

let state = 'FL';
let taxPercent = 0;

if (state === 'FL') {
    taxPercent = 0;
}
console.log(taxPercent);
*/

/*
if (true) {
    showMessage('true');
}

if (5 === 5) {
    showMessage('Executed');
}

if (5 > 5) {
    showMessage('True'); //not executed 
}
*/


//truthy - falesy

//Falsy
// false
// 0
// "" (Empty string)
// null
// undefined
// NaN

//Truhty
// Everything NOT falsy
// true
// 0.5
// "0"

// else
/*
let price = 1;
if (price > 10) {
    showMessage('true');
}
else if (price > 5) {
    showMessage('less then 5');
}
else if (price < 4) {
    showMessage('less then 4');
}
*/

// comparing
// === exact match also typeof
// ==  equal to
// !== not equal to
/*
if (1 === "1") {
    showMessage('true');
}
else {
    showMessage('false');
}
*/

//Ternary operator
/*
let price = 20;
let message = (price > 10) ? 'expensive' : 'cheap';
showMessage(message);
*/

//(price > 10) ? showMessage('yes') : showMessage('no');

/*
let price = 20;
let message = (price < 10) ? 'yes' : 'no';
showMessage(message);
*/

// block scope using let
/*
if (true) {
    let value = 'yes';
    showMessage(value);
}

console.log(value); //we get an error (not defined), as vaule only can be accessed in the block
*/

// looping

/*
// for loop 
for (let i = 0; i < 3; i++) {
    console.log(i);
}

// while loop
let count = 1;

while (count < 5) {
    console.log(count);
    count++;
}

// do while loop

let p = 4;

do {
    console.log(p);
    p--;
} while (p > 0);
*/

//===============================
// Functions
//===============================
/*
function bubble() {
    console.log('im a bubble');
}

bubble();
*/
// function declairation
/*
let myFunction = function loggingFunciton() {
    console.log('Here is a message');
}
*/
//calling a function

//myFunction();

//pass parameter into function
/*
function showMessage(message) {
    console.log(message);
}

showMessage('First message');
showMessage('Second message');

function showMessage(message, anotherMessage) {
    console.log(message, anotherMessage);
}

showMessage('First message', 'Second message');

*/

// Return values from function
/*
function getSecretCode(value) {
    let code = value * 42;
    return code;
}

let secretCode = getSecretCode(2);
showMessage(secretCode);
*/

// Function scope
/*
let key = 42;

function getSecretCode(value) {
    
    let keyGenerator = function() { //nested function
        let key = 12;
        console.log('in keyGenerator: ', key);
        return key;
    }
    
    let code = value * keyGenerator();
    console.log(' in getSecretCode: ', key);
    return code;
}

let secretCode = getSecretCode(2);
showMessage(secretCode);
*/

//changePercentOff(30);


//===============================
// Objects
//===============================
/*
let mySymbol = Symbol();


let person = {
    name: "John",
    age: 32,
    partTime: false,
    [mySymbol]: 'secretInformation'
};

person['age'] = 44;

showMessage(person.age);
*/


//===============================
// Methods
//===============================
/*
let person = {
    name: "John",
    age: 32,
    partTime: false,
    showInfo: function(realAge) {
        showMessage(this.name + ' is ' + realAge); //this refers to values in person
    }
};

person.showInfo(34);
//showMessage(typeof person.showInfo);
*/

//===============================
// passing objects to functions
//===============================
/*
let message = 'Hello';

function changeMessage(message) {
    message = 'Hi!';
}

changeMessage(message);
showMessage(message);
*/
/*
let person = {
    name: "John",
    age: 32,
    partTime: false
};

function incrementAge(person) {
    person.age++;
}

incrementAge(person);
showMessage(person.age);
*/


//===============================
// Standard built inn objects
//===============================
/*
let now = new Date();
showMessage( now.toDateString() );


showMessage( Math.abs(-42) );

let s = 'Hello';
showMessage( s.charAt(0) );
*/

//===============================
// Styling objects
//===============================


/*
const header = document.getElementById('message');
header.style.color = 'red';
header.style.color = '#699';
header.style.fontWeight = '100';
*/

//===============================
// Detecting button clicks
//===============================


/*
const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    console.log('click');
});
*/


//===============================
// Show and hide DOM elements
//===============================

//toogle
/*
const button = document.getElementById('see-review');

button.addEventListener('click', function() {
    const review = document.getElementById('review');
    if (review.classList.contains('d-none')) {
        review.classList.remove('d-none');
        button.textContent = 'CLOSE REVIEW';
    }
    else {
        review.classList.add('d-none');
        button.textContent = 'SEE REVIEW';
    }
});

*/

//===============================
// Array
//===============================
/*

//create and initialize
const values1 = [1,2,3];
const values2 = ['en','to','tre'];

console.log(values1);
console.log(values2);

// accessing array items

let values3 = ['a','b','c'];
values3[0] = 'aaa'; // changeing array values
console.log(values3[0]);

// push - add something to an array

const values4 = ['bil','båt','tog'];
values4.push('fly');
console.log( values4 );

// pop - take last off an array
const values5 = ['apple','google','MS','huawei'];
const last = values5.pop();
console.log( values5, last );

// shift  - moves the entire array
const values6 = ['dog','cat','hippo','bug'];
const first = values6.shift(); 
console.log( values6, first );

const values7 = ['dog','cat','hippo','bug'];
values7.unshift('giraffe'); 
console.log( values7 );


//slice 

const values9 = ['a','b','c','d','e'];
const newValues = values9.slice(1,4); // (first,second) first = startplace in array, second = endplace in array
console.log( newValues );

// splice - take out in the middle of array

const values10 = ['a','b','c'];
values10.splice(1,1); // (first, second) first= startplace in array, second = how many elements to delete
console.log( values10 );


// splice - set in, in the middle of array

const values11 = ['a','b','c'];
values11.splice(1,0,'foo'); // (first,second,third) first=place in array, second=how many to delete, third=what to set in
console.log( values11 );

//searching and looping in arrays

const values12 = ['a','b','c','d','e'];
console.log(values12.indexOf('c') );
console.log(values12.indexOf('f') ); //-1

//filter
const values13 = ['a','b','c','d','e'];
const set = values13.filter(function(item) {
    return item > 'b';
});
console.log(set);

//find
const values14 = ['a','bb','ccc','d','e'];
const found = values14.find(function(item) {
    return item.length > 1;
});
console.log(found);


//for each
const values15 = ['a','bb','ccc','d','e'];
values15.forEach(function(item) {
    console.log(item);
});
*/


// Arrays in the DOM

/*
const containers = 
    document.getElementsByClassName('container');
containers[3].classList.add('d-none');

console.log(containers);
*/

//===============================
// Scope adn Hoisting
//===============================

// global scope

/*
let productId = 12345; //global scope, accessed anywhere in the app

function showProductId() {
    console.log(productId)
}
showProductId();
*/

//best practice
/*
const app = { //only one global application object
    productId: 1234,
    userName: 'joe',
    orderNumber: 436
};
function showProductId() {
    console.log(app.productId)
}
showProductId();
*/

// function scope
/*
function showProductId() {
    let productId = 12345; //this comes into the scope after fix function is done
    
    function fix() {
        let productId = 45678;
        console.log('in fix:', productId); // when this function is done executing the productId/local variable is gone. 
    }
    fix();

    console.log('in showProductId:', productId); // it then uses the productID in the outer function
}

showProductId();
*/

// Hoisting - calling variables before inits
/*
productId = 456;
console.log(productId); // get an error because we use the variable before it has been declaired
let productId = 123;
*/
//----
/*
showProductId();  // this works fine with functions though

function showProductId() {
    console.log(123);
}
*/

// Undeclared variables
/*
'use strict'; // strict mode gives you more errors - easier to troubleshoot
productId = 1234;
console.log(productId); 
*/
/*
'use strict'; 
const productId = 1234;
console.log(productId); 
*/