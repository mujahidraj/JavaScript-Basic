// ### Task 1

// Write a JavaScript code to reverse the array colors `without using the reverse method`.

// **Input:**
// `const colors = ['red', 'blue', 'green', 'yellow', 'orange']`

// **Output:**

// `['orange', 'yellow', 'green', 'blue', 'red']`

// ---

const colors = ['red', 'blue', 'green', 'yellow', 'orange'];

let reversedArray = [];

// for (let color of colors){
//     reversedArray.unshift(color)
// }

// console.log(reversedArray)

// for(let i=colors.length;i>=0;i--){
//     console.log(colors[i])
// }

for (let i=0;i<colors.length;i++){
    reversedArray.unshift(colors[i])
}

console.log(reversedArray)