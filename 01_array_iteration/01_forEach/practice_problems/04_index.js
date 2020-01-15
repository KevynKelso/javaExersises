/* ------------------------------------------------------------
The forEach() method takes the index value of each item in 
an array as a second argument.
------------------------------------------------------------ */
const names = ['Selma', 'Ted', 'Mike', 'Sam', 'Sharon', 'Marvin'];

names.forEach((name, index) => console.log(`${index + 1}: ${name}`));

/* ------------------------------------------------------------
Notes: 

The (array, index) parameters are available on ALL 
JavaScript array manipulation/iteration methods that we 
are exploring in these exerciese.

The backticks, ``, are what we call a template literal. 
Anything written between them is interpreted as a string 
LITERALLY. This is good for printing out multiline strings 
(in advanced use cases you will print HTML to the DOM). You 
pass JavaScript variables into template literals using 
${variable_name} notation.

MOST programming languages use zero-based indexing. 
JavaScript is no exception. Sice our array is zero-based
indexed, we must add 1 to have the numbering start at 1.
------------------------------------------------------------ */
