/*Variables*/
const questionsElement = document.createElement('div');

questionsElement.setAttribute('id', 'answers-container');
const questionText = document.getElementById('question')

console.log(questionText)

document.body.appendChild(questionsElement)

const results = document.getElementById('score');

let currentQuestionIndex = 0;

let scores = 0;

let correctCount = 0;

let incorrectCount = 0;

let currentQuestion = [currentQuestionIndex];

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
    'question': 'How many states are in America?',
    'answers': ['48', '51', '50', '49'],
    'correct': '50'
  },
  {
    'question': 'What is the largest building in the World?',
    'answers': ['Empire States Building', 'Burj Khalifa', 'Eiffel Tower', 'Big Ben'],
    'correct': 'Burj Khalifa'
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

const nextButton = document.createElement('button');
nextButton.textContent = 'Next Question';
nextButton.disabled = true;
document.body.appendChild(nextButton);

/*Shows the question in the web page*/
function showQuestion() {
  const currentQuestion = data[currentQuestionIndex];
  console.log(currentQuestion.question);
  questionText.innerHTML = currentQuestion.question;

   currentQuestion.answers.forEach((answer, index) => {
    const choice = document.createElement('button');
    choice.textContent = answer;
    const correct = currentQuestion.correct;
    chosenAnswer = choice.textContent;
    choice.addEventListener('click', () => checkAnswer(
      choice.textContent, correct
    ));
    questionsElement.appendChild(choice);
  });

}


/*Randomises the data information*/
function randomiseQuestion() {
  let randomdata = data[Math.floor(Math.random() * data.length)]
}


/*Add Correct Score*/
function incrementScore() {
  let score = parseInt(document.getElementById("correct").innerText);
  document.getElementById("correct").innerText = ++correctCount;
}

/*Add Incorrect Score*/
function incrementWrongScore() {
  let score = parseInt(document.getElementById("incorrect").innerText);
  document.getElementById("incorrect").innerText = ++incorrectCount;
}

/*Checks if the answer is correct*/
function checkAnswer() {
  let isCorrect = currentQuestion.answers === currentQuestion.correct;
  if (isCorrect) {
    incrementScore();
  } else {
    alert(`This is incorrect, the correct answer is ${currentQuestion.answer}`);
    incrementWrongScore();
  }
nextButton.disabled = false;
} 


/*Shows the results as the end of the quiz*/
function showAnswer() { 
  questionsElement.textContent = `You have completed the quiz. Your score is ${correctCount} out of ${incorrectCount}.`

}

showQuestion();
