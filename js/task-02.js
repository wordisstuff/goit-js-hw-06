const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients");
let elementList;
const elemList = (item => {
  elementList = document.createElement('li');
  elementList.textContent = item
  elementList.classList.add('item')
  return elementList;
})
const list = ingredients.map(txt => elemList(txt))
console.log(list);
ingredientsList.append(...list)