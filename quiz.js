const quizArea = document.querySelector('.quiz');
const que = document.querySelector('.question');
const optionsArray = Array.from(document.querySelectorAll('.input-radio'));
const labelArray = Array.from(document.querySelectorAll('.input-label'));
const nextBtn = document.querySelector('#btn');
const output = document.querySelector('.output-area');
let counter = 0;
let answerArray = [];

let quizContent = [
    {
        Que: '1. How many vertices does a triangle have?',
        Opts: [
            'a. 1',
            'b. 2',
            'c. 3',
            'd. 4'
        ],
        Ans: 'c'
    },
    {
        Que: '2. What is an angle of 95° known as?',
        Opts: [
            'a. Acute',
            'b. Obtuse',
            'c. Right Angle',
            'd. None of the above'
        ],
        Ans: 'b'
    },
    {
        Que: '3. What is the area of a triangle having base = 4 units and height = 10 units?',
        Opts: [
            'a. 10 sq.units',
            'b. 20 sq.units',
            'c. 30 sq.units',
            'd. 40 sq.units'
        ],
        Ans: 'd'
    },
    {
        Que: '4. The angle measures of a triangle are 85°, 38° and 57°. What kind of triangle is it?',
        Opts: [
            'a. Acute',
            'b. Obtuse',
            'c. Right Angled',
            'd. None'
        ],
        Ans: 'a'
    },
    {
        Que: '5. Two angles of a triangle are 45° and 60°. Calculate the third angle.',
        Opts: [
            'a. 95',
            'b. 75',
            'c. 45',
            'd. 65'
        ],
        Ans: 'b'
    }
]

//First Question
nextQue();

function nextQue(){
    if(counter == quizContent.length){
        nextBtn.textContent = 'Submit';
        calculateScore();
        return;
    }
    que.textContent = quizContent[counter].Que;
    for(let i = 0;i < optionsArray.length;i++){
        optionsArray[i].value = quizContent[counter].Opts[i].charAt(0);
        labelArray[i].textContent = quizContent[counter].Opts[i];
    }
    
    counter++;
}

function calculateScore(){
    let score = 0;
    for(let i = 0;i < quizContent.length; i++){
        if(answerArray[i] == quizContent[i].Ans){
            ++score;
        }
    }
    output.textContent = 'Your score is: '+score;

    nextBtn.textContent = 'Try Again';
    quizArea.setAttribute('style','display:none;');
    counter = 0;
    answerArray.length = 0;
}

function setUserInput(){
    let flag = false;
    for(let i = 0;i < optionsArray.length;i++){
        if(optionsArray[i].checked){
            answerArray.push(optionsArray[i].value);
            optionsArray[i].checked = false;
            flag = true;
            break;
        }
        if(i == optionsArray.length - 1){
            alert('All questions are mandatory');
            return false;
        }
    }
    if(flag){
        nextQue();
    }

}

nextBtn.addEventListener('click',() => {
    if(counter == 0){
        quizArea.setAttribute('style','display:block;');
        nextBtn.textContent = 'Next';
        output.textContent = '';
        nextQue();
    }else setUserInput();

})
