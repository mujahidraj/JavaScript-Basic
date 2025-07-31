// ### Task -1: 
// Find the lowest number in the array below.
// <br>
// `const heights2 = [167, 190, 120, 165, 137];`

// ---

function lowestNumber(numbers) {
    let lowestNumbers = numbers[0];
    for (const number of numbers) {
        if (lowestNumbers > number) {
            lowestNumbers = number;
        }
    }
    return lowestNumbers;
}

const heights = [54, 76, 54, 21, 87, 9, 65];

console.log(lowestNumber(heights));
