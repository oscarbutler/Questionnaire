
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

const data = [
    {
      'question': 'What is the worlds smallest country?',
      'answers': ['Monaco', 'Vatican City', 'Georgia', 'San Marino'],
      'correct': 'Vatican City'
    },
    {
      'question': '2 question',
      'answers': ['q', 'eq', 'ew', 'ee'],
      'correct': 'q'
    },
  ]
  
  data[0]