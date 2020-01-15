/* ------------------------------------------------------------
Refactor the fruits exercise. To use the map() method instead
of the forEach() method.

const fruits = ['apple', 'pear', 'orange', 'cherry'];

let capitalizedFruits = [];
fruits.forEach(fruit => {
  let capitalizedFruit = fruit.toUpperCase();
  capitalizedFruits.push(capitalizedFruit);
});

console.log(capitalizedFruits);
------------------------------------------------------------ */
const fruits = ['apple', 'pear', 'orange', 'cherry'];

const capitalizedFruits = fruits.map((fruit) => {
  return fruit.toUpperCase()
})

console.log(capitalizedFruits)

////////////////////////// FOR LOOP ////////////////////////////

let forCapitalizedFruits = [];

for (let i = 0; i < fruits.length; i++) {
  const fruit = fruits[i].toUpperCase()
  forCapitalizedFruits.push(fruit)
}

console.log(forCapitalizedFruits)