function cheapest_phone(phoneList) {
    let cheapestPhone = phoneList[0];
    for (const cheap of phoneList) {
        if (cheap.price < cheapestPhone.price) {
            cheapestPhone = cheap;
        }
    }
    return cheapestPhone;
}


function expensivePhone(phoneList) {
    let expensivePhone = phoneList[0];
    for (const expensive of phoneList) {
        if (expensive.price > expensivePhone.price) {
            expensivePhone = expensive;
        }
    }
    return expensivePhone;
}



const phones = [
    {
        name: "Iphone",
        price : 120000,
        color : "Blue",
        ram : "3gb",
        camera : "12mp"
    },
    {
        name: "Samsung",
        price : 96000,
        color : "Black",
        ram : "12gb",
        camera : "200mp"
    },
    {
        name: "Xiaomi",
        price : 40000,
        color : "Gray",
        ram : "8gb",
        camera : "50mp"
    },
    {
        name: "Vivo V25",
        price : 42000,
        color : "Paste",
        ram : "8gb",
        camera : "24mp"
    },
    {
        name: "Nokia",
        price : 20000,
        color : "red",
        ram : "4gb",
        camera : "12mp"
    }
]

console.log(cheapest_phone(phones));

console.log(expensivePhone(phones));
