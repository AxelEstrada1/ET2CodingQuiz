let startQuizB = document.querySelector("#startQuiz")
let quizDiv = document.querySelector("#quiz");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let timeE1 = document.querySelector("#timer");
let correctAnswer = document.querySelector("#correctAnswer")
let highScore = document.querySelector("#highScore")
let highScoreInput = document.querySelector("#highScoreInput")
let timerInput = document.querySelector("#timerInput")
let highScorePage = document.querySelector("#highScorePage")
let enter = document.querySelector("#enter")
let submitInitials = document.querySelector("#submitInitials")
let highScores = JSON.parse(localStorage.getItem("highScores")) || []
let ul = document.querySelector(".showScores")
let timer = 120
let timerID;
highScores.textContent = ("highScores")


// Displays High Score page
highScore.addEventListener("click", function(){
    startQuizB.classList.add("hide")
    highScorePage.classList.remove("hide")
    highScore.classList.add("hide")
    highScoreInput.classList.add("hide")
})
// Putting your time on the page when you submit it
enter.addEventListener("click", function(){
    timerInput.textContent = "Your score is: " +timer
})
// Return to quiz Start
highScorePage.addEventListener("click", function(){
    
    highScorePage.classList.add("hide")
    startQuizB.classList.remove("hide")
    highScore.classList.remove("hide")
    highScoreInput.classList.add("hide")
    
})

// Starts the quiz
startQuizB.addEventListener("click", function(){
    
    quizDiv.classList.remove("hide")
    startQuizB.classList.add("hide")
    startTimer();
    
    
})

// Submitting the initials and score to the high score page
enter.addEventListener("click", function (event){
    event.preventDefault();
    let playerScore = {
        initials: submitInitials.value,
        timer: timer,
    }
    highScores.push(playerScore)
    localStorage.setItem("highScores", JSON.stringify(highScores));
    renderScore();
    
    
})

function renderScore(){
    
    
    for (let i = 0; i < highScores.length; i++) {
        
        let liScore = document.createElement("li");

        liScore.textContent = highScores[i].initials + "-" + highScores[i].timer


        ul.appendChild(liScore)
         
    }

}




// timer and score 
function startTimer(){
    
    timeE1.textContent = timer;

    timerID = setInterval(function(){
    
        timer -=1
        timeE1.textContent = timer;

        if (timer <= 0 || currentQuestion === questions.length){
            
            clearInterval(timerID);
            endQuiz();
            timer.textContent = timerInput
            
    
        }
        
    
    }, 1000)
}

// question object to display
let questions = [{question: "What kind of fish is Nemo?" , answers: ["Bass" , "Clownfish" , "Goldfish" , "Flounder"], correctAnswer: "Clownfish" },
                {question: "Who lives in a pineapple under the sea?" , answers: ["Spongebob" , "Patrick" , "Squidward" , "Sandy"], correctAnswer: "Spongebob" },
                {question: "Who is Ariel's best friend in The Little Mermaid?" , answers: ["Sebastian" , "Ursula" , "Flounder" , "Scuttle"], correctAnswer: "Flounder" },
                {question: "What is the name of the princess in Shrek?" , answers: ["Daisy" , "Peach" , "Ariel" , "Fiona"], correctAnswer: "Fiona" },
                {question: "What character in Aladdin is blue?" , answers: ["Jafar" , "The Genie" , "Iago" , "Abu"], correctAnswer: "The Genie" },
                {question: "What does Olaf like?" , answers: ["Ice Cubes" , "The Beach" , "Hot Dogs" , "Warm Hugs"], correctAnswer: "Warm Hugs"},
                {question: "What is the name of Ana's sister in Frozen?" , answers: ["Holly" , "Bella" , "Elsa" , "May"], correctAnswer: "Elsa" },
                {question: "What kind of animal is Simba?" , answers: ["Lion" , "Jaguar" , "Monkey" , "Bird"], correctAnswer: "Lion" },
                {question: "What is Shrek?" , answers: ["A Princess" , "An Ogre" , "A King" , "A Horse"], correctAnswer: "An Ogre"},
                {question: "What is the name of a small green monster with one eye in Monsters Inc?" , answers: ["Cyclops" , "Ron" , "Sulley" , "Mike"], correctAnswer: "Mike" },

]
//Variables and putting calling the function to display the questions
currentQuestion = 0
renderQuestion();

// Renders the questions and answer choices onto the page
function renderQuestion(){
    
    question.textContent = questions[currentQuestion].question
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1];
    questionButton3.textContent = questions[currentQuestion].answers[2];
    questionButton4.textContent = questions[currentQuestion].answers[3];
    if (currentQuestion === questions.length - 1){
        endQuiz()
    }
}


// Puts the questions on page
quizDiv.addEventListener("click" , function(event){
    let eventEl = event.target
    
    if(eventEl.matches("button")){
        if (eventEl.innerText === questions[currentQuestion].correctAnswer){
            correctAnswer.textContent =  "Correct Answer: " + questions[currentQuestion].correctAnswer; 
            
        }
        else {
            correctAnswer.textContent =  "Wrong Answer"
            timer -= 10;

        }

        currentQuestion++
        renderQuestion();
    }
    
    
})
    // Ends the quiz if time runs out or if you answer the last question
    function endQuiz() {

        quizDiv.classList.add("hide")
        highScoreInput.classList.remove("hide")
        highScorePage.classList.add("hide")
    }