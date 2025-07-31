function multi_layer_discount(quantity){

    let totalPrice = 0;
    let firstQuantity = 100;
    let secondQuantity = 90;
    let thirdQuantity = 70;

    if(quantity<=100){
        total = quantity * firstQuantity;
        return total;
    }
    else if (quantity <=200){
        let total = 100 * firstQuantity;
        let remainingQuantity = quantity - 100;
        let discountValue = remainingQuantity * 90;
        totalPrice = total + discountValue;
        return total;
    }
    else {
        const first100total = 100*firstQuantity;
        const second100Total =100*secondQuantity;
        const remainingQuantity = quantity-200;
        const remainingTotal = remainingQuantity * thirdQuantity;

        const totalPrice = first100total + second100Total + remainingTotal;

        return total;
    }



}
const ticketQuantity = 120;

console.log(multi_layer_discount(ticketQuantity))