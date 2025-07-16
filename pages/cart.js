const cart = document.getElementById("cart");
const emptyCart=document.getElementById("empty-cart");
let storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];
console.log('Initial Data: ',storedItems);
cart.innerHTML="";
if (storedItems.length === 0) {
emptyCart.style.display='block';

} else {
 
    storedItems.forEach((product) => {
        cart.innerHTML += `
            <div class="cart-items" data-id="${product.id}">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image || 'https://via.placeholder.com/400x400?text=No+Image'}" class="product-image" alt="${product.title}" />
                <br>
                <button class="remove-from-cart" id="${product.id}">Remove from Cart</button>
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ reviews</p>
            </div>
        `
    })

}

cart.addEventListener("click", (e) => {
    if (e.target.classList.contains("remove-from-cart")) {
        const cart=JSON.parse(localStorage.getItem("cartItems"))||[];
    
        const removeCartId = parseInt(e.target.id);
        console.log('Remove this product: ', removeCartId);
        console.log(typeof removeCartId);


console.log("Stored data in local Storage: ",cart);
//filter data by the id and remove it
const updatedCart=cart.filter((item)=>item.id!==removeCartId);
//update the UI

console.log('New Data: ',updatedCart);
//save data
localStorage.setItem("cartItems",JSON.stringify(updatedCart));
console.log('Updated data: ',updatedCart);

const itemToRemove=e.target.closest(`.cart-items[data-id="${removeCartId}"]`);
console.log('Item to remove by ID: ',itemToRemove);
if(itemToRemove){
    itemToRemove.remove();
    alert(`Item removed from Cart`);
}

    console.log('Length of data: ',cart.length);
  
    }
})