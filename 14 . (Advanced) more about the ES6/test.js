// to acess the object property which is inside the array we can acess by this .
const data = [{name : "hello world", id :1 ,age:12,price :100}]

// console.log(data[0].age);


const product = {
    name : "Laptop",
    details : [{price : 12000,model : "HP"},
            {price: 13000,model :"Dell"},
            {price : 130000, model : "macbook"}
    ]
}

// console.log(product.details[0].model);


const person = {
    name : "Raj",
    age : 23,
    address : {
        city : "Dhaka",
        country : "bangladesh",
        street : {
            first : "Kuratoli",
            second : "AIUB Road"
        } 
    }
}
// this is called chaining 
// console.log(person.address.street.first);
// this is called optional chaining
// console.log(person.address.road?.first);


const numbers = [1,2,43,6,78,6,46,8,0,5,33]
//to use the map we have at least a call back function . and that funtion will work for map . thats mean a map will take the array and go through the loop and then send the element to the function and do the work . and return that as an array again . 
const multi = num => num*num;

const result = numbers.map(multi);
// console.log(result);
// we can do the mapping like this one two . we can send write a executable code within the map function . 
// console.log(numbers.map(num =>num*num));

const names = ["Raj", "Raina" , "Mayad", "Fidbi", "Jahangir", "Jane"];

// map will go through the loop using the each elements and then take the element in the function and works on it and then return the element and after that go to the loop and then so on .. after completing the task it will return a array of that task . 
const friendNames = names.map(friends=>friends[0])

// console.log(friendNames);

// for each work as the map . but the differnce between forEach and map is map return a array but forEach doesnt return anything . map return a opration result inside a array but the foreach not return anything .
const friendsName2 = names.forEach(n=> console.log(n))






