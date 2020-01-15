/* ------------------------------------------------------------
Use reduce() to add up the total number of names that start 
with the letter 'G'.

Result should be: 4
------------------------------------------------------------ */
const names = ['Gary', 'Pasan', 'Gabe', 'Treasure', 'Gengis', 'Gladys', 'Tony'];

let total = names.reduce((acc, name) => {
  return name[0].toLocaleLowerCase() === "g"
  ? acc + 1
  : acc
}, 0)

console.log(total)
