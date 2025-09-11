// javascript is a highly abstracted programming language
// an abstraction is a way of hiding the implementation details and showing only the functionality to the users 
// we dont have to....
/*
handle resource management and memory allocation
hanfle garbage collection
doveloper can focus on logics
improve understandability and maintainability 
*/

// javascript is not an interpreted language
// mordern js is JIT compiled 
// JIT convert the code intp the machine code and execute them imediately 



// js is a multi paradigm programming language
/*
procedural programming
object oriented programming
functional programming
*/

// js is a prototype based programming language
// js is a dynamically type programming language

// execution context is a envoironment 
// in execution context a piece of javascript code gets executed

// everything is store in the execution context
// there are two type of execution context 
// global execution context
// function execution context

// javascript work as a single thread 
//  javascript is a synchronous language 
// single thread means only one statement is executed at a time
// javascript has only one call stack
// javascript runs code line by line 
// synchronous work sequencially . like it will load a contain sequencially .
// whereas asynchronous work in a sequence .

// promise is a object that is eventual completion or failure of an asynchronous operation and its resulting value.

// promise has three state such as pending , reject and resolve

//  promise has 2 parameter resolve and reject 
// to create a promise just like we have to call the promise by new promise(resolve , reject

// a fetch method only rejects when there is network error 

// async/await work wwith the promise to make it more comfortable 
// await can be used in the async function 
// await keywrod make the function pause the execution and wait for the resolve the promise 


// // to pass data to the set time out using the function
// const number3 = (data , name)=>{
//     return console.log(data ,name);
    
// }

// console.log(1);
// console.log(2);
// // we have to put the args in the parameter 3 not in the second one . second one is for the time and the first one for the function that we want to call .
// setTimeout(number3,3000,10, "Raj")
// console.log(4);
// // so whatever it do i have to put the function first then timr and then the arguments
// setTimeout(console.log,4000,5
// )
// console.log(6);
// console.log(7);




// we can write a function inside a settitmeout 
// console.log(1);
// console.log(2);
// setTimeout(()=>{
//     console.log(3);
    
// },4000);
// console.log(4);


// call stack is like stack a running function and the pop after the finishes and then start another one and after that it will pop .

// call stack track of all the operations in a line of execution

// two thing we should know ....1 . what is javascript and 2 . how javascript works

// what is event loop and what is event concurrency 
// what the heck the event loop anyways? philips roberts

// javascript is a single threaded language still it can work as a multiple thread because of event loop and the event queue