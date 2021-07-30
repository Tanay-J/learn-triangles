
const input = Array.from(document.querySelectorAll('.input-area'));
const outputArea = document.querySelector('.output-area');
console.log(input[1])
input[1].addEventListener('keypress',(e) => {
    if(e.key == 'Enter'){
        
        let temp = (input[0].value*input[0].value)+(input[1].value*input[1].value);
        let hypotenuse = Math.sqrt(temp).toFixed(1);
        outputArea.innerHTML = `Hypotenuse of the triangle is: <span class="sub-heading">${hypotenuse}</span>`;
    }
})