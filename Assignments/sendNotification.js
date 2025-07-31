function sendNotification(emailAddress) {
    
  for (let i = 0 ; i<emailAddress.length; i++){
    if(emailAddress.includes("@")){
    let splittedEmail = emailAddress.split("@");
     return splittedEmail[0] + " sent you an email from " + splittedEmail[1];
    }
    else {
        return "Invalid Email"
    }
  }
   
}

let email = "mujahidraj65@gmail.com";

console.log(sendNotification(email));
