const dashboardScreen = document.querySelector('#dashboard-screen');
const quizScreen = document.querySelector('#quiz-screen');
const resultScreen = document.querySelector('#result-screen');
let currentQuestions = [];
let currentQuestionIndex = 0;
const nextBtn = document.querySelector('#next-btn');
let score =  0;

const categoryGrid =  document.querySelector('.category-grid');
const scoreCount = document.querySelector('#score-count');
const totalQuestion = document.querySelector('#total-question');

let backToHome = document.querySelector('#home-btn');

//Dashboard 
function initDashboard(){

    categoryGrid.innerHTML = '';

    categories.forEach(category => {

        const card = document.createElement('div');
        card.classList.add('card');
        card.innerHTML = `
        <div>${category.icon}</div>
        <div>${category.name}</div>
        `;

        card.addEventListener('click' , () => {
            startQuiz(category.id);
        })

        categoryGrid.appendChild(card);
    });

    
}


//Subject transition 
function startQuiz(categoryID){
        dashboardScreen.classList.remove('active');
        dashboardScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        quizScreen.classList.add('active');

        currentQuestionIndex = 0;//As when u click any subject on dashboard you want yr question number freshly start from 0  index. 
        score = 0;

        currentQuestions = questionBank.filter((x) => {
           return x.categoryId === categoryID;
        } )

        console.log(currentQuestions);

        showQuestion();
        
    }
//Print Question on Web 

const questionText = document.querySelector('#question-text');
const optionsContainer = document.querySelector('#options-container');



function showQuestion(){

    let question =  currentQuestions[currentQuestionIndex];
    questionText.innerText = question.question;

    optionsContainer.innerHTML = '';

    question.options.forEach( (x,index) => {
        let button =  document.createElement('button');
        button.classList.add('option-button');
        button.innerHTML = x;
        button.addEventListener('click' , () => {
            if(index === question.correct){
                    button.classList.add('correct');
                    let options = optionsContainer.querySelectorAll('button');

                    options.forEach(btn => {
                     btn.disabled = true;
                    });

                    score++;
            }
            else{
                button.classList.add('wrong');
                  let options = optionsContainer.querySelectorAll('button');

                    options.forEach(btn => {
                     btn.disabled = true;
                    });
            }

            nextBtn.classList.remove('hidden');
            nextBtn.classList.add('active');
        })
        optionsContainer.appendChild(button);
    })
}

nextBtn.addEventListener('click' , function(){
    currentQuestionIndex++;
   

    if(currentQuestionIndex < currentQuestions.length){
        showQuestion();
        nextBtn.classList.add('hidden');
    }
    else{
    quizScreen.classList.remove('active');
    quizScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');
    resultScreen.classList.add('active');
    scoreCount.innerText = score;
    totalQuestion.innerText = currentQuestions.length;
    
    }
})

backToHome.addEventListener('click'  , function(){
    resultScreen.classList.remove('active');
    resultScreen.classList.add('hidden');
    dashboardScreen.classList.remove('hidden');
    dashboardScreen.classList.add('active');
    
})


initDashboard();