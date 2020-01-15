/* ------------------------------------------------------------
The split method turns a string into an array. In the case 
of alphabet below, each letter of the string is being turned 
into an element in an array by split. Using forEach, iterate 
over the alphabet array and store each letter in the array 
noel except for the L character.

noel should be: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
------------------------------------------------------------ */
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

let noel = []

alphabet.forEach((letter) => {
  letter.toLocaleLowerCase() !== "l"
    ?
      noel.push(letter)
    :
      null
})

console.log(noel)