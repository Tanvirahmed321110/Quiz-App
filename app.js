const questionData = [
    {
        id : 1,
        question : ' What Dose HTML Stand For ?',
        anwser : 'hyper text markup language',
        option : [
            'hyper text markup language',
            'hyper text  language ',
            'Hoper text markup style ',
            'hyper text markup language'
        ]
    },
    {
        id : 2,
        question : 'What is mean of css .... ?',
        anwser : 'case cading style sheet',
        option : [
            'case text markup language',
            'hyper text  language ',
            'Hoper text markup style ',
            'hyper text markup language'
        ]
    },
    {
        id : 3,
        question : 'How many zilla in Bangladesh ?',
        anwser : 'hyper text markup language',
        option : [
            '64 text markup language',
            'hyper text  language ',
            'Hoper text markup style ',
            'hyper text markup language'
        ]
    },
    {
        id : 4,
        question : 'How many village in bangladesh?',
        anwser : 'hyper text markup language',
        option : [
            'hyper text markup language',
            'hyper text  language ',
            'Hoper text markup style ',
            'hyper text markup language'
        ]
    },
    {
        id : 5,
        question : 'what is chat cpt  ?',
        anwser : 'hyper text markup language',
        option : [
            'hyper text markup language',
            'hyper text  language ',
            'Hoper text markup style ',
            'hyper text markup language'
        ]
    },
]





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
    showQuestion(count)
}

// pre btn
preBtn.addEventListener('click',()=>{
    questionPage.style.display ='none';
    rulesPage.style.display='block';
})



let count = 0;
// next btn
document.querySelector('.btn-next').addEventListener('click',function(){
    if(count < questionData.length){
        count++;
        showQuestion(count)
    }
    else{
        console.log("Findsh ")
    }
})


// question 
const showQuestion = (index)=>{
    let questions = document.querySelector('.question-tittle');
    let questionText =  `<h3> ${questionData[index].id} .  ${questionData[index].question} </h3>`
    questions.innerHTML = questionText;
    
    let optionsContainer = document.querySelector(".options-container");
    optionsContainer.innerHTML  = `
        <div class="option"> <p>${questionData[index].option[0]} </p> </div> 
        <div class="option"> <p>${questionData[index].option[1]} </p>  </div> 
        <div class="option"><p>${questionData[index].option[2]} </p> </div> 
        <div class="option"><p>${questionData[index].option[3]} </p> </div> 
    `
    
    let pageNumber = document.querySelector('.footer-left-container');
    pageNumber.innerHTML = `<div class="footer-left">${index+1} of 5 question </div>`
}