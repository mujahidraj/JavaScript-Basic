// https is a secure encrypted system 

// json = JavaScript Object Notation 

const person = {
    name : {
        first : "Moizuddin",
        second : "Mohammad",
        third : "Mujahid",
        Forth : "Rashid",
        fifth : "Raj"
    },
    address : "Dhaka",
    age : 25,
    isAdult : true
}

// using the jason.stringify we can convert the javascript values into the jason string and json .

// console.log(person);
// console.log(typeof person);

const personJSON = JSON.stringify(person);

// console.log(personJSON);
// console.log(typeof personJSON);


// to convert a json string to an object we can use the parse to convert it into the object 

console.log(JSON.parse(personJSON));

