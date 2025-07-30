// ---
// ### Task-4: 
// Write a function to find the longest word in a given string.

// sample-input: 
// I am learning Programming to become a programmer

// sample-output: Programming

function longest_word (strings){

    let longestWord = " ";

    let splitted = strings.split(" ")

    console.log(splitted)

    for(const words of splitted){

        if(words.length> longestWord.length){
            longestWord = words;
        }

    }

    return longestWord;

}

let mainString = "I am learning Programming to become a programmer";

console.log(longest_word(mainString));


