function calculateTax(income , expense){

    if (income > expense && income > -1 && expense >-1){
 let difference = income - expense ;
 let tax = difference *(20/100);
  return tax;
    }
    else{
        return "Invalid input"
        
    }

}

console.log(calculateTax(10000,3000));