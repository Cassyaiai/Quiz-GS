const $startGameButton = document.querySelector(".start-quiz")
const $nextQuestionButton = document.querySelector(".next-question")
const $questionsContainer = document.querySelector(".questions-container")
const $questionText = document.querySelector(".question")
const $answersContainer = document.querySelector(".answers-container")
const $answers = document.querySelectorAll(".answer")

let currentQuestionIndex = 0
let totalCorrect = 0

$startGameButton.addEventListener("click", startGame)
$nextQuestionButton.addEventListener("click", displayNextQuestion)

function startGame() {
  $startGameButton.classList.add("hide")
  $questionsContainer.classList.remove("hide")
  displayNextQuestion()
}

function displayNextQuestion() {
  resetState()
  
  if (questions.length === currentQuestionIndex) {
    return finishGame()
  }

  $questionText.textContent = questions[currentQuestionIndex].question
  questions[currentQuestionIndex].answers.forEach(answer => {
    const newAsnwer = document.createElement("button")
    newAsnwer.classList.add("button", "answer")
    newAsnwer.textContent = answer.text
    if (answer.correct) {
      newAsnwer.dataset.correct = answer.correct
    }
    $answersContainer.appendChild(newAsnwer)

    newAsnwer.addEventListener("click", selectAnswer)
  })
}

function resetState() {
  while($answersContainer.firstChild) {
    $answersContainer.removeChild($answersContainer.firstChild)
  }

  document.body.removeAttribute("class")
  $nextQuestionButton.classList.add("hide")
}

function selectAnswer(event) {
  const answerClicked = event.target

  if (answerClicked.dataset.correct) {
    document.body.classList.add("correct")
    totalCorrect++
  } else {
    document.body.classList.add("incorrect") 
  }

  document.querySelectorAll(".answer").forEach(button => {
    button.disabled = true

    if (button.dataset.correct) {
      button.classList.add("correct")
    } else {
      button.classList.add("incorrect")
    }
  })
  
  $nextQuestionButton.classList.remove("hide")
  currentQuestionIndex++
}

function finishGame() {
  const totalQuestions = questions.length
  const performance = Math.floor(totalCorrect * 100 / totalQuestions)
  
  let message = ""

  switch (true) {
    case (performance >= 90):
      message = "Excelente :)"
      break
    case (performance >= 70):
      message = "Muito bom :)"
      break
    case (performance >= 50):
      message = "Tá na média!"
      break
    default:
      message = "Pode melhorar :("
  }

  $questionsContainer.innerHTML = 
  `
    <p class="final-message">
      Você acertou ${totalCorrect} de ${totalQuestions} questões!
      <span>Resultado: ${message}</span>
    </p>
    <button 
      onclick=window.location.reload() 
      class="button"
    >
      Refazer teste
    </button>
  `
}


const questions = [
  {
    question: "1.Qual destes países realizou o primeiro casamento gay na história da América Latina?",
    answers: [
      { text: "México", correct: false },
      { text: "Colômbia", correct: false },
      { text: "Argentina", correct: true },
      { text: "Uruguai", correct: false }
    ]
  },
  {
    question: "2.Qual destas séries infantis teve o primeiro casal lésbico assumido em um episódio?",
    answers: [
      { text: "Steven Universo", correct: true },
      { text: "My Little Pony", correct: false },
      { text: "Bob Esponja", correct: false },
      { text: "Hora de Aventura", correct: false }
    ]
  },
  {
    question: "3.Qual destes animais pode mudar de gênero naturalmente?",
    answers: [
      { text: "Peixe-Palhaço", correct: true },
      { text: "Pinguim", correct: false },
      { text: "Tubarão-Martelo", correct: false },
      { text: "Nenhuma das alternativas", correct: false }
    ]
  },
  {
    question: "Cuba possui um dia que é feriado nacional dedicado ao orgulho LGBTQIA+",
    answers: [
      { text: "Falso", correct: false },
      { text: "Verdadeiro", correct: true }
    ]
  },
  {
    question: "Qual destes documentos brasileiros já permite o uso do nome social?",
    answers: [
      { text: "Titulo de eleitor", correct: false },
      { text: "RG", correct: false },
      { text: "CNH", correct: false },
      { text: "Todas alternativas", correct: true }
    ]
  },
  {
    question: "Qual dessas novelas da Globo teve o primeiro beijo gay no horário nobre?",
    answers: [
      { text: "América - 2005", correct: false },
      { text: "Amor à Vida - 2013", correct: true },
      { text: "A Força do Querer - 2017", correct: false },
      { text: "Malhação - 2000", correct: false }
    ]
  },
  {
    question: '7.Como podemos chamar uma função chamada "minhaFuncao"?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
   {
    question: '8.blasvlslsl?',
    answers: [
      { text: 'call minhaFuncao()', correct: false },
      { text: 'call function minhaFuncao()', correct: false },
      { text: 'Nenhum desses códigos chamaria essa função', correct: false },
      { text: 'minhaFuncao()', correct: true },
    ]
  },
   {
    question: '9.O arquivo JavaScript externo deve conter a tag <script>',
    answers: [
      { text: "Verdadeiro", correct: false },
      { text: "Falso", correct: true }
    ]
  },
    {
    question: "10.Qual destes países realizou o primeiro casamento gay na história da América Latina?",
    answers: [
      { text: "México", correct: false },
      { text: "Colômbia", correct: false },
      { text: "Argentina", correct: true },
      { text: "Uruguai", correct: false }
    ]
  },
]