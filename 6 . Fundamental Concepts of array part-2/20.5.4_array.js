// ### Task 4 (Hard)

// Reverse the words of a sentence. Only the position of the word will be reversed. check out the output

// **Input:**
// `const statement = 'I am a hard working person'`

// **Output:**

// `'person working hard a am I'`

// ---

const statement = 'I am a hard working person';

let splittedArray = statement.split(' ')


let reversedWord = [];

for(let words of splittedArray){
    reversedWord.unshift(words)  
}

console.log(reversedWord.join(" "))