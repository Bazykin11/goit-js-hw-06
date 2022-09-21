const input = document.querySelector('#validation-input');

const lengthEl = Number(input.dataset.length);


input.addEventListener('blur', validation);

function validation (){
    if (input.value.length === Number(input.dataset.length)) {
        input.classList.add('valid')
        return input.classList.remove('invalid');
    } 
        else {
         input.classList.remove('valid');
    return input.classList.add('invalid');
 }
    }
