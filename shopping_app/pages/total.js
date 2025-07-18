const storedOrders = JSON.parse(localStorage.getItem("orderedItems")) || [];
export function grandTotal(){
const totalPrice=storedOrders
.map((item)=>parseFloat(item.price.replace("$","")))
.reduce((sum,number)=>sum+number,0);
console.log("Total prices for oredered goods: ",totalPrice.toFixed(2));
console.log(typeof totalPrice);
return totalPrice;
}


grandTotal();