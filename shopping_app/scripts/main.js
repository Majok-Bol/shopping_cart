import { shoeProducts } from "./data.js";

const productContainer = document.getElementById("products-container");
const selectedCategory = document.getElementById("selected-category");
//store all categories
const categories = [];
//store all categories
shoeProducts.map((product) => {
    categories.push(product.category)
})
//loop through categories
for (let i = 0; i < categories.length; i++) {
    const option = document.createElement("option");
    option.value = categories[i];
    option.textContent = categories[i];
    selectedCategory.appendChild(option);
}

//display products
//based on the selected value
selectedCategory.addEventListener("change", filterProducts);
document.addEventListener("DOMContentLoaded", filterProducts);
function filterProducts() {
    productContainer.innerHTML = "";
    //filter products to those matching the category selected
    //ie if category is equal to value selected
    const choice = selectedCategory.value;
    //get all products
    shoeProducts.map((product) => {
        if (choice === 'All') {
            productContainer.innerHTML += `
            <div class="card">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image || 'https://via.placeholder.com/400x400?text=No+Image'}" class="product-image" alt="${product.title}" />
                <br>
                <button class="add-to-cart" id="${product.id}">Add to Cart</button>
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ reviews</p>
            </div>
        `;

        }
        if (product.category === choice && choice != 'All') {
            productContainer.innerHTML += `
            <div class="card">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image || 'https://via.placeholder.com/400x400?text=No+Image'}" class="product-image" alt="${product.title}" />
                <br>
                <button class="add-to-cart" id="${product.id}">Add to Cart</button>
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ reviews</p>
            </div>
        `;

        }




    })


}
