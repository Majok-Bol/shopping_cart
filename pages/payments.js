console.log("Payments is working");
const deposit=document.getElementById("deposit");
const buy=document.getElementById("buy");
const balance=document.getElementById("balance");
const input=document.getElementById("input");
const max=10000;
const min=10;
let score=0;
deposit.addEventListener("click",()=>{
    const amount=parseInt(input.value);
    //convert to number
    console.log('Amount: ',amount);
    console.log('Type of: ',typeof amount);
    if(amount<=max){
        score+=amount;
        balance.textContent=`Balance: ${score} USD`;
    }
    if(amount>max){
        alert("Maximum deposit is 1,000,000 USD");

    }
    if(amount===""){
        balance.textContent=`Balance: 0.0`;
        
    }
    if(amount<=min){
        alert("Minimum deposit is 10 USD");
        balance.textContent=`0.0 USD`;
    }
    //update the value of the balance
    input.value="";

})
buy.addEventListener("click",()=>{
    alert("Do you want to buy an item");
})