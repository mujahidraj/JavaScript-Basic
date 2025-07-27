// Count how many times a string has the letter `a` or `A`

let mainString = "My name is Moizuddin Mohammad Mujahid Rashid Raj . And i Am A Brave man ."

let count =0;

for(let i=0;i<=mainString.length;i++){
    if(mainString.toLowerCase()[i] === "a"){
        count++;
    }
}
console.log(count)