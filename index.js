
let quizDiv = document.querySelector("#quiz");
let questionText = document.querySelector("#question");
let questionButton1 = document.querySelector("#answer1");
let questionButton2 = document.querySelector("#answer2");
let questionButton3 = document.querySelector("#answer3");
let questionButton4 = document.querySelector("#answer4");
let timer = 90;
let timerDisplay = document.querySelector("#timer");

let timerId = setInterval(function () {

    timer -= 1;
    console.log(timer);

}, 1000)

renderTime();

let questions = [
    { question: "Which pokemon does Ash get at the start of pokemon?", answers: ["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: "pikachu" },
    { question: "Which pokemon deals fire damage?", answers: ["squirtle", "charmander", "pikachu", "bulbasaur"], correctAnswer: "charmander" },
    { question: "Which pokemon deals water damage?", answers: ["pikachu", "squirtle", "bulbasaur", "charmander"], correctAnswer: "squirtle" },
    { question: "Which pokemon deals grass damage?", answers: ["bulbasaur", "pikachu", "charmander", "squirtle"], correctAnswer: "bulbasaur" }
]

let currentQuestion = 0

renderQuestion();

function renderQuestion() {
    console.log(questions[currentQuestion].question)
    questionButton1.textContent = questions[currentQuestion].answers[0];
    questionButton2.textContent = questions[currentQuestion].answers[1]
    questionButton3.textContent = questions[currentQuestion].answers[2]
    questionButton4.textContent = questions[currentQuestion].answers[3]
    console.log("correct answer:" + questions[currentQuestion].correctAnswer)
}

quizDiv.addEventListener("click", function (event) {

    if (event.target.matches("button")) {
        console.log("clicked");
        console.log("value:" + event.target.innerText)
        console.log("correct answer:" + questions[currentQuestion].correctAnswer)

        currentQuestion++
        renderQuestion();
    }
})