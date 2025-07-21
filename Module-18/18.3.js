/***

Grade Calculator

Create a simple JavaScript program that takes a student's score as input and returns their corresponding grade based on the following grading scale:

    A: 90-100
    B: 80-89
    C: 70-79
    D: 60-69
    F: 0-59

***/

let studentGrade = 67;

if(studentGrade >= 90 && studentGrade <= 100){
    console.log("Congratulation you got A with " + studentGrade);
}
else if (studentGrade>=80 && studentGrade<=89){
    console.log("Congratulation you got B with " + studentGrade);
}
else if (studentGrade>=70 && studentGrade<=79){
    console.log("congratulation you got C with " + studentGrade);
}
else if (studentGrade>=60 && studentGrade<=69){
    console.log("console to you. You got D with " + studentGrade);
}
else {
    console.log("You are failed");
}