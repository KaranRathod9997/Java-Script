let basket = JSON.parse(localStorage.getItem("data")) || [];

let total = 0;

let list = document.getElementById("product");

let product_url = "https://dummyjson.com/products?sortBy=title&order=asc";

fetch(product_url)
  .then((response) => response.json())
  .then((data) => {
    data.products.forEach((products) => {
      // Create a new div for each product
      let newdiv = document.createElement("div");
      newdiv.innerHTML = `
      <div class="mydiv">
      <img src="${products.thumbnail}" class="pic">
        <h4>ID: ${products.id}</h4>
        <h5>Category: ${products.category}</h5>
        <h4>price : ${products.price}</h4>
        <button class="add-to-cart">Add to Cart</button>
        </div>
      `;
      list.appendChild(newdiv);

      // Add event listener to the add-to-cart button
      let addtocart = newdiv.querySelector(".add-to-cart");
      addtocart.addEventListener("click", () => {
        basket.push({
          img: products.thumbnail,
          name: products.title,
          price: products.price, // Assuming price is part of the product object
        });

        localStorage.setItem("data", JSON.stringify(basket));
        calculate(); // Make sure the calculate function is defined
      });
    });
  })
  .catch((err) => console.log(err));

// Function to update the cart icon
function calculate() {
  let carticon = document.getElementById("icon");
  let cartamount = basket.length;
  carticon.innerHTML = cartamount;
}
