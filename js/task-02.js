const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector("#ingredients")
// console.dir(ingredientsList);
let elementList;
const elemList = (item => {
  elementList = document.createElement('li');
  elementList.textContent = item
  return elementList;
})
const list = ingredients.map(txt => elemList(txt))
console.log(list);
ingredientsList.append(...list)


// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент < li >.Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі < li > за одну операцію у список ul#ingredients.
