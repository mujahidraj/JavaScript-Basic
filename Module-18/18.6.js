/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let age = 9;

let designation = "students";

let regularFare = 800;

let discountFare;

if(age<=10){
    console.log("No fare needed.")
}
else if(age>=10 && age<=60 && designation == "students"){
    // 50% discount
    discountFare = (regularFare * 50/100)
    console.log("50% discount :" + discountFare);
    console.log("fare : " + (regularFare-discountFare))
}
else if (age>=60){
    discountFare = (regularFare * 15/100)
    console.log("15% discount :" + discountFare);
    console.log("fare : "+ (regularFare-discountFare))
}

else{
    console.log(regularFare)
}