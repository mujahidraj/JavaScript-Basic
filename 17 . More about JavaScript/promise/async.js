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
.then(data=>console.log("Resolved data" , data)
)
.catch(err => console.log("Rejected data" ,err)
)

