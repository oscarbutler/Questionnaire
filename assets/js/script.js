
const questionsContainer = document.getElementById('questions');

const resultsContainer = document.getElementById('results');

const submitContainer = document.getElementById('submit');

function buildQuestions(){}

function showResults(){}

buildQuestions();

let button = document.getElementsByTagName("button");

button.addEventListener('click', function () {
    if (this.getAttribute ("data-type") === "submit"){
        checkAnswer();
    } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
    }
})

