const firstSide = document.getElementById('firstSide');
const secondSide = document.getElementById('secondSide');
const thirdSide = document.getElementById('thirdSide');
const answer = document.querySelector('.input-area');
const outputArea = document.querySelector('.output-area');
const checkBtn = document.querySelector('#checkBtn');
const reload = document.getElementById('reload');
let sides = [];

function randomNumbers(){
    sides.push(Math.floor(Math.random()*30)+1);
    sides.push(Math.floor(Math.random()*30)+1);
    sides.push(Math.floor(Math.random()*30)+1);
}

function displayNumbers(){
    randomNumbers();
   
    // while(sides[0]+sides[1] < sides[2] || sides[1]+sides[2] < sides[0] || sides[0]+sides[2] < sides[1]){
    //     randomNumbers();
    // }
    

    // }
        firstSide.textContent = 'First Side: '+sides[0];
        secondSide.textContent = 'Second Side: '+sides[1];    
        thirdSide.textContent = 'Third Side: '+sides[2];    
     
}

function isTriangle(){
    if(sides[0]+sides[1] < sides[2] || sides[1]+sides[2] < sides[0] || sides[0]+sides[2] < sides[1]){
        return false;
    }else return true;
}

checkBtn.addEventListener('click', () => {
    
    if(isTriangle()){
         if(sides[0] === sides[1] && sides[0] === sides[2] && answer.value === 'equi'){
               outputArea.textContent = "You guessed it right! It's an Equilateral Triangle";
        }else if((sides[0] === sides[1] || sides[0] === sides[2] || sides[1] === sides[2]) && answer.value === 'iso'){
               outputArea.textContent = "You guessed it right! It's an Isosceles Triangle";
        }else if((sides[0] !== sides[1] && sides[0] !== sides[2] && sides[1] !== sides[2]) && answer.value === 'scal'){
                 outputArea.textContent = "You guessed it right! It's a Scalene Triangle";
        }else{
                outputArea.textContent = 'Oops! Try again';
            // answer.textContent = '';
        }
    }else{
        outputArea.textContent = 'Oops! Try again';
        // answer.textContent = '';
    }

    if(!isTriangle() && answer.value === 'not'){
        outputArea.textContent = 'You guessed it right! These sides cannot form a triangle';
    }
})
reload.addEventListener('click',()=>{
    sides.length = 0;
    outputArea.textContent = '';
    displayNumbers();
});

displayNumbers();