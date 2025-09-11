let num=0;
const stopWatch = ()=>{
    num++;
    console.log(num);

    if(num>5){
    clearInterval(intervalId)
}
    
    
}

const intervalId = setInterval(stopWatch,1000)


