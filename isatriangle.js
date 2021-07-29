const input = Array.from(document.querySelectorAll('.input-area'));
const checkBtn = document.querySelector('#checkBtn');
const outputArea = document.querySelector('.output-area');


checkBtn.addEventListener('click', () => {
    if(parseInt(input[0].value)+parseInt(input[1].value)+parseInt(input[2].value) === 180){
        outputArea.textContent = 'Yes! These angles can make a triangle';
    }else outputArea.textContent = 'Nope! These angles cannot make a triangle. Sum of all angles of a triangle is 180°';
})