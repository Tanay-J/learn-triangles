
const firstAngle = document.getElementById('firstAngle');
const secondAngle = document.getElementById('secondAngle');
const thirdAngle = document.querySelector('.input-area');
const outputArea = document.querySelector('.output-area');
const checkBtn = document.getElementById('checkBtn');
const reload = document.getElementById('reload');
let angles = [];

function randomNumbers(){
    angles.push(Math.floor(Math.random()*180)+1);
    angles.push(Math.floor(Math.random()*180)+1);
}

function displayNumbers(){
    randomNumbers();
    while(parseInt(angles[0])+parseInt(angles[1]) >= 180){
        angles.length = 0;
        randomNumbers();
    }
    
    firstAngle.textContent = 'First Angle: '+angles[0];
    secondAngle.textContent = 'Second Angle: '+angles[1];

    
}

checkBtn.addEventListener('click', () => {
    if(parseInt(thirdAngle.value)+angles[0]+angles[1] === 180){
        
        outputArea.textContent = 'You guessed it right!';
    }else outputArea.textContent = 'Oops! Try again';

})
reload.addEventListener('click',()=>{
    angles.length = 0;
    displayNumbers();
});

displayNumbers();