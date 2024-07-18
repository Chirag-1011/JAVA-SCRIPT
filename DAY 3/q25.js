// Calculate the total bill amount including 25% tax, 15% tip, and a $20 service charge for a purchase of $200.

let amount = 200;

let service = 20;

let tip = amount * 15 / 100;

let tax = amount * 25 / 100;

let totalBill = amount + service + tip + tax;

console.log(totalBill);