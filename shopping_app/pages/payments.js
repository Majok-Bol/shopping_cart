import { grandTotal } from "./total.js";
console.log("Payments is working");
const deposit = document.getElementById("deposit");
const buy = document.getElementById("buy");

const input = document.getElementById("input");
let initialAmount = parseFloat(JSON.parse(localStorage.getItem("balance")));
console.log("Type ",typeof initialAmount);
console.log("Initial amount in the account: ",initialAmount);

const initialBalance = document.getElementById("initial-balance");
if (isNaN(initialAmount)) {
    initialAmount = 0.0;
initialBalance.textContent = `${initialAmount.toFixed(2)} USD`;
}else{
   initialBalance.textContent = `${initialAmount.toFixed(2)} USD`; 
}



const max = 10000;
const min = 10;
deposit.addEventListener("click", () => {
    const amount = parseInt(input.value.trim());
    //convert to number
    console.log('Amount: ', amount);
    console.log('Type of: ', typeof amount);
    if (amount <= max && amount >= min) {
        initialAmount += amount;
        initialBalance.textContent = `${initialAmount.toFixed(2)} USD`;
        //add to local storage
        localStorage.setItem("balance", JSON.stringify(initialAmount));
    }
    if (amount > max) {
        alert(`Maximum deposit is: ${max}`);

    }
    if (isNaN(amount)) {
        alert("Please enter some amount");

    }
    if (amount < min) {
        alert(`Minimum deposit is: ${min}`);
    }
    //update the value of the balance
    input.value = "";

})

buy.addEventListener("click", () => {
    //deduct this amount from the balance
    const totalPrice = grandTotal().toFixed(2);

    if (initialAmount > totalPrice) {
        let balance = (initialAmount - totalPrice).toFixed(2);
        console.log("Total cost: ", totalPrice);
        console.log("Amount in account: ", initialAmount);
        console.log("Balance: ", balance);
        //update local storage
        localStorage.setItem("balance",JSON.stringify(balance));
        //update the balance
          initialBalance.textContent = `${balance} USD`;

    }

    if (initialAmount < totalPrice) {
        alert(`Please topup your account:\nCurrent amount: ${initialAmount.toFixed(2)}\nTotal amount due: ${totalPrice}\nDeficit: ${(totalPrice-initialAmount).toFixed(2)}`);
    }

})
