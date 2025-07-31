function addition (num1 , num2){
    return num1+num2;
}

function subtraction (num1, num2){
    return num1-num2;
}

function multiplication (num1 ,num2){
    return num1* num2;
}

function divide (num1,num2){
    return num1/num2;
}

function calculator (num1 , num2 , operation){
    if(operation ==="addition"){
        return addition(num1 ,num2);
    }
    else if (operation === "subtraction"){
        return subtraction(num1 , num2);
    }
    else if (operation ==="multiplication"){
        return multiplication(num1 , num2);
    }
    else {
        return divide(num1 , num2);
    }
}


const operation = ["addition", "subtraction", "multiplication" , "divide"];

console.log(calculator(2,7,operation[3]))