console.log("Payments is working");
const deposit=document.getElementById("deposit");
const buy=document.getElementById("buy");
const balance=document.getElementById("balance");
const input=document.getElementById("input");
let initialAmount=parseFloat(localStorage.getItem("balance"));
if(isNaN(initialAmount)){
    initialAmount=0.0;
}
const initialBalance=document.getElementById("initial-balance");
initialBalance.textContent=`${initialAmount.toFixed(2)} USD`;
const max=10000;
const min=10;
deposit.addEventListener("click",()=>{
    const amount=parseInt(input.value.trim());
    //convert to number
    console.log('Amount: ',amount);
    console.log('Type of: ',typeof amount);
    if(amount<=max&&amount>=min){
        initialAmount+=amount;
     initialBalance.textContent=`${initialAmount.toFixed(2)} USD`;
        //add to local storage
        localStorage.setItem("balance",JSON.stringify(initialAmount));
    }
    if(amount>max){
        alert(`Maximum deposit is: ${max}`);

    }
    if(isNaN(amount)){
alert("Please enter some amount");
        
    }
    if(amount<min){
        alert(`Minimum deposit is: ${min}`);
    }
    //update the value of the balance
    input.value="";

})
buy.addEventListener("click",()=>{
    alert("Do you want to buy an item");
})
