// # js-problems-part1-practice-tasks

// ### Task-1: 
// Write a function to convert temperature from Celsius to Fahrenheit.

// ---

function cTof(Celsius){
    let result = ((Celsius * 9)/5) + 32;
    return result + " °F";
} 

console.log(cTof(32));
