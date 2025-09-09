function usersLoad(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data =>displayUsers(data))
}

function displayUsers(data){
    const newObject = data;
    console.log(newObject);
    

}