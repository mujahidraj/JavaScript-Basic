
// ### Task-4  
// Write a function called count_zero() which will take a binary string (Binary string is a string which is consist of only 0 and 1) as parameter and count how many 0’s are there in that string.

function count_zero(zeros) {
    let count = 0;    
    for (let i = 0; i < zeros.length; i++) {
        if (zeros[i] == "0") {
            count++
        } 
    }
     return count;
}

let binaryString = "10100010";

console.log(count_zero(binaryString));


