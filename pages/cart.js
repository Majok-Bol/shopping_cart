const cart = document.getElementById("cart");
const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
if (storedItems.length === 0) {
    cart.innerHTML = `<p>Your cart is empty</p>`
} else {
    storedItems.forEach((product) => {
        cart.innerHTML += `
            <div class="cart-items">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image || 'https://via.placeholder.com/400x400?text=No+Image'}" class="product-image" alt="${product.title}" />
                <br>
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ reviews</p>
            </div>
        `
    })

}