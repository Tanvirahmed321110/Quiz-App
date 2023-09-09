
let startQuizBtn = document.querySelector('.btn-container button');
let exitBtn = document.querySelector('.btn-exit');
let continueBtn = document.querySelector('.btn-continue');
let preBtn = document.getElementById('pre')

const home = document.querySelector(".container-quiz");
const rulesPage = document.querySelector(".app-rules-container");
const questionPage = document.querySelector('.question-container');


// start btn
startQuizBtn.onclick =()=>{
    
    rulesPage.style.display='block'
    home.style.display='none';
}

// exit btn
exitBtn.addEventListener('click',()=>{
    let sure = confirm('Are you agree Exit page ?');
    if(sure){
        rulesPage.style.display='none';
        home.style.display='block';
    }
    
})



// btn continue 
continueBtn.onclick = function(){
    questionPage.style.display='block';
    rulesPage.style.display='none';
    showQuestion()
}

// pre btn
preBtn.addEventListener('click',()=>{
    questionPage.style.display ='none';
    rulesPage.style.display='block';
})





// question 
const showQuestion = ()=>{
    let questions = document.querySelector('.question-tittle');
    let questionText =  `<h3> ${questionData[2].question} </h3>`
    questions.innerHTML = questionText;
}