

function moreUsers(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(info => info.json())
    //it will not working when i use the && instead of ||
    .then(data=>displayMoreUser(data) || displayEmail (data)
    )
}

// get the datas from the data 
function displayMoreUser(data){
   const ul = document.getElementById("user-info");
//    getting individual data
   for(const users of data){
    console.log(users.name);
    // create an element called li
    const li = document.createElement("li")
    // editing text where we put the users data name in the element text
    li.innerText = users.name;
    // append the element to a ul
    ul.appendChild(li)
   }
}

function displayEmail(data){
 const ul = document.getElementById("user-email");
 for(const users of data){
    console.log(users.email);
    
    const li = document.createElement("li")
    li.innerText = users.email;
    ul.appendChild(li)
 }
}