const addCart = ()=>{
    const productName = document.getElementById("product-name");
    const productQunatity = document.getElementById("product-quantity");
    const product = productName.value;
    const quantity = productQunatity.value;
    productName.value="";
    productQunatity.value="";

    displayProduct(product,quantity)
    saveProductToLocalStorage(product,quantity)

}

const displayProduct = (product,quantity)=>{
    const products = document.getElementById("product-list");
    const newElement = document.createElement("li");
    newElement.innerText = `${product} : ${quantity}`;
    products.appendChild(newElement)
}

const getStoredShoppingCart = ()=>{
    let storedCart = localStorage.getItem('cart');
    let cart = {};
    if (storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
}

const saveProductToLocalStorage = (product , quantity) => {
    const cart = getStoredShoppingCart();
    cart[product] = quantity;
    const cartstringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartstringified)
}

const displayProductFromLocalStorage = ()=>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart)
    for(const product in savedCart){
        const quantity = savedCart[product]
        console.log(product , quantity);
        displayProduct(product,quantity)
        
    }
}
displayProductFromLocalStorage()