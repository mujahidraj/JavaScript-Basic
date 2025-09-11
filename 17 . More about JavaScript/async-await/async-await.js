const loadUser = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then(res => res.json())
        .then(data => dataShow(data))
        .catch(err => console.log("Error Founded", err))


}


const loadUserAsync = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json()
    dataShow(data);
}


const dataShow = (data) => {
    for (const person of data) {
        console.log(person.name)
    }
}

const loadUserTrycatch = async() => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json()
        dataShow(data);
    }
    catch(err) { 
        console.error (console.log("error founded! see the error :" , err)
        )
    }
    finally{
        console.log("code has been executed");
        
    }
}