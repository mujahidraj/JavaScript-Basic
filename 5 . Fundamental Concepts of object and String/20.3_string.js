// Check whether a string contains all the vowels `a`, `e`, `i`, `o`, `u` 

let mainString = "In its most basic sense, text refers to any written or printed material. This includes everything from books and articles to emails and text messages. More broadly,  can also refer to the words of something, whether spoken, written, or displayed visually, and can even extend to the topic or subject of a discussion";


let isVowelAvailable = false;


console.log(mainString.length)

if(mainString.includes('a') && mainString.includes('e') && mainString.includes('i') && mainString.includes('o') && mainString.includes("u") ){
    console.log(isVowelAvailable=true)
}

