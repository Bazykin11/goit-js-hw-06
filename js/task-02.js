const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const addElement = document.querySelector('#ingredients');

const elements = ingredients.map(element => {
  const elItem = document.createElement('li');
  elItem.textContent = element;
  elItem.classList.add('item');
  return elItem
})
console.log(elements);
addElement.append(...elements);



