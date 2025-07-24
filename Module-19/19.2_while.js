/***

Subtask-1:

Find all the odd numbers from 61 to 100.

 */


/***

Subtask-2:

Find all the even numbers from 78 to 98.

 */


// subtask - 1
let num = 60;

let num2=78;

while(num<=100){
    if(num % 2 !== 0){
        console.log(num)
    }
    num++;
}

// subtask-2

while(num<=98){
    if(num%2===0){
        console.log(num)
    }
    num++
}