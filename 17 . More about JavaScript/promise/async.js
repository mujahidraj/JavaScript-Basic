const loadData = () => {
    return new Promise((resolve, reject) => {

        const data = Math.floor(Math.random() * 10) + 1

        if (data <= 5) {
            resolve(data)
        }
        else {
            reject(data)
        }


    })
}

loadData()
    .then(data => console.log("Resolved data", data)
    )
    .catch(err => console.log("Rejected data", err)
    )

// fetch("")
//     .then(res => res.json())
//     .then(res => console.log(res)
//     )
//     .catch(err => console.log(err)
//     )


// Convenient way
//  loadingData = async() =>{
//     const res = await fetch('')
//     const data = await res.json();
//     console.log(data);
        // return data
//  }