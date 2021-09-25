const input = Array.from(document.querySelectorAll('.input-area'));
const checkBtn = document.querySelector('#checkBtn');
const outputArea = document.querySelector('.output-area');


checkBtn.addEventListener('click', () => {
    
    if(!input[0].value || !input[1].value || !input[2].value){
        outputArea.textContent = 'All fields are required';
        return;
    }
    if(input[0].value < 0 || input[1].value < 0 || input[2].value < 0){
        outputArea.textContent = 'Invalid Input'
        return;
    }

    if(parseInt(input[0].value)+parseInt(input[1].value)+parseInt(input[2].value) === 180){
        outputArea.textContent = 'Yes! These angles can make a triangle';
    }else outputArea.textContent = 'Nope! These angles cannot make a triangle. Sum of all angles of a triangle is 180°';
})