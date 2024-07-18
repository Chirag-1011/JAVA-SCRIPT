// Determine the total bill amount including 10% tax and a $15 delivery fee for a purchase of $300 with a $50 discount.

let purchase = 300;

let discount = 50;

let withDiscount = purchase - discount;

let fee = 15;

let tax = withDiscount * (10 / 100);

totalBill = withDiscount + fee + tax;

console.log(totalBill);

