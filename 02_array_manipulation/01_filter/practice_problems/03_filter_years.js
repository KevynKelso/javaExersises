// ------------------------------------------------------------
// Using the filter method on the years array, return an array 
// of only the years in the twentieth century (remember: the 
// twentieth century includes the year "2000"). See the 
// comments for the correct result. Store the new array in the 
// variable century20.
// 
// century20 should be: [1989, 2000, 1999, 1973]
// ------------------------------------------------------------
const years = [1989, 2015, 2000, 1999, 2013, 1973, 2012];

let century20 = years.filter((year) => {
  return year <= 2000
  ? year
  : null
})

console.log(century20)