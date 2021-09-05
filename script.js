var questionsArea = document.querySelector("#questions-area");
var timer = 60;
var start = document.querySelector("#start-btn");
var highScore = document.querySelector("#high-score-btn");
var score = 0;
var timerEl = document.getElementById("#timer");
// var startEl = document.getElementById("#start-btn")

var quizQuestions = [
    {
        question: "In Javascript, what does 'var' do?",
        answers: ["Declare a variable", "Call a variety", "Label a section", "Randomize a function"],
        correctAnswer: "Declare a variable",
      },
      {
        question: "What is the purpose of a function",
        answers: ["Perform a specific task", "Make life complicate", "Call upon a variable", "Design and HTML element"],
        correctAnswer: "Perform a specific task",
      },
      {
        question: "What HTML element would you use to provide a navigational aid on a page?",
        answers: ["<header>", "<title>", "<main>", "<head>"],
        correctAnswer: "<header>",
      },
      {
        question: "How would you select 'id = part1' in CSS?",
        answers: ["#part1", ".part1", "(part1)", "'part1'"],
        correctAnswer: "#part1",
      },
];

// Create timer function
function setTimer () {
  var interval = setInterval(function() {
      timer--;
      clock.textContent = timer;

    if (timer === 0) {
          clearInterval(interval);
          sendMessage();
      }
      
      if (timer == 0) {
          timer = 60
      }

  }, 1000);
}

// Save score in client function

var currentQuestionIndex = 0;

// Function to start the game
function startGame() {
  questionsArea.innerHTML = "";
  var question = questions[currentQuestionIndex];
  var questionTitle = document.createElement("h1");
  questionTitle.textContent = question.question;
  questionsArea.appendChild(questionTitle);

  for (var i = 0; i < question.answers.length; i++) {
    var questionAnswer = document.createElement("p");
    questionAnswer.textContent = question.answers[i];
    questionsContainer.appendChild(questionAnswer);
  }
  currentQuestionIndex++;
}

start.addEventListener("click", startGame);





// Start the game when the start button is clicked

// function startTime () {
    
// }

