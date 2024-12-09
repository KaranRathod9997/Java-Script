let shoppingcart = document.querySelector(".shoppingcart"); // Use querySelector to get a single element
let label = document.querySelector(".label");

let basket = JSON.parse(localStorage.getItem("data")) || [];
let calculate = () => {
  let carticon = document.getElementById("icon");
  carticon.innerHTML = basket.length;
};

let cart_item_disply = () => {
  if (basket.length !== 0) {
    shoppingcart.innerHTML = basket
      .map((item, index) => {
        let { img, name, price } = item;
        return `
      <div class="cart_item">
      <div  class="cartimg">
      <img src="${img}" class="img">
      </div>
      
      <h4>name:${name}</h4>
      <p>price:${price}</p>
      <button onclick="remove_item(${index})">remove-item</button>
      </div>
      `;
      })
      .join("");
  } else {
    shoppingcart.innerHTML = `<h3>YOUR CART IS EMPTY.</h3>`;
  }
};

let remove_item = (index) => {
  basket.splice(index, 1);
  localStorage.setItem("data", JSON.stringify(basket));
  cart_item_disply();
  calculate();
  total_amount();
};

let total_amount = () => {
  let total_amount = 0;
  basket.forEach((item) => {
    total_amount += item.price;
  });

  label.innerHTML = `<h4>TOTAL PRICE :${total_amount}</h4>`;
};
cart_item_disply();
calculate();
total_amount();
