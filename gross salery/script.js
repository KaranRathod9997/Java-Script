let base = prompt("Enter Your Basic Salery :");

let tax = 200;

let hra = base * (5 / 100);
let ta = base * (8 / 100);
let ma = base * (7 / 100);

let allow = hra + ta + ma;
let final = Number(base) + allow - tax;

console.log("your Housing Allowance is :", hra);
console.log("your Travel Allowance is :", ta);
console.log("your Medical Allowance is :", ma);

console.log("your Total Allowance is :", allow);

console.log("your Final Salery is :", final);
