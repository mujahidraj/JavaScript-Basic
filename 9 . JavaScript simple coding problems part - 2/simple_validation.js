function addition(num1 , num2){
    if(typeof num1 ==="number" && typeof num2 === "number"){
    return num1 + num2;
    }
    else {
        return "Please provide a number."
    }
}

console.log(addition(1,2));



function nameDisplay (first , last){
    if(typeof first ==="string" && typeof last === "string"){
        return (first + " " + last) ;
    }
    else {
        return "please provide a string value ."
    }
}

console.log(nameDisplay("hello","world"))

