// If a given string has either x, replace x by y. if the given string has X, replace it by Y.

//     Hint: You should be able to check whether x or X exists. After that, search online how to replace a character in a string.

let mainString = "Hello World! This is a sample string with x and X to be replaced.";


if (mainString.includes("x")) {
    mainString=mainString.replace("x", "y")

}
 if (mainString.includes("X")) {
    mainString=mainString.replace("X", "Y")
}


console.log(mainString)