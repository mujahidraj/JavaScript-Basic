
// ----
// ### Task-3: 
// Write a function to count the number of vowels in a string.

function vowels(strs){

    let count =0;

    for(let i=0; i<=strs.length;i++){
        if(strs[i]==="a" || strs[i]==="e" || strs[i]==="i" || strs[i]==="o"|| strs[i]==="u"){
            count++;
        }
    }

    return count;
}

let mainString = "Write a function to count the number of vowels in a string";

console.log(vowels(mainString));
