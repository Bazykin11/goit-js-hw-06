const rangeText = document.querySelector('#font-size-control')
const valText = document.querySelector('#text')

rangeText.value = 16;
rangeText.addEventListener('input',(evt) => {
    valText.style.fontSize = rangeText.value + 'px'
})
