// Write C Program to find gross salary by adding % of HRA, DA, and TA of user choice.

baseSalary = 100;

let HRA = (baseSalary * 10) / 100;

let DA = (baseSalary * 5) / 100;

let TA = (baseSalary * 8) / 100;

let total = baseSalary + HRA + DA + TA;

console.log(total);
