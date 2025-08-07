
document.getElementById("cash-out-button").addEventListener("click",function(event){
    event.preventDefault();
     document.getElementById("cash-out").style.display = "block";
    document.getElementById("payment-details").style.display="none";
    document.getElementById("add-money").style.display = "none";

})

document.getElementById("add-money-buttons").addEventListener("click", function(event){
    event.preventDefault();

    document.getElementById("add-money").style.display = "block";
    document.getElementById("payment-details").style.display="none";
    document.getElementById("cash-out").style.display="none";
})

