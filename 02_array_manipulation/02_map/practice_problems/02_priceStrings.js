/* ------------------------------------------------------------
Use the map() method to convert prices into an array of price 
strings.

Result should be: [ '$5.00', '$4.23', '$6.40', '$8.09', '$3.20' ]

Hint:
You will need to use the toFixed() method to properly format your 
numbers.

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed
------------------------------------------------------------ */
const prices = [5, 4.23, 6.4, 8.09, 3.20];

priceStrings = prices.map((price) => {
  return "$" + price.toFixed(2)
})

console.log(priceStrings)