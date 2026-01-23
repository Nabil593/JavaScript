// ==============================
// JavaScript Operators – Notes
// ==============================

// 1) What is an Operator?
// ----------------------
// An operator is a symbol that performs an action on values.

// Example:
// 5 + 2  → + is operator

// ------------------------------------------------

// 2) Arithmetic Operators
// ----------------------
// +   Addition
// -   Subtraction
// *   Multiplication
// /   Division
// %   Modulus (remainder)
// **  Power

// Example:
// 10 % 3  // 1
// 2 ** 3  // 8

// ------------------------------------------------

// 3) Assignment Operators
// ----------------------
// =    assign
// +=   add and assign
// -=   subtract and assign
// *=   multiply and assign
// /=   divide and assign

// Example:
// let x = 10;
// x += 5; // x = 15

// ------------------------------------------------

// 4) Comparison Operators
// ----------------------
// ==   equal (value only)
// ===  strict equal (value + type)
// !=   not equal
// !==  strict not equal
// >    greater than
// <    less than
// >=   greater or equal
// <=   less or equal

// Example:
// 5 == "5"   // true
// 5 === "5"  // false

// ------------------------------------------------

// 5) Logical Operators
// -------------------
// &&   AND
// ||   OR
// !    NOT

// Example:
// true && false  // false
// true || false  // true
// !true          // false

// ------------------------------------------------

// 6) Unary Operators
// ------------------
// ++   increment
// --   decrement
// typeof  check type

// Example:
// let a = 5;
// a++; // 6
// typeof a; // "number"

// ------------------------------------------------

// 7) Ternary Operator
// -------------------
// condition ? value1 : value2

// Example:
// let age = 18;
// let result = age >= 18 ? "Adult" : "Minor";

// ------------------------------------------------

// 8) String Operator
// ------------------
// +   used to join strings

// Example:
// "Hello" + " World" // "Hello World"

// ------------------------------------------------

// 9) Important Interview Tips
// ---------------------------
// - Always prefer === over ==
// - Logical operators return true/false
// - % gives remainder, not percentage

// ------------------------------------------------

// 10) One-line Interview Answer
// -----------------------------
// Operators are symbols used to perform operations on values,
// such as arithmetic, comparison, logical, and assignment.








var price = 20;
price += 10;
console.log(price); //Shorthands

const a = 30;
const b = '50';
const sum = a + b; // It works just for when it is Subtition (+)  
console.log(sum);

const n = 12;
const m = 'Nabil';
const total = n - m;
console.log(total);

const k = isNaN(2 - 10);
console.log(k);