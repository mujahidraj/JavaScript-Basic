function cloth_total_price (shirtQuantity , pantQuantity , shoeQuantity){

    const shirtPrice = 500;
    const pantPrice = 700;
    const shoePrice = 1500;

    let totalShirtPrice = shirtQuantity*shirtPrice;
    let totalPantPrice = pantPrice * pantQuantity;
    let totalShoePrice = shoeQuantity *shoePrice;

    let totalPrice = totalPantPrice + totalShirtPrice + totalShoePrice;

    return totalPrice;

}

console.log(cloth_total_price(3,3,2));
