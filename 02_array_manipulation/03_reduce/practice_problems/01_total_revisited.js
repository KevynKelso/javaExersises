/* ------------------------------------------------------------
Refactor the total exercise to use the reduce() method 
instead of the forEach() method and log the result.

Total should equal: 21.97

const prices = [6.75, 3.10, 4.00, 8.12];

let total = 0;
prices.forEach(price => total += price);

console.log(total);1
------------------------------------------------------------ */
const prices = [6.75, 3.10, 4.00, 8.12];

let total = prices.reduce((total, price) => {
  return total + price
}, 0)

console.log(total)