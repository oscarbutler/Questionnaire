const questionsElement = document.getElementById('question');

const results = document.getElementById('score');

const currentQuestionIndex = 0;

let score = 0;

let correctCount = 0;

let incorrectCount = 0;


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

const nextButton = document.createElement('button');
nextButton.textContent = 'Next Question';
document.body.appendChild(nextButton);

function showQuestion(){
  const currentQuestion = data[currentQuestionIndex];
  questionsElement.textContent = currentQuestion.question; 

  currentQuestion.answers.forEach((answer, index) => {  
    const submit = document.createElement('div');
    submit.textContent = answer;
    answer.addEventListener('click', () => checkAnswer(index));
    questionsElement.appendChild(submit)
  })
  
}


function checkAnswer(){

   
}

function showAnswer(){
  questionsElement.textContent = `You have completed the quiz. Your score is ${correctCount} out of ${incorrectCount}.`

}
