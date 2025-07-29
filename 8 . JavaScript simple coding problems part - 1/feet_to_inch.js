
function inch_to_feet(inch){
    let feet = inch/12;
    let feets = parseInt(feet)
    let inches = inch % 12;
    result = feets + "ft " + inches + "inch";

    return result;

}

console.log(inch_to_feet(70));

