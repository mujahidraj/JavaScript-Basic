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


