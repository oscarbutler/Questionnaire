
const questionsContainer = document.getElementById('questions');

const resultsContainer = document.getElementById('results');

const submitContainer = document.getElementById('submit');

function buildQuestions(){}

function showResults(){}

buildQuestions();

let firstCheckAnswer = document.getElementsById("first-checkAnswer");

first-checkAnswer.addEventListener('click', function () {
    if (this.getAttribute ("data-type") === "Vatican City"){
        checkAnswer();
    } else {
        let gameType = this.getAttribute("data-type");
        runGame(gameType);  
    }
})

function checkAnswer(){

}
