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


// here we learn about the fetch .
// we got to know about the json placeholder 
// using the fetch function we can get a datas from the server side and use that . 
// json placeholder provide us some of the fake data using the api 
// to use the fetch we have to have a html file . thats mean it cannot be use with out the browser involement and for this we have to use the html file 

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

//we have use the above things to test 

// api stand for the application programming interface . an pai act like a kink to added two application to talk to eaach other 

// there is 2 type . crud and restful api
// crud = create , read , update , delete
// restful api = get, post , put,patch and delete

// get use to collect information from the database
// post use to send information in the database
// put use to  post or update data . like if the data is in the database it will replace it and if the data is not there it will create one
// patch use to update existed data
// delete use to delete data 