
document.getElementById("cash-out-button").addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("cash-out").style.display = "block";
    document.getElementById("payment-details").style.display = "none";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("bonus").style.display = "none";


})

// add money section 

document.getElementById("add-money-buttons").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("add-money").style.display = "block";
    document.getElementById("payment-details").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";
    document.getElementById("bonus").style.display = "none";

    document.getElementById("add-request").addEventListener("click", function (event) {
        event.preventDefault()

        const pin = document.getElementById("pinNumber").value;
        if (pin === "1234") {
            const balance = document.getElementById("balance");

            const amountRequest = document.getElementById("input-ammount").value;

            const totalBalance = parseInt(balance.innerText) + parseInt(amountRequest);

            console.log(totalBalance);

            balance.innerText = totalBalance;
            confirm( amountRequest + " USD added to your account. \n Your main balanace is " + totalBalance + "USD Thank you.")
        }

        else {

            const newPara = document.createElement("p");
            newPara.id = "error";
            newPara.innerText = "Wrong account number or pin number! \n Please enter the 4 digit pin number";
            newPara.style.color = "red";
            newPara.style.fontSize = "16px";
            newPara.style.textAlign = "center";
            newPara.style.paddingBottom = "20px";
            document.getElementById("add-money").appendChild(newPara);
        }



    })


})

document.getElementById("transfer-money-button").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("transfer-money").style.display = "block";
    document.getElementById("payment-details").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("bonus").style.display = "none";

})

document.getElementById("bonus-button").addEventListener("click", function (event) {
    event.preventDefault();

    document.getElementById("bonus").style.display = "block";
    document.getElementById("payment-details").style.display = "none";
    document.getElementById("cash-out").style.display = "none";
    document.getElementById("add-money").style.display = "none";
    document.getElementById("transfer-money").style.display = "none";

})

