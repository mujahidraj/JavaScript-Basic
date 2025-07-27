

// Loop through an object and print the key-value pairs with their `types`



let myObject = {

    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true

};


for(const properties in myObject){
    console.log("Key :" , properties , "|" , "type :"  , typeof properties )
}

