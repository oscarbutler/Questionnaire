
const questionsContainer = document.getElementById('questions');

const resultsContainer = document.getElementById('results');

const submitContainer = document.getElementById('submit');

function buildQuestions(){}

function showResults(){}

buildQuestions();

let questions = document.getElementsByTagName("first-answer");

first-checkAnswer.addEventListener('click', function () {
    if (this.getAttribute ("data-type") === "Vatican City"){
        checkAnswer();
    } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);
    }
})

