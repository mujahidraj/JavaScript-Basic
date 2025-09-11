

const messages = "Hello world!"

let count = 0


const intervalId = setInterval((messages)=>{
    console.log(messages);
    count++
    if(count >5){
        clearInterval(intervalId)
    }
    
},2000,messages)

