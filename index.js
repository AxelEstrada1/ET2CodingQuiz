let timer = 90

let timerId = setInterval(function () {

    timer -= 1;
    console.log(timer);

}, 1000)

let questions = [
    { question: "Which pokemon does Ash get at the start of pokemon?", answers: ["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: "pikachu" },
    { question: "Which pokemon deals fire damage?", answers: ["charmander", "squirtle", "bulbasaur", "pikachu"], correctAnswer: "charmander" }
]

let currentQuestion = 0

function rendeQuestion() {
    console.log(questions[currentQuestion].question)
    console.log(questions[currentQuestion].answers[0])
    console.log(questions[currentQuestion].answers[1])
    console.log(questions[currentQuestion].answers[2])
    console.log(questions[currentQuestion].answers[3])
    console.log(questions[currentQuestion].correctAnswer)
}