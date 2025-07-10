import { shoeProducts } from "./data.js";
console.log("Products: ",shoeProducts);

//select product container
const productsContainer=document.getElementById("products-container");
productsContainer.innerHTML="";
shoeProducts.forEach((product)=>{
    productsContainer.innerHTML+=`
    <div class="card">
    <h2><strong>${product.category}</strong></h2>
     <img src="${product.image!==undefined?`${product.image}`:`no image`}" alt="${product.title}"/>
    <p>${product.description}</p>
   
    <p><strong>${product.title}</strong></p>
    <p><strong>${product.price}</strong></p>
    </div>
    `
});
//sort items using dropdown
const selectContainer=document.getElementById("select");
console.log(selectContainer.value);
const selectedCategory=selectContainer.value;
//store options selected
const options=['All'];
//add options to the array
//select all categories
//add them to the array
shoeProducts.forEach((cat)=>{
options.push(cat.category);

});
console.log("All Categories: ",options);
console.log("First category: ",options[0]);
console.log("Category length: ",options.length);
console.log(options.includes(selectedCategory));

//loop through the options array
//assign the categories to the option element as values
for(let i=0;i<options.length;i++){
    //create option element
const optionElement=document.createElement("option");
optionElement.classList='option-category';
//attach it to the select element as a child
selectContainer.appendChild(optionElement);
//add categories as textContent of option elements
    optionElement.textContent=options[i];
}
//add event listeners
//filter products by category
//display the products
function filterProducts(){
    //loop through shoeproducts
    //compare categories selected with the option category
    //then display the products
 shoeProducts.map((product)=>product.category===document.querySelector('.option-category').value).forEach((prod)=>{
     productsContainer.innerHTML+=`
    <div class="card">
    <h2><strong>${prod.category}</strong></h2>
     <img src="${prod.image!==undefined?`${prod.image}`:`no image`}" alt="${prod.title}"/>
    <p>${prod.description}</p>
   
    <p><strong>${prod.title}</strong></p>
    <p><strong>${prod.price}</strong></p>
    </div>
    `
 });

}
filterProducts();