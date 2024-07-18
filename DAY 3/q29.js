// Determine the total bill amount including 12% tax, 18% tip, and a $25 service charge for a purchase of $500 with a $50 voucher.

let bill = 500;

let voucher = 50;

let withvoucher = bill - voucher;

let charge = 25;

let tax = withvoucher * (12 / 100);

let tip = withvoucher * (18 / 100)

let totalBill = withvoucher + tip + tax + charge;

console.log(totalBill);

