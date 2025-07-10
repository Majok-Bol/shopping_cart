import { shoeProducts } from "./data.js";
console.log("Products: ", shoeProducts);

//select product container
const productsContainer = document.getElementById("products-container");

//sort items using dropdown
const selectContainer = document.getElementById("select");
console.log(selectContainer.value);
const selectedCategory = selectContainer.value;
//store options selected
const options = ["All"];
//add options to the array
//select all categories
//add them to the array
shoeProducts.forEach((cat) => {
    options.push(cat.category);

});
console.log("All Categories: ", options);
console.log("First category: ", options[0]);
console.log("Category length: ", options.length);
console.log(options.includes(selectedCategory));

//loop through the options array
//assign the categories to the option element as values
for (let i = 0; i < options.length; i++) {
    //create option element
    const optionElement = document.createElement("option");
    optionElement.classList = 'option-category';
    //attach it to the select element as a child
    selectContainer.appendChild(optionElement);
    //add categories as textContent of option elements
    optionElement.textContent = options[i];
}
selectContainer.addEventListener("change", () => {
    const selectedCategory = selectContainer.value;
    console.log(selectedCategory);
    //filter by category
    //return matched
    const product = shoeProducts.filter((item) => item.category === selectedCategory);
    console.log(product);
    // console.log(arr);
    productsContainer.innerHTML = "";
    //loop through the items
    for (let i = 0; i < product.length; i++) {
        productsContainer.innerHTML += `
    <div class="card">
    <h2><strong>${product[i].category}</strong></h2>
     <img src="${product[i].image !== undefined ? `${product[i].image}` : `no image`}" alt="${product[i].title}"/>
    <p>${product[i].description}</p>
   
    <p><strong>${product[i].title}</strong></p>
    <p><strong>${product[i].price}</strong></p>
    </>`
    }


});
