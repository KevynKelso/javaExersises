/* ------------------------------------------------------------
Use the forEach() method to create a new array containing 
the capitalized version of these fruits.

Hint: To get started, you need to define a new array 
to store the new strings:

let capitalizedFruits = [];
------------------------------------------------------------ */
const fruits = ['apple', 'pear', 'orange', 'cherry'];

let capitalizedFruits = [];


fruits.forEach(fruit => {
    let capitalizedFruit = fruit.charAt(0).toUpperCase() + fruit.substring(1);
    capitalizedFruits.push(capitalizedFruit);
})

console.log(capitalizedFruits);