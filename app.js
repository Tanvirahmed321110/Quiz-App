const questionData = [
    {
        id : 1,
        question : ' What Dose HTML Stand For ?',
        anwser : 'hyper text markup language',
        option : [
            'hyper text markup language',
            'hyper text  language ',
            'Hoper text markup style ',
            'hyper text markup '
        ]
    },
    {
        id : 2,
        question : 'What is mean of css .... ?',
        anwser : 'case cading style sheet',
        option : [
            'case cading style sheet',
            'hyper text  language ',
            'Hoper text markup style ',
            'new css style sheet'
        ]
    },
    {
        id : 3,
        question : 'How many zilla in Bangladesh ?',
        anwser : '64 Zilla in bangladesh',
        option : [
            '68 zilla in bangladesh',
            '8 zilla in bangladesh ',
            '74 zilla in bangladesh',
            '64 Zilla in bangladesh',
        ]
    },
    {
        id : 4,
        question : 'How many village in bangladesh?',
        anwser : '87,223 villages in Bangladesh',
        option : [
            '87,223 villages in Bangladesh',
            '87,123 villages in Bangladesh',
            '89,223 villages in Bangladesh',
            '87,22 villages in Bangladesh'
        ]
    },
    {
        id : 5,
        question : 'what is chat cpt  ?',
        anwser : 'ChatGPT, artificial intelligence',
        option : [
            'Chat gpt is a google',
            'it is a programing langualge',
            'ChatGPT, artificial intelligence',
            'search box '
        ]
    },
]





let startQuizBtn = document.querySelector('.btn-container button');
let exitBtn = document.querySelector('.btn-exit');
let continueBtn = document.querySelector('.btn-continue');
let preBtn = document.getElementById('pre');
let nextBtn = document.querySelector('.btn-next');
let againTryBtn = document.getElementById('again-try-btn')
let exitAppBtn = document.getElementById('exit-app-btn')


const home = document.querySelector(".container-quiz");
const rulesPage = document.querySelector(".app-rules-container");
const questionPage = document.querySelector('.question-container');
const resultPage = document.querySelector('.result-box')

let timeDisplay = document.getElementById("time-second");
let timeLineDisplay =document.getElementById('time-line');


// exit btn
exitAppBtn.addEventListener('click',function(){
    window.location.reload();
});
// again try btn
againTryBtn.addEventListener('click',function(){
    window.location.reload();
})



// start btn
startQuizBtn.onclick =()=>{
    
    rulesPage.style.display='block'
    home.style.display='none';
    audioSucess('audio/mouse-click-153941.mp3')
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
    showQuestion(count);
    startTimerF(15);
    startTimeLineF(0);
    audioSucess('audio/mouse-click-153941.mp3')
}

// pre btn
preBtn.addEventListener('click',()=>{
    questionPage.style.display ='none';
    rulesPage.style.display='block';
})



let count = 0;
let counter;
let counterTimeLine;
let userScore = 0;


// next btn
document.querySelector('.btn-next').addEventListener('click',function(){
    clearInterval(counter);
    clearInterval(counterTimeLine);
    startTimeLineF(0);
    startTimerF(15);
    
    if(count < questionData.length){
        count++;
        showQuestion(count);
        nextBtn.style.display='none'
    }
    else{
        resultPage.classList.add('result-show')
        questionPage.style.display='none';
        showResult()
        audioSucess('audio/notification.mp3',true);
    }
    audioSucess('audio/notification.mp3',false);
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
    pageNumber.innerHTML = `<div class="footer-left">${index+1} of 5 question </div>`;
    
    
    let options = document.querySelectorAll(".option");
    for(const eachOption of options){
        eachOption.addEventListener("click",()=>{
            correctAnsF(eachOption.innerText,eachOption)
        })
    }
}


function correctAnsF (userClick,eachOption){
    let anwser = questionData[count].anwser;
    let userSelected = userClick;
    let optionsContainer = document.querySelector(".options-container");
    let allOptions = optionsContainer.children.length;

    if(userSelected === anwser){
        userScore+=1;
        eachOption.classList.add('correct');
        eachOption.innerHTML =`${eachOption.innerText} <span><i class="fa-solid fa-circle-check"></i></span> `
        audioSucess('audio/sucess.mp3')
    }
    else{
        eachOption.classList.add('wrong');
        eachOption.innerHTML = `${eachOption.innerText}<i class="fa-solid fa-circle-xmark"></i> `;
        for(i=0; i<allOptions; i++){
            if(optionsContainer.children[i].innerText === questionData[count].anwser){
                console.log( questionData[i].anwser)
                optionsContainer.children[i].innerHTML =`${optionsContainer.children[i].innerText} <span><i class="fa-solid fa-circle-check"></i></span> `;
                optionsContainer.children[i].setAttribute('class','option correct');
            }
            audioSucess('audio/wrong ans.mp3')
        }
    }
    
    for(let i=0; i<allOptions; i++){
        optionsContainer.children[i].classList.add('disable');
        nextBtn.style.display='block'
    }
    
    // clear timer and timer line
    clearInterval(counter)
    clearInterval(counterTimeLine)
}




// show result 
function showResult (){
    let scoreTag = document.getElementById('score');
    if(userScore>=4){
        scoreTag.innerHTML =`Welcome👍 You Got <span> ${userScore} </span> Out Of <span id="totalQuestion">${questionData.length}</span>`
    }
    else{
        scoreTag.innerHTML =`Not Good😥 You Got <span> ${userScore} </span> Out Of <span id="totalQuestion">${questionData.length}</span>`
    }
    
}




// devloper details
document.getElementById('developer-details').addEventListener('click',()=>{
    audioSucess('audio/going.mp3',false)
})


// audio add
function audioSucess(name,loop){
    let audio = new Audio(name);
    audio.loop = loop;
    audio.play();
}


function startTimerF(time){
    counter = setInterval(timer,1000);
    function timer(){
        timeDisplay.textContent = time;
        time--;
        if(time<9){
            timeDisplay.textContent='0'+timeDisplay.textContent
        }
        if(time<0){
            timeDisplay.innerText='00'
        }
    }
}



function startTimeLineF(time){
    counterTimeLine = setInterval(timer,47);
    function timer(){
        time = time+1;
        timeLineDisplay.style.width = time+'px';
        if(time>337){
            clearInterval(counterTimeLine)
        }
    }
}