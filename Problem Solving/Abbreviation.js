let mainString = "American International University Bangladesh"
let splittedText = mainString.split(' ');

let stored = "";

for (let i = 0; i < splittedText.length; i++) {
    stored += splittedText[i][0];
}

console.log(stored)

// for (let i = 0; i <= mainString.length; i++) {
//     if (mainString[i]===mainString.toUpperCase()[i] && mainString[i] !==undefined && mainString[i]!==" ") {
//         stored += mainString[i];
//     }
// }
// console.log(stored);

