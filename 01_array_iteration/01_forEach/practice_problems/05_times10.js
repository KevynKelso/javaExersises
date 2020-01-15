/* ------------------------------------------------------------
Using forEach, iterate over the numbers array and multiply 
each number by 10, storing these new numbers in the times10 
array.

times10 should be: [10,20,30,40,50,60,70,80,90,100]
------------------------------------------------------------ */
const numbers = [1,2,3,4,5,6,7,8,9,10];

let times10 = [];

numbers.forEach((number) => {
    number *= 10;
    times10.push(number);
})

console.log(times10);