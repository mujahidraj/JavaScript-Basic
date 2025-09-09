function usersLoad(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUsers(data))
}

function displayUsers(data){
    for(const users of data){
        console.log(users.name);
        
    }
   
    

}