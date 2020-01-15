/* ------------------------------------------------------------
Using forEach, iterate over the colors array and store the 
hex colors that start with the letter F (ex. #FF0000) in 
the array filteredColors.

filteredColors should be: ['#FFE0F4', '#FF2D2D', '#F7FFEC']
------------------------------------------------------------ */
const colors = ['#87E2D0', '#559F4D', '#FFE0F4', '#7E7E7E', '#FF2D2D', '#F7FFEC'];

let filteredColors = []

colors.forEach((color) => {
  color[1] == "F"
    ?
      filteredColors.push(color)
    :
      null
})

console.log(filteredColors)