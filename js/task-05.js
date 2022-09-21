const refs = {
    input: document.querySelector('#name-input'),
    label: document.querySelector('#name-output'),
}

refs.input.addEventListener('input', inputChange)

const defText = refs.label.textContent

function inputChange (e){
    let text = refs.input.value.trim();
    if (text === ""){
        refs.label.textContent = defText;
    } else {
        refs.label.textContent = e.currentTarget.value;
    }
}