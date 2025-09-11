// try catch works like if there is an error in the try section then it will encountered an error . and execute the others code . but if there is no try catch it will not execute the other code 
try{
console.log(names);
}
// if there is a error in the try section then it will catch the errro and show us 
catch(err){
    console.error("Error encountered :",err);
    
}
// finally work like if there is a error or there is not an error . what ever happens the code inside the finally must be execute . there is no doubt 
finally{
    console.log("my name is ");
    
}

console.log("raj");

