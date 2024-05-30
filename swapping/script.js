// JavaScript Program to perform a swapping of two variables.

let a = prompt("Enter Frist Number :");
let b = prompt("Enter Second Number :");
let c;

console.log("Before swapping :");
document.write("Before swapping :");

console.log("a =", a);
document.write("a =", a);

console.log("b =", b);
document.write("b =", b);

// c = a;
// a = b;
// b = c;

[a, b] = [b, a];

console.log("After swapping :");
console.log("a =", a);
console.log("b =", b);
