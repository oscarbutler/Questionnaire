const questionsContainer = document.getElementsByClassName('questions');

const resultsContainer = document.getElementsByClassName('results');

const submitContainer = document.getElementsByClassName('submit');

const answerContainer =document.getElementsByClassName('answer');

let firstCheckAnswer = document.getElementsByClassName('checkAnswer');

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
    'question': 'When did World War 2 end?',
    'answers': ['1945', '1943', '1951', '1947'],
    'correct': '1945'
  },
  {
    'question': 'What continent has the highest population?',
    'answers': ['North America', 'Africa', 'Europe', 'Asia'],
    'correct': 'Asia'
  },
  {
    'question': '',
    'answers': ['France', 'Germany', 'Argentina', 'England'],
    'correct': 'Argentina'
  },
  {
    'question': 'Who won the 2022 World Cup?',
    'answers': ['France', 'Germany', 'Argentina', 'England'],
    'correct': 'Argentina'
  },
  {
    'question': 'What is the largest mammal in the world?',
    'answers': ['Elephant', 'Blue Whale', 'Giraffe', 'Hippopotamus'],
    'correct': 'Blue Whale'
  },
  {
    'question': 'Which planet is known as the Red Planet?',
    'answers': ['Mars', 'Venus', 'Jupiter', 'Saturn'],
    'correct': 'Mars'
  },
  {
    'question': 'What is the capital of Australia?',
    'answers': ['Brisbane', 'Canberra', 'Sydney', 'Melbourne'],
    'correct': 'Canberra'
  },
  {
    'question': 'What is the largest ocean on Earth?',
    'answers': ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    'correct': 'Pacific Ocean'
  }
]

data[0]

function buildQuestions(){
 
}

function showResults(){


  let numCorrect = 0;
}

let isCorrect = userAnswer === correct[0];
    if (isCorrect) {
      incrementScore();
    } else {
      incrementWrongAnswer();
    }


function checkAnswer(){

    first-checkAnswer.addEventListener('click', function () {
        if (this.getAttribute ("data-type") === "correct"){
            checkAnswer();
        } else {
            let gameType = this.getAttribute("data-type");
            runGame(gameType);  
        }
    })
  }
  
    

function runGame(gameType){
let question = Math.floor(Math.random() * data.length)
const questionData = data[question];
}