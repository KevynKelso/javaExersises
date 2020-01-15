/* ------------------------------------------------------------
Using forEach, capitalize all the strings in the months 
array and store them in the array capitalizedMonths.

filteredColors should be: ['JANUARY', 'FEBRUARY', 'MARCH', 'APRIL', 'MAY']
------------------------------------------------------------ */
const months = ['january', 'february', 'march', 'april', 'may'];

let capitalizedMonths = []

months.forEach((month) => {
  const capitalizedMonth = month.toUpperCase()
  capitalizedMonths.push(capitalizedMonth)
})

console.log(capitalizedMonths)