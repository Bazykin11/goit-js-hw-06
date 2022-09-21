let counterValue = 0;

const refs = {
    decrementEl: document.querySelector('[data-action="decrement"]'),
    incrementEl: document.querySelector('[data-action="increment"]'),
};  

let valueEL = document.querySelector('#value');

refs.decrementEl.addEventListener('click', removeEl);
refs.incrementEl.addEventListener('click', addEl);

function removeEl (){
    valueEL.textContent = `${counterValue-=1}`
};

function addEl (){
    valueEL.textContent = `${counterValue+=1}`
};