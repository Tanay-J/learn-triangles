
const input = Array.from(document.querySelectorAll('.input-area'));
const outputArea = document.querySelector('.output-area');

input[1].addEventListener('keypress',(e) => {
    if(e.key == 'Enter'){
        if(input[0].value < 0 || input[1].value < 0 || input[0].value == '' || input[1].value == ''){
            outputArea.textContent = 'Invalid Input'
        }else{        
            let temp = (input[0].value*input[0].value)+(input[1].value*input[1].value);
            let hypotenuse = Math.sqrt(temp).toFixed(1);
            outputArea.innerHTML = `Hypotenuse of the triangle is: <span class="sub-heading">${hypotenuse}</span>`;}
        }
})