const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
const welcomeElement = document.getElementById('Welcome')
const welcomeElement1 = document.getElementById('Welcome1')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
  currentQuestionIndex++
  setNextQuestion()
})

function startGame() {
  startButton.classList.add('hide')
  welcomeElement.classList.add('hide')
  welcomeElement1.classList.add('hide')
  shuffledQuestions = questions
  currentQuestionIndex = 0
  questionContainerElement.classList.remove('hide')
  setNextQuestion()
}

function setNextQuestion() {
  resetState()
  showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
  questionElement.innerText = question.question
  question.answers.forEach(answer => {
    const button = document.createElement('button')
    button.innerText = answer.text
    button.classList.add('btn')
    if (answer.correct) {
      button.dataset.correct = answer.correct
    }
    button.addEventListener('click', selectAnswer)
    answerButtonsElement.appendChild(button)
  })
}

function resetState() {
  clearStatusClass(document.body)
  nextButton.classList.add('hide')
  while (answerButtonsElement.firstChild) {
    answerButtonsElement.removeChild(answerButtonsElement.firstChild)
  }
}

function selectAnswer(e) {
  const selectedButton = e.target
  const correct = selectedButton.dataset.correct
  setStatusClass(document.body, correct)
  Array.from(answerButtonsElement.children).forEach(button => {
    setStatusClass(button, button.dataset.correct)
  })
  if (shuffledQuestions.length > currentQuestionIndex + 1) {
    nextButton.classList.remove('hide')
  } else {
    startButton.innerText = 'Restart'
    startButton.classList.remove('hide')
  }
}

function setStatusClass(element, correct) {
  clearStatusClass(element)
  if (correct) {
    element.classList.add('correct')
  } else {
    element.classList.add('wrong')
  }
}

function clearStatusClass(element) {
  element.classList.remove('correct')
  element.classList.remove('wrong')
}

const questions = [
  {
    question: "Which one of these isn't hardware:",
    answers: [
      { text: 'Microsoft Windows', correct: true },
      { text: 'Case', correct: false },
      { text: 'Motherboard ', correct: false },
      { text: 'Font', correct: false }
    ]
  },
  {
    question: 'The html is a language of:',
    answers: [
      { text: 'programming', correct: false },
      { text: 'Appointment', correct: true },
      { text: 'style', correct: false },
      { text: 'Voice', correct: false }
    ]
  },
  {
    question: 'An IDE is:',
    answers: [
      { text: 'Where you can program', correct: true },
      { text: 'A music App', correct: false },
      { text: 'A game', correct: false },
      { text: 'A good guy', correct: false }
    ]
  },
  {
    question: 'The correct extension to save a javascript code is:',
    answers: [
      { text: '.css', correct: false },
      { text: '.js', correct: true }
    ]
  },
  {
    question: 'Which of the following variables only accepts full numbers?',
    answers: [
      { text: 'String', correct: false },
      { text: 'Boolean', correct: false },
      { text: 'Double', correct: false },
      { text: 'Integer', correct: true }
    ]
  },
  {
    question: 'There are how many normal forms in the database?',
    answers: [
      { text: '1', correct: false },
      { text: '2', correct: false },
      { text: '3', correct: true },
      { text: '4', correct: false }
    ]
  },
  {
    question: 'Which the oldest programming language:',
    answers: [
      { text: 'Fortran', correct: true },
      { text: 'Assemply', correct: false },
      { text: 'C', correct: false },
      { text: 'Python', correct: false }
    ]
  },
  {
    question: 'Who the women below created the first algotithm to be processed on a machine',
    answers: [
      { text: 'Artemista Gentileschi', correct: false },
      { text: 'Marie Curie', correct: false },
      { text: 'Hillary Byss', correct: false },
      { text: 'Ada Lovelace', correct: true }
    ]
  },
  {
    question: 'Which of the following computers was the first to be created',
    answers: [
      { text: 'ENIAC', correct: false },
      { text: 'IBM-1620', correct: false },
      { text: 'TDC-316', correct: false },
      { text: 'hp-1940', correct: false }
    ]
  },
  {
    question: 'Who created the first web browser',
    answers: [
      { text: 'Tim Berners-lee', correct: true },
      { text: 'Dave Hyatt', correct: false },
      { text: 'Larry Page', correct: false },
      { text: 'Boolean', correct: false }
    ]
  },
  {
    question: 'What are the main kinds of relationships between entities? N for 1 , Maximum and Minimum, 1 for Maximum.',
    answers: [
      { text: 'N to N, 1 to 1, 1 to N.', correct: true },
      { text: '1 for Many, 1 for All, 1 for 1', correct: false }
    ]
  },
  {
    question: 'Consider the following command "select * from clients; ". What will be returned',
    answers: [
      { text: 'Displays all table data', correct: true },
      { text: 'List of which are the columns of the customer table', correct: false },
      { text: 'Displays all data for all columns of the customer table', correct: false },
      { text: 'none of the alternatives', correct: false }
    ]
  }
]