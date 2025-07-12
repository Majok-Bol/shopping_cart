import { shoeProducts } from "./data.js";


//select product container
const productsContainer = document.getElementById("products-container");
productsContainer.innerHTML = "";

//sort items using dropdown
const selectContainer = document.getElementById("select");
console.log(selectContainer.value);
//store options selected
const options = ["All"];
shoeProducts.forEach((cat) => {

    options.push(cat.category);
});
console.log('Options: ', options);
//loop through each options

//loop through each option 
//add its value to be the value of the option
for (let i = 0; i < options.length; i++) {
    //create option based on each option value
    const optionElement = document.createElement("option");
    selectContainer.appendChild(optionElement);
    optionElement.value = options[i];
    optionElement.textContent = options[i];

}

//


//add event listener to the select container
selectContainer.addEventListener("change", () => {
    const selectedCategory = selectContainer.value;
    if (selectedCategory === 'All') {
        //get all the products
        //get products with category of all
        //display them
        shoeProducts.map((product) =>{
                  productsContainer.innerHTML += `
    <div class="card">
    <h2><strong>${product.category}</strong></h2>
     <img src="${product.image !== undefined ? `${product.image}` : `no image`}" alt="${product.title}"/>
    <p>${product.description}</p>
   
    <p><strong>${product.title}</strong></p>
    <p><strong>${product.price}</strong></p>
    </>`
        }
        )
    }
    if(selectedCategory!='All'){
        console.log(`You have selected:${selectedCategory} `)
    }

    //get all the products
    //display them


    // if(selectedCategory!='All'){
    //     console.log(`${selectedCategory} has been selected`);
    // }
});











// //map the products
// function displayProducts(products){
//     products.map((product)=>product)
// }
// displayProducts(shoeProducts);