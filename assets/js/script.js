
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
      'question': 'Who won the 2022 World Cup?',
      'answers': ['France', 'Germany', 'Argentina', 'England'],
      'correct': 'Argentina'
    },
    {
      '': 'When did World War 2 end?',
      'answers': ['1945', '1943', '1951', '1947'],
      'correct': '1945'
    },
    {
      'question': 'What continent has the highest population',
      'answers': ['North America', 'Africa', 'Europe', 'Asia'],
      'correct': 'Asia'
    },
  ]
  
  data[0]