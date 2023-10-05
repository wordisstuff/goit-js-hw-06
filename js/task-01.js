const categories = document.querySelector("#categories");
const categoriesItems = categories.querySelectorAll(".item")
console.log(`"Number of categories:" ${categoriesItems.length}`);
let text;
let elem;
categoriesItems.forEach(item => {
    text = item.querySelector("h2").textContent;
    elem = item.querySelectorAll('li').length
    console.log(`Category: ${text}\nElements: ${elem}`);
});

// Number of categories: 3

// Category: Animals
// Elements: 4

// Category: Products
// Elements: 3

// Category: Technologies
// Elements: 5