// ### Task-3: 
// Your task is to calculate the `total budget` required to buy electronics:

//         laptop = 35000 tk
//         tablet = 15000 tk
//         mobile = 20000 tk

// Write a JavaScript function named `calculateElectronicsBudget` that takes in the number of `laptop, tablets, and mobile` and returns the `total money required`.

function calculateElectronicsBudget (budget1, budget2 , budget3){

    let totalMoneyRequired =0;
    if(typeof budget1 ==="number" && typeof budget2 ==="number" && typeof budget3 ==="number"){
        totalMoneyRequired = budget1 + budget2 + budget3 ;

    }
    return totalMoneyRequired; 
}

const laptop = 35000;
const tablet = 15000;
const mobile = 20000;

console.log(calculateElectronicsBudget(laptop , tablet , mobile));
