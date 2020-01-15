/* ------------------------------------------------------------
Using forEach, copy only the first 2 characters of each 
string in the days array and store the abbreviations in 
the dayAbbreviations array.

dayAbbreviations should be: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
------------------------------------------------------------ */
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

let dayAbbreviations = [];

days.forEach((day) => {
    day = day.charAt(0) + day.charAt(1)
    dayAbbreviations.push(day)
})

console.log(dayAbbreviations)