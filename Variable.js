// ==============================
// JavaScript Variables – Notes
// ==============================

// 1) What is a Variable?
// ---------------------
// A variable is a container to store data.

// Example:
// let name = "Nabil";

// ------------------------------------------------

// 2) Types of Variables
// --------------------

// A) var (OLD – avoid)
// -------------------
// - Function scoped
// - Can be redeclared
// - Hoisted with value = undefined
// - Causes bugs

// Example:
// var x = 10;

// ------------------------------------------------

// B) let (Recommended)
// -------------------
// - Block scoped { }
// - Value can be changed
// - Cannot redeclare in same scope
// - Not usable before declaration

// Example:
// let age = 20;
// age = 21;

// ------------------------------------------------

// C) const (Best by default)
// -------------------------
// - Block scoped
// - Value cannot be reassigned
// - Must be initialized immediately

// Example:
// const PI = 3.14;

// Note:
// Objects/arrays inside const CAN change

// const user = { name: "Nabil" };
// user.name = "Sir"; // allowed

// ------------------------------------------------

// 3) Scope
// --------
// Block Scope: let, const
// Function Scope: var

// Example:
// {
//   let a = 10;   // not accessible outside
//   var b = 20;   // accessible outside (bad)
// }

// ------------------------------------------------

// 4) Hoisting
// -----------
// var → hoisted, value = undefined
// let/const → hoisted, but Temporal Dead Zone (error)

// Example:
// console.log(x); // undefined
// var x = 5;

// console.log(y); // Error
// let y = 5;

// ------------------------------------------------

// 5) Best Practice
// ----------------
// - Use const by default
// - Use let if value will change
// - Never use var

// ------------------------------------------------

// 6) One-line Interview Answer
// ----------------------------
// JavaScript has three variables: var, let, and const.
// let and const are block scoped, and const is preferred.




var money = 5000;
money = 2500;
console.log(money);



const name = "Nabil";
console.log(name);

const isBlack = true;
const isWhite = false;
console.log(typeof isBlack, typeof isWhite);

const a = 20;
 const b = parseInt('20'); // Striing to purno Number convert (parseInt).
 const c = parseFloat('20'); // Striing to dosomic Number convert (parseFloat).
 console.log(a + b);
 
 const d = (9.7);
 const e = (4.7); 
 const total = d + e;
 console.log(total.toFixed(2)); // ( toFixed ) Dosomic er pore kono sonkha nibo seta.