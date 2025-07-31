function cart(products) {
    let totalPrice = 0;
    for(const product of products){
        let thisProductCost = product.productPrice * product.productQuantity;
        totalPrice+=thisProductCost;
    }
    return totalPrice;
}

let productList = [
    {
        productName : "Keyboard",
        productPrice : 2000,
        productWarranty : "1yr",
        productQuantity : 2
    },
    {
        productName : "Mouse",
        productPrice : 450,
        productWarranty : "1yr",
        productQuantity : 4
    },
    {
        productName : "Mouse Pad",
        productPrice : 100,
        productWarranty : "No warranty",
        productQuantity : 4
    },
    {
        productName : "A4Tech Mouse",
        productPrice : 1500,
        productWarranty : "1yr",
        productQuantity : 2

    }
]

let cartProductPrice = cart(productList);

console.log(cartProductPrice);
