// Determine the total bill amount including 8% tax and a $20 service fee for a purchase of $250 with a $30 discount.

let purchase = 250;

let discount = 30;

let withDiscount = purchase - discount;

let fee = 15;

let tax = withDiscount * (8 / 100);

totalBill = withDiscount + fee + tax;

console.log(totalBill);

