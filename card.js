const handleProduct = () => {
    const productEl = document.getElementById('product');
    const quantityEl = document.getElementById('quantity');
    let product = productEl.value;
    let quantity = quantityEl.value;
    // console.log('Add Product', product, quantity);
    displayProduct(product, quantity);
    addProductToCard(product, quantity);

    productEl.value = '';
    quantityEl.value = '';
};

// const getCard = () => {
//     const card = {};
//     return card;
// };



const addProductToCard = (product, quantity) => {
    const cardItem = {};
    const card = cardItem;
    card[product] = quantity;
    console.log('card', card );
}

const displayProduct = (product, quantity) => {
    const main = document.getElementById('Products Container');

    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;
    main.appendChild(li);
};