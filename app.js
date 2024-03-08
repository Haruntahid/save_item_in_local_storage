const getAllValue = () => {
  const inputName = document.getElementById("input_name");
  const inputNum = document.getElementById("input_num");
  const inputNameValue = inputName.value;
  const inputNumValue = inputNum.value;
  inputName.value = "";
  inputNum.value = "";
  displayData(inputNameValue, inputNumValue);
  saveProductToLocalStorage(inputNameValue, inputNumValue);
};

const displayData = (inputNameValue, inputNumValue) => {
  const ul = document.getElementById("displayItems");
  const li = document.createElement("li");
  li.innerText = `${inputNameValue} : ${inputNumValue}`;
  ul.appendChild(li);
};

const getStoredShoppingCart = () => {
  let cart = {};
  const storedCart = localStorage.getItem("cart");
  if (storedCart) {
    cart = JSON.parse(storedCart);
  }
  return cart;
};

const saveProductToLocalStorage = (inputNameValue, inputNumValue) => {
  const cart = getStoredShoppingCart();
  cart[inputNameValue] = inputNumValue;
  const cartStringfy = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringfy);
};

const displayProductFromLocalStorage = () => {
  const saveCart = getStoredShoppingCart();
  for (const product in saveCart) {
    const productNum = saveCart[product];
    displayData(product, productNum);
  }
};

displayProductFromLocalStorage();
