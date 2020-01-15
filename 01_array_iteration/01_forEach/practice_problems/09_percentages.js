/* ------------------------------------------------------------
Using forEach, iterate over the percentages and store all 
percentages over 50 percent in the array upperRange.

upperRange should be: [67, 90, 82, 99]
------------------------------------------------------------ */
const percentages = [34, 67, 12, 39, 90, 82, 22, 24, 99];

let upperRange = []

percentages.forEach((percent) => {
  percent > 50
    ?
      upperRange.push(percent)
    :
      null
})

console.log(upperRange)