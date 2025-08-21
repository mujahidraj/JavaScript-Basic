
//this a arrow function that can be used to simplifies the function
const multiply = (number1, number2) => number1 + number2;

// console.log(multiply(2,2))

// string can be written in the double qoutation , single qoutation or in the backtick 
//string in the backtick can be easier to use as it can make a string multiple line , double line , space line or any variable can be written 

const aString = `hello my name is raj
and i am a web developer`;

const bString = `${aString} and also a frontend focued full stack developer.`

// console.log(bString);

const raj = {
    names: "Moizuddin Mohammad Mujahid Rashid",
    age: 45,
    semester: "12th",

}

const { age } = raj;

// console.log(age);

const array = [12, 4, 56, 8, 34, 2, 124, 5, 3, 21, 5];

const array2 = [12, 23, ...array, 1, 2,3, 4, 5,6]

// console.log(array2);

const array3 = array2;

array2.push(111);

// console.log(array3);
// console.log(array2);

const [first , second ,,forth] = array;


console.log(forth);


