
const base = document.querySelector('.base');
const height = document.querySelector('.height');
const outputArea = document.querySelector('.output-area');

height.addEventListener('keypress', (e) => {
    if(e.key == 'Enter'){
        let area = 0.5 * base.value * height.value;
        outputArea.innerHTML = `Area of the triangle is: <span class="sub-heading">${area}</span> sq.units`;
    }
})