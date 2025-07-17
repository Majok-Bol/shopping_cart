const cart = document.getElementById("cart");
// const emptyCart = document.getElementById("empty-cart");
let storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log('Initial Data: ', storedItems);
cart.innerHTML = "";


storedItems.forEach((product) => {
    cart.innerHTML += `
            <div class="cart-items" data-id="${product.id}">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image || 'https://via.placeholder.com/400x400?text=No+Image'}" class="product-image" alt="${product.title}" />
                <br>
                <button class="remove-from-cart" id="${product.id}">Remove from Cart</button>
                <button class="order-item" id="${product.id}">Order item</button>
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ reviews</p>
            </div>
        `
})



cart.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-from-cart")) {
        const cart = JSON.parse(localStorage.getItem("cartItems")) || [];

        const removeCartId = parseInt(e.target.id);
        console.log('Remove this product: ', removeCartId);
        console.log(typeof removeCartId);


        console.log("Stored data in local Storage: ", cart);
        //filter data by the id and remove it
        const updatedCart = cart.filter((item) => item.id !== removeCartId);
        //update the UI

        console.log('New Data: ', updatedCart);
        //save data
        localStorage.setItem("cartItems", JSON.stringify(updatedCart));
        console.log('Updated data: ', updatedCart);

        const itemToRemove = e.target.closest(`.cart-items[data-id="${removeCartId}"]`);
        console.log('Item to remove by ID: ', itemToRemove);
        if (itemToRemove) {
            itemToRemove.remove();
            alert(`Item removed from Cart`);
        }


    }
    if (e.target.classList.contains("order-item")) {
        const itemId = parseInt(e.target.id);
        console.log("Order this item: ", itemId);
        const cart = JSON.parse(localStorage.getItem("cartItems")) || [];
        const itemToOrder = cart.filter((item) => item.id === itemId);
        console.log('Item to order: ', itemToOrder);
        //check local storage
        const orderedList = JSON.parse(localStorage.getItem("orderedItems")) || [];
        //check for duplicates
        const duplicate = orderedList.some((item) => item.id === itemId);
        console.log("Duplicate: ", duplicate);
        if (!duplicate) {
            orderedList.push(...itemToOrder);
            alert("Item added to Order list");
            //add to local storage
            localStorage.setItem("orderedItems", JSON.stringify(orderedList));
            //update the cart by removing item added to order list
            const updateCartItems = cart.filter((item) => item.id !== itemId);
            localStorage.setItem("cartItems", JSON.stringify(updateCartItems));
        } else {

            alert("Item already on order List");
        }


    }
})