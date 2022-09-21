
const btn = document.querySelector('.change-color');
const span = document.querySelector('.color');
const bodyRef = document.querySelector('body')


btn.addEventListener('click', getRandomHexColor);

function getRandomHexColor() {
  let color = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  bodyRef.style.backgroundColor = color;
  span.textContent = color;

}