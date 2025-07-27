let mainString = "American International University Bangladesh"

let stored = "";

for (let i = 0; i <= mainString.length; i++) {
    if (mainString[i]===mainString.toUpperCase()[i] && mainString[i] !==undefined) {
        stored += mainString[i];
    }
}
console.log(stored)

