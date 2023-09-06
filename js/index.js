const addProduct = () => {
  const productField = document.getElementById("product-name");
  const productQuantityField = document.getElementById("product-quantity");
  const product = productField.value;
  const quantity = productQuantityField.value;
  productField.value = "";
  productQuantityField.value = "";
  // console.log(product, quantity);
  displayProduct(product, quantity);
};

const displayProduct = (product, quantity) => {
  const productContainer = document.getElementById("product-container");
  const li = document.createElement("li");
  li.innerHTML = `${product}: ${quantity}`;
  productContainer.appendChild(li);
  saveProductToLocalStorage(product, quantity);
};

// Get Dat From Local Storage
const getStoredShoppingCard = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

//  Saving Product to Local Storage
const saveProductToLocalStorage = (product, quantity) => {
  const cart = getStoredShoppingCard();
  cart[product] = quantity;
  const cartStringify = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringify);
};

// Display Product and quantity permanently
const displayProductFromLocalStorage = () => {
  const saveCart = getStoredShoppingCard();
  console.log(saveCart);
  for (const product in saveCart) {
    const quantity = saveCart[product];
    // console.log(product, quantity);
    displayProduct(product, quantity);
  }
};
displayProductFromLocalStorage();
