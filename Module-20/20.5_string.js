// Capitalize Every first Letter of each word in a String

let mainString = " In its most basic sense, text refers to any written or printed material. This includes everything from books and articles to emails and text messages. More broadly,  can also refer to the words of something, whether spoken, written, or displayed visually, and can even extend to the topic or subject of a discussion";

let convertedToLower = mainString.toLowerCase();

let splittedString = convertedToLower.split("")

let convertedUpper = "";

for (let i=0;i<=splittedString.length;i++){
    if (splittedString[i]===" "){
        convertedUpper=splittedString[i+1].toUpperCase();
        splittedString[i+1] = convertedUpper;
        
    }
}

console.log(splittedString.join(""))




