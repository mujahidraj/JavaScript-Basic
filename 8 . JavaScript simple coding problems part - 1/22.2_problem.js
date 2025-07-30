// ### Task-2: 
// You are given an array of numbers. Count how many times the a number is repeated in the array. 

// sample-input: 
// numbers = [5,6,11,12,98, 5]

// find: 5

// output: 2

// <br/>

// sample-input: 

function countNum (arr,finding){

    let count = 0;

    for(const num of arr){
        if(num === finding){
            count++
        }
    }
    return count;

}

let array = [,12,3,4,4,3,2,5,4,5,4,9,8,4]

let find =11 ;

console.log(countNum(array,find))

