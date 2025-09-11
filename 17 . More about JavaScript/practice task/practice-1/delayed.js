setTimeout(console.log , 5000,"Hello Chandu")

const delayGreeting = (names,times)=>{
    
    setTimeout(console.log,times,"hello,",names);
    
}

console.log(delayGreeting("Alice!",2000));

