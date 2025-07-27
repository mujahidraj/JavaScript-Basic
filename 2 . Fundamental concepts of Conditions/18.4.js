/***

if you get more then 80 then inside your friend score. 
    If your friend get more than 80. then go for a lunch. 
    if your friend get below 80 but greater than or equal 60 then tell your friend, good luck next time. 
    if your friend get less than 60 but more than or equal to 40 then, keep your friend's message unseen.
    if your friend get less than 40, block your friend
if you get less than 80 go to home and sleep and act sad

Note: 
use nested if-else-if-else
*/

let myMark = 79 ;

let myFriend =80;

if(myMark >80){

    if (myFriend>80){
        console.log("Let's go for a lunch.")
    }
    else if (myFriend<80 && myFriend >=60){
        console.log("good luck next time.")
    }
    else if (myFriend<60 && myFriend>=40){
        console.log("I didn't see his messages.")
    }
    else{
        console.log("I blocked him.")
    }

}
else {
    console.log("i get back to my home and I am acting sad.")
}