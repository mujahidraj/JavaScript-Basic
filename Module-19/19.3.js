
/***

Subtask-1:

Display sum of all the odd numbers from 81 to 131.

 */
/***

Subtask-2:

Display sum of all the even numbers from 206 to 311.

 */

// sum of all odd number

let num=81;
sum=0;

while(num<=100){
    if(num % 2 !== 0){
        sum=sum+num;
    }
    num++;
}

console.log(sum)

// sum of even number

let num2=206;
let sum=0;

while(num2<=311){
    if(num2 % 2 === 0){
        sum=sum+num2;
    }
    num2++;
}
console.log(sum)