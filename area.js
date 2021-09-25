
const base = document.querySelector('.base');
const height = document.querySelector('.height');
const outputArea = document.querySelector('.output-area');

height.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        if(base.value < 0 || height.value < 0 || base.value == '' || height.value == ''){
            outputArea.textContent = 'Invalid Input'
        }else {
            let area = 0.5 * base.value * height.value;
            outputArea.innerHTML = `Area of the triangle is: <span class="sub-heading">${area}</span> sq.units`;    
        }
    }
})