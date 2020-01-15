/* ------------------------------------------------------------
Using the forEach() method, calculate total cost by adding
this list of prices up and logging the result to the console.

Result should be: 21.97

Hint: To get started, you need to define a new variable 
to store the total:

let total = 0;
------------------------------------------------------------ */
const prices = [6.75, 3.10, 4.00, 8.12];

let total = 0;

prices.forEach((price) => {
    total += price;
});

console.log(total);